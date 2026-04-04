"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme, systemTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 rounded-full bg-background border border-border shadow-md w-11 h-11" />
    )
  }

  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <button
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] p-3 rounded-full bg-background border border-border hover:border-primary shadow-md hover:scale-105 transition-all duration-200 text-foreground group focus:outline-none focus:ring-2 focus:ring-ring"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 dark:hidden block text-amber-500 transition-transform group-hover:rotate-45" />
      <Moon className="h-5 w-5 hidden dark:block text-primary transition-transform group-hover:-rotate-12" />
    </button>
  )
}
