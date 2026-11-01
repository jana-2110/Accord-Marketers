import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBrands from './components/TrustedBrands'
import Services from './components/Services'
import Statistics from './components/Statistics'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Blog from './components/Blog'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const handleOpenContact = () => setIsContactOpen(true)
  const handleCloseContact = () => setIsContactOpen(false)

  return (
    <Router>
      <div className="min-h-screen bg-ivory text-body font-sans selection:bg-mustard selection:text-white">
        {/* Navigation */}
        <Navbar onOpenContact={handleOpenContact} />

        <main>
          {/* Section 1: Hero */}
          <Hero onOpenContact={handleOpenContact} />

          {/* Section 2: Trusted Brands */}
          <TrustedBrands />

          {/* Section 3: Services */}
          <Services onOpenContact={handleOpenContact} />

          {/* Section 4: Statistics */}
          <Statistics />

          {/* Section 5: About Us & Why Choose Us */}
          <About onOpenContact={handleOpenContact} />

          {/* Section 6: Portfolio / Our Work */}
          <Portfolio onOpenContact={handleOpenContact} />

          {/* Section 7: How We Work (5-step process) */}
          <Process />

          {/* Section 8: Testimonials */}
          <Testimonials />

          {/* Section 9: FAQ */}
          <FAQ onOpenContact={handleOpenContact} />

          {/* Section 10: Blog / Growth Playbooks */}
          <Blog onOpenContact={handleOpenContact} />

          {/* Section 11: Call To Action */}
          <CallToAction onOpenContact={handleOpenContact} />
        </main>

        {/* Footer */}
        <Footer onOpenContact={handleOpenContact} />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton />

        {/* Interactive Consultation / Inquiry Modal */}
        <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
      </div>
    </Router>
  )
}

export default App
