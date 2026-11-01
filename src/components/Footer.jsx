import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Heart,
  Send,
  CheckCircle,
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

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Work', href: '#portfolio' },
  { name: 'Blog', href: '#blog' },
]

const serviceLinks = [
  'Digital Strategy',
  'Paid Advertising (Google & Meta)',
  'SEO & Content Marketing',
  'Social Media Marketing',
  'Website Development',
  'Branding & Creative Design',
]

const socialLinks = [
  { icon: FacebookIcon, href: 'https://facebook.com/accordmarketers', label: 'Facebook' },
  { icon: InstagramIcon, href: 'https://instagram.com/accordmarketers', label: 'Instagram' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/company/accordmarketers', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://wa.me/', label: 'WhatsApp' },
]

export default function Footer({ onOpenContact }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        const offsetTop = target.offsetTop - 80
        window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      }
    }
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (newsletterEmail) {
      setSubscribed(true)
    }
  }

  return (
    <footer id="contact" className="bg-navy text-white relative overflow-hidden" ref={ref}>
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-navy via-mustard to-navy" />

      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lavender/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Bio */}
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
              aria-label="Accord Marketing Home"
            >
              <BrandLogo variant="light" />
            </a>
            <p className="text-white/65 text-sm leading-relaxed mb-6 max-w-sm">
              Accord Marketing is a results-driven digital marketing agency. We engineer data-backed growth systems, creative branding, and scalable customer acquisition engines for ambitious companies.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-mustard hover:border-mustard transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase mb-5 text-white/90">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/55 hover:text-mustard transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-3"
          >
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase mb-5 text-white/90">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="text-sm text-white/55 hover:text-mustard transition-colors duration-300 block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-3"
          >
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase mb-5 text-white/90">
              Get in Touch
            </h4>
            <ul className="space-y-3.5 mb-6">
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-mustard transition-colors group"
                >
                  <Phone className="w-4 h-4 text-mustard shrink-0" />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@accordmarketers.com"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-mustard transition-colors group"
                >
                  <Mail className="w-4 h-4 text-mustard shrink-0" />
                  <span>info@accordmarketers.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <MapPin className="w-4 h-4 text-mustard shrink-0" />
                  <span>India</span>
                </div>
              </li>
            </ul>

            {/* Newsletter input */}
            <div className="bg-white/5 p-3.5 rounded-2xl border border-white/10">
              <p className="text-xs font-bold text-white mb-2">Weekly Growth Memo</p>
              {subscribed ? (
                <p className="text-xs text-green-400 flex items-center gap-1.5 py-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Subscribed successfully!
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter email"
                    className="w-full bg-navy/80 border border-white/15 px-3 py-1.5 rounded-lg text-xs text-white focus:outline-none focus:border-mustard"
                  />
                  <button
                    type="submit"
                    className="bg-mustard hover:bg-mustard/90 text-white px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/45 flex items-center gap-1.5">
              © {new Date().getFullYear()} Accord Marketing. All rights reserved. Powering Digital Engines Worldwide.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-white/45 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-white/45 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-white/45 hover:text-white transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
