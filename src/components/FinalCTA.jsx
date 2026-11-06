import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Sparkles, MessageCircle, ShieldCheck, Compass } from 'lucide-react'

export default function FinalCTA({ onOpenDiagnostic }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 lg:py-28 bg-[#F1F2E6]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative bg-[#0F172A] rounded-[2.5rem] px-8 py-16 lg:px-16 lg:py-20 text-center overflow-hidden border border-[#B7BBD9]/30 shadow-2xl shadow-[#0F172A]/40 text-white"
        >
          {/* Subtle background decorative shapes & glows */}
          <div className="absolute top-0 right-10 w-80 h-80 bg-[#B38B00]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#B7BBD9]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-8 left-10 w-28 h-28 border border-white/10 rounded-full pointer-events-none" />
          <div className="absolute bottom-8 right-10 w-40 h-40 border border-[#B38B00]/20 rounded-full pointer-events-none" />

          {/* Floating 3D Sparkle Icon */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute top-8 right-8 lg:right-24 w-14 h-14 bg-[#B38B00]/20 rounded-2xl shadow-lg flex items-center justify-center border border-[#B38B00]/40 pointer-events-none text-[#B38B00]"
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#B38B00] uppercase mb-4">
              Ready to Transform Strategy Into Measurable Growth?
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight"
            >
              Let's Architect Your{' '}
              <span className="text-[#B38B00]">Integrated Growth Engine</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-[#F1F2E6]/85 text-sm sm:text-base mb-8 leading-relaxed max-w-xl mx-auto font-normal"
            >
              Whether you need board-level strategic advisory, a complete digital transformation, or a targeted campaign with supporting technology, our strategic consultants will diagnose your current state, identify your highest-leverage opportunities, and recommend the first 90 days of action.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={onOpenDiagnostic}
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 bg-[#B38B00] hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-[#B38B00]/25 hover:-translate-y-0.5 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-white group-hover:text-[#0F172A] transition-colors" />
                <span>Book Your Free Strategic Diagnostic</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#B7BBD9]" />
                <span>Direct Executive Advisory</span>
              </a>
            </motion.div>

            {/* Diagnostic Guarantee Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.55 }}
              className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#B7BBD9]"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B38B00]" />
                <span>Zero Sales Pitch — 100% Diagnostic Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B38B00]" />
                <span>Confidential NDA-Protected Assessment</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
