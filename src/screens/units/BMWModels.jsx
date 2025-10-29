import React, { useState } from 'react'
import bmwLogo from '../../assets/bmw.png'

const ACCENT = '#0A84FF'

const SECTIONS = [
  {
    key: 'intro',
    title: 'Introduction',
    body:
      'BMW’s lineup uses a clear logic: numeric series (1–8) for cars by size/class, X for SUVs/crossovers, Z for roadsters, i for electrified vehicles, and M for high-performance models. The range balances luxury, sport, and sustainability.'
  },
  {
    key: 'series1',
    title: 'BMW 1 Series (Compact Hatchback)',
    body:
      'Years: 2004–present. A compact hatch delivering the BMW experience in a smaller package. Earlier generations were rear-wheel drive; current versions are primarily front-wheel based. Key models: 116i, 118i, M135i. Ideal for urban drivers.'
  },
  {
    key: 'series2',
    title: 'BMW 2 Series (Compact Coupe / Active Tourer)',
    body:
      'Includes the 2 Series Coupe, Gran Coupe, and Active Tourer. Key models: 218i, M240i. Focuses on engaging handling while remaining practical for daily use.'
  },
  {
    key: 'series3',
    title: 'BMW 3 Series (The Icon)',
    body:
      'Years: 1975–present. The benchmark sports sedan for balance and performance. Famous models: 320i, 330i, M3.'
  },
  {
    key: 'series4',
    title: 'BMW 4 Series (Sleek & Sporty)',
    body:
      'Coupe and Gran Coupe counterparts to the 3 Series with distinct styling (notably the large kidney grille). Key models: 420i, M440i.'
  },
  {
    key: 'series5',
    title: 'BMW 5 Series (Executive Sedan)',
    body:
      'Business-class luxury sedan known for blending comfort and performance. Key models: 520i, 530d, M5.'
  },
  {
    key: 'series6',
    title: 'BMW 6 Series (Luxury GT)',
    body:
      'Coupe, Convertible, and Gran Coupe variants. Models: 640i, 650i, M6. Elegant grand tourers suited for long-distance comfort.'
  },
  {
    key: 'series7',
    title: 'BMW 7 Series (Flagship Luxury)',
    body:
      'Competes with the S-Class and A8. Advanced tech, supreme comfort, and hybrid/electric options. Models: 740i, 760Li, i7.'
  },
  {
    key: 'series8',
    title: 'BMW 8 Series (Grand Tourer Supreme)',
    body:
      'High-end coupe, convertible, and Gran Coupe. Models: 840i, M850i, M8. Focused on power and opulence.'
  },
  {
    key: 'xseries',
    title: 'BMW X Series (SUVs & Crossovers)',
    body:
      'X1: compact luxury SUV; X2: sportier compact; X3: mid-size all-rounder; X4: coupe-styled X3; X5: classic leader; X6: coupe-styled X5; X7: full-size luxury; XM: M-division hybrid performance SUV.'
  },
  {
    key: 'zseries',
    title: 'BMW Z Series (Roadsters)',
    body:
      'Z1 pioneered unique engineering; Z3 became a 90s icon; Z4 is the modern luxury sport convertible, developed in partnership with Toyota (shared platform with Supra).'
  },
  {
    key: 'iseries',
    title: 'BMW i Series (Electric Revolution)',
    body:
      'i3: pioneering electric city car; i4: electric gran coupe; iX: futuristic luxury SUV; i7: electric flagship sedan. Emphasizes sustainability and striking design.'
  },
  {
    key: 'mseries',
    title: 'BMW M Series (Motorsport Division)',
    body:
      'High-performance models with track DNA and precision handling. Models include M2, M3, M4, M5, M8, X5 M, XM.'
  },
  {
    key: 'special',
    title: 'Concept & Special Models',
    body:
      'Vision Next 100, CSL Hommage, Art Cars, and limited editions like M4 CSL and 3.0 CSL demonstrate BMW’s experimental side.'
  },
  {
    key: 'summary',
    title: 'Summary',
    body:
      'BMW’s lineup has evolved to cover compact hatches, executive sedans, grand tourers, SUVs, roadsters, EVs, and hardcore M models. A suggested activity: Match the model to its type for quick recall.'
  },
]

