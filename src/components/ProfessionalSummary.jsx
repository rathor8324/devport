import { CheckCircle2, Bug, FileCheck, Database, Accessibility, ClipboardList } from 'lucide-react'

const items = [
  {
    icon: ClipboardList,
    title: 'Manual testing & test case design',
    desc: 'Design and execute test cases for functional and regression testing.',
  },
  {
    icon: Bug,
    title: 'Bug tracking & defect reporting',
    desc: 'Log defects with clear steps, severity, and reproducibility.',
  },
  {
    icon: Database,
    title: 'SQL & data validation',
    desc: 'Query databases and validate data integrity for test scenarios.',
  },
  {
    icon: Accessibility,
    title: 'Accessibility testing (WCAG)',
    desc: 'Ensure digital products meet WCAG 2.1 AA standards.',
  },
  {
    icon: FileCheck,
    title: 'Test documentation',
    desc: 'Test plans, test reports, and traceability matrices.',
  },
]

export default function ProfessionalSummary() {
  return (
    <section id="summary" className="py-20 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        {/* Section divider */}
        <div className="font-mono text-xs text-gray-500 border border-border rounded-lg px-4 py-3 bg-surface/60 mb-12 overflow-x-auto">
          <span className="text-accent">// professionalSummary.test</span>
          <br />
          <span className="text-gray-600"> describe(</span>
          <span className="text-accent-blue">'Skills'</span>
          <span className="text-gray-600">, () =&gt; {'{ ... }'}</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <CheckCircle2 size={28} className="text-accent" />
          Professional Summary
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="p-5 rounded-xl bg-surface border border-border hover:border-accent/40 transition-colors opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="p-2 rounded-lg bg-charcoal border border-border w-fit mb-3">
                <Icon size={20} className="text-accent" />
              </div>
              <h3 className="font-semibold text-white mb-1">{title}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
