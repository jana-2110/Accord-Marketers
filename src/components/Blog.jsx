import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Calendar, Clock, X, Sparkles, BookOpen } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: '5 Performance Marketing Strategies Scaling Direct Brands Past 8-Figures in 2025',
    category: 'Paid Advertising',
    readTime: '6 min read',
    date: 'Oct 28, 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    summary: 'How leading brands combine first-party data capture, AI creative testing pipelines, and post-purchase retention loops to achieve sustainable 4x+ ROAS.',
    content: `Scaling beyond early traction requires a fundamental shift in how digital agencies deploy ad capital. In 2025, winning performance marketers don't simply tweak bidding algorithms—they control creative velocity and full-funnel retention.

1. Creative as the Ultimate Targeting Lever
With privacy updates obscuring granular interest targeting, your creative ad variants dictate who sees your offer. Dynamic video hooks and product comparison graphics self-select high-intent buyers.

2. First-Party Data & Server-Side Tracking
Relying on browser-side pixels leads to 25-35% untracked conversion data. Implementing robust Conversion API (CAPI) and server-side tracking restores attribution clarity and optimizes bidding engines.

3. The 70/20/10 Budget Rule
Allocate 70% of spend to evergreen proven winners, 20% to iterative variations (new hooks, sound tracks), and 10% to wild experimental creative angles.`,
  },
  {
    id: 2,
    title: 'Why Technical SEO & Site Architecture Drive the Highest LTV Organic Traffic',
    category: 'SEO & Search',
    readTime: '5 min read',
    date: 'Oct 15, 2025',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80',
    summary: 'Search algorithms reward speed, structured schema, and topical authority. Learn how to construct high-intent commercial pillar pages that rank and convert.',
    content: `Organic search remains the holy grail of sustainable customer acquisition. While ad costs rise continuously with platform competition, a well-architected SEO footprint compounds value every single month.

1. Topical Authority Clustering
Instead of disparate blog posts, structure your content in cohesive topic clusters linking back to primary commercial service pages. This signals true topical mastery to search engine crawlers.

2. Core Web Vitals & Sub-Second Loading
Google's ranking criteria strictly evaluate mobile page responsiveness. Fast-loading, clean-coded interfaces experience 60% lower bounce rates and significantly higher conversion velocity.

3. Commercial Intent Keyword Targeting
Shift away from vanity informational volume toward high-intent transactional search queries where searchers have purchase intent.`,
  },
  {
    id: 3,
    title: 'Designing High-Conversion Landing Pages That Turn Clicks Into Revenue',
    category: 'Conversion Optimization',
    readTime: '7 min read',
    date: 'Oct 02, 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    summary: 'The difference between 1.5% and 4.2% conversion rate comes down to cognitive friction, message-to-ad scent, and clear value proposition hierarchies.',
    content: `Driving paid traffic to a generic homepage is the fastest way to burn your marketing budget. High-performing campaigns depend on dedicated, conversion-engineered landing pages.

1. Message Scent Continuity
Ensure the exact promise made in your ad copy is repeated immediately above the fold on the destination page. Any cognitive disconnect causes immediate drop-off.

2. Social Proof Placed Above the Fold
Incorporate trust badges, real customer count (e.g. "5.5k+ Happy Clients"), and rating stars directly adjacent to primary CTA buttons.

3. Frictionless Form Architecture
Every additional form field reduces conversion rate by approximately 7%. Ask only for vital qualification details and collect deeper data downstream.`,
  },
]

export default function Blog({ onOpenContact }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <section id="blog" className="py-20 lg:py-28 bg-white relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block text-xs font-bold tracking-[0.2em] text-mustard uppercase mb-3"
            >
              Latest Insights
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy leading-tight"
            >
              Growth Playbooks & <span className="text-mustard">Digital Insights</span>.
            </motion.h2>
          </div>

          <motion.button
            onClick={onOpenContact}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="group inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-mustard transition-colors cursor-pointer shrink-0"
          >
            Subscribe to Growth Memo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              onClick={() => setSelectedPost(post)}
              className="group bg-white rounded-3xl overflow-hidden border border-border/70 hover:border-mustard/30 shadow-md shadow-navy/3 hover:shadow-xl hover:shadow-navy/8 transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
            >
              {/* Image Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-navy/10">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-navy/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-body/60 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-mustard" /> {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-body/50" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy group-hover:text-mustard transition-colors line-clamp-2 leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-body/70 text-sm line-clamp-3 leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-navy group-hover:text-mustard transition-colors flex items-center gap-1">
                    Read Full Article
                  </span>
                  <div className="w-8 h-8 rounded-full bg-ivory group-hover:bg-mustard group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-navy group-hover:text-white" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="fixed inset-0 bg-navy/70 backdrop-blur-md"
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
                onClick={() => setSelectedPost(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-body/60 hover:text-navy hover:bg-ivory transition-colors z-20"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-xs text-body/60 mb-2">
                    <span className="bg-mustard/15 text-mustard font-bold px-3 py-1 rounded-full uppercase text-[10px]">
                      {selectedPost.category}
                    </span>
                    <span>{selectedPost.date}</span>
                    <span>•</span>
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
                    {selectedPost.title}
                  </h2>
                </div>

                <div className="aspect-[16/8] rounded-2xl overflow-hidden bg-navy/10">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="prose text-body/80 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {selectedPost.content}
                </div>

                <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-navy uppercase tracking-wider">Ready to apply these playbooks?</p>
                    <p className="text-xs text-body/60">Schedule a free strategy audit with Accord Marketers.</p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedPost(null)
                      if (onOpenContact) onOpenContact()
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy hover:bg-mustard text-white px-7 py-3 rounded-full font-bold text-sm transition-all shadow-md cursor-pointer"
                  >
                    Get Free Strategy Session
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
