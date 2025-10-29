import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import HomeScreen from './screens/HomeScreen'
import BrandSelect from './screens/BrandSelect'
import UnitsPage from './screens/UnitsPage'
import Profile from './screens/Profile'
import BMWOverview from './screens/units/BMWOverview'
import BMWModels from './screens/units/BMWModelsSeriesUnit'

export default function App() {
  const [screen, setScreen] = useState('home')
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [selectedUnit, setSelectedUnit] = useState(null)

  return (
    <div className="min-h-full w-full bg-background">
      <AnimatePresence mode="wait">
        {screen === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="h-full"
          >
            <HomeScreen onGetStarted={() => setScreen('brands')} />
          </motion.div>
        )}
        {screen === 'brands' && (
          <motion.div
            key="brands"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="h-full"
          >
            <BrandSelect
              onBack={() => setScreen('home')}
              onSelectBrand={(brand) => {
                setSelectedBrand(brand)
                setScreen('units')
              }}
              onNavigate={(target) => {
                if (target === 'home') setScreen('home')
                else if (target === 'units') setScreen('units')
                else if (target === 'brands') setScreen('brands')
                else if (target === 'profile') setScreen('profile')
              }}
            />
          </motion.div>
        )}
        {screen === 'units' && (
          <motion.div
            key="units"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="h-full"
          >
            <UnitsPage
              brand={selectedBrand || { name: 'Brand', logo: '' }}
              onBack={() => setScreen('brands')}
              onNavigate={(target) => {
                if (target === 'home') setScreen('home')
                else if (target === 'units') setScreen('units')
                else if (target === 'brands') setScreen('brands')
                else if (target === 'profile') setScreen('profile')
              }}
              onOpenUnit={(unit) => {
                setSelectedUnit(unit)
                const brand = (selectedBrand?.name || '').toLowerCase()
                if (brand === 'bmw') {
                  if (unit.title === 'Brand Overview') setScreen('bmwOverview')
                  if (unit.title === 'Models & Series') setScreen('bmwModels')
                }
              }}
            />
          </motion.div>
        )}
        {screen === 'bmwOverview' && (
          <motion.div
            key="bmwOverview"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="h-full"
          >
            <BMWOverview
              onBackToUnits={() => setScreen('units')}
              onNextUnit={() => setScreen('bmwModels')}
              onNavigate={(target) => {
                if (target === 'home') setScreen('home')
                else if (target === 'units') setScreen('units')
                else if (target === 'brands') setScreen('brands')
                else if (target === 'profile') setScreen('profile')
              }}
            />
          </motion.div>
        )}
        {screen === 'bmwModels' && (
          <motion.div
            key="bmwModels"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="h-full"
          >
            <BMWModels
              onBackToUnits={() => setScreen('units')}
              onNavigate={(target) => {
                if (target === 'home') setScreen('home')
                else if (target === 'units') setScreen('units')
                else if (target === 'brands') setScreen('brands')
                else if (target === 'profile') setScreen('profile')
              }}
            />
          </motion.div>
        )}
        {screen === 'profile' && (
          <motion.div
            key="profile"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="h-full"
          >
            <Profile
              onNavigate={(target) => {
                if (target === 'home') setScreen('home')
                else if (target === 'units') setScreen('units')
                else if (target === 'brands') setScreen('brands')
                else if (target === 'profile') setScreen('profile')
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


