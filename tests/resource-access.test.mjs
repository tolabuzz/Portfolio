import assert from "node:assert/strict";
import test from "node:test";
import resources from "../src/content/resources.json" with { type: "json" };
import { POST } from "../src/app/api/resource-access/route.ts";

test("resource access validates details and unlocks only after confirmed delivery", async (t) => {
  const previousEndpoint = process.env.RESOURCE_FORM_ENDPOINT;
  t.after(() => {
    if (previousEndpoint === undefined) delete process.env.RESOURCE_FORM_ENDPOINT;
    else process.env.RESOURCE_FORM_ENDPOINT = previousEndpoint;
    t.mock.restoreAll();
  });
  const valid = { name: " Test Visitor ", email: " visitor@example.com ", country: " Nigeria ", resource: "living-well" };
  const request = (body, origin = "https://portfolio.test") =>
    new Request("https://portfolio.test/api/resource-access", {
      method: "POST",
      headers: { origin, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  let expectedResource = "living-well";
  const deliver = t.mock.method(globalThis, "fetch", async (url, options) => {
    assert.equal(url, process.env.RESOURCE_FORM_ENDPOINT ?? "https://formspree.io/f/xbgdvzww");
    assert.deepEqual(JSON.parse(options.body), {
      name: "Test Visitor", email: "visitor@example.com", country: "Nigeria", resource: expectedResource, bookTitle: resources.find((book) => book.slug === expectedResource).title, source: "Website resources",
    });
    return Response.json({ ok: true });
  });

  await t.test("rejects cross-origin and malformed submissions without forwarding details", async () => {
    assert.equal((await POST(request(valid, "https://other.test"))).status, 403);
    for (const body of [null, [], { ...valid, name: "   " }, { ...valid, email: "bad" }, { ...valid, country: "" }, { ...valid, resource: "unknown" }, { ...valid, resource: undefined }]) {
      assert.equal((await POST(request(body))).status, 400);
    }
    assert.equal((await POST(request({ ...valid, name: "x".repeat(5000) }))).status, 413);
    assert.equal(deliver.mock.callCount(), 0);
  });

  await t.test("fails closed when the endpoint override is invalid", async () => {
    for (const endpoint of ["", "http://formspree.io/f/testform", "https://other.test/f/testform"]) {
      if (endpoint === undefined) delete process.env.RESOURCE_FORM_ENDPOINT;
      else process.env.RESOURCE_FORM_ENDPOINT = endpoint;
      assert.equal((await POST(request(valid))).status, 503);
    }
    assert.equal(deliver.mock.callCount(), 0);
    const proxiedRequest = new Request("http://localhost:3100/api/resource-access", {
      method: "POST",
      headers: { origin: "https://portfolio.test", host: "portfolio.test" },
      body: JSON.stringify(valid),
    });
    assert.equal((await POST(proxiedRequest)).status, 503);
  });

  await t.test("uses the owner-supplied Formspree endpoint without extra configuration", async () => {
    delete process.env.RESOURCE_FORM_ENDPOINT;
    assert.equal((await POST(request(valid))).status, 200);
    assert.equal(deliver.mock.calls.at(-1).arguments[0], "https://formspree.io/f/xbgdvzww");
  });

  process.env.RESOURCE_FORM_ENDPOINT = "https://formspree.io/f/testform";
  await t.test("forwards trimmed details and returns success after confirmation", async () => {
    const result = await POST(request(valid));
    assert.equal(result.status, 200);
    assert.deepEqual(await result.json(), { success: true });
    assert.equal(result.headers.get("Cache-Control"), "no-store");
    assert.equal(deliver.mock.callCount(), 2);
  });

  await t.test("records the selected book independently for every resource", async () => {
    for (const resource of ["living-well", "i-am", "god-wants-you-well"]) {
      expectedResource = resource;
      assert.equal((await POST(request({ ...valid, resource }))).status, 200);
      assert.equal(JSON.parse(deliver.mock.calls.at(-1).arguments[1].body).resource, resource);
    }
  });

  await t.test("does not unlock on provider rejection, unconfirmed delivery, or network failure", async () => {
    for (const response of [Response.json({}, { status: 429 }), Response.json({ ok: false }), new Response("not JSON")]) {
      deliver.mock.mockImplementation(async () => response);
      assert.equal((await POST(request(valid))).status, 502);
    }
    deliver.mock.mockImplementation(async () => { throw new Error("Network failure"); });
    assert.equal((await POST(request(valid))).status, 502);
  });
});
