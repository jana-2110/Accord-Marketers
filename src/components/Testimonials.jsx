import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Dr. Sneha Iyer',
    role: 'Founder & CEO',
    company: 'Aathulyam Wellness',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    content: 'Accord Marketers completely transformed our direct-to-consumer acquisition. Their systematic ad testing and CRO work delivered a 4.8x ROAS within 90 days. They don’t just run campaigns—they understand unit economics.',
    highlight: '4.8x ROAS Delivered',
  },
  {
    name: 'Vikramaditya Rao',
    role: 'VP of Growth',
    company: 'Raisein Technologies',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'The web platform and conversion funnel Accord built for us increased inbound demo bookings by 210%. Clean code, lightning-fast load times, and a UX design that enterprise decision-makers genuinely respect.',
    highlight: '+210% Inbound Demos',
  },
  {
    name: 'Rajesh Singhania',
    role: 'Managing Director',
    company: 'SJ Logistics India',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    content: 'We were skeptical about B2B logistics marketing until Accord proved the ROI with over 550 qualified freight inquiries monthly. Easily the most transparent and accountable agency partner in India.',
    highlight: '550+ Monthly B2B Inquiries',
  },
  {
    name: 'David Miller',
    role: 'Managing Partner',
    company: 'Blue Line Plumbing',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    content: 'Our phone lines haven’t stopped ringing since Accord optimized our Google Local Service Ads and regional SEO. We went from struggling for emergency jobs to fully booked two weeks in advance.',
    highlight: '+185% Call Volume',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => setCurrentIndex((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1))
  const next = () => setCurrentIndex((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1))

  return (
    <section className="py-20 lg:py-28 bg-ivory relative overflow-hidden" ref={ref}>
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-lavender/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block text-xs font-bold tracking-[0.2em] text-mustard uppercase mb-3"
            >
              Client Feedback
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy leading-tight"
            >
              Trusted by Founders &{' '}
              <span className="text-mustard">Growth Leaders</span>.
            </motion.h2>
          </div>

          {/* Nav Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-border/80 bg-white hover:bg-mustard hover:border-mustard hover:text-white text-navy flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-border/80 bg-white hover:bg-mustard hover:border-mustard hover:text-white text-navy flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl p-8 sm:p-9 border border-border/60 shadow-lg shadow-navy/3 hover:shadow-xl hover:border-mustard/30 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Row: Stars & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-mustard">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-mustard text-mustard" />
                    ))}
                  </div>
                  <span className="bg-mustard/15 text-mustard text-xs font-bold px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>

                {/* Content */}
                <p className="text-body/80 text-sm sm:text-base leading-relaxed mb-8 italic">
                  "{item.content}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-lavender/40"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-navy group-hover:text-mustard transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-body/60 font-medium">
                    {item.role}, <span className="text-navy font-semibold">{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
