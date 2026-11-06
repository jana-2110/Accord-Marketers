import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Stethoscope, Cpu, GitMerge, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import IsometricGrowthStack3D from './3d/IsometricGrowthStack3D'
import Interactive3DCard from './3d/Interactive3DCard'

const pillars = [
  {
    number: '01',
    icon: Stethoscope,
    title: 'Strategic Consulting That Diagnoses Before Prescribing',
    body: 'We begin with business diagnostics, competitive intelligence, market opportunity analysis, and capability maturity assessments—ensuring every recommendation is grounded in strategic reality, not assumptions.',
    deliverables: ['Growth Constraint Analysis', 'TAM/SAM/SOM Opportunity Mapping', 'Capability Maturity Scoring'],
  },
  {
    number: '02',
    icon: GitMerge,
    title: 'Marketing & Technology Engineered for Business Impact',
    body: 'SEO, SEM, content marketing, custom software, and MarTech integration are not isolated services. They are execution arms of a unified growth strategy designed by consultants who understand your P&L.',
    deliverables: ['P&L Aligned Marketing Spend', 'In-House Custom Software Engineering', 'Full-Funnel Attribution Modeling'],
  },
  {
    number: '03',
    icon: Cpu,
    title: 'Integrated Advisory, Strategy & Execution',
    body: 'When your strategic advisor, marketing director, and CTO share the same agency, strategic roadmaps translate into action without the friction of misaligned vendors, competing priorities, or fragmented data.',
    deliverables: ['Unified Vendor Governance', 'Continuous Feedback Loop', 'Zero Strategy-to-Execution Gap'],
  },
]

export default function ValueProposition({ onOpenDiagnostic }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="consulting" className="py-20 lg:py-28 bg-[#F1F2E6] relative overflow-hidden" ref={ref}>
      {/* Decorative background subtle glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B7BBD9]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#B38B00]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-white border border-[#B7BBD9]/50 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[0.18em] text-[#B38B00] uppercase mb-4 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Strategy-to-Execution Gap</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0F172A] leading-tight mb-5"
          >
            Why Accord Marketers Outperforms Traditional Agencies and{' '}
            <span className="text-[#B38B00]">Consulting Firms</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#334155] leading-relaxed"
          >
            Most agencies execute tactics. Most consultants deliver slide decks. Accord Marketers was built to close the strategy-to-execution gap. Our strategic consultants diagnose root-cause business challenges, our marketers design data-driven growth programs, and our engineers build the technology infrastructure—all operating as a unified advisory and delivery unit.
          </motion.p>
        </div>

        {/* 3 Pillars Grid with 3D Tilt Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
                className="h-full"
              >
                <Interactive3DCard
                  glowColor="rgba(179, 139, 0, 0.15)"
                  className="h-full bg-white rounded-3xl p-8 sm:p-9 border border-[#B7BBD9]/40 hover:border-[#B38B00] shadow-lg shadow-[#0F172A]/5 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Bar: Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-black text-[#B38B00] font-mono">
                        {pillar.number}
                      </span>
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 bg-[#0F172A] text-[#B38B00] group-hover:bg-[#B38B00] group-hover:text-white shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold text-[#0F172A] leading-snug mb-4 group-hover:text-[#B38B00] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-[#334155] leading-relaxed mb-6 font-normal">
                      {pillar.body}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#B7BBD9]/30">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#0F172A]/70 block mb-3">
                      Validated Outcomes:
                    </span>
                    <ul className="space-y-2">
                      {pillar.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B38B00] shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={onOpenDiagnostic}
                      className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F172A] group-hover:text-[#B38B00] transition-colors cursor-pointer"
                    >
                      <span>Explore Methodology</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </Interactive3DCard>
              </motion.div>
            )
          })}
        </div>

        {/* 3D Exploded Isometric Growth Stack Component */}
        <div className="mt-8 bg-white/70 rounded-3xl p-6 sm:p-10 border border-[#B7BBD9]/40 shadow-xl shadow-[#0F172A]/5">
          <IsometricGrowthStack3D onOpenDiagnostic={onOpenDiagnostic} />
        </div>
      </div>
    </section>
  )
}
