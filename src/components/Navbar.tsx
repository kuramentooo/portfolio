'use client'

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <button 
            onClick={scrollToTop}
            className="flex items-center text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-80 transition-opacity"
          >
            Clément Delaunoy
          </button>
          
          <div className="flex items-center space-x-8">
            {['about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative group px-3 py-2"
              >
                <span className="relative z-10 capitalize">
                  {section === 'about' ? 'À propos' : 
                   section === 'skills' ? 'Compétences' : 
                   section === 'projects' ? 'Projets' : 'Contact'}
                </span>
                <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg scale-0 group-hover:scale-100 transition-transform origin-left" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
