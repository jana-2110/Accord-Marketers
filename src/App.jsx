import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import ValueProposition from './components/ValueProposition'
import ServicesGrid from './components/ServicesGrid'
import IndustrySolutions from './components/IndustrySolutions'
import ResultsMetrics from './components/ResultsMetrics'
import CaseStudies from './components/CaseStudies'
import Methodology from './components/Methodology'
import AboutAgency from './components/AboutAgency'
import FAQHub from './components/FAQHub'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import DiagnosticModal from './components/DiagnosticModal'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false)

  const handleOpenDiagnostic = () => setIsDiagnosticOpen(true)
  const handleCloseDiagnostic = () => setIsDiagnosticOpen(false)

  return (
    <Router>
      <div className="min-h-screen bg-ivory text-body font-sans selection:bg-mustard selection:text-white">
        {/* Navigation Bar */}
        <Navbar onOpenDiagnostic={handleOpenDiagnostic} />

        <main>
          {/* Section 1: Hero Section */}
          <Hero onOpenDiagnostic={handleOpenDiagnostic} />

          {/* Section 2: Trust Bar & Social Proof */}
          <TrustBar />

          {/* Section 3: Value Proposition (3 Strategic Pillars) */}
          <ValueProposition onOpenDiagnostic={handleOpenDiagnostic} />

          {/* Section 4: Full-Spectrum Services Overview */}
          <ServicesGrid onOpenDiagnostic={handleOpenDiagnostic} />

          {/* Section 5: Solutions by Business Category & Industry */}
          <IndustrySolutions onOpenDiagnostic={handleOpenDiagnostic} />

          {/* Section 6: Results-Driven Messaging & Metrics */}
          <ResultsMetrics onOpenDiagnostic={handleOpenDiagnostic} />

          {/* Section 7: Strategic Case Studies */}
          <CaseStudies onOpenDiagnostic={handleOpenDiagnostic} />

          {/* Section 8: Methodology & Process (4 Phases) */}
          <Methodology onOpenDiagnostic={handleOpenDiagnostic} />

          {/* Section 9: About / Why Accord Marketers */}
          <AboutAgency onOpenDiagnostic={handleOpenDiagnostic} />

          {/* Section 10: Global FAQ Hub (AEO-Optimized) */}
          <FAQHub onOpenDiagnostic={handleOpenDiagnostic} />

          {/* Section 11: Final Call to Action */}
          <FinalCTA onOpenDiagnostic={handleOpenDiagnostic} />
        </main>

        {/* Global Footer */}
        <Footer onOpenDiagnostic={handleOpenDiagnostic} />

        {/* Floating WhatsApp Action Widget */}
        <WhatsAppButton />

        {/* Interactive Strategic Diagnostic Modal */}
        <DiagnosticModal isOpen={isDiagnosticOpen} onClose={handleCloseDiagnostic} />
      </div>
    </Router>
  )
}

export default App
