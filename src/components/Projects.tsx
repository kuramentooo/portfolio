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
    Run npm run build

    > clement-delaunoy-portfolio@0.1.0 build
    > next build
    
    ⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
    Attention: Next.js now collects completely anonymous telemetry regarding usage.
    This information is used to shape Next.js' roadmap and prioritize features.
    You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
    https://nextjs.org/telemetry
    
      ▲ Next.js 14.2.24
    
       Creating an optimized production build ...
     ✓ Compiled successfully
       Linting and checking validity of types ...
    
    Failed to compile.
    
    ./src/components/Projects.tsx
    81:53  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
    
    info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules
    Error: Process completed with exit code 1.    // Garder seulement les projets manuels qui ne sont pas sur GitHub
    ...profile.projects.filter(manualProject => 
      !githubProjects.some(githubProject => 
        githubProject.html_url === manualProject.url
      )
    ),
    // Ajouter les projets GitHub
    ...githubProjects.map(repo => {
      const technologies = [
        ...(repo.topics || []),
        ...(repo.languages || []),
        repo.language
      ].filter((tech): tech is string => Boolean(tech));
      
      const uniqueTech = Array.from(new Set(technologies));

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
