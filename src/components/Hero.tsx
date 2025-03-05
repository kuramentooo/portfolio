import { profile } from '@/data/profile'

export default function Hero() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          {profile.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Développeur Full Stack & DevOps
        </p>
      </div>
    </section>
  )
}
