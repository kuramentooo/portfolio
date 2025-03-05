'use client'

import { useState } from 'react'
import { profile } from '@/data/profile'

const LanguageLevel = ({ level }: { level: string }) => {
  const getLevel = (level: string) => {
    if (level.includes('B1')) return 60;
    if (level.includes('B2')) return 75;
    if (level.includes('C1')) return 90;
    return 45;
  }

  const percentage = getLevel(level)

  return (
    <div className="w-full">
      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
        <div 
          className="h-full bg-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{level}</p>
    </div>
  )
}

export default function About() {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);

  return (
    <section id="about" className="py-20 scroll-mt-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">À propos</h2>
        
        {/* Expériences */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Expériences Professionnelles</h3>
          <div className="space-y-6">
            {profile.experiences.map((exp, index) => (
              <div 
                key={index} 
                className="p-6 border rounded-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white dark:bg-gray-800"
                onClick={() => setExpandedExp(expandedExp === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-lg text-blue-600 dark:text-blue-400">
                      {exp.company}
                      {exp.website && (
                        <a 
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-sm text-gray-500 hover:text-blue-500"
                          onClick={(e) => e.stopPropagation()}
                        >
                          🔗
                        </a>
                      )}
                    </h4>
                    {exp.location && (
                      <p className="text-sm text-gray-500">
                        {exp.location.address}, {exp.location.postalCode} {exp.location.city}
                      </p>
                    )}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</span>
                </div>
                <p className="font-medium mt-2">{exp.role}</p>
                {expandedExp === index && (
                  <div className="mt-4 space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                      {exp.details}
                    </p>
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Formation avec nouveau design */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Formation</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
            <div className="space-y-12">
              {profile.education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className={`p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg ${
                    index % 2 === 0 ? 'ml-8' : 'mr-8'
                  }`}>
                    <h4 className="font-bold text-lg">
                      {edu.degree}
                      {edu.website && (
                        <a 
                          href={edu.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-sm text-gray-500 hover:text-blue-500"
                        >
                          🔗
                        </a>
                      )}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400">{edu.school}</p>
                    {edu.location && (
                      <p className="text-sm text-gray-500">
                        {edu.location.address}, {edu.location.postalCode} {edu.location.city}
                      </p>
                    )}
                    <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
                    <p className="mt-2">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compétences et Langues */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"></div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Compétences</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-800 dark:text-blue-200 hover:scale-105 transition-transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Langues</h3>
            <div className="space-y-6">
              {profile.languages.map((lang, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-lg">{lang.name}</span>
                  </div>
                  <LanguageLevel level={lang.level} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Centres d'intérêt */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"></div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Centres d&apos;intérêt</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {profile.interests.map((interest, index) => (
              <span 
                key={index} 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:scale-105 transition-transform shadow-md"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
