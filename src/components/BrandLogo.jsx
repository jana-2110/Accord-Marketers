export default function BrandLogo({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light'

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Logomark: Geometric capsules forming 'A', 'M' and motion arrow */}
      <div className="relative w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
          {/* Left Angled Pill */}
          <rect
            x="8"
            y="20"
            width="9"
            height="22"
            rx="4.5"
            transform="rotate(-26 8 20)"
            fill={isLight ? '#FFFFFF' : '#0F172A'}
          />
          {/* Right Angled Pill (Taller, shifted up and right) */}
          <rect
            x="22"
            y="7"
            width="9.5"
            height="32"
            rx="4.75"
            transform="rotate(-26 22 7)"
            fill={isLight ? '#B38B00' : '#B38B00'}
          />
        </svg>
      </div>

      {/* Official Brand Logotype: ACCORD MARKETERS */}
      <div className="flex flex-col">
        <span
          className={`text-lg lg:text-xl font-extrabold tracking-tight leading-none ${
            isLight ? 'text-white' : 'text-navy'
          }`}
        >
          ACCORD
        </span>
        <span
          className={`text-[9px] lg:text-[10px] font-bold tracking-[0.24em] uppercase leading-tight mt-0.5 ${
            isLight ? 'text-white/70' : 'text-body/70'
          }`}
        >
          MARKETERS
        </span>
      </div>
    </div>
  )
}
