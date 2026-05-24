import { motion } from 'framer-motion';
import { ArrowUpRight, Blocks, Bot, BrainCircuit, CheckCircle2, Code2, Github, Linkedin, Mail, Sparkles, TerminalSquare, Workflow, Zap } from 'lucide-react';

const systems = [
  {
    name: 'Cashflow',
    type: 'Personal finance intelligence',
    description: 'A product system for understanding money movement, forecasting decisions, and turning scattered financial activity into operational clarity.',
    tags: ['Product strategy', 'Full-stack', 'Finance'],
  },
  {
    name: 'Rainbot',
    type: 'Agentic Discord architecture',
    description: 'Orchestrator and worker services for voice, audio playback, soundboard workflows, service deployment, and low-latency automation.',
    tags: ['Agents', 'Audio', 'Infra'],
  },
  {
    name: 'Wander platform work',
    type: 'Luxury booking operations',
    description: 'Customer-facing and operational systems across booking flows, cancellation policies, fair refunds, review ingestion, and process hardening.',
    tags: ['Product systems', 'Ops leverage', 'Platform'],
  },
  {
    name: 'Demi Finance',
    type: 'Fintech from zero',
    description: 'Founding engineering across a SwiftUI iOS app, TypeScript backend, REST APIs, PostgreSQL, and core product infrastructure.',
    tags: ['Founding engineer', 'SwiftUI', 'Postgres'],
  },
];

const principles = [
  ['Context first', 'Load the right system model before touching code.'],
  ['Agents with constraints', 'Use AI as an execution multiplier, not a replacement for judgment.'],
  ['Verify everything', 'Tests, reviews, instrumentation, and tight feedback loops beat vibes.'],
  ['Encode the win', 'Turn repeated fixes into reusable workflows, tools, and primitives.'],
];

