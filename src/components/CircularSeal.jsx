const stages = [
  { n: '01', label: 'Collect', pos: 'left-0 top-0 -translate-x-1/2 -translate-y-1/2' },
  { n: '02', label: 'Process', pos: 'right-0 top-0 translate-x-1/2 -translate-y-1/2' },
  { n: '03', label: 'Recover', pos: 'right-0 bottom-0 translate-x-1/2 translate-y-1/2' },
  { n: '04', label: 'Reuse', pos: 'left-0 bottom-0 -translate-x-1/2 translate-y-1/2' },
]

/**
 * The site's signature motif: a slowly rotating trading-manifest seal built
 * from the same "Collect → Process → Recover → Reuse" loop that runs through
 * every material Jimkey handles.
 */
export default function CircularSeal({ variant = 'light', className = '' }) {
  const dark = variant === 'dark'
  const ring = dark ? 'text-white/70' : 'text-navy/60'
  const dot = dark ? 'fill-teal-light' : 'fill-teal'
  const chipBase = dark
    ? 'border-white/25 bg-white/10 text-white backdrop-blur'
    : 'border-line bg-paper text-navy shadow-sm'

  return (
    <div className={`seal-group relative mx-auto aspect-square w-full max-w-[280px] ${className}`}>
      <svg viewBox="0 0 240 240" className="h-full w-full">
        <g className="seal-ring" style={{ transformOrigin: '120px 120px' }}>
          <circle cx="120" cy="120" r="104" fill="none" stroke="currentColor" strokeWidth="1.1" strokeDasharray="1.5 7" className={ring} />
          <path id="sealArc" d="M120,120 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" fill="none" />
          <text fontSize="8.4" letterSpacing="3" className={`font-mono ${ring}`} fill="currentColor">
            <textPath href="#sealArc" startOffset="0%">
              CIRCULAR TRADE · ALTERNATIVE FUEL RESOURCES · CIRCULAR TRADE · ALTERNATIVE FUEL RESOURCES ·
            </textPath>
          </text>
        </g>

        <circle cx="120" cy="120" r="68" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" className={ring} />
        <circle cx="120" cy="52" r="3.4" className={dot} />
        <circle cx="188" cy="120" r="3.4" className={dot} />
        <circle cx="120" cy="188" r="3.4" className={dot} />
        <circle cx="52" cy="120" r="3.4" className={dot} />

        <text x="120" y="114" textAnchor="middle" className={`font-display ${dark ? 'fill-white' : 'fill-navy'}`} fontSize="17" fontWeight="700">
          JIMKEY
        </text>
        <text x="120" y="130" textAnchor="middle" className={`font-mono ${dark ? 'fill-teal-light' : 'fill-teal-dark'}`} fontSize="8" letterSpacing="2">
          ECOPOWER
        </text>
        <text x="120" y="145" textAnchor="middle" className={`font-mono ${ring}`} fontSize="6.5" letterSpacing="1.5">
          SINCE 2021
        </text>
      </svg>

      {stages.map((s) => (
        <div key={s.n} className={`absolute ${s.pos} hidden sm:block`}>
          <div className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold whitespace-nowrap ${chipBase}`}>
            <span className="font-mono text-teal">{s.n}</span>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
