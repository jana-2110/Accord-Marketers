import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Building, Rocket, Shield, Activity, Landmark, ShoppingBag, Factory, Laptop, Briefcase, ArrowRight, Check } from 'lucide-react'

const businessStages = [
  {
    id: 'startups',
    title: 'Startups & New Ventures',
    badge: 'Seed to Series A/B',
    icon: Rocket,
    bullets: [
      'Market validation frameworks, competitive landscape mapping, and investor-grade growth strategy',
      'MVP-aligned digital product strategy with cost-efficient customer acquisition frameworks',
      'Fundraising narrative development, pitch deck advisory, and runway-preserving growth tactics',
    ],
    outcome: 'Faster time-to-traction, capital efficiency, and product-market fit validation without burning through runway.',
  },
  {
    id: 'smes',
    title: 'Small & Medium Enterprises (SMEs)',
    badge: '$5M - $50M Revenue',
    icon: Building,
    bullets: [
      'Scalable marketing operations design, process automation strategy, and capability gap analysis',
      'Competitive repositioning strategy to escape commoditization and build defensible market share',
      'Technology investment prioritization, digital maturity roadmaps, and custom tool development',
    ],
    outcome: 'Elimination of manual operational bottlenecks, 40-60% overhead reduction, and compounding organic pipeline.',
  },
  {
    id: 'enterprise',
    title: 'Enterprise & Large Organizations',
    badge: '$50M+ & Global',
    icon: Shield,
    bullets: [
      'Digital transformation consulting and enterprise legacy modernization strategy',
      'Multi-channel campaign orchestration and governance-compliant marketing technology stacks',
      'Organizational change management, cross-functional alignment, and RevOps transformation',
      'M&A marketing integration, brand consolidation strategy, and data ecosystem unification',
    ],
    outcome: 'De-siloed marketing and technology operations with board-level ROI transparency and enterprise compliance.',
  },
]

const industries = [
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    icon: Activity,
    summary: 'Strategic patient acquisition frameworks, HIPAA-compliant digital platform strategy, regulatory-aware marketing operations, and healthcare software integration consulting.',
    highlights: ['HIPAA Compliant Infrastructure', 'Patient Journey Mapping', 'Geo-Targeted Provider SEO'],
  },
  {
    id: 'fintech',
    title: 'Financial Services & Fintech',
    icon: Landmark,
    summary: 'Trust architecture strategy, fintech product development advisory, compliance-first marketing automation, and competitive differentiation in heavily regulated markets.',
    highlights: ['SOC 2 / PCI-DSS Security', 'Trust-First Content Architecture', 'High-LTV Acquisition Funnels'],
  },
  {
    id: 'retail',
    title: 'Retail & E-Commerce',
    icon: ShoppingBag,
    summary: 'Omnichannel commerce strategy, conversion-rate optimization consulting, inventory-integrated marketing systems, and D2C market entry advisory.',
    highlights: ['Shopify Plus & Headless Commerce', 'ERP / Inventory Real-Time Sync', 'First-Party Server-Side Tracking'],
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & B2B Industrial',
    icon: Factory,
    summary: 'Technical content strategy for specifier audiences, dealer/distributor portal strategy, supply chain software consulting, and B2B digital transformation roadmaps.',
    highlights: ['Custom B2B Dealer Portals', 'Specifier Content Marketing', 'Trade Show Lead RevOps'],
  },
  {
    id: 'saas',
    title: 'Technology & SaaS',
    icon: Laptop,
    summary: 'Product-led growth (PLG) strategy, onboarding optimization consulting, scalable API-first development, and SaaS metrics & monetization advisory.',
    highlights: ['Onboarding & Activation CRO', 'API & Integration Ecosystems', 'LTV:CAC Payback Optimization'],
  },
  {
    id: 'professional',
    title: 'Professional Services & Consulting',
    icon: Briefcase,
    summary: 'Thought leadership strategy, expertise-based positioning, lead generation through intellectual property, and service productization consulting.',
    highlights: ['Executive Byline Syndication', 'High-Ticket Lead Generation', 'Productized Consulting Systems'],
  },
]

export default function IndustrySolutions({ onOpenDiagnostic }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [viewMode, setViewMode] = useState('stages') // 'stages' | 'industries'

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-white relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-xs font-bold tracking-[0.2em] text-mustard uppercase mb-3"
          >
            Tailored Growth Models
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy leading-tight mb-4"
          >
            Strategic Growth Solutions for Every{' '}
            <span className="text-mustard">Stage &amp; Sector</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-body/80 leading-relaxed"
          >
            No two businesses share identical growth dynamics. We customize our consulting, campaign architectures, and software engineering to your exact maturity stage and regulatory environment.
          </motion.p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="bg-ivory p-1.5 rounded-full border border-border flex items-center gap-1 shadow-inner">
            <button
              onClick={() => setViewMode('stages')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                viewMode === 'stages'
                  ? 'bg-navy text-white shadow-md'
                  : 'text-navy/70 hover:text-navy'
              }`}
            >
              By Business Stage (Startups, SMEs, Enterprise)
            </button>
            <button
              onClick={() => setViewMode('industries')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                viewMode === 'industries'
                  ? 'bg-navy text-white shadow-md'
                  : 'text-navy/70 hover:text-navy'
              }`}
            >
              By Industry Sector (6 Practices)
            </button>
          </div>
        </div>

        {/* Content View 1: By Business Stage */}
        <AnimatePresence mode="wait">
          {viewMode === 'stages' ? (
            <motion.div
              key="stages-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {businessStages.map((stage) => {
                const Icon = stage.icon
                return (
                  <div
                    key={stage.id}
                    className="bg-ivory/50 rounded-3xl p-8 border border-border/80 hover:border-mustard/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-navy/10 group-hover:bg-mustard/15 flex items-center justify-center text-navy group-hover:text-mustard transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-mustard bg-mustard/10 px-3 py-1 rounded-full">
                          {stage.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-navy mb-4 group-hover:text-mustard transition-colors">
                        {stage.title}
                      </h3>

                      <div className="space-y-3 mb-6">
                        {stage.bullets.map((b) => (
                          <div key={b} className="flex items-start gap-2.5 text-xs text-body/80 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-mustard mt-1.5 shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 border-t border-border/60">
                      <p className="text-[11px] text-body/70 italic mb-4">
                        <strong className="text-navy font-bold not-italic">Strategic Outcome: </strong>
                        {stage.outcome}
                      </p>
                      <button
                        onClick={onOpenDiagnostic}
                        className="w-full inline-flex items-center justify-center gap-2 bg-navy hover:bg-mustard text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <span>Stage Strategic Intake</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          ) : (
            <motion.div
              key="industries-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {industries.map((ind) => {
                const Icon = ind.icon
                return (
                  <div
                    key={ind.id}
                    className="bg-ivory/50 rounded-3xl p-7 border border-border/80 hover:border-mustard/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-mustard/15 flex items-center justify-center text-mustard mb-4 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-extrabold text-navy mb-2.5 group-hover:text-mustard transition-colors">
                        {ind.title}
                      </h3>
                      <p className="text-xs text-body/75 leading-relaxed mb-5">
                        {ind.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/60">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {ind.highlights.map((h) => (
                          <span
                            key={h}
                            className="bg-white text-[10px] font-bold text-navy/70 px-2.5 py-1 rounded-md border border-border/70"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={onOpenDiagnostic}
                        className="text-xs font-bold text-navy hover:text-mustard inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Consult on {ind.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
