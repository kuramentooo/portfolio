import { profile } from '@/data/profile'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
