import React, { useMemo, useState } from 'react'
import bmwLogo from '../../assets/bmw.png'

// Palette aligned to BMW Overview unit
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

// Content is data-driven so it can be edited/swapped easily later
export const bmwModelsSeriesContent = {
  hero: {
    title: 'BMW  Models & Series',
    subtitle: 'Understand the lineup: series, SUVs, roadsters, EVs, and the M division.',
    intro:
      'BMW’s naming logic is simple and powerful: Series 1–8 for cars by size/class; X for SUVs and crossovers; Z for roadsters; i for electrified vehicles; and M for motorsport-tuned performance. The range balances luxury, sport, and sustainability.',
    unitProgress: 'Unit 2 of 10',
  },
  context: {
    title: 'Lineup Context',
    body:
      'Over time, BMW expanded from compact and executive sedans into grand tourers and SUVs, and now leads electrification with the i-series — while M keeps the brand’s racing DNA alive.',
  },
  sections: [
    {
      key: 'series1',
      title: '1 Series',
      summary: 'Compact hatchback offering the BMW feel in a smaller package.',
      details:
        'Years: 2004–present. Earlier generations were RWD; current versions are primarily FWD-based. Ideal for city living without sacrificing driving fun.',
      bullets: [
        { label: 'Years active', value: '2004–present' },
        { label: 'Notable models', value: '116i, 118i, M135i' },
        { label: 'Who it’s for', value: 'Urban drivers wanting a compact BMW' },
      ],
      image: null,
    },
    {
      key: 'series2',
      title: '2 Series',
      summary: 'Compact coupe, Gran Coupe, and Active Tourer variants.',
      details:
        'Combines engaging dynamics with daily practicality. Coupe is driver-focused; Gran Coupe adds usability; Active Tourer prioritizes space and comfort.',
      bullets: [
        { label: 'Years active', value: '2013–present (varies by body style)' },
        { label: 'Notable models', value: '218i, M240i' },
        { label: 'Who it’s for', value: 'Drivers balancing fun and utility' },
      ],
      image: null,
    },
    {
      key: 'series3',
      title: '3 Series',
      summary: 'The benchmark sports sedan for balance and performance.',
      details:
        'Since 1975, the 3 Series has defined the sporty sedan formula. Sharp handling, useful tech, and strong powertrains make it the reference point.',
      bullets: [
        { label: 'Years active', value: '1975–present' },
        { label: 'Notable models', value: '320i, 330i, M3' },
        { label: 'Who it’s for', value: 'Enthusiasts wanting a do-it-all sedan' },
      ],
      image: null,
    },
    {
      key: 'series4',
      title: '4 Series',
      summary: 'Sleek coupes and Gran Coupes derived from the 3 Series.',
      details:
        'Distinct styling and lower rooflines bring a sportier feel. The Gran Coupe adds practicality with four doors and a fastback silhouette.',
      bullets: [
        { label: 'Years active', value: '2013–present' },
        { label: 'Notable models', value: '420i, M440i' },
        { label: 'Who it’s for', value: 'Drivers prioritizing style and agility' },
      ],
      image: null,
    },
    {
      key: 'series5',
      title: '5 Series',
      summary: 'Executive sedan blending comfort and punch.',
      details:
        'A staple of business-class luxury with precise handling. Offers refined cabins, robust powertrains, and driver-assistance tech.',
      bullets: [
        { label: 'Years active', value: '1972–present' },
        { label: 'Notable models', value: '520i, 530d, M5' },
        { label: 'Who it’s for', value: 'Executives who love to drive' },
      ],
      image: null,
    },
    {
      key: 'series6',
      title: '6 Series',
      summary: 'Luxury GT: coupe, convertible, and Gran Coupe.',
      details:
        'Elegance and long-distance comfort define the 6 Series. Gran Coupe added practicality without losing its grand touring soul.',
      bullets: [
        { label: 'Years active', value: '1976–1989; 2003–2018' },
        { label: 'Notable models', value: '640i, 650i, M6' },
        { label: 'Who it’s for', value: 'Grand tourer fans' },
      ],
      image: null,
    },
    {
      key: 'series7',
      title: '7 Series',
      summary: 'The flagship luxury sedan with cutting-edge tech.',
      details:
        'Competes with S-Class and A8. Offers advanced comfort features, driver assistance, and electrified options including the i7.',
      bullets: [
        { label: 'Years active', value: '1977–present' },
        { label: 'Notable models', value: '740i, 760Li, i7' },
        { label: 'Who it’s for', value: 'Luxury-first buyers' },
      ],
      image: null,
    },
    {
      key: 'series8',
      title: '8 Series',
      summary: 'High-end grand tourer in coupe, convertible, and GC forms.',
      details:
        'Brings power and opulence together. The M8 takes the platform to track-capable extremes without losing comfort.',
      bullets: [
        { label: 'Years active', value: '1989–1999; 2018–present' },
        { label: 'Notable models', value: '840i, M850i, M8' },
        { label: 'Who it’s for', value: 'Buyers seeking power and prestige' },
      ],
      image: null,
    },
    {
      key: 'xseries',
      title: 'X Series (SUVs & Crossovers)',
      summary: 'From compact X1 to full-size X7 — plus the XM performance SUV.',
      details:
        'SUV lineup spans city-friendly to three-row luxury. Coupe-styled X4 and X6 emphasize design; XM showcases hybrid M performance.',
      bullets: [
        { label: 'Years active', value: '1999–present (X5 started the line)' },
        { label: 'Notable models', value: 'X1, X2, X3, X4, X5, X6, X7, XM' },
        { label: 'Who it’s for', value: 'Drivers needing space and versatility' },
      ],
      image: null,
      table: [
        ['X1', 'Compact'],
        ['X2', 'Sporty compact'],
        ['X3', 'Mid-size all-rounder'],
        ['X4', 'Coupe-styled X3'],
        ['X5', 'Classic leader'],
        ['X6', 'Coupe-styled X5'],
        ['X7', 'Full-size luxury'],
        ['XM', 'M hybrid flagship'],
      ],
    },
    {
      key: 'zseries',
      title: 'Z Series (Roadsters)',
      summary: 'Roadsters that celebrate open-top driving.',
      details:
        'From the innovative Z1 to the iconic Z3 and modern Z4, these models emphasize lightweight fun and grand-touring charm.',
      bullets: [
        { label: 'Years active', value: '1989–present (varies by model)' },
        { label: 'Notable models', value: 'Z1, Z3, Z4' },
        { label: 'Who it’s for', value: 'Drivers who love open-air engagement' },
      ],
      image: null,
    },
    {
      key: 'iseries',
      title: 'i Series (Electric Revolution)',
      summary: 'BMW’s vision for electrified luxury and design.',
      details:
        'From the pioneering i3 to the i4, iX, and i7, the i series highlights sustainability and progressive design.',
      bullets: [
        { label: 'Years active', value: '2013–present' },
        { label: 'Notable models', value: 'i3, i4, iX, i7' },
        { label: 'Who it’s for', value: 'Sustainability-minded drivers' },
      ],
      image: null,
    },
    {
      key: 'mseries',
      title: 'M Series (Motorsport Division)',
      summary: 'High-performance models with track DNA and precision.',
      details:
        'The M badge transforms everyday BMWs into serious performance machines without losing daily usability.',
      bullets: [
        { label: 'Years active', value: '1970s–present' },
        { label: 'Notable models', value: 'M2, M3, M4, M5, M8, X5 M, XM' },
        { label: 'Who it’s for', value: 'Enthusiasts seeking peak performance' },
      ],
      image: null,
    },
    {
      key: 'special',
      title: 'Concept & Special Models',
      summary: 'Vision projects, Art Cars, and limited editions.',
      details:
        'Vision Next 100 and CSL Hommage explore future design; Art Cars celebrate culture; limited runs like M4 CSL and 3.0 CSL push engineering limits.',
      bullets: [
        { label: 'Examples', value: 'Vision Next 100, CSL Hommage, Art Cars, M4 CSL, 3.0 CSL' },
        { label: 'Focus', value: 'Experimental design and engineering' },
        { label: 'Who it’s for', value: 'Collectors and design enthusiasts' },
      ],
      image: null,
    },
  ],
  identityCards: [
    { title: 'Naming logic', value: 'Numbers (1–8), X for SUVs, Z for roadsters' },
    { title: 'M division', value: 'Motorsport-derived performance' },
    { title: 'i Division (electric)', value: 'Electrified luxury and design' },
  ],
  facts: [
    'The 3 Series is BMW’s best-selling model line worldwide.',
    'The X5 helped kickstart the luxury performance SUV trend in 1999.',
    'The i3 pioneered sustainable materials like carbon fiber-reinforced plastic.',
  ],
  quiz: {
    q1: {
      text: 'Which series is BMW’s compact hatchback?',
      options: ['1 Series', '3 Series', '5 Series'],
      correct: '1 Series',
      explanation: 'The 1 Series is the compact hatchback line; 3 and 5 are sedans of higher classes.',
    },
    q2: {
      text: "What does the 'X' prefix indicate?",
      options: ['Roadster', 'SUV/Crossover', 'Coupe'],
      correct: 'SUV/Crossover',
      explanation: 'BMW uses X for SUVs/crossovers (e.g., X1–X7, XM).',
    },
    q3: {
      text: 'Which series is the flagship luxury sedan?',
      options: ['3 Series', '7 Series', '8 Series'],
      correct: '7 Series',
      explanation: 'The 7 Series is BMW’s flagship sedan; 8 is a GT line.',
    },
  },
}

