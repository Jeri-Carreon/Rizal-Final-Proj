interface Props {
  activeSection: "gallery" | "journey";
  onNavigate: (section: "gallery" | "journey") => void;
}

export default function Nav({ activeSection, onNavigate }: Props) {
  return (
    <nav
      className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-12 py-3"
      style={{
        background: "rgba(10,7,3,0.92)",
        borderBottom: "1px solid #2a1f0e",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Museum wordmark */}
      <div
        className="font-display italic"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#c9a84c", fontSize: "1rem", opacity: 0.8 }}
      >
        Las Mujeres de Rizal
      </div>

      {/* Section tabs */}
      <div className="flex items-center gap-1" style={{ border: "1px solid #2a1f0e" }}>
        <button
          onClick={() => onNavigate("gallery")}
          className="px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300"
          style={{
            fontFamily: "'EB Garamond', Garamond, serif",
            letterSpacing: "0.22em",
            fontSize: "0.6rem",
            color: activeSection === "gallery" ? "#c9a84c" : "#9b8860",
            background: activeSection === "gallery" ? "#1a1108" : "transparent",
            borderRight: "1px solid #2a1f0e",
          }}
        >
          Gallery
        </button>
        <button
          onClick={() => onNavigate("journey")}
          className="px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300"
          style={{
            fontFamily: "'EB Garamond', Garamond, serif",
            letterSpacing: "0.22em",
            fontSize: "0.6rem",
            color: activeSection === "journey" ? "#c9a84c" : "#9b8860",
            background: activeSection === "journey" ? "#1a1108" : "transparent",
          }}
        >
          Journey Map
        </button>
      </div>
    </nav>
  );
}
