import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import HomeScreen from './screens/HomeScreen'
import BrandSelect from './screens/BrandSelect'
import UnitsPage from './screens/UnitsPage'
import Profile from './screens/Profile'
import AIChat from './screens/AIChat'
import BMWOverview from './screens/units/BMWOverview'
import BMWModels from './screens/units/BMWModelsSeriesUnit'
import BMWDesignAerodynamics from './screens/units/BMWDesignAerodynamicsUnit'
import BMWEnginePower from './screens/units/BMWEnginePowerUnit'
import BenzOverviewUnit from './screens/units/BenzOverviewUnit'

export default function App() {
  const [screen, setScreen] = useState('home')
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [selectedUnit, setSelectedUnit] = useState(null)
  const [previousScreen, setPreviousScreen] = useState(null)

  const navigateTo = (newScreen) => {
    setPreviousScreen(screen);
    setScreen(newScreen);
  };

  const navigateBack = () => {
    if (previousScreen) {
      setScreen(previousScreen);
      setPreviousScreen(null);
    } else {
      setScreen('home');
    }
  };

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
            <HomeScreen onGetStarted={() => navigateTo('brands')} />
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
              onBack={navigateBack}
              onSelectBrand={(brand) => {
                setSelectedBrand(brand);
                navigateTo('units');
              }}
              onNavigate={(target) => {
                if (target === 'ai') {
                  navigateTo('ai');
                } else {
                  navigateTo(target);
                }
              }}
            />
          </motion.div>
        )}
        {screen === 'ai' && (
          <motion.div
            key="ai"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="h-full"
          >
            <AIChat
              onNavigate={(target) => {
                if (target === 'home') setScreen('home')
                else if (target === 'ai') setScreen('ai')
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
                else if (target === 'ai') setScreen('ai')
                else if (target === 'units') setScreen('units')
                else if (target === 'brands') setScreen('brands')
                else if (target === 'profile') setScreen('profile')
              }}
              onOpenUnit={(unit) => {
                setSelectedUnit(unit)
                const brand = (selectedBrand?.name || '').toLowerCase()
                const brandName = (selectedBrand?.name || '').toLowerCase()
                if (brandName === 'bmw') {
                  if (unit.title === 'Brand Overview') setScreen('bmwOverview')
                  if (unit.title === 'Models & Series') setScreen('bmwModels')
                  if (unit.title === 'Design & Aerodynamics') setScreen('bmwDesignAerodynamics')
                  if (unit.title === 'Engine & Power') setScreen('bmwEnginePower')
                } else if (brandName === 'mercedes-benz' || brandName === 'mercedes') {
                  if (unit.title === 'Brand Overview') setScreen('benzOverview')
                  // Add more unit mappings for Mercedes-Benz as needed
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
                else if (target === 'ai') setScreen('ai')
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
              onNextUnit={() => setScreen('bmwEnginePower')}
              onNavigate={(target) => {
                if (target === 'home') setScreen('home')
                else if (target === 'ai') setScreen('ai')
                else if (target === 'units') setScreen('units')
                else if (target === 'brands') setScreen('brands')
                else if (target === 'profile') setScreen('profile')
              }}
            />
          </motion.div>
        )}
        {screen === 'bmwDesignAerodynamics' && (
          <motion.div
            key="bmwDesignAerodynamics"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="h-full"
          >
            <BMWDesignAerodynamics
              onBackToUnits={() => setScreen('units')}
              onNavigate={(target) => {
                if (target === 'home') setScreen('home')
                else if (target === 'ai') setScreen('ai')
                else if (target === 'units') setScreen('units')
                else if (target === 'brands') setScreen('brands')
                else if (target === 'profile') setScreen('profile')
              }}
            />
          </motion.div>
        )}
        {screen === 'benzOverview' && (
          <motion.div
            key="benzOverview"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="h-full"
          >
            <BenzOverviewUnit
              onBackToUnits={() => setScreen('units')}
              onNextUnit={() => setScreen('benzModels')}
              onNavigate={(target) => {
                if (target === 'home') setScreen('home')
                else if (target === 'ai') setScreen('ai')
                else if (target === 'units') setScreen('units')
                else if (target === 'brands') setScreen('brands')
                else if (target === 'profile') setScreen('profile')
              }}
            />
          </motion.div>
        )}
        {screen === 'bmwEnginePower' && (
          <motion.div
            key="bmwEnginePower"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="h-full"
          >
            <BMWEnginePower
              onBackToUnits={() => setScreen('units')}
              onNextUnit={() => setScreen('bmwDesignAerodynamics')}
              onNavigate={(target) => {
                if (target === 'home') setScreen('home')
                else if (target === 'ai') setScreen('ai')
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
                else if (target === 'ai') setScreen('ai')
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


