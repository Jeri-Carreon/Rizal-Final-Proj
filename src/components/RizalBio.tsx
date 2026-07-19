import { useState } from "react";
import Rizal from "../imports/Rizal.webp";

const facts = [
  { label: "Born", value: "June 19, 1861 · Calamba, Laguna" },
  { label: "Died", value: "December 30, 1896 · Bagumbayan, Manila" },
  { label: "Nationality", value: "Filipino" },
  { label: "Languages", value: "22 spoken and written" },
  { label: "Professions", value: "Physician, novelist, poet, sculptor, painter, ophthalmologist, propagandist" },
  { label: "Major Works", value: "Noli Me Tángere (1887) · El Filibusterismo (1891)" },
];

const tabs = [
  {
    id: "life",
    label: "Life",
    content:
      "José Protasio Rizal Mercado y Alonso Realonda was born on June 19, 1861, in Calamba, a prosperous lakeside town in Laguna province, to a principalia family of mixed Chinese, Spanish, and Malay descent. The seventh of eleven children, he showed extraordinary aptitude from childhood — his mother, Teodora Alonso, taught him to read at an exceptionally young age. He would go on to speak twenty-two languages and earned degrees in Medicine and Philosophy and Letters at the Universidad Central de Madrid before pursuing advanced ophthalmology training in Paris and Heidelberg.\n\nHe lived most of his adult life in exile — studying in Spain, traveling through France, Germany, England, Austria, and Japan, and writing the two novels that would ignite a revolution he himself never wished to lead. His genius was not the genius of the barricade but of the pen: he believed that a people who could read their own degradation with clear eyes would find their own way to demand better.",
  },
  {
    id: "significance",
    label: "Significance",
    content:
      "Rizal is widely regarded as the national hero of the Philippines. — a designation that emerged not from military heroism but from the power of his writing to name and dignify a people who had been colonized for more than three centuries. His two novels, Noli Me Tángere and El Filibusterismo, were banned by the Spanish colonial government precisely because they worked: they gave the Filipino middle class a mirror, a language for their own suffering, and a model of Filipino dignity rendered in vivid, novelistic life.\n\nThe Spanish colonial authorities understood what they were dealing with. They executed him by firing squad on December 30, 1896, hoping that killing him would silence the movement. Instead, it sparked the Philippine Revolution. He was thirty-five years old. He had never held a gun.",
  },
  {
    id: "character",
    label: "Character",
    content:
      "What makes Rizal remarkable beyond his accomplishments is the texture of his character: his irony, his tenderness, his capacity for friendship across national and class lines, and the discipline with which he maintained his principles even under mortal pressure. He was a skilled sculptor, a gifted caricaturist, a naturalist who sent zoological specimens to European museums from exile, a doctor who operated on hundreds of patients without charge.\n\nHe was also, as this museum attempts to record, a man who loved — carefully, repeatedly, and with full awareness of the contradictions of loving as a man committed to a larger cause. He wrote poems for women, painted portraits, carved gifts, hid his feelings in invisible ink. His emotional life was as precise and as abundant as his intellectual one, and the women who moved through it shaped him in ways his novels and treatises do not quite say.",
  },
];

export default function RizalBio() {
  const [activeTab, setActiveTab] = useState("life");
  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <section
      id="about"
      style={{ background: "#0a0703", borderTop: "1px solid #2a1f0e", borderBottom: "1px solid #2a1f0e" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%]">
        {/* Portrait column */}
        <div
          className="h-[480px] lg:h-full relative overflow-hidden"
          style={{ background: "#060402" }}
        >
          <img
            src={Rizal}
            alt="Period portrait representing José Rizal"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ filter: "sepia(0.4) brightness(0.7) contrast(1.1)" }}
          />
          {/* Right fade for lg */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent 60%, #0a0703 100%), linear-gradient(to bottom, rgba(6,4,2,0.2) 0%, transparent 30%, rgba(6,4,2,0.6) 100%)",
            }}
          />
          {/* Caption */}
          <div className="absolute bottom-6 left-6">
            <p
              style={{ color: "#c9a84c", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.6 }}
            >
              Subject of this Museum
            </p>
            <p
              className="font-display font-semibold mt-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#e8d9bc", fontSize: "1.4rem" }}
            >
              José Rizal
            </p>
            <p
              className="font-body italic"
              style={{ fontFamily: "'EB Garamond', Garamond, serif", color: "#9b8860", fontSize: "0.9rem" }}
            >
              1861 – 1896
            </p>
          </div>
        </div>

        {/* Content column */}
        <div className="px-8 md:px-12 py-14">
          {/* Section label */}
          <p
            style={{ color: "#c9a84c", fontSize: "0.6rem", letterSpacing: "0.4em", textTransform: "uppercase", opacity: 0.65, marginBottom: "6px" }}
          >
            About the Subject
          </p>
          <h2
            className="font-display font-semibold mb-6"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#e8d9bc",
              fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
              lineHeight: 1.15,
            }}
          >
            The National Hero of<br />the Philippines
          </h2>

          {/* Facts grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 p-5"
            style={{ background: "#0e0a06", border: "1px solid #2a1f0e" }}
          >
            {facts.map((f) => (
              <div key={f.label}>
                <p
                  style={{ color: "#c9a84c", fontSize: "0.55rem", letterSpacing: "0.25em", textTransform: "uppercase", opacity: 0.6 }}
                >
                  {f.label}
                </p>
                <p
                  className="font-body mt-0.5"
                  style={{ fontFamily: "'EB Garamond', Garamond, serif", color: "#c4a97d", fontSize: "0.88rem" }}
                >
                  {f.value}
                </p>
              </div>
            ))}
          </div>

          {/* Tab navigation */}
          <div className="flex gap-0 mb-6" style={{ borderBottom: "1px solid #2a1f0e" }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-5 py-2.5 text-xs uppercase tracking-widest transition-all duration-250 relative"
                style={{
                  fontFamily: "'EB Garamond', Garamond, serif",
                  letterSpacing: "0.2em",
                  fontSize: "0.6rem",
                  color: activeTab === tab.id ? "#c9a84c" : "#9b8860",
                  background: "transparent",
                  borderBottom: activeTab === tab.id ? "1px solid #c9a84c" : "1px solid transparent",
                  marginBottom: "-1px",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div key={activeTab} className="lg:min-h-[320px]" style={{ animation: "fadeIn 0.35s ease" }}>
            {current.content.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="font-body leading-relaxed mb-4"
                style={{
                  fontFamily: "'EB Garamond', Garamond, serif",
                  color: "#c4a97d",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Pull quote */}
          <div
            className="mt-6 pl-5 py-1"
            style={{ borderLeft: "2px solid #c9a84c44" }}
          >
            <p
              className="font-display italic"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#9b8860",
                fontSize: "1.05rem",
              }}
            >
              "There are no tyrants where there are no slaves"
            </p>
            <p
              style={{ color: "#3a2a14", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "6px" }}
            >
              — José Rizal, <em>El Filibusterismo</em> (1891)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
