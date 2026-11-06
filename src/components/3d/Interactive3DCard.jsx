import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function Interactive3DCard({
  children,
  className = '',
  maxRotation = 10,
  glowColor = 'rgba(179, 139, 0, 0.15)',
  onClick,
}) {
  const cardRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 180, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 180, damping: 20 })

  const rotateX = useTransform(springY, [-0.5, 0.5], [maxRotation, -maxRotation])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-maxRotation, maxRotation])

  const shineX = useTransform(springX, [-0.5, 0.5], ['0%', '100%'])
  const shineY = useTransform(springY, [-0.5, 0.5], ['0%', '100%'])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
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
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`relative perspective-1000 transform-style-3d ${className}`}
    >
      {/* Specular Light Reflection Sheen */}
      <motion.div
        style={{
          background: `radial-gradient(circle 260px at ${shineX} ${shineY}, ${glowColor}, transparent 75%)`,
        }}
        className="absolute inset-0 rounded-3xl pointer-events-none z-10 transition-opacity"
      />

      {children}
    </motion.div>
  )
}

