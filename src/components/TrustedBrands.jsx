import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const brands = [
  { name: 'Aathulyam Wellness', tag: 'D2C Brand' },
  { name: 'Raisein Technologies', tag: 'Enterprise Tech' },
  { name: 'SJ Logistics India', tag: 'Supply Chain' },
  { name: 'Blue Line Plumbing', tag: 'Home Services' },
  { name: 'MediaTech Solutions', tag: 'Digital Media' },
  { name: 'GreenLeaf Organics', tag: 'Retail & Wellness' },
]

export default function TrustedBrands() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-12 lg:py-16 bg-white border-y border-border/60" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-bold tracking-[0.22em] text-body/50 uppercase mb-8"
        >
          Trusted by Growing Brands & Industry Leaders
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-ivory/50 border border-border/50 hover:bg-white hover:border-mustard/40 hover:shadow-md transition-all duration-300"
            >
              {/* Brand Initial Badge */}
              <div className="w-8 h-8 rounded-lg bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-mustard/15 transition-colors duration-300">
                <span className="text-xs font-black text-navy/40 group-hover:text-mustard transition-colors duration-300">
                  {brand.name.charAt(0)}
                </span>
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-navy/60 group-hover:text-navy transition-colors duration-300 whitespace-nowrap block">
                  {brand.name}
                </span>
                <span className="text-[10px] text-body/45 group-hover:text-mustard font-medium transition-colors block leading-tight">
                  {brand.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
