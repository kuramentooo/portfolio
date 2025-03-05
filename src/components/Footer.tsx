import { profile } from '@/data/profile'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center">
          <p>© {new Date().getFullYear()} Clément Delaunoy</p>
          <div className="flex space-x-4">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
