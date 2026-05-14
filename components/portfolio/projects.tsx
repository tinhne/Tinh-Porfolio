"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  image: string;
  tech: string[];
  /** Recruiter-facing: Backend, Full-Stack, AI/ML, Desktop */
  roleTags: string[];
  features: string[];
  github?: string;
  live?: string;
  demo?: string;
  year: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Book Review Platform",
    description:
      "Full-stack book catalogue with JWT auth, dual review types, and server-driven listing with search and filters. Spring handles business rules; React is the client.",
    challenge:
      "Keeping writes consistent when reviews and likes touch several tables, and exposing a fast listing API without pushing pagination logic to the client.",
    solution:
      "Spring Security for JWT, service layer with @Transactional on multi-step operations, global exception handling and validation at the boundary, plus CORS tuned for the React app. Listing uses server-side pagination with filterable queries.",
    image: "/bookreview.png",
    tech: ["Java", "Spring Boot", "Spring Security", "React", "PostgreSQL"],
    roleTags: ["Full-Stack", "Backend"],
    features: [
      "JWT authentication (Spring Security)",
      "Book listing, dual review system, toggle-like",
      "Server-side pagination, search & filter",
      "@Transactional rollback on multi-step writes",
      "CORS, input validation, global error handling",
    ],
    live: "https://book-review-frontend-eta.vercel.app/",
    year: "2024",
  },
  {
    id: "02",
    title: "MeetAI — AI Video Meeting SaaS",
    description:
      "Video meetings with live AI transcription and summaries, subscription billing, and heavy AI work moved off the request path so the app stays responsive.",
    challenge:
      "Multimodal AI is slow and bursty; charging users fairly meant wiring payments without blocking calls or transcript pipelines.",
    solution:
      "Next.js and Node for the product surface, Drizzle for typed persistence, Inngest for async AI and follow-up jobs, Polar for subscriptions, and OpenAI’s multimodal live API behind that queue. Deployed on Vercel with CI/CD.",
    image: "/meetAI.png",
    tech: [
      "Next.js",
      "Node.js",
      "OpenAI API",
      "Drizzle ORM",
      "Inngest",
      "Polar",
    ],
    roleTags: ["Full-Stack"],
    features: [
      "Real-time video calls",
      "AI transcription & summarization (OpenAI Multimodal Live API)",
      "Background jobs with Inngest — AI work off the request cycle",
      "Subscriptions & payments (Polar)",
      "CI/CD on Vercel",
    ],
    github: "https://github.com/tinhne/meetai",
    live: "https://meetai-assistant.vercel.app",
    year: "2025",
  },
  {
    id: "03",
    title: "Devhelp — Mezon Developer Bot",
    description:
      "NestJS bot for Mezon: command snippets, bug triage with severity, and linked solutions — searchable and recoverable after soft deletes.",
    challenge:
      "Teams needed one place to save commands, log bugs, and attach fixes, with search that still worked after archiving or soft-deleting entries.",
    solution:
      "Modular NestJS services, SQLite with full-text search across commands, bugs, and solutions, soft delete with restore, and bot lifecycle commands (activate / deactivate / reset) on top of the Mezon SDK.",
    image: "/mezon.png",
    tech: ["NestJS", "TypeScript", "SQLite", "Mezon SDK"],
    roleTags: ["Backend"],
    features: [
      "Command CRUD (save, list, search, update, delete, restore)",
      "Bug tracking with severity (high / medium / low)",
      "Solutions linked to bugs",
      "Soft delete & restore",
      "Full-text search across commands, bugs, solutions",
      "Bot lifecycle: activate / deactivate / reset",
      "NestJS modular layout",
    ],
    github: "https://github.com/tinhne/Devhelp-mezon",
    demo: "https://drive.google.com/file/d/1v_pOt-UUMOHM4rcRLqAfRPFOAREstHLk/view?usp=sharing",
    year: "2025",
  },
  {
    id: "04",
    title: "Clinic Booking System",
    description:
      "Clinic scheduling with patient records, JWT-protected APIs, and Stream-powered calls so staff and patients can connect without a separate app stack.",
    challenge:
      "Appointments, identity, and real-time media each have different failure modes; the UI still had to feel like one product.",
    solution:
      "Express and PostgreSQL for scheduling and patient CRUD, JWT for auth boundaries, Stream for call rooms, and notification hooks when appointment status changes.",
    image:
      "https://res.cloudinary.com/dbgcpl6na/image/upload/v1775275949/original-62ae0e71b2d38d9c067f19bf8b976309_rhrlpk.webp",
    tech: ["Node.js", "Express.js", "React", "PostgreSQL", "Stream API"],
    roleTags: ["Full-Stack"],
    features: [
      "Appointment scheduling",
      "Patient CRUD",
      "JWT authentication",
      "Real-time calls (Stream API)",
      "Automated status notifications",
    ],
    github: "https://github.com/tinhne/Clinic-Management",
    year: "2024",
  },
  {
    id: "05",
    title: "MazaBank — Desktop Banking App",
    description:
      "JavaFX desktop app for a small bank: role-based admin and client flows, transfers, deposits, and account types with different limits — all persisted locally.",
    challenge:
      "Desktop state, table-heavy UIs, and money movements need predictable lifecycle and clear feedback without a web framework doing layout for you.",
    solution:
      "JavaFX views with CSS, singletons for shared model and stage lifecycle, custom list cell factories for transactions and clients, and SQLite with explicit connection handling and user-visible errors.",
    image: "/mazebank.png",
    tech: ["Java", "JavaFX", "SQLite"],
    roleTags: ["Desktop"],
    features: [
      "Roles: Admin & Client",
      "Transfers, deposits, full transaction history",
      "Checking & Savings with transaction limits",
      "Singleton pattern for model & stage lifecycle",
      "Custom cell factories (transactions, clients)",
      "SQLite persistence with connection & error handling",
      "Custom JavaFX UI + CSS",
    ],
    github: "https://github.com/tinhne/MazaBank",
    year: "2024",
  },
  {
    id: "06",
    title: "Medical Diagnosis Chatbot",
    description:
      "Symptom-to-diagnosis pipeline combining gradient boosting and association rules, with a Spring Boot API for access control in front of the Python ML core.",
    challenge:
      "Medical labels are sparse and noisy; the model had to train on cleaned and partly synthetic data while staying explainable enough for a demo product.",
    solution:
      "Crawled and normalised terms from Disease Ontology, generated and cleaned synthetic cases, trained XGBoost with Apriori-style rules for patterns, and exposed the flow through Spring Boot authentication layers.",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop",
    tech: ["Python", "XGBoost", "Apriori", "Pandas", "Java", "Spring Boot"],
    roleTags: ["AI/ML", "Backend"],
    features: [
      "ML engine: XGBoost + association rules",
      "Pipeline from Disease Ontology crawl",
      "Synthetic data & cleaning",
      "Auth via Java Spring Boot",
    ],
    github: "https://github.com/tinhne/capstons2",
    year: "2025",
  },
];

