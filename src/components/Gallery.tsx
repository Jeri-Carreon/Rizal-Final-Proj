import { type Woman } from "../data/women";
import ExhibitCard from "./ExhibitCard";

interface Props {
  women: Woman[];
  onSelect: (w: Woman) => void;
}

export default function Gallery({ women, onSelect }: Props) {
  return (
    <section id="gallery" className="bg-background px-6 md:px-12 lg:px-20 py-20">
      {/* Section heading */}
      <div className="text-center mb-16">
        <p
          className="font-display italic mb-3"
          style={{ color: "#c9a84c", fontSize: "0.75rem", letterSpacing: "0.4em", opacity: 0.7 }}
        >
          The Gallery
        </p>
        <h2
          className="font-display font-semibold"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#e8d9bc",
            fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
          }}
        >
          Sala de Retratos
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
          Hover a portrait to glimpse her words. Select to enter the exhibit.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
        {women.map((woman, i) => (
          <ExhibitCard key={woman.id} woman={woman} index={i} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}
