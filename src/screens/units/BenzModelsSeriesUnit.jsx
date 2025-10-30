import React, { useState } from 'react';
import benzLogo from '../../assets/benz.png';

const benzModelsSeriesContent = {
  hero: {
    title: 'Mercedes Benz Models & Series',
    subtitle: 'From timeless classics to cutting-edge electric marvels.',
    intro: 'Mercedes Benz offers a comprehensive lineup that combines luxury, performance, and innovation across multiple vehicle segments. Each model is engineered to deliver the perfect balance of comfort, technology, and driving dynamics.',
    unitProgress: 'Unit 2 of 10'
  },
  context: {
    title: 'The Mercedes Benz Lineup',
    body: 'Mercedes-Benz categorizes its vehicles into distinct series: A to S-Class for sedans and coupes, SUVs with GL prefixes, performance-oriented AMG models, and the all-electric EQ lineup. Each model combines German engineering with luxury and advanced technology.'
  },
  sections: [
    {
      key: 'a-class',
      title: 'A-Class',
      summary: 'Compact luxury hatchback and sedan with premium features in a small package.',
      details: 'The entry point to the Mercedes-Benz lineup, offering advanced technology and premium materials in a compact form factor. Available as a hatchback or sedan with both gasoline and diesel options.',
      bullets: [
        { label: 'Body Styles', value: 'Hatchback, Sedan' },
        { label: 'Key Features', value: 'MBUX infotainment, Premium interior' },
        { label: 'Notable Models', value: 'A 200, A 220, A 35 AMG' }
      ],
      image: null
    },
    {
      key: 'c-class',
      title: 'C-Class',
      summary: 'The balanced executive car with sporty elegance and advanced technology.',
      details: 'The C-Class sets the standard in its segment with a perfect blend of comfort, performance, and technology. Available as a sedan, wagon, coupe, or cabriolet.',
      bullets: [
        { label: 'Body Styles', value: 'Sedan, Wagon, Coupe, Cabriolet' },
        { label: 'Key Features', value: 'Digital cockpit, Advanced driver aids' },
        { label: 'Notable Models', value: 'C 300, C 43 AMG, C 63 AMG' }
      ],
      image: null
    },
    {
      key: 'e-class',
      title: 'E-Class',
      summary: 'Business-class comfort with executive presence and advanced technology.',
      details: 'The E-Class combines luxury and technology in a sophisticated package, offering a perfect balance of comfort and performance for discerning drivers.',
      bullets: [
        { label: 'Body Styles', value: 'Sedan, Wagon, Coupe, Cabriolet' },
        { label: 'Key Features', value: 'MBUX, Semi-autonomous driving' },
        { label: 'Notable Models', value: 'E 350, E 450, E 63 AMG' }
      ],
      image: null
    },
    {
      key: 's-class',
      title: 'S-Class',
      summary: 'The flagship of innovation, setting benchmarks in luxury and technology.',
      details: 'The S-Class represents the pinnacle of Mercedes-Benz engineering, featuring cutting-edge technology, unparalleled comfort, and powerful performance options.',
      bullets: [
        { label: 'Body Styles', value: 'Sedan, Maybach, Coupe, Cabriolet' },
        { label: 'Key Features', value: '3D dashboard, E-Active Body Control' },
        { label: 'Notable Models', value: 'S 500, S 63 AMG, S 680 Maybach' }
      ],
      image: null
    },
    {
      key: 'g-class',
      title: 'G-Class',
      summary: 'The iconic off-road luxury SUV with boxy design and unmatched capability.',
      details: 'The G-Class combines rugged off-road ability with supreme luxury, maintaining its distinctive design while offering modern technology and comfort.',
      bullets: [
        { label: 'Body Styles', value: 'SUV' },
        { label: 'Key Features', value: 'Three locking differentials, Hand-built' },
        { label: 'Notable Models', value: 'G 550, G 63 AMG, G 65 AMG' }
      ],
      image: null
    },
    {
      key: 'amg',
      title: 'AMG Performance Line',
      summary: 'High-performance models that blend power with precision engineering.',
      details: 'AMG represents the pinnacle of Mercedes-Benz performance, with handcrafted engines and track-tested dynamics for the ultimate driving experience.',
      bullets: [
        { label: 'Key Models', value: 'C 63, E 63, GT 4-Door' },
        { label: 'Signature Feature', value: 'Handcrafted AMG engines' },
        { label: 'Performance', value: '400-800+ HP variants available' }
      ],
      image: null
    },
    {
      key: 'maybach',
      title: 'Maybach',
      summary: 'Ultra-luxury refinement and exclusivity beyond the standard lineup.',
      details: 'Maybach represents the ultimate in automotive luxury, with handcrafted interiors, exclusive features, and unparalleled comfort for rear-seat passengers.',
      bullets: [
        { label: 'Key Models', value: 'S-Class Maybach, GLS Maybach' },
        { label: 'Luxury Features', value: 'Executive rear seating, Champagne flutes' },
        { label: 'Exclusivity', value: 'Limited production, bespoke options' }
      ],
      image: null
    },
    {
      key: 'eq',
      title: 'EQ Electric Series',
      summary: 'The future of luxury electric mobility with zero emissions.',
      details: 'The EQ lineup showcases Mercedes-Benz\'s commitment to sustainable luxury, combining cutting-edge electric powertrains with the brand\'s signature comfort and technology.',
      bullets: [
        { label: 'Key Models', value: 'EQS, EQE, EQB, EQA' },
        { label: 'Range', value: 'Up to 400+ miles (EQS)' },
        { label: 'Charging', value: 'Ultra-fast charging capable' }
      ],
      image: null
    },
    {
      key: 'cla-cls',
      title: 'CLA / CLS',
      summary: 'Stylish four-door coupes with dynamic proportions and luxury appointments.',
      details: 'These models combine coupe-like styling with four-door practicality, offering a sporty alternative to traditional sedans with distinctive design and engaging dynamics.',
      bullets: [
        { label: 'Body Styles', value: '4-Door Coupe, Shooting Brake (CLA)' },
        { label: 'Key Features', value: 'Panoramic sunroof, MBUX system' },
        { label: 'Performance', value: 'Up to 503 HP (CLA 45 S AMG)' }
      ],
      image: null
    },
    {
      key: 'suvs',
      title: 'SUVs Lineup',
      summary: 'From compact GLA to full-size GLS, luxury SUVs for every need.',
      details: 'Mercedes-Benz offers a comprehensive range of SUVs, from the compact GLA to the three-row GLS, all featuring premium interiors and advanced technology.',
      bullets: [
        { label: 'Model Range', value: 'GLA, GLB, GLC, GLE, GLS' },
        { label: 'Key Features', value: '4MATIC AWD, Luxurious interiors' },
        { label: 'Performance', value: 'AMG variants available' }
      ],
      image: null
    }
  ],
  funFacts: [
    'The Mercedes-Benz S-Class was the first car to offer ABS brakes in 1978.',
    'The G-Class has been in continuous production since 1979 with the same basic design.',
    'Mercedes-AMG engines are still hand-built using a "one man, one engine" philosophy.',
    'The EQS is the first electric vehicle to feature the Hyperscreen display.'
  ],
  quiz: [
    {
      question: 'Which Mercedes-Benz model is known as the "Sensual Purity" concept?',
      options: [
        'CLS-Class',
        'EQS',
        'A-Class',
        'G-Class'
      ],
      correct: 1
    },
    {
      question: 'What does "AMG" stand for?',
      options: [
        'Auto Motor Gesellschaft',
        'Aufrecht Melcher Großaspach',
        'Automotive Motorsport Group',
        'Advanced Mercedes-Benz Grand'
      ],
      correct: 1
    },
    {
      question: 'Which Mercedes-Benz SUV was originally developed as a military vehicle?',
      options: [
        'GLA',
        'GLE',
        'G-Class',
        'GLB'
      ],
      correct: 2
    }
  ]
};

