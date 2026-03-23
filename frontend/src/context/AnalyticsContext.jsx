'use client'

import { createContext, useContext, useState } from 'react'

const AnalyticsContext = createContext(null)

export function AnalyticsProvider({ children }) {
  const [isOpen, setIsOpen]           = useState(false)
  const [assetName, setAssetName]     = useState('$PEPE')
  const [overlayStyle, setOverlayStyle] = useState({ x: '50%', y: '50%' })

  function openAnalytics(event, asset) {
    const x = event.clientX ?? event.touches?.[0]?.clientX ?? 0
    const y = event.clientY ?? event.touches?.[0]?.clientY ?? 0
    setOverlayStyle({ x: `${x}px`, y: `${y}px` })
    setAssetName(asset)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  function closeAnalytics() {
    setIsOpen(false)
    setTimeout(() => {
      document.body.style.overflow = ''
    }, 800)
  }

  return (
    <AnalyticsContext.Provider value={{ isOpen, assetName, overlayStyle, openAnalytics, closeAnalytics }}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export function useAnalytics() {
  return useContext(AnalyticsContext)
}