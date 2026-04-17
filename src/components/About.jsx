import { User, FileText } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-3xl">
        <div className="font-mono text-xs text-gray-500 border border-border rounded-lg px-4 py-3 bg-surface/60 mb-12 overflow-x-auto">
          <span className="text-accent">// about.ts</span>
          <br />
          <span className="text-gray-600"> careerObjective: string = </span>
          <span className="text-accent-blue">"..."</span>
        </div>
        <div className="flex items-start gap-4 mb-6">
          <div className="p-2.5 rounded-lg bg-surface border border-border shrink-0">
            <User size={24} className="text-accent" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">About / Career Objective</h2>
            <p className="text-gray-400 leading-relaxed">
              Detail-oriented and enthusiastic Computer Science graduate with hands-on experience in manual testing, bug tracking, and SQL. Seeking a Manual Tester role to contribute to quality assurance efforts and gain exposure to industry-level testing practices.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500 font-mono text-sm mt-6">
          <FileText size={14} />
          <span>Career objective — validated</span>
        </div>
      </div>
    </section>
  )
}
