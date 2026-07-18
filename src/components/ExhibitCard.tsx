import { useRef } from "react";
import { type Woman } from "../data/women";
import { useReveal } from "../hooks/useReveal";

interface Props {
  woman: Woman;
  index: number;
  onSelect: (w: Woman) => void;
}

export default function ExhibitCard({ woman, index, onSelect }: Props) {
  const { ref, revealed } = useReveal();
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = imgRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `scale(1.06) translate(${cx * -10}px, ${cy * -8}px)`;
  };

  const handleMouseLeave = () => {
    if (imgRef.current) imgRef.current.style.transform = "scale(1) translate(0,0)";
  };

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        transitionDelay: `${index * 0.09}s`,
      }}
    >
      <button
        onClick={() => onSelect(woman)}
        className="group text-left w-full focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
        aria-label={`View exhibit: ${woman.name}`}
      >
        {/* Portrait frame */}
        <div
          className="relative overflow-hidden bg-card cursor-pointer"
          style={{ aspectRatio: "3 / 4", border: "1px solid #3a2a14", transition: "border-color 0.3s, box-shadow 0.4s" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#c9a84c66";
            e.currentTarget.style.boxShadow =
              "0 0 0 1px #c9a84c55, 0 0 0 8px #120d06, 0 0 0 9px #c9a84c33, 0 12px 48px rgba(0,0,0,0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#3a2a14";
            e.currentTarget.style.boxShadow = "none";
          }}
          onMouseMove={handleMouseMove}
          onMouseOut={handleMouseLeave}
        >
          {/* Portrait image */}
          <img
            ref={imgRef}
            src={woman.portrait}
            alt={`Portrait representing ${woman.name}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transition: "transform 0.5s ease", willChange: "transform" }}
          />

          {/* Persistent gradient vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(14,10,6,0.15) 0%, rgba(14,10,6,0) 35%, rgba(14,10,6,0.5) 70%, rgba(14,10,6,0.92) 100%)",
            }}
          />

          {/* Quote overlay — slides up on hover */}
          <div
            className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 pointer-events-none px-4 pt-12 pb-5"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(10,7,3,0.97) 40%)",
              transition: "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <p
              className="font-display italic text-sm leading-relaxed mb-1"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#c9a84c",
                opacity: 0.9,
                fontSize: "0.82rem",
              }}
            >
              "{woman.quote}"
            </p>
          </div>

          {/* Exhibit numeral */}
          <div
            className="absolute top-3 left-3 font-display italic"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#c9a84c", fontSize: "0.65rem", opacity: 0.65, letterSpacing: "0.1em" }}
          >
            {woman.numeral}
          </div>

          {/* Role tag */}
          <div
            className="absolute top-3 right-3 uppercase px-2 py-0.5"
            style={{
              background: "rgba(10,7,3,0.82)",
              color: "#c9a84c",
              fontSize: "0.5rem",
              letterSpacing: "0.22em",
              border: "1px solid #c9a84c22",
            }}
          >
            {woman.role}
          </div>

          {/* "Enter" hint on hover */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none"
            style={{ transition: "opacity 0.3s ease" }}
          >
            <div
              className="px-4 py-2 text-xs uppercase tracking-widest"
              style={{
                background: "rgba(10,7,3,0.8)",
                color: "#c9a84c",
                border: "1px solid #c9a84c55",
                letterSpacing: "0.25em",
                fontSize: "0.55rem",
                marginBottom: "4rem",
              }}
            >
              Enter Exhibit
            </div>
          </div>
        </div>

        {/* Nameplate */}
        <div className="px-3 py-4" style={{ borderTop: "1px solid #2a1f0e" }}>
          <p
            className="font-display font-semibold leading-tight mb-1 group-hover:text-primary transition-colors duration-300"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#e8d9bc", fontSize: "1rem" }}
          >
            {woman.name}
          </p>
          <p
            className="font-body italic"
            style={{ fontFamily: "'EB Garamond', Garamond, serif", color: "#9b8860", fontSize: "0.82rem" }}
          >
            {woman.relationship}
          </p>
          <p
            className="mt-1"
            style={{ color: "#3a2a14", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
          >
            {woman.location}
          </p>
        </div>
      </button>
    </article>
  );
}
