import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, BarChart3, Target, Zap, CheckCircle2, ShieldCheck } from 'lucide-react'

export default function Hero({ onOpenContact }) {
  return (
    <section id="home" className="relative pt-28 lg:pt-36 pb-20 lg:pb-28 overflow-hidden bg-ivory">
      {/* Subtle organic background decoration */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-lavender/25 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-mustard/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-7"
          >
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 border border-lavender/40 shadow-sm rounded-full px-4 py-2"
            >
              <span className="w-2.5 h-2.5 bg-mustard rounded-full animate-pulse" />
              <span className="text-xs font-bold text-navy tracking-wider uppercase">
                Digital Marketing Agency
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] font-extrabold text-navy leading-[1.12] tracking-tight"
            >
              We Market Brands.
              <br />
              You Grow{' '}
              <span className="relative inline-block">
                <span className="text-mustard">Business</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8 C50 2, 150 2, 198 8" stroke="#B38B00" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>
              .
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-lg text-body/80 max-w-lg leading-relaxed"
            >
              Smart strategies. Creative marketing. Measurable growth for your business.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <a
                href="#services"
                className="group inline-flex items-center gap-2 bg-navy text-white px-7 py-4 rounded-full font-bold text-sm hover:bg-mustard transition-all duration-300 hover:shadow-xl hover:shadow-mustard/20 hover:-translate-y-0.5"
              >
                Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 bg-white text-navy px-7 py-4 rounded-full font-bold text-sm border-2 border-navy/15 hover:border-mustard hover:text-mustard transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                See Our Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Micro Social Proof Under CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="pt-2 flex items-center gap-6 text-xs text-body/65"
            >
              <div className="flex items-center gap-1.5 font-semibold text-navy">
                <CheckCircle2 className="w-4 h-4 text-mustard" />
                <span>Zero Lock-in Contracts</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-navy">
                <ShieldCheck className="w-4 h-4 text-mustard" />
                <span>Verified ROI Tracking</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual: Polished Marketing Tech Command Center */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6 relative pt-4 pb-8"
          >
            {/* Background Lavender Shape */}
            <div className="absolute inset-2 bg-lavender/30 rounded-3xl -rotate-2 scale-98 pointer-events-none" />

            {/* Modern Laptop / Monitor Chassis */}
            <div className="relative bg-slate-900 rounded-3xl p-3 sm:p-4 shadow-2xl shadow-navy/20 border border-slate-800">
              {/* Laptop Screen Bezel Top Bar */}
              <div className="flex items-center justify-between px-3 py-1.5 mb-2 bg-slate-950/80 rounded-t-xl text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-slate-300 font-mono text-[10px] ml-2">accord-analytics-live.internal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-emerald-400 font-bold text-[10px] uppercase">Syncing Live</span>
                </div>
              </div>

              {/* Inside Dashboard Content Screen */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-border/70">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-bold text-mustard uppercase tracking-widest block">Performance Engine</span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-navy">Business Growth Hub</h3>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +42.5% MoM
                  </div>
                </div>

                {/* Growth Chart Area */}
                <div className="bg-ivory/80 rounded-xl p-3.5 mb-4 border border-border/40">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-body/60 mb-2">
                    <span>Revenue Velocity</span>
                    <span className="text-navy font-bold">Q4 Campaign Run</span>
                  </div>
                  <svg viewBox="0 0 400 110" className="w-full h-auto overflow-visible">
                    <defs>
                      <linearGradient id="chartGradient2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#B38B00" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#B38B00" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Grid Lines */}
                    <line x1="0" y1="25" x2="400" y2="25" stroke="#E5E7EB" strokeWidth="0.7" strokeDasharray="3 3" />
                    <line x1="0" y1="55" x2="400" y2="55" stroke="#E5E7EB" strokeWidth="0.7" strokeDasharray="3 3" />
                    <line x1="0" y1="85" x2="400" y2="85" stroke="#E5E7EB" strokeWidth="0.7" strokeDasharray="3 3" />

                    {/* Chart Gradient Area */}
                    <path
                      d="M0,90 C40,84 80,78 120,68 C160,58 200,48 240,32 C280,22 320,15 360,10 L400,6 L400,110 L0,110 Z"
                      fill="url(#chartGradient2)"
                    />
                    {/* Chart Curve */}
                    <path
                      d="M0,90 C40,84 80,78 120,68 C160,58 200,48 240,32 C280,22 320,15 360,10 L400,6"
                      fill="none"
                      stroke="#B38B00"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {/* Interactive Milestone Nodes */}
                    <circle cx="120" cy="68" r="4.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="2" />
                    <circle cx="240" cy="32" r="4.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="2" />
                    <circle cx="360" cy="10" r="5" fill="#B38B00" stroke="#FFFFFF" strokeWidth="2.5" />
                  </svg>
                </div>

                {/* Stats 3-Column Row */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="bg-navy/5 rounded-xl p-2.5 sm:p-3 text-center border border-navy/5">
                    <p className="text-[10px] font-bold text-body/60 uppercase">Leads</p>
                    <p className="text-base sm:text-lg font-extrabold text-navy">2,480</p>
                  </div>
                  <div className="bg-mustard/10 rounded-xl p-2.5 sm:p-3 text-center border border-mustard/15">
                    <p className="text-[10px] font-bold text-mustard uppercase">Conversion</p>
                    <p className="text-base sm:text-lg font-extrabold text-mustard">89.4%</p>
                  </div>
                  <div className="bg-lavender/30 rounded-xl p-2.5 sm:p-3 text-center border border-lavender/40">
                    <p className="text-[10px] font-bold text-navy/70 uppercase">Blended ROAS</p>
                    <p className="text-base sm:text-lg font-extrabold text-navy">5.2x</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Elevated Floating Badge: Top Right */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
              className="absolute -top-3 right-2 sm:-right-4 bg-white rounded-2xl shadow-xl shadow-navy/10 border border-border/70 p-3.5 flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 bg-mustard/15 rounded-xl flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-mustard" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-body/60 uppercase tracking-wider">Avg Ad Spend ROI</p>
                <p className="text-sm sm:text-base font-extrabold text-navy">300%+ ROAS</p>
              </div>
            </motion.div>

            {/* Elevated Floating Badge: Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.0, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-3 left-2 sm:-left-4 bg-white rounded-2xl shadow-xl shadow-navy/10 border border-border/70 p-3.5 flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-navy" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-body/60 uppercase tracking-wider">Proven Track Record</p>
                <p className="text-sm sm:text-base font-extrabold text-navy">5.5k+ Happy Clients</p>
              </div>
            </motion.div>

            {/* Ambient Floating Micro-Icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="hidden sm:flex absolute -right-6 top-1/2 w-11 h-11 bg-lavender/40 rounded-full items-center justify-center shadow-md backdrop-blur-sm pointer-events-none"
            >
              <BarChart3 className="w-5 h-5 text-navy" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
