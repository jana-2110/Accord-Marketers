import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Compass, Megaphone, Share2, Code2, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import Interactive3DCard from './3d/Interactive3DCard'

const serviceCategories = [
  {
    id: 'consulting',
    title: 'Strategic Consulting & Advisory',
    shortDesc: 'Diagnose growth constraints, architect positioning, and guide executive decision-making.',
    icon: Compass,
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
    items: [
      { name: 'Search Engine Optimization (SEO) & AEO Strategy', desc: 'Semantic topic clustering, technical audits, and answer-engine optimization (AI search).' },
      { name: 'Search Engine Marketing (SEM, PPC & Programmatic)', desc: 'High-intent search capture across Google & Microsoft Ads with custom landing pages.' },
      { name: 'Social Media Strategy, Organic & Paid', desc: 'Platform-native audience building, B2B LinkedIn ABM, and performance retargeting.' },
      { name: 'Content Marketing, Thought Leadership & Brand Authority', desc: 'Long-form intellectual property, executive bylines, whitepapers, and buyer education.' },
      { name: 'Email Marketing, Marketing Automation & CRM Strategy', desc: 'Behavioral nurture workflows, lifecycle mapping, and bi-directional CRM sync.' },
      { name: 'Performance Analytics, Attribution & Business Intelligence', desc: 'GA4, server-side tracking, multi-touch attribution, and executive ROI dashboards.' },
    ],
  },
  {
    id: 'integrated',
    title: 'Traditional & Integrated Marketing',
    shortDesc: 'Physical and offline campaigns strategically bridged into your digital attribution engine.',
    icon: Share2,
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
    <section id="services" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-[#F1F2E6] border border-[#B7BBD9]/50 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] text-[#B38B00] uppercase mb-3 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Capabilities &amp; Practice Areas</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0F172A] leading-tight mb-5"
          >
            Full-Spectrum Consulting, Marketing &amp; Technology for{' '}
            <span className="text-[#B38B00]">Modern Business Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#334155] leading-relaxed"
          >
            Every service we deliver is an integrated component of your overall growth strategy—designed by consultants, executed by marketers, and powered by custom technology.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#0F172A] text-white shadow-lg shadow-[#0F172A]/20'
                : 'bg-[#F1F2E6] text-[#0F172A] hover:bg-[#B7BBD9]/30 border border-[#B7BBD9]/30'
            }`}
          >
            All Practice Areas
          </button>
          {serviceCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === c.id
                  ? 'bg-[#0F172A] text-white shadow-lg shadow-[#0F172A]/20'
                  : 'bg-[#F1F2E6] text-[#0F172A] hover:bg-[#B7BBD9]/30 border border-[#B7BBD9]/30'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-14">
          {displayedCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.id}
                className="bg-[#F1F2E6] rounded-3xl p-6 sm:p-10 border border-[#B7BBD9]/40 shadow-xl shadow-[#0F172A]/5"
              >
                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[#B7BBD9]/30 gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-[#B38B00] flex items-center justify-center shadow-md shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                        {category.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#334155] font-normal">
                        {category.shortDesc}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={onOpenDiagnostic}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#B38B00] transition-colors cursor-pointer self-start md:self-auto"
                  >
                    <span>Request Practice Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Service Cards Grid with 3D Tilt */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.items.map((item) => (
                    <Interactive3DCard
                      key={item.name}
                      glowColor="rgba(179, 139, 0, 0.12)"
                      className="bg-white rounded-2xl p-5 border border-[#B7BBD9]/40 hover:border-[#B38B00] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#B38B00] shrink-0" />
                          <h4 className="text-xs font-extrabold text-[#0F172A] group-hover:text-[#B38B00] transition-colors leading-snug">
                            {item.name}
                          </h4>
                        </div>
                        <p className="text-[11px] text-[#334155] leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                      <div className="pt-3 mt-3 border-t border-[#B7BBD9]/20 flex items-center justify-between text-[10px] text-[#B38B00] font-bold">
                        <span>Integrated Delivery</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Interactive3DCard>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
