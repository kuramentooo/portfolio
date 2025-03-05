'use client'

import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'

export const metadata: Metadata = {
  title: 'Clément Delaunoy - Portfolio',
  description: 'Portfolio professionnel de Clément Delaunoy - Développeur Full Stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  return (
    <html lang="fr" className={theme}>
      <body className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="fixed bottom-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform"
        ></button>
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