export function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="works"
      aria-labelledby="works-heading"
      className="py-28 md:py-32 relative scroll-mt-11 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-16 max-w-2xl border-l-2 border-primary/35 pl-5 md:pl-6"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Selected work
          </p>
          <h2
            id="works-heading"
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground tracking-tight"
          >
            Projects
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Click a row for context, stack, and links.{" "}
            <span className="text-foreground/80">{projects.length} builds</span>{" "}
            below.
          </p>
        </motion.div>

        <div className="space-y-0 divide-y divide-border">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer py-8 first:pt-0 relative"
            >
              <div className="grid lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-1">
                  <span className="font-mono text-sm text-muted-foreground">
                    {project.id}
                  </span>
                </div>

                <div className="lg:col-span-4 space-y-3">
                  <h3
                    className="text-xl md:text-2xl font-medium text-foreground group-hover:text-primary 
                               transition-colors duration-200"
                  >
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.year}
                    </span>
                    <span className="text-border" aria-hidden>
                      ·
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.roleTags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="font-mono text-[10px] uppercase tracking-wide px-2 py-0 h-5 border-muted-foreground/30 text-muted-foreground group-hover:border-primary/40 group-hover:text-primary/90"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground
                                 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="px-2 py-1 text-xs font-mono text-muted-foreground">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-3 flex justify-end items-start">
                  <motion.div
                    animate={{ x: hoveredId === project.id ? 8 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2 text-muted-foreground group-hover:text-primary 
                             transition-colors duration-200"
                  >
                    <span className="font-mono text-sm">Details</span>
                    <svg
                      className="w-5 h-5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>

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
                      alt=""
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

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center 
                     justify-center p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-lg"
            >
              <div className="relative h-56 md:h-72">
                <Image
                  src={selectedProject.image}
                  alt=""
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-background/80 border border-border
                           flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Close"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6">
                  <div>
                    <span className="font-mono text-sm text-primary">
                      {selectedProject.year}
                    </span>
                    <h3
                      id="project-modal-title"
                      className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-2"
                    >
                      {selectedProject.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedProject.roleTags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="font-mono text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
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
                        Live
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-primary/50 font-mono text-sm text-primary
                                 hover:bg-primary/10 transition-colors"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                    Core features
                  </span>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5 marker:text-primary/60">
                    {selectedProject.features.map((f) => (
                      <li key={f} className="leading-relaxed">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="border-l-2 border-destructive/70 pl-4">
                    <span className="font-mono text-xs text-destructive uppercase tracking-widest">
                      Challenge
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div className="border-l-2 border-emerald-600/70 dark:border-emerald-500/70 pl-4">
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-500 uppercase tracking-widest">
                      Approach
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                    Tech stack
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
  );
}
