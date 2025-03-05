'use client'

import Image from 'next/image'
import { profile } from '@/data/profile'

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Fond animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-gradient" />
      <div className="absolute inset-0 backdrop-blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-blue-500 shadow-xl transform hover:scale-105 transition-all duration-300">
            <Image
              src="/me_avatar.png" // Chemin corrigé pour l'image
              alt="Clément Delaunoy"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
              unoptimized
            />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            {profile.name}
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Ingénieur DevOps en Alternance
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-300">
            Passionné par le développement et les nouvelles technologies, 
            je suis actuellement en alternance et en formation pour devenir DevOps.
          </p>
          <div className="flex justify-center gap-6">
            {Object.entries(profile.links).slice(0, 3).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/90 dark:bg-gray-800/90 rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
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
