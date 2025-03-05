import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Clément Delaunoy
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#about">À propos</Link>
            <Link href="#projects">Projets</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
