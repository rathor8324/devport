import { Download, Linkedin, Mail, MapPin, CheckCircle2 } from 'lucide-react'

const resumeUrl = '/resume.pdf'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="container mx-auto max-w-3xl relative">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="font-mono text-accent text-sm mb-4 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>QA Engineer — Available</span>
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Dev Ratna Saxena
        </h1>
        <p className="text-xl sm:text-2xl text-accent font-medium mb-2 opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          QA Engineer | Manual & Accessibility Tester
        </p>
        <p className="text-gray-400 flex items-center gap-2 mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.35s' }}>
          <MapPin size={16} className="shrink-0 text-accent-blue" />
          Noida, Uttar Pradesh, India
        </p>
        <p className="text-gray-300 text-lg max-w-2xl mb-10 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Ensuring quality through structured testing, accessibility compliance, and precise defect tracking.
        </p>
        <div className="flex flex-wrap gap-3 opacity-0 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <a href={resumeUrl} download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-charcoal font-semibold hover:bg-accent/90 transition-colors">
            <Download size={18} />
            Download Resume
          </a>
          <a href="https://www.linkedin.com/in/dev-ratna-saxena" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-gray-300 hover:border-accent hover:text-accent transition-colors">
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-accent-blue/50 text-accent-blue hover:bg-accent-blue/10 transition-colors">
            <Mail size={18} />
            Contact
          </a>
        </div>
        <div className="mt-12 flex flex-wrap gap-3 opacity-0 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface border border-border text-sm text-gray-400">
            <CheckCircle2 size={14} className="text-accent" />
            Tested
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface border border-border text-sm text-gray-400">
            <CheckCircle2 size={14} className="text-accent-blue" />
            Validated
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface border border-border text-sm text-gray-400">
            WCAG 2.1 AA
          </span>
        </div>
      </div>
    </section>
  )
}
