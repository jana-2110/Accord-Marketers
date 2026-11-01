import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Lightbulb,
  Share2,
  Search,
  Megaphone,
  Monitor,
  Palette,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Lightbulb,
    title: 'Digital Strategy',
    description: 'Data-driven strategies that align with business goals and unit economics.',
    metrics: 'Custom 12-Month Roadmap',
    accent: 'navy',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build your brand presence and engage your target audience across platforms.',
    metrics: 'Organic & Creator Amplification',
    accent: 'mustard',
  },
  {
    icon: Search,
    title: 'SEO & Content Marketing',
    description: 'Rank higher, get discovered and drive compounding high-intent organic traffic.',
    metrics: 'Technical Audit & Topic Clusters',
    accent: 'lavender',
  },
  {
    icon: Megaphone,
    title: 'Paid Advertising',
    description: 'ROI-focused campaigns across Google Ads, Meta, LinkedIn, and YouTube.',
    metrics: '300%+ Average ROAS Target',
    accent: 'navy',
  },
  {
    icon: Monitor,
    title: 'Website Development',
    description: 'Fast, responsive, and conversion-focused websites engineered to convert.',
    metrics: 'Sub-Second Load Times',
    accent: 'mustard',
  },
  {
    icon: Palette,
    title: 'Branding & Creative',
    description: 'Creative design systems, identity packaging, and assets that make brands memorable.',
    metrics: 'Omnichannel Asset Kits',
    accent: 'lavender',
  },
]

const accentStyles = {
  navy: {
    iconBg: 'bg-navy/10',
    iconColor: 'text-navy',
    border: 'group-hover:border-navy/30',
    dot: 'bg-navy',
  },
  mustard: {
    iconBg: 'bg-mustard/15',
    iconColor: 'text-mustard',
    border: 'group-hover:border-mustard/40',
    dot: 'bg-mustard',
  },
  lavender: {
    iconBg: 'bg-lavender/35',
    iconColor: 'text-navy',
    border: 'group-hover:border-lavender/60',
    dot: 'bg-lavender',
  },
}

export default function Services({ onOpenContact }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-20 lg:py-28 bg-ivory" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-xs font-bold tracking-[0.2em] text-mustard uppercase mb-3"
          >
            What We Do
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy mb-5 leading-tight"
          >
            Powerful Digital Solutions
            <br className="hidden sm:block" />
            for <span className="text-mustard">Real Growth</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-body/75 text-base lg:text-lg leading-relaxed"
          >
            From strategy to execution, we deliver end-to-end digital marketing
            services that help your business scale profitably online.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const style = accentStyles[service.accent]
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                onClick={onOpenContact}
                className={`group relative bg-white rounded-3xl p-8 border border-border/60 ${style.border} hover:shadow-2xl hover:shadow-navy/8 transition-all duration-400 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between`}
              >
                <div>
                  {/* Decorative corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 ${style.iconBg} rounded-bl-[2.5rem] rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${style.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-108 transition-transform duration-300`}
                  >
                    <Icon className={`w-7 h-7 ${style.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-mustard transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-body/75 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-body/50 uppercase tracking-wider">
                    {service.metrics}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-navy group-hover:text-mustard transition-colors">
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
