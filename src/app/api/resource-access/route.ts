export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host") || new URL(request.url).host;
  if (origin && (!URL.canParse(origin) || new URL(origin).host !== host || !["https:", "http:"].includes(new URL(origin).protocol))) {
    return Response.json({ error: "Please submit this form from the resources page." }, { status: 403 });
  }

  let fields: Record<string, unknown>;
  try {
    const body = await request.text();
    if (body.length > 4096) return Response.json({ error: "Submission is too large." }, { status: 413 });
    const parsed: unknown = JSON.parse(body);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid fields");
    fields = parsed as Record<string, unknown>;
  } catch {
    return Response.json({ error: "Please enter your name, email, and country." }, { status: 400 });
  }

  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const country = typeof fields.country === "string" ? fields.country.trim() : "";
  if (!name || name.length > 120 || !country || country.length > 100 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please enter your name, a valid email address, and your country." }, { status: 400 });
  }

  const resource = fields.resource;
  if (typeof resource !== "string" || !["living-well", "positive-vibes", "god-wants-you-well"].includes(resource)) {
    return Response.json({ error: "Please choose a valid book." }, { status: 400 });
  }

  // This public form endpoint was supplied by the site owner. Vercel can override it.
  const endpoint = process.env.RESOURCE_FORM_ENDPOINT ?? "https://formspree.io/f/xbgdvzww";
  if (!endpoint || !/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)) {
    return Response.json({ error: "Downloads are temporarily unavailable. Please try again later." }, { status: 503 });
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, country, resource, source: "Website resources" }),
      signal: AbortSignal.timeout(15000),
      redirect: "error",
    });
    if (!response.ok) throw new Error("Submission rejected");
    const result = await response.json();
    if (result.ok !== true) throw new Error("Submission not confirmed");
    return Response.json({ success: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ error: "We couldn’t save your details. Please try again in a moment." }, { status: 502 });
  }
}
