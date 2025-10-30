import React, { useState } from 'react';
import audiLogo from '../../assets/audi.png';

const audiModelsSeriesContent = {
  hero: {
    title: 'Audi Models & Series',
    subtitle: 'From Classic Comfort to Electric Precision',
    intro: 'Discover Audi\'s dynamic model range — from refined sedans to electrifying sports cars.',
    unitProgress: 'Unit 2 of 10'
  },
  context: {
    title: 'The Audi Model Range',
    body: 'Audi categorizes its vehicles into distinct series: A-Series for luxury sedans, S/RS for performance, Q-Series for SUVs, and e-tron for electric vehicles. Each model combines German engineering with cutting-edge technology and premium craftsmanship.'
  },
  sections: [
    {
      key: 'a-series',
      title: 'A-Series (Luxury Sedans)',
      summary: 'Defines Audi\'s comfort and elegance segment with refined technology and premium interiors.',
      details: 'The A-series represents Audi\'s core lineup of luxury vehicles, known for their sophisticated design, advanced technology, and exceptional build quality. These models set the standard in their respective classes.',
      bullets: [
        { label: 'Models', value: 'A1, A3, A4, A5, A6, A7, A8' },
        { label: 'Flagship', value: 'A8 - Competes with BMW 7 Series and Mercedes S-Class' },
        { label: 'Key Features', value: 'Virtual Cockpit, Quattro AWD, MMI Touch Response' }
      ],
      image: null
    },
    {
      key: 's-series',
      title: 'S-Series (Performance Sedans)',
      summary: 'Sportier versions of the A-series with enhanced performance and dynamic handling.',
      details: 'The S models bridge the gap between luxury and high performance, offering more powerful engines, sport-tuned suspensions, and distinctive styling cues while maintaining daily drivability.',
      bullets: [
        { label: 'Models', value: 'S3, S4, S5, S6, S7, S8' },
        { label: 'Performance', value: 'Up to 563 HP (S8)' },
        { label: 'Key Features', value: 'Sport differential, Adaptive air suspension, Dynamic steering' }
      ],
      image: null
    },
    {
      key: 'rs-series',
      title: 'RS-Series (Racing Sport)',
      summary: 'Audi\'s most powerful street cars, developed by Audi Sport GmbH.',
      details: 'The RS models represent the pinnacle of Audi performance, with track-inspired engineering and aggressive styling. These are the most powerful and dynamic vehicles in the Audi lineup.',
      bullets: [
        { label: 'Models', value: 'RS3, RS5, RS6 Avant, RS7, RS Q8' },
        { label: 'Performance', value: 'Up to 591 HP (RS6 Avant Performance)' },
        { label: 'Key Features', value: 'Quattro with sport differential, RS sport exhaust, Carbon ceramic brakes' }
      ],
      image: null
    },
    {
      key: 'q-series',
      title: 'Q-Series (SUVs & Crossovers)',
      summary: 'Luxury SUVs combining versatility, space, and premium comfort.',
      details: 'Audi\'s Q-Series offers a comprehensive range of SUVs that combine the brand\'s signature luxury with the practicality and versatility of an SUV, available in various sizes to suit different needs.',
      bullets: [
        { label: 'Models', value: 'Q2, Q3, Q5, Q7, Q8' },
        { label: 'Flagship', value: 'Q8 - The luxury flagship SUV' },
        { label: 'Key Features', value: 'Quattro Ultra, Adaptive air suspension, Virtual cockpit plus' }
      ],
      image: null
    },
    {
      key: 'sports',
      title: 'TT & R8 (Sports Icons)',
      summary: 'Audi\'s sports car legends, combining performance with iconic design.',
      details: 'The TT and R8 represent Audi\'s sports car heritage, with the TT offering accessible performance and the R8 serving as the halo supercar with mid-engine, all-wheel-drive performance.',
      bullets: [
        { label: 'TT Models', value: 'TT Coupe, TTS, TT RS' },
        { label: 'R8 Models', value: 'R8 Coupe, R8 Spyder, R8 GT' },
        { label: 'Performance', value: 'Up to 612 HP (R8 V10 Performance)' }
      ],
      image: null
    },
    {
      key: 'etron',
      title: 'e-tron Series (Electric Mobility)',
      summary: 'Audi\'s electric lineup combining sustainability with performance.',
      details: 'The e-tron series represents Audi\'s commitment to sustainable mobility, offering fully electric vehicles that don\'t compromise on performance, luxury, or technology.',
      bullets: [
        { label: 'Models', value: 'Q4 e-tron, Q8 e-tron, e-tron GT, RS e-tron GT' },
        { label: 'Range', value: 'Up to 300+ miles (WLTP)' },
        { label: 'Key Features', value: '800V architecture, Ultra-fast charging, Regenerative braking' }
      ],
      image: null
    }
  ],
  funFacts: [
    'The "RS" stands for RennSport, which means "racing sport" in German.',
    'The Audi RS6 Avant is one of the fastest production wagons ever made.',
    'Audi\'s Matrix LED and Laser lights are among the most advanced in the automotive industry.',
    'The e-tron GT shares its platform with the Porsche Taycan.',
    'Audi was the first manufacturer to offer all-wheel drive in a production car (1980 Audi Quattro).',
    'The R8 was the first production car with full-LED headlights.'
  ],
  quiz: [
    {
      question: 'What does "RS" stand for in Audi\'s lineup?',
      options: ['Road Sport', 'RennSport', 'Racing Series'],
      correct: 1,
      explanation: 'RS stands for "RennSport," which is German for "racing sport."'
    },
    {
      question: 'Which Audi series focuses on electric vehicles?',
      options: ['A-Series', 'RS-Series', 'e-tron'],
      correct: 2,
      explanation: 'The e-tron series is Audi\'s dedicated electric vehicle lineup.'
    },
    {
      question: 'Which Audi model shares its platform with the Porsche Taycan?',
      options: ['e-tron GT', 'Q8 e-tron', 'A8'],
      correct: 0,
      explanation: 'The Audi e-tron GT shares its J1 platform with the Porsche Taycan.'
    }
  ]
};

