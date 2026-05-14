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
      "6-month internship focused on building and maintaining production backend services, following Clean Architecture principles for maintainability and scalability.",
    achievements: [
      "Built production backend services using Fastify + TypeScript with Clean Architecture",
      "Designed REST & tRPC APIs handling concurrent requests with optimized DB queries",
      "Containerized services with Docker and automated workflows via Bash scripting",
      "Contributed Next.js + shadcn/ui frontend components for internal tooling",
    ],
    tech: [
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
    period: "Jan 2025 — May 2025",
    description:
      "1-on-1 tutoring sessions on data visualization, DAX formulas, and interactive dashboard design using Power BI.",
    achievements: [
      "Delivered personalized 1-on-1 tutoring sessions on data visualization",
      "Helped students build interactive dashboards and reports",
      "Strengthened communication and mentoring skills through structured instruction",
    ],
    tech: ["Power BI", "Data Visualization", "DAX", "Data Modeling"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
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
            Experience
          </p>
          <h2
            id="experience-heading"
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground tracking-tight"
          >
            Roles &amp; impact
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl">
            Recent positions, newest first.
          </p>
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
