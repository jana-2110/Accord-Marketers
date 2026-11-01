import { motion } from 'framer-motion'
import { ArrowRight, Compass, Layers, Code2, TrendingUp, ShieldCheck, CheckCircle2, Cpu, BarChart3 } from 'lucide-react'

export default function Hero({ onOpenDiagnostic }) {
  return (
    <section id="home" className="relative pt-28 lg:pt-36 pb-20 lg:pb-28 overflow-hidden bg-ivory">
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-lavender/25 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-mustard/10 rounded-full blur-3xl -z-10 pointer-events-none" />

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
              className="inline-flex items-center gap-2.5 bg-white/90 border border-lavender/50 shadow-sm rounded-full px-4 py-1.5"
            >
              <span className="w-2.5 h-2.5 bg-mustard rounded-full animate-pulse" />
              <span className="text-[11px] font-extrabold text-navy tracking-wider uppercase">
                Strategic Consulting • Marketing • Software Development
              </span>
            </motion.div>

            {/* Main Headline (H1) */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-[3.35rem] xl:text-[3.65rem] font-extrabold text-navy leading-[1.12] tracking-tight"
            >
              Strategic Consulting Meets Marketing &amp; Technology for Businesses That{' '}
              <span className="relative inline-block">
                <span className="text-mustard">Demand Transformation</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8 C70 2, 230 2, 298 8" stroke="#B38B00" strokeWidth="4" strokeLinecap="round" opacity="0.65" />
                </svg>
              </span>
              .
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-body/80 max-w-2xl leading-relaxed font-normal"
            >
              We don’t just execute campaigns or build software—we diagnose your growth constraints, architect integrated strategies, and deliver measurable business outcomes. From boardroom advisory to code deployment, Accord Marketers operates as your strategic growth partner.
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
                className="group inline-flex items-center gap-2.5 bg-navy text-white px-7 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-mustard transition-all duration-300 hover:shadow-xl hover:shadow-mustard/20 hover:-translate-y-0.5 cursor-pointer"
              >
                Schedule a Strategic Diagnostic
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#consulting"
                className="group inline-flex items-center gap-2 bg-white text-navy px-7 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider border-2 border-navy/15 hover:border-mustard hover:text-mustard transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                Explore Consulting Frameworks
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Core Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-body/70 border-t border-border/70"
            >
              <div className="flex items-center gap-1.5 font-bold text-navy">
                <ShieldCheck className="w-4 h-4 text-mustard" />
                <span>Diagnostic-First Methodology</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-navy">
                <CheckCircle2 className="w-4 h-4 text-mustard" />
                <span>Zero Strategy-to-Execution Gap</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-navy">
                <Cpu className="w-4 h-4 text-mustard" />
                <span>In-House Engineering &amp; MarTech</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual: Strategic Command Center & Diagnostic Scorecard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Background shape */}
            <div className="absolute inset-2 bg-lavender/35 rounded-3xl -rotate-2 scale-98 pointer-events-none" />

            {/* Executive Console Card */}
            <div className="relative bg-slate-900 rounded-3xl p-4 sm:p-5 shadow-2xl shadow-navy/20 border border-slate-800 text-white">
              {/* Header Tab Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-slate-400 font-mono text-[11px] ml-2 font-semibold">accord.diagnostic.os</span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full text-[10px] font-bold border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  UNIFIED ARCHITECTURE
                </div>
              </div>

              {/* Console Body: 3 Pillars In Action */}
              <div className="space-y-3.5">
                {/* 1. Diagnostic Index */}
                <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/60">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-mustard/20 flex items-center justify-center text-mustard">
                        <Compass className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                        Strategic Diagnostic
                      </span>
                    </div>
                    <span className="text-xs font-black text-mustard">94.8% Score</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div className="bg-mustard h-full rounded-full w-[94.8%]" />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-2">
                    Root-cause analysis completed across customer acquisition, retention, and RevOps.
                  </p>
                </div>

                {/* 2. Marketing Engine */}
                <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/60">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400">
                        <Layers className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                        Growth Marketing
                      </span>
                    </div>
                    <span className="text-xs font-black text-sky-400">+312% Pipeline</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-300">
                    <span className="px-2 py-0.5 rounded bg-slate-900 font-mono text-[10px]">AEO / SEO</span>
                    <span className="px-2 py-0.5 rounded bg-slate-900 font-mono text-[10px]">SEM &amp; Paid</span>
                    <span className="px-2 py-0.5 rounded bg-slate-900 font-mono text-[10px]">CRM Auto</span>
                  </div>
                </div>

                {/* 3. Software & MarTech Stack */}
                <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/60">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                        Software &amp; MarTech Stack
                      </span>
                    </div>
                    <span className="text-xs font-black text-emerald-400">0ms Silos</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-300">
                    <span className="px-2 py-0.5 rounded bg-slate-900 font-mono text-[10px]">Custom Apps</span>
                    <span className="px-2 py-0.5 rounded bg-slate-900 font-mono text-[10px]">CDP &amp; API</span>
                    <span className="px-2 py-0.5 rounded bg-slate-900 font-mono text-[10px]">Server Tracking</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Results Bar */}
              <div className="grid grid-cols-2 gap-2.5 mt-3.5 pt-3 border-t border-slate-800">
                <div className="bg-slate-950/60 rounded-xl p-2.5 text-center">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Deployment Speed</span>
                  <span className="text-base font-extrabold text-mustard">47% Faster</span>
                </div>
                <div className="bg-slate-950/60 rounded-xl p-2.5 text-center">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Lead Quality</span>
                  <span className="text-base font-extrabold text-white">3.2x Higher</span>
                </div>
              </div>
            </div>

            {/* Floating Live Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-4 -left-4 sm:-left-6 bg-white text-navy p-3.5 rounded-2xl shadow-xl border border-border flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-mustard/15 flex items-center justify-center text-mustard shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-body/60 uppercase tracking-wider">Marketing ROI</p>
                <p className="text-sm font-black text-navy">2.5x Improvement</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
