import React, { useState } from 'react';
import audiLogo from '../../assets/audi.png';

const audiOverviewContent = {
  hero: {
    title: 'Audi  (Vorsprung durch Technik)',
    subtitle: 'Advancement through Technology',
    intro: 'Audi combines luxury, performance, and cutting-edge technology to create vehicles that set new standards in the automotive industry.',
    unitProgress: 'Unit 1 of 10'
  },
  history: [
    {
      key: 'origins',
      title: 'Origins (1909–1930s)',
      content: 'Audi was founded by August Horch in 1909 after leaving his original company, Horch & Cie. The name "Audi" comes from the Latin translation of Horch ("to listen"). Early Audi models gained recognition for innovation in lightweight aluminum bodies and rally racing.'
    },
    {
      key: 'auto-union',
      title: 'Auto Union Era (1930s–1960s)',
      content: 'In 1932, Audi merged with Horch, DKW, and Wanderer, forming the Auto Union  represented by the four rings in Audi\'s logo. The company pioneered front-wheel drive technology during this period.'
    },
    {
      key: 'volkswagen',
      title: 'Volkswagen Acquisition (1960s–1980s)',
      content: 'Audi became part of the Volkswagen Group in 1965, marking the start of a modern era. Launch of the Audi 100 set new standards for efficiency and design.'
    },
    {
      key: 'modern',
      title: 'Modern Era (1990s–Today)',
      content: 'Audi emerged as a symbol of luxury, technology, and precision. With models like the A8, R8, and e-tron, the brand bridges performance and sustainability.'
    }
  ],
  philosophy: {
    quote: 'Vorsprung durch Technik',
    translation: 'Progress through technology',
    description: 'Audi\'s philosophy revolves around innovation, precision engineering, and sustainable mobility. Every model aims to balance performance, luxury, and cutting edge technology, reflecting a relentless pursuit of advancement.'
  },
  funFacts: [
    'The four rings in Audi\'s logo represent the merger of four companies: Audi, Horch, DKW, and Wanderer.',
    'Audi\'s Quattro all wheel drive changed rally racing forever.',
    'The Audi R8 shares technology with Lamborghini models under VW Group.',
    'Audi built one of the first fully aluminum car bodies in the 1990s.'
  ],
  quiz: [
    {
      question: 'What does Audi\'s slogan mean?',
      options: [
        'Speed through Strength',
        'Progress through Technology',
        'Luxury through Innovation'
      ],
      correct: 1
    },
    {
      question: 'The four rings in Audi\'s logo represent:',
      options: [
        'Four founders',
        'Four car wheels',
        'Four merged companies'
      ],
      correct: 2
    }
  ]
};

export default function AudiOverviewUnit({ onNavigate, onBackToUnits, onNextUnit }) {
  const [activeSection, setActiveSection] = useState(null);
  const [answers, setAnswers] = useState({});

  const toggleSection = (key) => {
    setActiveSection(activeSection === key ? null : key);
  };

  const setAnswer = (qKey, option) => {
    setAnswers(prev => ({ ...prev, [qKey]: option }));
  };

  const isSelected = (qKey, option) => answers[qKey] === option;

  const getOptionClasses = (qKey, option, correctIndex) => {
    const selected = isSelected(qKey, option);
    const isCorrect = option === correctIndex;
    const base = 'w-full rounded-xl border px-5 py-3.5 text-left text-sm transition-colors duration-200';
    
    if (answers[qKey] !== undefined) {
      // After submission
      if (isCorrect) return `${base} border-[#D4AF37] bg-[#1A1A1A] text-[#D4AF37]`;
      if (selected) return `${base} border-[#B22222] bg-[#1A1A1A] text-[#B22222] line-through`;
      return `${base} border-[#1F1F1F] bg-[#111111] text-[#666666]`;
    }
    
    // Before submission
    if (selected) return `${base} border-[#D4AF37] bg-[#1A1A1A] text-white`;
    return `${base} border-[#1F1F1F] bg-[#111111] text-white hover:border-[#D4AF37]/40`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-3xl px-6 pt-8 pb-24">
        {/* Hero Section */}
        <section className="text-center">
          <img src={audiLogo} alt="Audi" className="mx-auto h-20 w-20 object-contain" />
          <h1 className="mt-4 text-2xl font-semibold tracking-tight">{audiOverviewContent.hero.title}</h1>
          <p className="mt-2 text-base font-medium text-[#D4AF37]">{audiOverviewContent.hero.subtitle}</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#B0B0B0]">
            {audiOverviewContent.hero.intro}
          </p>
          <div className="mt-2 text-xs text-[#D4AF37]">{audiOverviewContent.hero.unitProgress}</div>
        </section>

        <div className="my-6 h-px w-full bg-[#1F1F1F]" />

        {/* Brand History */}
        <section>
          <h2 className="text-sm font-medium tracking-wide text-[#D4AF37]">Brand History & Legacy</h2>
          <div className="mt-3 space-y-3">
            {audiOverviewContent.history.map((item) => {
              const isOpen = activeSection === item.key;
              return (
                <div key={item.key} className="rounded-2xl border border-[#1F1F1F] bg-[#111111] overflow-hidden">
                  <button
                    className="flex w-full items-center justify-between px-4 py-3 text-left"
                    onClick={() => toggleSection(item.key)}
                  >
                    <span className="text-sm font-medium text-white">{item.title}</span>
                    <svg
                      className={`h-5 w-5 text-[#D4AF37] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="border-t border-[#1F1F1F] px-4 py-3">
                      <p className="text-sm text-[#B0B0B0]">{item.content}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <div className="my-6 h-px w-full bg-[#1F1F1F]" />

        {/* Brand Philosophy */}
        <section className="text-center">
          <h2 className="text-sm font-medium tracking-wide text-[#D4AF37]">Brand Philosophy</h2>
          <div className="mt-4 rounded-2xl border border-[#1F1F1F] bg-[#111111] p-6">
            <p className="text-xl font-medium text-[#D4AF37]">"{audiOverviewContent.philosophy.quote}"</p>
            <p className="mt-1 text-sm text-[#B0B0B0]">{audiOverviewContent.philosophy.translation}</p>
            <p className="mt-4 text-sm text-[#B0B0B0]">{audiOverviewContent.philosophy.description}</p>
          </div>
        </section>

        <div className="my-6 h-px w-full bg-[#1F1F1F]" />

        {/* Fun Facts */}
        <section>
          <h2 className="text-sm font-medium tracking-wide text-[#D4AF37]">Fun Facts</h2>
          <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
            {audiOverviewContent.funFacts.map((fact, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 rounded-xl border border-[#D4AF37]/40 bg-[#111111] p-4 text-sm text-white"
              >
                {fact}
              </div>
            ))}
          </div>
        </section>

        <div className="my-8 h-px w-full bg-[#1F1F1F]" />

        {/* Knowledge Check */}
        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-[#D4AF37]">Knowledge Check</h2>
          <div className="space-y-6">
            {audiOverviewContent.quiz.map((q, qIndex) => (
              <div key={`q-${qIndex}`}>
                <div className="mb-2 text-sm font-medium text-white">{q.question}</div>
                <div className="space-y-2">
                  {q.options.map((opt, optIndex) => (
                    <button
                      key={`opt-${qIndex}-${optIndex}`}
                      onClick={() => setAnswer(qIndex, optIndex)}
                      className={getOptionClasses(qIndex, optIndex, q.correct)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Buttons */}
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

      {/* Bottom Navigation */}
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
  );
}
