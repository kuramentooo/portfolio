'use client'

import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Clément Delaunoy - Portfolio',
  description: 'Portfolio professionnel de Clément Delaunoy - Développeur Full Stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <ThemeToggle />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
