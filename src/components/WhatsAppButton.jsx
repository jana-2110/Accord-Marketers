import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppButton() {
  const [tooltipVisible, setTooltipVisible] = useState(true)

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      <AnimatePresence>
        {tooltipVisible && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 1 }}
            className="hidden sm:flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-[#B7BBD9]/40 text-xs font-semibold text-[#0F172A] relative"
          >
            <span className="w-2 h-2 rounded-full bg-[#B38B00] animate-ping" />
            <span>Chat with our strategic team</span>
            <button
              onClick={() => setTooltipVisible(false)}
              className="ml-1 text-[#0F172A]/40 hover:text-[#0F172A] transition-colors cursor-pointer"
              aria-label="Dismiss chat tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            {/* Tooltip triangle pointing right */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-8 border-l-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with 3D Depth */}
      <motion.a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Accord Marketers on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group w-14 h-14 bg-[#0F172A] hover:bg-[#B38B00] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#0F172A]/40 border-2 border-white/20 transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-[#B38B00] animate-ping opacity-25" />
        <MessageCircle className="w-6 h-6 relative z-10" />
      </motion.a>
    </div>
  )
}
