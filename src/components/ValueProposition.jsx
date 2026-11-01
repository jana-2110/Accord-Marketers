import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Stethoscope, Cpu, GitMerge, ArrowRight, CheckCircle2 } from 'lucide-react'

const pillars = [
  {
    number: '01',
    icon: Stethoscope,
    title: 'Strategic Consulting That Diagnoses Before Prescribing',
    body: 'We begin with business diagnostics, competitive intelligence, market opportunity analysis, and capability maturity assessments—ensuring every recommendation is grounded in strategic reality, not assumptions.',
    deliverables: ['Growth Constraint Analysis', 'TAM/SAM/SOM Opportunity Mapping', 'Capability Maturity Scoring'],
    accent: 'navy',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Marketing & Technology Engineered for Business Impact',
    body: 'SEO, SEM, content marketing, custom software, and MarTech integration are not isolated services. They are execution arms of a unified growth strategy designed by consultants who understand your P&L.',
    deliverables: ['P&L Aligned Marketing Spend', 'In-House Custom Software Engineering', 'Full-Funnel Attribution Modeling'],
    accent: 'mustard',
  },
  {
    number: '03',
    icon: GitMerge,
    title: 'Integrated Advisory, Strategy & Execution',
    body: 'When your strategic advisor, marketing director, and CTO share the same agency, strategic roadmaps translate into action without the friction of misaligned vendors, competing priorities, or fragmented data.',
    deliverables: ['Unified Vendor Governance', 'Continuous Feedback Loop', 'Zero Strategy-to-Execution Gap'],
    accent: 'lavender',
  },
]

export default function ValueProposition({ onOpenDiagnostic }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="consulting" className="py-20 lg:py-28 bg-white relative overflow-hidden" ref={ref}>
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-lavender/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-xs font-bold tracking-[0.2em] text-mustard uppercase mb-3"
          >
            The Strategy-to-Execution Gap
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy leading-tight mb-5"
          >
            Why Accord Marketers Outperforms Traditional Agencies and{' '}
            <span className="text-mustard">Consulting Firms</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-body/80 leading-relaxed"
          >
            Most agencies execute tactics. Most consultants deliver slide decks. Accord Marketers was built to close the strategy-to-execution gap. Our strategic consultants diagnose root-cause business challenges, our marketers design data-driven growth programs, and our engineers build the technology infrastructure—all operating as a unified advisory and delivery unit.
          </motion.p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            const isMustard = pillar.accent === 'mustard'
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
                className="bg-ivory/50 rounded-3xl p-8 sm:p-9 border border-border/80 hover:border-mustard/40 hover:bg-white hover:shadow-2xl hover:shadow-navy/5 transition-all duration-400 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-navy/20 font-mono group-hover:text-mustard transition-colors">
                      {pillar.number}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isMustard ? 'bg-mustard/15 text-mustard' : 'bg-navy/10 text-navy'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-navy leading-snug mb-4 group-hover:text-mustard transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-body/75 leading-relaxed mb-6">
                    {pillar.body}
                  </p>
                </div>

                <div className="pt-6 border-t border-border/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-navy/70 block mb-2.5">
                    Core Strategic Outputs
                  </span>
                  <div className="space-y-2">
                    {pillar.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-xs text-body/80 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-mustard shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Diagnostic Callout Ribbon */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-navy text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Need an unbiased diagnosis of your growth constraints?</h4>
            <p className="text-xs sm:text-sm text-white/70">Our senior advisory team reviews your acquisition, retention, and MarTech infrastructure.</p>
          </div>
          <button
            onClick={onOpenDiagnostic}
            className="bg-mustard hover:bg-mustard/90 text-white px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-mustard/30 shrink-0 cursor-pointer"
          >
            Request Diagnostic Audit
          </button>
        </div>
      </div>
    </section>
  )
}
