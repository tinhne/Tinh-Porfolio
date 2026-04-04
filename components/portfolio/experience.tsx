"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "exp-001",
    role: "Backend Developer Intern",
    company: "Tomosia Vietnam",
    companyUrl: "https://tomosia.com",
    period: "Mar 2025 — Oct 2025",
    description:
      "6-month internship focused on backend development, system architecture, and building production-ready projects following clean architecture standards.",
    achievements: [
      "Learned system design and clean architecture patterns",
      "Built backend projects with Node.js, TypeScript, and Fastify",
      "Worked with tRPC, Docker, and ngrok for development workflows",
      "Wrote automation scripts using Bash and implemented cronjobs",
      "Developed small projects with Next.js and shadcn/ui",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "Fastify",
      "tRPC",
      "Next.js",
      "Docker",
      "Bash",
    ],
  },
  {
    id: "exp-002",
    role: "Power BI Tutor",
    company: "Hoc Cung Chuyen Gia",
    companyUrl: "https://hoccungchuyengia.com",
    period: "2025 (5 months)",
    description:
      "1:1 tutoring for students on data visualization using Power BI. Taught data modeling, DAX formulas, and dashboard design.",
    achievements: [
      "Provided personalized 1:1 tutoring sessions",
      "Helped students build interactive dashboards and reports",
      "Improved communication and teaching skills",
    ],
    tech: ["Power BI", "Data Visualization", "DAX", "Data Modeling"],
  },
];

export function Experience() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary uppercase tracking-widest">
            // Proof of Work
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-foreground">
            My
            <br />
            <span className="italic text-muted-foreground">experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-24"
              >
                {/* Git-style commit dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-4 h-4 border-2 border-primary bg-background" />
                  {index < experiences.length - 1 && (
                    <div className="w-px h-16 bg-linear-to-b from-primary/50 to-transparent hidden md:block" />
                  )}
                </div>

                {/* Commit hash style ID */}
                <div className="font-mono text-xs text-muted-foreground mb-2">
                  <span className="text-primary">commit</span> {exp.id}
                </div>

                {/* Content */}
                <div className="border border-border p-6 bg-card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-foreground">
                        {exp.role}
                      </h3>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline underline-offset-4 inline-flex items-center gap-1"
                        >
                          {exp.company}
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="square"
                              strokeLinejoin="miter"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-muted-foreground">
                          {exp.company}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-sm text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements as git diff style */}
                  <div className="mb-4 space-y-1 font-mono text-sm">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-emerald-500 flex-shrink-0">
                          +
                        </span>
                        <span className="text-muted-foreground">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