export default function BMWModelsSeriesUnit({ onNavigate, onBackToUnits }) {
  const [openKey, setOpenKey] = useState(null)
  const [answers, setAnswers] = useState({})

  const toggle = (key) => setOpenKey((prev) => (prev === key ? key : key)) // single-open
  const setAnswer = (q, a) => setAnswers((prev) => ({ ...prev, [q]: a }))
  const isCorrect = (q, a) => bmwModelsSeriesContent.quiz[q].correct === a

  const hero = bmwModelsSeriesContent.hero
  const context = bmwModelsSeriesContent.context
  const sections = bmwModelsSeriesContent.sections
  const identityCards = bmwModelsSeriesContent.identityCards
  const facts = bmwModelsSeriesContent.facts
  const quiz = bmwModelsSeriesContent.quiz

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
          <h2 className="text-sm font-medium tracking-wide" style={{ color: COLORS.accent }}>Series & Models</h2>
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
                      {/* Image placeholder slots – swap with real images later */}
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

                      {s.table && (
                        <div className="mt-3 overflow-hidden rounded-xl border" style={{ borderColor: COLORS.divider }}>
                          <div className="grid grid-cols-2">
                            {s.table.map(([name, desc]) => (
                              <div key={name} className="border-t border-r px-3 py-2 text-xs" style={{ borderColor: COLORS.divider, color: COLORS.subtext }}>
                                <span className="mr-2 text-[12px]" style={{ color: COLORS.text }}>{name}</span>
                                {desc}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Divider */}
        <div className="my-6 h-px w-full" style={{ backgroundColor: COLORS.divider }} />

        {/* CORE IDENTITY CARDS */}
        <section>
          <h2 className="text-sm font-medium tracking-wide" style={{ color: COLORS.accent }}>Core Identity</h2>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {identityCards.map((c) => (
              <div key={c.title} className="rounded-2xl border p-4" style={{ backgroundColor: COLORS.surface, borderColor: COLORS.divider }}>
                <div className="text-xs" style={{ color: COLORS.subtext }}>{c.title}</div>
                <div className="mt-1 text-sm" style={{ color: COLORS.text }}>{c.value}</div>
              </div>
            ))}
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
            onClick={() => console.log('Navigate: Engine & Power')}
            className="w-full rounded-xl px-4 py-3 text-sm font-semibold"
            style={{ backgroundColor: COLORS.accent, color: COLORS.background, boxShadow: '0 6px 16px rgba(0,0,0,0.5)' }}
          >
            Next Unit → Engine & Power
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


