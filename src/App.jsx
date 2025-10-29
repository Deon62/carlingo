import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import HomeScreen from './screens/HomeScreen'
import BrandSelect from './screens/BrandSelect'
import UnitsPage from './screens/UnitsPage'
import Profile from './screens/Profile'

export default function App() {
  const [screen, setScreen] = useState('home')
  const [selectedBrand, setSelectedBrand] = useState(null)

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
              onSelectBrand={(name) => {
                setSelectedBrand({ name, logo: '' })
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
            <Profile />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


