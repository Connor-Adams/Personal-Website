import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Blocks,
  CheckCircle2,
  Code2,
  Github,
  Linkedin,
  Mail,
  TerminalSquare,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react';

const systems = [
  {
    name: 'Cashflow',
    type: 'Finance tooling',
    description:
      'A product for understanding cash movement, forecasting decisions, and turning day-to-day financial activity into something easier to reason about.',
    tags: ['Product', 'Full-stack', 'Finance'],
    number: '01',
  },
  {
    name: 'Rainbot',
    type: 'Voice and automation systems',
    description:
      'A Discord bot architecture with orchestrated services for voice, audio playback, soundboard workflows, deployment, and reliable async work.',
    tags: ['Audio', 'Workers', 'Infra'],
    number: '02',
  },
  {
    name: 'Wander platform work',
    type: 'Booking and operations',
    description:
      'Customer-facing and internal systems across booking flows, cancellation policies, fair refunds, review ingestion, and operational edge cases.',
    tags: ['Product systems', 'Operations', 'Platform'],
    number: '03',
  },
  {
    name: 'Demi Finance',
    type: 'Fintech from zero',
    description:
      'Founding engineering across a SwiftUI iOS app, TypeScript backend, REST APIs, PostgreSQL, and the core product surface.',
    tags: ['Founding engineer', 'SwiftUI', 'Postgres'],
    number: '04',
  },
];

const principles = [
  ['Understand the system', 'Get clear on the data, users, failure modes, and constraints before committing to a direction.'],
  ['Design for the next version', 'Prefer primitives, workflows, and interfaces that survive the immediate ticket.'],
  ['Keep the loop tight', 'Ship in slices, verify with real feedback, and leave the codebase easier to change.'],
  ['Use tools carefully', 'AI is useful when the goal, context, and review loop are strong. Judgment stays with the engineer.'],
];

