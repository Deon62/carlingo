import React from 'react'
import logo from '../assets/logo.png'

export default function HomeScreen({ onGetStarted }) {
  return (
    <div className="h-screen bg-surface text-textPrimary">
      <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">CarLingo</h1>
        <p className="mt-3 text-base text-textSecondary sm:text-lg">Learn cars like you learn languages vroom by vroom</p>

        <button
          onClick={onGetStarted}
          className="tap-highlight-transparent mt-6 w-full max-w-sm rounded-xl px-5 py-4 text-base font-semibold text-black shadow-card transition-transform duration-150 active:scale-[0.99]"
          style={{ backgroundColor: '#D4AF37' }}
        >
          Get Started
        </button>
      </div>
    </div>
  )
}


