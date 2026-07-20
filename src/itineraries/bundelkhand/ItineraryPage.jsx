import { Mountain, Waves, Star, Sun, Heart, Moon, Compass, Clock, Sunrise } from "lucide-react";
import { SubNav, SubFooter, PageHeader, COLORS } from "../../PageShell.jsx";

const S = COLORS;

const days = [
  {
    day: "Day 1", title: "Delhi → Jhansi → Garh Kundar → Orchha", icon: Compass, color: S.umber,
    summary: "Board the Shatabdi Express from Delhi. Garland welcome at Jhansi, then straight on to Garh Kundar Fort — a 10th-century hilltop fortress with its vanishing-court legend — before a single, unhurried check-in at Orchha. Evening aarti and a night walk beside the Betwa river close the day.",
  },
  {
    day: "Day 2", title: "Orchha (Full Day)", icon: Sunrise, color: S.green,
    summary: "Morning yoga, a guided visit to Raja Mahal and Jahangir Mahal, then a hands-on cooking class at the Orchha Homemaker's Kitchen — a market walk followed by a shared meal with a host family.",
  },
  {
    day: "Day 3", title: "Orchha → Chanderi", icon: Star, color: S.umber,
    summary: "Transfer to Chanderi with lunch en route at Gaurkripa Bundeli Bhojanalay — a real, long-standing local institution. The afternoon is spent at the Chanderi handloom village, meeting master weavers at the pit looms of the GI-tagged silk tradition.",
  },
  {
    day: "Day 4", title: "Chanderi → Lalitpur (Community Stay)", icon: Heart, color: S.terra,
    summary: "A guided morning at Chanderi Fort and Koshak Mahal, then a direct transfer to Lalitpur — no detours. The afternoon opens up into extended time with the Bedia community: lunch, informal daily life, and an evening of communal fire-cooked dinner followed by the Rai folk-ballad tradition.",
  },
  {
    day: "Day 5", title: "Lalitpur → Khajuraho via Bhimkund", icon: Waves, color: S.terra,
    summary: "The longest drive of the journey, broken by a proper stop at Bhimkund — a spring-fed sacred pond, with a short Vedic ritual and a relaxed lunch, not a rushed halt. Check in at Khajuraho with a genuine rest window before the evening Light & Sound show at the temple complex.",
  },
  {
    day: "Day 6", title: "Khajuraho (Full Day)", icon: Moon, color: S.green,
    summary: "A pre-dawn yoga session at the Western Group of Temples, followed by a guided walk as first light reaches the shikharas. Breakfast back at the property, free time, then an afternoon pottery class and a cultural evening — dinner paired with a folk performance.",
  },
  {
    day: "Day 7", title: "Khajuraho — Departure", icon: Compass, color: S.umber,
    summary: "A closing tilak-and-aarti blessing with a gift set sourced from the journey itself — Chanderi silk, Bundeli spices, and a printed photograph from the Lalitpur evening. Onward connections available to Delhi or Varanasi by flight or rail.",
  },
];

const exitOptions = [
  { label: "Flight to Delhi", time: "13:15 hrs" },
  { label: "Flight to Varanasi", time: "12:45 hrs" },
  { label: "Train to Delhi", time: "14:50 hrs" },
  { label: "Train to Varanasi", time: "18:20 hrs" },
];

export default function ItineraryPage() {
  return (
    <div style={{ background: S.sand, color: S.charcoal }}>
      <SubNav />
      <PageHeader
        eyebrow="The Journey"
        title="Seven Days, Unhurried"
        subtitle="A day-by-day guide to the Bundelkhand Slow Trails route — Jhansi, Orchha, Chanderi, Lalitpur, and Khajuraho."
      />

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          {days.map((d, i) => {
            const Icon = d.icon;
            return (
              <div key={i} style={{
                display: "flex", gap: 24,
                padding: "32px 0",
                borderBottom: i < days.length - 1 ? "1px solid rgba(139,115,85,.15)" : "none",
              }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", width: 56 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: "rgba(196,133,90,.1)", border: `1.5px solid ${d.color}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={20} color={d.color} strokeWidth={1.6} />
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: ".65rem", letterSpacing: ".16em", textTransform: "uppercase", color: d.color, fontWeight: 600, marginBottom: 6 }}>
                    {d.day}
                  </div>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.35rem", fontWeight: 500, color: S.charcoal, marginBottom: 10 }}>
                    {d.title}
                  </h3>
                  <p style={{ fontSize: ".92rem", color: S.umber, lineHeight: 1.75, fontWeight: 300 }}>
                    {d.summary}
                  </p>
                </div>
              </div>
            );
          })}

          <div style={{
            marginTop: 40, padding: "28px 32px",
            background: "rgba(196,133,90,.06)", border: "1px solid rgba(196,133,90,.18)",
            borderRadius: 4,
          }}>
            <div style={{ fontSize: ".65rem", letterSpacing: ".16em", textTransform: "uppercase", color: S.terra, fontWeight: 600, marginBottom: 14 }}>
              Departure Day — Your Choice of Onward Route
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
              {exitOptions.map((o, i) => (
                <div key={i} style={{ fontSize: ".82rem", color: S.umber }}>
                  <span style={{ color: S.charcoal, fontWeight: 500 }}>{o.label}</span><br />
                  {o.time}
                </div>
              ))}
            </div>
          </div>

          <div style={{
            marginTop: 24, padding: "28px 32px",
            background: "rgba(61,90,71,.06)", border: "1px solid rgba(61,90,71,.15)",
            borderRadius: 4, display: "flex", gap: 14, alignItems: "flex-start",
          }}>
            <Clock size={18} color={S.green} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: ".85rem", color: S.umber, lineHeight: 1.7 }}>
              All timings are indicative and paced deliberately — this is not a race between sights.
              Day 5 is the longest transit day of the journey, broken by a proper stop at
              Bhimkund rather than a rushed multi-stop route. Exact daily schedules are
              shared in full at the time of booking.
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: 56 }}>
            <a href="mailto:sushilagarwalbhm@gmail.com" style={{
              display: "inline-block",
              padding: "14px 32px", fontSize: ".75rem", letterSpacing: ".12em",
              textTransform: "uppercase", borderRadius: 2,
              background: S.terra, color: S.sand, textDecoration: "none", fontWeight: 500,
            }}>
              Enquire About This Itinerary
            </a>
          </div>
        </div>
      </section>

      <SubFooter />
    </div>
  );
}
