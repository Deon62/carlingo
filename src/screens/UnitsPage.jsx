import React from 'react'
import { BookOpen, Car, Gauge, Wind, MonitorCog, Settings, BatteryCharging, Shield, Flag, Sparkles } from 'lucide-react'

// Shared Unit List (static)
const UNITS = [
  { title: 'Brand Overview', description: 'Learn the story, legacy, and logo behind this brand.', icon: BookOpen },
  { title: 'Models & Series', description: 'Discover the key models and what makes them unique.', icon: Car },
  { title: 'Engine & Power', description: 'Understand horsepower, torque, and performance systems.', icon: Gauge },
  { title: 'Design & Aerodynamics', description: 'How shape and style improve speed and stability.', icon: Wind },
  { title: 'Interior & Technology', description: 'Explore comfort, materials, and digital systems.', icon: MonitorCog },
  { title: 'Performance Modes', description: 'See how Eco, Sport, and Comfort modes work.', icon: Settings },
  { title: 'Electric & Hybrid Models', description: 'Step into the brand’s future of electrification.', icon: BatteryCharging },
  { title: 'Safety & Assistance', description: 'Learn about the safety and driver-assist systems.', icon: Shield },
  { title: 'Racing Heritage', description: 'A glimpse into the brand’s motorsport legacy.', icon: Flag },
  { title: 'Future Vision', description: 'What’s next for this brand — innovation and sustainability.', icon: Sparkles },
]

export default function UnitsPage({ brand = { name: 'Brand', logo: '' }, onBack, onNavigate }) {
  const handleSelect = (unit) => {
    console.log('Selected Unit:', unit.title)
  }

  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <div className="mx-auto w-full max-w-3xl px-5 pt-4 pb-20">

        <div className="flex items-center gap-3">
          {brand.logo ? (
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="h-20 w-20 rounded-full object-contain"
              loading="lazy"
            />
          ) : (
            <div className="h-20 w-20 rounded-full bg-surface" aria-hidden="true" />
          )}
          <div>
            <h1 className="text-xl font-semibold">Learn about {brand.name}</h1>
            <p className="mt-1 text-sm text-textSecondary">Start exploring the world of {brand.name}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3">
          {UNITS.map((unit) => {
            const Icon = unit.icon
            return (
              <button
                key={unit.title}
                onClick={() => handleSelect(unit)}
                className="group flex w-full items-start gap-3 rounded-2xl border border-white/10 bg-surface p-4 text-left shadow-card transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99]"
              >
                <span className="rounded-lg border border-white/10 bg-background p-2 text-textPrimary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[15px] font-medium leading-tight">{unit.title}</div>
                  <p className="mt-1 text-xs leading-snug text-textSecondary">{unit.description}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-10 border-t border-white/10 bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/70">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-8 py-3">
          <button
            aria-label="Home"
            onClick={() => onNavigate && onNavigate('home')}
            className="text-textSecondary hover:text-textPrimary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 3.172 2.25 12h1.5v8.25h5.25v-6H15v6h5.25V12h1.5L12 3.172z"/></svg>
          </button>
          <button
            aria-label="Learn"
            onClick={() => onNavigate && onNavigate('units')}
            className="text-textPrimary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.5 5.25h15v1.5h-15v-1.5zm0 6h15v1.5h-15v-1.5zm0 6h15v1.5h-15v-1.5z"/></svg>
          </button>
          <button
            aria-label="Courses"
            onClick={() => onNavigate && onNavigate('brands')}
            className="text-textSecondary hover:text-textPrimary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4 5.25h7.5V12H4V5.25zm8.5 0H20V12h-7.5V5.25zM4 12.75h7.5V19.5H4v-6.75zM12.5 12.75H20V19.5h-7.5v-6.75z"/></svg>
          </button>
          <button
            aria-label="Profile"
            onClick={() => onNavigate && onNavigate('profile')}
            className="text-textSecondary hover:text-textPrimary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm-7.5 9a7.5 7.5 0 0 1 15 0H4.5z"/></svg>
          </button>
        </div>
      </nav>
    </div>
  )
}


