import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight, X, CheckCircle, TrendingUp, Sparkles } from 'lucide-react'

const projects = [
  {
    id: 'aathulyam',
    title: 'Aathulyam Wellness',
    tagline: 'Holistic Wellness Brand Scaled via Meta & Google Ads',
    category: 'Digital Marketing',
    categoryTag: 'Marketing Strategy',
    year: '2024',
    image: 'https://accordmarketers.com/wp-content/uploads/2025/07/Marketing.webp',
    results: [
      { label: 'ROAS', value: '4.8x' },
      { label: 'Monthly Sales', value: '+340%' },
      { label: 'CAC Reduction', value: '-38%' },
    ],
    overview: 'Aathulyam Wellness needed to break through a crowded direct-to-consumer Ayurvedic wellness space and scale customer acquisition while maintaining profitability.',
    solution: 'Engineered a full-funnel paid social and search engine strategy backed by conversion-rate optimized landing pages and targeted micro-influencer creative assets.',
    servicesUsed: ['Meta Performance Ads', 'Google Shopping Ads', 'Conversion Rate Optimization', 'Email Retention'],
  },
  {
    id: 'raisein',
    title: 'Raisein Technologies',
    tagline: 'High-Performance SaaS Platform & Conversion UI/UX',
    category: 'Web Development',
    categoryTag: 'UI/UX Design',
    year: '2024',
    image: 'https://accordmarketers.com/wp-content/uploads/2025/07/Web-Design.webp',
    results: [
      { label: 'Demo Bookings', value: '+210%' },
      { label: 'Page Speed', value: '98/100' },
      { label: 'Bounce Rate', value: '-42%' },
    ],
    overview: 'Raisein Technologies required a cutting-edge web platform to showcase their enterprise enterprise tech solutions and convert enterprise decision-makers.',
    solution: 'Designed and developed a blazing-fast responsive web application with interactive product calculators, sleek micro-interactions, and direct HubSpot CRM integration.',
    servicesUsed: ['React Frontend', 'UI/UX Design System', 'SEO Architecture', 'Technical Copywriting'],
  },
  {
    id: 'sj-logistics',
    title: 'SJ Logistics India',
    tagline: 'National Freight & Supply Chain B2B Lead Engine',
    category: 'Digital Marketing',
    categoryTag: 'B2B Lead Gen',
    year: '2023',
    image: 'https://accordmarketers.com/wp-content/uploads/2025/07/project.webp',
    results: [
      { label: 'Inbound Inquiries', value: '550+/mo' },
      { label: 'Deal Pipeline', value: '₹4.2 Cr' },
      { label: 'Cost Per Lead', value: '-52%' },
    ],
    overview: 'SJ Logistics sought to transition from traditional relationship-based sales to an automated, high-velocity inbound B2B lead generation infrastructure.',
    solution: 'Launched hyper-targeted LinkedIn and Google Search campaigns targeting supply chain managers, complemented by downloadable industry freight cost benchmark whitepapers.',
    servicesUsed: ['Google Search Ads', 'LinkedIn B2B Advertising', 'B2B Landing Pages', 'Lead Qualification Automation'],
  },
  {
    id: 'blue-line',
    title: 'Blue Line Plumbing',
    tagline: 'Dominant Local Search Visibility & Emergency Call Funnels',
    category: 'Branding & Strategy',
    categoryTag: 'Local SEO & Ads',
    year: '2023',
    image: 'https://accordmarketers.com/wp-content/uploads/2025/07/work-1-1024x683.jpg',
    results: [
      { label: 'Call Volume', value: '+185%' },
      { label: 'Local Map Pack', value: '#1 Rank' },
      { label: 'Customer Reviews', value: '4.9 ★ (320+)' },
    ],
    overview: 'Blue Line Plumbing wanted to dominate their regional market for high-margin residential and commercial emergency plumbing calls.',
    solution: 'Structured hyper-local Google Local Services Ads, optimized Google Business Profile for map-pack dominance, and instituted automated SMS review generation.',
    servicesUsed: ['Google Local Services Ads', 'Local SEO & Map Pack', 'Call Tracking Integration', 'Brand Identity Assets'],
  },
]

const categories = ['All Projects', 'Digital Marketing', 'Web Development', 'Branding & Strategy']

export default function Portfolio({ onOpenContact }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState('All Projects')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = activeCategory === 'All Projects'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block text-xs font-bold tracking-[0.2em] text-mustard uppercase mb-3"
            >
              Our Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy leading-tight"
            >
              Work That Speaks for <span className="text-mustard">Itself</span>.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-mustard transition-colors cursor-pointer"
            >
              Request Case Study Deck
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10 pb-2"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-navy text-white shadow-md shadow-navy/15'
                    : 'bg-ivory text-body/75 hover:bg-lavender/30 hover:text-navy'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer bg-navy shadow-lg shadow-navy/5 hover:shadow-2xl hover:shadow-navy/15 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.categoryTag} by Accord Marketing`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading={i > 1 ? 'lazy' : undefined}
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block bg-white/15 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                      {project.categoryTag}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 z-10">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <span className="text-xs font-semibold text-mustard tracking-wide block mb-1">
                          {project.year} • Client Case Study
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-mustard transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/70 line-clamp-1 mt-1">
                          {project.tagline}
                        </p>
                      </div>

                      <div className="w-11 h-11 bg-white/10 group-hover:bg-mustard backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 shrink-0">
                        <ArrowUpRight className="w-5 h-5 text-white group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-navy/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-border/80 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header Bar */}
              <div className="h-2 bg-gradient-to-r from-navy via-mustard to-navy shrink-0" />

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-body/60 hover:text-navy hover:bg-ivory transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-mustard/15 px-3 py-1 rounded-full text-xs font-bold text-mustard uppercase mb-2">
                    <Sparkles className="w-3 h-3" /> Case Study
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm font-medium text-body/70 mt-1">
                    {selectedProject.tagline}
                  </p>
                </div>

                {/* Cover Image */}
                <div className="rounded-2xl overflow-hidden aspect-[16/8] bg-navy">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Key Metrics Ribbon */}
                <div className="grid grid-cols-3 gap-3 bg-ivory/80 rounded-2xl p-4 border border-border/60">
                  {selectedProject.results.map((r) => (
                    <div key={r.label} className="text-center">
                      <p className="text-xl sm:text-2xl font-black text-mustard">{r.value}</p>
                      <p className="text-[11px] font-bold text-navy/70 uppercase tracking-wider">{r.label}</p>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution */}
                <div className="grid sm:grid-cols-2 gap-6 pt-2">
                  <div className="bg-white p-5 rounded-2xl border border-border/70 shadow-sm">
                    <h4 className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-2">The Challenge</h4>
                    <p className="text-xs sm:text-sm text-body/80 leading-relaxed">{selectedProject.overview}</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-border/70 shadow-sm">
                    <h4 className="text-xs font-bold tracking-wider uppercase text-mustard mb-2">The Accord Strategy</h4>
                    <p className="text-xs sm:text-sm text-body/80 leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Services Used */}
                <div>
                  <h4 className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-2.5">
                    Services Delivered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.servicesUsed.map((s) => (
                      <span
                        key={s}
                        className="bg-navy/5 text-navy text-xs font-semibold px-3 py-1.5 rounded-lg border border-navy/10 flex items-center gap-1.5"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-mustard" />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-body/60">
                    Want similar ROI for your business?
                  </p>
                  <button
                    onClick={() => {
                      setSelectedProject(null)
                      if (onOpenContact) onOpenContact()
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy hover:bg-mustard text-white px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Start Similar Project
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
