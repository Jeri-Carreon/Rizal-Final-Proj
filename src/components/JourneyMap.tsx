import { useState } from "react";
import { women, type Woman } from "../data/women";
import vintageWorldMap from "../imports/world-map-with-vintage-style_23-2148318256.avif";

interface Props {
  onOpenExhibit: (w: Woman) => void;
}

const mapPinPositions: Record<string, { x: number; y: number }> = {
  teodora: { x: 85.2, y: 49.6 },
  segunda: { x: 82.0, y: 47.8 },
  leonor: { x: 85.2, y: 44.5 },
  osei: { x: 86.7, y: 34.2 },
  nelly: { x: 47.2, y: 26.6 },
  consuelo: { x: 44.9, y: 32.4 },
  suzanne: { x: 48.1, y: 20.8 },
  josephine: { x: 84.0, y: 54.4 },
};

const pinLabelOffsets: Record<string, { x: number; y: number }> = {
  teodora: { x: 30, y: 0 },
  segunda: { x: -128, y: 0 },
  leonor: { x: 34, y: 0 },
  osei: { x: 32, y: 0 },
  nelly: { x: -142, y: 0 },
  consuelo: { x: 25, y: 2 },
  suzanne: { x: 27, y: 0 },
  josephine: { x: 25, y: 0 },
};

