import React, { useState } from 'react'
import benzLogo from '../../assets/benz.png'

const benzOverviewContent = {
  hero: {
    title: "Mercedes Benz Brand Overview",
    subtitle: "The Best or Nothing",
    intro: "Mercedes Benz, a division of Daimler AG, is a German luxury automotive brand known for its premium vehicles, buses, and trucks. Since 1926, it has set the benchmark for automotive luxury, innovation, and performance.",
    progress: "Unit 1 of 10"
  },
  context: "Mercedes Benz represents the pinnacle of German automotive engineering, combining luxury, safety, and cutting-edge technology. With a global presence and a reputation for excellence, Mercedes-Benz continues to shape the future of mobility while maintaining its heritage of quality and prestige.",
  cards: [
    {
      title: "History & Legacy",
      content: "Founded by Karl Benz and Gottlieb Daimler, Mercedes-Benz has been at the forefront of automotive innovation for over a century. The brand introduced many firsts, including the first production diesel car and the first safety body.",
      bullets: [
        "Founded in 1926 through the merger of Benz & Cie. and Daimler-Motoren-Gesellschaft",
        "Introduced the first production diesel car, the 260D, in 1936",
        "Pioneered safety innovations like the crumple zone and anti-lock brakes"
      ]
    },
    {
      title: "Brand Philosophy",
      content: "Mercedes-Benz stands for 'The Best or Nothing,' a commitment to excellence that permeates every vehicle they create. The brand combines luxury, performance, and innovation to deliver an unparalleled driving experience.",
      bullets: [
        "Commitment to 'First Move the World' philosophy",
        "Focus on sustainable luxury and innovation",
        "Emphasis on safety, comfort, and cutting-edge technology"
      ]
    },
    {
      title: "Iconic Models",
      content: "From the timeless 300 SL 'Gullwing' to the modern S-Class, Mercedes-Benz has created some of the most iconic vehicles in automotive history.",
      bullets: [
        "300 SL 'Gullwing' (1954)",
        "S-Class (1972 - present)",
        "G-Class (1979 - present)"
      ]
    },
    {
      title: "Innovation Leadership",
      content: "Mercedes-Benz has consistently led the automotive industry in technological advancements and safety innovations.",
      bullets: [
        "Pioneer in autonomous driving technology",
        "Leader in electric mobility with EQ lineup",
        "Advanced safety systems and driver assistance features"
      ]
    },
    {
      title: "Global Presence",
      content: "With production facilities and dealerships worldwide, Mercedes-Benz is a truly global brand with a strong presence in key markets.",
      bullets: [
        "Headquarters in Stuttgart, Germany",
        "Production in over 20 countries",
        "Sales in more than 200 countries"
      ]
    }
  ],
  facts: [
    "The Mercedes star represents the brand's dominance on land, sea, and air",
    "The 300 SL was the fastest production car of its time",
    "Mercedes-Benz invented the crumple zone in 1951",
    "The brand's EQ lineup represents 'Electric Intelligence'"
  ],
  quiz: [
    {
      question: "What does the Mercedes-Benz star symbolize?",
      options: [
        "The three elements of luxury, performance, and safety",
        "The brand's dominance on land, sea, and air",
        "The three founders of the company"
      ],
      correct: 1
    },
    {
      question: "When was the first Mercedes-Benz car produced?",
      options: [
        "1901",
        "1926",
        "1936"
      ],
      correct: 0
    },
    {
      question: "What was special about the 300 SL 'Gullwing'?",
      options: [
        "First car with fuel injection",
        "First car with a V8 engine",
        "First car with air conditioning"
      ],
      correct: 0
    }
  ]
}

