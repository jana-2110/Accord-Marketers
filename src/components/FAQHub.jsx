import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Search, Sparkles } from 'lucide-react'

const globalFaqs = [
  {
    category: 'Agency Model',
    q: 'What services does a strategic consulting-led marketing and software development agency provide?',
    a: 'A strategic consulting-led agency provides high-level business advisory services—including competitive analysis, market positioning, digital transformation strategy, go-to-market planning, and organizational design—alongside the tactical execution of marketing campaigns and custom software development. The key differentiator is unified strategy: ensuring marketing campaigns, technology infrastructure, and business operations are designed to work together for maximum strategic impact and efficiency.',
  },
  {
    category: 'Engagement & Cost',
    q: 'How much does it cost to hire a strategic consulting and integrated marketing agency?',
    a: 'Costs vary based on strategic scope, industry complexity, and engagement model. Strategic diagnostic engagements typically range from $5,000–$25,000. Monthly strategic advisory and integrated marketing retainers range from $10,000–$75,000+ depending on campaign scale, consulting intensity, and software requirements. Project-based software development is scoped and estimated individually. Accord Marketers provides transparent pricing and phased engagements to manage risk and demonstrate strategic ROI before scaling investment.',
  },
  {
    category: 'Digital Transformation',
    q: 'What is digital transformation strategy in marketing and business operations?',
    a: 'Digital transformation strategy is the planned adoption of technology to modernize business operations—replacing manual processes with automation, integrating disconnected tools into unified data ecosystems, leveraging AI for personalization and analytics, and building digital-first customer experiences. Strategic digital transformation includes organizational change management, capability building, and governance design—not just technology implementation.',
  },
  {
    category: 'Agency Model',
    q: 'What is the difference between a strategic consulting firm, a marketing agency, and a software development company?',
    a: 'A strategic consulting firm diagnoses business challenges and recommends solutions. A marketing agency executes campaigns. A software development company builds applications. An integrated agency like Accord Marketers combines all three disciplines—providing strategic diagnosis, marketing execution, and technology development—eliminating the communication gaps, timeline conflicts, and strategic misalignment that occur when businesses manage separate vendors.',
  },
  {
    category: 'Evaluation',
    q: 'How do I choose the right strategic consulting and marketing agency for my business?',
    a: 'Evaluate agencies on: (1) strategic consulting depth and industry expertise, (2) integrated execution capabilities across marketing and technology, (3) transparency in reporting, strategic rationale, and communication, (4) cultural fit and strategic alignment with your leadership team, (5) ability to measure and articulate business impact rather than vanity metrics, (6) flexibility to scale strategic engagement as your business evolves, and (7) evidence of strategic thinking in their own positioning and content.',
  },
  {
    category: 'Technology',
    q: 'What is MarTech stack integration and why does it matter strategically?',
    a: 'MarTech stack integration connects your marketing tools (CRM, email platform, ad platforms, analytics, CMS) so they share data automatically. It matters strategically because disconnected tools create data silos, inaccurate attribution, manual workarounds, and poor customer experiences. Integrated stacks enable accurate measurement, personalized marketing at scale, operational efficiency, and strategic decision-making based on unified customer intelligence.',
  },
  {
    category: 'Small Business',
    q: 'Can small businesses benefit from strategic consulting and custom software development?',
    a: 'Yes. Small businesses often face the most acute strategic constraints and benefit disproportionately from clear competitive positioning, efficient marketing operations, and technology that eliminates expensive SaaS subscriptions. Accord Marketers designs scalable strategic solutions and software that grow with small and medium businesses rather than requiring complete strategic rebuilds at each growth stage.',
  },
  {
    category: 'Search & AI',
    q: 'What is answer engine optimization (AEO) and how is it different from SEO?',
    a: 'AEO is the practice of structuring content so AI-powered answer engines (like ChatGPT, Google SGE/AI Overviews, and voice assistants) can easily extract, understand, and cite it. While SEO optimizes for traditional search result rankings, AEO focuses on clear definitions, structured formatting, direct question-answer patterns, and factual authority—making content more likely to appear in AI-generated summaries and featured snippets. Accord Marketers integrates both disciplines into unified search strategy.',
  },
  {
    category: 'Engagement & Cost',
    q: 'How long should I work with a strategic consulting and marketing agency before expecting results?',
    a: 'Strategic diagnostics and planning typically deliver actionable insights within 4–8 weeks. SEO and content marketing typically show meaningful results in 4–6 months. Paid advertising and software development can generate impact within weeks of launch. Integrated engagements often show early strategic wins in operational efficiency and tracking accuracy within the first 30–60 days. Accord Marketers establishes clear strategic milestone expectations during the diagnostic phase.',
  },
  {
    category: 'Industry',
    q: 'What industries benefit most from integrated strategic consulting, marketing, and software services?',
    a: 'While all industries benefit, the highest strategic impact is seen in: (1) Healthcare—requiring compliant software, patient acquisition strategy, and regulatory navigation, (2) Financial Services—needing secure platforms, trust-building content, and competitive differentiation in regulated markets, (3) E-Commerce—demanding conversion-optimized platforms, omnichannel strategy, and performance marketing, (4) Manufacturing and B2B—requiring dealer portals, technical lead generation, and digital transformation roadmaps, (5) Technology/SaaS—needing product-led growth strategy, scalable infrastructure, and monetization optimization, and (6) Professional Services—requiring thought leadership strategy, expertise-based positioning, and service productization.',
  },
]

export default function FAQHub({ onOpenDiagnostic }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [openIndex, setOpenIndex] = useState(0)
  const [filterCategory, setFilterCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', 'Agency Model', 'Engagement & Cost', 'Technology', 'Digital Transformation', 'Search & AI', 'Industry']

  const filteredFaqs = globalFaqs.filter((faq) => {
    const matchCategory = filterCategory === 'All' || faq.category === filterCategory
    const matchSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-ivory/60 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-mustard uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> AEO-Optimized Knowledge Hub
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-navy leading-tight"
          >
            Frequently Asked Questions About{' '}
            <span className="text-mustard">Strategic Consulting, Marketing &amp; Technology</span>
          </motion.h2>
          <p className="text-body/75 text-sm sm:text-base mt-2">
            Clear, authoritative answers on our integrated advisory and delivery model.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mb-10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-body/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search strategic questions (e.g. MarTech, diagnostic, costs, timeline)..."
              className="w-full pl-11 pr-4 py-3 bg-white rounded-2xl border border-border text-sm text-navy focus:outline-none focus:border-mustard shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilterCategory(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filterCategory === c
                    ? 'bg-navy text-white shadow-sm'
                    : 'bg-white text-navy/70 border border-border/70 hover:border-mustard'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-mustard/50 shadow-lg shadow-navy/5' : 'border-border/80 hover:border-border'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full px-6 py-5 sm:py-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-mustard bg-mustard/10 px-2.5 py-0.5 rounded-md inline-block mb-1.5">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-navy leading-snug">
                      {faq.q}
                    </h3>
                  </div>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors mt-1 ${
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
                      <div className="px-6 pb-6 text-xs sm:text-sm text-body/80 leading-relaxed border-t border-border/40 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Strategic Consultation Callout */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-7 border border-border/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-navy">Have a specific question not covered here?</h4>
            <p className="text-xs text-body/65 mt-0.5">Schedule a confidential strategic conversation with a partner.</p>
          </div>
          <button
            onClick={onOpenDiagnostic}
            className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-navy hover:bg-mustard text-white transition-colors cursor-pointer shrink-0"
          >
            Ask a Strategic Advisor
          </button>
        </div>
      </div>
    </section>
  )
}
