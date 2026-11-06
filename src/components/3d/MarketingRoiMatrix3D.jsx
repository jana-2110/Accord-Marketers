import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Target, Zap, ShieldCheck, RefreshCw, BarChart2 } from 'lucide-react'

const matrixNodes = [
  { id: 'cac', name: 'CAC Payback', value: '< 6.2 Months', change: '-41% Cost', category: 'RevOps', color: '#B38B00' },
  { id: 'pipeline', name: 'Pipeline Velocity', value: '+312%', change: '$1.4M Generated', category: 'Growth', color: '#B7BBD9' },
  { id: 'overhead', name: 'Operational Overhead', value: '-60%', change: 'Automated Sync', category: 'Efficiency', color: '#B38B00' },
  { id: 'quality', name: 'Lead Quality Lift', value: '3.2x', change: '8.7/10 Alignment', category: 'Marketing', color: '#FFFFFF' },
  { id: 'roi', name: 'Marketing Blended ROI', value: '2.5x', change: '+34% ROAS', category: 'Strategy', color: '#B38B00' },
  { id: 'speed', name: 'Deployment Speed', value: '47% Faster', change: '2-Wk Sprints', category: 'Software', color: '#B7BBD9' },
]

export default function MarketingRoiMatrix3D({ onOpenDiagnostic }) {
  const canvasRef = useRef(null)
  const [activeNode, setActiveNode] = useState(matrixNodes[0])
  const [isHovered, setIsHovered] = useState(false)

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

    // 3D Orbital Sphere Geometry
    const points = []
    const numPoints = 72
    const radius = Math.min(width, height) * 0.36

    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints)
      const theta = Math.sqrt(numPoints * Math.PI) * phi
      points.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        baseX: radius * Math.cos(theta) * Math.sin(phi),
        baseY: radius * Math.sin(theta) * Math.sin(phi),
        baseZ: radius * Math.cos(phi),
        size: (i % 5 === 0) ? 3.5 : 2,
        color: i % 3 === 0 ? '#B38B00' : i % 3 === 1 ? '#B7BBD9' : '#FFFFFF',
        pulse: Math.random() * Math.PI,
      })
    }

    // 6 Primary Telemetry Anchors
    const telemetryAnchors = matrixNodes.map((node, index) => {
      const angle = (index / matrixNodes.length) * Math.PI * 2
      return {
        ...node,
        x: radius * 1.05 * Math.cos(angle),
        y: (index % 2 === 0 ? 0.35 : -0.35) * radius,
        z: radius * 1.05 * Math.sin(angle),
      }
    })

    let rotY = 0
    let rotX = 0.25

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      const cx = width / 2
      const cy = height / 2
      const fov = 400

      if (!isHovered) {
        rotY += 0.007
        rotX = 0.25 + Math.sin(rotY * 0.4) * 0.08
      } else {
        rotY += 0.002
      }

      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)
      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)

      // Transform all spherical dots
      const projected = points.map((p) => {
        p.pulse += 0.04
        // Rotation around Y
        const x1 = p.baseX * cosY - p.baseZ * sinY
        const z1 = p.baseZ * cosY + p.baseX * sinY
        // Rotation around X
        const y1 = p.baseY * cosX - z1 * sinX
        const z2 = z1 * cosX + p.baseY * sinX

        const scale = fov / (fov + z2 + 250)
        return {
          px: cx + x1 * scale,
          py: cy + y1 * scale,
          scale,
          z: z2,
          size: p.size * scale * (1 + 0.2 * Math.sin(p.pulse)),
          color: p.color,
        }
      })

      // Transform Telemetry Anchors
      const projectedAnchors = telemetryAnchors.map((node) => {
        const x1 = node.x * cosY - node.z * sinY
        const z1 = node.z * cosY + node.x * sinY
        const y1 = node.y * cosX - z1 * sinX
        const z2 = z1 * cosX + node.y * sinX

        const scale = fov / (fov + z2 + 250)
        return {
          ...node,
          px: cx + x1 * scale,
          py: cy + y1 * scale,
          scale,
          z: z2,
        }
      })

      // Combine & sort by Z for true 3D occlusion
      const allRenderables = [
        ...projected.map((p) => ({ type: 'point', ...p })),
        ...projectedAnchors.map((a) => ({ type: 'anchor', ...a })),
      ].sort((a, b) => b.z - a.z)

      // Draw Orbit Equatorial Ellipses in 3D
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(rotY * 0.2)
      ctx.beginPath()
      ctx.ellipse(0, 0, radius * 1.15, radius * 0.45, rotX, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(183, 187, 217, 0.15)'
      ctx.lineWidth = 1.2
      ctx.setLineDash([4, 6])
      ctx.stroke()
      ctx.restore()

      // Connect near points with faint geometric lines
      ctx.lineWidth = 0.6
      for (let i = 0; i < projected.length; i += 2) {
        for (let j = i + 1; j < Math.min(i + 4, projected.length); j++) {
          const dx = projected[i].px - projected[j].px
          const dy = projected[i].py - projected[j].py
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 55) {
            ctx.strokeStyle = `rgba(183, 187, 217, ${0.18 * (1 - dist / 55)})`
            ctx.beginPath()
            ctx.moveTo(projected[i].px, projected[i].py)
            ctx.lineTo(projected[j].px, projected[j].py)
            ctx.stroke()
          }
        }
      }

      // Draw items
      allRenderables.forEach((item) => {
        if (item.type === 'point') {
          ctx.beginPath()
          ctx.arc(item.px, item.py, Math.max(item.size, 1), 0, Math.PI * 2)
          ctx.fillStyle = item.color
          ctx.shadowBlur = 6 * item.scale
          ctx.shadowColor = item.color
          ctx.fill()
          ctx.shadowBlur = 0
        } else if (item.type === 'anchor') {
          // Draw Glowing Anchor Pin
          const isActive = activeNode.id === item.id
          ctx.beginPath()
          ctx.arc(item.px, item.py, (isActive ? 9 : 6) * item.scale, 0, Math.PI * 2)
          ctx.fillStyle = item.color
          ctx.shadowBlur = (isActive ? 16 : 8) * item.scale
          ctx.shadowColor = item.color
          ctx.fill()
          ctx.shadowBlur = 0

          // Center white core
          ctx.beginPath()
          ctx.arc(item.px, item.py, 2.5 * item.scale, 0, Math.PI * 2)
          ctx.fillStyle = '#FFFFFF'
          ctx.fill()

          // Floating Telemetry Label if in front
          if (item.z < 60) {
            ctx.font = `bold ${Math.round(10 * item.scale)}px sans-serif`
            ctx.fillStyle = isActive ? '#FFFFFF' : '#B7BBD9'
            ctx.textAlign = 'center'
            ctx.fillText(item.name, item.px, item.py - 14 * item.scale)
          }
        }
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isHovered, activeNode])

  return (
    <div className="relative bg-[#0F172A] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#B7BBD9]/25 shadow-2xl overflow-hidden text-white my-10">
      {/* Background ambient radial lights */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-[#B38B00]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#B7BBD9]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#B38B00]/20 text-[#B38B00] px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest border border-[#B38B00]/30 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B38B00] animate-pulse" />
            Interactive 3D Revenue Matrix
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Unified Telemetry &amp; Business Economics Engine
          </h3>
          <p className="text-xs sm:text-sm text-[#B7BBD9]">
            Real-time orbital projection of strategy, marketing attribution, and software velocity metrics.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenDiagnostic}
            className="group inline-flex items-center gap-2 bg-[#B38B00] hover:bg-white hover:text-[#0F172A] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#B38B00]/20 cursor-pointer"
          >
            <span>Run ROI Assessment</span>
          </button>
        </div>
      </div>

      {/* Main 3D Matrix Grid: Canvas on Left, Interactive Telemetry on Right */}
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* 3D Canvas Column */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="lg:col-span-7 h-[360px] sm:h-[420px] relative rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center cursor-pointer group"
        >
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
          
          <div className="absolute bottom-3 left-4 text-[10px] text-[#B7BBD9]/70 font-mono flex items-center gap-2 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-[#B38B00] animate-ping" />
            <span>ORBITAL REVENUE TELEMETRY // 3D PROJECTION</span>
          </div>
          
          <div className="absolute top-3 right-4 text-[10px] text-[#B7BBD9]/70 font-mono bg-black/40 px-2 py-1 rounded border border-white/5 pointer-events-none">
            HOVER TO INSPECT ORBIT
          </div>
        </div>

        {/* Interactive Telemetry Details Column */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B7BBD9] block">
            Click Telemetry Stream to Focus
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {matrixNodes.map((node) => {
              const isSelected = activeNode.id === node.id
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all duration-300 border flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white/15 border-[#B38B00] shadow-lg shadow-[#B38B00]/20'
                      : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: node.color }}
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">{node.name}</span>
                        <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-black/40 text-[#B7BBD9]">
                          {node.category}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#B7BBD9]">{node.change}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span
                      className="text-base font-black tracking-tight"
                      style={{ color: node.color }}
                    >
                      {node.value}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active Node Detail Card */}
          <div className="bg-[#B38B00]/10 border border-[#B38B00]/30 rounded-2xl p-4 text-xs">
            <div className="flex items-center gap-2 text-[#B38B00] font-bold uppercase tracking-wider mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span>Integrated Impact: {activeNode.name}</span>
            </div>
            <p className="text-[#F1F2E6]/90 text-[11px] leading-relaxed">
              When consulting, growth marketing, and software engineering share one objective, strategic initiatives achieve <span className="text-[#B38B00] font-bold">{activeNode.value}</span> performance with zero friction or handoff delays.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

