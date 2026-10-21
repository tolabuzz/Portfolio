import assert from "node:assert/strict";
import test from "node:test";
import { POST } from "../src/app/api/strategy-call/route.ts";

test("strategy enquiries validate details and use their dedicated Formspree form", async (t) => {
  const valid = { name: " Test Visitor ", email: " visitor@example.com ", phone: " +234 800 000 0000 ", message: " Help with strategy " };
  const request = (body, origin = "https://portfolio.test") => new Request("https://portfolio.test/api/strategy-call", {
    method: "POST", headers: { origin }, body: JSON.stringify(body),
  });
  const deliver = t.mock.method(globalThis, "fetch", async (url, options) => {
    assert.equal(url, "https://formspree.io/f/mdearwbr");
    assert.deepEqual(JSON.parse(options.body), {
      name: "Test Visitor", email: "visitor@example.com", phone: "+234 800 000 0000", message: "Help with strategy", source: "Strategy call enquiry",
    });
    return Response.json({ ok: true });
  });
  t.after(() => t.mock.restoreAll());

  assert.equal((await POST(request(valid, "https://other.test"))).status, 403);
  for (const body of [null, [], { ...valid, name: " " }, { ...valid, email: "bad" }, { ...valid, phone: "" }, { ...valid, phone: "abcdefg" }, { ...valid, message: " " }, { ...valid, message: "x".repeat(2001) }]) {
    assert.equal((await POST(request(body))).status, 400);
  }
  assert.equal(deliver.mock.callCount(), 0);
  const response = await POST(request(valid));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(deliver.mock.callCount(), 1);
  for (const response of [Response.json({}, { status: 429 }), Response.json({ ok: false })]) {
    deliver.mock.mockImplementation(async () => response);
    assert.equal((await POST(request(valid))).status, 502);
  }
  deliver.mock.mockImplementation(async () => { throw new Error("Network failure"); });
  assert.equal((await POST(request(valid))).status, 502);
});
