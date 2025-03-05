import { profile } from '@/data/profile'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">À propos</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Expériences</h3>
            {profile.experiences.map((exp, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-medium">{exp.company}</h4>
                <p className="text-gray-600 dark:text-gray-400">{exp.period}</p>
                <p>{exp.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
