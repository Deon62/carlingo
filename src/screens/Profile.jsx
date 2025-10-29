import React from 'react'

export default function Profile({ onNavigate }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-3xl px-5 pt-6 pb-24">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="h-20 w-20 rounded-full bg-white/5 ring-1 ring-white/10" />
          <h1 className="mt-3 text-2xl font-semibold">SpeedLearner</h1>
          <p className="mt-1 text-sm text-[#B0B0B0]">Aspiring car enthusiast. Learning one unit a day.</p>
        </div>

        {/* Stats 2x2 */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {[
            { title: 'Horsepower', value: '120' },
            { title: 'Cars Learned', value: '3' },
            { title: 'Units Completed', value: '18' },
            { title: 'Streak', value: '5 days' },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#D4AF37] bg-white/[0.02] p-4 shadow-card">
              <div className="text-xs tracking-wide text-[#B0B0B0]">{s.title}</div>
              <div className="mt-2 text-lg font-semibold">{s.value}</div>
            </div>
          ))}
        </div>

        {/* My Garage */}
        <div className="mt-8">
          <h2 className="text-sm font-medium text-[#B0B0B0]">My Garage</h2>
          <div className="mt-3 space-y-3">
            {[
              { name: 'BMW', progress: 0.45 },
              { name: 'Audi', progress: 0.3 },
              { name: 'Ferrari', progress: 0.15 },
            ].map((c) => (
              <div key={c.name} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-white/10" aria-hidden="true" />
                    <div className="text-sm font-medium">{c.name}</div>
                  </div>
                  <div className="text-xs text-[#B0B0B0]">{Math.round(c.progress * 100)}% Complete</div>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full bg-[#D4AF37]"
                    style={{ width: `${c.progress * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-8">
          <h2 className="text-sm font-medium text-[#B0B0B0]">Achievements</h2>
          <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
            {[
              { title: 'Rookie Driver' },
              { title: 'Turbo Learner' },
              { title: 'Perfect Streak' },
            ].map((a) => (
              <div key={a.title} className="min-w-[140px] rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <div className="h-8 w-8 rounded-lg border border-[#D4AF37] bg-[#D4AF37]/10" />
                <div className="mt-2 text-sm font-medium">{a.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          <button className="rounded-xl border border-[#D4AF37] px-4 py-3 text-sm font-medium text-white">
            Edit Profile
          </button>
          <button className="rounded-xl border border-[#D4AF37] px-4 py-3 text-sm font-medium text-white">
            Settings
          </button>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="fixed inset-x-0 bottom-0 z-10">
        <div className="mx-auto max-w-3xl px-4 pb-4">
          <div className="mx-auto flex items-center justify-between rounded-2xl border border-white/10 bg-surface/90 px-6 py-3 shadow-card backdrop-blur supports-[backdrop-filter]:bg-surface/70">
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
            className="text-textSecondary hover:text-textPrimary transition-colors"
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
            className="text-textPrimary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm-7.5 9a7.5 7.5 0 0 1 15 0H4.5z"/></svg>
          </button>
          </div>
        </div>
      </nav>
    </div>
  )
}


