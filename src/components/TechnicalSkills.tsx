'use client'

import Image from 'next/image'
import { profile } from '@/data/profile'

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-20 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Compétences Techniques</h2>
        
        {/* Languages de programmation */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Langages de Programmation</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {profile.technicalSkills.languages.map((skill, index) => (
              <div 
                key={index}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 relative">
                    <Image
                      src={`/portfolio/icons/${skill.logo}`}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{skill.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</p>
                  </div>
                </div>
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
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 relative">
                    <Image
                      src={`/portfolio/icons/${tool.logo}`}
                      alt={tool.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{tool.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{tool.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Platforms */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Cloud</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {profile.technicalSkills.cloud.map((platform, index) => (
              <div 
                key={index}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 relative">
                    <Image
                      src={`/portfolio/icons/${platform.logo}`}
                      alt={platform.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{platform.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{platform.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
