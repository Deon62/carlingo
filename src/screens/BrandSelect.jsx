import React, { useMemo, useState } from 'react'
import bmwLogo from '../assets/bmw.png'
import benzLogo from '../assets/benz.png'
import audiLogo from '../assets/audi.png'
import jaguarLogo from '../assets/Jaguar.png'
import lamboLogo from '../assets/lambo.png'
import porscheLogo from '../assets/porsche.png'
import toyotaLogo from '../assets/toyota.png'
import wagenLogo from '../assets/wagen.png'
import hondaLogo from '../assets/honda.png'
import nissanLogo from '../assets/nissan.jpg'

const BRANDS = [
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Porsche',
  'Volkswagen',
  'Toyota',
  'Honda',
  'Nissan',
  'Lexus',
  'Mazda',
  'Subaru',
  'Mitsubishi',
  'Ford',
  'Chevrolet',
  'Dodge',
  'Tesla',
  'Volvo',
  'Land Rover',
  'Jaguar',
  'Ferrari',
  'Lamborghini',
  'Aston Martin',
  'Bentley',
  'Rolls-Royce',
  'Maserati',
  'Bugatti',
  'McLaren',
  'Hyundai',
  'Kia',
  'Peugeot',
]

export default function BrandSelect({ onBack, onSelectBrand, onNavigate }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return BRANDS
    return BRANDS.filter((b) => b.toLowerCase().includes(q))
  }, [query])

  const handleSelect = (brandName) => {
    console.log('Selected brand:', brandName)
    const brandObj = {
      name: brandName,
      logo:
        brandName === 'BMW' ? bmwLogo :
        brandName === 'Mercedes-Benz' ? benzLogo :
        brandName === 'Audi' ? audiLogo :
        brandName === 'Jaguar' ? jaguarLogo :
        brandName === 'Lamborghini' ? lamboLogo :
        brandName === 'Porsche' ? porscheLogo :
        brandName === 'Toyota' ? toyotaLogo :
        brandName === 'Volkswagen' ? wagenLogo :
        brandName === 'Honda' ? hondaLogo :
        brandName === 'Nissan' ? nissanLogo : ''
    }
    if (onSelectBrand) onSelectBrand(brandObj)
  }

  return (
    <div className="min-h-screen px-5 pt-12 pb-20">
      <div className="mx-auto w-full max-w-md">
        <h2 className="mb-4 text-center text-lg font-semibold">Select Your Brand</h2>

        <div className="mb-5">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search brands"
            className="w-full rounded-xl bg-surface px-4 py-3 text-sm text-textPrimary placeholder-textSecondary ring-1 ring-white/5 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          {filtered.map((name) => (
            <button
              key={name}
              onClick={() => handleSelect(name)}
              className="group overflow-hidden rounded-xl bg-surface py-5 px-3 shadow-card transition-transform duration-150 active:scale-[0.98]"
            >
              <div className="flex h-full min-h-16 flex-col items-center justify-center gap-2">
                {name === 'BMW' && (<img src={bmwLogo} alt="BMW" className="h-6 w-6 object-contain" />)}
                {name === 'Mercedes-Benz' && (<img src={benzLogo} alt="Mercedes-Benz" className="h-6 w-6 object-contain" />)}
                {name === 'Audi' && (<img src={audiLogo} alt="Audi" className="h-6 w-6 object-contain" />)}
                {name === 'Jaguar' && (<img src={jaguarLogo} alt="Jaguar" className="h-6 w-6 object-contain" />)}
                {name === 'Lamborghini' && (<img src={lamboLogo} alt="Lamborghini" className="h-6 w-6 object-contain" />)}
                {name === 'Porsche' && (<img src={porscheLogo} alt="Porsche" className="h-6 w-6 object-contain" />)}
                {name === 'Toyota' && (<img src={toyotaLogo} alt="Toyota" className="h-6 w-6 object-contain" />)}
                {name === 'Volkswagen' && (<img src={wagenLogo} alt="Volkswagen" className="h-6 w-6 object-contain" />)}
                {name === 'Honda' && (<img src={hondaLogo} alt="Honda" className="h-6 w-6 object-contain" />)}
                {name === 'Nissan' && (<img src={nissanLogo} alt="Nissan" className="h-6 w-6 object-contain" />)}
                <span className="text-[13px] font-medium text-textPrimary text-center leading-tight">
                  {name}
                </span>
              </div>
            </button>
          ))}
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
            className="text-textSecondary hover:text-textPrimary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.5 5.25h15v1.5h-15v-1.5zm0 6h15v1.5h-15v-1.5zm0 6h15v1.5h-15v-1.5z"/></svg>
          </button>
          <button
            aria-label="Courses"
            onClick={() => onNavigate && onNavigate('brands')}
            className="text-textPrimary"
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


