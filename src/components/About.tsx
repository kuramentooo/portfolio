import { profile } from '@/data/profile'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">À propos</h2>
        
        {/* Expériences */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Expériences Professionnelles</h3>
          <div className="space-y-6">
            {profile.experiences.map((exp, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg">{exp.company}</h4>
                <p className="text-gray-600 dark:text-gray-400">{exp.period}</p>
                <p className="mt-2">{exp.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Formation */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Formation</h3>
          <div className="space-y-6">
            {profile.education.map((edu, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h4 className="font-bold text-lg">{edu.degree}</h4>
                <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
                <p>{edu.school}</p>
              </div>
            ))}
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
