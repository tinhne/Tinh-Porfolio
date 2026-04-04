"use client"

import { motion } from "framer-motion"

export function Footer() {

  return (
    <footer className="py-24 border-t border-border relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* CTA Section */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-sm text-primary uppercase tracking-widest">
                // Let&apos;s Connect
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Have a project in mind?<br />
                <span className="italic text-muted-foreground">Let&apos;s build it together.</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-lg">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href="mailto:levantrungtinh13@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 bg-primary text-primary-foreground font-mono text-sm 
                           border-2 border-primary hover:bg-transparent hover:text-primary
                           transition-colors duration-200 inline-block cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact With me
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-5 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-8"
            >
              {/* Social Links */}
              <div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  Social
                </span>
                <ul className="mt-4 space-y-3">
                  {[
                    { name: "GitHub", href: "https://github.com/tinhne" },
                    { name: "LinkedIn", href: "https://www.linkedin.com/in/trung-t%C3%ADnh-l%C3%AA-v%C4%83n-b72669297/" },
                  ].map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors duration-200 
                                 inline-flex items-center gap-2 group"
                      >
                        {link.name}
                        <svg 
                          className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 
                                   group-hover:translate-x-0 transition-all duration-200" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  Quick Links
                </span>
                <ul className="mt-4 space-y-3">
                  {[
                    { name: "Works", href: "#works" },
                    { name: "About", href: "#hero" },
                    { name: "Resume", href: "/resume.pdf" },
                    { name: "Blog", href: "/blog" },
                  ].map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-foreground hover:text-primary transition-colors duration-200 
                                 inline-flex items-center gap-2 group"
                      >
                        {link.name}
                        <svg 
                          className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 
                                   group-hover:translate-x-0 transition-all duration-200" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-mono text-sm text-muted-foreground">
            Designed & Built by <span className="text-foreground">Le Van Trung Tinh</span>
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} — Made with Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
