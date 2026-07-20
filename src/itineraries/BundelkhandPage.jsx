import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Leaf, Shield, MapPin, ArrowRight, Star,
  ChevronDown, Mail, Globe, Sunrise, Heart,
  Mountain, Waves, Compass, Sun, Moon, TreePine, X, Menu
} from "lucide-react";
import fayCampbellPhoto from "../assets/fay-campbell.jpg";
import khajurahoYogaPhoto from "../assets/khajuraho-temple.jpg";
import homemakersKitchenPhoto from "../assets/homemakers-kitchen.jpg";
import handloomWeavingPhoto from "../assets/handloom-weaving.jpg";
import khajurahoLightSoundPhoto from "../assets/khajuraho-light-sound.jpg";
import garhKundarFortPhoto from "../assets/garh-kundar-fort.jpg";
import raiDancePhoto from "../assets/rai-dance.jpg";
import bhimkundPhoto from "../assets/bhimkund.jpg";

/* ─── Google Fonts ─────────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Inter', sans-serif; background: #F2EDE4; }

    .font-serif { font-family: 'Playfair Display', Georgia, serif; }
    .font-sans  { font-family: 'Inter', sans-serif; }

    /* Slow fade-in keyframes */
    @keyframes fadeUp   { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeIn   { from { opacity: 0; } to { opacity: 1; } }
    @keyframes drawLine { from { stroke-dashoffset: 1200; } to { stroke-dashoffset: 0; } }
    @keyframes scaleIn  { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    @keyframes shimmer  { 0%,100% { opacity: .4; } 50% { opacity: 1; } }
    @keyframes underlineGrow { from { width: 0; } to { width: 100%; } }

    .anim-fade-up  { animation: fadeUp  1.2s cubic-bezier(.22,1,.36,1) both; }
    .anim-fade-in  { animation: fadeIn  1.6s ease both; }
    .anim-shimmer  { animation: shimmer 3s ease-in-out infinite; }

    .delay-200  { animation-delay: .2s; }
    .delay-400  { animation-delay: .4s; }
    .delay-600  { animation-delay: .6s; }
    .delay-800  { animation-delay: .8s; }
    .delay-1000 { animation-delay: 1s; }
    .delay-1200 { animation-delay: 1.2s; }

    /* Scroll-reveal */
    .reveal       { opacity: 0; transform: translateY(32px); transition: opacity 1s ease, transform 1s cubic-bezier(.22,1,.36,1); }
    .reveal.shown { opacity: 1; transform: translateY(0); }

    /* Route line animation */
    .route-line { stroke-dasharray: 1200; stroke-dashoffset: 1200; transition: stroke-dashoffset 2.4s cubic-bezier(.4,0,.2,1); }
    .route-line.drawn { stroke-dashoffset: 0; }

    /* Destination node pulse */
    .node-ring { animation: scaleIn .4s cubic-bezier(.34,1.56,.64,1) both; }

    /* Glassmorphism card */
    .glass {
      background: rgba(242, 237, 228, 0.55);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(196, 133, 90, 0.18);
    }

    /* Video overlay gradient */
    .hero-overlay {
      background: linear-gradient(
        to bottom,
        rgba(28,28,26,0.62) 0%,
        rgba(28,28,26,0.38) 50%,
        rgba(28,28,26,0.72) 100%
      );
    }

    /* CTA hover */
    .cta-primary {
      background: #C4855A;
      color: #F2EDE4;
      border: 1.5px solid #C4855A;
      transition: background .4s ease, color .4s ease, transform .3s ease;
    }
    .cta-primary:hover {
      background: transparent;
      color: #C4855A;
      transform: translateY(-2px);
    }
    .cta-ghost {
      background: transparent;
      color: #F2EDE4;
      border: 1.5px solid rgba(242,237,228,0.5);
      transition: background .4s ease, border-color .4s ease, transform .3s ease;
    }
    .cta-ghost:hover {
      background: rgba(242,237,228,0.08);
      border-color: rgba(242,237,228,0.9);
      transform: translateY(-2px);
    }

    /* Stat counter */
    .stat-card { transition: transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s ease; }
    .stat-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(61,90,71,.12); }

    /* Itinerary node */
    .dest-node { transition: transform .3s ease; cursor: default; }
    .dest-node:hover { transform: scale(1.04); }

    /* Contrast section */
    .contrast-panel { transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease; }
    .contrast-panel:hover { transform: translateY(-6px); box-shadow: 0 24px 64px rgba(28,28,26,.2); }

    /* Nav */
    .nav-link {
      color: rgba(242,237,228,0.75);
      font-size: .8rem;
      letter-spacing: .12em;
      text-transform: uppercase;
      transition: color .3s ease;
      text-decoration: none;
    }
    .nav-link:hover { color: #C4855A; }

    /* Divider ornament */
    .ornament { color: #C4855A; letter-spacing: .4em; font-size: .75rem; }

    /* Trust bar item */
    .trust-item { border-right: 1px solid rgba(61,90,71,.15); }
    .trust-item:last-child { border-right: none; }

    /* Mobile menu */
    @media (max-width: 768px) {
      .nav-desktop { display: none; }
      .nav-mobile-btn { display: flex; }
    }
    @media (min-width: 769px) {
      .nav-mobile-btn { display: none; }
      .nav-desktop { display: flex; }
    }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #F2EDE4; }
    ::-webkit-scrollbar-thumb { background: #C4855A; border-radius: 2px; }

    /* Terracotta underline animation */
    .headline-underline {
      display: inline-block;
      position: relative;
    }
    .headline-underline::after {
      content: '';
      position: absolute;
      bottom: -6px; left: 0;
      height: 2px;
      background: #C4855A;
      width: 0;
      transition: width 1.4s cubic-bezier(.22,1,.36,1) 1.2s;
    }
    .headline-underline.active::after { width: 100%; }

    @media (prefers-reduced-motion: reduce) {
      .anim-fade-up, .anim-fade-in, .anim-shimmer,
      .reveal, .route-line, .cta-primary, .cta-ghost,
      .stat-card, .dest-node, .contrast-panel {
        animation: none !important;
        transition: none !important;
        opacity: 1 !important;
        transform: none !important;
      }
      .reveal { opacity: 1; transform: none; }
    }
  `}</style>
);

/* ─── Scroll Reveal Hook ───────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("shown"); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Route Map SVG ────────────────────────────────────────── */
const destinations = [
  { name: "Delhi",      sub: "Departure by Shatabdi Express",  icon: Compass,  day: "D1",    color: "#8B7355" },
  { name: "Jhansi",     sub: "Garland Welcome, Garh Kundar Fort", icon: Mountain, day: "D1",  color: "#A06040" },
  { name: "Orchha",     sub: "Homemaker's Kitchen, Betwa River", icon: Waves,  day: "D1–3", color: "#3D5A47" },
  { name: "Chanderi",   sub: "Handloom Village, Gaurkripa Thali", icon: Star,   day: "D3–4",  color: "#6B8C6B" },
  { name: "Lalitpur",   sub: "Bedia Community & Rai Dance",    icon: Heart,    day: "D4",    color: "#C4855A" },
  { name: "Khajuraho",  sub: "Bhimkund, Temple Sunrise, Pottery", icon: Moon,  day: "D5–7",  color: "#3D5A47" },
];

function RouteMap() {
  const lineRef = useRef(null);
  const [drawn, setDrawn] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setDrawn(true); },
      { threshold: 0.3 }
    );
    if (lineRef.current) obs.observe(lineRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={lineRef} style={{ position: "relative" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative", paddingLeft: 32 }}>
        {/* Vertical line */}
        <svg
          style={{ position: "absolute", left: 16, top: 0, width: 2, height: "100%", overflow: "visible" }}
          viewBox="0 0 2 100" preserveAspectRatio="none"
        >
          <line
            x1="1" y1="0" x2="1" y2="100"
            stroke="#C4855A"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            className={`route-line${drawn ? " drawn" : ""}`}
            style={{ strokeDasharray: "1200", strokeDashoffset: drawn ? 0 : 1200, transition: "stroke-dashoffset 2.4s cubic-bezier(.4,0,.2,1)" }}
          />
        </svg>

        {destinations.map((d, i) => {
          const Icon = d.icon;
          const isActive = active === i;
          return (
            <div
              key={i}
              className="dest-node"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                display: "flex", alignItems: "flex-start", gap: 20,
                padding: "20px 0 20px 24px",
                borderBottom: i < destinations.length - 1 ? "1px solid rgba(61,90,71,.08)" : "none",
                cursor: "pointer",
              }}
            >
              {/* Node dot */}
              <div style={{
                position: "absolute", left: 8,
                width: 16, height: 16, borderRadius: "50%",
                background: isActive ? d.color : "#F2EDE4",
                border: `2px solid ${d.color}`,
                transition: "background .3s ease, transform .3s ease",
                transform: isActive ? "scale(1.3)" : "scale(1)",
                flexShrink: 0, zIndex: 2, marginTop: 4,
              }} />

              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                  <span style={{
                    fontSize: ".65rem", letterSpacing: ".16em", textTransform: "uppercase",
                    color: d.color, fontWeight: 600, fontFamily: "Inter, sans-serif"
                  }}>{d.day}</span>
                  <span style={{ color: "rgba(28,28,26,.2)", fontSize: ".7rem" }}>·</span>
                  <Icon size={13} color={d.color} strokeWidth={1.8} />
                </div>
                <div style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.1rem", fontWeight: 500,
                  color: isActive ? d.color : "#1C1C1A",
                  transition: "color .3s ease",
                  marginBottom: 2
                }}>{d.name}</div>
                <div style={{
                  fontSize: ".78rem", color: "#8B7355",
                  fontFamily: "Inter, sans-serif",
                  maxHeight: isActive ? 80 : 0,
                  overflow: "hidden",
                  transition: "max-height .4s cubic-bezier(.22,1,.36,1), opacity .3s ease",
                  opacity: isActive ? 1 : 0,
                }}>{d.sub}</div>
              </div>

              {isActive && (
                <ArrowRight size={14} color={d.color} style={{ marginTop: 6, flexShrink: 0 }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Animated Counter ─────────────────────────────────────── */
function Counter({ end, suffix = "", duration = 2000 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(ease * end));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── Experience Image Block ──────────────────────────────────
   Renders a real photo when `image` is supplied; otherwise falls
   back to a labeled gradient placeholder so nobody mistakes an
   empty slot for finished photography. Swap in real photos by
   passing `image={importedPhoto}` — see README.md.
   ─────────────────────────────────────────────────────────────── */
function PlaceholderImage({ label, colorFrom, colorTo, height = 160, image }) {
  if (image) {
    return (
      <div style={{ height, borderRadius: 3, marginBottom: 18, overflow: "hidden" }}>
        <img src={image} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    );
  }
  return (
    <div style={{
      height, borderRadius: 3, marginBottom: 18, position: "relative", overflow: "hidden",
      background: `linear-gradient(135deg, ${colorFrom} 0%, ${colorTo} 100%)`,
    }}>
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: 6,
      }}>
        <Compass size={20} color="rgba(255,255,255,.55)" strokeWidth={1.3} />
        <span style={{
          fontSize: ".6rem", letterSpacing: ".12em", textTransform: "uppercase",
          color: "rgba(255,255,255,.7)", fontWeight: 500, textAlign: "center", padding: "0 16px",
        }}>
          {label}
        </span>
        <span style={{ fontSize: ".56rem", color: "rgba(255,255,255,.4)", fontStyle: "italic" }}>
          Photo pending
        </span>
      </div>
    </div>
  );
}

/* ─── Main Component ───────────────────────────────────────── */
export default function BundelkhandSlowTrails() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  const S = {
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

  return (
    <div style={{ background: S.sand, color: S.charcoal, overflowX: "hidden" }}>
      <FontLoader />

      {/* ══════════════════════════════════════════════
          NAV
      ══════════════════════════════════════════════ */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "20px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "linear-gradient(to bottom, rgba(28,28,26,0.7) 0%, transparent 100%)",
        backdropFilter: "blur(0px)",
      }}>
        <Link to="/" style={{ display: "flex", flexDirection: "column", gap: 1, textDecoration: "none" }}>
          <span style={{ fontFamily: "Playfair Display, serif", fontSize: "1.05rem", color: "#F2EDE4", letterSpacing: ".04em" }}>
            Bundelkhand Slow Trails
          </span>
          <span style={{ fontSize: ".6rem", letterSpacing: ".25em", textTransform: "uppercase", color: "#C4855A" }}>
            A Slow Trails India Journey
          </span>
        </Link>

        <div className="nav-desktop" style={{ gap: 32, alignItems: "center" }}>
          <a href="#route-map" className="nav-link">Route Map</a>
          <a href="#experiences" className="nav-link">Experiences</a>
          <Link to="/bundelkhand/itinerary" className="nav-link">Itinerary</Link>
          <a href="#community-impact" className="nav-link">Community</a>
          <a href="mailto:sushilagarwalbhm@gmail.com" className="cta-primary" style={{ padding: "9px 22px", fontSize: ".75rem", letterSpacing: ".1em", textTransform: "uppercase", borderRadius: 2, cursor: "pointer", fontFamily: "Inter, sans-serif", textDecoration: "none", display: "inline-block" }}>
            Begin the Journey
          </a>
        </div>

        <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#F2EDE4", display: "flex", padding: 4 }}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99,
          background: "rgba(28,28,26,0.97)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 36,
          animation: "fadeIn .3s ease"
        }}>
          {[["Route Map","#route-map"],["Experiences","#experiences"],["Community","#community-impact"]].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "Playfair Display, serif", fontSize: "1.6rem", color: "#F2EDE4", textDecoration: "none" }}>
              {label}
            </a>
          ))}
          <Link to="/bundelkhand/itinerary" onClick={() => setMenuOpen(false)}
            style={{ fontFamily: "Playfair Display, serif", fontSize: "1.6rem", color: "#F2EDE4", textDecoration: "none" }}>
            Itinerary
          </Link>
          <a href="mailto:sushilagarwalbhm@gmail.com" onClick={() => setMenuOpen(false)} className="cta-primary" style={{ marginTop: 12, padding: "12px 32px", fontSize: ".8rem", letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 2, cursor: "pointer", fontFamily: "Inter, sans-serif", textDecoration: "none", display: "inline-block" }}>
            Begin the Journey
          </a>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section style={{
        position: "relative", height: "100vh", minHeight: 600,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* PLACEHOLDER — no real footage exists yet. Replace the empty <source>
            below with actual slow-motion Betwa river footage once filmed.
            The gradient + grain fallback below is intentional design, not
            a broken state — it looks correct with or without real video. */}
        <video
          autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "saturate(.7) brightness(.85)" }}
        >
          {/* <source src="/betwa-river-ambient.mp4" type="video/mp4" /> */}
        </video>

        {/* Fallback background for video-off state */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(135deg, ${S.charcoal} 0%, #2A3028 40%, #1A2820 100%)`,
        }} />

        {/* Subtle grain texture overlay */}
        <div style={{
          position: "absolute", inset: 0, opacity: .03,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }} />

        {/* Gradient overlay */}
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px", maxWidth: 760 }}>

          <p className={`anim-fade-up${heroReady ? "" : ""}`} style={{
            fontSize: ".65rem", letterSpacing: ".4em", textTransform: "uppercase",
            color: S.terra, marginBottom: 24, fontFamily: "Inter, sans-serif", fontWeight: 500,
            opacity: heroReady ? 1 : 0, animation: "fadeUp 1s ease .2s both"
          }}>
            7 Days · 6 Nights · Central India
          </p>

          <h1 style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2.4rem, 7vw, 5.2rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "#F2EDE4",
            marginBottom: 20,
            opacity: heroReady ? 1 : 0,
            animation: "fadeUp 1.2s cubic-bezier(.22,1,.36,1) .4s both"
          }}>
            The Heart of India,<br />
            <em style={{ fontStyle: "italic", color: S.umLight }}>Unhurried.</em>
          </h1>

          <p style={{
            fontSize: "clamp(.9rem, 2vw, 1.1rem)",
            color: "rgba(232,223,208,.8)",
            lineHeight: 1.8,
            maxWidth: 520,
            margin: "0 auto 40px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
            opacity: heroReady ? 1 : 0,
            animation: "fadeUp 1.2s cubic-bezier(.22,1,.36,1) .7s both"
          }}>
            Jhansi · Orchha · Chanderi · Lalitpur · Khajuraho.<br />
            A private, low-footprint luxury journey for those who travel to understand, not merely to see.
          </p>

          <div style={{
            display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap",
            opacity: heroReady ? 1 : 0,
            animation: "fadeUp 1.2s cubic-bezier(.22,1,.36,1) 1s both"
          }}>
            <button className="cta-primary" style={{
              padding: "14px 32px", fontSize: ".78rem", letterSpacing: ".14em",
              textTransform: "uppercase", borderRadius: 2, cursor: "pointer",
              fontFamily: "Inter, sans-serif", fontWeight: 500,
            }}>
              Begin the Journey
            </button>
            <a href="mailto:sushilagarwalbhm@gmail.com" className="cta-ghost" style={{
              padding: "14px 32px", fontSize: ".78rem", letterSpacing: ".14em",
              textTransform: "uppercase", borderRadius: 2, cursor: "pointer",
              fontFamily: "Inter, sans-serif", fontWeight: 400,
              textDecoration: "none", display: "inline-block",
            }}>
              Enquire Now
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          animation: "fadeIn 1s ease 2s both",
          opacity: 0,
        }} className="anim-shimmer">
          <span style={{ fontSize: ".6rem", letterSpacing: ".3em", textTransform: "uppercase", color: "rgba(242,237,228,.4)", fontFamily: "Inter, sans-serif" }}>Scroll</span>
          <ChevronDown size={16} color="rgba(242,237,228,.35)" strokeWidth={1.5} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TRUST / PHILOSOPHY BAR
      ══════════════════════════════════════════════ */}
      <section style={{ background: S.green, padding: "0" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}>
          {[
            { icon: Compass, num: "Private", suf: "", label: "Small-Group Departures",  sub: "Paced for depth, not headcount" },
            { icon: Heart,   num: "60",   suf: "%",  label: "Community Revenue Share", sub: "Paid directly to host families" },
            { icon: Shield,  num: "100",  suf: "%",  label: "Vetted Heritage Stays",   sub: "Personally inspected annually" },
            { icon: Sunrise, num: "Daily", suf: "",  label: "Guided Yoga",            sub: "Every morning of the journey" },
          ].map((t, i) => {
            const Icon = t.icon;
            return (
              <div key={i} className="trust-item reveal" style={{
                padding: "36px 28px",
                borderRight: "1px solid rgba(242,237,228,.1)",
                textAlign: "center",
                animationDelay: `${i * 0.1}s`,
              }}>
                <Icon size={22} color={S.terra} strokeWidth={1.5} style={{ marginBottom: 12 }} />
                <div style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: t.num === "Private" ? "1.4rem" : "1.9rem", fontWeight: 500,
                  color: "#F2EDE4", lineHeight: 1, marginBottom: 6,
                }}>
                  {t.num === "30" || t.num === "100"
                    ? <><Counter end={parseInt(t.num)} duration={1800} />{t.suf}</>
                    : <>{t.num}{t.suf}</>
                  }
                </div>
                <div style={{ fontSize: ".72rem", letterSpacing: ".12em", textTransform: "uppercase", color: S.terra, marginBottom: 5, fontWeight: 600 }}>
                  {t.label}
                </div>
                <div style={{ fontSize: ".75rem", color: "rgba(232,223,208,.55)", fontFamily: "Inter, sans-serif", lineHeight: 1.5 }}>
                  {t.sub}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SLOW PHILOSOPHY
      ══════════════════════════════════════════════ */}
      <section style={{ padding: "100px 24px", maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
        <p className="ornament reveal" style={{ marginBottom: 24 }}>· · ·</p>
        <h2 className="font-serif reveal" style={{
          fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 400,
          color: S.charcoal, lineHeight: 1.25, marginBottom: 28,
        }}>
          We do not show you India.<br />
          <em style={{ color: S.terra }}>We let India show you itself.</em>
        </h2>
        <p className="reveal" style={{
          fontSize: "1rem", color: S.umber, lineHeight: 1.9, maxWidth: 580, margin: "0 auto 48px",
          fontWeight: 300,
        }}>
          Bundelkhand Slow Trails is a boutique destination management company rooted in Jhansi.
          Every departure is small by design, every experience is community-led,
          and every rupee spent traces directly back to the hands that shaped what you came to see.
          This is not a tour. It is a relationship with a place.
        </p>

        <div className="reveal" style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 1, background: "rgba(61,90,71,.08)", borderRadius: 4, overflow: "hidden",
          maxWidth: 640, margin: "0 auto",
        }}>
          {[
            ["From", "$1,145 per person"],
            ["Duration", "7 Days · 6 Nights"],
            ["Season", "Oct – April"],
            ["Min. Group", "2 Guests"],
          ].map(([label, val], i) => (
            <div key={i} style={{ padding: "24px 16px", background: S.sand, textAlign: "center" }}>
              <div style={{ fontSize: ".6rem", letterSpacing: ".2em", textTransform: "uppercase", color: S.greenLight, marginBottom: 6, fontWeight: 600 }}>{label}</div>
              <div style={{ fontFamily: "Playfair Display, serif", fontSize: ".95rem", color: S.charcoal }}>{val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ROUTE / ITINERARY
      ══════════════════════════════════════════════ */}
      <section id="route-map" style={{ background: S.parchment, padding: "100px 24px", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

            <div>
              <p className="ornament reveal" style={{ marginBottom: 20 }}>The Route</p>
              <h2 className="font-serif reveal" style={{
                fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 400,
                color: S.charcoal, lineHeight: 1.2, marginBottom: 20,
              }}>
                A living corridor,<br />not a checklist.
              </h2>
              <p className="reveal" style={{ fontSize: ".9rem", color: S.umber, lineHeight: 1.85, marginBottom: 36, maxWidth: 400, fontWeight: 300 }}>
                The route follows the ancient Chandela and Bundela cultural axis —
                from warrior Jhansi to the silk looms of Chanderi, through forest temples
                and tribal hearths, to the stone poetry of Khajuraho.
                Hover each destination to reveal its soul.
              </p>

              <div className="reveal" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: S.terra }} />
                  <span style={{ fontSize: ".72rem", color: S.umber }}>Heritage / Cultural</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: S.green }} />
                  <span style={{ fontSize: ".72rem", color: S.umber }}>Nature / Eco</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: S.umber }} />
                  <span style={{ fontSize: ".72rem", color: S.umber }}>Community Stay</span>
                </div>
              </div>
            </div>

            <div className="reveal" style={{ paddingTop: 8 }}>
              <RouteMap />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SIGNATURE EXPERIENCES STRIP
      ══════════════════════════════════════════════ */}
      <section id="experiences" style={{ padding: "90px 24px", background: S.sand, scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p className="ornament reveal" style={{ marginBottom: 18 }}>Signature Experiences</p>
            <h2 className="font-serif reveal" style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 400, color: S.charcoal }}>
              Unavailable anywhere else. <em style={{ color: S.terra }}>By design.</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2 }}>
            {[
              { icon: Mountain, color: S.terra,  title: "Garh Kundar Fort, En Route",     desc: "A 10th-century hilltop fortress and its vanishing-court legend, visited on the way from Jhansi to Orchha — not a tiring side trip after check-in.", tag: "Heritage · Day 1", imgLabel: "Garh Kundar Fort, en route", g1: "#8B5A3C", g2: "#4A2E1C", image: garhKundarFortPhoto },
              { icon: Sun,      color: S.umber,   title: "Orchha Homemaker's Kitchen",    desc: "A hands-on cooking class in a family home, market walk included — recipes and rhythms passed down long before this became an itinerary stop.", tag: "Culinary · Day 2", imgLabel: "Homemaker's kitchen, Orchha", g1: "#A0672E", g2: "#4A2E1C", image: homemakersKitchenPhoto },
              { icon: Star,     color: S.umber,   title: "Lunch at Gaurkripa Bundeli Bhojanalay", desc: "A real, named Orchha institution serving an authentic Bundeli thali — the kind of specific local detail that separates a credible ground operator from a templated brochure.", tag: "Culinary · Day 3", imgLabel: "Gaurkripa Bundeli Bhojanalay", g1: "#8B5A3C", g2: "#3C2818" },
              { icon: TreePine, color: S.green,   title: "Chanderi Handloom Village",     desc: "Meet master weavers at the pit looms of the GI-tagged Chanderi silk tradition, with a hands-on loom session at the village itself.", tag: "Craft · Day 3", imgLabel: "Chanderi handloom village", g1: "#6B8C6B", g2: "#2E3D2E", image: handloomWeavingPhoto },
              { icon: Heart,    color: S.terra,   title: "Bedia Community & Rai Dance",   desc: "An evening with the Bedia community of Lalitpur — communal fire-cooked dinner followed by the Rai folk-ballad tradition, the community's own signature art form.", tag: "Community · Day 4", imgLabel: "Bedia community, Rai dance", g1: "#C4855A", g2: "#5A2E1C", image: raiDancePhoto },
              { icon: Waves,    color: S.umber,   title: "Bhimkund — Vedic Rituals & Lunch", desc: "A spring-fed sacred pond en route to Khajuraho, treated as a proper stop — a short ritual, then a relaxed lunch, not a rushed halt.", tag: "Ritual · Day 5", imgLabel: "Bhimkund, Vedic rituals", g1: "#8B7355", g2: "#3C3020", image: bhimkundPhoto },
              { icon: Moon,     color: S.terra,   title: "Khajuraho Light & Sound Show",  desc: "An evening show at the temple complex, built around a fixed government schedule — the day's transit is planned backward from this single commitment.", tag: "Culture · Day 5", imgLabel: "Khajuraho Light & Sound show", g1: "#3D5A47", g2: "#1C1C1A", image: khajurahoLightSoundPhoto },
              { icon: Sunrise,  color: S.green,   title: "Pre-Dawn Yoga at the Temples",  desc: "A guided yoga session at the Western Group of Temples before sunrise, followed by a guided walk as the first light reaches the shikharas.", tag: "Wellness · Day 6", imgLabel: "Pre-dawn yoga, Khajuraho temples", g1: "#3D5A47", g2: "#1C2E22", image: khajurahoYogaPhoto },
              { icon: Leaf,     color: S.green,   title: "Pottery Class & Cultural Evening", desc: "An afternoon at the wheel with a local potter, followed by a cultural evening — dinner paired with a folk performance.", tag: "Craft · Day 6", imgLabel: "Pottery class, Khajuraho", g1: "#8B7355", g2: "#3D2E1C" },
            ].map((e, i) => {
              const Icon = e.icon;
              return (
                <div key={i} className="reveal stat-card" style={{
                  background: S.sand,
                  border: "1px solid rgba(139,115,85,.12)",
                  padding: "20px 28px 32px",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 2,
                    background: e.color, opacity: .7,
                  }} />
                  <PlaceholderImage label={e.imgLabel} colorFrom={e.g1} colorTo={e.g2} image={e.image} />
                  <div style={{ marginBottom: 16 }}>
                    <Icon size={18} color={e.color} strokeWidth={1.5} />
                  </div>
                  <div style={{ fontSize: ".58rem", letterSpacing: ".2em", textTransform: "uppercase", color: e.color, marginBottom: 8, fontWeight: 600 }}>
                    {e.tag}
                  </div>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1rem", fontWeight: 500, color: S.charcoal, marginBottom: 10, lineHeight: 1.3 }}>
                    {e.title}
                  </h3>
                  <p style={{ fontSize: ".8rem", color: S.umber, lineHeight: 1.7, fontWeight: 300 }}>
                    {e.desc}
                  </p>
                  {e.note && (
                    <p style={{ fontSize: ".68rem", color: e.color, fontStyle: "italic", marginTop: 10, opacity: .8 }}>
                      Offered at one destination on the route, confirmed closer to departure.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          RAW TO REFINED CONTRAST
      ══════════════════════════════════════════════ */}
      <section style={{ background: S.charcoal, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p className="ornament reveal" style={{ color: S.umLight, marginBottom: 18 }}>Our Core Differentiator</p>
            <h2 className="font-serif reveal" style={{
              fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 400,
              color: "#F2EDE4", lineHeight: 1.2,
            }}>
              From <em style={{ color: S.terra }}>people</em> to <em style={{ color: S.greenLight }}>wilderness.</em><br />
              Both are luxury.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>

            {/* Bedia Community */}
            <div className="reveal contrast-panel" style={{
              background: "rgba(196,133,90,.08)",
              border: "1px solid rgba(196,133,90,.2)",
              borderRadius: 4, padding: "48px 36px",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: S.terra,
              }} />
              <div style={{ marginBottom: 28 }}>
                <Heart size={28} color={S.terra} strokeWidth={1.3} />
              </div>
              <PlaceholderImage label="Bedia household, Lalitpur" colorFrom="#C4855A" colorTo="#3D2214" height={140} />
              <div style={{ fontSize: ".6rem", letterSpacing: ".25em", textTransform: "uppercase", color: S.terra, marginBottom: 12, fontWeight: 600 }}>
                Night 4 · Lalitpur
              </div>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", fontWeight: 400, color: "#F2EDE4", marginBottom: 16, lineHeight: 1.25 }}>
                An Evening with the Bedia Community
              </h3>
              <p style={{ fontSize: ".85rem", color: "rgba(196,133,90,.75)", lineHeight: 1.8, marginBottom: 28, fontWeight: 300 }}>
                The Bedia community of Lalitpur has lived in this forest corridor for centuries.
                You will eat from their fire and close the evening with the Rai folk-ballad tradition —
                a performance art the community has carried for generations, introduced with real context,
                not staged for effect.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["60% of the experience fee — directly to the host family", "Already included in your package price, not a separate fee", "Community liaison present throughout the evening"].map((t, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: S.terra, marginTop: 7, flexShrink: 0 }} />
                    <span style={{ fontSize: ".78rem", color: "rgba(232,223,208,.6)", lineHeight: 1.6 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* MPT Khajuraho / Syna Heritage Hotel */}
            <div className="reveal contrast-panel" style={{
              background: "rgba(61,90,71,.08)",
              border: "1px solid rgba(61,90,71,.25)",
              borderRadius: 4, padding: "48px 36px",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: S.green,
              }} />
              <div style={{ marginBottom: 28 }}>
                <Shield size={28} color={S.greenLight} strokeWidth={1.3} />
              </div>
              <PlaceholderImage label="MPT Khajuraho / Syna Heritage Hotel" colorFrom="#6B8C6B" colorTo="#1C2E22" height={140} />
              <div style={{ fontSize: ".6rem", letterSpacing: ".25em", textTransform: "uppercase", color: S.greenLight, marginBottom: 12, fontWeight: 600 }}>
                Nights 5–6 · Khajuraho
              </div>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", fontWeight: 400, color: "#F2EDE4", marginBottom: 16, lineHeight: 1.25 }}>
                MPT Khajuraho /<br />Syna Heritage Hotel
              </h3>
              <p style={{ fontSize: ".85rem", color: "rgba(107,140,107,.75)", lineHeight: 1.8, marginBottom: 28, fontWeight: 300 }}>
                Dependable heritage hospitality in the temple town itself.
                A short walk from the Western Group of Temples.
                Your two nights here hold the Light &amp; Sound show, pre-dawn yoga
                at the temples, and an afternoon pottery class.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Government-timed Light & Sound show at the temple complex", "Vetted heritage property, minutes from the temple complex", "Pre-dawn yoga session at the Western Group of Temples"].map((t, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: S.greenLight, marginTop: 7, flexShrink: 0 }} />
                    <span style={{ fontSize: ".78rem", color: "rgba(232,223,208,.6)", lineHeight: 1.6 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The bridge between them */}
            <div className="reveal contrast-panel" style={{
              background: "rgba(242,237,228,.04)",
              border: "1px solid rgba(242,237,228,.08)",
              borderRadius: 4, padding: "48px 36px",
              display: "flex", flexDirection: "column", justifyContent: "center",
            }}>
              <p className="ornament" style={{ marginBottom: 20, color: S.umLight }}>· · ·</p>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.3rem", fontWeight: 400, color: "#F2EDE4", lineHeight: 1.4, marginBottom: 20 }}>
                "The warmth of one evening with the Bedia carries into the temple town that follows."
              </h3>
              <p style={{ fontSize: ".78rem", color: "rgba(232,223,208,.4)", marginBottom: 36, fontStyle: "italic" }}>
                — Consortium Curator, BST Classic Refinement
              </p>
              <div style={{
                padding: "20px 24px",
                background: "rgba(196,133,90,.08)",
                border: "1px solid rgba(196,133,90,.15)",
                borderRadius: 2,
              }}>
                <div style={{ fontSize: ".58rem", letterSpacing: ".2em", textTransform: "uppercase", color: S.terra, marginBottom: 8, fontWeight: 600 }}>Physical Fatigue Index</div>
                <div style={{ display: "flex", gap: 4, alignItems: "center", marginBottom: 6 }}>
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <div key={n} style={{
                      height: 6, flex: 1, borderRadius: 1,
                      background: n <= 5 ? S.terra : "rgba(196,133,90,.18)",
                    }} />
                  ))}
                </div>
                <span style={{ fontSize: ".72rem", color: "rgba(232,223,208,.5)" }}>Day 5: 5/10 — the longest transit day, with a single Bhimkund stop built into the drive rather than a rushed multi-stop route.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          COMMUNITY IMPACT
      ══════════════════════════════════════════════ */}
      <section id="community-impact" style={{ padding: "100px 24px", background: S.sand, scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p className="ornament reveal" style={{ marginBottom: 20 }}>Community Impact</p>
          <h2 className="font-serif reveal" style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 400, color: S.charcoal, lineHeight: 1.2, marginBottom: 20 }}>
            Impact is <em style={{ color: S.terra }}>included</em>,<br />
            not itemized.
          </h2>
          <p className="reveal" style={{ fontSize: ".9rem", color: S.umber, lineHeight: 1.85, maxWidth: 560, margin: "0 auto 40px", fontWeight: 300 }}>
            There is no separate community fee on your invoice. Your package price already carries it. 
            A direct share of every community experience goes straight to the host family who welcomed you, 
            and we fund infrastructure and community upgrades ourselves, as and when they're needed — 
            not as a marketing line item, but as the cost of doing this properly.
          </p>

          <div className="reveal" style={{ display: "inline-block" }}>
            <div style={{
              background: "rgba(61,90,71,.06)",
              border: "1px solid rgba(61,90,71,.15)",
              borderRadius: 4,
              padding: "40px 56px",
              textAlign: "center",
            }}>
              <div style={{ fontFamily: "Playfair Display, serif", fontSize: "2.8rem", color: S.terra, marginBottom: 8 }}>
                <Counter end={60} suffix="%" duration={1600} />
              </div>
              <div style={{ fontSize: ".68rem", letterSpacing: ".14em", textTransform: "uppercase", color: S.green, marginBottom: 8, fontWeight: 600 }}>
                Directly to Your Host Family
              </div>
              <div style={{ fontSize: ".78rem", color: S.umber, fontStyle: "italic", maxWidth: 260 }}>
                Of every community-hosted experience fee — already built into your package price.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS
          — Structured as an array so future testimonials can be
            appended without touching the layout below.
      ══════════════════════════════════════════════ */}
      <section style={{ background: S.sand, padding: "100px 24px", borderTop: "1px solid rgba(139,115,85,.1)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <p className="ornament reveal" style={{ marginBottom: 20 }}>From Our Guests</p>
          <h2 className="font-serif reveal" style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 400, color: S.charcoal, marginBottom: 56 }}>
            Told in their own words.
          </h2>

          {[
            {
              name: "Fay Campbell",
              location: "North Carolina, US",
              photo: fayCampbellPhoto,
              quote: "Sushil made my trip to India one of the true highs of my life. He took the time to really get to know what I wanted to experience on my trip there and then took me to it. I always felt secure. His English is excellent and I was always at ease. I highly recommend him.",
            },
            // Append further testimonial objects here — the layout below
            // will render each one identically, in order, once added.
          ].map((t, i) => (
            <div key={i} className="reveal" style={{
              background: S.parchment,
              border: "1px solid rgba(139,115,85,.15)",
              borderRadius: 4,
              padding: "56px 48px",
              position: "relative",
            }}>
              <div style={{
                width: 72, height: 72, borderRadius: "50%",
                background: t.photo ? `url(${t.photo}) center/cover` : "rgba(196,133,90,.12)",
                border: `1.5px solid ${S.terra}`,
                margin: "0 auto 24px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {!t.photo && (
                  <span style={{ fontFamily: "Playfair Display, serif", fontSize: "1.4rem", color: S.terra }}>
                    {t.name.replace(/[\[\]]/g, "").split(" ").map(w => w[0]).join("").slice(0, 2) || "?"}
                  </span>
                )}
              </div>
              <p style={{
                fontFamily: "Playfair Display, serif", fontStyle: "italic",
                fontSize: "1.2rem", color: S.charcoal, lineHeight: 1.6,
                marginBottom: 24, fontWeight: 400,
              }}>
                "{t.quote}"
              </p>
              <div style={{ fontSize: ".75rem", letterSpacing: ".1em", textTransform: "uppercase", color: S.terra, fontWeight: 600, marginBottom: 3 }}>
                {t.name}
              </div>
              <div style={{ fontSize: ".75rem", color: S.umber }}>
                {t.location}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PRICING
      ══════════════════════════════════════════════ */}
      <section style={{ background: S.parchment, padding: "90px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p className="ornament reveal" style={{ marginBottom: 18 }}>Land Package Only</p>
            <h2 className="font-serif reveal" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", fontWeight: 400, color: S.charcoal }}>
              Transparent pricing. No surprises.
            </h2>
          </div>

          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { group: "Couple", size: "2 guests",  usd: "$1,675", note: "Most exclusive" },
              { group: "Small Group", size: "4 guests", usd: "$1,365",  note: "Most popular" },
              { group: "Group",  size: "8 guests", usd: "$1,145",  note: "Best value",  highlight: true },
              { group: "Group",  size: "10+ guests", usd: "Custom",  note: "Fully customizable" },
            ].map((p, i) => (
              <div key={i} className="stat-card" style={{
                background: p.highlight ? S.green : S.sand,
                border: `1px solid ${p.highlight ? S.green : "rgba(139,115,85,.15)"}`,
                borderRadius: 4,
                padding: "32px 24px",
                textAlign: "center",
                position: "relative",
              }}>
                {p.highlight && (
                  <div style={{
                    position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)",
                    background: S.terra, color: "#F2EDE4",
                    fontSize: ".55rem", letterSpacing: ".2em", textTransform: "uppercase",
                    padding: "4px 12px", borderRadius: 2, fontWeight: 600,
                  }}>Best Value</div>
                )}
                <div style={{ fontSize: ".6rem", letterSpacing: ".2em", textTransform: "uppercase", color: p.highlight ? "rgba(232,223,208,.6)" : S.umber, marginBottom: 6 }}>
                  {p.group}
                </div>
                <div style={{ fontSize: ".78rem", color: p.highlight ? "rgba(232,223,208,.5)" : S.umber, marginBottom: 16 }}>{p.size}</div>
                <div style={{ fontFamily: "Playfair Display, serif", fontSize: "1.9rem", color: p.highlight ? "#F2EDE4" : S.charcoal, marginBottom: 4 }}>{p.usd}</div>
                <div style={{ fontSize: ".75rem", color: p.highlight ? "rgba(232,223,208,.6)" : S.umber, marginBottom: 16 }}>{p.usd === "Custom" ? "Quoted on request" : "USD per person"}</div>
                <div style={{
                  fontSize: ".65rem", letterSpacing: ".1em", textTransform: "uppercase",
                  color: p.highlight ? S.terra : S.greenLight, fontWeight: 600,
                }}>{p.note}</div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: "center", marginTop: 32 }}>
            <p style={{ fontSize: ".78rem", color: S.umber, fontStyle: "italic", lineHeight: 1.7 }}>
              All prices include Delhi–Jhansi train (2AC), all ground transport, all accommodations,
              daily yoga, all signature experiences, entry fees, and bilingual storyteller-guide for 7 days.<br />
              Excludes international flights, travel insurance, and personal expenses.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ENQUIRE NOW
          — Unified contact section for both prospective
            travellers and trade partners. One email, one CTA.
      ══════════════════════════════════════════════ */}
      <section style={{ background: "#141412", padding: "100px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: ".6rem", letterSpacing: ".3em", textTransform: "uppercase", color: S.terra, marginBottom: 20, fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
            Start a Conversation
          </div>
          <h2 className="font-serif reveal" style={{
            fontSize: "clamp(1.8rem, 4.5vw, 3rem)", fontWeight: 400,
            color: "#F2EDE4", lineHeight: 1.2, marginBottom: 24,
          }}>
            Ready when you are.
          </h2>
          <p className="reveal" style={{ fontSize: ".92rem", color: "rgba(196,133,90,.75)", lineHeight: 1.85, marginBottom: 44, fontWeight: 300, maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>
            Whether you're planning your own journey or exploring this as a partner opportunity, 
            reach out directly. We reply personally to every enquiry — 
            trade partners and prospective travellers are welcome to write in and discuss terms.
          </p>

          <div className="reveal glass" style={{
            borderRadius: 4, padding: "44px 40px",
            background: "rgba(28,28,26,0.6)",
            border: "1px solid rgba(196,133,90,.15)",
            marginBottom: 32,
            display: "inline-block",
            minWidth: 320,
          }}>
            <Mail size={20} color={S.terra} strokeWidth={1.5} style={{ marginBottom: 16 }} />
            <div style={{ fontSize: ".58rem", letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(196,133,90,.5)", marginBottom: 8 }}>
              Email Us
            </div>
            <div style={{ fontFamily: "Playfair Display, serif", fontSize: "1.15rem", color: "#F2EDE4" }}>
              sushilagarwalbhm@gmail.com
            </div>
          </div>

          <div className="reveal" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:sushilagarwalbhm@gmail.com" className="cta-primary" style={{
              padding: "14px 32px", fontSize: ".75rem", letterSpacing: ".12em",
              textTransform: "uppercase", borderRadius: 2, cursor: "pointer",
              fontFamily: "Inter, sans-serif", fontWeight: 500,
              textDecoration: "none", display: "inline-block",
            }}>
              Enquire Now
            </a>
          </div>

          <div className="reveal" style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", marginTop: 40 }}>
            {[
              { icon: MapPin, val: "Jhansi, Uttar Pradesh, India" },
              { icon: Globe,  val: "bundelkhandslowtrails.in" },
            ].map(({ icon: Icon, val }, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <Icon size={13} color={S.terra} strokeWidth={1.5} />
                <span style={{ fontSize: ".72rem", color: "rgba(232,223,208,.5)" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <footer style={{ background: S.charcoal, padding: "60px 24px 40px", borderTop: `1px solid rgba(196,133,90,.1)` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 40, marginBottom: 48 }}>
            <div style={{ maxWidth: 280 }}>
              <div style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", color: "#F2EDE4", marginBottom: 6 }}>
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
              {[
                { head: "The Journey", links: [
                    { label: "7-Day Itinerary", to: "/bundelkhand/itinerary" },
                    { label: "Route Map", href: "#route-map" },
                    { label: "Experiences", href: "#experiences" },
                    { label: "Accommodation", to: "/bundelkhand/accommodation" },
                ]},
                { head: "Community",   links: [
                    { label: "Community Impact", href: "#community-impact" },
                    { label: "Bedia Pledge", to: "/bundelkhand/bedia-pledge" },
                ]},
                { head: "Contact",     links: [
                    { label: "sushilagarwalbhm@gmail.com", href: "mailto:sushilagarwalbhm@gmail.com" },
                    { label: "← All Slow Trails India Journeys", to: "/" },
                ]},
              ].map(({ head, links }, i) => (
                <div key={i}>
                  <div style={{ fontSize: ".58rem", letterSpacing: ".2em", textTransform: "uppercase", color: S.terra, marginBottom: 16, fontWeight: 600 }}>{head}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {links.map(l => l.to ? (
                      <Link key={l.label} to={l.to} style={{ fontSize: ".75rem", color: "rgba(232,223,208,.35)", textDecoration: "none", transition: "color .3s ease" }}
                        onMouseEnter={e => e.target.style.color = S.umLight}
                        onMouseLeave={e => e.target.style.color = "rgba(232,223,208,.35)"}
                      >{l.label}</Link>
                    ) : (
                      <a key={l.label} href={l.href} style={{ fontSize: ".75rem", color: "rgba(232,223,208,.35)", textDecoration: "none", transition: "color .3s ease" }}
                        onMouseEnter={e => e.target.style.color = S.umLight}
                        onMouseLeave={e => e.target.style.color = "rgba(232,223,208,.35)"}
                      >{l.label}</a>
                    ))}
                  </div>
                </div>
              ))}
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
    </div>
  );
}
