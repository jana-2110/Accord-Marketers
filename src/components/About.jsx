import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Award, TrendingUp, Users, ArrowRight, Zap, Target } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Unmatched Expertise',
    description: '10+ years of battle-tested marketing across competitive B2B, D2C, logistics, and local service industries.',
    accent: 'navy',
  },
  {
    icon: Target,
    title: 'Custom Growth Solutions',
    description: 'Zero cookie-cutter templates. We craft tailor-made marketing engines designed specifically for your unit economics.',
    accent: 'mustard',
  },
  {
    icon: TrendingUp,
    title: 'ROI-Driven Execution',
    description: 'Every ad dollar, campaign, and landing page is tracked directly against revenue, conversion rates, and client LTV.',
    accent: 'navy',
  },
  {
    icon: ShieldCheck,
    title: '100% Transparent Reporting',
    description: 'Direct live dashboard access, weekly strategic syncs, and clear metrics with no smoke and mirrors.',
    accent: 'mustard',
  },
]

export default function About({ onOpenContact }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden" ref={ref}>
      {/* Decorative Background Accents */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-lavender/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-mustard/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Identity */}
          <div className="lg:col-span-5 space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block text-xs font-bold tracking-[0.2em] text-mustard uppercase"
            >
              Who We Are
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-navy leading-tight"
            >
              Strategy-Led &{' '}
              <span className="text-mustard">ROI-Driven</span> Campaigns That Actually Scale.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-body/75 text-base sm:text-lg leading-relaxed"
            >
              Accord Marketers is a dedicated collective of senior strategists, creatives, and technical marketers. We eliminate guesswork by combining creative brand storytelling with ruthless analytical performance.
            </motion.p>

            {/* Quick Metrics Pill Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4 pt-2"
            >
              <div className="bg-ivory/60 rounded-2xl p-4 border border-border/60">
                <p className="text-2xl lg:text-3xl font-extrabold text-navy">90%</p>
                <p className="text-xs font-semibold text-body/70 mt-1 uppercase tracking-wider">Client Retention</p>
              </div>
              <div className="bg-ivory/60 rounded-2xl p-4 border border-border/60">
                <p className="text-2xl lg:text-3xl font-extrabold text-mustard">5X</p>
                <p className="text-xs font-semibold text-body/70 mt-1 uppercase tracking-wider">Avg. Lead Volume</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="pt-2"
            >
              <button
                onClick={onOpenContact}
                className="group inline-flex items-center gap-2 bg-navy hover:bg-mustard text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-md shadow-navy/10 cursor-pointer"
              >
                Work With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: 4 Core Pillars Grid */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feat, i) => {
                const Icon = feat.icon
                const isMustard = feat.accent === 'mustard'
                return (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                    className="group bg-ivory/40 hover:bg-white rounded-2xl p-6 sm:p-7 border border-border/60 hover:border-mustard/30 transition-all duration-300 hover:shadow-xl hover:shadow-navy/5 hover:-translate-y-1"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                        isMustard ? 'bg-mustard/15 text-mustard' : 'bg-navy/10 text-navy'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-mustard transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-body/70 leading-relaxed">
                      {feat.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
