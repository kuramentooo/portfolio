import { profile } from '@/data/profile'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {Object.entries(profile.links).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              {platform}
            </a>
          ))}
        </div>
        <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
