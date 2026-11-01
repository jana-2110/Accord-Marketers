import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight, X, CheckCircle, Sparkles, Building2, TrendingUp, Layers } from 'lucide-react'

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
    <section id="case-studies" className="py-20 lg:py-28 bg-white relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block text-xs font-bold tracking-[0.2em] text-mustard uppercase mb-3"
            >
              Proven Business Impact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy leading-tight"
            >
              Strategic Case Studies &amp;{' '}
              <span className="text-mustard">Transformation Results</span>
            </motion.h2>
          </div>

          <motion.button
            onClick={onOpenDiagnostic}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy hover:text-mustard transition-colors cursor-pointer shrink-0"
          >
            <span>Request Full Portfolio Deck</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* 4 Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudiesData.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              onClick={() => setActiveModalStudy(study)}
              className="group bg-ivory/40 hover:bg-white rounded-3xl p-8 sm:p-9 border border-border/80 hover:border-mustard/40 shadow-sm hover:shadow-2xl hover:shadow-navy/5 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
            >
              <div>
                {/* Top Badge & Client */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-navy/5 text-navy font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border border-navy/10">
                    {study.tag}
                  </span>
                  <span className="text-xs font-bold text-mustard">
                    {study.headlineOutcome}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-navy leading-snug mb-3 group-hover:text-mustard transition-colors">
                  {study.title}
                </h3>

                <p className="text-xs sm:text-sm text-body/75 line-clamp-3 leading-relaxed mb-6">
                  {study.challenge}
                </p>

                {/* Key Metrics Ribbon */}
                <div className="grid grid-cols-2 gap-3 bg-white p-4 rounded-2xl border border-border/60 mb-6">
                  {study.results.slice(0, 2).map((r) => (
                    <div key={r.label}>
                      <span className="text-xl sm:text-2xl font-black text-mustard block">{r.value}</span>
                      <span className="text-[10px] font-bold text-navy/70 uppercase tracking-wider block">{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs font-bold text-navy group-hover:text-mustard transition-colors flex items-center gap-1">
                  View Full Transformation Architecture
                </span>
                <div className="w-8 h-8 rounded-full bg-ivory group-hover:bg-mustard group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-navy group-hover:text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Full Architecture Modal */}
      <AnimatePresence>
        {activeModalStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalStudy(null)}
              className="fixed inset-0 bg-navy/75 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-border overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
            >
              <div className="h-2 bg-gradient-to-r from-navy via-mustard to-navy shrink-0" />

              <button
                onClick={() => setActiveModalStudy(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-body/50 hover:text-navy hover:bg-ivory transition-colors z-20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-9 overflow-y-auto space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-mustard/15 px-3 py-1 rounded-full text-xs font-bold text-mustard uppercase mb-2">
                    <Sparkles className="w-3.5 h-3.5" /> Full Transformation Blueprint
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy leading-snug">
                    {activeModalStudy.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-body/65 mt-1">
                    Client Category: {activeModalStudy.clientType}
                  </p>
                </div>

                {/* 4 Results Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-ivory/80 rounded-2xl p-4 border border-border/70">
                  {activeModalStudy.results.map((r) => (
                    <div key={r.label} className="text-center">
                      <p className="text-xl sm:text-2xl font-black text-mustard">{r.value}</p>
                      <p className="text-[10px] font-bold text-navy/70 uppercase tracking-wider mt-0.5">{r.label}</p>
                    </div>
                  ))}
                </div>

                {/* Strategic Challenge */}
                <div className="bg-white p-5 rounded-2xl border border-border/80 shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy/70 mb-2">
                    Strategic Challenge &amp; Constraint
                  </h4>
                  <p className="text-xs sm:text-sm text-body/80 leading-relaxed">
                    {activeModalStudy.challenge}
                  </p>
                </div>

                {/* Strategic Solution */}
                <div className="bg-white p-5 rounded-2xl border border-border/80 shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-mustard mb-3">
                    Integrated Strategic Solution
                  </h4>
                  <ul className="space-y-2.5">
                    {activeModalStudy.solution.map((sol) => (
                      <li key={sol} className="flex items-start gap-2.5 text-xs sm:text-sm text-body/80 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-mustard shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-body/60 text-center sm:text-left">
                    Facing a similar operational or marketing growth bottleneck?
                  </p>
                  <button
                    onClick={() => {
                      setActiveModalStudy(null)
                      onOpenDiagnostic()
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy hover:bg-mustard text-white px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    Discuss Similar Engagement
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
