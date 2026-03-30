"use client"

import { motion } from "framer-motion"

interface SkillCategory {
  name: string
  description: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Backend Core",
    description: "Server & API Development",
    skills: ["Node.js", "NestJS", "Fastify", "Express.js", "TypeScript", "REST API", "tRPC"],
  },
  {
    name: "Database",
    description: "Data Storage & Management",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Drizzle", "Prisma", "TypeORM", "Neon", "Pinecone"],
  },
  {
    name: "Frontend",
    description: "User Interface Development",
    skills: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "JavaScript"],
  },
  {
    name: "Tools & DevOps",
    description: "Development Tools",
    skills: ["Git", "Docker", "Postman", "VS Code", "Linux"],
  },
]

export function Skills() {
  return (
    <section className="py-32 bg-card relative overflow-hidden">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary uppercase tracking-widest">
            // Tech Stack
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-foreground">
            What I&apos;ve<br />
            <span className="italic text-muted-foreground">learned & used</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Technologies I&apos;ve learned and applied through personal projects, coursework, and internships.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="border border-border p-6 bg-background group hover:border-primary/50 transition-colors duration-300"
            >
              <div className="mb-6">
                <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                    }}
                    className="px-3 py-1.5 bg-secondary border border-border font-mono text-sm text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note for recruiters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">*</span> Always eager to learn new technologies as the job requires
          </p>
        </motion.div>
      </div>
    </section>
  )
}
