import { useState } from "react";
import { women, type Woman } from "../data/women";

interface Props {
  onOpenExhibit: (w: Woman) => void;
}

const MAP_IMG =
  "https://images.unsplash.com/photo-1723306009175-dca7d26f3350?w=2000&h=1400&fit=crop&auto=format";

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
        <div className="relative flex-1 overflow-hidden h-full" style={{ minHeight: "1000px", background: "#0a0703" }}>
          {/* Antique map background */}
          <img
            src={MAP_IMG}
            alt="Antique world map"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "sepia(0.85) brightness(0.35) contrast(1.1)", mixBlendMode: "luminosity" }}
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

            return (
              <button
                key={woman.id}
                onClick={() => setSelected(woman)}
                onMouseEnter={() => setHovered(woman.id)}
                onMouseLeave={() => setHovered(null)}
                className="absolute focus:outline-none"
                style={{
                  left: `${woman.mapX}%`,
                  top: `${woman.mapY}%`,
                  transform: "translate(-50%, -50%)",
                  zIndex: active ? 20 : 10,
                }}
                aria-label={`Select location: ${woman.location}`}
              >
                {/* Pulse ring */}
                {isSelected && (
                  <span
                    className="absolute rounded-full pin-pulse"
                    style={{
                      inset: "-8px",
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
                    inset: "-5px",
                    border: `1px solid ${active ? "#c9a84c" : "#c9a84c44"}`,
                    borderRadius: "50%",
                    transition: "border-color 0.3s, opacity 0.3s",
                  }}
                />

                {/* Dot */}
                <span
                  className="relative block rounded-full"
                  style={{
                    width: active ? "12px" : "8px",
                    height: active ? "12px" : "8px",
                    background: active ? "#c9a84c" : "#c9a84c88",
                    boxShadow: active ? "0 0 12px #c9a84c, 0 0 24px #c9a84c66" : "none",
                    transition: "all 0.3s ease",
                    borderRadius: "50%",
                  }}
                />

                {/* Tooltip label on hover */}
                {isHovered && !isSelected && (
                  <div
                    className="absolute pointer-events-none whitespace-nowrap px-2 py-1"
                    style={{
                      bottom: "calc(100% + 10px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(10,7,3,0.95)",
                      border: "1px solid #3a2a14",
                      color: "#e8d9bc",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      fontFamily: "'EB Garamond', Garamond, serif",
                    }}
                  >
                    {woman.location}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-5px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "5px solid transparent",
                        borderRight: "5px solid transparent",
                        borderTop: "5px solid #3a2a14",
                      }}
                    />
                  </div>
                )}
              </button>
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
              return (
                <line
                  key={woman.id}
                  x1={`${prev.mapX}%`}
                  y1={`${prev.mapY}%`}
                  x2={`${woman.mapX}%`}
                  y2={`${woman.mapY}%`}
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
