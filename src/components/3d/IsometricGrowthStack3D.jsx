import { useState } from 'react'
import { motion } from 'framer-motion'
import { Stethoscope, Cpu, GitMerge, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

export default function IsometricGrowthStack3D({ onOpenDiagnostic }) {
  const [activeLayer, setActiveLayer] = useState(0) // 0: All, 1: Strategy, 2: Marketing, 3: Tech
  const [isExploded, setIsExploded] = useState(false)

  const layers = [
    {
      id: 1,
      title: 'Pillar 1: Strategic Consulting',
      subtitle: 'Diagnoses Root Causes Before Prescribing Tactics',
      color: '#0F172A',
      accentColor: '#B38B00',
      badge: 'Base Foundation',
      icon: Stethoscope,
      description:
        'Business diagnostics, competitive intelligence, market opportunity analysis (TAM/SAM/SOM), and capability maturity assessments.',
      items: ['Growth Constraint Analysis', 'Defensible Positioning', 'C-Suite & Board Advisory'],
    },
    {
      id: 2,
      title: 'Pillar 2: Growth Marketing',
      subtitle: 'Engineered for P&L and Multi-Touch Revenue Impact',
      color: '#B7BBD9',
      accentColor: '#0F172A',
      badge: 'Execution Engine',
      icon: GitMerge,
      description:
        'AEO, SEO, high-intent SEM, behavioral email automation, content authority, and performance analytics linked to sales velocity.',
      items: ['P&L Aligned Campaign Spend', 'Answer Engine Optimization (AEO)', 'Full-Funnel Attribution'],
    },
    {
      id: 3,
      title: 'Pillar 3: Software & Technology',
      subtitle: 'Custom Platforms, MarTech Stack & Cloud Infrastructure',
      color: '#B38B00',
      accentColor: '#FFFFFF',
      badge: 'Scalability Infrastructure',
      icon: Cpu,
      description:
        'Custom web/mobile applications, CRM/ERP bidirectional synchronization, MarTech deduplication, and zero-latency data pipelines.',
      items: ['Custom React / Node / Python Apps', 'MarTech Stack Architecture', 'Server-Side Tracking & CDP'],
    },
  ]

  return (
    <div className="relative py-10">
      {/* 3D Exploded Layer Controller Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-[#B7BBD9]/30">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExploded(!isExploded)}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
              isExploded
                ? 'bg-[#B38B00] text-white shadow-lg shadow-[#B38B00]/25'
                : 'bg-white text-[#0F172A] border border-[#B7BBD9]/50 hover:border-[#B38B00]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isExploded ? 'Collapse 3D Stack' : 'Explode 3D Layers (Inspect)'}</span>
          </button>
          <span className="text-xs text-[#64748B] hidden sm:inline">
            Interactive isometric layer view
          </span>
        </div>

        <div className="flex items-center gap-2">
          {layers.map((l, idx) => (
            <button
              key={l.id}
              onClick={() => setActiveLayer(idx + 1)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                activeLayer === idx + 1
                  ? 'bg-[#0F172A] text-white'
                  : 'bg-white text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              Layer 0{l.id}
            </button>
          ))}
          <button
            onClick={() => setActiveLayer(0)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
              activeLayer === 0 ? 'bg-[#0F172A] text-white' : 'bg-white text-[#64748B]'
            }`}
          >
            Unified
          </button>
        </div>
      </div>

      {/* 3D Isometric Visualization Canvas Container */}
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        {/* Isometric 3D Exploded Representation */}
        <div
          onMouseEnter={() => setIsExploded(true)}
          onMouseLeave={() => setIsExploded(false)}
          className="lg:col-span-6 h-[420px] sm:h-[460px] perspective-1000 flex items-center justify-center relative cursor-pointer"
        >
          {/* Ambient Lighting Behind 3D Stack */}
          <div className="absolute w-72 h-72 bg-[#B7BBD9]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute w-48 h-48 bg-[#B38B00]/15 rounded-full blur-2xl pointer-events-none" />

          {/* 3D Isometric Container */}
          <div
            style={{
              transform: 'rotateX(58deg) rotateZ(-40deg)',
              transformStyle: 'preserve-3d',
            }}
            className="relative w-64 sm:w-80 h-64 sm:h-80 transition-transform duration-700 ease-out"
          >
            {/* Layer 1: Base Strategic Consulting */}
            <motion.div
              animate={{
                translateZ: isExploded ? 0 : 0,
                y: isExploded ? 0 : 0,
              }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              onClick={(e) => {
                e.stopPropagation()
                setActiveLayer(1)
              }}
              className={`absolute inset-0 rounded-3xl p-6 transition-all duration-300 border-2 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.5)] ${
                activeLayer === 1 || activeLayer === 0
                  ? 'bg-[#0F172A] text-white border-[#B38B00]'
                  : 'bg-[#0F172A]/70 text-white/50 border-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black tracking-widest text-[#B38B00] font-mono">
                  LAYER 01
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-white">
                  FOUNDATION
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-white">
                Strategic Consulting Engine
              </h4>
              <p className="text-[11px] text-[#B7BBD9] mt-1 leading-snug">
                P&amp;L Diagnostics • TAM/SAM/SOM • RevOps
              </p>
              <div className="absolute bottom-4 right-4 text-xs font-bold text-[#B38B00] flex items-center gap-1">
                <span>01</span>
                <div className="w-2 h-2 rounded-full bg-[#B38B00] animate-ping" />
              </div>
            </motion.div>

            {/* Layer 2: Growth Marketing Engine */}
            <motion.div
              animate={{
                translateZ: isExploded ? 80 : 35,
                y: isExploded ? -40 : -15,
              }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              onClick={(e) => {
                e.stopPropagation()
                setActiveLayer(2)
              }}
              className={`absolute inset-0 rounded-3xl p-6 transition-all duration-300 border-2 shadow-[0_30px_60px_-15px_rgba(183,187,217,0.4)] ${
                activeLayer === 2 || activeLayer === 0
                  ? 'bg-gradient-to-br from-[#B7BBD9] to-[#9CA3CF] text-[#0F172A] border-[#0F172A]'
                  : 'bg-[#B7BBD9]/60 text-[#0F172A]/50 border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black tracking-widest text-[#0F172A] font-mono">
                  LAYER 02
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0F172A]/10 text-[#0F172A]">
                  EXECUTION
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-[#0F172A]">
                Full-Funnel Growth Marketing
              </h4>
              <p className="text-[11px] text-[#0F172A]/80 mt-1 leading-snug">
                AEO &amp; SEO • Attribution • ABM
              </p>
              <div className="absolute bottom-4 right-4 text-xs font-bold text-[#0F172A] flex items-center gap-1">
                <span>02</span>
                <div className="w-2 h-2 rounded-full bg-[#0F172A] animate-pulse" />
              </div>
            </motion.div>

            {/* Layer 3: Custom Software & Technology */}
            <motion.div
              animate={{
                translateZ: isExploded ? 160 : 70,
                y: isExploded ? -80 : -30,
              }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              onClick={(e) => {
                e.stopPropagation()
                setActiveLayer(3)
              }}
              className={`absolute inset-0 rounded-3xl p-6 transition-all duration-300 border-2 shadow-[0_35px_70px_-15px_rgba(179,139,0,0.4)] ${
                activeLayer === 3 || activeLayer === 0
                  ? 'bg-gradient-to-br from-[#B38B00] to-[#8C6D00] text-white border-white'
                  : 'bg-[#B38B00]/70 text-white/50 border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black tracking-widest text-white font-mono">
                  LAYER 03
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black/20 text-white">
                  SCALABILITY
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-white">
                Software &amp; MarTech Stack
              </h4>
              <p className="text-[11px] text-white/85 mt-1 leading-snug">
                Custom Web/Mobile • CDP • 0ms Data Silos
              </p>
              <div className="absolute bottom-4 right-4 text-xs font-bold text-white flex items-center gap-1">
                <span>03</span>
                <div className="w-2 h-2 rounded-full bg-white animate-ping" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Detail Card Corresponding to 3D Layer */}
        <div className="lg:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-2 bg-[#B7BBD9]/30 text-[#0F172A] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#B38B00]" />
            <span>The Unified Advantage</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight">
            Three Layers Engineered to Operate as{' '}
            <span className="text-[#B38B00]">One Integrated System</span>
          </h3>

          <p className="text-sm text-[#334155] leading-relaxed">
            When management consulting, marketing campaigns, and software engineering share the same boardroom, recommendations survive contact with code. No misaligned vendors, no blame games, no fragmented customer data.
          </p>

          {/* Active Layer Details */}
          <div className="bg-white rounded-2xl p-6 border border-[#B7BBD9]/40 shadow-lg shadow-[#0F172A]/5">
            {layers.map((l, idx) => {
              const isVisible = activeLayer === 0 || activeLayer === idx + 1
              if (!isVisible) return null
              const Icon = l.icon
              return (
                <div key={l.id} className="py-2.5 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-[#0F172A] text-[#B38B00] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-[#0F172A]">{l.title}</h4>
                      <p className="text-xs text-[#64748B]">{l.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#334155] pl-11 leading-relaxed mb-3">
                    {l.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pl-11">
                    {l.items.map((it) => (
                      <span
                        key={it}
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0F172A] bg-[#F1F2E6] px-2.5 py-1 rounded-md"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#B38B00]" />
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenDiagnostic}
              className="group inline-flex items-center gap-2.5 bg-[#0F172A] hover:bg-[#B38B00] text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-[#B38B00]/25 cursor-pointer"
            >
              <span>Explore Strategic Architecture</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

