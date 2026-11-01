import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle2, MessageCircle, Sparkles, Building2, ShieldCheck } from 'lucide-react'

export default function DiagnosticModal({ isOpen, onClose, initialPillar = 'Strategic Consulting' }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    businessStage: 'SME (Small & Medium Enterprise)',
    primaryPillar: initialPillar,
    growthConstraint: 'Lead Quality & Sales Velocity',
    industry: 'Technology & SaaS',
    name: '',
    workEmail: '',
    company: '',
    phone: '',
    details: '',
  })
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)

  const stages = [
    { title: 'Startup / New Venture', desc: 'Market validation, MVP strategy & early scale' },
    { title: 'SME', desc: 'Process automation, repositioning & scaling ops' },
    { title: 'Enterprise', desc: 'Digital transformation, MarTech & RevOps' },
  ]

  const pillars = [
    'Strategic Consulting & Advisory',
    'Digital Marketing (SEO, SEM & Growth)',
    'Traditional & Integrated Campaigns',
    'Custom Software & MarTech Integration',
  ]

  const constraints = [
    'Lead Quality & Sales Velocity',
    'Disconnected Strategy & Technology',
    'Operational Bottlenecks & Manual Overhead',
    'Market Positioning & Commoditization',
    'Legacy Tech & Infrastructure Scaling',
  ]

  const industries = [
    'Technology & SaaS',
    'Healthcare & Life Sciences',
    'Financial Services & Fintech',
    'Retail & E-Commerce',
    'Manufacturing & B2B Industrial',
    'Professional Services & Consulting',
    'Other Industry',
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setCompleted(true)
    }, 900)
  }

  const handleReset = () => {
    setCompleted(false)
    setStep(1)
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
            className="fixed inset-0 bg-navy/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-border overflow-hidden z-10 my-8"
          >
            {/* Top Accent Gradient */}
            <div className="h-2 bg-gradient-to-r from-navy via-mustard to-navy" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-body/50 hover:text-navy hover:bg-ivory transition-colors z-20 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-9">
              {completed ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-700 shadow-inner"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy mb-3">
                    Strategic Diagnostic Scheduled
                  </h3>
                  <p className="text-body/75 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <strong className="text-navy">{formData.name || 'Partner'}</strong>. Our senior strategic consulting partner will analyze your business profile ({formData.company || 'your organization'}) and reach out within 2 hours with our preliminary growth assessment.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-bold transition-all shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Direct WhatsApp Briefing
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 rounded-full text-sm font-semibold text-navy bg-ivory hover:bg-lavender/30 transition-colors cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Header Title */}
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 bg-mustard/15 px-3 py-1 rounded-full text-xs font-bold text-mustard uppercase tracking-wide mb-2">
                      <Sparkles className="w-3.5 h-3.5" /> Confidential Strategic Diagnostic
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                      Diagnose Your Growth Constraints
                    </h3>
                    <p className="text-body/75 text-xs sm:text-sm mt-1">
                      We diagnose root-cause challenges before recommending campaigns or technology. No slide decks, no generic pitch.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Stage selector */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                        1. Business Stage & Scale
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {stages.map((s) => (
                          <button
                            type="button"
                            key={s.title}
                            onClick={() => setFormData({ ...formData, businessStage: s.title })}
                            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                              formData.businessStage === s.title
                                ? 'bg-navy text-white border-navy shadow-sm'
                                : 'bg-ivory/40 text-body border-border hover:border-mustard/50'
                            }`}
                          >
                            <p className="text-xs font-bold">{s.title}</p>
                            <p className={`text-[10px] mt-0.5 leading-snug ${formData.businessStage === s.title ? 'text-white/70' : 'text-body/60'}`}>
                              {s.desc}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Industry & Primary Growth Constraint */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                          2. Industry Sector
                        </label>
                        <select
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border text-xs sm:text-sm bg-ivory/30 focus:border-mustard focus:outline-none"
                        >
                          {industries.map((ind) => (
                            <option key={ind} value={ind}>{ind}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                          3. Primary Growth Constraint
                        </label>
                        <select
                          value={formData.growthConstraint}
                          onChange={(e) => setFormData({ ...formData, growthConstraint: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border text-xs sm:text-sm bg-ivory/30 focus:border-mustard focus:outline-none"
                        >
                          {constraints.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Contact details */}
                    <div className="grid sm:grid-cols-2 gap-3 pt-1">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-navy mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Elena Rostova"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border text-xs sm:text-sm bg-ivory/30 focus:border-mustard focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-navy mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          placeholder="elena@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border text-xs sm:text-sm bg-ivory/30 focus:border-mustard focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-navy mb-1">
                          Company / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Enterprises"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border text-xs sm:text-sm bg-ivory/30 focus:border-mustard focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-navy mb-1">
                          Phone / WhatsApp (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 019-2834"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border text-xs sm:text-sm bg-ivory/30 focus:border-mustard focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-navy mb-1">
                        Brief Context or Key Objective
                      </label>
                      <textarea
                        rows={2}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Tell us about your strategic goal (e.g., improve lead quality, architect unified MarTech stack, international GTM expansion)..."
                        className="w-full px-3.5 py-2 rounded-xl border border-border text-xs sm:text-sm bg-ivory/30 focus:border-mustard focus:outline-none resize-none"
                      />
                    </div>

                    {/* Submit Bar */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border/60">
                      <div className="flex items-center gap-2 text-[11px] text-body/60">
                        <ShieldCheck className="w-4 h-4 text-mustard shrink-0" />
                        <span>Strict NDA & Board-Level Confidentiality</span>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy hover:bg-mustard text-white px-7 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 shadow-md cursor-pointer disabled:opacity-60"
                      >
                        {loading ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            Schedule Diagnostic
                            <Send className="w-3.5 h-3.5" />
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
