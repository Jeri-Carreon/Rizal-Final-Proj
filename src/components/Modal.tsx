import { useEffect, useState } from "react";
import { type Woman, type Tribute } from "../data/women";

interface Props {
  woman: Woman;
  onClose: () => void;
}

const TRIBUTE_ICONS: Record<Tribute["type"], string> = {
  Poem: "✦",
  Letters: "✉",
  Artwork: "◈",
  "Novel Character": "◉",
  Diary: "◎",
  MEMOIR: "◎",
  Sculpture: "◆",
  Gift: "",
  Dedication: "◇",
};

const tabs = ["Story", "Tributes"] as const;
type Tab = (typeof tabs)[number];

export default function Modal({ woman, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("Story");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(4,2,1,0.94)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col"
        style={{
          background: "#100b05",
          border: "1px solid #3a2a14",
          boxShadow: "0 0 0 1px #c9a84c18, 0 32px 100px rgba(0,0,0,0.95)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 z-10 w-6 h-6 flex items-center justify-center transition-colors duration-200"
          style={{ color: "#9b8860", border: "1px solid #2a1f0e", background: "#1a1108", fontSize: "1.1rem" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#c9a84c")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#9b8860")}
          aria-label="Close exhibit"
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Portrait side — fixed */}
          <div className="md:w-2/5 flex-shrink-0 relative" style={{ minHeight: "680px", background: "#0a0703" }}>
            <img
              src={woman.portrait}
              alt={`Portrait representing ${woman.name}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(16,11,5,0.1) 40%, rgba(16,11,5,0.95) 100%)",
              }}
            />
            <div className="absolute bottom-5 left-5 right-5">
              <p
                style={{ color: "#c9a84c", fontSize: "0.55rem", letterSpacing: "0.28em", textTransform: "uppercase", opacity: 0.65 }}
              >
                {woman.location} · {woman.years}
              </p>
              <p
                className="font-display font-semibold mt-1 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#e8d9bc", fontSize: "1.2rem" }}
              >
                {woman.name}
              </p>
              <p
                className="font-body italic"
                style={{ fontFamily: "'EB Garamond', Garamond, serif", color: "#9b8860", fontSize: "0.85rem" }}
              >
                {woman.relationship}
              </p>
            </div>
            {/* Exhibit badge */}
            <div
              className="absolute top-4 left-4 px-2 py-1"
              style={{ background: "rgba(10,7,3,0.85)", border: "1px solid #c9a84c33", color: "#c9a84c", fontSize: "0.5rem", letterSpacing: "0.22em", textTransform: "uppercase" }}
            >
              Exhibit {woman.numeral} · {woman.role}
            </div>
          </div>

          {/* Text side — scrollable */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Tab bar */}
            <div
              className="flex flex-shrink-0"
              style={{ borderBottom: "1px solid #2a1f0e", background: "#0c0804" }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-6 py-4 text-xs uppercase tracking-widest transition-all duration-250 relative"
                  style={{
                    fontFamily: "'EB Garamond', Garamond, serif",
                    letterSpacing: "0.22em",
                    fontSize: "0.6rem",
                    color: activeTab === tab ? "#c9a84c" : "#9b8860",
                    borderBottom: activeTab === tab ? "1px solid #c9a84c" : "1px solid transparent",
                    marginBottom: "-1px",
                    background: "transparent",
                  }}
                >
                  {tab}
                  {tab === "Tributes" && (
                    <span
                      className="ml-2 px-1.5 py-0.5 rounded-none"
                      style={{ background: "#1a1108", color: "#c9a84c88", fontSize: "0.5rem", border: "1px solid #3a2a14" }}
                    >
                      {woman.tributes.length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Tab content — scrollable */}
            <div className="flex-1 overflow-y-auto p-7 md:p-9" key={activeTab} style={{ animation: "fadeIn 0.3s ease" }}>
              {activeTab === "Story" ? (
                <StoryTab woman={woman} onShowTributes={() => setActiveTab("Tributes")} />
              ) : (
                <TributesTab woman={woman} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryTab({ woman, onShowTributes }: { woman: Woman; onShowTributes: () => void }) {
  return (
    <>
      {/* Header row */}
      <div className="flex items-center gap-3 mb-6">
        <span
          className="font-display italic"
          style={{ color: "#c9a84c", opacity: 0.55, fontSize: "0.7rem", fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Exhibit {woman.numeral}
        </span>
        <div className="flex-1 h-px" style={{ background: "#2a1f0e" }} />
        <span style={{ color: "#2a1f0e", fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase" }}>
          {woman.role}
        </span>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px w-6" style={{ background: "#3a2a14" }} />
        <span style={{ color: "#3a2a14", fontSize: "0.55rem" }}>✦</span>
        <div className="h-px flex-1" style={{ background: "#2a1f0e" }} />
      </div>

      {/* Biography */}
      <p
        className="font-body leading-relaxed mb-8"
        style={{ fontFamily: "'EB Garamond', Garamond, serif", color: "#c4a97d", fontSize: "1.05rem", lineHeight: 1.82 }}
      >
        {woman.bio}
      </p>

      {/* Quote */}
      <blockquote className="border-l-2 pl-5 mb-4" style={{ borderColor: "#c9a84c33" }}>
        <p
          className="font-display italic leading-relaxed mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#9b8860", fontSize: "1.02rem" }}
        >
          "{woman.quote}"
        </p>
        <footer style={{ color: "#3a2a14", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
          — {woman.quoteSource}
        </footer>
      </blockquote>
      <button
        type="button"
        className="mt-6 text-xs uppercase tracking-widest transition-all duration-300"
        style={{
          color: "#c9a84c",
          opacity: 0.8,
          fontSize: "0.58rem",
          letterSpacing: "0.28em",
          border: "1px solid #c9a84c44",
          padding: "0.75rem 1rem",
          background: "#120d06",
        }}
        onClick={onShowTributes}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.opacity = "1";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#c9a84c";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.opacity = "0.8";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#c9a84c44";
        }}
      >
        See what Rizal made or did for her
      </button>
    </>
  );
}

function TributesTab({ woman }: { woman: Woman }) {
  return (
    <>
      <div className="mb-8">
        <p
          style={{ color: "#c9a84c", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", opacity: 0.65, marginBottom: "4px" }}
        >
          What Rizal Made or Did
        </p>
        <p
          className="font-body italic"
          style={{ fontFamily: "'EB Garamond', Garamond, serif", color: "#9b8860", fontSize: "0.9rem" }}
        >
          Historically grounded notes on what Rizal wrote, made, documented, or did in connection with {woman.name.split(" ")[0]}.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {woman.tributes.map((tribute, i) => (
          <TributeCard key={i} tribute={tribute} />
        ))}
      </div>
    </>
  );
}

function TributeCard({ tribute }: { tribute: Tribute }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="transition-all duration-300"
      style={{
        background: expanded ? "#160f07" : "#0e0a06",
        border: `1px solid ${expanded ? "#c9a84c44" : "#2a1f0e"}`,
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      {/* Header row */}
      <button
        type="button"
        className="w-full flex items-start gap-4 p-4 text-left"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {/* Icon */}
        <div
          className="flex-shrink-0 w-9 h-9 flex items-center justify-center"
          style={{ border: "1px solid #3a2a14", color: "#c9a84c", fontSize: "0.9rem", background: "#120d06" }}
        >
          {TRIBUTE_ICONS[tribute.type]}
        </div>

        <div className="flex-1 min-w-0">
          {/* Type badge */}
          <p
            style={{ color: "#c9a84c", fontSize: "0.5rem", letterSpacing: "0.28em", textTransform: "uppercase", opacity: 0.65, marginBottom: "3px" }}
          >
            {tribute.type}
          </p>
          {/* Title */}
          <p
            className="font-display font-semibold leading-snug"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#e8d9bc", fontSize: "0.95rem" }}
          >
            {tribute.title}
          </p>
        </div>

        {/* Expand indicator */}
        <div
          className="flex-shrink-0 mt-1"
          style={{ color: "#c9a84c", opacity: 0.65, fontSize: "0.8rem", transition: "transform 0.3s", transform: expanded ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          ›
        </div>
      </button>

      {/* Expanded description */}
      {expanded && (
        <div
          className="px-4 pb-5"
          style={{ borderTop: "1px solid #1e160a", animation: "fadeIn 0.25s ease" }}
        >
          <p
            className="font-body leading-relaxed pt-4"
            style={{
              fontFamily: "'EB Garamond', Garamond, serif",
              color: "#c4a97d",
              fontSize: "0.97rem",
              lineHeight: 1.78,
              paddingLeft: "3.25rem",
            }}
          >
            {tribute.description}
          </p>
        </div>
      )}
    </div>
  );
}
