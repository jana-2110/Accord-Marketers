import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, Compass, Rocket, TrendingUp, CheckCircle, FileText, ArrowRight } from 'lucide-react'

const phases = [
  {
    phase: 'PHASE 01',
    title: 'Strategic Diagnosis & Business Assessment',
    subtitle: 'Understanding your business before recommending solutions',
    icon: Search,
    accent: 'navy',
    activities: [
      'Comprehensive Business Diagnostic: performance, tech infrastructure, operational maturity',
      'Stakeholder Strategy Sessions with executive leadership to align on constraints & KPIs',
      'Data & Technology Infrastructure Assessment: tracking gaps, tech debt & integration needs',
      'Competitive & Market Intelligence: TAM/SAM/SOM whitespace identification',
      'Capability Maturity Scoring against industry benchmarks',
    ],
    deliverable: 'Strategic Growth Roadmap — Prioritized, phased plan with budget allocation, ROI projections, and strategic rationale.',
  },
  {
    phase: 'PHASE 02',
    title: 'Strategy Architecture & Integrated Planning',
    subtitle: 'Designing coherent systems before execution',
    icon: Compass,
    accent: 'mustard',
    activities: [
      'Strategic Architecture Design connecting business objectives to marketing & technology',
      'Marketing Campaign Architecture: channel mix, editorial calendar & automation funnels',
      'Technical Architecture Planning: system diagrams, API specs & database schemas',
      'Integration Mapping: ensuring MarTech, CRM, and custom software share clean data',
      'Transparent Gantt timelines, resource allocation, and risk mitigation protocols',
    ],
    deliverable: 'Integrated Project Blueprint — Strategic specifications, campaign wireframes, and technical architecture.',
  },
  {
    phase: 'PHASE 03',
    title: 'Build, Activate & Strategic Execution',
    subtitle: 'Parallel execution of consulting, marketing, and development workstreams',
    icon: Rocket,
    accent: 'navy',
    activities: [
      'Strategic Consulting Track: ongoing advisory support & executive governance',
      'Development Track: agile 2-week sprints with continuous integration & demos',
      'Marketing Track: multi-channel asset production, ad account launch & automation configuration',
      'Integration Track: API connections, CRM synchronization & server-side tracking validation',
      'Cross-functional QA ensuring marketing, software, and business goals align seamlessly',
    ],
    deliverable: 'Live Campaigns, Deployed Software & Strategic Performance Dashboards.',
  },
  {
    phase: 'PHASE 04',
    title: 'Optimize, Scale & Strategic Evolution',
    subtitle: 'Continuous improvement based on performance data and market intelligence',
    icon: TrendingUp,
    accent: 'mustard',
    activities: [
      'Weekly Strategic Performance Reviews against established revenue & CAC KPIs',
      'Continuous A/B testing across creative, software UX, and conversion funnels',
      'Technical Optimization: infrastructure scaling, security audits & code refactoring',
      'Quarterly Strategic Reviews (QBRs) adjusting roadmap priorities as markets shift',
      'Capability Building & Knowledge Transfer to empower internal teams',
    ],
    deliverable: 'Compounding Performance Improvements & Long-Term Competitive Advantage.',
  },
]

export default function Methodology({ onOpenDiagnostic }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="methodology" className="py-20 lg:py-28 bg-ivory" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-xs font-bold tracking-[0.2em] text-mustard uppercase mb-3"
          >
            Engagement Framework
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy leading-tight mb-4"
          >
            A Proven Strategic Methodology for{' '}
            <span className="text-mustard">Integrated Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-body/80 leading-relaxed"
          >
            We don't believe in black-box agency work or theoretical consulting. Our process is transparent, collaborative, and engineered to reduce strategic risk while accelerating time-to-value—from diagnosis through optimization.
          </motion.p>
        </div>

        {/* 4 Phases Timeline */}
        <div className="grid md:grid-cols-2 gap-8">
          {phases.map((p, i) => {
            const Icon = p.icon
            const isMustard = p.accent === 'mustard'
            return (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl p-8 sm:p-9 border border-border/80 hover:border-mustard/40 shadow-lg shadow-navy/3 hover:shadow-2xl hover:shadow-navy/6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-black tracking-widest uppercase text-mustard bg-mustard/15 px-3 py-1 rounded-full">
                      {p.phase}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                        isMustard ? 'bg-mustard/15 text-mustard' : 'bg-navy/10 text-navy'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-navy leading-snug mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-body/60 font-semibold mb-6">
                    {p.subtitle}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {p.activities.map((act) => (
                      <div key={act} className="flex items-start gap-2.5 text-xs text-body/80 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-mustard shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-border/60 bg-ivory/50 -mx-8 sm:-mx-9 -mb-8 sm:-mb-9 p-6 rounded-b-3xl">
                  <div className="flex items-start gap-2 text-xs text-navy font-semibold">
                    <FileText className="w-4 h-4 text-mustard shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-navy uppercase text-[10px] tracking-wider block">Phase Output:</strong>
                      {p.deliverable}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Diagnostic Timeline CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenDiagnostic}
            className="inline-flex items-center gap-2 bg-navy hover:bg-mustard text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-mustard/20 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Initiate Phase 1: Strategic Diagnostic</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
