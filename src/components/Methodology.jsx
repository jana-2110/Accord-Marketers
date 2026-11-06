import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, Compass, Rocket, TrendingUp, CheckCircle, FileText, ArrowRight, Sparkles } from 'lucide-react'
import Interactive3DCard from './3d/Interactive3DCard'

const phases = [
  {
    phase: 'PHASE 01',
    title: 'Strategic Diagnosis & Business Assessment',
    subtitle: 'Understanding Your Business Before Recommending Solutions',
    icon: Search,
    activities: [
      'Comprehensive Business Diagnostic: audit of current marketing performance, tech infrastructure, and operational maturity',
      'Stakeholder Strategy Sessions with executive leadership to align on strategic goals and constraints',
      'Data & Technology Infrastructure Assessment: tracking gaps, tech debt, and governance requirements',
      'Competitive & Market Intelligence: TAM/SAM/SOM whitespace identification and benchmarking',
      'Capability Maturity Scoring against industry benchmarks to identify investment priorities',
    ],
    deliverable: 'Strategic Growth Roadmap — Prioritized, phased plan with clear milestones, budget allocation, ROI projections, and strategic rationale.',
  },
  {
    phase: 'PHASE 02',
    title: 'Strategy Architecture & Integrated Planning',
    subtitle: 'Designing Coherent Systems Before Execution',
    icon: Compass,
    activities: [
      'Strategic Architecture Design connecting business objectives, marketing programs, and technology',
      'Marketing Campaign Architecture: channel mix, editorial calendar, and automation funnels',
      'Technical Architecture Planning: system diagrams, API specifications, and database schemas',
      'Integration Mapping: ensuring marketing tools, CRM, and custom software share clean data',
      'Transparent Gantt timelines, resource allocation, and risk mitigation protocols',
    ],
    deliverable: 'Integrated Project Blueprint — Strategic specifications, campaign wireframes, and technical architecture.',
  },
  {
    phase: 'PHASE 03',
    title: 'Build, Activate & Strategic Execution',
    subtitle: 'Parallel Execution of Consulting, Marketing, and Development Workstreams',
    icon: Rocket,
    activities: [
      'Strategic Consulting Track: ongoing advisory support, competitive monitoring, and executive reporting',
      'Development Track: agile 2-week sprints with continuous integration and incremental feature delivery',
      'Marketing Track: multi-channel asset production, content creation, ad account setup, and automation workflows',
      'Integration Track: API connections, CRM synchronization, and server-side tracking validation',
      'Quality Assurance & Strategic Alignment Review ensuring systems operate as a unified growth engine',
    ],
    deliverable: 'Live Campaigns, Deployed Software, Validated Data Flows & Strategic Performance Dashboards.',
  },
  {
    phase: 'PHASE 04',
    title: 'Optimize, Scale & Strategic Evolution',
    subtitle: 'Continuous Improvement Based on Performance Data and Market Intelligence',
    icon: TrendingUp,
    activities: [
      'Weekly Strategic Performance Reviews against established revenue, CAC, and operational KPIs',
      'Continuous A/B testing across creative, software UX, conversion funnels, and messaging',
      'Technical Optimization: infrastructure scaling, security audits, code refactoring, and speed tuning',
      'Quarterly Strategic Reviews (QBRs) adjusting roadmap priorities as market dynamics evolve',
      'Capability Building & Knowledge Transfer to empower internal client teams',
    ],
    deliverable: 'Compounding Performance Improvements, Expanded Strategic Scope & Organizational Capability.',
  },
]

export default function Methodology({ onOpenDiagnostic }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="methodology" className="py-20 lg:py-28 bg-white relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-[#F1F2E6] border border-[#B7BBD9]/50 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] text-[#B38B00] uppercase mb-3 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Diagnostic-First Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0F172A] leading-tight mb-5"
          >
            How We Turn Strategy Into{' '}
            <span className="text-[#B38B00]">Execution</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#334155] leading-relaxed"
          >
            Our battle-tested four-phase methodology ensures every campaign and software feature connects directly to your boardroom growth objectives.
          </motion.p>
        </div>

        {/* 4 Phases Timeline Grid with 3D Tilt Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {phases.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <Interactive3DCard
                  glowColor="rgba(179, 139, 0, 0.15)"
                  className="h-full bg-[#F1F2E6] rounded-3xl p-8 border border-[#B7BBD9]/40 hover:border-[#B38B00] shadow-xl shadow-[#0F172A]/5 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Phase Top Row */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-black tracking-widest text-[#B38B00] font-mono px-3 py-1 rounded-full bg-white border border-[#B7BBD9]/30">
                        {item.phase}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-[#B38B00] group-hover:bg-[#B38B00] group-hover:text-white transition-colors flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold text-[#0F172A] mb-1 group-hover:text-[#B38B00] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#0F172A]/70 mb-5">
                      {item.subtitle}
                    </p>

                    {/* Key Activities List */}
                    <ul className="space-y-2.5 mb-6">
                      {item.activities.map((act, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#334155] leading-relaxed">
                          <CheckCircle className="w-3.5 h-3.5 text-[#B38B00] shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Primary Deliverable Box */}
                  <div className="pt-5 border-t border-[#B7BBD9]/30">
                    <div className="bg-white rounded-2xl p-4 border-l-4 border-l-[#B38B00] border border-[#B7BBD9]/30">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                        <FileText className="w-3.5 h-3.5 text-[#B38B00]" />
                        <span>Core Strategic Deliverable:</span>
                      </div>
                      <p className="text-xs text-[#334155] font-semibold leading-relaxed">
                        {item.deliverable}
                      </p>
                    </div>
                  </div>
                </Interactive3DCard>
              </motion.div>
            )
          })}
        </div>

        {/* Methodology Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenDiagnostic}
            className="group inline-flex items-center gap-2.5 bg-[#0F172A] hover:bg-[#B38B00] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-[#B38B00]/25 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Initiate Phase 01: Strategic Diagnostic</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
