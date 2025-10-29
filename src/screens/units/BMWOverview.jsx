import React, { useState } from 'react'
import bmwLogo from '../../assets/bmw.png'

export default function BMWOverview({ onNavigate, onBackToUnits, onNextUnit }) {
  const [answers, setAnswers] = useState({})

  const setAnswer = (qKey, option) => {
    setAnswers((prev) => ({ ...prev, [qKey]: option }))
  }

  const isSelected = (qKey, option) => answers[qKey] === option

  const correct = {
    q1: 'Bayerische Motoren Werke',
    q2: 'The Ultimate Driving Machine',
  }

  const getOptionClasses = (qKey, option) => {
    const selected = isSelected(qKey, option)
    const isCorrect = correct[qKey] === option
    const base = 'w-full rounded-xl border px-4 py-3 text-left text-sm transition-colors'
    if (!selected) return base + ' border-[#1F1F1F] bg-[#111111] text-white hover:border-[#D4AF37]/40'
    if (isCorrect) return base + ' border-[#FFD700] bg-[#111111] text-white'
    return base + ' border-[#B22222] bg-[#111111] text-white'
  }

  const [activeSection, setActiveSection] = useState(null) // 'origins' | 'rebirth' | 'modern'

  const toggleSection = (key) => {
    setActiveSection((prev) => (prev === key ? key : key)) // single-open; tapping new opens it
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-3xl px-5 pt-6 pb-24">
        {/* (A) Hero Section */}
        <section className="text-center">
          <img src={bmwLogo} alt="BMW" className="mx-auto h-16 w-16 object-contain" />
          <h1 className="mt-3 text-2xl font-semibold">BMW  Brand Overview</h1>
          <p className="mt-1 text-sm text-[#B0B0B0]">The Ultimate Driving Machine</p>
          <p className="mt-4 text-sm text-[#B0B0B0]">
            Bayerische Motoren Werke AG, better known as BMW, is a German luxury automobile manufacturer founded in 1916.
            Renowned for its engineering excellence, innovation, and signature driving experience, BMW has become
            synonymous with performance and prestige worldwide.
          </p>
        </section>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-[#1F1F1F]" />

        {/* (B) History & Legacy - Accordion */}
        <section>
          <h2 className="text-sm font-medium tracking-wide text-[#D4AF37]">History & Legacy</h2>
          <div className="mt-3 space-y-3">
            {[{
              key: 'origins',
              title: 'Origins (1916–1930s)',
              body: 'BMW’s story began in 1916 as Bayerische Motoren Werke AG, a manufacturer of aircraft engines in Munich. The company’s blue and white logo represents the Bavarian flag colors, not a propeller. After World War I, BMW shifted focus to motorcycles, launching the R32 in 1923, and later built its first car, the BMW 3/15, in 1928. These early years established BMW’s engineering reputation and commitment to performance and precision.'
            }, {
              key: 'rebirth',
              title: 'Post-War Rebirth (1950s–1970s)',
              body: 'After World War II, BMW faced devastation with destroyed factories and a ban on car production. In the 1950s, the company made a comeback with luxury sedans like the BMW 501 and the Isetta microcar, which helped save the company. The BMW 1500 “Neue Klasse” sedan of 1962 redefined the brand by combining sporty handling with practicality. By the 1970s, BMW launched the 3 Series, 5 Series, and 7 Series, setting global benchmarks.'
            }, {
              key: 'modern',
              title: 'Modern Era (1980s–Today)',
              body: 'From the 1980s onward, BMW expanded its global presence in performance and luxury. The BMW M Division brought racing technology to road cars, creating icons like the M3 E30 and M5. In the 2000s, BMW grew into SUVs with the X Series and launched the i Division, pioneering electric mobility with the i3 and i8. Today, BMW blends design, power, and sustainability, advancing digitalization and electrified performance through models like the iX and M Hybrid series.'
            }].map((item) => {
              const open = activeSection === item.key
              return (
                <div key={item.key} className="rounded-2xl border border-[#1F1F1F] bg-[#111111]">
                  <button
                    className="flex w-full items-center justify-between px-4 py-3 text-left"
                    onClick={() => toggleSection(item.key)}
                  >
                    <span className="text-sm text-white">{item.title}</span>
                    <svg className={`h-4 w-4 text-[#D4AF37] transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.855a.75.75 0 111.08 1.04l-4.24 4.4a.75.75 0 01-1.08 0l-4.24-4.4a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
                  </button>
                  {open && (
                    <div className="border-t border-[#1F1F1F] px-4 py-3">
                      <p className="text-sm text-[#B0B0B0]">{item.body}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-[#1F1F1F]" />

        {/* (C) Core Identity Highlights */}
        <section>
          <h2 className="text-sm font-medium tracking-wide text-[#D4AF37]">Core Identity Highlights</h2>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { title: 'Slogan', value: '“The Ultimate Driving Machine”' },
              { title: 'Headquarters', value: 'Munich, Germany' },
              { title: 'Founded', value: '1916' },
              { title: 'Parent Company', value: 'BMW Group (includes MINI, Rolls-Royce)' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#1F1F1F] bg-[#111111] p-4">
                <div className="text-xs text-[#B0B0B0]">{item.title}</div>
                <div className="mt-1 text-sm text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-[#1F1F1F]" />

        {/* (D) Brand Philosophy */}
        <section>
          <h2 className="text-sm font-medium tracking-wide text-[#D4AF37]">Brand Philosophy</h2>
          <blockquote className="mt-3 rounded-2xl border border-[#D4AF37]/40 bg-[#111111] p-4 text-sm text-white">
            “BMW’s philosophy blends performance with precision — cars that excite both the driver and the engineer.”
          </blockquote>
          <p className="mt-3 text-sm text-[#B0B0B0]">
            The brand’s DNA centers around innovation, luxury, and driving pleasure. From the responsive handling of the
            M-series to the sustainability of the i-series, BMW balances performance and technology for the modern
            enthusiast.
          </p>
        </section>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-[#1F1F1F]" />

        {/* (E) Fun Facts */}
        <section>
          <h2 className="text-sm font-medium tracking-wide text-[#D4AF37]">Fun Facts</h2>
          <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
            {[
              'BMW’s blue and white logo represents the Bavarian flag colors.',
              'The first electric BMW, the i3, was launched in 2013.',
              'BMW owns Rolls-Royce and MINI.',
              '“M” in BMW M-series stands for Motorsport.',
            ].map((fact, idx) => (
              <div key={idx} className="min-w-[240px] rounded-2xl border border-[#1F1F1F] bg-[#111111] p-4 text-sm text-white">
                {fact}
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-[#1F1F1F]" />

        {/* (F) Knowledge Check */}
        <section>
          <h2 className="text-sm font-medium tracking-wide text-[#D4AF37]">Knowledge Check</h2>
          <div className="mt-3 space-y-4">
            <div>
              <div className="text-xs text-[#B0B0B0]">What does BMW stand for?</div>
              <div className="mt-2 grid grid-cols-1 gap-2">
                {['Berlin Motor Works', 'Bayerische Motoren Werke', 'Bavarian Machine Works'].map((opt) => (
                  <button key={opt} onClick={() => setAnswer('q1', opt)} className={getOptionClasses('q1', opt)}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs text-[#B0B0B0]">BMW’s slogan is:</div>
              <div className="mt-2 grid grid-cols-1 gap-2">
                {['The Ultimate Driving Machine', 'Power in Motion', 'Drive the Future'].map((opt) => (
                  <button key={opt} onClick={() => setAnswer('q2', opt)} className={getOptionClasses('q2', opt)}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* (G) Footer Actions */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={() => (onNextUnit ? onNextUnit() : null)}
            className="w-full rounded-xl bg-[#D4AF37] px-4 py-3 text-sm font-semibold text-black shadow-[0_6px_16px_rgba(0,0,0,0.5)]"
          >
            Next Unit → Models & Series
          </button>
          <button
            onClick={onBackToUnits}
            className="w-full rounded-xl border border-[#D4AF37] px-4 py-3 text-sm font-medium text-white"
          >
            Back to Units
          </button>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="fixed inset-x-0 bottom-0 z-10">
        <div className="mx-auto max-w-3xl px-4 pb-4">
          <div className="mx-auto flex items-center justify-between rounded-2xl border border-white/10 bg-surface/90 px-6 py-3 shadow-card backdrop-blur supports-[backdrop-filter]:bg-surface/70">
          <button aria-label="Home" onClick={() => onNavigate && onNavigate('home')} className="text-textSecondary hover:text-textPrimary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 3.172 2.25 12h1.5v8.25h5.25v-6H15v6h5.25V12h1.5L12 3.172z"/></svg>
          </button>
          <button aria-label="Learn" onClick={() => onNavigate && onNavigate('units')} className="text-textPrimary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.5 5.25h15v1.5h-15v-1.5zm0 6h15v1.5h-15v-1.5zm0 6h15v1.5h-15v-1.5z"/></svg>
          </button>
          <button aria-label="AI Assistant" onClick={() => alert('AI is coming soon')} className="text-textSecondary hover:text-textPrimary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M3 6a3 3 0 013-3h12a3 3 0 013 3v7a3 3 0 01-3 3H9l-4 3v-3H6a3 3 0 01-3-3V6z"/></svg>
          </button>
          <button aria-label="Courses" onClick={() => onNavigate && onNavigate('brands')} className="text-textSecondary hover:text-textPrimary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4 5.25h7.5V12H4V5.25zm8.5 0H20V12h-7.5V5.25zM4 12.75h7.5V19.5H4v-6.75zM12.5 12.75H20V19.5h-7.5v-6.75z"/></svg>
          </button>
          <button aria-label="Profile" onClick={() => onNavigate && onNavigate('profile')} className="text-textSecondary hover:text-textPrimary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm-7.5 9a7.5 7.5 0 0 1 15 0H4.5z"/></svg>
          </button>
          </div>
        </div>
      </nav>
    </div>
  )
}


