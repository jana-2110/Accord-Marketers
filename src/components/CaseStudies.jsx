import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight, X, CheckCircle, Sparkles } from 'lucide-react'
import Interactive3DCard from './3d/Interactive3DCard'

const caseStudiesData = [
  {
    id: 'b2b-saas',
    tag: 'B2B SaaS & Tech',
    title: 'B2B SaaS Company — Strategic Lead Generation Transformation',
    clientType: 'Enterprise Cloud Platform',
    headlineOutcome: '+312% MQLs & $1.4M Pipeline Generated',
    challenge: 'A B2B SaaS company struggled with disconnected marketing tools, manual lead qualification, and a website that couldn’t support account-based marketing (ABM) campaigns. Their strategic constraint was operational inefficiency limiting sales velocity.',
    solution: [
      'Conducted strategic RevOps assessment and identified lead scoring and automation as highest-leverage opportunities',
      'Developed a custom lead scoring algorithm integrated bi-directionally with HubSpot and Salesforce',
      'Rebuilt the corporate website as a headless CMS with dynamic content personalization',
      'Launched integrated LinkedIn and Google Ads campaigns with automated multi-touch nurture sequences',
    ],
    results: [
      { label: 'MQL Lift (6 Months)', value: '+312%' },
      { label: 'Lead Response Time', value: '-67%' },
      { label: 'Attributed Pipeline', value: '$1.4M' },
      { label: 'Sales/Marketing Alignment', value: '8.7 / 10' },
    ],
  },
  {
    id: 'healthcare',
    tag: 'Healthcare & Life Sciences',
    title: 'Healthcare Provider — Strategic Local Market Dominance',
    clientType: 'Multi-Location Healthcare Provider',
    headlineOutcome: '+189% Local Organic Search & 45% Patient Lift',
    challenge: 'A multi-location healthcare provider needed to increase patient acquisition in competitive local markets while maintaining strict HIPAA-compliant marketing operations. Their strategic constraint was balancing growth with regulatory risk.',
    solution: [
      'Conducted competitive local market analysis and patient journey mapping across all catchment zones',
      'Implemented local SEO strategy with location-specific content and Google Business Profile optimization',
      'Developed a custom HIPAA-compliant patient portal with integrated real-time appointment scheduling',
      'Executed integrated direct mail and geo-targeted digital campaigns for newly launched service lines',
    ],
    results: [
      { label: 'Local Search Visibility', value: '+189%' },
      { label: 'New Patient Appointments', value: '+45%' },
      { label: 'HIPAA Violations', value: '0 (100% Compliant)' },
      { label: 'Service Area Market Share', value: '+23%' },
    ],
  },
  {
    id: 'ecommerce',
    tag: 'Retail & E-Commerce',
    title: 'E-Commerce Retailer — Strategic Operational Scaling',
    clientType: 'D2C Consumer Brand',
    headlineOutcome: '+$2.3M Revenue & 80% Less Inventory Chaos',
    challenge: 'A rapidly growing e-commerce brand faced inventory management chaos, fragmented customer data, and declining ad performance due to poor tracking. Their strategic constraint was operational infrastructure failing to support growth velocity.',
    solution: [
      'Conducted operational maturity assessment and comprehensive marketing technology stack audit',
      'Built custom inventory-management integration between Shopify and their enterprise ERP system',
      'Implemented server-side tracking and first-party data collection for accurate ad attribution',
      'Redesigned the mobile shopping experience with systematic conversion-rate optimization (CRO)',
    ],
    results: [
      { label: 'Additional Year-1 Revenue', value: '+$2.3M' },
      { label: 'Inventory Overselling', value: '-80%' },
      { label: 'Blended ROAS Lift', value: '+34%' },
      { label: 'Operational Efficiency', value: '+47%' },
    ],
  },
  {
    id: 'manufacturing',
    tag: 'Industrial & B2B Manufacturing',
    title: 'Manufacturing Company — Strategic Digital Transformation',
    clientType: 'B2B Precision Equipment Manufacturer',
    headlineOutcome: '$4.8M Direct Digital Orders in Year One',
    challenge: 'A traditional B2B manufacturer relied entirely on trade shows and dealer networks, with no digital lead generation or customer self-service capabilities. Their strategic constraint was channel dependency limiting growth scalability.',
    solution: [
      'Conducted digital maturity assessment and competitive digital benchmarking against global leaders',
      'Developed a dedicated dealer portal with real-time inventory, ordering, and co-branded marketing assets',
      'Created technical content marketing strategy targeting engineering-specifier and procurement audiences',
      'Built marketing automation workflows to nurture and score trade show leads year-round',
    ],
    results: [
      { label: 'Direct Digital Portal Orders', value: '$4.8M' },
      { label: 'Organic Technical Traffic', value: '+156%' },
      { label: 'Trade Show Lead Follow-up', value: '23% → 89%' },
      { label: 'Digital Channel Share of Rev', value: '34%' },
    ],
  },
]

