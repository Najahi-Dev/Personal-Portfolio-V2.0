import { useState, useCallback } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { DataExperience } from "./components/DataExperience";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ParticleBackground } from "./components/ParticleBackground";
import { PageLoader } from "./components/PageLoader";

export function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadingComplete = useCallback(() => setLoading(false), []);
  return (
    <>
      {loading && <PageLoader onLoadingComplete={handleLoadingComplete} />}
      <div className="relative min-h-screen bg-dark-950 text-dark-100">
      {/* Multi-layer animated background */}
      <ParticleBackground />

      {/* Aurora / Nebula CSS layers */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Aurora blob 1 */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            top: "10%",
            left: "15%",
            background: "radial-gradient(circle, rgba(76,110,245,0.06) 0%, transparent 70%)",
            animation: "aurora-shift 25s ease-in-out infinite",
          }}
        />
        {/* Aurora blob 2 */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{
            top: "50%",
            right: "10%",
            background: "radial-gradient(circle, rgba(245,159,0,0.04) 0%, transparent 70%)",
            animation: "aurora-shift 30s ease-in-out infinite reverse",
          }}
        />
        {/* Aurora blob 3 */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-[150px]"
          style={{
            bottom: "5%",
            left: "30%",
            background: "radial-gradient(circle, rgba(100,60,220,0.04) 0%, transparent 70%)",
            animation: "nebula-drift 35s ease-in-out infinite",
          }}
        />
        {/* Subtle animated grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(76,110,245,0.03) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(245,159,0,0.02) 0%, transparent 50%)
            `,
            animation: "grid-pulse 8s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <DataExperience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
    </>
  );
}
