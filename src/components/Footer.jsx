import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Compass,
} from 'lucide-react'
import BrandLogo from './BrandLogo'

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

const socialLinks = [
  { icon: FacebookIcon, href: 'https://facebook.com/accordmarketers', label: 'Facebook' },
  { icon: InstagramIcon, href: 'https://instagram.com/accordmarketers', label: 'Instagram' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/company/accordmarketers', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://wa.me/', label: 'WhatsApp' },
]

export default function Footer({ onOpenDiagnostic }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        const offsetTop = target.offsetTop - 85
        window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      }
    }
  }

  return (
    <footer id="contact" className="bg-[#0F172A] text-white relative overflow-hidden" ref={ref}>
      {/* Top Border */}
      <div className="h-1 bg-gradient-to-r from-[#0F172A] via-[#B38B00] to-[#0F172A]" />

      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B38B00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-4"
          >
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-block mb-5 cursor-pointer"
              aria-label="Accord Marketers Home"
            >
              <BrandLogo variant="light" />
            </a>
            <p className="text-[#B7BBD9] text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              Accord Marketers is a strategic consulting-led agency combining business advisory, digital marketing, and custom software development. We help startups, SMEs, and enterprises grow through integrated strategy, technology, and execution.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#B38B00] hover:border-[#B38B00] transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 text-[#B7BBD9] hover:text-white transition-colors" />
                  </a>
                )
              })}
            </div>

            <div className="flex items-center gap-2 text-xs text-[#B38B00] font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Strategy-to-Execution Accountability</span>
            </div>
          </motion.div>

          {/* Column 2: Strategic Consulting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="lg:col-span-3"
          >
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase mb-4 text-[#B38B00]">
              Strategic Consulting
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B7BBD9]">
              <li>
                <a href="#consulting" onClick={(e) => handleNavClick(e, '#consulting')} className="hover:text-white transition-colors">
                  Growth Diagnostics &amp; Assessment
                </a>
              </li>
              <li>
                <a href="#consulting" onClick={(e) => handleNavClick(e, '#consulting')} className="hover:text-white transition-colors">
                  Competitive Intelligence &amp; Positioning
                </a>
              </li>
              <li>
                <a href="#consulting" onClick={(e) => handleNavClick(e, '#consulting')} className="hover:text-white transition-colors">
                  Digital Transformation Roadmapping
                </a>
              </li>
              <li>
                <a href="#consulting" onClick={(e) => handleNavClick(e, '#consulting')} className="hover:text-white transition-colors">
                  Go-to-Market Strategy &amp; Launch
                </a>
              </li>
              <li>
                <a href="#consulting" onClick={(e) => handleNavClick(e, '#consulting')} className="hover:text-white transition-colors">
                  Capability Maturity Scoring
                </a>
              </li>
              <li>
                <a href="#consulting" onClick={(e) => handleNavClick(e, '#consulting')} className="hover:text-white transition-colors">
                  Revenue Operations (RevOps) Design
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Marketing & Technology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase mb-4 text-[#B38B00]">
              Delivery Engines
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B7BBD9]">
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">
                  SEO &amp; AEO (AI Search)
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">
                  SEM &amp; Paid Media
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">
                  Custom Web &amp; Mobile Apps
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">
                  MarTech Stack Architecture
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">
                  CRM / ERP Data Sync
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">
                  Server-Side Attribution
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Contact & Diagnostic Intake */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-3"
          >
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase mb-4 text-[#B38B00]">
              Direct Advisory Desk
            </h4>
            <ul className="space-y-3 text-xs text-[#B7BBD9] mb-6">
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#B38B00] shrink-0" />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@accordmarketers.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#B38B00] shrink-0" />
                  <span>info@accordmarketers.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B38B00] shrink-0" />
                  <span>Tirunelveli, Tamil Nadu, India</span>
                </div>
              </li>
            </ul>

            <button
              onClick={onOpenDiagnostic}
              className="w-full bg-[#B38B00] hover:bg-white hover:text-[#0F172A] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#B38B00]/20 cursor-pointer"
            >
              Contact Accord Marketers Strategically
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B7BBD9]/70">
          <p>
            © {new Date().getFullYear()} Accord Marketers. All rights reserved. Strategic Consulting, Marketing &amp; Technology.
          </p>
          <div className="flex items-center gap-6">
            <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-white transition-colors">
              AEO Knowledge Index
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Engagement
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