export default function CaseStudies({ onOpenDiagnostic }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeModalStudy, setActiveModalStudy] = useState(null)

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-[#F1F2E6] relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 bg-white border border-[#B7BBD9]/50 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] text-[#B38B00] uppercase mb-3 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Outcomes Across Industries</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0F172A] leading-tight"
            >
              Strategic Transformation in{' '}
              <span className="text-[#B38B00]">Action</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#334155] max-w-lg leading-relaxed font-normal"
          >
            How our integrated model solves root-cause growth constraints and delivers measurable business outcomes across sectors.
          </motion.p>
        </div>

        {/* 4 Case Study Cards in 3D */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudiesData.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <Interactive3DCard
                glowColor="rgba(183, 187, 217, 0.2)"
                className="h-full bg-white rounded-3xl p-8 border border-[#B7BBD9]/40 hover:border-[#B38B00] shadow-xl shadow-[#0F172A]/5 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-[#0F172A] text-white">
                      {study.tag}
                    </span>
                    <span className="text-xs text-[#334155] font-semibold">{study.clientType}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0F172A] leading-snug mb-3 group-hover:text-[#B38B00] transition-colors">
                    {study.title}
                  </h3>

                  <div className="bg-[#F1F2E6] rounded-2xl p-4 mb-5 border border-[#B7BBD9]/30">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#0F172A]/70 block mb-1">
                      Validated Strategic Outcome
                    </span>
                    <span className="text-lg font-black text-[#B38B00] block">
                      {study.headlineOutcome}
                    </span>
                  </div>

                  <p className="text-xs text-[#334155] leading-relaxed mb-6 font-normal">
                    {study.challenge}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {study.results.map((res) => (
                      <div key={res.label} className="bg-white rounded-xl p-3 border border-[#B7BBD9]/30">
                        <span className="text-base font-black text-[#0F172A] block">{res.value}</span>
                        <span className="text-[10px] text-[#334155] font-semibold block">{res.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#B7BBD9]/30 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalStudy(study)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F172A] group-hover:text-[#B38B00] transition-colors cursor-pointer"
                  >
                    <span>Read Full Strategic Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={onOpenDiagnostic}
                    className="text-[11px] font-bold text-[#B38B00] hover:underline cursor-pointer"
                  >
                    Solve Similar Bottleneck
                  </button>
                </div>
              </Interactive3DCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <AnimatePresence>
        {activeModalStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalStudy(null)}
              className="fixed inset-0 bg-[#0F172A]/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#F1F2E6] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#B7BBD9]/50 z-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#B7BBD9]/30">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#0F172A] text-white">
                  {activeModalStudy.tag}
                </span>
                <button
                  onClick={() => setActiveModalStudy(null)}
                  className="p-2 rounded-xl text-[#0F172A] hover:bg-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-2xl font-extrabold text-[#0F172A] mb-2">
                {activeModalStudy.title}
              </h3>
              <p className="text-xs font-semibold text-[#334155] mb-5">
                Client Profile: {activeModalStudy.clientType}
              </p>

              <div className="bg-white rounded-2xl p-4 mb-6 border border-[#B7BBD9]/40">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A]/70 block mb-1">
                  Validated Headline Outcome
                </span>
                <span className="text-xl font-black text-[#B38B00]">
                  {activeModalStudy.headlineOutcome}
                </span>
              </div>

              <div className="space-y-5 text-xs text-[#334155] leading-relaxed">
                <div>
                  <h4 className="font-extrabold text-sm text-[#0F172A] mb-2 uppercase tracking-wider">
                    The Strategic Constraint &amp; Challenge
                  </h4>
                  <p className="bg-white/70 p-4 rounded-xl border border-[#B7BBD9]/30">
                    {activeModalStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="font-extrabold text-sm text-[#0F172A] mb-2 uppercase tracking-wider">
                    Our Integrated Strategic Solution
                  </h4>
                  <ul className="space-y-2 bg-white/70 p-4 rounded-xl border border-[#B7BBD9]/30">
                    {activeModalStudy.solution.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#B38B00] shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-extrabold text-sm text-[#0F172A] mb-2 uppercase tracking-wider">
                    Measurable Strategic Results
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {activeModalStudy.results.map((r) => (
                      <div key={r.label} className="bg-white p-3 rounded-xl border border-[#B7BBD9]/40 text-center">
                        <span className="text-base font-black text-[#0F172A] block">{r.value}</span>
                        <span className="text-[10px] text-[#334155] block">{r.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#B7BBD9]/30 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => {
                    setActiveModalStudy(null)
                    onOpenDiagnostic()
                  }}
                  className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#B38B00] text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Book Strategic Diagnostic</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveModalStudy(null)}
                  className="text-xs font-bold text-[#0F172A] hover:underline cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
