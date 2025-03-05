'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check initial theme
    if (typeof window !== 'undefined') {
      const isDark = document.documentElement.classList.contains('dark')
      setDarkMode(isDark)
    }
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    setDarkMode(!darkMode)
    localStorage.setItem('theme', darkMode ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform"
      aria-label="Toggle theme"
    >
      {darkMode ? '🌞' : '🌙'}
    </button>
  )
}
