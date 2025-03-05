'use client'

import Image from 'next/image'
import { profile } from '@/data/profile'
import { useState } from 'react'

export default function TechnicalSkills() {
  const [imageError, setImageError] = useState<{[key: string]: boolean}>({})

  const handleImageError = (name: string) => {
    setImageError(prev => ({...prev, [name]: true}))
    console.error(`Failed to load image for ${name}`)
  }

  const renderTechItem = (item: { name: string; logo: string; level: string }) => (
    <div className="flex items-center space-x-4">
      <div className="w-16 h-16 relative flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
        {!imageError[item.name] ? (
          <Image
            src={`/portfolio/logos/${item.logo}`}
            alt={item.name}
            width={40}
            height={40}
            className="object-contain"
            onError={() => handleImageError(item.name)}
            priority
          />
        ) : (
          <span className="text-2xl">{item.name[0]}</span>
        )}
      </div>
      <div>
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{item.level}</p>
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Compétences Techniques</h2>
        
        {/* Languages de programmation */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Langages de Programmation</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {profile.technicalSkills.languages.map((skill, index) => (
              <div 
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                {renderTechItem(skill)}
              </div>
            ))}
          </div>
        </div>

        {/* DevOps Tools */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Outils DevOps</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {profile.technicalSkills.devops.map((tool, index) => (
              <div 
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                {renderTechItem(tool)}
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Platforms */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Cloud</h3>
          <div className="grid grid-cols-2 gap-6">
            {profile.technicalSkills.cloud.map((platform, index) => (
              <div 
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                {renderTechItem(platform)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
