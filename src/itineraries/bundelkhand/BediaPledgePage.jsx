import { Heart, Home, HandHeart, ShieldCheck } from "lucide-react";
import { SubNav, SubFooter, PageHeader, COLORS } from "../../PageShell.jsx";

const S = COLORS;

export default function BediaPledgePage() {
  return (
    <div style={{ background: S.sand, color: S.charcoal }}>
      <SubNav />
      <PageHeader
        eyebrow="Our Commitment"
        title="The Bedia Pledge"
        subtitle="A plain statement of how we work with the Bedia community of Lalitpur, and what we owe them in return for welcoming our guests."
      />

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>

          <p style={{ fontSize: "1rem", color: S.umber, lineHeight: 1.9, marginBottom: 40, fontWeight: 300 }}>
            On Day 4 of the journey, every group spends an evening with the Bedia community of
            Lalitpur — sharing a fire-cooked meal, taking part in the farm and household routine,
            and closing the evening with the Rai folk-ballad tradition, a performance art the
            community has carried for generations. This is the emotional centre of the journey.
            It only works if it is done honestly.
          </p>

          {[
            {
              icon: HandHeart, title: "Revenue goes directly to the host family",
              body: "Sixty percent of every community-hosted experience fee is paid directly to the family who welcomes you. This is already built into your package price — there is no separate community surcharge on your invoice. We fund infrastructure and community upgrades ourselves, as and when they are needed, rather than passing that cost to guests as a line item.",
            },
            {
              icon: Home, title: "We invest in the basics first",
              body: "Before any group stays overnight, we ensure the household has functioning, private, hygienic bathroom facilities and reliable water access. Comfort for the host family and for our guests comes before any marketing claim about the experience.",
            },
            {
              icon: ShieldCheck, title: "Consent, always, and ongoing",
              body: "The Bedia community was not simply asked once. Every season, our community liaison returns to reconfirm willingness to host, discuss what is working and what isn't, and make changes based on what the family tells us — not what we assume they want.",
            },
            {
              icon: Heart, title: "The Rai tradition is presented as art, not spectacle",
              body: "The Rai folk-ballad performance is a genuine cultural tradition, not a staged show assembled for tourists. Our guides are briefed to introduce it with real context — its history and meaning within the Bedia community — rather than treat it as background entertainment.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} style={{ display: "flex", gap: 20, marginBottom: 36 }}>
                <div style={{
                  flexShrink: 0, width: 44, height: 44, borderRadius: "50%",
                  background: "rgba(196,133,90,.1)", border: `1.5px solid ${S.terra}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={18} color={S.terra} strokeWidth={1.6} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.15rem", fontWeight: 500, marginBottom: 8, color: S.charcoal }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: ".9rem", color: S.umber, lineHeight: 1.8, fontWeight: 300 }}>
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}

          <div style={{
            marginTop: 48, padding: "32px",
            background: S.charcoal, borderRadius: 4, textAlign: "center",
          }}>
            <div style={{ fontFamily: "Playfair Display, serif", fontSize: "2.4rem", color: S.terra, marginBottom: 8 }}>
              60%
            </div>
            <div style={{ fontSize: ".7rem", letterSpacing: ".14em", textTransform: "uppercase", color: S.sand, fontWeight: 600 }}>
              Directly to the Host Family
            </div>
            <div style={{ fontSize: ".78rem", color: "rgba(232,223,208,.5)", marginTop: 8 }}>
              Of every community-hosted experience fee — already included in your package price.
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 56 }}>
            <a href="mailto:sushilagarwalbhm@gmail.com" style={{
              display: "inline-block",
              padding: "14px 32px", fontSize: ".75rem", letterSpacing: ".12em",
              textTransform: "uppercase", borderRadius: 2,
              background: S.terra, color: S.sand, textDecoration: "none", fontWeight: 500,
            }}>
              Ask Us Anything About This
            </a>
          </div>
        </div>
      </section>

      <SubFooter />
    </div>
  );
}
