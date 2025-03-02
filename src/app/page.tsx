import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import { Analytics } from '@vercel/analytics/react'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Analytics/>
      <Footer />
    </main>
  )
}
