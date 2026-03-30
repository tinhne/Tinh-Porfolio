import { Hero } from "@/components/portfolio/hero"
import { Projects } from "@/components/portfolio/projects"
import { Skills } from "@/components/portfolio/skills"
import { Experience } from "@/components/portfolio/experience"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </main>
  )
}
