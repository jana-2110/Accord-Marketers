import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle2, MessageCircle, Phone, Mail, Sparkles } from 'lucide-react'

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Paid Advertising',
    budget: '$1,000 - $3,000 / month',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const services = [
    'Digital Strategy',
    'Paid Advertising (Google & Meta)',
    'SEO & Content Marketing',
    'Social Media Marketing',
    'Website Development',
    'Branding & Creative Design',
  ]

  const budgets = [
    '< $1,000 / month',
    '$1,000 - $3,000 / month',
    '$3,000 - $5,000 / month',
    '$5,000+ / month',
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Paid Advertising',
      budget: '$1,000 - $3,000 / month',
      message: '',
    })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-border/80 overflow-hidden z-10 my-8"
          >
            {/* Header Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-navy via-mustard to-navy" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-body/60 hover:text-navy hover:bg-ivory transition-colors z-20"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-10">
              {submitted ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 shadow-inner"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-navy mb-3">
                    Thank You, {formData.name || 'Partner'}!
                  </h3>
                  <p className="text-body/70 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    We’ve received your inquiry. Our senior growth strategist will review your goals and reach out within 2 hours.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors shadow-md shadow-green-600/20"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp Now
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 rounded-full text-sm font-semibold text-navy bg-ivory hover:bg-lavender/30 transition-colors"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Top Intro */}
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 bg-mustard/15 px-3 py-1 rounded-full text-xs font-bold text-mustard tracking-wide uppercase mb-2">
                      <Sparkles className="w-3.5 h-3.5" /> Free Growth Audit
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                      Let’s Scale Your Business
                    </h3>
                    <p className="text-body/70 text-sm mt-1">
                      Tell us about your brand. We'll analyze your current marketing and send a custom growth plan.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy/80 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-mustard focus:ring-2 focus:ring-mustard/20 outline-none text-sm transition-all bg-ivory/30"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy/80 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. rahul@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-mustard focus:ring-2 focus:ring-mustard/20 outline-none text-sm transition-all bg-ivory/30"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy/80 mb-1.5">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-mustard focus:ring-2 focus:ring-mustard/20 outline-none text-sm transition-all bg-ivory/30"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy/80 mb-1.5">
                          Primary Service Needed
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-mustard focus:ring-2 focus:ring-mustard/20 outline-none text-sm transition-all bg-ivory/30 text-navy cursor-pointer"
                        >
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy/80 mb-1.5">
                        Target Monthly Marketing Budget
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {budgets.map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`px-3 py-2 text-xs font-medium rounded-xl border text-center transition-all ${
                              formData.budget === b
                                ? 'bg-navy text-white border-navy font-semibold shadow-sm'
                                : 'bg-white text-body/80 border-border hover:border-mustard'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy/80 mb-1.5">
                        Project Goals & Brief
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us what you'd like to achieve (e.g. increase ROAS, generate 100+ qualified leads, launch new e-commerce store)..."
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-mustard focus:ring-2 focus:ring-mustard/20 outline-none text-sm transition-all bg-ivory/30 resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3 text-xs text-body/60">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-mustard" /> NDA Protected
                        </span>
                        <span>•</span>
                        <span>Zero Obligation</span>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy hover:bg-mustard text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg shadow-navy/10 hover:shadow-mustard/25 disabled:opacity-70 cursor-pointer"
                      >
                        {loading ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Request
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
