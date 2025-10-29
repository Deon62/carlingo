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
export const bmwDesignAerodynamicsContent = {
  hero: {
    title: 'BMW  Design & Aerodynamics',
    subtitle: 'Sculpted precision that moves even when standing still.',
    intro:
      'BMW design balances emotion with engineering. Every curve, crease, and contour has a purpose - from cooling air to visual flow.',
    unitProgress: 'Unit 4 of 10',
  },
  context: {
    title: 'Design Philosophy',
    body:
      'Design and aerodynamics form the visual heartbeat of BMW. The brand\'s design language - from the Hofmeister kink to the kidney grille - evolves with function. Airflow, stability, and emotion are fused into one philosophy: form follows performance.',
  },
  sections: [
    {
      key: 'iconic',
      title: 'Iconic Design Language',
      summary: 'BMW\'s signature shapes and visual cues.',
      details:
        'BMW\'s design DNA includes hallmarks like the kidney grille, twin headlights, and Hofmeister kink - all contributing to brand recognition. Each redesign refines the proportions but never breaks the identity.',
      bullets: [
        { label: 'Traits', value: 'Proportional balance, recognizable face, emotional stance' },
        { label: 'Notable models', value: 'BMW E30, G20 3 Series, i8' },
      ],
    },
    {
      key: 'aerodynamic',
      title: 'Aerodynamic Efficiency',
      summary: 'Performance through airflow.',
      details:
        'BMW engineers design cars in wind tunnels to minimize drag and lift while maximizing stability. Active air flaps, smooth underbodies, and adaptive spoilers improve efficiency and handling.',
      bullets: [
        { label: 'Traits', value: 'Active aerodynamics, reduced drag (as low as Cd 0.23), stability at speed' },
        { label: 'Notable models', value: 'i4, 8 Series, X6' },
      ],
    },
    {
      key: 'evolution',
      title: 'Design Evolution',
      summary: 'From classic to futuristic.',
      details:
        'From the clean lines of the 1970s to today\'s digital surfacing, BMW design evolves with technology and taste. The balance of aggression and elegance defines each generation.',
      bullets: [
        { label: 'Traits', value: 'Consistent proportion, new materials, evolving grilles' },
        { label: 'Notable models', value: 'E39 5 Series, iX, Concept 8' },
      ],
    },
    {
      key: 'sustainable',
      title: 'BMW i and Sustainable Design',
      summary: 'Shaping the future responsibly.',
      details:
        'The BMW i series introduces sustainability into design - lightweight carbon fiber, recycled materials, and efficient aerodynamics. Beauty meets responsibility without compromise.',
      bullets: [
        { label: 'Traits', value: 'Recycled interiors, aerodynamic purity, futuristic form' },
        { label: 'Notable models', value: 'i3, i8, iX Flow' },
      ],
    },
    {
      key: 'mdivision',
      title: 'M Division Aerodynamics',
      summary: 'Airflow engineered for performance.',
      details:
        'M cars use aggressive body kits, vents, and diffusers not just for looks but for downforce and cooling. Every fin, duct, and flare is a function-first design.',
      bullets: [
        { label: 'Traits', value: 'High-speed stability, enhanced cooling, reduced lift' },
        { label: 'Notable models', value: 'M4 CSL, M2, M5 Competition' },
      ],
    },
  ],
  facts: [
    'The Hofmeister kink first appeared in 1961 on the BMW 1500.',
    'BMW i8\'s body has a drag coefficient of just 0.26.',
    'M models are tested in the same wind tunnels as BMW race cars.',
    'Some BMW concept cars use color-changing paint - like the iX Flow (E Ink).',
  ],
  quiz: {
    q1: {
      text: 'What is the purpose of the Hofmeister kink?',
      options: ['Decorative detail', 'Structural reinforcement and signature design cue', 'Air intake'],
      correct: 'Structural reinforcement and signature design cue',
      explanation: 'The Hofmeister kink is both a structural element and a signature BMW design cue since 1961.',
    },
    q2: {
      text: 'Which BMW model pioneered active aerodynamics?',
      options: ['BMW i8', 'BMW M3 E46', 'BMW X5'],
      correct: 'BMW i8',
      explanation: 'The i8 introduced advanced active aerodynamics to optimize efficiency and performance.',
    },
    q3: {
      text: 'What does BMW\'s design philosophy emphasize?',
      options: ['Form follows performance', 'Minimalism only', 'Random artistic shapes'],
      correct: 'Form follows performance',
      explanation: 'BMW\'s design mantra is "form follows performance" - beauty driven by function.',
    },
  },
}

export default function BMWDesignAerodynamicsUnit({ onNavigate, onBackToUnits }) {
  const [openKey, setOpenKey] = useState(null)
  const [answers, setAnswers] = useState({})

  const toggle = (key) => setOpenKey((prev) => (prev === key ? key : key)) // single-open
  const setAnswer = (q, a) => setAnswers((prev) => ({ ...prev, [q]: a }))
  const isCorrect = (q, a) => bmwDesignAerodynamicsContent.quiz[q].correct === a

  const hero = bmwDesignAerodynamicsContent.hero
  const context = bmwDesignAerodynamicsContent.context
  const sections = bmwDesignAerodynamicsContent.sections
  const facts = bmwDesignAerodynamicsContent.facts
  const quiz = bmwDesignAerodynamicsContent.quiz

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
          <h2 className="text-sm font-medium tracking-wide" style={{ color: COLORS.accent }}>Design & Aerodynamics</h2>
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
            onClick={() => console.log('Navigate: Technology & Innovation')}
            className="w-full rounded-xl px-4 py-3 text-sm font-semibold"
            style={{ backgroundColor: COLORS.accent, color: COLORS.background, boxShadow: '0 6px 16px rgba(0,0,0,0.5)' }}
          >
            Next Unit - Technology & Innovation
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm-7.5 9a7.5 7.5 0 0 1 15 0H4.5z"/></svg>
          </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
