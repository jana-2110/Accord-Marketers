import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Compass, TrendingUp, Cpu, Layers, ShieldCheck, Zap } from 'lucide-react'

export default function HeroScene3D({ onOpenDiagnostic }) {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  // Motion values for smooth 3D tilt tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for butter-smooth 3D movement
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 })

  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-14, 14])

  const shineX = useTransform(springX, [-0.5, 0.5], ['0%', '100%'])
  const shineY = useTransform(springY, [-0.5, 0.5], ['0%', '100%'])

  // Interactive Particle Canvas in 3D perspective
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = canvas.parentElement.offsetWidth)
    let height = (canvas.height = canvas.parentElement.offsetHeight)

    const handleResize = () => {
      if (!canvas.parentElement) return
      width = canvas.width = canvas.parentElement.offsetWidth
      height = canvas.height = canvas.parentElement.offsetHeight
    }
    window.addEventListener('resize', handleResize)

    // 3D Nodes representing Strategic Growth Ecosystem
    const nodes = []
    const nodeCount = 38
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * width * 0.85,
        y: (Math.random() - 0.5) * height * 0.85,
        z: Math.random() * 300 - 150,
        radius: Math.random() * 2.5 + 1.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.3,
        color: i % 3 === 0 ? '#B38B00' : i % 3 === 1 ? '#B7BBD9' : '#FFFFFF',
      })
    }

    let angleY = 0
    let angleX = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Center of 3D projection
      const cx = width / 2
      const cy = height / 2
      const fov = 380

      angleY += 0.003
      angleX = Math.sin(angleY * 0.5) * 0.1

      const cosY = Math.cos(angleY)
      const sinY = Math.sin(angleY)
      const cosX = Math.cos(angleX)
      const sinX = Math.sin(angleX)

      // Transform & Project Nodes
      const projected = nodes.map((n) => {
        n.x += n.vx
        n.y += n.vy
        n.z += n.vz

        const boundary = 180
        if (Math.abs(n.x) > width * 0.45) n.vx *= -1
        if (Math.abs(n.y) > height * 0.45) n.vy *= -1
        if (Math.abs(n.z) > boundary) n.vz *= -1

        // 3D rotation matrix
        let x1 = n.x * cosY - n.z * sinY
        let z1 = n.z * cosY + n.x * sinY

        let y1 = n.y * cosX - z1 * sinX
        let z2 = z1 * cosX + n.y * sinX

        const scale = fov / (fov + z2 + 200)
        return {
          px: cx + x1 * scale,
          py: cy + y1 * scale,
          scale,
          z: z2,
          color: n.color,
          radius: n.radius * scale,
        }
      })

      // Sort by depth
      projected.sort((a, b) => b.z - a.z)

      // Draw 3D Connecting Lines
      ctx.lineWidth = 0.7
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px
          const dy = projected[i].py - projected[j].py
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 85) {
            const alpha = (1 - dist / 85) * 0.25 * projected[i].scale
            ctx.strokeStyle = `rgba(183, 187, 217, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(projected[i].px, projected[i].py)
            ctx.lineTo(projected[j].px, projected[j].py)
            ctx.stroke()
          }
        }
      }

      // Draw 3D Nodes
      projected.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.px, p.py, Math.max(p.radius, 0.5), 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.shadowBlur = 10 * p.scale
        ctx.shadowColor = p.color
        ctx.fill()
        ctx.shadowBlur = 0
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[520px] sm:h-[580px] perspective-1000 flex items-center justify-center select-none"
    >
      {/* 3D Particle Space Canvas in Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl"
      />

      {/* Floating 3D Main Command Core Card */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full max-w-md sm:max-w-lg bg-[#0F172A]/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 border border-[#B7BBD9]/30 shadow-[0_30px_70px_-15px_rgba(15,23,42,0.6)] text-white"
      >
        {/* Holographic Specular Light Sheen */}
        <motion.div
          style={{
            background: `radial-gradient(circle 280px at ${shineX} ${shineY}, rgba(179,139,0,0.18), transparent 75%)`,
          }}
          className="absolute inset-0 rounded-3xl pointer-events-none"
        />

        {/* 3D Header Tab Bar */}
        <div
          style={{ transform: 'translateZ(25px)' }}
          className="flex items-center justify-between pb-4 mb-5 border-b border-white/10"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B38B00] animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#B7BBD9]" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
            <span className="text-[#B7BBD9] font-mono text-xs ml-2 font-semibold">
              accord.growth_os // 3D Core
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#B38B00]/15 text-[#B38B00] px-3 py-1 rounded-full text-[10px] font-bold border border-[#B38B00]/30 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B38B00] animate-ping" />
            UNIFIED COMMAND
          </div>
        </div>

        {/* 3D Multi-Layer Interactive Console */}
        <div className="space-y-3.5">
          {/* Pillar 1: Strategic Diagnosis */}
          <motion.div
            style={{ transform: 'translateZ(35px)' }}
            className="group/card bg-white/5 hover:bg-white/10 rounded-2xl p-4 border border-white/10 hover:border-[#B38B00]/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#B38B00]/20 flex items-center justify-center text-[#B38B00]">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    Strategic Diagnosis
                  </h4>
                  <p className="text-[10px] text-[#B7BBD9]">P&amp;L Constraints &amp; TAM Mapping</p>
                </div>
              </div>
              <span className="text-xs font-black text-[#B38B00] bg-[#B38B00]/10 px-2 py-0.5 rounded-md border border-[#B38B00]/30">
                94.8% Index
              </span>
            </div>
            <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden mt-2">
              <div className="bg-[#B38B00] h-full rounded-full w-[94.8%]" />
            </div>
          </motion.div>

          {/* Pillar 2: Growth Marketing Engine */}
          <motion.div
            style={{ transform: 'translateZ(45px)' }}
            className="group/card bg-white/5 hover:bg-white/10 rounded-2xl p-4 border border-white/10 hover:border-[#B7BBD9]/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#B7BBD9]/20 flex items-center justify-center text-[#B7BBD9]">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    Revenue-Led Marketing
                  </h4>
                  <p className="text-[10px] text-[#B7BBD9]">AEO • Full-Funnel Attribution • ABM</p>
                </div>
              </div>
              <span className="text-xs font-black text-[#B7BBD9] bg-[#B7BBD9]/10 px-2 py-0.5 rounded-md border border-[#B7BBD9]/30">
                +312% Pipeline
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-[#B7BBD9]/90 mt-2 font-mono">
              <span className="px-2 py-0.5 rounded bg-black/40">SEO &amp; AEO</span>
              <span className="px-2 py-0.5 rounded bg-black/40">Multi-Touch</span>
              <span className="px-2 py-0.5 rounded bg-black/40">RevOps Sync</span>
            </div>
          </motion.div>

          {/* Pillar 3: Custom Software & MarTech Stack */}
          <motion.div
            style={{ transform: 'translateZ(55px)' }}
            className="group/card bg-white/5 hover:bg-white/10 rounded-2xl p-4 border border-white/10 hover:border-white/40 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    Custom Software &amp; Tech
                  </h4>
                  <p className="text-[10px] text-[#B7BBD9]">Cloud Web/Mobile • MarTech CDP</p>
                </div>
              </div>
              <span className="text-xs font-black text-white bg-white/10 px-2 py-0.5 rounded-md border border-white/20">
                0ms Data Silos
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-white/80 mt-2 font-mono">
              <span className="px-2 py-0.5 rounded bg-black/40">React / Node</span>
              <span className="px-2 py-0.5 rounded bg-black/40">ERP Sync</span>
              <span className="px-2 py-0.5 rounded bg-black/40">Server Tracking</span>
            </div>
          </motion.div>
        </div>

        {/* 3D Quick Metrics Footer */}
        <div
          style={{ transform: 'translateZ(30px)' }}
          className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10 text-center"
        >
          <div className="bg-black/35 rounded-xl p-2.5 border border-white/5">
            <span className="text-[10px] uppercase font-bold text-[#B7BBD9] block">Deployment Speed</span>
            <span className="text-base font-black text-[#B38B00]">47% Faster</span>
          </div>
          <div className="bg-black/35 rounded-xl p-2.5 border border-white/5">
            <span className="text-[10px] uppercase font-bold text-[#B7BBD9] block">Lead Quality Lift</span>
            <span className="text-base font-black text-white">3.2x Higher</span>
          </div>
        </div>
      </motion.div>

      {/* Floating 3D Satellite Badge 1 (Top Right) */}
      <motion.div
        animate={{ y: [0, -10, 0], rotateZ: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 text-[#0F172A] px-4 py-3 rounded-2xl shadow-xl border border-[#B7BBD9]/40 items-center gap-3 z-20 backdrop-blur-md"
      >
        <div className="w-9 h-9 rounded-xl bg-[#B38B00]/15 flex items-center justify-center text-[#B38B00] shrink-0">
          <Zap className="w-4 h-4" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Marketing ROI</span>
          <span className="text-xs font-black text-[#0F172A]">2.5x Improvement</span>
        </div>
      </motion.div>

      {/* Floating 3D Satellite Badge 2 (Bottom Left) */}
      <motion.div
        animate={{ y: [0, 8, 0], rotateZ: [0, -2, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 0.5 }}
        className="hidden sm:flex absolute -bottom-4 -left-4 bg-[#0F172A] text-white px-4 py-3 rounded-2xl shadow-2xl border border-[#B7BBD9]/30 items-center gap-3 z-20"
      >
        <div className="w-9 h-9 rounded-xl bg-[#B7BBD9]/20 flex items-center justify-center text-[#B7BBD9] shrink-0">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-[#B7BBD9] uppercase tracking-wider block">Overhead Reduction</span>
          <span className="text-xs font-black text-[#B38B00]">60% Cost Efficiency</span>
        </div>
      </motion.div>
    </div>
  )
}
