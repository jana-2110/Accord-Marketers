import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Compass, Target, PenTool, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Compass,
    title: 'Discover',
    description: 'Understand the business, audience and goals.',
    accent: 'navy',
  },
  {
    icon: Target,
    title: 'Strategize',
    description: 'Create a customized marketing strategy.',
    accent: 'mustard',
  },
  {
    icon: PenTool,
    title: 'Create',
    description: 'Bring the strategy to life with creativity.',
    accent: 'lavender',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Execute the plan across the right channels.',
    accent: 'navy',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description: 'Analyze, optimize and scale continuously.',
    accent: 'mustard',
  },
]

const accentMap = {
  navy: { bg: 'bg-navy', iconBg: 'bg-navy/10', text: 'text-white', iconText: 'text-navy' },
  mustard: { bg: 'bg-mustard', iconBg: 'bg-mustard/15', text: 'text-white', iconText: 'text-mustard' },
  lavender: { bg: 'bg-lavender', iconBg: 'bg-lavender/30', text: 'text-navy', iconText: 'text-navy' },
}

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" className="py-20 lg:py-28 bg-ivory" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-xs font-semibold tracking-[0.2em] text-mustard uppercase mb-4"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy leading-tight"
          >
            How We <span className="text-mustard">Work</span>
          </motion.h2>
        </div>

        {/* Desktop: Horizontal Process */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-10 left-[10%] right-[10%] h-[2px]">
              <div className="w-full h-full border-t-2 border-dashed border-lavender/60" />
            </div>

            <div className="grid grid-cols-5 gap-6 relative">
              {steps.map((step, i) => {
                const Icon = step.icon
                const style = accentMap[step.accent]
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.12 }}
                    className="text-center group"
                  >
                    {/* Circle Icon */}
                    <div className={`w-20 h-20 mx-auto rounded-full ${style.bg} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                      <Icon className={`w-8 h-8 ${style.text}`} strokeWidth={1.5} />
                    </div>

                    {/* Step Number */}
                    <span className="text-xs font-bold text-mustard tracking-wider mb-2 block">
                      STEP {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-body/60 leading-relaxed px-2">
                      {step.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-lavender/60" />

            <div className="space-y-10">
              {steps.map((step, i) => {
                const Icon = step.icon
                const style = accentMap[step.accent]
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex gap-5 relative"
                  >
                    {/* Circle */}
                    <div className={`w-12 h-12 shrink-0 rounded-full ${style.bg} flex items-center justify-center shadow-md z-10`}>
                      <Icon className={`w-5 h-5 ${style.text}`} strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <span className="text-[10px] font-bold text-mustard tracking-wider">
                        STEP {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-base font-bold text-navy mt-1 mb-1">{step.title}</h3>
                      <p className="text-sm text-body/60 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
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
