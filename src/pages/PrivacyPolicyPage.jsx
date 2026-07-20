import { SubNav, SubFooter, PageHeader, COLORS } from "../PageShell.jsx";

const S = COLORS;

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: S.sand, color: S.charcoal }}>
      <SubNav />
      <PageHeader eyebrow="Legal" title="Privacy Policy" />

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>

          <div style={{
            padding: "20px 24px", marginBottom: 40,
            background: "rgba(196,133,90,.08)", border: "1px solid rgba(196,133,90,.25)",
            borderRadius: 4,
          }}>
            <p style={{ fontSize: ".85rem", color: S.terraDark, lineHeight: 1.7, fontWeight: 500 }}>
              Placeholder content. This page has not been reviewed by a lawyer and should not be
              treated as a binding privacy policy until it is. Replace this section with counsel-reviewed
              language before collecting any personal data through booking forms, payment processing,
              or newsletter sign-ups.
            </p>
          </div>

          {[
            ["What we collect", "When you enquire or book with us, we may collect your name, email address, phone number, nationality, and any information you choose to share about your travel preferences or requirements."],
            ["How we use it", "Your information is used solely to plan, confirm, and deliver your journey — including coordinating with accommodation partners, guides, and the communities you'll visit. We do not sell or rent guest information to third parties."],
            ["Who we share it with", "Limited details (name, dates, dietary or accessibility needs) are shared with our accommodation and experience partners strictly as needed to prepare for your visit."],
            ["Payment information", "Payment processing is handled by our payment provider; we do not store your full card details on our own systems."],
            ["Your rights", "You may request a copy of the information we hold about you, or ask us to delete it, by writing to sushilagarwalbhm@gmail.com."],
            ["Contact", "Questions about this policy can be sent to sushilagarwalbhm@gmail.com."],
          ].map(([title, body], i) => (
            <div key={i} style={{ marginBottom: 32 }}>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontWeight: 500, marginBottom: 8, color: S.charcoal }}>
                {title}
              </h3>
              <p style={{ fontSize: ".9rem", color: S.umber, lineHeight: 1.8, fontWeight: 300 }}>
                {body}
              </p>
            </div>
          ))}

          <p style={{ fontSize: ".78rem", color: "rgba(139,115,85,.6)", marginTop: 40, fontStyle: "italic" }}>
            Last updated: [date to be added once reviewed]
          </p>
        </div>
      </section>

      <SubFooter />
    </div>
  );
}
