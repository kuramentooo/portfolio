import Hero from '@/components/Hero'
import About from '@/components/About'
import TechnicalSkills from '@/components/TechnicalSkills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <TechnicalSkills />
      <Projects />
      <Contact />
    </div>
  )
}
