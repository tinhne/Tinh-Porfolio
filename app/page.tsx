import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { AiBuilder } from "@/components/portfolio/ai-builder"
import { Skills } from "@/components/portfolio/skills"
import { Achievements } from "@/components/portfolio/achievements"
import { Contact } from "@/components/portfolio/contact"

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <AiBuilder />
      <Skills />
      <Achievements />
      <Contact />
    </main>
  )
}
