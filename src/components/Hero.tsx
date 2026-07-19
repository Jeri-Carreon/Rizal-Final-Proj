export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 md:py-40 overflow-hidden bg-background">
      {/* Atmospheric radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 65%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Decorative top rule */}
      <div className="relative z-10 w-full max-w-3xl mx-auto mb-10">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #c9a84c44)" }} />
          <span style={{ color: "#c9a84c", opacity: 0.5, fontSize: "10px", letterSpacing: "0.3em" }} className="uppercase font-display">
            Museo Virtual
          </span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #c9a84c44)" }} />
        </div>
      </div>

      {/* Main heading */}
      <div className="relative z-10 max-w-4xl">
        <p
          className="font-display italic mb-5"
          style={{ color: "#c9a84c", fontSize: "0.8rem", letterSpacing: "0.35em", opacity: 0.8 }}
        >
          1861 – 1896
        </p>

        <h1
          className="font-display font-semibold leading-none mb-2"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(3rem, 10vw, 7rem)",
            color: "#e8d9bc",
          }}
        >
          The Women 
        </h1>
        <h2
          className="font-display italic font-normal"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            color: "#c9a84c",
            opacity: 0.85,
          }}
        >
          Who Shaped José Rizal
        </h2>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4 my-8" style={{ color: "#c9a84c" }}>
          <div className="h-px w-20" style={{ background: "#c9a84c", opacity: 0.3 }} />
          <span style={{ opacity: 0.6, fontSize: "1.1rem" }}>✦</span>
          <div className="h-px w-20" style={{ background: "#c9a84c", opacity: 0.3 }} />
        </div>

        <p
          className="font-body italic text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto"
          style={{ color: "#9b8860", fontFamily: "'EB Garamond', Garamond, serif" }}
        >
          Eight women who shaped the mind, the heart, and the legacy of the
          national hero of the Philippines.
        </p>

        <div
          className="mt-10 uppercase tracking-widest text-xs"
          style={{ color: "#3a2a14", letterSpacing: "0.4em" }}
        >
          Eight Portraits &nbsp;·&nbsp; Eight Stories
        </div>
      </div>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #3a2a14 30%, #3a2a14 70%, transparent)" }}
      />
    </section>
  );
}
