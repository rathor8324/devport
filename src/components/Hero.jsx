import { Download, Linkedin, Mail, MapPin, CheckCircle2 } from 'lucide-react'

const resumeUrl = '/resume.pdf'
const profileImageUrl = '/profile-photo.png'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="container mx-auto max-w-4xl relative">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10">
          <div className="flex-1">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="font-mono text-accent text-sm mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>QA Engineer - Accessibility Testing</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Dev Ratna Saxena
            </h1>
            <p className="text-xl sm:text-2xl text-accent font-medium mb-2 opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Manual Testing | Accessibility Testing (WCAG)
            </p>
            <p className="text-gray-400 flex items-center gap-2 mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.35s' }}>
              <MapPin size={16} className="shrink-0 text-accent-blue" />
              Noida, Uttar Pradesh, India
            </p>
            <p className="text-gray-300 text-lg max-w-2xl mb-10 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Detail-oriented Computer Science graduate focused on manual and accessibility testing, defect tracking, and quality assurance aligned to industry standards.
            </p>
            <div className="flex flex-wrap gap-3 opacity-0 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <a href={resumeUrl} download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-charcoal font-semibold hover:bg-accent/90 transition-colors">
                <Download size={18} />
                Download Resume
              </a>
              <a href="https://www.linkedin.com/in/dev-ratna-saxena-61501b243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-gray-300 hover:border-accent hover:text-accent transition-colors">
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-accent-blue/50 text-accent-blue hover:bg-accent-blue/10 transition-colors">
                <Mail size={18} />
                Contact
              </a>
            </div>
          </div>
          <div className="self-start md:mt-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <img
              src={profileImageUrl}
              alt="Dev Ratna Saxena profile"
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-44 md:h-44 rounded-full object-cover border-2 border-accent/60 shadow-[0_0_30px_rgba(0,255,136,0.2)]"
            />
          </div>
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
            WCAG 2.0 and 2.1 (A/AA)
          </span>
        </div>
      </div>
    </section>
  )
}
