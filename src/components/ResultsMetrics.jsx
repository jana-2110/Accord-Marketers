import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Zap, Target, Sliders, TrendingUp, BarChart3, Database, Layers, CheckCircle } from 'lucide-react'

const keyStats = [
  {
    value: 47,
    suffix: '%',
    label: 'Faster Deployment',
    subtext: 'Strategic initiatives deploy 47% faster when consulting, marketing, and dev teams operate under unified command.',
    icon: Zap,
  },
  {
    value: 3.2,
    suffix: 'x',
    label: 'Higher Lead Quality',
    subtext: 'From strategically integrated MarTech stacks vs. tactically siloed standalone tools.',
    icon: Target,
  },
  {
    value: 60,
    suffix: '%',
    label: 'Overhead Reduction',
    subtext: 'Reduction in operational overhead through process redesign, automation, and custom software.',
    icon: Sliders,
  },
  {
    value: 2.5,
    suffix: 'x',
    label: 'Marketing ROI Lift',
    subtext: 'Improvement in marketing ROI when campaigns are engineered by consultants who understand your P&L.',
    icon: TrendingUp,
  },
]

const frameworkCategories = [
  {
    title: 'Strategic & Business Metrics',
    icon: BarChart3,
    items: ['Customer Acquisition Cost (CAC) & Payback', 'Lifetime Value (LTV) & LTV:CAC Ratio', 'Revenue Growth Velocity', 'Strategic Capability Maturity Index'],
  },
  {
    title: 'Marketing & Attribution Metrics',
    icon: Target,
    items: ['Marketing Qualified Leads (MQL) & SQL Velocity', 'Multi-Touch Attributable Revenue', 'Blended Return on Ad Spend (ROAS)', 'Category Share of Voice & Authority'],
  },
  {
    title: 'Technology & Development Metrics',
    icon: Database,
    items: ['High-Performance Uptime & Latency', 'User Adoption & Active Engagement', 'Hours Saved via Workflow Automation', 'Direct Revenue from Custom Software Features'],
  },
  {
    title: 'Integration & Alignment Metrics',
    icon: Layers,
    items: ['Single-Customer-View Data Accuracy', '100% Attribution Completeness', 'Deployment Velocity (Concept to Live Release)', 'Initiative Success Rate vs Projected ROI'],
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
    <section id="results" className="py-20 lg:py-28 bg-navy text-white relative overflow-hidden" ref={ref}>
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lavender/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-mustard/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-xs font-bold tracking-[0.2em] text-mustard uppercase mb-3"
          >
            Measurable Proof Points
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-5"
          >
            Outcomes That Prove the Value of{' '}
            <span className="text-mustard">Strategic Integration</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-white/75 leading-relaxed"
          >
            When strategy, marketing execution, and custom software development are unified under one roof, friction disappears and business outcomes compound.
          </motion.p>
        </div>

        {/* 4 Core Statistics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyStats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-mustard/40 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-mustard/20 flex items-center justify-center text-mustard mb-5 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
                    <AnimatedMetric target={stat.value} suffix={stat.suffix} isInView={isInView} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-mustard mb-3">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {stat.subtext}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Strategic Results Framework Grid */}
        <div className="bg-slate-900/90 rounded-3xl p-8 sm:p-12 border border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-mustard block mb-1">
                Accountability Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                How We Measure Strategic Success
              </h3>
            </div>
            <button
              onClick={onOpenDiagnostic}
              className="text-xs font-bold uppercase tracking-wider text-mustard hover:text-white transition-colors cursor-pointer"
            >
              Request Custom Measurement Blueprint →
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {frameworkCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <div key={cat.title} className="bg-white/5 rounded-2xl p-6 border border-white/5">
                  <div className="flex items-center gap-2.5 mb-4">
                    <Icon className="w-4 h-4 text-mustard" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      {cat.title}
                    </h4>
                  </div>
                  <ul className="space-y-2.5">
                    {cat.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-xs text-white/70">
                        <CheckCircle className="w-3.5 h-3.5 text-mustard/80 shrink-0 mt-0.5" />
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
