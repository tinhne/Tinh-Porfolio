"use client";

const navItems: { href: string; label: string; external?: boolean }[] = [
  { href: "#hero", label: "Top" },
  { href: "#works", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  {
    href: "/LeVanTrungTinh_CV.pdf",
    label: "CV",
    external: true,
  },
];

export function SectionNav() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex h-11 items-center justify-start gap-0 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {navItems.map((item, i) => (
            <span key={item.href} className="flex shrink-0 items-center">
              {i > 0 && (
                <span
                  className="mx-2.5 text-muted-foreground/40 select-none"
                  aria-hidden
                >
                  ·
                </span>
              )}
              <a
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground 
                         hover:text-foreground transition-colors py-2 whitespace-nowrap"
              >
                {item.label}
              </a>
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
