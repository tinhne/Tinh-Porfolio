import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main id="main" className="container-x flex min-h-[80dvh] flex-col justify-center pb-16 pt-32">
      <p className="label">
        <span className="text-brand">Error 404</span> — Route not found
      </p>
      <h1 className="display mt-8 max-w-[12ch] text-ink">
        Nothing is wired up here<span className="text-brand">.</span>
      </h1>
      <p className="lead mt-6 max-w-[44ch] text-ink-3">
        The page you asked for doesn&apos;t exist, or it moved during the redesign.
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex h-12 w-fit items-center gap-3 rounded-[2px] bg-ink px-5 text-[16px] font-medium text-canvas transition-colors hover:bg-brand hover:text-on-brand"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden />
        Back to the portfolio
      </Link>
    </main>
  )
}
