import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react'

export default function FinalCTA({ onOpenDiagnostic }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative bg-lavender/30 rounded-[2.5rem] px-8 py-16 lg:px-16 lg:py-20 text-center overflow-hidden border border-lavender/60 shadow-xl shadow-navy/5"
        >
          {/* Subtle background circles */}
          <div className="absolute top-8 left-10 w-28 h-28 border-2 border-lavender/50 rounded-full pointer-events-none" />
          <div className="absolute bottom-8 right-10 w-40 h-40 border-2 border-lavender/40 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-20 w-3 h-3 bg-mustard rounded-full opacity-60 pointer-events-none" />

          {/* Floating Sparkle Icon */}
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute top-8 right-8 lg:right-24 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-border/60 pointer-events-none"
          >
            <Sparkles className="w-6 h-6 text-mustard" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-mustard uppercase mb-3">
              Ready to Transform Strategy Into Measurable Growth?
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-5 leading-tight"
            >
              Let's Architect Your{' '}
              <span className="text-mustard">Integrated Growth Engine</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-body/80 text-sm sm:text-base mb-8 leading-relaxed max-w-xl mx-auto"
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
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 bg-navy text-white px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-mustard transition-all duration-300 hover:shadow-xl hover:shadow-mustard/25 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Book Your Free Strategic Diagnostic</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-navy px-7 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider border border-border hover:border-green-500 hover:text-green-700 transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-green-600" />
                <span>WhatsApp Briefing</span>
              </a>
            </motion.div>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-body/65 font-medium">
              <ShieldCheck className="w-4 h-4 text-mustard" />
              <span>Zero pitch, zero commitment. Unbiased strategic assessment within 2 hours.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
