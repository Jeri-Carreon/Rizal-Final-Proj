export default function Footer() {
  return (
    <footer
      className="text-center px-6 py-16"
      style={{ borderTop: "1px solid #3a2a14", background: "#0a0704" }}
    >
      {/* Ornamental top */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-px w-12" style={{ background: "#3a2a14" }} />
        <span style={{ color: "#3a2a14", fontSize: "0.7rem" }}>✦</span>
        <div className="h-px w-12" style={{ background: "#3a2a14" }} />
      </div>

      <p
        className="font-display italic mb-3"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          color: "#c9a84c",
          fontSize: "1.4rem",
          opacity: 0.6,
        }}
      >
        Ang hindi marunong lumingon sa pinanggalingan
        <br />
        ay hindi makararating sa paroroonan.
      </p>

      <p
        className="font-body italic text-sm mt-2"
        style={{ color: "#3a2a14", fontFamily: "'EB Garamond', Garamond, serif", fontSize: "0.85rem" }}
      >
        He who does not look back at where he came from will not reach his destination.
        <br />
        — José Rizal
      </p>

      <div className="mt-10 flex items-center justify-center gap-4">
        <div className="h-px w-8" style={{ background: "#2a1f0e" }} />
        <p
          className="uppercase text-xs tracking-widest"
          style={{ color: "#2a1f0e", letterSpacing: "0.35em", fontSize: "0.6rem" }}
        >
          Museo Virtual · The Women Who Shaped José Rizal · 2026
        </p>
        <div className="h-px w-8" style={{ background: "#2a1f0e" }} />
      </div>
    </footer>
  );
}
