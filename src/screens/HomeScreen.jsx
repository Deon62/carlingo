import React from 'react'
import logo from '../assets/logo.png'

export default function HomeScreen({ onGetStarted }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src={logo}
        alt="CarLingo background"
        className="pointer-events-none select-none absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          CarLingo
        </h1>
        <p className="mt-3 max-w-xl text-sm text-textSecondary sm:text-base">
          Learn cars like you learn languages vroom by vroom
        </p>

        <button
          onClick={onGetStarted}
          className="tap-highlight-transparent mt-8 w-full max-w-sm rounded-xl bg-accent px-5 py-4 text-base font-semibold text-white shadow-card transition-transform duration-150 active:scale-[0.99]"
        >
          Get Started
        </button>
      </div>
    </div>
  )
}


