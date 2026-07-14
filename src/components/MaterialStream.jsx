const stages = ['Collect', 'Process', 'Recover', 'Reuse']
const materials = ['UCO', 'Carbon Black', 'Pyrolysis Oil', 'Tallow Oil', 'Steel Wire']

export default function MaterialStream({ variant = 'light' }) {
  const dark = variant === 'dark'
  return (
    <div className={`rounded-2xl border ${dark ? 'border-white/10 bg-white/5' : 'border-line bg-white'} p-5 sm:p-6`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        {stages.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className={`flex h-8 w-8 items-center justify-center rounded-full font-mono text-xs font-semibold ${dark ? 'bg-teal/20 text-teal-light' : 'bg-teal/10 text-teal-dark'}`}>
                {i + 1}
              </span>
              <span className={`font-display text-sm font-bold ${dark ? 'text-white' : 'text-navy'}`}>{s}</span>
            </div>
            {i < stages.length - 1 && (
              <span className={`hidden h-px w-10 sm:block ${dark ? 'bg-white/20' : 'bg-line'}`} />
            )}
          </div>
        ))}
      </div>
      <div className={`mt-4 flex flex-wrap gap-2 border-t pt-4 ${dark ? 'border-white/10' : 'border-line'}`}>
        {materials.map((m) => (
          <span
            key={m}
            className={`font-mono rounded-full px-3 py-1 text-[11px] tracking-wide ${
              dark ? 'bg-white/10 text-white/70' : 'bg-paper text-steel'
            }`}
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  )
}