const stack = ['TypeScript', 'React', 'Node', 'SwiftUI', 'PostgreSQL', 'Supabase', 'Prisma', 'Tailwind', 'Vercel', 'Railway', 'GitHub Actions', 'AI tooling'];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-bone selection:bg-amber/30 selection:text-bone">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(159,87,137,0.34),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(222,169,74,0.18),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(63,181,128,0.16),transparent_35%)]" />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-amber/20 bg-bone/5 shadow-glow">
            <Sparkles className="h-5 w-5 text-amber" />
          </span>
          <span className="text-sm font-semibold tracking-[0.32em] text-bone/80">CONNOR ADAMS</span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-bone/60 md:flex">
          <a className="transition hover:text-bone" href="#systems">Systems</a>
          <a className="transition hover:text-bone" href="#agentic">Agentic</a>
          <a className="transition hover:text-bone" href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-20">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-amber/20 bg-bone/[0.04] px-4 py-2 text-sm text-bone/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_24px_rgba(76,201,142,0.8)]" />
            Product engineer building agentic systems
          </div>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-bone md:text-7xl lg:text-8xl">
            I build software that compounds.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-bone/68 md:text-xl">
            Full-stack product engineer focused on agentic workflows, internal platforms, and production systems that turn ambiguity into leverage.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#systems" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-amber px-5 py-3 text-sm font-semibold text-ink shadow-glow transition hover:-translate-y-0.5">
              View systems <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#agentic" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-bone/10 bg-bone/[0.04] px-5 py-3 text-sm font-semibold text-bone backdrop-blur transition hover:border-bone/20 hover:bg-bone/[0.08]">
              How I work <Workflow className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <AgentRuntime />
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['Current', 'Product Engineer at Wander'],
            ['Previous', 'Founding Engineer at Demi Finance'],
            ['Mode', 'Product judgment + engineering depth'],
            ['Focus', 'Agents, systems, infrastructure'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-bone/10 bg-bone/[0.035] p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.28em] text-amber/70">{label}</p>
              <p className="mt-3 text-base font-medium text-bone/86">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-jade">Engineering OS</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">Systems over tickets.</h2>
          <p className="mt-6 text-lg leading-8 text-bone/64">The best engineering work does more than solve the current problem. It removes the next ten versions of it.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            [Bot, 'Agentic development', 'Structured context, tool use, and review loops that accelerate delivery without surrendering quality.'],
            [Blocks, 'Product systems', 'Turning repeated customer and team pain into durable software primitives.'],
            [Code2, 'Full-stack ownership', 'Frontend, backend, data, deployment, debugging, and product thinking in one loop.'],
            [Zap, 'Compounding infra', 'CI, automations, docs, and internal tools that make every future feature cheaper.'],
          ].map(([Icon, title, body]) => (
            <div key={String(title)} className="group rounded-3xl border border-bone/10 bg-gradient-to-b from-bone/[0.07] to-bone/[0.025] p-6 transition hover:-translate-y-1 hover:border-amber/30">
              <Icon className="h-6 w-6 text-amber" />
              <h3 className="mt-8 text-xl font-semibold text-bone">{title as string}</h3>
              <p className="mt-4 leading-7 text-bone/58">{body as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="systems" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-rust">Featured systems</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">Proof of ownership.</h2>
          </div>
          <p className="max-w-md text-bone/60">A small slice of product, infrastructure, and automation work across fintech, travel, audio, and personal software.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {systems.map((system) => (
            <article key={system.name} className="rounded-[2rem] border border-bone/10 bg-plum/20 p-6 shadow-card backdrop-blur transition hover:-translate-y-1 hover:border-jade/30">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-amber">{system.type}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">{system.name}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-bone/35" />
              </div>
              <p className="mt-6 leading-7 text-bone/62">{system.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {system.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-bone/10 bg-bone/[0.04] px-3 py-1 text-xs text-bone/62">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="agentic" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2.5rem] border border-amber/15 bg-bone/[0.04] p-6 shadow-card backdrop-blur md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber">Agentic development</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">Not autocomplete. An engineering multiplier.</h2>
              <p className="mt-6 text-lg leading-8 text-bone/64">My approach is context-first: define the system, constrain the agent, give it tools, review the work, and convert repeated wins into reusable workflows.</p>
            </div>
            <div className="grid gap-3">
              {principles.map(([title, body], index) => (
                <div key={title} className="flex gap-4 rounded-3xl border border-bone/10 bg-ink/40 p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-jade/10 text-sm font-semibold text-jade">0{index + 1}</span>
                  <div>
                    <h3 className="font-semibold text-bone">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-bone/58">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-jade">Stack</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {stack.map((item) => (
            <span key={item} className="rounded-2xl border border-bone/10 bg-bone/[0.04] px-4 py-3 text-sm text-bone/70">{item}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8">
        <div className="rounded-[2.5rem] border border-bone/10 bg-gradient-to-br from-plum/40 via-bone/[0.04] to-jade/10 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber">Contact</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">Want to build something serious?</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-bone/64">I’m interested in ambitious product work, agentic engineering systems, internal tools, and software that gives small teams unfair leverage.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-2xl bg-bone px-5 py-3 text-sm font-semibold text-ink" href="mailto:hello@connoradams.dev"><Mail className="h-4 w-4" /> Email</a>
            <a className="inline-flex items-center gap-2 rounded-2xl border border-bone/10 bg-bone/[0.05] px-5 py-3 text-sm font-semibold text-bone" href="https://github.com/Connor-Adams" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a>
            <a className="inline-flex items-center gap-2 rounded-2xl border border-bone/10 bg-bone/[0.05] px-5 py-3 text-sm font-semibold text-bone" href="https://www.linkedin.com/in/connor-adams" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function AgentRuntime() {
  const steps = ['Context loaded', 'Repo indexed', 'Plan generated', 'Patch reviewed', 'Tests passed', 'Deployed'];

  return (
    <motion.div initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
      <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-amber/15 via-plum/20 to-jade/10 blur-2xl" />
      <div className="relative rounded-[2.5rem] border border-bone/10 bg-ink/70 p-5 shadow-card backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-bone/10 pb-4">
          <div className="flex items-center gap-3">
            <TerminalSquare className="h-5 w-5 text-amber" />
            <span className="text-sm font-medium text-bone/75">agent-runtime.ts</span>
          </div>
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rust" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber" />
            <span className="h-2.5 w-2.5 rounded-full bg-jade" />
          </div>
        </div>
        <div className="mt-6 grid gap-3">
          {steps.map((step, index) => (
            <motion.div key={step} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.28 + index * 0.09 }} className="flex items-center gap-3 rounded-2xl border border-bone/10 bg-bone/[0.045] p-4">
              <CheckCircle2 className="h-5 w-5 text-jade" />
              <span className="font-medium text-bone/82">{step}</span>
              <span className="ml-auto text-xs text-bone/38">{String(index + 1).padStart(2, '0')}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 rounded-3xl border border-amber/15 bg-amber/[0.06] p-5">
          <div className="flex items-center gap-3">
            <BrainCircuit className="h-5 w-5 text-amber" />
            <p className="font-semibold text-bone">Intent → context → plan → tools → verify → ship</p>
          </div>
          <p className="mt-3 text-sm leading-6 text-bone/56">A senior engineering loop for AI-native development: fast enough to compound, constrained enough to trust.</p>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