export default function BenzOverviewUnit({ onNavigate, onBackToUnits, onNextUnit }) {
  const [answers, setAnswers] = useState({})
  const [activeSection, setActiveSection] = useState(null)

  const setAnswer = (qKey, option) => {
    if (answers[qKey] !== undefined) return; // Prevent changing answers after selection
    setAnswers(prev => ({ ...prev, [qKey]: option }))
  }

  const isSelected = (qKey, option) => answers[qKey] === option

  const getOptionClasses = (qKey, option, correctIndex) => {
    const selected = isSelected(qKey, option)
    const isCorrect = option === correctIndex
    const base = 'w-full rounded-xl border px-5 py-3.5 text-left text-sm transition-colors duration-200'
    
    if (answers[qKey] !== undefined) {
      // After selection
      if (isCorrect) return `${base} border-[#D4AF37] bg-[#1A1A1A] text-[#D4AF37]`
      if (selected) return `${base} border-[#B22222] bg-[#1A1A1A] text-[#B22222] line-through`
      return `${base} border-[#1F1F1F] bg-[#111111] text-[#666666]`
    }
    
    // Before selection
    return `${base} border-[#1F1F1F] bg-[#111111] text-white hover:border-[#D4AF37]/40`
  }

  const toggleSection = (key) => {
    setActiveSection(activeSection === key ? null : key)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-3xl px-6 pt-8 pb-24">
        {/* Hero Section */}
        <section className="text-center">
          <img src={benzLogo} alt="Mercedes-Benz" className="mx-auto h-20 w-20 object-contain" />
          <h1 className="mt-4 text-2xl font-semibold tracking-tight">{benzOverviewContent.hero.title}</h1>
          <p className="mt-2 text-base font-medium text-[#D4AF37]">{benzOverviewContent.hero.subtitle}</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#B0B0B0]">
            {benzOverviewContent.hero.intro}
          </p>
          <div className="mt-2 text-xs text-[#D4AF37]">{benzOverviewContent.hero.progress}</div>
        </section>

        <div className="my-6 h-px w-full bg-[#1F1F1F]" />

        {/* Context Section */}
        <section>
          <p className="text-sm leading-relaxed text-[#B0B0B0]">
            {benzOverviewContent.context}
          </p>
        </section>

        <div className="my-6 h-px w-full bg-[#1F1F1F]" />

        {/* Cards Section */}
        <section>
          <h2 className="text-sm font-medium tracking-wide text-[#D4AF37]">Brand Insights</h2>
          <div className="mt-3 space-y-3">
            {benzOverviewContent.cards.map((card, index) => {
              const key = `card-${index}`
              const open = activeSection === key
              return (
                <div key={key} className="rounded-2xl border border-[#1F1F1F] bg-[#111111]">
                  <button
                    className="flex w-full items-center justify-between px-4 py-3 text-left"
                    onClick={() => toggleSection(key)}
                  >
                    <span className="text-sm text-white">{card.title}</span>
                    <svg className={`h-4 w-4 text-[#D4AF37] transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.855a.75.75 0 111.08 1.04l-4.24 4.4a.75.75 0 01-1.08 0l-4.24-4.4a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
                    </svg>
                  </button>
                  {open && (
                    <div className="border-t border-[#1F1F1F] px-4 py-3">
                      <p className="mb-3 text-sm text-[#B0B0B0]">{card.content}</p>
                      <ul className="list-disc pl-5 text-sm text-[#B0B0B0]">
                        {card.bullets.map((bullet, i) => (
                          <li key={i} className="mb-1">{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        <div className="my-6 h-px w-full bg-[#1F1F1F]" />

        {/* Fun Facts Section */}
        <section>
          <h2 className="text-sm font-medium tracking-wide text-[#D4AF37]">Fun Facts</h2>
          <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
            {benzOverviewContent.facts.map((fact, idx) => (
              <div key={idx} className="min-w-[240px] rounded-2xl border border-[#D4AF37]/40 bg-[#111111] p-4 text-sm text-white">
                {fact}
              </div>
            ))}
          </div>
        </section>

        <div className="my-8 h-px w-full bg-[#1F1F1F]" />

        {/* Quiz Section */}
        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-[#D4AF37]">Knowledge Check</h2>
          <div className="space-y-6">
            {benzOverviewContent.quiz.map((q, qIndex) => (
              <div key={`q-${qIndex}`}>
                <div className="mb-2 text-sm font-medium text-white">{q.question}</div>
                <div className="space-y-2">
                  {q.options.map((opt, optIndex) => (
                    <button
                      key={`opt-${qIndex}-${optIndex}`}
                      onClick={() => setAnswer(`q${qIndex}`, optIndex)}
                      className={getOptionClasses(`q${qIndex}`, optIndex, q.correct)}
                      disabled={answers[`q${qIndex}`] !== undefined}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {answers[`q${qIndex}`] !== undefined && (
                  <p className="text-xs text-[#D4AF37] mt-2">
                    {answers[`q${qIndex}`] === q.correct ? '✓ ' : '✗ '}
                    {q.explanation || (answers[`q${qIndex}`] === q.correct ? 'Correct!' : 'Incorrect. ' + (q.options[q.correct] ? `The correct answer is: ${q.options[q.correct]}` : ''))}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer Actions */}
        <div className="mt-10 flex flex-col space-y-3">
          <button
            onClick={() => onNextUnit?.()}
            className="w-full rounded-xl bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-black shadow-lg transition-transform hover:scale-[1.02] active:scale-95"
          >
            Next Unit → Models & Series
          </button>
          <button
            onClick={() => onBackToUnits?.()}
            className="w-full rounded-xl border border-[#D4AF37] bg-transparent px-6 py-3.5 text-sm font-semibold text-[#D4AF37] transition-transform hover:scale-[1.02] active:scale-95"
          >
            Back to Units
          </button>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <nav className="fixed inset-x-0 bottom-0 z-10">
        <div className="mx-auto max-w-3xl px-4 pb-4">
          <div className="mx-auto flex items-center justify-between rounded-2xl border border-white/10 bg-[#111111]/90 px-6 py-3 shadow-card backdrop-blur supports-[backdrop-filter]:bg-[#111111]/70">
            <button
              aria-label="Home"
              onClick={() => onNavigate && onNavigate('home')}
              className="text-[#B0B0B0] hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 3.172 2.25 12h1.5v8.25h5.25v-6H15v6h5.25V12h1.5L12 3.172z"/>
              </svg>
            </button>
            <button
              aria-label="Learn"
              onClick={() => onNavigate && onNavigate('units')}
              className="text-[#D4AF37]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M4.5 5.25h15v1.5h-15v-1.5zm0 6h15v1.5h-15v-1.5zm0 6h15v1.5h-15v-1.5z"/>
              </svg>
            </button>
            <button
              aria-label="AI Assistant"
              onClick={() => onNavigate && onNavigate('ai')}
              className="text-[#B0B0B0] hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M3 6a3 3 0 013-3h12a3 3 0 013 3v7a3 3 0 01-3 3H9l-4 3v-3H6a3 3 0 01-3-3V6z"/>
              </svg>
            </button>
            <button
              aria-label="Courses"
              onClick={() => onNavigate && onNavigate('brands')}
              className="text-[#B0B0B0] hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M4 5.25h7.5V12H4V5.25zm8.5 0H20V12h-7.5V5.25zM4 12.75h7.5V19.5H4v-6.75zM12.5 12.75H20V19.5h-7.5v-6.75z"/>
              </svg>
            </button>
            <button
              aria-label="Profile"
              onClick={() => onNavigate && onNavigate('profile')}
              className="text-[#B0B0B0] hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm-7.5 9a7.5 7.5 0 0 1 15 0H4.5z"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
