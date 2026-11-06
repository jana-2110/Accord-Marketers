import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Compass } from 'lucide-react'
import BrandLogo from './BrandLogo'

const navLinks = [
  { name: 'Consulting', href: '#consulting' },
  { name: 'Services', href: '#services' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Results', href: '#results' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Methodology', href: '#methodology' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
]

export default function Navbar({ onOpenDiagnostic }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['home', 'consulting', 'services', 'solutions', 'results', 'case-studies', 'methodology', 'about', 'faq']
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 160) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      setIsOpen(false)
      const target = document.querySelector(href)
      if (target) {
        const offsetTop = target.offsetTop - 85
        window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F1F2E6]/95 backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.08)] border-b border-[#B7BBD9]/40 py-3'
          : 'bg-[#F1F2E6]/90 backdrop-blur-sm border-b border-[#B7BBD9]/20 py-4 lg:py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 shrink-0 cursor-pointer"
            aria-label="Accord Marketers Home"
          >
            <BrandLogo variant="dark" />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden xl:flex items-center gap-1 bg-white/70 px-3 py-1.5 rounded-full border border-[#B7BBD9]/30 shadow-xs">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-[#B38B00] bg-[#0F172A] shadow-xs'
                      : 'text-[#0F172A]/85 hover:text-[#B38B00]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#B38B00] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDiagnostic}
              className="group inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#B38B00] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-[#B38B00]/25 hover:-translate-y-0.5 cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-[#B38B00] group-hover:text-white transition-colors" />
              <span>Schedule Diagnostic</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-xl text-[#0F172A] hover:bg-[#B7BBD9]/20 transition-colors cursor-pointer"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="xl:hidden bg-[#F1F2E6] border-t border-[#B7BBD9]/30 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-5 space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="block px-3 py-2.5 text-[#0F172A] font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-white hover:text-[#B38B00] transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-3 border-t border-[#B7BBD9]/30">
                <button
                  onClick={() => {
                    setIsOpen(false)
                    onOpenDiagnostic()
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#B38B00] text-white px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Schedule Strategic Diagnostic
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
