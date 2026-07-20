import { Waves, Star, Heart, Landmark } from "lucide-react";
import { SubNav, SubFooter, PageHeader, COLORS } from "../../PageShell.jsx";

const S = COLORS;

const stays = [
  {
    dest: "Orchha", icon: Waves, color: S.green, nights: "2 Nights",
    name: "Heritage Riverside Boutique",
    desc: "A heritage boutique stay with Betwa river proximity — one of only a handful of quality properties in Orchha, chosen for atmosphere over scale. The single check-in of the journey, reached the same day as arrival via Garh Kundar.",
  },
  {
    dest: "Chanderi", icon: Star, color: S.umber, nights: "1 Night",
    name: "Eco-Resort, Chanderi",
    desc: "A small eco-resort close to the fort and the weavers' quarter. Chanderi has almost no quality supply — this is the best available, and personally inspected.",
  },
  {
    dest: "Lalitpur", icon: Heart, color: S.terra, nights: "1 Night",
    name: "Curated Bedia Community Stay",
    desc: "An upgraded rural homestay with the Bedia community — clean, private facilities, and a genuine overnight immersion rather than a staged visit.",
  },
  {
    dest: "Khajuraho", icon: Landmark, color: S.green, nights: "2 Nights",
    name: "MPT Khajuraho / Syna Heritage Hotel",
    desc: "A vetted heritage property in the temple town itself — dependable government or heritage-grade hospitality, minutes from the Western Group of Temples.",
  },
];

export default function AccommodationPage() {
  return (
    <div style={{ background: S.sand, color: S.charcoal }}>
      <SubNav />
      <PageHeader
        eyebrow="Where You'll Stay"
        title="Accommodation"
        subtitle="Every property on this route has been personally inspected. We choose character and location over chain-hotel scale."
      />

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {stays.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} style={{
                  background: S.parchment, border: "1px solid rgba(139,115,85,.15)",
                  borderRadius: 4, padding: "32px 26px", position: "relative", overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: s.color, opacity: .7 }} />
                  <Icon size={22} color={s.color} strokeWidth={1.5} style={{ marginBottom: 14 }} />
                  <div style={{ fontSize: ".62rem", letterSpacing: ".18em", textTransform: "uppercase", color: s.color, fontWeight: 600, marginBottom: 6 }}>
                    {s.dest} · {s.nights}
                  </div>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontWeight: 500, marginBottom: 10, color: S.charcoal, lineHeight: 1.3 }}>
                    {s.name}
                  </h3>
                  <p style={{ fontSize: ".85rem", color: S.umber, lineHeight: 1.7, fontWeight: 300 }}>
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <p style={{ fontSize: ".82rem", color: S.umber, lineHeight: 1.8, marginTop: 40, fontStyle: "italic", textAlign: "center" }}>
            All accommodations are on a double-occupancy basis with daily breakfast included.
            Specific property names are confirmed at the time of booking and may vary by season
            and availability.
          </p>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href="mailto:sushilagarwalbhm@gmail.com" style={{
              display: "inline-block",
              padding: "14px 32px", fontSize: ".75rem", letterSpacing: ".12em",
              textTransform: "uppercase", borderRadius: 2,
              background: S.terra, color: S.sand, textDecoration: "none", fontWeight: 500,
            }}>
              Ask About Room Upgrades
            </a>
          </div>
        </div>
      </section>

      <SubFooter />
    </div>
  );
}
