import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react'
import BrandLogo from './BrandLogo'

const navLinks = [
  { name: 'Consulting', href: '#consulting' },
  { name: 'Services', href: '#services' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Methodology', href: '#methodology' },
  { name: 'Case Studies', href: '#case-studies' },
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

      const sections = ['home', 'consulting', 'services', 'solutions', 'methodology', 'case-studies', 'about', 'faq']
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
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(15,23,42,0.08)] py-3'
          : 'bg-ivory/85 backdrop-blur-sm py-4 lg:py-5'
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
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-mustard'
                      : 'text-navy/85 hover:text-mustard'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-mustard rounded-full"
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
              className="group inline-flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-mustard transition-all duration-300 hover:shadow-lg hover:shadow-mustard/20 hover:-translate-y-0.5 cursor-pointer"
            >
              Strategic Diagnostic
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-xl text-navy hover:bg-lavender/30 transition-colors cursor-pointer"
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
            className="xl:hidden bg-white border-t border-border shadow-2xl overflow-hidden"
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
                  className="block px-3 py-2.5 text-navy font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-ivory hover:text-mustard transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-3 border-t border-border/60">
                <button
                  onClick={() => {
                    setIsOpen(false)
                    onOpenDiagnostic()
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-navy text-white px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-mustard transition-colors cursor-pointer"
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
