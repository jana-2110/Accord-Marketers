import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Zap, Target, Sliders, TrendingUp, BarChart3, Database, Layers, CheckCircle } from 'lucide-react'
import Interactive3DCard from './3d/Interactive3DCard'
import MarketingRoiMatrix3D from './3d/MarketingRoiMatrix3D'

const keyStats = [
  {
    value: 47,
    suffix: '%',
    label: 'Faster Deployment',
    subtext: '47% faster strategic initiative deployment when consulting, marketing, and development teams operate under unified command.',
    icon: Zap,
  },
  {
    value: 3.2,
    suffix: 'x',
    label: 'Higher Lead Quality',
    subtext: '3.2x higher lead quality from strategically integrated MarTech stacks vs. tactically siloed tools.',
    icon: Target,
  },
  {
    value: 60,
    suffix: '%',
    label: 'Operational Overhead Reduction',
    subtext: '60% reduction in operational overhead through strategic process redesign, marketing automation, and custom workflow software.',
    icon: Sliders,
  },
  {
    value: 2.5,
    suffix: 'x',
    label: 'Marketing ROI Improvement',
    subtext: '2.5x improvement in marketing ROI when campaigns are designed by consultants who understand business model economics.',
    icon: TrendingUp,
  },
]

const frameworkCategories = [
  {
    title: 'Strategic & Business Metrics',
    icon: BarChart3,
    items: [
      'Customer Acquisition Cost (CAC) and CAC payback period',
      'Lifetime Value (LTV) and LTV:CAC ratio',
      'Revenue growth rate and market share trajectory',
      'Strategic capability maturity scores',
      'Competitive positioning index',
    ],
  },
  {
    title: 'Marketing Metrics',
    icon: Target,
    items: [
      'Marketing Qualified Leads (MQL) and Sales Qualified Leads (SQL)',
      'Conversion rates by channel, funnel stage, and campaign',
      'Return on Ad Spend (ROAS) and Marketing ROI',
      'Brand authority and share of voice metrics',
    ],
  },
  {
    title: 'Development Metrics',
    icon: Database,
    items: [
      'System uptime and performance benchmarks',
      'User adoption, engagement, and satisfaction rates',
      'Operational efficiency gains (time saved, errors reduced, cost avoided)',
      'Revenue directly attributable to custom software features',
    ],
  },
  {
    title: 'Integration & Strategic Alignment',
    icon: Layers,
    items: [
      'Data accuracy and synchronization rates',
      'Lead-to-revenue attribution completeness',
      'Campaign deployment speed (strategic concept to live execution)',
      'Cross-functional operational overhead reduction',
      'Strategic initiative success rate (percentage achieving projected ROI)',
    ],
  },
]

function AnimatedMetric({ target, suffix, isInView }) {
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = null
    const duration = 1800
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(target % 1 === 0 ? Math.floor(eased * target) : (eased * target).toFixed(1))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, target])

  return (
    <span>
      {val}
      {suffix}
    </span>
  )
}

export default function ResultsMetrics({ onOpenDiagnostic }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="results" className="py-20 lg:py-28 bg-[#0F172A] text-white relative overflow-hidden" ref={ref}>
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#B38B00]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B7BBD9]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-[#B38B00]/20 text-[#B38B00] border border-[#B38B00]/30 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-3"
          >
            <span className="w-2 h-2 rounded-full bg-[#B38B00] animate-pulse" />
            <span>Outcomes That Prove Value</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-5"
          >
            Outcomes That Prove the Value of{' '}
            <span className="text-[#B38B00]">Strategic Integration</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#B7BBD9] leading-relaxed"
          >
            When strategic consulting, marketing execution, and software development share the same objective, outcomes accelerate. Here is how we measure and prove strategic success.
          </motion.p>
        </div>

        {/* 4 Core Statistics Grid with 3D Interactive Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyStats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <Interactive3DCard
                  glowColor="rgba(179, 139, 0, 0.25)"
                  className="h-full bg-white/5 border border-[#B7BBD9]/20 rounded-3xl p-7 hover:border-[#B38B00]/80 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-[#B38B00]/25 flex items-center justify-center text-[#B38B00] mb-5 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-4xl sm:text-5xl font-extrabold text-[#B38B00] tracking-tight mb-2">
                      <AnimatedMetric target={stat.value} suffix={stat.suffix} isInView={isInView} />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#B7BBD9] mb-3">
                      {stat.label}
                    </h3>
                    <p className="text-xs text-[#F1F2E6]/80 leading-relaxed font-normal">
                      {stat.subtext}
                    </p>
                  </div>
                </Interactive3DCard>
              </motion.div>
            )
          })}
        </div>

        {/* Dedicated 3D Interactive Revenue Matrix Component */}
        <MarketingRoiMatrix3D onOpenDiagnostic={onOpenDiagnostic} />

        {/* Strategic Results Framework Grid */}
        <div className="bg-black/35 rounded-3xl p-8 sm:p-12 border border-[#B7BBD9]/20 mt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B38B00] block mb-1">
                Strategic Results Framework
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                How We Measure and Report Success
              </h3>
            </div>
            <button
              onClick={onOpenDiagnostic}
              className="text-xs font-bold uppercase tracking-wider text-[#B7BBD9] hover:text-[#B38B00] transition-colors cursor-pointer"
            >
              See How We Measure Strategic Success →
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {frameworkCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <div key={cat.title} className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-[#B38B00]/40 transition-colors">
                  <div className="flex items-center gap-2.5 mb-4">
                    <Icon className="w-4 h-4 text-[#B38B00]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      {cat.title}
                    </h4>
                  </div>
                  <ul className="space-y-2.5">
                    {cat.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-xs text-[#F1F2E6]/75">
                        <CheckCircle className="w-3.5 h-3.5 text-[#B38B00] shrink-0 mt-0.5" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
