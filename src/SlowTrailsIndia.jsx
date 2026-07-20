import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Mail, MapPin, Globe, Leaf, Heart, Shield } from "lucide-react";
import ItineraryCard from "./ItineraryCard.jsx";
import { COLORS } from "./PageShell.jsx";
import orchhaPhoto from "./assets/orchha-riverside.jpg";

const S = COLORS;

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', sans-serif; background: ${S.sand}; }
    .font-serif { font-family: 'Playfair Display', Georgia, serif; }
    .ornament { color: ${S.terra}; letter-spacing: .4em; font-size: .75rem; }

    @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
    .reveal { opacity: 0; transform: translateY(28px); transition: opacity 1s ease, transform 1s cubic-bezier(.22,1,.36,1); }
    .reveal.shown { opacity: 1; transform: translateY(0); }

    .itinerary-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(28,28,26,.15); }
    .itinerary-card:hover .itinerary-card-img { transform: scale(1.06); }

    .nav-link { color: rgba(242,237,228,0.75); font-size: .8rem; letter-spacing: .12em; text-transform: uppercase; text-decoration: none; transition: color .3s ease; }
    .nav-link:hover { color: ${S.terra}; }

    @media (max-width: 768px) {
      .nav-desktop { display: none !important; }
      .nav-mobile-btn { display: flex !important; }
      .card-grid { grid-template-columns: 1fr !important; }
    }
    @media (min-width: 769px) {
      .nav-mobile-btn { display: none !important; }
      .nav-desktop { display: flex !important; }
    }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: ${S.sand}; }
    ::-webkit-scrollbar-thumb { background: ${S.terra}; border-radius: 2px; }
  `}</style>
);

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("shown"); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const itineraries = [
  {
    image: orchhaPhoto,
    imgLabel: "Orchha riverside palaces",
    title: "Bundelkhand Slow Trails",
    region: "Central India",
    duration: "7 Days / 6 Nights",
    priceFrom: "$1,145",
    tagline: "Jhansi, Orchha, Chanderi, Lalitpur, and Khajuraho — heritage forts, handloom villages, and an evening with the Bedia community.",
    href: "/bundelkhand",
    status: "available",
  },
  {
    image: null,
    imgLabel: "Next journey — destination TBA",
    title: "Second Journey",
    region: "To Be Announced",
    duration: "Details to follow",
    priceFrom: null,
    tagline: "We're developing our second slow-travel itinerary. Details will be announced here once ready.",
    href: null,
    status: "coming-soon",
  },
];

export default function SlowTrailsIndia() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ background: S.sand, color: S.charcoal, overflowX: "hidden" }}>
      <FontLoader />

      {/* ── NAV ─────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "20px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "linear-gradient(to bottom, rgba(28,28,26,0.75) 0%, transparent 100%)",
      }}>
        <Link to="/" style={{ display: "flex", flexDirection: "column", gap: 1, textDecoration: "none" }}>
          <span style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", color: "#F2EDE4", letterSpacing: ".04em" }}>
            Slow Trails India
          </span>
          <span style={{ fontSize: ".6rem", letterSpacing: ".25em", textTransform: "uppercase", color: S.terra }}>
            Est. 2026
          </span>
        </Link>

        <div className="nav-desktop" style={{ gap: 32, alignItems: "center" }}>
          <a href="#journeys" className="nav-link">Journeys</a>
          <a href="#philosophy" className="nav-link">Our Philosophy</a>
          <Link to="/privacy-policy" className="nav-link">Privacy</Link>
          <a href="mailto:sushilagarwalbhm@gmail.com" style={{
            padding: "9px 22px", fontSize: ".75rem", letterSpacing: ".1em", textTransform: "uppercase",
            background: S.terra, color: S.sand, borderRadius: 2, textDecoration: "none", fontWeight: 500,
          }}>
            Enquire Now
          </a>
        </div>

        <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#F2EDE4", padding: 4 }}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99,
          background: "rgba(28,28,26,0.98)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 32,
        }}>
          {[["Journeys", "#journeys"], ["Our Philosophy", "#philosophy"]].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "Playfair Display, serif", fontSize: "1.6rem", color: "#F2EDE4", textDecoration: "none" }}>
              {label}
            </a>
          ))}
          <a href="mailto:sushilagarwalbhm@gmail.com" onClick={() => setMenuOpen(false)} style={{
            marginTop: 12, padding: "12px 32px", fontSize: ".8rem", letterSpacing: ".12em", textTransform: "uppercase",
            background: S.terra, color: S.sand, borderRadius: 2, textDecoration: "none", fontWeight: 500,
          }}>
            Enquire Now
          </a>
        </div>
      )}

      {/* ── HERO ────────────────────────────────────────── */}
      <section style={{
        position: "relative", minHeight: "80vh",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "140px 24px 100px",
        background: `linear-gradient(135deg, ${S.charcoal} 0%, #2A2018 100%)`,
      }}>
        <p style={{ fontSize: ".65rem", letterSpacing: ".4em", textTransform: "uppercase", color: S.terra, marginBottom: 24, fontWeight: 500 }}>
          Slow Luxury, Experiential Travel
        </p>
        <h1 className="font-serif" style={{
          fontSize: "clamp(2.4rem, 6vw, 4.4rem)", fontWeight: 400, lineHeight: 1.15,
          color: "#F2EDE4", marginBottom: 24, maxWidth: 820,
        }}>
          India, at the pace<br /><em style={{ color: S.umLight, fontStyle: "italic" }}>it deserves.</em>
        </h1>
        <p style={{ fontSize: "1.05rem", color: "rgba(232,223,208,.75)", maxWidth: 560, lineHeight: 1.8, fontWeight: 300, marginBottom: 8 }}>
          Slow Trails India designs low-footprint, community-first journeys through
          places most travellers never reach. Every itinerary is built with the people
          who live there, not around them.
        </p>
      </section>

      {/* ── TRUST STRIP ─────────────────────────────────── */}
      <section style={{ background: S.green, padding: "0" }}>
        <div style={{
          maxWidth: 1000, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        }}>
          {[
            { icon: Heart, label: "Community-First", sub: "Direct revenue share, every journey" },
            { icon: Shield, label: "Personally Vetted", sub: "Every stay, guide, and route" },
            { icon: Leaf, label: "Low Footprint", sub: "Small groups, by design" },
          ].map((t, i) => {
            const Icon = t.icon;
            return (
              <div key={i} style={{ padding: "32px 28px", textAlign: "center", borderRight: i < 2 ? "1px solid rgba(242,237,228,.1)" : "none" }}>
                <Icon size={20} color={S.terra} strokeWidth={1.5} style={{ marginBottom: 10 }} />
                <div style={{ fontSize: ".78rem", letterSpacing: ".1em", textTransform: "uppercase", color: "#F2EDE4", fontWeight: 600, marginBottom: 4 }}>{t.label}</div>
                <div style={{ fontSize: ".75rem", color: "rgba(232,223,208,.55)" }}>{t.sub}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── JOURNEYS GRID ───────────────────────────────── */}
      <section id="journeys" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p className="ornament reveal" style={{ marginBottom: 18 }}>Our Journeys</p>
            <h2 className="font-serif reveal" style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 400, color: S.charcoal }}>
              One journey live. <em style={{ color: S.terra }}>Many more to come.</em>
            </h2>
          </div>

          <div className="card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28 }}>
            {itineraries.map((it, i) => (
              <div key={i} className="reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <ItineraryCard {...it} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ──────────────────────────────────── */}
      <section id="philosophy" style={{ background: S.parchment, padding: "100px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p className="ornament reveal" style={{ marginBottom: 20 }}>Our Philosophy</p>
          <h2 className="font-serif reveal" style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 400, color: S.charcoal, lineHeight: 1.25, marginBottom: 24 }}>
            We do not show you India.<br /><em style={{ color: S.terra }}>We let India show you itself.</em>
          </h2>
          <p className="reveal" style={{ fontSize: "1rem", color: S.umber, lineHeight: 1.9, fontWeight: 300 }}>
            Every Slow Trails India journey is built the same way: small groups, real
            community partnerships, and a route designed around depth rather than
            distance covered. Bundelkhand is our first — each journey after it will
            hold to the same standard.
          </p>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer style={{ background: S.charcoal, padding: "60px 24px 40px", borderTop: "1px solid rgba(196,133,90,.1)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 40, marginBottom: 48 }}>
            <div style={{ maxWidth: 320 }}>
              <div style={{ fontFamily: "Playfair Display, serif", fontSize: "1.15rem", color: "#F2EDE4", marginBottom: 6 }}>
                Slow Trails India
              </div>
              <div style={{ fontSize: ".6rem", letterSpacing: ".25em", textTransform: "uppercase", color: S.terra, marginBottom: 16 }}>
                Est. 2026
              </div>
              <p style={{ fontSize: ".75rem", color: "rgba(232,223,208,.35)", lineHeight: 1.7 }}>
                Slow luxury, experiential travel across India. Designed in Jhansi,
                built with the communities we visit.
              </p>
            </div>

            <div style={{ display: "flex", gap: 60, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: ".58rem", letterSpacing: ".2em", textTransform: "uppercase", color: S.terra, marginBottom: 16, fontWeight: 600 }}>Journeys</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <Link to="/bundelkhand" style={{ fontSize: ".75rem", color: "rgba(232,223,208,.35)", textDecoration: "none" }}>Bundelkhand Slow Trails</Link>
                </div>
              </div>
              <div>
                <div style={{ fontSize: ".58rem", letterSpacing: ".2em", textTransform: "uppercase", color: S.terra, marginBottom: 16, fontWeight: 600 }}>Contact</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <a href="mailto:sushilagarwalbhm@gmail.com" style={{ fontSize: ".75rem", color: "rgba(232,223,208,.35)", textDecoration: "none" }}>sushilagarwalbhm@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div style={{
            paddingTop: 24, borderTop: "1px solid rgba(242,237,228,.06)",
            display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
          }}>
            <span style={{ fontSize: ".68rem", color: "rgba(232,223,208,.2)" }}>
              © 2026 Slow Trails India. All rights reserved. Jhansi, UP, India.
            </span>
            <div style={{ display: "flex", gap: 24 }}>
              <Link to="/privacy-policy" style={{ fontSize: ".65rem", color: "rgba(232,223,208,.2)", textDecoration: "none" }}>Privacy Policy</Link>
              <Link to="/community-charter" style={{ fontSize: ".65rem", color: "rgba(232,223,208,.2)", textDecoration: "none" }}>Community Charter</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
