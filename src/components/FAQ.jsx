import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'How quickly can Accord launch our campaigns?',
    a: 'Following our initial discovery and strategy alignment, full campaign architecture—including creative assets, tracking verification, and copywriting—is typically live within 7 to 10 business days.',
  },
  {
    q: 'How do you measure and report marketing ROI?',
    a: 'We provide you with 24/7 access to a custom real-time analytics dashboard tracking blended ROAS, Cost Per Acquisition (CPA), qualified leads, and pipeline revenue. In addition, we conduct bi-weekly executive review calls.',
  },
  {
    q: 'Do you work on monthly retainers or performance models?',
    a: 'We offer flexible engagement structures based on your stage. Most clients partner with us on a monthly growth retainer plus performance bonuses tied directly to revenue growth milestones.',
  },
  {
    q: 'What makes Accord Marketing different from other digital agencies?',
    a: 'We are strategy-first and ruthlessly data-driven. We do not use cookie-cutter junior account managers or outsource your work. You collaborate directly with senior growth practitioners with proven track records scaling 8-figure brands.',
  },
  {
    q: 'Can you audit our current advertising accounts before we commit?',
    a: 'Yes, absolutely. We offer a complimentary, zero-obligation 360° Growth Audit where we inspect your Google/Meta ad accounts, SEO health, and conversion funnels to pinpoint immediate revenue leaks.',
  },
]

export default function FAQ({ onOpenContact }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i)

  return (
    <section className="py-20 lg:py-28 bg-ivory/60 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-xs font-bold tracking-[0.2em] text-mustard uppercase mb-3"
          >
            Got Questions?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-navy leading-tight"
          >
            Frequently Asked <span className="text-mustard">Questions</span>.
          </motion.h2>
          <p className="text-body/70 text-sm sm:text-base mt-2">
            Everything you need to know about partnering with Accord Marketing.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-mustard/40 shadow-lg shadow-navy/5' : 'border-border/70 hover:border-border'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full px-6 py-5 sm:py-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-navy leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-mustard text-white' : 'bg-ivory text-navy'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-sm text-body/75 leading-relaxed border-t border-border/40 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center bg-white rounded-2xl p-6 border border-border/70 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-navy">Have a specific question about your industry?</h4>
            <p className="text-xs text-body/60 mt-0.5">We've helped 5.5k+ clients navigate custom challenges.</p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-2.5 rounded-full text-xs font-bold bg-navy hover:bg-mustard text-white transition-colors cursor-pointer shrink-0"
          >
            Ask a Strategist
          </button>
        </div>
      </div>
    </section>
  )
}
