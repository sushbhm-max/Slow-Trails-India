import { HandHeart, Users, Leaf, Scale } from "lucide-react";
import { SubNav, SubFooter, PageHeader, COLORS } from "../PageShell.jsx";

const S = COLORS;

export default function CommunityCharterPage() {
  return (
    <div style={{ background: S.sand, color: S.charcoal }}>
      <SubNav />
      <PageHeader
        eyebrow="Our Principles"
        title="Community Charter"
        subtitle="The commitments we hold ourselves to across every community we work with along this route."
      />

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>

          {[
            {
              icon: HandHeart, title: "Revenue is shared, not extracted",
              body: "A direct share of every community-hosted experience is paid to the people who host it — already built into your package price, not charged as a separate fee. We do not treat community visits as free content for a marketing brochure.",
            },
            {
              icon: Users, title: "Consent is ongoing, not one-time",
              body: "We do not consider a single agreement permanent. Every community partner is revisited each season to reconfirm willingness to host, and to hear directly what is and isn't working for them.",
            },
            {
              icon: Scale, title: "Infrastructure comes before marketing",
              body: "Where a host community needs basic upgrades — clean water access, private sanitation — we fund it ourselves before featuring that experience publicly. We would rather launch late than launch on top of someone else's discomfort.",
            },
            {
              icon: Leaf, title: "Culture is presented as it is, not staged for effect",
              body: "Performances, crafts, and traditions shown to guests are the real practices of the communities we visit, introduced with honest context by trained guides — not choreographed re-enactments assembled for tourism.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} style={{ display: "flex", gap: 20, marginBottom: 36 }}>
                <div style={{
                  flexShrink: 0, width: 44, height: 44, borderRadius: "50%",
                  background: "rgba(61,90,71,.08)", border: `1.5px solid ${S.green}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={18} color={S.green} strokeWidth={1.6} />
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

          <p style={{ fontSize: ".85rem", color: S.umber, lineHeight: 1.8, marginTop: 40, fontStyle: "italic", textAlign: "center" }}>
            For the specific commitments we've made to the Bedia community of Lalitpur,
            see our <a href="/bedia-pledge" className="subpage-link">Bedia Pledge</a>.
          </p>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href="mailto:sushilagarwalbhm@gmail.com" style={{
              display: "inline-block",
              padding: "14px 32px", fontSize: ".75rem", letterSpacing: ".12em",
              textTransform: "uppercase", borderRadius: 2,
              background: S.terra, color: S.sand, textDecoration: "none", fontWeight: 500,
            }}>
              Questions About Our Approach?
            </a>
          </div>
        </div>
      </section>

      <SubFooter />
    </div>
  );
}