const AudiModelsSeriesUnit = ({ onNavigate, onBackToUnits, onNextUnit }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [answers, setAnswers] = useState({});

  const toggleSection = (key) => {
    setActiveSection(activeSection === key ? null : key);
  };

  const setAnswer = (qIndex, option) => {
    if (answers[qIndex] !== undefined) return; // Prevent changing answers after selection
    setAnswers(prev => ({ ...prev, [qIndex]: option }));
  };

  const isSelected = (qIndex, option) => answers[qIndex] === option;

  const getOptionClasses = (qIndex, option, correctIndex) => {
    const selected = isSelected(qIndex, option);
    const isCorrect = option === correctIndex;
    const base = 'w-full rounded-xl border px-5 py-3.5 text-left text-sm transition-colors duration-200';
    
    if (answers[qIndex] !== undefined) {
      // After selection
      if (isCorrect) return `${base} border-[#D4AF37] bg-[#1A1A1A] text-[#D4AF37]`;
      if (selected) return `${base} border-[#B22222] bg-[#1A1A1A] text-[#B22222] line-through`;
      return `${base} border-[#1F1F1F] bg-[#111111] text-[#666666]`;
    }
    
    // Before selection
    return `${base} border-[#1F1F1F] bg-[#111111] text-white hover:border-[#D4AF37]/40`;
  };


  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-3xl px-6 pt-8 pb-24">
        {/* Hero Section */}
        <section className="text-center">
          <img src={audiLogo} alt="Audi" className="mx-auto h-20 w-20 object-contain" />
          <h1 className="mt-4 text-2xl font-semibold tracking-tight">{audiModelsSeriesContent.hero.title}</h1>
          <p className="mt-2 text-base font-medium text-[#D4AF37]">{audiModelsSeriesContent.hero.subtitle}</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#B0B0B0]">
            {audiModelsSeriesContent.hero.intro}
          </p>
          <div className="mt-2 text-xs text-[#D4AF37]">{audiModelsSeriesContent.hero.unitProgress}</div>
        </section>

        <div className="my-6 h-px w-full bg-[#1F1F1F]" />

        {/* Context Section */}
        <section className="mb-8">
          <h2 className="text-sm font-medium tracking-wide text-[#D4AF37]">{audiModelsSeriesContent.context.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-[#B0B0B0]">
            {audiModelsSeriesContent.context.body}
          </p>
        </section>

        {/* Model Sections */}
        <section>
          <h2 className="mb-3 text-sm font-medium tracking-wide text-[#D4AF37]">Model Range</h2>
          <div className="space-y-3">
            {audiModelsSeriesContent.sections.map((section) => (
              <div key={section.key} className="rounded-2xl border border-[#1F1F1F] bg-[#111111] overflow-hidden">
                <button
                  className="flex w-full items-center justify-between px-4 py-3 text-left"
                  onClick={() => toggleSection(section.key)}
                >
                  <span className="text-sm font-medium text-white">{section.title}</span>
                  <svg
                    className={`h-5 w-5 text-[#D4AF37] transition-transform ${activeSection === section.key ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {activeSection === section.key && (
                  <div className="px-4 pb-4 pt-2">
                    <p className="mb-3 text-sm text-[#B0B0B0]">{section.summary}</p>
                    <p className="mb-4 text-sm leading-relaxed text-[#B0B0B0]">{section.details}</p>
                    <div className="space-y-2">
                      {section.bullets.map((bullet, index) => (
                        <div key={index} className="flex">
                          <span className="mr-2 text-[#D4AF37]">•</span>
                          <div>
                            <span className="text-xs font-medium text-[#D4AF37]">{bullet.label}: </span>
                            <span className="text-xs text-[#B0B0B0]">{bullet.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="my-6 h-px w-full bg-[#1F1F1F]" />

        {/* Fun Facts */}
        <section className="mb-8">
          <h2 className="mb-3 text-sm font-medium tracking-wide text-[#D4AF37]">Did You Know?</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {audiModelsSeriesContent.funFacts.map((fact, index) => (
              <div key={index} className="rounded-xl border border-[#1F1F1F] bg-[#111111] p-4">
                <p className="text-sm text-[#B0B0B0]">{fact}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="my-6 h-px w-full bg-[#1F1F1F]" />

        {/* Knowledge Check */}
        <section className="mb-8">
          <h2 className="mb-4 text-sm font-medium tracking-wide text-[#D4AF37]">Knowledge Check</h2>
          <div className="space-y-6">
            {audiModelsSeriesContent.quiz.map((q, qIndex) => (
              <div key={qIndex} className="space-y-3">
                <p className="text-sm font-medium text-white">{q.question}</p>
                <div className="space-y-2">
                  {q.options.map((opt, optIndex) => (
                    <button
                      key={`opt-${qIndex}-${optIndex}`}
                      onClick={() => setAnswer(qIndex, optIndex)}
                      className={getOptionClasses(qIndex, optIndex, q.correct)}
                      disabled={answers[qIndex] !== undefined}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {answers[qIndex] !== undefined && (
                  <p className="text-xs text-[#D4AF37] mt-2">
                    {answers[qIndex] === q.correct ? '✓ ' : '✗ '}
                    {q.explanation}
                  </p>
                )}
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
            Next Unit → Engine & Performance
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
              className="text-[#B0B0B0] transition-colors hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 3.172 2.25 12h1.5v8.25h5.25v-6H15v6h5.25V12h1.5L12 3.172z" />
              </svg>
            </button>
            <button
              aria-label="Learn"
              onClick={() => onNavigate && onNavigate('units')}
              className="text-[#D4AF37]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M4.5 5.25h15v1.5h-15v-1.5zm0 6h15v1.5h-15v-1.5zm0 6h15v1.5h-15v-1.5z" />
              </svg>
            </button>
            <button
              aria-label="AI Assistant"
              onClick={() => onNavigate && onNavigate('ai')}
              className="text-[#B0B0B0] transition-colors hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M3 6a3 3 0 013-3h12a3 3 0 013 3v7a3 3 0 01-3 3H9l-4 3v-3H6a3 3 0 01-3-3V6z" />
              </svg>
            </button>
            <button
              aria-label="Courses"
              onClick={() => onNavigate && onNavigate('brands')}
              className="text-[#B0B0B0] transition-colors hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M4 5.25h7.5V12H4V5.25zm8.5 0H20V12h-7.5V5.25zM4 12.75h7.5V19.5H4v-6.75zM12.5 12.75H20V19.5h-7.5v-6.75z" />
              </svg>
            </button>
            <button
              aria-label="Profile"
              onClick={() => onNavigate && onNavigate('profile')}
              className="text-[#B0B0B0] transition-colors hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AudiModelsSeriesUnit;
