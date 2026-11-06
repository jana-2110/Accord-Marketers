import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Zap, Award, Code2, LineChart, ArrowRight, ShieldCheck, History, Sparkles } from 'lucide-react'
import Interactive3DCard from './3d/Interactive3DCard'

const principles = [
  {
    num: '01',
    title: 'Strategic Diagnosis Before Tactical Execution',
    desc: 'We begin every engagement with business diagnostics, competitive intelligence, and strategic opportunity assessment—ensuring every recommendation addresses root causes, not symptoms.',
  },
  {
    num: '02',
    title: 'Integration by Design',
    desc: 'Every project is planned as a unified strategic system, not isolated deliverables. Strategy, marketing, and technology are architected to reinforce each other from day one.',
  },
  {
    num: '03',
    title: 'Business Outcome Accountability',
    desc: 'We measure success by revenue growth, operational efficiency, competitive positioning, and strategic capability building—not deliverables checked off a list.',
  },
  {
    num: '04',
    title: 'Transparency & Strategic Partnership',
    desc: 'Clients have full visibility into project status, strategic rationale, performance data, and budget allocation. We operate as strategic partners, not vendors.',
  },
  {
    num: '05',
    title: 'Continuous Learning & Strategic Evolution',
    desc: 'We invest in emerging marketing technologies, development methodologies, competitive intelligence capabilities, and industry expertise to keep clients ahead of market shifts.',
  },
]

const teams = [
  {
    role: 'Strategic Consulting',
    desc: 'Former management consultants, in-house strategy leaders, competitive intelligence analysts, and digital transformation specialists.',
    icon: Target,
  },
  {
    role: 'Strategic Marketing',
    desc: 'Former in-house marketing leaders, performance marketers, content strategists, brand architects, and marketing operations experts.',
    icon: LineChart,
  },
  {
    role: 'Software Engineering & Technology Strategy',
    desc: 'Full-stack developers, mobile engineers, cloud architects, DevOps specialists, and technology strategists.',
    icon: Code2,
  },
  {
    role: 'Data, Analytics & Business Intelligence',
    desc: 'Marketing analysts, data engineers, attribution specialists, and business intelligence consultants.',
    icon: Zap,
  },
  {
    role: 'Industry Specialists',
    desc: 'Domain experts in healthcare, finance, manufacturing, retail, technology, and professional services with deep strategic and operational knowledge.',
    icon: Award,
  },
]

const brandPersonality = [
  { label: 'SIMPLE', desc: 'Clarity and precision in communication and architectures.' },
  { label: 'MODERN', desc: 'Forward-looking technologies and methodologies.' },
  { label: 'INNOVATIVE', desc: 'Creative, data-backed solutions to complex growth bottlenecks.' },
  { label: 'EXCLUSIVE', desc: 'High-caliber, deeply dedicated strategic partnership.' },
]

export default function AboutAgency({ onOpenDiagnostic }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0F172A] text-white relative overflow-hidden" ref={ref}>
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B38B00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#B7BBD9]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-[#B38B00]/20 text-[#B38B00] border border-[#B38B00]/30 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Firm Profile &amp; Philosophy</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-5"
          >
            A Strategic Growth Firm Built to{' '}
            <span className="text-[#B38B00]">Bridge the Divide</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#B7BBD9] leading-relaxed"
          >
            Accord Marketers was founded on a simple observation: businesses were losing millions in the gap between the strategy recommended by management consultants and the tactical execution delivered by marketing agencies and software vendors.
          </motion.p>
        </div>

        {/* 5 Operating Principles in 3D Cards */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-8 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B38B00]" />
            <span>Our 5 Strategic Operating Principles</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                className="h-full"
              >
                <Interactive3DCard
                  glowColor="rgba(179, 139, 0, 0.2)"
                  className="h-full bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-[#B38B00]/70 hover:bg-white/[0.08] transition-all flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <span className="text-3xl font-black text-[#B38B00] font-mono block mb-4">
                      {p.num}
                    </span>
                    <h4 className="text-base font-extrabold text-white mb-3 group-hover:text-[#B38B00] transition-colors leading-snug">
                      {p.title}
                    </h4>
                    <p className="text-xs text-[#F1F2E6]/75 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                </Interactive3DCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Multidisciplinary Team Structure */}
        <div className="bg-black/30 rounded-3xl p-8 sm:p-12 border border-[#B7BBD9]/20 mb-16">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B38B00] block mb-2">
              Cross-Functional Talent Model
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Consultants, Marketers, and Engineers Operating as One
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((t) => {
              const Icon = t.icon
              return (
                <div key={t.role} className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-[#B38B00]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#B38B00] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-extrabold text-white mb-2">{t.role}</h4>
                  <p className="text-xs text-[#F1F2E6]/75 leading-relaxed">{t.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Brand Personality Pillars */}
        <div className="border-t border-white/10 pt-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B7BBD9] block text-center mb-6">
            Core Agency Identity Pillars
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {brandPersonality.map((b) => (
              <div key={b.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-[#B38B00]/50 transition-colors">
                <span className="text-sm font-black text-[#B38B00] tracking-widest block mb-1">
                  {b.label}
                </span>
                <span className="text-[11px] text-[#F1F2E6]/70 leading-relaxed block">
                  {b.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
