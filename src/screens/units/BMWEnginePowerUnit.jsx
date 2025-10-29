import React, { useState } from 'react'
import bmwLogo from '../../assets/bmw.png'

// Palette aligned to BMW Overview and Models units
const COLORS = {
  background: '#000000',
  surface: '#111111',
  text: '#FFFFFF',
  subtext: '#B0B0B0',
  accent: '#D4AF37',
  divider: '#1F1F1F',
  correct: '#FFD700',
  wrong: '#B22222',
}

// Content is data-driven for easy editing
export const bmwEnginePowerContent = {
  hero: {
    title: 'BMW - Engine & Power',
    subtitle: 'Precision engineering beneath the hood.',
    intro:
      'From inline-sixes to hybrid systems, BMW\'s engines are designed for balance, response, and performance. Every detail - from turbocharging to exhaust tuning - contributes to the brand\'s signature driving feel.',
    unitProgress: 'Unit 3 of 10',
  },
  context: {
    title: 'Engine Philosophy',
    body:
      'BMW\'s engine philosophy revolves around the concept of "Efficient Dynamics" - maximum output with minimal waste. Whether it\'s a smooth inline-6 or a twin-turbo V8, each engine is tuned to deliver a perfect 50:50 weight balance and linear power delivery.',
  },
  sections: [
    {
      key: 'inline',
      title: 'Inline Engines (I3, I4, I6)',
      summary: 'BMW\'s heritage in balanced inline engines.',
      details:
        'Inline engines are BMW\'s signature design, known for smoothness and balance. The iconic Inline-6 has powered everything from classic 3 Series models to modern M cars.',
      bullets: [
        { label: 'Key traits', value: 'Naturally balanced, compact, linear power delivery' },
        { label: 'Notable models', value: 'BMW 2002, E46 M3, M340i' },
      ],
    },
    {
      key: 'vengines',
      title: 'V Engines (V8, V12)',
      summary: 'For power and prestige.',
      details:
'BMW\'s V8 and V12 engines power their flagship models, blending luxury and aggression. The 6.6L V12 from the 7 Series once rivaled Rolls-Royce refinement.',
      bullets: [
        { label: 'Key traits', value: 'Deep torque, refined feel, high-end models' },
        { label: 'Notable models', value: 'M5, 750Li, M8 Competition' },
      ],
    },
    {
      key: 'turbo',
      title: 'Turbocharging & Efficiency',
      summary: 'Power with purpose.',
      details:
        'BMW embraced turbocharging early to achieve both performance and lower emissions. The TwinPower Turbo system uses advanced turbine geometry for instant response.',
      bullets: [
        { label: 'Key traits', value: 'Efficiency, reduced lag, adaptive performance' },
        { label: 'Notable models', value: '330i, X5 xDrive40i, M240i' },
      ],
    },
    {
      key: 'hybrid',
      title: 'Hybrid & Electric Powertrains',
      summary: 'The future of performance.',
      details:
        'BMW\'s i-series and plug-in hybrids fuse performance and sustainability. Electric torque provides instant acceleration while maintaining BMW\'s handling DNA.',
      bullets: [
        { label: 'Key traits', value: 'Zero delay torque, low emissions, tech integration' },
        { label: 'Notable models', value: 'i4 M50, i7 xDrive60, XM hybrid' },
      ],
    },
    {
      key: 'mdivision',
      title: 'M Division Power',
      summary: 'Racing heart for the road.',
      details:
        'BMW M engines are hand-built masterpieces — lightweight, high-revving, and engineered for precision. Turbocharged inline-6 and V8 units dominate modern M cars.',
      bullets: [
        { label: 'Key traits', value: 'Motorsport-tuned, precision cooling, power density' },
        { label: 'Notable models', value: 'M3 G80, M5 CS, M2 Competition' },
      ],
    },
  ],
  facts: [
    'BMW\'s first turbocharged engine appeared in the 1973 2002 Turbo - one of the earliest in Europe.',
    'The BMW M5 E60 featured a V10 inspired by Formula 1 technology.',
    'Every M engine is tested for 24 hours before approval.',
    'The i4 M50 delivers 536 horsepower — matching traditional M3 power.',
  ],
  quiz: {
    q1: {
      text: 'Which engine layout is BMW most famous for?',
      options: ['Inline-6', 'V6', 'Flat-4'],
      correct: 'Inline-6',
      explanation: 'BMW is most famous for its inline-6 engines, known for their perfect balance and smooth power delivery.',
    },
    q2: {
      text: 'What is BMW\'s "Efficient Dynamics" philosophy about?',
      options: ['Combining performance with efficiency', 'Reducing top speed', 'Simplifying design'],
      correct: 'Combining performance with efficiency',
      explanation: 'Efficient Dynamics focuses on maximizing output while minimizing waste and emissions.',
    },
    q3: {
      text: 'Which BMW model introduced the first turbo engine?',
      options: ['BMW 2002 Turbo', 'BMW M3', 'BMW 7 Series'],
      correct: 'BMW 2002 Turbo',
      explanation: 'The 2002 Turbo was one of the first European production cars with a turbocharged engine in 1973.',
    },
  },
}

