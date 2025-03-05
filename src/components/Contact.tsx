import { profile } from '@/data/profile'

export default function Contact() {
  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
          <p className="text-lg mb-6">
            N&apos;hésitez pas à me contacter pour toute opportunité ou question.
          </p>
          <a 
            href={`mailto:${profile.email}`}
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  )
}
