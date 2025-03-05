'use client'

import { profile } from '@/data/profile'
import AnimatedSection from './AnimatedSection'

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profile.projects.map((project, index) => (
            <AnimatedSection
              key={index}
              className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Code source
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 transition-colors"
                    >
                      Démo live
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
