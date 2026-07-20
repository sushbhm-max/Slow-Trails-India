import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { COLORS } from "./PageShell.jsx";

const S = COLORS;

/**
 * A single itinerary card for the Slow Trails India homepage grid.
 * Pass a real photo via `image` once available; falls back to a
 * labeled gradient placeholder (matching the honesty convention used
 * elsewhere on this site) if none is supplied yet.
 */
export default function ItineraryCard({
  image,
  imgLabel,
  title,
  region,
  duration,
  priceFrom,
  tagline,
  href,
  status = "available", // "available" | "coming-soon"
}) {
  const isComingSoon = status === "coming-soon";

  const cardInner = (
    <>
      <div style={{ position: "relative", height: 260, overflow: "hidden" }}>
        {image ? (
          <img
            src={image}
            alt={title}
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              filter: isComingSoon ? "grayscale(0.6) brightness(0.7)" : "none",
              transition: "transform 0.6s cubic-bezier(.22,1,.36,1)",
            }}
            className="itinerary-card-img"
          />
        ) : (
          <div style={{
            width: "100%", height: "100%",
            background: `linear-gradient(135deg, ${S.umber} 0%, #2A2018 100%)`,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8,
          }}>
            <MapPin size={24} color="rgba(255,255,255,.5)" strokeWidth={1.3} />
            <span style={{ fontSize: ".65rem", letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.6)", textAlign: "center", padding: "0 20px" }}>
              {imgLabel || title}
            </span>
            <span style={{ fontSize: ".58rem", color: "rgba(255,255,255,.35)", fontStyle: "italic" }}>Photo pending</span>
          </div>
        )}

        {isComingSoon && (
          <div style={{
            position: "absolute", top: 16, right: 16,
            background: "rgba(28,28,26,0.85)", color: S.terra,
            fontSize: ".62rem", letterSpacing: ".14em", textTransform: "uppercase",
            padding: "6px 14px", borderRadius: 2, fontWeight: 600,
          }}>
            Coming Soon
          </div>
        )}

        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(28,28,26,0.85) 0%, rgba(28,28,26,0.1) 50%, transparent 100%)",
        }} />

        <div style={{ position: "absolute", bottom: 18, left: 22, right: 22 }}>
          <div style={{ fontSize: ".62rem", letterSpacing: ".16em", textTransform: "uppercase", color: S.terra, fontWeight: 600, marginBottom: 6 }}>
            {region}
          </div>
          <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", fontWeight: 500, color: "#F2EDE4", lineHeight: 1.25 }}>
            {title}
          </h3>
        </div>
      </div>

      <div style={{ padding: "22px 24px 26px" }}>
        <p style={{ fontSize: ".85rem", color: S.umber, lineHeight: 1.7, marginBottom: 18, fontWeight: 300, minHeight: 44 }}>
          {tagline}
        </p>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: "1px solid rgba(139,115,85,.15)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
              <Calendar size={13} color={S.greenLight} strokeWidth={1.6} />
              <span style={{ fontSize: ".78rem", color: S.charcoal, fontWeight: 500 }}>{duration}</span>
            </div>
            <span style={{ fontSize: ".72rem", color: S.umber }}>
              {isComingSoon ? "Pricing to follow" : `From ${priceFrom} / person`}
            </span>
          </div>

          {!isComingSoon && (
            <div style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: ".72rem", letterSpacing: ".08em", textTransform: "uppercase",
              color: S.terra, fontWeight: 600,
            }}>
              View Itinerary <ArrowRight size={13} strokeWidth={2} />
            </div>
          )}
        </div>
      </div>
    </>
  );

  const cardStyle = {
    background: S.sand,
    border: "1px solid rgba(139,115,85,.15)",
    borderRadius: 4,
    overflow: "hidden",
    textDecoration: "none",
    display: "block",
    cursor: isComingSoon ? "default" : "pointer",
    transition: "transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s ease",
  };

  if (isComingSoon) {
    return <div className="itinerary-card" style={cardStyle}>{cardInner}</div>;
  }

  return (
    <Link to={href} className="itinerary-card" style={cardStyle}>
      {cardInner}
    </Link>
  );
}
