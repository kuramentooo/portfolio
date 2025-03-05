export default function Projects() {
  const projects = [
    {
      title: "Script Route Table",
      description: "Script d'automatisation pour tables de routage",
      url: "https://github.com/kuramentooo/script-routetable"
    },
    {
      title: "LinkHub",
      description: "Hub de liens personnalisé",
      url: "https://github.com/kuramentooo/LinkHub"
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
