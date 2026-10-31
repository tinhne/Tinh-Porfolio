// Re-mounts on every route change, so each page fades in. CSS-only: no hydration wait.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>
}
