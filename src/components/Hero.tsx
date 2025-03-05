'use client'

import Image from 'next/image'
import { profile } from '@/data/profile'

export default function Hero() {
  const mainSocialLinks = {
    GitHub: profile.links.github,
    LinkedIn: profile.links.linkedin,
    GitLab: profile.links.gitlab,
  }

  return (
    <section className="py-20 flex items-center min-h-[80vh] bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
            <Image
              src="/portfolio/me_avatar.jpg"
              alt="Clément Delaunoy"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1 className="text-5xl font-bold mb-4">{profile.name}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Ingénieur DevOps en Alternance
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Passionné par le développement et les nouvelles technologies, 
            je suis actuellement en alternance et en formation pour devenir DevOps.
          </p>
          <div className="flex justify-center gap-4">
            {Object.entries(mainSocialLinks).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
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
