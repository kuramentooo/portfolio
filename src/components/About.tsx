'use client'

import { useState } from 'react'
import { profile } from '@/data/profile'

export default function About() {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);

  return (
    <section id="about" className="py-20 scroll-mt-16">
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
                  <h4 className="font-bold text-lg text-blue-600 dark:text-blue-400">{exp.company}</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</span>
                </div>
                <p className="font-medium mt-2">{exp.role}</p>
                {expandedExp === index && (
                  <p className="mt-4 text-gray-600 dark:text-gray-400 animate-fadeIn">
                    {exp.details}
                  </p>
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
                    <h4 className="font-bold text-lg">{edu.degree}</h4>
                    <p className="text-blue-600 dark:text-blue-400">{edu.school}</p>
                    <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
                    <p className="mt-2">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compétences et Langues */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Compétences</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Langues</h3>
            <div className="space-y-2">
              {profile.languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{lang.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{lang.level.replace("'", "&apos;")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Centres d&apos;intérêt */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Centres d&apos;intérêt</h3>
          <div className="flex flex-wrap gap-3">
            {profile.interests.map((interest, index) => (
              <span key={index} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
