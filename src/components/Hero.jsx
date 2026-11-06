import { motion } from 'framer-motion'
import { ArrowRight, Compass, ShieldCheck, CheckCircle2, Cpu, Sparkles } from 'lucide-react'
import HeroScene3D from './3d/HeroScene3D'

export default function Hero({ onOpenDiagnostic }) {
  return (
    <section id="home" className="relative pt-28 lg:pt-36 pb-20 lg:pb-28 overflow-hidden bg-[#F1F2E6]">
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-0 w-[620px] h-[620px] bg-[#B7BBD9]/25 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[480px] h-[480px] bg-[#B38B00]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Small Strategic Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2.5 bg-white border border-[#B7BBD9]/50 shadow-xs rounded-full px-4 py-1.5"
            >
              <span className="w-2.5 h-2.5 bg-[#B38B00] rounded-full animate-pulse" />
              <span className="text-[11px] font-extrabold text-[#0F172A] tracking-wider uppercase">
                Strategic Consulting • Marketing • Software Development
              </span>
            </motion.div>

            {/* Main Headline (H1) */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-[3.35rem] xl:text-[3.65rem] font-extrabold text-[#0F172A] leading-[1.12] tracking-tight"
            >
              Strategic Consulting Meets Marketing &amp; Technology for Businesses That{' '}
              <span className="relative inline-block text-[#B38B00]">
                Demand Transformation
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8 C70 2, 230 2, 298 8" stroke="#B38B00" strokeWidth="4" strokeLinecap="round" opacity="0.75" />
                </svg>
              </span>
              .
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-[#334155] max-w-2xl leading-relaxed font-normal"
            >
              We don't just execute campaigns or build software—we diagnose your growth constraints, architect integrated strategies, and deliver measurable business outcomes. From boardroom advisory to code deployment, Accord Marketers operates as your strategic growth partner.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <button
                onClick={onOpenDiagnostic}
                className="group inline-flex items-center gap-2.5 bg-[#0F172A] hover:bg-[#B38B00] text-white px-7 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-[#B38B00]/25 hover:-translate-y-0.5 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#B38B00] group-hover:text-white transition-colors" />
                <span>Schedule a Strategic Diagnostic</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#consulting"
                className="group inline-flex items-center gap-2 bg-white text-[#0F172A] px-7 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider border-2 border-[#0F172A]/20 hover:border-[#B38B00] hover:text-[#B38B00] transition-all duration-300 hover:-translate-y-0.5 shadow-xs"
              >
                <span>Explore Our Frameworks</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Core Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#334155] border-t border-[#B7BBD9]/40"
            >
              <div className="flex items-center gap-1.5 font-bold text-[#0F172A]">
                <ShieldCheck className="w-4 h-4 text-[#B38B00]" />
                <span>Diagnostic-First Methodology</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-[#0F172A]">
                <CheckCircle2 className="w-4 h-4 text-[#B38B00]" />
                <span>Zero Strategy-to-Execution Gap</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-[#0F172A]">
                <Cpu className="w-4 h-4 text-[#B38B00]" />
                <span>In-House Engineering &amp; MarTech</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual: 3D Interactive Strategic Console Scene */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <HeroScene3D onOpenDiagnostic={onOpenDiagnostic} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
