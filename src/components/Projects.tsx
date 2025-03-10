'use client'

import { useEffect, useState } from 'react'
import { profile } from '@/data/profile'
import AnimatedSection from './AnimatedSection'

interface GithubRepo {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  topics: string[]
  stargazers_count: number
  updated_at: string
  fork: boolean
  language: string
  languages_url: string
}

interface RepoWithLanguages extends GithubRepo {
  languages?: string[]
}

export default function Projects() {
  const [githubProjects, setGithubProjects] = useState<RepoWithLanguages[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/kuramentooo/repos')
        const data = await response.json()
        
        // Récupérer les langages pour chaque repo
        const reposWithLanguages = await Promise.all(
          data.map(async (repo: GithubRepo) => {
            try {
              const langResponse = await fetch(repo.languages_url)
              const languages = await langResponse.json()
              return {
                ...repo,
                languages: Object.keys(languages)
              }
            } catch (error) {
              return {
                ...repo,
                languages: []
              }
            }
          })
        )
        
        const repos = reposWithLanguages
          .filter((repo: RepoWithLanguages) => !repo.fork)
          .sort((a: RepoWithLanguages, b: RepoWithLanguages) => 
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          )
        
        setGithubProjects(repos)
      } catch (error) {
        console.error('Error fetching GitHub projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGithubProjects()
  }, [])

  // Combine manual and GitHub projects
  const allProjects = [
    ...profile.projects,
    ...githubProjects.map(repo => {
      const technologies = [
        ...(repo.topics || []),
        ...(repo.languages || []),
        repo.language
      ].filter(Boolean);
      
      // Remove duplicates using Array.from instead of Set
      const uniqueTech = Array.from(new Object() as any, function* () {
        const seen = new Set();
        for (const tech of technologies) {
          if (!seen.has(tech)) {
            seen.add(tech);
            yield tech;
          }
        }
      }());

      return {
        name: repo.name,
        description: repo.description || 'Projet personnel',
        url: repo.html_url,
        demoUrl: repo.homepage,
        tech: uniqueTech
      };
    })
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projets</h2>
        {loading ? (
          <div className="text-center">Chargement des projets...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allProjects.map((project, index) => (
              <AnimatedSection
                key={index}
                className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 h-20 overflow-y-auto">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 rounded-full capitalize"
                      >
                        {tech.toLowerCase()}
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
        )}
      </div>
    </section>
  )
}
