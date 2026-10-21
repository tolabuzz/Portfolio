import assert from "node:assert/strict";
import test from "node:test";
import { POST } from "../src/app/api/coaching-call/route.ts";

test("coaching enquiries validate details and use their dedicated Formspree form", async (t) => {
  const valid = { firstName: " Test ", lastName: " Visitor ", email: " visitor@example.com ", confirmEmail: "visitor@example.com", phone: " +234 800 000 0000 ", areas: ["Emotional and Mental Health"], financialReadiness: "Yes" };
  const request = (body, origin = "https://portfolio.test") => new Request("https://portfolio.test/api/coaching-call", {
    method: "POST", headers: { origin }, body: JSON.stringify(body),
  });
  let expectedAreas = valid.areas;
  let expectedReadiness = valid.financialReadiness;
  const deliver = t.mock.method(globalThis, "fetch", async (url, options) => {
    assert.equal(url, "https://formspree.io/f/xkjolqlv");
    assert.deepEqual(JSON.parse(options.body), {
      name: "Test Visitor", firstName: "Test", lastName: "Visitor", email: "visitor@example.com", phone: "+234 800 000 0000", areas: expectedAreas, financialReadiness: expectedReadiness, source: "Coaching and therapy enquiry",
    });
    return Response.json({ ok: true });
  });
  t.after(() => t.mock.restoreAll());

  assert.equal((await POST(request(valid, "https://other.test"))).status, 403);
  for (const body of [null, [], { ...valid, firstName: " " }, { ...valid, lastName: "" }, { ...valid, email: "bad" }, { ...valid, confirmEmail: "other@example.com" }, { ...valid, phone: "" }, { ...valid, phone: "abcdefg" }, { ...valid, areas: [] }, { ...valid, areas: ["unknown"] }, { ...valid, areas: Array(4).fill("Emotional and Mental Health") }, { ...valid, areas: Array(2).fill("Emotional and Mental Health") }, { ...valid, financialReadiness: "" }]) {
    assert.equal((await POST(request(body))).status, 400);
  }
  assert.equal(deliver.mock.callCount(), 0);
  const response = await POST(request(valid));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(deliver.mock.callCount(), 1);
  expectedAreas = ["Dating, Relationships and Marriage", "Work, Business and Career", "Money and Finances"];
  for (const answer of ["Yes", "No", "I'm not sure"]) {
    expectedReadiness = answer;
    assert.equal((await POST(request({ ...valid, areas: expectedAreas, financialReadiness: answer }))).status, 200);
  }
  for (const response of [Response.json({}, { status: 429 }), Response.json({ ok: false })]) {
    deliver.mock.mockImplementation(async () => response);
    assert.equal((await POST(request(valid))).status, 502);
  }
  deliver.mock.mockImplementation(async () => { throw new Error("Network failure"); });
  assert.equal((await POST(request(valid))).status, 502);
});
