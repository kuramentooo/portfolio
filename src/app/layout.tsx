import './globals.css'
import type { Metadata } from 'next'
import ClientLayout from '@/components/ClientLayout'
import ThemeProvider from '@/components/ThemeProvider'

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
      <body>
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
