"use client"

import { motion } from "framer-motion"

interface SkillCategory {
  name: string
  description: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Core Languages",
    description: "Primary Languages & Frameworks",
    skills: [
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Java",
      "Spring Boot",
      "NestJS",
      "React",
      "Next.js",
      "Fastify",
      "Express.js",
      "REST API",
      "tRPC",
    ],
  },
  {
    name: "Database & ORM",
    description: "Data Storage & Management",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Drizzle ORM", "Prisma", "Neon", "Pinecone"],
  },
  {
    name: "AI / ML",
    description: "Machine Learning & AI Integration",
    skills: ["OpenAI API", "XGBoost", "Association Rules", "Pandas", "FastAPI", "Scikit-learn"],
  },
  {
    name: "DevOps & Tools",
    description: "Development & Deployment",
    skills: ["Docker", "Git", "Linux", "Bash Scripting", "Postman", "Vercel", "Inngest", "Tailwind CSS"],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-28 md:py-32 bg-card relative overflow-hidden scroll-mt-11"
    >
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-16 max-w-2xl border-l-2 border-primary/35 pl-5 md:pl-6"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Stack
          </p>
          <h2
            id="skills-heading"
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground tracking-tight"
          >
            Tools I use
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl">
            Pulled from real projects and work — not a keyword dump.
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
