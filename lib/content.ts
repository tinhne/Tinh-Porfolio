/**
 * Single source of truth for portfolio content.
 *
 * Everything here is backed by the CV in /public, the public GitHub repos
 * under github.com/tinhne, or details Tinh supplied directly. Items marked
 * `CONFIRM:` still need a final check from Tinh before they are treated as fact.
 */

export const site = {
  name: "Le Van Trung Tinh",
  shortName: "Trung Tinh",
  role: "Software Engineer",
  title: "Software Engineer · AI Product Builder",
  statement:
    "Building full-stack applications, AI-powered products, and practical software solutions.",
  url: "https://trungtinh.site",
  location: "Da Nang, Vietnam",
  coords: "16.05°N 108.20°E",
  timezone: "Asia/Ho_Chi_Minh",
  // CONFIRM: the latest CV prints levantrungtinh@gmail.com, but the site, the
  // older CV's mailto link and the git author all use this address.
  email: "levantrungtinh13@gmail.com",
  github: "https://github.com/tinhne",
  linkedin:
    "https://www.linkedin.com/in/trung-t%C3%ADnh-l%C3%AA-v%C4%83n-b72669297/",
  resume: "/LeVanTrungTinh_CV.pdf",
  resumeFileName: "LeVanTrungTinh_CV.pdf",
  // Shown in the hero only when set. Leave null unless it is currently true.
  availability: null as string | null,
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "ai", label: "AI & Product" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

/* ------------------------------------------------------------------ */
/* Evidence references — where a skill or capability was actually used */
/* ------------------------------------------------------------------ */

export type RefId =
  | "meet-ai"
  | "book-review"
  | "vehicle-telemetry"
  | "margick"
  | "tomosia"
  | "devhelp"
  | "clinic"
  | "blog-api"
  | "mazabank"
  | "medical-chatbot";

export const refs: Record<RefId, { label: string; href: string }> = {
  "meet-ai": { label: "Meet.AI", href: "/work/meet-ai" },
  "book-review": { label: "Book Review", href: "/work/book-review" },
  "vehicle-telemetry": {
    label: "Vehicle Telemetry",
    href: "/work/vehicle-telemetry",
  },
  margick: { label: "Margick", href: "/#experience" },
  tomosia: { label: "Tomosia", href: "/#experience" },
  devhelp: { label: "Devhelp Bot", href: "https://github.com/tinhne/Devhelp-mezon" },
  clinic: { label: "Clinic Booking", href: "https://github.com/tinhne/Clinic-Management" },
  "blog-api": { label: "Blog API", href: "https://github.com/tinhne/blogFinalProject" },
  mazabank: { label: "MazaBank", href: "https://github.com/tinhne/MazaBank" },
  "medical-chatbot": {
    label: "Medical Chatbot",
    href: "https://github.com/tinhne/capstons2",
  },
};

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  heading: "Engineering ideas into real products.",
  paragraphs: [
    "I'm Tinh, a software engineer from Da Nang. I studied Information Technology at Duy Tan University, interned on production backend services at Tomosia, and now work on product engineering at Margick, a startup building a SaaS website builder.",
    "Most of my work sits where backend systems meet the product: APIs, data models, background jobs, and the interface that makes them useful. Lately that includes AI — putting models like Gemini and OpenAI behind real features, and using coding agents to move faster without lowering the bar on review and testing.",
  ],
  facts: [
    { label: "Based in", value: "Da Nang, Vietnam · GMT+7" },
    { label: "Education", value: "B.IT, Duy Tan University, 2025" },
    { label: "Builds with", value: "TypeScript, Java, PostgreSQL" },
    { label: "AI in use", value: "Gemini, OpenAI, Claude Code" },
    { label: "Code", value: "github.com/tinhne" },
  ],
};

export const approach = [
  {
    title: "Understand",
    body: "Start from the user and the constraint, not the stack. Agree on what “done” means before writing code.",
  },
  {
    title: "Design",
    body: "Sketch the data model and the boundaries first — what must be consistent, what can run in the background.",
  },
  {
    title: "Build",
    body: "Small, typed, reviewable increments. AI agents speed up the typing; the decisions stay mine.",
  },
  {
    title: "Verify",
    body: "Reproduce a bug before fixing it. Test the paths that can lose data, money or trust.",
  },
  {
    title: "Improve",
    body: "Ship, watch how it's actually used, then fix what hurts most — not what's most fun.",
  },
];

