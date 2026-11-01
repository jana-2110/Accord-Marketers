import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const sectors = [
  { name: 'Technology & SaaS', metric: 'Strategic Advisory & PLG' },
  { name: 'Healthcare & Life Sciences', metric: 'HIPAA-Compliant Growth' },
  { name: 'Retail & E-Commerce', metric: 'Omnichannel & CRO' },
  { name: 'Financial Services & Fintech', metric: 'Trust & Compliance' },
  { name: 'Manufacturing & B2B', metric: 'Dealer Portals & RevOps' },
  { name: 'Professional Services', metric: 'Authority & IP Systems' },
]

export default function TrustBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-12 lg:py-16 bg-white border-y border-border/70" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-bold tracking-[0.22em] text-body/60 uppercase max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Trusted by category-leading brands across technology, healthcare, retail, finance, and manufacturing for strategic advisory, marketing execution, and digital transformation.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-3.5 rounded-2xl bg-ivory/50 border border-border/60 hover:bg-white hover:border-mustard/40 hover:shadow-md transition-all duration-300 text-center"
            >
              <span className="text-xs font-bold text-navy group-hover:text-mustard transition-colors block">
                {sector.name}
              </span>
              <span className="text-[10px] text-body/55 group-hover:text-navy/70 font-semibold mt-1 block">
                {sector.metric}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
