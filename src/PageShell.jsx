import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Mail, MapPin, Globe } from "lucide-react";

export const COLORS = {
  sand:      "#F2EDE4",
  parchment: "#E8DFD0",
  terra:     "#C4855A",
  terraDark: "#A06040",
  green:     "#3D5A47",
  greenLight:"#6B8C6B",
  charcoal:  "#1C1C1A",
  umber:     "#8B7355",
  umLight:   "#C4A882",
};

const S = COLORS;

/* Shared styling used by every sub-page — mirrors the main landing page */
export const PageStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
    * { box-sizing: border-box; }
    body { font-family: 'Inter', sans-serif; background: ${S.sand}; margin: 0; }
    .font-serif { font-family: 'Playfair Display', Georgia, serif; }
    .ornament { color: ${S.terra}; letter-spacing: .4em; font-size: .75rem; }
    a.subnav-link { color: rgba(242,237,228,0.75); font-size: .8rem; letter-spacing: .12em; text-transform: uppercase; text-decoration: none; transition: color .3s ease; }
    a.subnav-link:hover { color: ${S.terra}; }
    .subpage-link { color: ${S.terra}; text-decoration: underline; text-decoration-color: rgba(196,133,90,.35); text-underline-offset: 3px; }
    .subpage-link:hover { text-decoration-color: ${S.terra}; }
    @media (max-width: 768px) {
      .subnav-desktop { display: none !important; }
      .subnav-mobile-btn { display: flex !important; }
    }
    @media (min-width: 769px) {
      .subnav-mobile-btn { display: none !important; }
      .subnav-desktop { display: flex !important; }
    }
  `}</style>
);

export function SubNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        padding: "20px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: S.charcoal,
        borderBottom: "1px solid rgba(196,133,90,.15)",
      }}>
        <Link to="/bundelkhand" style={{ display: "flex", flexDirection: "column", gap: 1, textDecoration: "none" }}>
          <span style={{ fontFamily: "Playfair Display, serif", fontSize: "1.05rem", color: S.sand, letterSpacing: ".04em" }}>
            Bundelkhand Slow Trails
          </span>
          <span style={{ fontSize: ".6rem", letterSpacing: ".25em", textTransform: "uppercase", color: S.terra }}>
            A Slow Trails India Journey
          </span>
        </Link>

        <div className="subnav-desktop" style={{ gap: 28, alignItems: "center" }}>
          <Link to="/bundelkhand#route-map" className="subnav-link">Route Map</Link>
          <Link to="/bundelkhand#experiences" className="subnav-link">Experiences</Link>
          <Link to="/bundelkhand/itinerary" className="subnav-link">Itinerary</Link>
          <Link to="/bundelkhand/accommodation" className="subnav-link">Accommodation</Link>
          <Link to="/bundelkhand/bedia-pledge" className="subnav-link">Bedia Pledge</Link>
          <a href="mailto:sushilagarwalbhm@gmail.com" style={{
            padding: "9px 20px", fontSize: ".72rem", letterSpacing: ".1em", textTransform: "uppercase",
            background: S.terra, color: S.sand, borderRadius: 2, textDecoration: "none", fontWeight: 500,
          }}>
            Enquire Now
          </a>
        </div>

        <button className="subnav-mobile-btn" onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", color: S.sand, padding: 4 }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99, top: 68,
          background: "rgba(28,28,26,0.98)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 32,
        }}>
          {[["Route Map","/bundelkhand#route-map"],["Experiences","/bundelkhand#experiences"],["Itinerary","/bundelkhand/itinerary"],["Accommodation","/bundelkhand/accommodation"],["Bedia Pledge","/bundelkhand/bedia-pledge"]].map(([label, to]) => (
            <Link key={label} to={to} onClick={() => setOpen(false)}
              style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", color: S.sand, textDecoration: "none" }}>
              {label}
            </Link>
          ))}
          <a href="mailto:sushilagarwalbhm@gmail.com" onClick={() => setOpen(false)} style={{
            marginTop: 12, padding: "12px 32px", fontSize: ".8rem", letterSpacing: ".12em", textTransform: "uppercase",
            background: S.terra, color: S.sand, borderRadius: 2, textDecoration: "none", fontWeight: 500,
          }}>
            Enquire Now
          </a>
        </div>
      )}
    </>
  );
}

export function SubFooter() {
  return (
    <footer style={{ background: S.charcoal, padding: "60px 24px 40px", borderTop: "1px solid rgba(196,133,90,.1)", marginTop: 0 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 40, marginBottom: 48 }}>
          <div style={{ maxWidth: 280 }}>
            <div style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", color: S.sand, marginBottom: 6 }}>
              Bundelkhand Slow Trails
            </div>
            <div style={{ fontSize: ".6rem", letterSpacing: ".25em", textTransform: "uppercase", color: S.terra, marginBottom: 16 }}>
              A Slow Trails India Journey
            </div>
            <p style={{ fontSize: ".75rem", color: "rgba(232,223,208,.35)", lineHeight: 1.7 }}>
              The first journey from Slow Trails India — a boutique slow-tourism
              itinerary through Bundelkhand, rooted in Jhansi.
            </p>
          </div>

          <div style={{ display: "flex", gap: 60, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: ".58rem", letterSpacing: ".2em", textTransform: "uppercase", color: S.terra, marginBottom: 16, fontWeight: 600 }}>The Journey</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Link to="/bundelkhand/itinerary" style={linkStyle}>7-Day Itinerary</Link>
                <Link to="/bundelkhand#route-map" style={linkStyle}>Route Map</Link>
                <Link to="/bundelkhand#experiences" style={linkStyle}>Experiences</Link>
                <Link to="/bundelkhand/accommodation" style={linkStyle}>Accommodation</Link>
              </div>
            </div>
            <div>
              <div style={{ fontSize: ".58rem", letterSpacing: ".2em", textTransform: "uppercase", color: S.terra, marginBottom: 16, fontWeight: 600 }}>Community</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Link to="/bundelkhand#community-impact" style={linkStyle}>Community Impact</Link>
                <Link to="/bundelkhand/bedia-pledge" style={linkStyle}>Bedia Pledge</Link>
              </div>
            </div>
            <div>
              <div style={{ fontSize: ".58rem", letterSpacing: ".2em", textTransform: "uppercase", color: S.terra, marginBottom: 16, fontWeight: 600 }}>Contact</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="mailto:sushilagarwalbhm@gmail.com" style={linkStyle}>sushilagarwalbhm@gmail.com</a>
                <Link to="/" style={linkStyle}>← All Slow Trails India Journeys</Link>
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
            <Link to="/privacy-policy" style={{ fontSize: ".65rem", color: "rgba(232,223,208,.2)", textDecoration: "none", letterSpacing: ".06em" }}>Privacy Policy</Link>
            <Link to="/community-charter" style={{ fontSize: ".65rem", color: "rgba(232,223,208,.2)", textDecoration: "none", letterSpacing: ".06em" }}>Community Charter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const linkStyle = { fontSize: ".75rem", color: "rgba(232,223,208,.35)", textDecoration: "none" };

/* Reusable page header block for sub-pages */
export function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div style={{ background: S.charcoal, padding: "80px 24px 64px", textAlign: "center" }}>
      <p className="ornament" style={{ marginBottom: 18 }}>{eyebrow}</p>
      <h1 className="font-serif" style={{
        fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 400,
        color: S.sand, lineHeight: 1.2, marginBottom: 16,
      }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{ fontSize: "1rem", color: "rgba(196,133,90,.75)", maxWidth: 560, margin: "0 auto", fontWeight: 300, lineHeight: 1.7 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
