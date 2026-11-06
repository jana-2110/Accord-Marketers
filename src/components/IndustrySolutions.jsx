import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building, Rocket, Shield, Activity, Landmark, ShoppingBag, Factory, Laptop, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import Interactive3DCard from './3d/Interactive3DCard'

const businessStages = [
  {
    id: 'startups',
    title: 'Startups & New Ventures',
    badge: 'Seed to Series A/B',
    icon: Rocket,
    bullets: [
      'Market validation frameworks, competitive landscape mapping, and investor-grade growth strategy',
      'MVP-aligned digital product strategy with cost-efficient customer acquisition frameworks',
      'Fundraising narrative development, pitch advisory, and runway-preserving growth tactics',
    ],
    outcome: 'Faster time-to-traction, capital efficiency, and product-market fit validation without burning through runway.',
  },
  {
    id: 'smes',
    title: 'Small & Medium Enterprises (SMEs)',
    badge: 'Scaling Operations',
    icon: Building,
    bullets: [
      'Scalable marketing operations design, process automation strategy, and capability gap analysis',
      'Competitive repositioning strategy to escape commoditization and build defensible market share',
      'Technology investment prioritization and digital maturity roadmaps',
    ],
    outcome: 'Elimination of manual operational bottlenecks, 40-60% overhead reduction, and compounding organic pipeline.',
  },
  {
    id: 'enterprise',
    title: 'Enterprise & Large Organizations',
    badge: 'Enterprise & Global',
    icon: Shield,
    bullets: [
      'Digital transformation consulting and legacy modernization strategy',
      'Multi-channel campaign orchestration and governance-compliant marketing technology',
      'Organizational change management, cross-functional alignment, and RevOps transformation',
      'M&A marketing integration and brand consolidation strategy',
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
    title: 'Financial Services',
    icon: Landmark,
    summary: 'Trust architecture strategy, fintech product development advisory, compliance-first marketing automation, and competitive differentiation in regulated markets.',
    highlights: ['SOC 2 / Regulatory Compliance', 'Trust-First Content Architecture', 'High-LTV Acquisition Funnels'],
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
]

export default function IndustrySolutions({ onOpenDiagnostic }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-[#F1F2E6] relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-white border border-[#B7BBD9]/50 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] text-[#B38B00] uppercase mb-3 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored By Scale &amp; Sector</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0F172A] leading-tight mb-5"
          >
            Solutions Designed for Your{' '}
            <span className="text-[#B38B00]">Stage of Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#334155] leading-relaxed"
          >
            From venture-backed startups navigating product-market fit to global enterprises modernizing legacy operations, our strategic frameworks adapt to your specific organizational context.
          </motion.p>
        </div>

        {/* 3 Business Stages Cards with 3D Tilt */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {businessStages.map((stage, i) => {
            const Icon = stage.icon
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <Interactive3DCard
                  glowColor="rgba(179, 139, 0, 0.15)"
                  className="h-full bg-white rounded-3xl p-8 border border-[#B7BBD9]/40 hover:border-[#B38B00] shadow-xl shadow-[#0F172A]/5 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#0F172A] text-white">
                        {stage.badge}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-[#B38B00] group-hover:bg-[#B38B00] group-hover:text-white transition-colors flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold text-[#0F172A] leading-snug mb-4 group-hover:text-[#B38B00] transition-colors">
                      {stage.title}
                    </h3>

                    <ul className="space-y-3 mb-6">
                      {stage.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#334155] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#B38B00] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 border-t border-[#B7BBD9]/30">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A]/70 block mb-1">
                      Strategic Transformation:
                    </span>
                    <p className="text-xs text-[#334155] font-semibold leading-relaxed mb-4">
                      {stage.outcome}
                    </p>
                    <button
                      onClick={onOpenDiagnostic}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F172A] group-hover:text-[#B38B00] transition-colors cursor-pointer"
                    >
                      <span>Explore Stage Solutions</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </Interactive3DCard>
              </motion.div>
            )
          })}
        </div>

        {/* Industry Verticals Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#B7BBD9]/40 shadow-xl shadow-[#0F172A]/5">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B38B00] block mb-2">
              Industry Verticals
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              Deep Domain Expertise Across Regulated &amp; Complex Sectors
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <div
                  key={ind.id}
                  className="bg-[#F1F2E6]/60 rounded-2xl p-6 border border-[#B7BBD9]/30 hover:bg-white hover:border-[#B38B00] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-[#B38B00] group-hover:bg-[#B38B00] group-hover:text-white transition-colors flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-extrabold text-[#0F172A] mb-2 group-hover:text-[#B38B00] transition-colors">
                      {ind.title}
                    </h4>
                    <p className="text-xs text-[#334155] leading-relaxed mb-4">
                      {ind.summary}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-[#B7BBD9]/20">
                    {ind.highlights.map((h) => (
                      <div key={h} className="text-[11px] font-bold text-[#0F172A] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B38B00]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
