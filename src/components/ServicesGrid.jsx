import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Compass, Megaphone, Share2, Code2, ArrowRight, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react'

const serviceCategories = [
  {
    id: 'consulting',
    title: 'Strategic Consulting & Advisory',
    shortDesc: 'Diagnose growth constraints, architect positioning, and guide executive decision-making.',
    icon: Compass,
    accent: 'navy',
    items: [
      { name: 'Business Growth Diagnostics & Opportunity Assessment', desc: 'Growth constraint analysis, TAM/SAM/SOM mapping, and capability maturity scoring.' },
      { name: 'Competitive Intelligence & Market Positioning Strategy', desc: 'Deep-dive competitor benchmarking, brand architecture, and value proposition design.' },
      { name: 'Digital Transformation Roadmapping', desc: 'Phased modernization roadmaps, tech investment prioritization, and organizational readiness.' },
      { name: 'Go-to-Market Strategy & Market Entry Advisory', desc: 'Target ICP definition, product-market fit validation, and launch sequencing.' },
      { name: 'Organizational Capability & Maturity Assessment', desc: 'Marketing operations review, talent strategy, and governance framework design.' },
      { name: 'C-Suite Advisory & Board-Level Strategy Support', desc: 'Strategic narrative design, financial model integration, and board presentations.' },
      { name: 'Change Management & Operating Model Design', desc: 'Stakeholder alignment, workflow optimization, and transformation training.' },
      { name: 'Revenue Operations (RevOps) Strategy', desc: 'Integrated marketing, sales, and customer success funnel synchronization.' },
    ],
  },
  {
    id: 'digital',
    title: 'Digital Marketing',
    shortDesc: 'Engineered for revenue, full-funnel attribution, and compounding organic authority.',
    icon: Megaphone,
    accent: 'mustard',
    items: [
      { name: 'Search Engine Optimization (SEO) & AEO Strategy', desc: 'Semantic topic clustering, technical audits, and answer-engine optimization (AI search).' },
      { name: 'Search Engine Marketing (SEM, PPC & Programmatic)', desc: 'High-intent search capture across Google & Microsoft Ads with custom landing pages.' },
      { name: 'Social Media Strategy, Organic & Paid', desc: 'Platform-native audience building, B2B LinkedIn ABM, and performance retargeting.' },
      { name: 'Content Marketing, Thought Leadership & Authority', desc: 'Long-form intellectual property, executive bylines, whitepapers, and buyer education.' },
      { name: 'Email Marketing, Marketing Automation & CRM Strategy', desc: 'Behavioral nurture workflows, lifecycle mapping, and bi-directional CRM sync.' },
      { name: 'Performance Analytics, Attribution & Business Intelligence', desc: 'GA4, server-side tracking, multi-touch attribution, and executive ROI dashboards.' },
    ],
  },
  {
    id: 'integrated',
    title: 'Traditional & Integrated Marketing',
    shortDesc: 'Physical and offline campaigns strategically bridged into your digital attribution engine.',
    icon: Share2,
    accent: 'lavender',
    items: [
      { name: 'Brand Strategy, Positioning & Architecture', desc: 'Identity design, brand guidelines, and market differentiation frameworks.' },
      { name: 'Integrated Offline-Online Campaign Strategy', desc: 'Attribution bridging via QR, promo codes, and sequential cross-channel messaging.' },
      { name: 'Event Marketing, Trade Show & Experiential Strategy', desc: 'Booth ROI architecture, digital pre-nurture, and automated post-event lead capture.' },
      { name: 'Public Relations, Media Strategy & Crisis Communications', desc: 'Earned media placements, crisis response protocols, and analyst relations.' },
      { name: 'Local Market Penetration & Geo-Strategy', desc: 'Local SEO integrated with direct mail, community partnerships, and geo-fenced ads.' },
      { name: 'Partnership Strategy & Co-Marketing Advisory', desc: 'Co-branded campaigns, reseller enablement, and strategic alliance governance.' },
    ],
  },
  {
    id: 'software',
    title: 'Software Development & Technology',
    shortDesc: 'Purpose-built web, mobile, and MarTech systems engineered by business-minded developers.',
    icon: Code2,
    accent: 'navy',
    items: [
      { name: 'Custom Software & Web Application Development', desc: 'Scalable cloud web applications, internal tools, and client portals (React, Node, Python).' },
      { name: 'Mobile App Development (iOS, Android, Cross-Platform)', desc: 'Native Swift/Kotlin and React Native/Flutter apps with built-in marketing analytics.' },
      { name: 'Marketing Technology (MarTech) Stack Architecture', desc: 'Tool selection, stack deduplication, and single-customer-view data architecture.' },
      { name: 'CRM, ERP & Enterprise System Integration', desc: 'Salesforce, HubSpot, Dynamics, and ERP bidirectional synchronization.' },
      { name: 'API Development, Data Architecture & CDP Implementation', desc: 'Custom REST/GraphQL APIs, customer data platforms, and data lake pipelines.' },
      { name: 'Cloud Infrastructure, DevOps & Security Compliance', desc: 'AWS/Azure/GCP cloud architecture, automated CI/CD, and SOC 2/HIPAA compliance.' },
    ],
  },
]

export default function ServicesGrid({ onOpenDiagnostic }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState('all')

  const displayedCategories = activeTab === 'all'
    ? serviceCategories
    : serviceCategories.filter((c) => c.id === activeTab)

  return (
    <section id="services" className="py-20 lg:py-28 bg-ivory" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-xs font-bold tracking-[0.2em] text-mustard uppercase mb-3"
          >
            Capabilities &amp; Practice Areas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy leading-tight mb-5"
          >
            Full-Spectrum Consulting, Marketing &amp; Technology for{' '}
            <span className="text-mustard">Modern Business Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-body/80 leading-relaxed"
          >
            We eliminate vendor fragmentation. Every discipline—from C-suite growth advisory to full-stack software development—operates under unified strategic command.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-navy text-white shadow-md'
                : 'bg-white text-navy/70 border border-border hover:border-mustard'
            }`}
          >
            All 4 Core Disciplines
          </button>
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-navy text-white shadow-md'
                  : 'bg-white text-navy/70 border border-border hover:border-mustard'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </motion.div>

        {/* Service Pillars Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {displayedCategories.map((category, catIdx) => {
            const Icon = category.icon
            const isMustard = category.accent === 'mustard'
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + catIdx * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl p-8 sm:p-9 border border-border/70 hover:border-mustard/40 shadow-lg shadow-navy/3 hover:shadow-2xl hover:shadow-navy/6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                            isMustard ? 'bg-mustard/15 text-mustard' : 'bg-navy/10 text-navy'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-navy">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-body/75 leading-relaxed pl-14">
                        {category.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Sub-services List */}
                  <div className="divide-y divide-border/50 border-t border-border/60 mt-4">
                    {category.items.map((item) => (
                      <div key={item.name} className="py-3.5 group cursor-default">
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-mustard shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-navy group-hover:text-mustard transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-body/70 mt-0.5 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-6 mt-4 border-t border-border/70 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-navy/60 uppercase tracking-wider">
                    {category.items.length} Specialized Capabilities
                  </span>
                  <button
                    onClick={onOpenDiagnostic}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy hover:text-mustard transition-colors cursor-pointer"
                  >
                    <span>Inquire About Practice</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