export const exploring = [
  {
    topic: "AI application engineering",
    detail: "Agent workflows, tool calling, evaluating output quality",
  },
  {
    topic: "LLM-powered products",
    detail: "Retrieval, structured output, cost and latency trade-offs",
  },
  {
    topic: "Backend architecture",
    detail: "Event-driven design, queues, idempotent jobs",
  },
  {
    topic: "Software quality",
    detail: "Testing strategy, observability, readable code at scale",
  },
  {
    topic: "Automation",
    detail: "Connecting APIs into workflows that remove manual steps",
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export type Experience = {
  company: string;
  url?: string;
  role: string;
  period: string;
  current?: boolean;
  location: string;
  kind: string;
  context: string;
  contributions: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: "Margick",
    url: "https://margick.com",
    // CONFIRM: exact title and start date.
    role: "Software Engineer · Product Engineering",
    period: "Present",
    current: true,
    location: "Vietnam",
    kind: "Startup",
    context:
      "Margick builds a multi-tenant SaaS website builder with AI-assisted site creation, on top of the WordPress / WooCommerce ecosystem.",
    // CONFIRM: these describe Tinh's own contributions, not the whole product.
    contributions: [
      "Build and maintain website features and templates inside the multi-tenant website builder.",
      "Turn Figma designs into responsive, production-ready pages across desktop, tablet and mobile.",
      "Use AI coding agents (Claude Code) daily for implementation, refactoring, debugging and documentation — every change still goes through my own review.",
      "Debug site functionality and fix layout, performance and quality issues before release.",
    ],
    tech: ["WordPress", "WooCommerce", "Elementor", "PHP", "JavaScript", "Claude Code"],
  },
  {
    company: "Tomosia Vietnam",
    url: "https://tomosia.com",
    role: "Backend Developer Intern",
    period: "Mar 2025 — Oct 2025",
    location: "Da Nang",
    kind: "Internship",
    context:
      "Six months on a product team building backend services that ran in production.",
    contributions: [
      "Built and maintained backend services with Node.js (Fastify) and TypeScript, structured with Clean Architecture.",
      "Designed REST and tRPC APIs, paying attention to query efficiency and consistent error handling.",
      "Containerized services with Docker and wrote Bash scripts to automate deployment steps.",
      "Contributed Next.js and shadcn/ui components to internal tools.",
    ],
    tech: ["TypeScript", "Node.js", "Fastify", "tRPC", "Docker", "Bash", "Next.js"],
  },
  {
    company: "Hoc Cung Chuyen Gia",
    url: "https://hoccungchuyengia.com",
    role: "Power BI Tutor · Part-time",
    period: "Jan 2025 — May 2025",
    location: "Da Nang",
    kind: "Part-time",
    context: "One-to-one tutoring in data visualization and reporting.",
    contributions: [
      "Taught data modeling, DAX and dashboard design to individual learners.",
      "Learned to explain technical decisions clearly to people without an engineering background.",
    ],
    tech: ["Power BI", "DAX", "Data modeling"],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type Shot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  summary: string;
  year: string;
  status: "Live demo" | "Source available";
  kind: string;
  role: string;
  focus: string;
  tags: string[];
  image: Shot;
  gallery: Shot[];
  links: { label: string; href: string; kind: "github" | "live" | "demo" }[];
  linksNote?: string;
  overview: string[];
  problem: string;
  solution: string;
  contributions: string[];
  architecture: {
    layers: { name: string; nodes: string[] }[];
    flows: string[];
    notes: string[];
  };
  stack: { group: string; items: string[] }[];
  features: { title: string; body: string }[];
  challenges: { title: string; problem: string; approach: string }[];
};

export const projects: Project[] = [
  {
    slug: "meet-ai",
    index: "01",
    title: "Meet.AI",
    tagline: "Video meetings where an AI agent joins the call, then writes the notes.",
    summary:
      "A full-stack SaaS where users create AI agents, meet with them over video, and get a transcript, a structured summary and a chat that remembers the meeting.",
    year: "2025",
    status: "Live demo",
    kind: "Full-stack SaaS · Personal project",
    // CONFIRM: if the build started from a course or template, say so here.
    role: "Solo developer — design, full stack, deployment",
    focus: "Event-driven AI processing",
    tags: ["Next.js", "TypeScript", "tRPC", "Drizzle", "Inngest", "Gemini", "OpenAI"],
    image: {
      src: "/projects/meet-ai.webp",
      alt: "Meet.AI landing page with the headline ‘AI Meeting Assistant for Transcription, Summaries & Smart Notes’",
      width: 1600,
      height: 902,
    },
    gallery: [
      {
        src: "/projects/meet-ai.webp",
        alt: "Meet.AI landing page",
        width: 1600,
        height: 902,
        caption: "Public landing page (live at meetai-assistant.vercel.app)",
      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/tinhne/meetai", kind: "github" },
      { label: "Live demo", href: "https://meetai-assistant.vercel.app", kind: "live" },
    ],
    overview: [
      "Meet.AI lets a user define AI agents with their own instructions, schedule meetings, and run video calls in which the agent takes part as a participant.",
      "When the call ends, the recording and transcript are processed in the background into a markdown summary with timestamped notes. Afterwards the user can keep chatting with the agent, which answers with the meeting summary as context.",
    ],
    problem:
      "Meeting notes are tedious and inconsistent, and context disappears once the call ends. Building a fix means coordinating real-time video, slow and bursty AI work, and paid tiers — without making the app feel slow.",
    solution:
      "Treat each call as a stream of events. Stream webhooks drive the meeting lifecycle, heavy AI work runs as retryable Inngest steps outside the request path, and every result lands back in Postgres where typed tRPC procedures serve it to the UI.",
    contributions: [
      "Modelled users, agents and meetings in a Drizzle schema on Neon Postgres, with typed tRPC routers per module (agents, meetings, premium).",
      "Wired Stream webhooks into the meeting lifecycle: session start connects the agent through OpenAI Realtime; session end, transcription-ready and recording-ready events update the meeting.",
      "Built the Inngest pipeline that fetches the transcript, resolves each speaker to a user or an agent, and summarizes it with Gemini 2.5 Flash through Inngest Agent Kit.",
      "Implemented post-meeting chat: new messages trigger a background job that answers using the agent's instructions plus the stored summary.",
      "Set up Better Auth (email/password, Google, GitHub) and Polar subscriptions with free-tier limits of three agents and three meetings.",
      "Deployed on Vercel.",
    ],
    architecture: {
      layers: [
        { name: "Client", nodes: ["Next.js 16 App Router", "TanStack Query", "Stream Video & Chat SDK"] },
        { name: "API", nodes: ["tRPC routers", "Better Auth routes", "Webhook handler"] },
        { name: "Async", nodes: ["Inngest: meetings/processing", "Inngest: chat/message.new"] },
        { name: "AI", nodes: ["Gemini 2.5 Flash · summaries", "OpenAI Realtime · in-call agent"] },
        { name: "Data & services", nodes: ["Neon Postgres + Drizzle", "Polar billing", "Stream"] },
      ],
      flows: [
        "typed queries & mutations",
        "events from webhooks & procedures",
        "model calls per step",
        "results persisted",
      ],
      notes: [
        "Nothing slow happens inside a request: webhooks only record state and emit events.",
        "Each Inngest step (fetch → parse → add speakers → summarize → save) retries independently.",
      ],
    },
    stack: [
      { group: "Frontend", items: ["Next.js 16", "React", "TypeScript", "Tailwind CSS 4", "Radix UI", "nuqs"] },
      { group: "API & auth", items: ["tRPC", "TanStack Query", "Zod", "Better Auth"] },
      { group: "Data", items: ["Neon (serverless Postgres)", "Drizzle ORM"] },
      { group: "AI & jobs", items: ["Gemini 2.5 Flash", "OpenAI Realtime (via Stream)", "Inngest + Agent Kit"] },
      { group: "Platform", items: ["Stream Video & Chat", "Polar", "Vercel"] },
    ],
    features: [
      { title: "Custom agents", body: "Create agents with their own instructions and generated avatars." },
      { title: "AI in the call", body: "The agent joins the video call as a participant through OpenAI Realtime." },
      { title: "Automatic summaries", body: "Transcripts become markdown overviews with timestamped notes." },
      { title: "Recording & transcript", body: "Each meeting keeps its recording and a searchable transcript." },
      { title: "Ask the meeting", body: "Chat with the agent afterwards; it answers from the meeting summary." },
      { title: "Plans & limits", body: "Free tier capped at three agents and three meetings; upgrades via Polar." },
    ],
    challenges: [
      {
        title: "AI work that outlives a request",
        problem:
          "Fetching, parsing and summarizing a transcript can take far longer than a serverless request is allowed to run.",
        approach:
          "Webhooks only persist state and emit events. Inngest runs the pipeline as separate steps, so a failed model call retries without refetching the transcript.",
      },
      {
        title: "Who said what",
        problem:
          "Transcript lines carry raw speaker IDs that can belong to either a human user or an AI agent.",
        approach:
          "Collect unique speaker IDs, query both the users and agents tables, and merge them before the transcript reaches the summarizer.",
      },
      {
        title: "A call is a state machine",
        problem:
          "Session start, participant leave, session end, transcript ready and recording ready arrive as separate, asynchronous webhooks.",
        approach:
          "Map each event type to one meeting-status transition in a single handler, keeping the lifecycle explicit and easy to debug.",
      },
    ],
  },
  {
    slug: "book-review",
    index: "02",
    title: "Book Review Platform",
    tagline: "A Spring Boot API with JWT auth, roles and a React client.",
    summary:
      "Readers browse and search a catalogue, write reviews and like others'; admins manage books, categories, users and reviews. Backend-first, with a typed React client.",
    year: "2026",
    status: "Live demo",
    kind: "Full-stack web app · Personal project",
    role: "Solo developer — API, data model, client",
    focus: "Auth, transactions, API design",
    tags: ["Java 21", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "React"],
    image: {
      src: "/projects/book-review.webp",
      alt: "Book Review home page with search, category filters and a grid of book covers",
      width: 1600,
      height: 939,
    },
    gallery: [
      {
        src: "/projects/book-review.webp",
        alt: "Book Review catalogue page",
        width: 1600,
        height: 939,
        caption: "Catalogue with search, category filters and sorting",
      },
    ],
    links: [
      { label: "API source", href: "https://github.com/tinhne/book_review", kind: "github" },
      { label: "Client source", href: "https://github.com/tinhne/book-review-frontend", kind: "github" },
      { label: "Live demo", href: "https://book-review-frontend-eta.vercel.app/", kind: "live" },
    ],
    overview: [
      "A book catalogue with categories, search and reviews. Anyone can browse; signed-in readers write, edit and like reviews; admins manage the catalogue and moderate content from a dashboard.",
      "The Spring Boot API owns every business rule. The React client stays thin: it renders, caches with TanStack Query and sends a bearer token.",
    ],
    problem:
      "Public reads, authenticated writes and admin-only operations need clearly separated access rules. Reviews and likes touch several tables, and listing pages must stay fast with search and filters.",
    solution:
      "A stateless Spring Security filter chain validates JWTs and enforces roles. Services own transaction boundaries, DTOs keep entities off the wire, and a single exception handler returns one consistent error shape.",
    contributions: [
      "Designed the PostgreSQL schema — users, books, categories, reviews, review likes — and mapped it with Spring Data JPA.",
      "Implemented stateless JWT auth with a custom filter, USER / ADMIN roles, and public GET routes for browsing.",
      "Built paginated, filterable endpoints for books and reviews with a shared page response format.",
      "Avoided N+1 queries when showing which reviews the current user liked by batch-loading liked IDs in one query.",
      "Enforced ownership: users can only edit their own reviews, otherwise the API returns 403.",
      "Built the React + Vite client with TanStack Query, React Hook Form and Zod.",
    ],
    architecture: {
      layers: [
        { name: "Client", nodes: ["React + Vite", "TanStack Query", "Axios + JWT"] },
        { name: "Security", nodes: ["JwtAuthFilter", "SecurityConfig · roles", "CORS"] },
        { name: "Web", nodes: ["Auth", "Books", "Categories", "Reviews", "Users", "Health"] },
        { name: "Domain", nodes: ["Services · @Transactional", "DTOs + validation", "GlobalExceptionHandler"] },
        { name: "Data", nodes: ["Spring Data JPA", "PostgreSQL"] },
      ],
      flows: [
        "Bearer token on every request",
        "authenticated principal",
        "request DTOs, validated",
        "repositories",
      ],
      notes: [
        "GET routes for books, categories and reviews are public; everything else requires a valid token.",
        "Errors map to typed exceptions (400 / 403 / 404) and one ErrorResponse shape.",
      ],
    },
    stack: [
      { group: "Backend", items: ["Java 21", "Spring Boot 3.2", "Spring Security", "jjwt", "Bean Validation", "Lombok"] },
      { group: "Data", items: ["PostgreSQL", "Spring Data JPA / Hibernate"] },
      { group: "Frontend", items: ["React", "TypeScript", "Vite", "TanStack Query", "React Router", "React Hook Form + Zod", "Tailwind CSS"] },
      { group: "Tooling", items: ["Maven", "Docker Compose", "HTTP request files"] },
    ],
    features: [
      { title: "JWT authentication", body: "Register and log in; stateless tokens validated by a custom filter." },
      { title: "Role-based access", body: "USER and ADMIN roles, with admin-only management endpoints." },
      { title: "Search & filter", body: "Server-side pagination, text search and category filtering." },
      { title: "Reviews & likes", body: "Write, edit and like reviews, with ownership checks on edits." },
      { title: "Admin dashboard", body: "Stats plus management of books, categories, users and reviews." },
      { title: "Seed & health", body: "Data seeder for local runs and a health endpoint for deployment." },
    ],
    challenges: [
      {
        title: "Consistent multi-table writes",
        problem: "Creating or editing a review also touches counters and like records.",
        approach:
          "Keep the whole operation inside one @Transactional service method so any failure rolls everything back.",
      },
      {
        title: "Likes without N+1",
        problem:
          "Showing ‘liked by you’ on a page of reviews can trigger one query per review.",
        approach:
          "Collect the page's review IDs and fetch the current user's liked IDs in a single query, then map in memory.",
      },
      {
        title: "One error contract",
        problem: "Validation, missing records and permission failures came back in different shapes.",
        approach:
          "Typed exceptions plus a global handler that returns the same ErrorResponse for every failure.",
      },
    ],
  },
  {
    slug: "vehicle-telemetry",
    index: "03",
    title: "Vehicle Telemetry System",
    tagline: "10 Hz sensor streaming to an Android Automotive dashboard.",
    summary:
      "A Spring Boot backend streams simulated vehicle telemetry over WebSocket to an Android Automotive app, raises threshold warnings, and stores history for a REST API.",
    year: "2026",
    status: "Source available",
    kind: "Backend + Android Automotive · Personal project",
    role: "Solo developer — backend, Android client, infrastructure",
    focus: "Real-time data, throughput, resilience",
    tags: ["Java 21", "Spring Boot 3", "WebSocket", "PostgreSQL", "Docker", "Kotlin"],
    image: {
      src: "/projects/vehicle-telemetry.webp",
      alt: "Android Automotive dashboard showing a speed gauge at 92 km/h, an RPM gauge and fuel, engine, battery and tire panels",
      width: 1336,
      height: 752,
    },
    gallery: [
      {
        src: "/projects/vehicle-telemetry.webp",
        alt: "Telemetry dashboard on the Android Automotive emulator",
        width: 1336,
        height: 752,
        caption: "Compose dashboard receiving live telemetry (AAOS emulator, API 34)",
      },
      {
        src: "/projects/vehicle-telemetry-emulator.webp",
        alt: "Android Studio running the automotive emulator with the dashboard and an instrument cluster",
        width: 1600,
        height: 1041,
        caption: "Running in Android Studio with the instrument cluster display",
      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/tinhne/vehicle-telemetry", kind: "github" },
    ],
    linksNote:
      "No public demo — the client runs on an Android Automotive emulator. Setup steps are in the repository README.",
    overview: [
      "A telemetry pipeline built the way an in-car system would need it: a backend that produces sensor readings ten times a second, evaluates warnings, persists history, and an Android Automotive app that renders it live.",
      "The whole backend starts with one docker compose command; the Android app connects from the emulator and shows gauges, warnings and history.",
    ],
    problem:
      "Broadcasting at 10 Hz is easy; writing every frame to the database is not — that's 864,000 rows per vehicle per day. Warnings that flicker around a threshold can flood the client, and in-car connectivity is unreliable.",
    solution:
      "Decouple the live stream from storage: every tick is broadcast over STOMP, but only every tenth is persisted, asynchronously, on a bounded thread pool. Warnings have a cooldown, and the Android client reconnects with exponential backoff.",
    contributions: [
      "Built the Spring Boot backend: scheduled sensor simulator, STOMP broker topics for telemetry and warnings, and REST endpoints for history, latest and stats.",
      "Throttled persistence to 1 Hz with @Async on a ThreadPoolTaskExecutor (4–8 threads, queue of 500) so database I/O never blocks the tick.",
      "Wrote a warning engine with configurable thresholds for speed, RPM, fuel, engine temperature, battery voltage and tire pressure, plus a 10-second cooldown per warning type.",
      "Indexed (vehicle_id, recorded_at DESC) for fast history queries and added retention cleanup.",
      "Built the Android Automotive client in Kotlin: foreground service, OkHttp WebSocket with backoff and jitter, Room cache, Hilt, MVVM and a Jetpack Compose dashboard.",
      "Containerized backend and Postgres with Docker Compose; health checks through Spring Boot Actuator.",
    ],
    architecture: {
      layers: [
        { name: "Producer", nodes: ["Sensor simulator · @Scheduled 100 ms", "WarningService · thresholds"] },
        { name: "Transport", nodes: ["STOMP broker", "/topic/telemetry", "/topic/warnings"] },
        { name: "Persistence", nodes: ["@Async · ThreadPoolTaskExecutor", "Spring Data JPA", "PostgreSQL 15"] },
        { name: "API & ops", nodes: ["REST /api/telemetry", "Actuator health", "Docker Compose"] },
        { name: "Client", nodes: ["AAOS foreground service", "OkHttp WebSocket", "Room · Compose UI"] },
      ],
      flows: [
        "every tick (10 Hz)",
        "every 10th tick (1 Hz), async",
        "history, latest, stats",
        "live frames + REST history",
      ],
      notes: [
        "Scheduling uses fixedDelay, not fixedRate, so a slow tick can't create a backlog.",
        "Persisting at 1 Hz cuts writes from 864k to 86.4k rows per vehicle per day.",
      ],
    },
    stack: [
      { group: "Backend", items: ["Java 21", "Spring Boot 3.3", "Spring WebSocket (STOMP)", "Spring Data JPA", "Spring Security", "Actuator"] },
      { group: "Data & infra", items: ["PostgreSQL 15", "Gradle", "Docker Compose"] },
      { group: "Android", items: ["Kotlin", "Jetpack Compose", "Hilt", "Room", "OkHttp", "Android Automotive OS"] },
      { group: "Testing", items: ["JUnit (WarningService)", "ViewModel unit tests", "Postman collection"] },
    ],
    features: [
      { title: "10 Hz live stream", body: "Speed, RPM, fuel, temperature, battery and tire data over STOMP." },
      { title: "Threshold warnings", body: "Configurable limits with WARNING and CRITICAL severities." },
      { title: "Storm protection", body: "Per-type cooldown stops the same warning re-firing for 10 seconds." },
      { title: "History API", body: "Paginated history, latest reading and aggregate stats over REST." },
      { title: "Resilient client", body: "Exponential backoff with jitter, from 2 s up to a 60 s cap." },
      { title: "One-command setup", body: "Backend and Postgres start with docker compose up." },
    ],
    challenges: [
      {
        title: "Write amplification",
        problem: "Persisting every 10 Hz frame would mean 864,000 rows per vehicle per day.",
        approach:
          "Broadcast every frame, persist every tenth asynchronously — a 10× reduction with no loss in the live view.",
      },
      {
        title: "Warning storms",
        problem: "A value hovering around a limit fires the same warning on every tick.",
        approach:
          "Track the last tick each warning type fired and suppress repeats for 100 ticks (10 seconds).",
      },
      {
        title: "Unreliable networks",
        problem: "Cars lose connectivity; naive reconnect loops hammer the server.",
        approach:
          "Exponential backoff with 20% random jitter, capped at 60 seconds, inside a foreground service.",
      },
    ],
  },
];

export type ArchiveProject = {
  year: string;
  title: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const archive: ArchiveProject[] = [
  {
    year: "2025",
    title: "Devhelp — Mezon developer bot",
    description:
      "Bot for saving commands, logging bugs by severity and linking fixes, with full-text search and soft delete. Built for the Mezon Bot Challenge.",
    stack: ["NestJS", "TypeScript", "SQLite", "Mezon SDK"],
    links: [
      { label: "GitHub", href: "https://github.com/tinhne/Devhelp-mezon" },
      {
        label: "Demo video",
        href: "https://drive.google.com/file/d/1v_pOt-UUMOHM4rcRLqAfRPFOAREstHLk/view?usp=sharing",
      },
    ],
  },
  {
    year: "2025",
    title: "Medical diagnosis chatbot",
    description:
      "Capstone: symptom-to-diagnosis engine combining XGBoost with association rules, trained on cleaned data mapped from the Disease Ontology, behind Spring Boot auth.",
    stack: ["Python", "XGBoost", "Apriori", "Pandas", "Spring Boot"],
    links: [{ label: "GitHub", href: "https://github.com/tinhne/capstons2" }],
  },
  {
    year: "2025",
    title: "Blog API",
    description: "Blog backend with JWT auth and Redis caching, structured with Clean Architecture.",
    stack: ["Node.js", "Fastify", "TypeScript", "Redis"],
    links: [{ label: "GitHub", href: "https://github.com/tinhne/blogFinalProject" }],
  },
  {
    year: "2024",
    title: "Clinic booking system",
    description:
      "Appointment scheduling, patient records, JWT auth and video calls between staff and patients.",
    stack: ["Node.js", "Express", "React", "PostgreSQL", "Stream"],
    links: [{ label: "GitHub", href: "https://github.com/tinhne/Clinic-Management" }],
  },
  {
    year: "2023",
    title: "MazaBank — desktop banking",
    description:
      "JavaFX app with admin and client roles, transfers, deposits and account limits, persisted in SQLite.",
    stack: ["Java", "JavaFX", "SQLite"],
    links: [{ label: "GitHub", href: "https://github.com/tinhne/MazaBank" }],
  },
];

/* ------------------------------------------------------------------ */
/* AI & product building                                               */
/* ------------------------------------------------------------------ */

/** work = professional work · project = shipped personal project · exploring = learning */
export type Evidence = "work" | "project" | "exploring";

export const evidenceLabels: Record<Evidence, string> = {
  work: "Professional work",
  project: "Shipped in a project",
  exploring: "Exploring",
};

export const aiWorkflow = [
  { step: "Frame", me: "Requirements, constraints and what “done” means", agent: null },
  {
    step: "Plan",
    me: "Choose the approach and the boundaries",
    agent: "Explore the codebase, surface options",
  },
  { step: "Implement", me: null, agent: "Draft code in small, reviewable diffs" },
  { step: "Review", me: "Read every diff; reject what I can't explain", agent: null },
  {
    step: "Test",
    me: "Verify behaviour and edge cases",
    agent: "Scaffold tests, reproduce bugs",
  },
  { step: "Ship", me: "Release, observe, decide what's next", agent: null },
] as const;

export type Capability = {
  key: string;
  title: string;
  summary: string;
  items: { name: string; detail: string; evidence: Evidence; refs?: RefId[] }[];
};

export const aiCapabilities: Capability[] = [
  {
    key: "A",
    title: "AI-powered product development",
    summary: "Putting models behind features users actually touch.",
    items: [
      {
        name: "Gemini API",
        detail: "Gemini 2.5 Flash generates structured meeting summaries via Inngest Agent Kit.",
        evidence: "project",
        refs: ["meet-ai"],
      },
      {
        name: "OpenAI Realtime API",
        detail: "Connected through Stream so an agent can speak inside a live video call.",
        evidence: "project",
        refs: ["meet-ai"],
      },
      {
        name: "Background AI pipelines",
        detail: "Slow model calls run as retryable job steps, never inside a request.",
        evidence: "project",
        refs: ["meet-ai"],
      },
      {
        name: "Rapid prototyping",
        detail: "Getting from idea to a working, deployed version quickly enough to learn from it.",
        evidence: "project",
        refs: ["meet-ai", "devhelp"],
      },
    ],
  },
  {
    key: "B",
    title: "AI-assisted engineering",
    summary: "Coding agents as part of a disciplined workflow, not a replacement for one.",
    items: [
      {
        name: "Claude Code",
        detail: "Daily driver for implementation, refactoring and codebase exploration.",
        evidence: "work",
        refs: ["margick"],
      },
      {
        name: "Debugging with agents",
        detail: "Reproduce first, then let the agent trace and propose — I confirm the root cause.",
        evidence: "work",
        refs: ["margick"],
      },
      {
        name: "Docs & test scaffolding",
        detail: "Agents draft documentation and test skeletons; I decide what's worth asserting.",
        evidence: "work",
        refs: ["margick"],
      },
      {
        name: "Multi-agent workflows",
        detail: "Splitting larger tasks across agents with clear briefs and review gates.",
        evidence: "exploring",
      },
    ],
  },
  {
    key: "C",
    title: "Product automation",
    summary: "Removing manual steps by wiring systems together.",
    items: [
      {
        name: "Event-driven workflows",
        detail: "Webhooks feed Inngest functions that update state and notify users.",
        evidence: "project",
        refs: ["meet-ai"],
      },
      {
        name: "Deployment scripting",
        detail: "Bash and Docker to automate repetitive release steps.",
        evidence: "work",
        refs: ["tomosia"],
      },
      {
        name: "Chat-ops bots",
        detail: "A team bot that turns chat commands into searchable records.",
        evidence: "project",
        refs: ["devhelp"],
      },
      {
        name: "Data processing",
        detail: "Crawling, cleaning and mapping source data into a usable training set.",
        evidence: "project",
        refs: ["medical-chatbot"],
      },
    ],
  },
  {
    key: "D",
    title: "Technical product thinking",
    summary: "Deciding what to build, and how much engineering it deserves.",
    items: [
      {
        name: "Requirements analysis",
        detail: "Turning a vague request into acceptance criteria before touching code.",
        evidence: "work",
        refs: ["margick"],
      },
      {
        name: "Architecture decisions",
        detail: "e.g. broadcasting at 10 Hz but persisting at 1 Hz to cut writes tenfold.",
        evidence: "project",
        refs: ["vehicle-telemetry"],
      },
      {
        name: "Feature development",
        detail: "Shipping inside an existing product and codebase, not just greenfield.",
        evidence: "work",
        refs: ["margick", "tomosia"],
      },
      {
        name: "Iterative improvement",
        detail: "Testing with real usage, then fixing what hurts most.",
        evidence: "work",
        refs: ["margick"],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export type Skill = { name: string; refs: RefId[] };
export type SkillGroup = { key: string; title: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    key: "backend",
    title: "Backend",
    skills: [
      { name: "Java", refs: ["book-review", "vehicle-telemetry", "mazabank"] },
      { name: "Spring Boot", refs: ["book-review", "vehicle-telemetry", "medical-chatbot"] },
      { name: "Spring Security", refs: ["book-review", "vehicle-telemetry"] },
      { name: "Node.js", refs: ["tomosia", "meet-ai", "devhelp", "clinic"] },
      { name: "Fastify", refs: ["tomosia", "blog-api"] },
      { name: "NestJS", refs: ["devhelp"] },
      { name: "REST APIs", refs: ["book-review", "vehicle-telemetry", "tomosia", "clinic"] },
      { name: "tRPC", refs: ["meet-ai", "tomosia"] },
      { name: "WebSocket / STOMP", refs: ["vehicle-telemetry"] },
      { name: "JWT & RBAC", refs: ["book-review", "clinic", "blog-api"] },
    ],
  },
  {
    key: "frontend",
    title: "Frontend",
    skills: [
      { name: "TypeScript", refs: ["meet-ai", "tomosia", "devhelp", "book-review"] },
      { name: "JavaScript", refs: ["margick", "clinic"] },
      { name: "React", refs: ["book-review", "clinic", "meet-ai"] },
      { name: "Next.js", refs: ["meet-ai", "tomosia"] },
      { name: "TanStack Query", refs: ["meet-ai", "book-review"] },
      { name: "Tailwind CSS", refs: ["meet-ai", "book-review"] },
      { name: "HTML & CSS", refs: ["margick", "meet-ai"] },
    ],
  },
  {
    key: "data",
    title: "Data & infra",
    skills: [
      { name: "PostgreSQL", refs: ["meet-ai", "book-review", "vehicle-telemetry", "clinic"] },
      { name: "SQL", refs: ["book-review", "vehicle-telemetry"] },
      { name: "Drizzle ORM", refs: ["meet-ai"] },
      { name: "Spring Data JPA", refs: ["book-review", "vehicle-telemetry"] },
      { name: "Redis", refs: ["blog-api"] },
      { name: "Docker", refs: ["tomosia", "vehicle-telemetry", "book-review"] },
      { name: "Git", refs: ["tomosia", "margick"] },
      { name: "Linux & Bash", refs: ["tomosia"] },
      { name: "Vercel", refs: ["meet-ai", "book-review"] },
    ],
  },
  {
    key: "ai",
    title: "AI & product",
    skills: [
      { name: "Gemini API", refs: ["meet-ai"] },
      { name: "OpenAI API", refs: ["meet-ai"] },
      { name: "Inngest", refs: ["meet-ai"] },
      { name: "Claude Code", refs: ["margick"] },
      { name: "AI coding agents", refs: ["margick"] },
      { name: "Workflow automation", refs: ["meet-ai", "tomosia", "devhelp"] },
    ],
  },
  {
    key: "mobile",
    title: "Also worked with",
    skills: [
      { name: "Kotlin", refs: ["vehicle-telemetry"] },
      { name: "Jetpack Compose", refs: ["vehicle-telemetry"] },
      { name: "Android Automotive", refs: ["vehicle-telemetry"] },
      { name: "WordPress", refs: ["margick"] },
      { name: "Python & Pandas", refs: ["medical-chatbot"] },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Achievements & education                                            */
/* ------------------------------------------------------------------ */

export type Achievement = {
  title: string;
  org: string;
  kind: "Competition" | "Certificate" | "Program" | "Workshop";
  result: string;
  date?: string;
  link?: { label: string; href: string };
  /** Hidden until Tinh confirms it with evidence. */
  confirmed: boolean;
};

export const achievements: Achievement[] = [
  {
    title: "LG Dream Code",
    org: "LG",
    kind: "Competition",
    result: "Top 30 · Finalist",
    // CONFIRM: year, and a certificate or announcement link if available.
    confirmed: true,
  },
  {
    title: "Mezon Bot Challenge",
    org: "Mezon",
    kind: "Competition",
    result: "Contestant · HelpDev Bot",
    date: "Mar — Apr 2025",
    link: {
      label: "Demo",
      href: "https://drive.google.com/file/d/1v_pOt-UUMOHM4rcRLqAfRPFOAREstHLk/view?usp=sharing",
    },
    confirmed: true,
  },
  {
    title: "Cybersecurity Fundamentals",
    org: "AUGEST",
    kind: "Certificate",
    result: "Completed",
    date: "Sep 2024",
    link: {
      label: "Certificate",
      href: "https://res.cloudinary.com/dbgcpl6na/image/upload/v1775296948/certifficate_cyber_c1ipxt.jpg",
    },
    confirmed: true,
  },
  {
    title: "Build with AI Workshop",
    org: "GDG Central",
    kind: "Workshop",
    result: "Participant",
    confirmed: true,
  },
  {
    title: "VinAI Practical Program",
    org: "VinAI",
    kind: "Program",
    result: "Level 2 · Cohort 5",
    // CONFIRM: set to true once verified.
    confirmed: false,
  },
];

export const education = {
  school: "Duy Tan University",
  degree: "Bachelor of Information Technology",
  period: "Aug 2021 — Jun 2025",
  location: "Da Nang, Vietnam",
};
