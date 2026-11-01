import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Users, FolderOpen, TrendingUp, Clock } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: 5500,
    suffix: '+',
    label: 'Happy Clients',
    prefix: '',
  },
  {
    icon: FolderOpen,
    value: 2000,
    suffix: '+',
    label: 'Projects Delivered',
    prefix: '',
  },
  {
    icon: TrendingUp,
    value: 300,
    suffix: '%+',
    label: 'Average ROAS',
    prefix: '',
  },
  {
    icon: Clock,
    value: 10,
    suffix: '+',
    label: 'Years of Experience',
    prefix: '',
  },
]

function AnimatedCounter({ target, suffix, prefix, isInView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime
    const duration = 2000

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, target])

  const displayValue = target >= 1000
    ? (count / 1000).toFixed(count >= target ? 1 : 1).replace(/\.0$/, '') + 'k'
    : count.toString()

  return (
    <span>
      {prefix}{target >= 1000 ? displayValue : count}{suffix}
    </span>
  )
}

export default function Statistics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-16 lg:py-20 bg-navy relative overflow-hidden" ref={ref}>
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-lavender/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-mustard/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-mustard/40 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-mustard" strokeWidth={1.5} />
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold text-white mb-2 tracking-tight">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    isInView={isInView}
                  />
                </div>
                <p className="text-sm text-lavender font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