const stack = ['TypeScript', 'React', 'Node', 'SwiftUI', 'PostgreSQL', 'Supabase', 'Prisma', 'Tailwind', 'Vercel', 'Railway', 'GitHub Actions', 'AI-assisted development'];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-bone selection:bg-amber/25 selection:text-bone">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(90,34,139,0.26),transparent_32%),radial-gradient(circle_at_82%_6%,rgba(75,30,120,0.22),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(36,16,46,0.28),transparent_36%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-36 bg-gradient-to-b from-bone/[0.045] to-transparent" />

      <header className="relative z-20 mx-auto max-w-7xl px-6 pt-5 lg:px-8">
        <div className="mb-4 flex items-center justify-between text-[0.68rem] uppercase tracking-[0.28em] text-bone/40">
          <span>Connor Adams / Product Systems</span>
          <span className="hidden sm:inline">Guelph, Ontario</span>
        </div>
        <nav className="flex items-center justify-between rounded-[1.7rem] border border-bone/14 bg-bone/[0.075] px-3 py-3 shadow-card backdrop-blur-xl md:px-4">
          <a href="#top" className="group flex items-center gap-4 rounded-2xl px-1 py-1 transition hover:bg-bone/[0.045]">
            <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-amber/28 bg-gradient-to-br from-bone/[0.14] to-bone/[0.04] text-sm font-semibold tracking-[-0.04em] text-bone transition group-hover:border-amber/48 group-hover:text-amber">
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(90,34,139,0.32),transparent_42%)]" />
              <span className="relative">CA</span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-bone/90">Connor Adams</span>
              <span className="mt-1.5 hidden text-xs text-bone/52 sm:block">Product engineer with founder energy</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-bone/12 bg-ink/28 p-1 text-sm text-bone/66 md:flex">
            {[
              ['Work', '#work'],
              ['Approach', '#approach'],
              ['Stack', '#stack'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a key={label} className="rounded-full px-4 py-2 transition hover:bg-bone/[0.09] hover:text-bone" href={href}>
                {label}
              </a>
            ))}
          </div>

          <a href="mailto:hello@connoradams.dev" className="group hidden items-center gap-3 rounded-2xl border border-bone/12 bg-bone/[0.065] px-4 py-3 text-sm font-medium text-bone/78 transition hover:border-amber/36 hover:bg-bone/[0.095] hover:text-bone lg:inline-flex">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-45" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber" />
            </span>
            Interesting work
            <ArrowUpRight className="h-3.5 w-3.5 text-bone/44 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber" />
          </a>
        </nav>
      </header>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:pb-28 lg:pt-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative flex flex-col justify-center">
          <div className="absolute -left-8 top-10 hidden h-32 w-px bg-gradient-to-b from-transparent via-amber/45 to-transparent lg:block" />
          <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-bone/12 bg-bone/[0.065] px-4 py-2 text-sm text-bone/72 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            Product engineer • full-stack builder • systems thinker
          </div>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.065em] text-bone md:text-7xl lg:text-8xl">
            Building useful software with <span className="hero-accent">taste</span> and leverage.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-bone/70 md:text-xl">
            I work across product, frontend, backend, and infrastructure to turn messy problems into clear, durable systems.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-bone px-5 py-3 text-sm font-semibold text-ink shadow-card transition hover:-translate-y-0.5 hover:bg-amber hover:text-bone">
              View work <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#approach" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-bone/12 bg-bone/[0.06] px-5 py-3 text-sm font-semibold text-bone/90 backdrop-blur transition hover:border-bone/20 hover:bg-bone/[0.09]">
              How I work <Workflow className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <WorkbenchCard />
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['Current', 'Product Engineer at Wander'],
            ['Previous', 'Founding Engineer at Demi Finance'],
            ['Strength', 'Owning ambiguous product problems'],
            ['Focus', 'Product systems, tools, and infrastructure'],
          ].map(([label, value]) => (
            <div key={label} className="group rounded-3xl border border-bone/12 bg-bone/[0.055] p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-amber/22 hover:bg-bone/[0.075]">
              <p className="text-xs uppercase tracking-[0.28em] text-bone/48">{label}</p>
              <p className="mt-3 text-base font-medium text-bone/88">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="approach" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">Approach</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">Solve the cause, not just the ticket.</h2>
          <p className="mt-6 text-lg leading-8 text-bone/68">
            I like product work where the answer is part engineering, part taste, part judgment: understand the real issue, ship the right slice, and leave behind a cleaner path.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            [Wrench, 'Root-cause work', 'Find the process, data, or interface problem behind the visible bug.'],
            [Blocks, 'Product systems', 'Turn recurring customer and team pain into reusable software primitives.'],
            [Code2, 'Full-stack ownership', 'Move through frontend, backend, data, deployment, and debugging without losing context.'],
            [Zap, 'Compounding improvements', 'Build internal tools, automation, and docs that make future work cheaper.'],
          ].map(([Icon, title, body]) => (
            <div key={String(title)} className="spotlight-card group rounded-3xl border border-bone/12 bg-gradient-to-b from-bone/[0.085] to-bone/[0.035] p-6 transition hover:-translate-y-1 hover:border-amber/28">
              <Icon className="h-6 w-6 text-amber/88" />
              <h3 className="mt-8 text-xl font-semibold text-bone">{title as string}</h3>
              <p className="mt-4 leading-7 text-bone/62">{body as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">Things I’ve built and owned.</h2>
          </div>
          <p className="max-w-md text-bone/62">A small slice across fintech, travel, automation, internal tooling, and personal software.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {systems.map((system) => (
            <article key={system.name} className="spotlight-card group relative overflow-hidden rounded-[2rem] border border-bone/12 bg-bone/[0.055] p-6 shadow-card backdrop-blur transition hover:-translate-y-1 hover:border-amber/28 hover:bg-bone/[0.075]">
              <div className="absolute right-6 top-5 text-6xl font-semibold tracking-[-0.08em] text-bone/[0.055] transition group-hover:text-amber/[0.12]">{system.number}</div>
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-bone/52">{system.type}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">{system.name}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-bone/34 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber" />
              </div>
              <p className="relative mt-6 leading-7 text-bone/64">{system.description}</p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {system.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-bone/12 bg-ink/28 px-3 py-1 text-xs text-bone/58">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2.5rem] border border-bone/12 bg-bone/[0.055] p-6 shadow-card backdrop-blur md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="section-kicker">Working style</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">A practical loop for shipping better software.</h2>
              <p className="mt-6 text-lg leading-8 text-bone/68">
                I care about getting to the right shape of the problem before I move fast. The result is usually less churn, cleaner systems, and better product decisions.
              </p>
            </div>
            <div className="grid gap-3">
              {principles.map(([title, body], index) => (
                <div key={title} className="flex gap-4 rounded-3xl border border-bone/12 bg-ink/30 p-4 transition hover:border-amber/22 hover:bg-ink/38">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-bone/12 bg-bone/[0.06] text-sm font-semibold text-amber/84">0{index + 1}</span>
                  <div>
                    <h3 className="font-semibold text-bone">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-bone/62">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="section-kicker">Stack</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {stack.map((item) => (
            <span key={item} className="rounded-2xl border border-bone/12 bg-bone/[0.055] px-4 py-3 text-sm text-bone/68 transition hover:-translate-y-0.5 hover:border-amber/24 hover:text-bone/88">{item}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-bone/12 bg-gradient-to-br from-bone/[0.095] via-bone/[0.055] to-plum/70 p-8 shadow-card md:p-12">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-amber/14" />
          <p className="section-kicker">Contact</p>
          <h2 className="relative mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">Want to build something useful?</h2>
          <p className="relative mt-6 max-w-2xl text-lg leading-8 text-bone/68">
            I’m interested in ambitious product work, internal tools, automation, and software that helps small teams punch above their weight.
          </p>
          <div className="relative mt-8 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-2xl bg-bone px-5 py-3 text-sm font-semibold text-ink transition hover:bg-amber hover:text-bone" href="mailto:hello@connoradams.dev"><Mail className="h-4 w-4" /> Email</a>
            <a className="inline-flex items-center gap-2 rounded-2xl border border-bone/12 bg-bone/[0.06] px-5 py-3 text-sm font-semibold text-bone/88" href="https://github.com/Connor-Adams" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a>
            <a className="inline-flex items-center gap-2 rounded-2xl border border-bone/12 bg-bone/[0.06] px-5 py-3 text-sm font-semibold text-bone/88" href="https://www.linkedin.com/in/connor-adams" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function WorkbenchCard() {
  const notes = ['Understand the problem', 'Map the edge cases', 'Design the right slice', 'Ship and verify', 'Clean up the path'];

  return (
    <motion.div initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
      <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-amber/12 via-bone/8 to-plum/24 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2.5rem] border border-bone/12 bg-plum/72 p-5 shadow-card backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/60 to-transparent" />
        <div className="flex items-center justify-between border-b border-bone/12 pb-4">
          <div className="flex items-center gap-3">
            <TerminalSquare className="h-5 w-5 text-amber/82" />
            <span className="text-sm font-medium text-bone/74">workbench</span>
          </div>
          <span className="rounded-full border border-bone/12 bg-bone/[0.055] px-3 py-1 text-xs text-bone/56">in progress</span>
        </div>
        <div className="mt-6 grid gap-3">
          {notes.map((note, index) => (
            <motion.div key={note} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.28 + index * 0.09 }} className="group flex items-center gap-3 rounded-2xl border border-bone/12 bg-bone/[0.055] p-4 transition hover:border-amber/22 hover:bg-bone/[0.075]">
              <CheckCircle2 className="h-5 w-5 text-amber/82" />
              <span className="font-medium text-bone/84">{note}</span>
              <span className="ml-auto text-xs text-bone/40">{String(index + 1).padStart(2, '0')}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 rounded-3xl border border-bone/12 bg-ink/32 p-5">
          <p className="font-semibold text-bone">Product judgment + engineering depth</p>
          <p className="mt-3 text-sm leading-6 text-bone/62">
            The work I enjoy most sits in the messy middle: customer pain, system design, implementation details, and long-term maintainability.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
