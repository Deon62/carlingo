import React from 'react'
import logo from '../assets/logo.png'

export default function HomeScreen({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-surface text-textPrimary">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center">
        <img src={logo} alt="CarLingo" className="mx-auto h-16 w-16 object-contain" />
        <h1 className="mt-3 text-4xl font-bold tracking-tight">CarLingo</h1>
        <p className="mt-2 text-sm text-textSecondary">Learn cars like you learn languages vroom by vroom</p>

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


