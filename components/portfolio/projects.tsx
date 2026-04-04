"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface Project {
  id: string
  title: string
  description: string
  challenge: string
  solution: string
  image: string
  tech: string[]
  github?: string
  live?: string
  year: string
}

const projects: Project[] = [
  {
    id: "01",
    title: "MeetAI - Video Call SaaS",
    description: "A full-stack SaaS platform that enables video calls with AI-powered meeting summaries and transcription features.",
    challenge: "Building a complete video calling solution with real-time AI processing for meeting summaries while managing user authentication and subscription states.",
    solution: "Built with Next.js App Router for the full-stack architecture, Drizzle ORM for type-safe database operations, and BetterAuth for secure authentication. Integrated AI services for automatic call transcription and summary generation.",
    image: "https://res.cloudinary.com/dbgcpl6na/image/upload/v1775272140/Screenshot_2026-04-04_at_10.05.58_pte6am.png",
    tech: ["Next.js", "TypeScript", "Drizzle ORM", "BetterAuth", "PostgreSQL", "AI SDK"],
    github: "https://github.com/tinhne/meetai",
    live: "https://meetai-assitant.vercel.app",
    year: "2026",
  },
  {
    id: "02",
    title: "Blog API Backend",
    description: "A production-ready RESTful API for a blog platform with comprehensive backend features including authentication, caching, and API documentation.",
    challenge: "Designing a scalable and maintainable backend architecture with proper security measures, rate limiting, and developer-friendly documentation.",
    solution: "Implemented using Node.js with Fastify framework for high performance. Added JWT authentication, Redis-based rate limiting, Swagger for API documentation, response caching, and Zod schema validation for type-safe request handling.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    tech: ["Node.js", "Fastify", "JWT Auth", "Redis", "Swagger", "Zod"],
    github: "https://github.com/tinhne/blogFinalProject",
    year: "2025",
  },
  {
    id: "03",
    title: "Clinic Booking System",
    description: "A healthcare appointment booking application with patient management, scheduling system, and an integrated chatbot for patient inquiries.",
    challenge: "Building a reliable booking system that handles concurrent appointments, user authorization levels (admin/doctor/patient), and integrating a helpful chatbot assistant.",
    solution: "Developed the complete backend including authentication & authorization system, appointment scheduling logic with conflict prevention, database schema design, and chatbot integration for answering common patient questions.",
    image: "https://res.cloudinary.com/dbgcpl6na/image/upload/v1775275949/original-62ae0e71b2d38d9c067f19bf8b976309_rhrlpk.webp",
    tech: ["Node.js", "React", "MongoDB", "JWT", "Chatbot", "Prisma", "Stream"],
    github: "https://github.com/tinhne/Clinic-Management",
    year: "2024",
  },
  {
    id: "04",
    title: "Medical Diagnosis Chatbot",
    description: "An ML-powered chatbot that analyzes symptoms and suggests potential diagnoses based on disease ontology data and association rule mining.",
    challenge: "Collecting and processing medical data from Disease Ontology, finding meaningful relationships between symptoms and diseases, and training an accurate prediction model.",
    solution: "Crawled data from Disease Ontology database, applied Association Rule Mining to discover entity relationships, performed data cleaning and preprocessing, generated synthetic user data for training. Built classification model using XGBoost. Note: Achieved 60% accuracy - identified that database quality and association rules need improvement for better results.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop",
    tech: ["Python", "XGBoost", "Data Crawling", "Association Rules", "Pandas", "Scikit-learn"],
    github: "https://github.com",
    year: "2025",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="works" className="py-32 relative">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <span className="font-mono text-sm text-primary uppercase tracking-widest">
              // Selected Works
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-foreground">
              Projects I&apos;ve<br />
              <span className="italic text-muted-foreground">built & learned from</span>
            </h2>
          </div>
          <span className="hidden md:block font-mono text-6xl text-border font-bold">
            {projects.length.toString().padStart(2, "0")}
          </span>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer border-t border-border py-8 relative"
            >
              <div className="grid lg:grid-cols-12 gap-6 items-center">
                {/* Project number */}
                <div className="lg:col-span-1">
                  <span className="font-mono text-sm text-muted-foreground">
                    {project.id}
                  </span>
                </div>

                {/* Project title & year */}
                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-medium text-foreground group-hover:text-primary 
                               transition-colors duration-200">
                    {project.title}
                  </h3>
                  <span className="font-mono text-sm text-muted-foreground mt-1 block">
                    {project.year}
                  </span>
                </div>

                {/* Tech stack */}
                <div className="lg:col-span-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground
                                 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-xs font-mono text-muted-foreground">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="lg:col-span-3 flex justify-end">
                  <motion.div
                    animate={{ x: hoveredId === project.id ? 8 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2 text-muted-foreground group-hover:text-primary 
                             transition-colors duration-200"
                  >
                    <span className="font-mono text-sm">View Details</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Hover image preview */}
              <AnimatePresence>
                {hoveredId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-0 w-64 h-48 pointer-events-none z-10 hidden xl:block"
                    style={{ transform: "translate(20%, -20%)" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover border border-border"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center 
                     justify-center p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal header */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-background/80 border border-border
                           flex items-center justify-center hover:bg-background transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal content */}
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="font-mono text-sm text-primary">{selectedProject.year}</span>
                    <h3 className="text-3xl font-serif font-bold text-foreground mt-2">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <div className="flex gap-3">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-border font-mono text-sm 
                                 hover:border-primary hover:text-primary transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary text-primary-foreground font-mono text-sm 
                                 hover:bg-primary/90 transition-colors"
                      >
                        Live Site
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                {/* Challenge vs Solution */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="border-l-2 border-destructive pl-4">
                    <span className="font-mono text-xs text-destructive uppercase tracking-widest">
                      Challenge
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-4">
                    <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">
                      Solution
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Tech stack */}
                <div>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                    Tech Stack
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm font-mono bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
