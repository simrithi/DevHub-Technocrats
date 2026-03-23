'use client'

import { AnalyticsProvider } from '@/context/AnalyticsContext'

export default function Providers({ children }) {
  return (
    <AnalyticsProvider>
      {children}
    </AnalyticsProvider>
  )
}