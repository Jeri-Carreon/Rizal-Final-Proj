import { useState } from "react";
import { women, type Woman } from "./data/women";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import RizalBio from "./components/RizalBio";
import Gallery from "./components/Gallery";
import JourneyMap from "./components/JourneyMap";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

export default function App() {
  const [selected, setSelected] = useState<Woman | null>(null);
  const [activeSection, setActiveSection] = useState<"gallery" | "journey">("gallery");

  const navigateTo = (section: "gallery" | "journey") => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'EB Garamond', Garamond, serif" }}>
      <Hero />
      <RizalBio />
      <Nav activeSection={activeSection} onNavigate={navigateTo} />
      <Gallery women={women} onSelect={setSelected} />
      <JourneyMap onOpenExhibit={setSelected} />
      <Footer />
      {selected && <Modal woman={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