export default function BMWEnginePowerUnit({ onNavigate, onBackToUnits }) {
  const [openKey, setOpenKey] = useState(null)
  const [answers, setAnswers] = useState({})

  const toggle = (key) => setOpenKey((prev) => (prev === key ? key : key)) // single-open
  const setAnswer = (q, a) => setAnswers((prev) => ({ ...prev, [q]: a }))
  const isCorrect = (q, a) => bmwEnginePowerContent.quiz[q].correct === a

  const hero = bmwEnginePowerContent.hero
  const context = bmwEnginePowerContent.context
  const sections = bmwEnginePowerContent.sections
  const facts = bmwEnginePowerContent.facts
  const quiz = bmwEnginePowerContent.quiz

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.background, color: COLORS.text }}>
      <div className="mx-auto w-full max-w-3xl px-6 pt-6 pb-24">
        {/* HERO */}
        <section className="text-center">
          <img src={bmwLogo} alt="BMW" className="mx-auto h-16 w-16 object-contain" />
          <h1 className="mt-3 text-2xl font-semibold">{hero.title}</h1>
          <p className="mt-1 text-sm" style={{ color: COLORS.subtext }}>{hero.subtitle}</p>
          <p className="mt-4 text-sm" style={{ color: COLORS.subtext }}>{hero.intro}</p>
          <div className="mt-2 text-xs" style={{ color: COLORS.subtext }}>{hero.unitProgress}</div>
        </section>

        {/* Divider */}
        <div className="my-6 h-px w-full" style={{ backgroundColor: COLORS.divider }} />

        {/* CONTEXT */}
        <section>
          <h2 className="text-sm font-medium tracking-wide" style={{ color: COLORS.accent }}>{context.title}</h2>
          <div className="mt-3 rounded-2xl border p-4" style={{ backgroundColor: COLORS.surface, borderColor: COLORS.divider }}>
            <p className="text-sm" style={{ color: COLORS.subtext }}>{context.body}</p>
          </div>
        </section>

        {/* Divider */}
        <div className="my-6 h-px w-full" style={{ backgroundColor: COLORS.divider }} />

        {/* COLLAPSIBLE CARDS */}
        <section>
          <h2 className="text-sm font-medium tracking-wide" style={{ color: COLORS.accent }}>Engine & Power</h2>
          <div className="mt-3 space-y-3">
            {sections.map((s) => {
              const open = openKey === s.key
              return (
                <div key={s.key} className="rounded-2xl border" style={{ backgroundColor: COLORS.surface, borderColor: COLORS.divider }}>
                  <button
                    aria-expanded={open}
                    className="flex w-full items-center justify-between px-4 py-3 text-left"
                    onClick={() => toggle(s.key)}
                  >
                    <div>
                      <div className="text-sm font-medium" style={{ color: COLORS.accent }}>{s.title}</div>
                      <div className="text-xs" style={{ color: COLORS.subtext }}>{s.summary}</div>
                    </div>
                    <svg className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} style={{ color: COLORS.accent }} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.855a.75.75 0 111.08 1.04l-4.24 4.4a.75.75 0 01-1.08 0l-4.24-4.4a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
                  </button>
                  {open && (
                    <div className="border-t px-4 py-3" style={{ borderColor: COLORS.divider }}>
                      <p className="text-sm" style={{ color: COLORS.subtext }}>{s.details}</p>
                      {/* Image placeholder slots */}
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }} />
                        <div className="h-16 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }} />
                        <div className="h-16 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }} />
                      </div>
                      <ul className="mt-3 space-y-1 text-sm" style={{ color: COLORS.subtext }}>
                        {s.bullets.map((b) => (
                          <li key={b.label}><span className="text-[12px]" style={{ color: COLORS.text }}>{b.label}:</span> {b.value}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Divider */}
        <div className="my-6 h-px w-full" style={{ backgroundColor: COLORS.divider }} />

        {/* FUN FACTS */}
        <section>
          <h2 className="text-sm font-medium tracking-wide" style={{ color: COLORS.accent }}>Fun Facts</h2>
          <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
            {facts.map((fact, idx) => (
              <div key={idx} className="min-w-[240px] rounded-2xl border p-4 text-sm" style={{ backgroundColor: COLORS.surface, borderColor: COLORS.divider, color: COLORS.text }}>
                {fact}
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="my-6 h-px w-full" style={{ backgroundColor: COLORS.divider }} />

        {/* QUIZ */}
        <section>
          <h2 className="text-sm font-medium tracking-wide" style={{ color: COLORS.accent }}>Knowledge Check</h2>
          <div className="mt-3 space-y-4">
            {['q1', 'q2', 'q3'].map((q) => {
              const item = quiz[q]
              return (
                <div key={q}>
                  <div className="text-xs" style={{ color: COLORS.subtext }}>{item.text}</div>
                  <div className="mt-2 grid grid-cols-1 gap-2">
                    {item.options.map((opt) => {
                      const selected = answers[q] === opt
                      const correct = isCorrect(q, opt)
                      let border = COLORS.divider
                      if (selected && correct) border = COLORS.correct
                      else if (selected && !correct) border = COLORS.wrong
                      return (
                        <button
                          key={opt}
                          onClick={() => setAnswer(q, opt)}
                          aria-pressed={selected}
                          className="w-full rounded-xl border px-4 py-3 text-left text-sm transition-colors"
                          style={{ borderColor: border, backgroundColor: COLORS.surface, color: COLORS.text }}
                        >
                          {opt}
                        </button>
                      )
                    })}
                  </div>
                  {answers[q] && (
                    <div className="mt-2 text-xs" style={{ color: COLORS.subtext }}>{item.explanation}</div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* FOOTER */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={() => console.log('Navigate: Design & Aerodynamics')}
            className="w-full rounded-xl px-4 py-3 text-sm font-semibold"
            style={{ backgroundColor: COLORS.accent, color: COLORS.background, boxShadow: '0 6px 16px rgba(0,0,0,0.5)' }}
          >
            Next Unit - Design & Aerodynamics
          </button>
          <button
            onClick={() => { console.log('Back to Units'); onBackToUnits && onBackToUnits() }}
            className="w-full rounded-xl border px-4 py-3 text-sm font-medium"
            style={{ borderColor: COLORS.accent, color: COLORS.text }}
          >
            Back to Units
          </button>
        </div>
      </div>

      {/* Bottom Navbar (consistent with other units) */}
      <nav className="fixed inset-x-0 bottom-0 z-10">
        <div className="mx-auto max-w-3xl px-4 pb-4">
          <div className="mx-auto flex items-center justify-between rounded-2xl border px-6 py-3 shadow-card backdrop-blur supports-[backdrop-filter]:bg-surface/70" style={{ backgroundColor: COLORS.surface, borderColor: COLORS.divider }}>
            <button aria-label="Home" onClick={() => onNavigate && onNavigate('home')} className="text-textSecondary hover:text-textPrimary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 3.172 2.25 12h1.5v8.25h5.25v-6H15v6h5.25V12h1.5L12 3.172z"/></svg>
            </button>
            <button aria-label="Learn" onClick={() => onNavigate && onNavigate('units')} className="text-textPrimary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.5 5.25h15v1.5h-15v-1.5zm0 6h15v1.5h-15v-1.5zm0 6h15v1.5h-15v-1.5z"/></svg>
            </button>
            <button aria-label="AI Assistant" onClick={() => onNavigate && onNavigate('ai')} className="text-textSecondary hover:text-textPrimary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M3 6a3 3 0 013-3h12a3 3 0 013 3v7a3 3 0 01-3 3H9l-4 3v-3H6a3 3 0 01-3-3V6z"/></svg>
            </button>
            <button aria-label="Courses" onClick={() => onNavigate && onNavigate('brands')} className="text-textSecondary hover:text-textPrimary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4 5.25h7.5V12H4V5.25zm8.5 0H20V12h-7.5V5.25zM4 12.75h7.5V19.5H4v-6.75zM12.5 12.75H20V19.5h-7.5v-6.75z"/></svg>
            </button>
            <button aria-label="Profile" onClick={() => onNavigate && onNavigate('profile')} className="text-textSecondary hover:text-textPrimary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-7.5 9a7.5 7.5 0 0115 0H4.5z"/></svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
