import options from "../../../content/coaching.json" with { type: "json" };

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host") || new URL(request.url).host;
  if (origin && (!URL.canParse(origin) || new URL(origin).host !== host || !["https:", "http:"].includes(new URL(origin).protocol))) {
    return Response.json({ error: "Please submit this form from the booking page." }, { status: 403 });
  }

  let fields: Record<string, unknown>;
  try {
    const body = await request.text();
    if (body.length > 4096) return Response.json({ error: "Submission is too large." }, { status: 413 });
    const parsed: unknown = JSON.parse(body);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid fields");
    fields = parsed as Record<string, unknown>;
  } catch {
    return Response.json({ error: "Please enter your name, phone number, and email." }, { status: 400 });
  }

  const firstName = typeof fields.firstName === "string" ? fields.firstName.trim() : "";
  const lastName = typeof fields.lastName === "string" ? fields.lastName.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const confirmEmail = typeof fields.confirmEmail === "string" ? fields.confirmEmail.trim() : "";
  const phone = typeof fields.phone === "string" ? fields.phone.trim() : "";
  if (!firstName || firstName.length > 80 || !lastName || lastName.length > 80 || !phone || phone.length > 40 || !/^[+\d\s().-]+$/.test(phone) || phone.replace(/\D/g, "").length < 7 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please enter your first and last name, a valid phone number, and a valid email address." }, { status: 400 });
  }
  if (email.toLowerCase() !== confirmEmail.toLowerCase()) {
    return Response.json({ error: "Your email addresses must match." }, { status: 400 });
  }
  const areas = fields.areas;
  if (!Array.isArray(areas) || areas.length < 1 || areas.length > 3 || new Set(areas).size !== areas.length || areas.some((area) => typeof area !== "string" || !options.areas.includes(area))) {
    return Response.json({ error: "Please choose between one and three coaching areas." }, { status: 400 });
  }
  const financialReadiness = fields.financialReadiness;
  if (typeof financialReadiness !== "string" || !options.readiness.includes(financialReadiness)) {
    return Response.json({ error: "Please select your financial readiness." }, { status: 400 });
  }
  const endpoint = "https://formspree.io/f/xkjolqlv";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name: `${firstName} ${lastName}`, firstName, lastName, phone, email, areas, financialReadiness, source: "Coaching and therapy enquiry" }),
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
