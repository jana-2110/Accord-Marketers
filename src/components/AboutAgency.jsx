import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Target, HeartHandshake, Zap, Award, Users, Code2, LineChart, Stethoscope, ArrowRight } from 'lucide-react'

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
    desc: 'We measure success by revenue growth, operational efficiency, competitive positioning, and strategic capability building—not vanity metrics checked off a list.',
  },
  {
    num: '04',
    title: 'Transparency & Strategic Partnership',
    desc: 'Clients have full visibility into project status, strategic rationale, performance data, and budget allocation. We operate as embedded strategic partners, not outsourced vendors.',
  },
  {
    num: '05',
    title: 'Continuous Learning & Strategic Evolution',
    desc: 'We invest continuously in emerging marketing technologies, development methodologies, and competitive intelligence to keep our partners ahead of market disruptions.',
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
    desc: 'In-house marketing leaders, performance marketers, content strategists, brand architects, and RevOps operations experts.',
    icon: LineChart,
  },
  {
    role: 'Software & Technology',
    desc: 'Full-stack web engineers, mobile developers, cloud architects, DevOps engineers, and MarTech integration specialists.',
    icon: Code2,
  },
  {
    role: 'Data & Business Intelligence',
    desc: 'Marketing data engineers, attribution specialists, multi-touch modeling analysts, and executive dashboard architects.',
    icon: Zap,
  },
  {
    role: 'Sector Specialists',
    desc: 'Domain veterans across healthcare, financial services, industrial manufacturing, retail e-commerce, and SaaS.',
    icon: Award,
  },
]

export default function AboutAgency({ onOpenDiagnostic }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-xs font-bold tracking-[0.2em] text-mustard uppercase mb-3"
          >
            Our Mission &amp; DNA
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy leading-tight mb-5"
          >
            Built to Bridge the Gap Between{' '}
            <span className="text-mustard">Strategy, Marketing, and Technology</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-body/80 leading-relaxed"
          >
            Accord Marketers was founded on a strategic observation: the most successful modern companies don’t treat consulting, marketing, and technology as separate functions. They treat them as one integrated growth engine.
          </motion.p>
        </div>

        {/* Mission Banner */}
        <div className="bg-ivory/60 rounded-3xl p-8 sm:p-12 border border-border/80 mb-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold tracking-widest uppercase text-mustard block mb-2">
                Our Primary Mission
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy leading-snug mb-3">
                Democratize Strategic Growth Consulting for Every Business Category
              </h3>
              <p className="text-sm sm:text-base text-body/80 leading-relaxed">
                We believe startups, SMEs, and enterprises alike deserve access to the same caliber of strategic consulting, integrated marketing, and development talent that powers the world’s most successful technology companies. Our mission is to make sophisticated, data-driven strategic growth accessible—regardless of industry, company size, or technical maturity.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-navy text-white p-6 sm:p-8 rounded-2xl text-center shadow-lg w-full max-w-xs">
                <span className="text-3xl sm:text-4xl font-black text-mustard block">100%</span>
                <span className="text-xs font-bold uppercase tracking-wider text-white/90 block mt-1">
                  Unified Command
                </span>
                <p className="text-[11px] text-white/60 mt-2 leading-relaxed">
                  Advisory, marketing, and code delivered under one strategic accountability framework.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Core Principles */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-mustard block mb-1">
              Guiding Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
              Strategy-First, Technology-Enabled, Results-Accountable
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {principles.map((p) => (
              <div
                key={p.num}
                className="bg-white p-6 rounded-2xl border border-border/80 hover:border-mustard/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xl font-black text-mustard/80 font-mono block mb-3">
                    {p.num}
                  </span>
                  <h4 className="text-sm font-bold text-navy leading-snug mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-body/70 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-Functional Talent */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-mustard block mb-1">
              Cross-Functional Team
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Integrated Talent Under One Growth Mission
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              When your strategic advisor, performance director, and chief technology architect sit in the same room, your growth strategy moves from slide deck to reality in days.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {teams.map((t) => {
              const Icon = t.icon
              return (
                <div key={t.role} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60">
                  <div className="w-10 h-10 rounded-xl bg-mustard/20 flex items-center justify-center text-mustard mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{t.role}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{t.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Ready to meet the strategic team dedicated to your account?
            </span>
            <button
              onClick={onOpenDiagnostic}
              className="bg-mustard hover:bg-mustard/90 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Book Strategic Discovery Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