export default function BMWModels({ onNavigate, onBackToUnits }) {
  const [openKey, setOpenKey] = useState('intro')
  const toggle = (key) => setOpenKey((prev) => (prev === key ? key : key)) // single-open

  return (
    <div className="min-h-screen bg-black text-[#F5F5F5]">
      <div className="mx-auto w-full max-w-3xl px-5 pt-6 pb-24">
        {/* Header */}
        <div className="flex items-center gap-3">
          <img src={bmwLogo} alt="BMW" className="h-12 w-12 object-contain" />
          <div>
            <h1 className="text-xl font-semibold" style={{ color: '#F5F5F5' }}>BMW Models & Series</h1>
            <p className="text-sm" style={{ color: '#B0B0B0' }}>Explore series logic, icons, and electrified futures.</p>
          </div>
        </div>

        {/* Accordion */}
        <div className="mt-6 space-y-3">
          {SECTIONS.map((s) => {
            const open = openKey === s.key
            return (
              <div key={s.key} className="rounded-2xl border" style={{ borderColor: '#1F1F1F', backgroundColor: '#111111' }}>
                <button
                  className="flex w-full items-center justify-between px-4 py-3 text-left"
                  onClick={() => toggle(s.key)}
                >
                  <span className="text-sm font-medium" style={{ color: ACCENT }}>{s.title}</span>
                  <svg className={`h-4 w-4 transition-transform`} style={{ color: ACCENT, transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.855a.75.75 0 111.08 1.04l-4.24 4.4a.75.75 0 01-1.08 0l-4.24-4.4a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
                </button>
                {open && (
                  <div className="border-t px-4 py-3" style={{ borderColor: '#1F1F1F' }}>
                    <p className="text-sm" style={{ color: '#B0B0B0' }}>{s.body}</p>
                    {/* Placeholder for small images – replace with real assets later */}
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="h-16 rounded-lg bg-white/5" />
                      <div className="h-16 rounded-lg bg-white/5" />
                      <div className="h-16 rounded-lg bg-white/5" />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={onBackToUnits}
            className="w-full rounded-xl border px-4 py-3 text-sm font-medium"
            style={{ borderColor: ACCENT, color: '#F5F5F5' }}
          >
            Back to Units
          </button>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="fixed inset-x-0 bottom-0 z-10 border-t bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/70" style={{ borderColor: '#1F1F1F' }}>
        <div className="mx-auto flex max-w-3xl items-center justify-between px-8 py-3">
          <button aria-label="Home" onClick={() => onNavigate && onNavigate('home')} className="text-textSecondary hover:text-textPrimary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 3.172 2.25 12h1.5v8.25h5.25v-6H15v6h5.25V12h1.5L12 3.172z"/></svg>
          </button>
          <button aria-label="Learn" onClick={() => onNavigate && onNavigate('units')} className="text-textPrimary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.5 5.25h15v1.5h-15v-1.5zm0 6h15v1.5h-15v-1.5zm0 6h15v1.5h-15v-1.5z"/></svg>
          </button>
          <button aria-label="Courses" onClick={() => onNavigate && onNavigate('brands')} className="text-textSecondary hover:text-textPrimary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4 5.25h7.5V12H4V5.25zm8.5 0H20V12h-7.5V5.25zM4 12.75h7.5V19.5H4v-6.75zM12.5 12.75H20V19.5h-7.5v-6.75z"/></svg>
          </button>
          <button aria-label="Profile" onClick={() => onNavigate && onNavigate('profile')} className="text-textSecondary hover:text-textPrimary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm-7.5 9a7.5 7.5 0 0 1 15 0H4.5z"/></svg>
          </button>
        </div>
      </nav>
    </div>
  )
}


