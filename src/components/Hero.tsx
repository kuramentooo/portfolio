import { profile } from '@/data/profile'

export default function Hero() {
  return (
    <section className="py-20 flex items-center min-h-[80vh] bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
            {/* Placeholder pour la photo de profil */}
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500" />
          </div>
          <h1 className="text-5xl font-bold mb-4">{profile.name}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Développeur Full Stack & DevOps
          </p>
          <p className="text-lg max-w-2xl mx-auto">
            Passionné par le développement et les nouvelles technologies, 
            je suis actuellement en alternance et en formation pour devenir DevOps.
          </p>
        </div>
        
        <div className="flex justify-center space-x-4">
          {Object.entries(profile.links).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
