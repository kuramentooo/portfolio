'use client'

import { useEffect } from 'react'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check system preference or localStorage
    const isDark = localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    
    // Apply theme
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  return <>{children}</>
}
