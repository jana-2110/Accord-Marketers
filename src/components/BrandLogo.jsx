export default function BrandLogo({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light'

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Custom Geometric Monogram Icon */}
      <div className="relative w-9 h-9 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center overflow-hidden shadow-sm transition-transform duration-300 hover:scale-105">
        <svg viewBox="0 0 44 44" className="w-full h-full" fill="none">
          {/* Background Rounded Squircle */}
          <rect width="44" height="44" rx="12" fill={isLight ? '#FFFFFF' : '#0F172A'} />
          
          {/* Stylized Modern "A" Monogram in Golden Mustard & Accent */}
          <path
            d="M22 9L11 33H17L22 21L27 33H33L22 9Z"
            fill="#B38B00"
          />
          {/* Dynamic Crossbar Notch */}
          <path
            d="M17.5 24.5H26.5L25 28.5H19L17.5 24.5Z"
            fill={isLight ? '#0F172A' : '#F1F2E6'}
          />
          {/* Subtle Top Crown Dot */}
          <circle cx="22" cy="14" r="2" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Typographic Wordmark */}
      <div className="flex flex-col">
        <span
          className={`text-lg lg:text-xl font-extrabold tracking-tight leading-none ${
            isLight ? 'text-white' : 'text-navy'
          }`}
        >
          ACCORD
        </span>
        <span
          className={`text-[9px] lg:text-[10px] font-bold tracking-[0.22em] uppercase leading-tight mt-0.5 ${
            isLight ? 'text-mustard' : 'text-mustard'
          }`}
        >
          MARKETING
        </span>
      </div>
    </div>
  )
}