function getPinPosition(woman: Woman) {
  return mapPinPositions[woman.id] ?? { x: woman.mapX, y: woman.mapY };
}
export default function JourneyMap({ onOpenExhibit }: Props) {
  const [selected, setSelected] = useState<Woman | null>(women[0]);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="journey"
      className="bg-background"
      style={{ borderTop: "1px solid #2a1f0e" }}
    >
      {/* Section header */}
      <div className="text-center px-6 py-16">
        <p
          className="font-display italic mb-3"
          style={{ color: "#c9a84c", fontSize: "0.75rem", letterSpacing: "0.4em", opacity: 0.7 }}
        >
          The Journey
        </p>
        <h2
          className="font-display font-semibold"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#e8d9bc",
            fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
          }}
        >
          Ang Paglalakbay
        </h2>
        <div className="flex items-center justify-center gap-4 mt-5">
          <div className="h-px w-16" style={{ background: "#3a2a14" }} />
          <span style={{ color: "#3a2a14", fontSize: "0.7rem" }}>✦</span>
          <div className="h-px w-16" style={{ background: "#3a2a14" }} />
        </div>
        <p
          className="font-body italic mt-5 mx-auto max-w-xl text-lg leading-relaxed"
          style={{ color: "#9b8860", fontFamily: "'EB Garamond', Garamond, serif" }}
        >
          Across four countries and two decades, Rizal's heart traced a geography as wide as his mind.
          Select a location to learn what each place was like during his time.
        </p>
      </div>

      {/* Map + panel layout */}
      <div className="flex flex-col lg:flex-row items-stretch" style={{ minHeight: "540px" }}>
        {/* MAP */}
        <div
          className="relative flex-1 overflow-hidden h-full"
          style={{ minHeight: "560px", height: "clamp(560px, 72vh, 820px)", background: "#0a0703" }}
        >
          <img
            src={vintageWorldMap}
            alt="Vintage-style world map"
            className="absolute inset-0 w-full h-full"
            style={{
              objectFit: "cover",
              objectPosition: "center center",
              filter: "brightness(0.62) sepia(0.2) saturate(0.95)",
            }}
          />

          {/* Warm amber tint overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "rgba(180, 110, 20, 0.08)", mixBlendMode: "screen" }}
          />

          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(5,3,1,0.7) 100%)",
            }}
          />

          {/* Location pins */}
          {women.map((woman) => {
            const isSelected = selected?.id === woman.id;
            const isHovered = hovered === woman.id;
            const active = isSelected || isHovered;
            const position = getPinPosition(woman);
            const labelOffset = pinLabelOffsets[woman.id] ?? { x: 24, y: -18 };

            return (
              <div key={woman.id} className="contents">
              <button
                type="button"
                onClick={() => setSelected(woman)}
                onMouseEnter={() => setHovered(woman.id)}
                onMouseLeave={() => setHovered(null)}
                className="absolute flex items-center justify-center focus:outline-none"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  transform: "translate(-50%, -50%)",
                  width: "40px",
                  height: "40px",
                  zIndex: active ? 30 : 20,
                }}
                aria-label={`Select location: ${woman.location}`}
              >
                {/* Pulse ring */}
                {isSelected && (
                  <span
                    className="absolute rounded-full pin-pulse"
                    style={{
                      inset: "-12px",
                      border: "1px solid #c9a84c",
                      borderRadius: "50%",
                      opacity: 0,
                    }}
                  />
                )}

                {/* Outer ring */}
                <span
                  className="absolute rounded-full"
                  style={{
                    inset: "2px",
                    background: active ? "rgba(201,168,76,0.22)" : "rgba(10,7,3,0.78)",
                    border: `2px solid ${active ? "#f0cf73" : "#c9a84c"}`,
                    borderRadius: "50%",
                    boxShadow: "0 0 0 2px rgba(10,7,3,0.85), 0 0 18px rgba(201,168,76,0.35)",
                    transition: "all 0.3s ease",
                  }}
                />
                {/* Numbered marker */}
                <span
                  className="relative flex items-center justify-center rounded-full"
                  style={{
                    width: active ? "28px" : "26px",
                    height: active ? "28px" : "26px",
                    background: active ? "#f0cf73" : "#c9a84c",
                    color: "#0a0703",
                    boxShadow: active ? "0 0 16px #c9a84c, 0 0 30px #c9a84c66" : "0 0 10px rgba(201,168,76,0.55)",
                    transition: "all 0.3s ease",
                    borderRadius: "50%",
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {woman.numeral}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setSelected(woman)}
                onMouseEnter={() => setHovered(woman.id)}
                onMouseLeave={() => setHovered(null)}
                className="hidden md:block absolute whitespace-nowrap px-2 py-1 focus:outline-none"
                style={{
                  left: `calc(${position.x}% + ${labelOffset.x}px)`,
                  top: `calc(${position.y}% + ${labelOffset.y}px)`,
                  transform: "translateY(-50%)",
                  background: "rgba(10,7,3,0.86)",
                  border: `1px solid ${active ? "#c9a84c" : "#6f5727"}`,
                  color: active ? "#f0cf73" : "#e8d9bc",
                  fontSize: "0.54rem",
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  fontFamily: "'EB Garamond', Garamond, serif",
                  boxShadow: "0 6px 14px rgba(0,0,0,0.35)",
                  zIndex: active ? 31 : 21,
                }}
                aria-label={`Select location: ${woman.location}`}
              >
                {woman.location}
              </button>
              </div>
            );
          })}

          {/* SVG connecting lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.18 }}
          >
            {women.map((woman, i) => {
              if (i === 0) return null;
              const prev = women[i - 1];
              const from = getPinPosition(prev);
              const to = getPinPosition(woman);
              return (
                <line
                  key={woman.id}
                  x1={`${from.x}%`}
                  y1={`${from.y}%`}
                  x2={`${to.x}%`}
                  y2={`${to.y}%`}
                  stroke="#c9a84c"
                  strokeWidth="0.5"
                  strokeDasharray="3 5"
                />
              );
            })}
          </svg>
        </div>

        {/* SIDE PANEL */}
        <div
          className="lg:w-80 xl:w-96 flex-shrink-0 flex flex-col h-full"
          style={{
            background: "#0e0a06",
            borderLeft: "1px solid #2a1f0e",
            borderTop: "1px solid #2a1f0e",
          }}
        >
          {selected ? (
            <LocationPanel woman={selected} onOpenExhibit={onOpenExhibit} />
          ) : (
            <div className="flex-1 flex items-center justify-center p-8 text-center min-h-65 lg:min-h-0">
              <p
                className="font-body italic"
                style={{ color: "#3a2a14", fontFamily: "'EB Garamond', Garamond, serif", fontSize: "1rem" }}
              >
                Select a location on the map
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile location list */}
      <div className="lg:hidden overflow-x-auto px-6 pb-8 pt-4">
        <div className="flex gap-3" style={{ minWidth: "max-content" }}>
          {women.map((woman) => (
            <button
              key={woman.id}
              onClick={() => setSelected(woman)}
              className="flex-shrink-0 text-left px-4 py-3 transition-all duration-300"
              style={{
                background: selected?.id === woman.id ? "#1a1108" : "#120d06",
                border: `1px solid ${selected?.id === woman.id ? "#c9a84c55" : "#2a1f0e"}`,
                minWidth: "140px",
              }}
            >
              <p
                className="font-display italic text-xs mb-1"
                style={{ color: "#c9a84c", fontFamily: "'Playfair Display', Georgia, serif", fontSize: "0.6rem" }}
              >
                {woman.numeral}
              </p>
              <p
                className="font-display font-semibold text-sm leading-tight"
                style={{ color: "#e8d9bc", fontFamily: "'Playfair Display', Georgia, serif", fontSize: "0.82rem" }}
              >
                {woman.name.split(" ")[0]}
              </p>
              <p
                style={{ color: "#9b8860", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "2px" }}
              >
                {woman.location}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationPanel({ woman, onOpenExhibit }: { woman: Woman; onOpenExhibit: (w: Woman) => void }) {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Portrait thumbnail */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ aspectRatio: "11 / 7", background: "#0a0703" }}>
        <img
          src={woman.thumbnail ?? woman.portrait}
          alt={woman.name}
          className="w-full h-full object-cover object-top"
          style={{ filter: "brightness(0.65) sepia(0.3)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent 30%, #0e0a06 100%)" }}
        />
        {/* Exhibit badge */}
        <div
          className="absolute top-3 left-3 px-2 py-1"
          style={{
            background: "rgba(10,7,3,0.85)",
            border: "1px solid #c9a84c44",
            color: "#c9a84c",
            fontSize: "0.55rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontFamily: "'EB Garamond', Garamond, serif",
          }}
        >
          Exhibit {woman.numeral} · {woman.role}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Location heading */}
        <div className="mb-4">
          <p
            style={{ color: "#c9a84c", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.7, marginBottom: "4px" }}
          >
            {woman.location} · {woman.years}
          </p>
          <h3
            className="font-display font-semibold leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#e8d9bc", fontSize: "1.35rem" }}
          >
            {woman.name}
          </h3>
          <p
            className="font-body italic mt-1"
            style={{ fontFamily: "'EB Garamond', Garamond, serif", color: "#9b8860", fontSize: "0.9rem" }}
          >
            {woman.relationship}
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1" style={{ background: "#2a1f0e" }} />
          <span style={{ color: "#2a1f0e", fontSize: "0.55rem" }}>✦</span>
        </div>

        {/* Place info heading */}
        <p
          style={{ color: "#c9a84c", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.6, marginBottom: "8px" }}
        >
          About this place in Rizal's time
        </p>

        {/* Place info body */}
        <p
          className="font-body leading-relaxed flex-1"
          style={{
            fontFamily: "'EB Garamond', Garamond, serif",
            color: "#c4a97d",
            fontSize: "0.95rem",
            lineHeight: 1.75,
          }}
        >
          {woman.placeInfo}
        </p>

        {/* CTA */}
        <button
          onClick={() => onOpenExhibit(woman)}
          className="mt-6 w-full py-3 text-xs uppercase tracking-widest transition-all duration-300 group"
          style={{
            border: "1px solid #c9a84c55",
            color: "#c9a84c",
            background: "transparent",
            letterSpacing: "0.25em",
            fontSize: "0.6rem",
            fontFamily: "'EB Garamond', Garamond, serif",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#1a1108";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#c9a84c";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#c9a84c55";
          }}
        >
          View Full Exhibit →
        </button>
      </div>
    </div>
  );
}