export default function BenzModelsSeriesUnit({ onNavigate, onBackToUnits, onNextUnit }) {
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
    const isCorrect = answers[qKey] === qKey ? correctIndex === benzModelsSeriesContent.quiz[qKey].correct : false;
    const base = 'w-full rounded-xl border px-5 py-3.5 text-left text-sm transition-colors duration-200';
    if (!selected) return `${base} border-[#1F1F1F] bg-[#111111] text-white hover:border-[#D4AF37]/40`;
    if (isCorrect) return `${base} border-[#D4AF37] bg-[#111111]/90 text-white`;
    return `${base} border-[#B22222] bg-[#111111]/90 text-white`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-3xl px-6 pt-8 pb-24">
        {/* Hero Section */}
        <section className="text-center">
          <img src={benzLogo} alt="Mercedes-Benz" className="mx-auto h-20 w-20 object-contain" />
          <h1 className="mt-4 text-2xl font-semibold tracking-tight">{benzModelsSeriesContent.hero.title}</h1>
          <p className="mt-2 text-base font-medium text-[#D4AF37]">{benzModelsSeriesContent.hero.subtitle}</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#B0B0B0]">
            {benzModelsSeriesContent.hero.intro}
          </p>
          <div className="mt-2 text-xs text-[#D4AF37]">{benzModelsSeriesContent.hero.unitProgress}</div>
        </section>

        <div className="my-6 h-px w-full bg-[#1F1F1F]" />

        {/* Context Section */}
        <section>
          <h2 className="text-sm font-medium tracking-wide text-[#D4AF37]">{benzModelsSeriesContent.context.title}</h2>
          <p className="mt-2 text-sm text-[#B0B0B0]">{benzModelsSeriesContent.context.body}</p>
        </section>

        <div className="my-6 h-px w-full bg-[#1F1F1F]" />

        {/* Models Sections */}
        <section>
          <h2 className="text-sm font-medium tracking-wide text-[#D4AF37]">Model Range</h2>
          <div className="mt-3 space-y-3">
            {benzModelsSeriesContent.sections.map((section) => {
              const isOpen = activeSection === section.key;
              return (
                <div key={section.key} className="rounded-2xl border border-[#1F1F1F] bg-[#111111] overflow-hidden">
                  <button
                    className="flex w-full items-center justify-between px-4 py-3 text-left"
                    onClick={() => toggleSection(section.key)}
                  >
                    <span className="text-sm font-medium text-white">{section.title}</span>
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
                      <p className="text-sm text-[#B0B0B0] mb-3">{section.summary}</p>
                      <p className="text-sm text-[#B0B0B0] mb-3">{section.details}</p>
                      <ul className="space-y-2">
                        {section.bullets.map((bullet, i) => (
                          <li key={i} className="flex text-sm text-[#B0B0B0]">
                            <span className="text-[#D4AF37] mr-2">•</span>
                            <span>
                              <span className="font-medium text-white">{bullet.label}:</span> {bullet.value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <div className="my-6 h-px w-full bg-[#1F1F1F]" />

        {/* Fun Facts */}
        <section>
          <h2 className="text-sm font-medium tracking-wide text-[#D4AF37]">Fun Facts</h2>
          <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
            {benzModelsSeriesContent.funFacts.map((fact, i) => (
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
            {benzModelsSeriesContent.quiz.map((q, qIndex) => (
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
            Next Unit → Engine & Power
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
