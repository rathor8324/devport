import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Contact from "./components/Contact";
import { CheckCircle2 } from "lucide-react";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <ProfessionalSummary />
        <Contact />
      </main>
      <footer className="border-t border-border py-6 px-4">
        <div className="container mx-auto max-w-3xl flex items-center justify-center gap-2 font-mono text-xs text-gray-500">
          <CheckCircle2 size={14} className="text-accent" />
          <span>All tests passed · Dev Ratna Saxena © {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}
