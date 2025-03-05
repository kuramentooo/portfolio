'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'
import { useTheme } from '@/contexts/ThemeContext'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <ThemeToggle />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
