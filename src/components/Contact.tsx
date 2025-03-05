import { profile } from '@/data/profile'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <div className="text-center">
          <p className="mb-4">
            <a 
              href={`mailto:${profile.email}`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {profile.email}
            </a>
          </p>
          <div className="flex justify-center space-x-6">
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
        </div>
      </div>
    </section>
  )
}
