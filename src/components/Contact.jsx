import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-3xl">
        <div className="font-mono text-xs text-gray-500 border border-border rounded-lg px-4 py-3 bg-surface/60 mb-12 overflow-x-auto">
          <span className="text-accent">// contact.test</span>
          <br />
          <span className="text-gray-600"> expect(contact).toBeReachable()</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-8">Contact</h2>
        <div className="flex flex-col sm:flex-row gap-6 flex-wrap">
          <a href="mailto:saxenadevratna@gmail.com" className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-accent/40 transition-colors text-gray-300 hover:text-accent">
            <Mail size={22} className="shrink-0" />
            <span>saxenadevratna@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/dev-ratna-saxena-61501b243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-accent/40 transition-colors text-gray-300 hover:text-accent">
            <Linkedin size={22} className="shrink-0" />
            <span>LinkedIn</span>
          </a>
          <a href="tel:+917351886891" className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-accent/40 transition-colors text-gray-300 hover:text-accent">
            <Phone size={22} className="shrink-0" />
            <span>+91 7351886891</span>
          </a>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border text-gray-400">
            <MapPin size={22} className="shrink-0 text-accent-blue" />
            <span>Noida, Uttar Pradesh, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
