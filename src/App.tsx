import type { ReactNode } from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-navy">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <FinalCta />
      <Footer />
    </div>
  )
}

function LogoMark() {
  return (
    <div className="flex items-center gap-2">
      <img src="/icon.png" alt="DestacAI" className="w-7 h-7" />
      <span className="text-lg font-semibold text-navy">DestacAI</span>
    </div>
  )
}

function InstallButton({ size = 'sm' }: { size?: 'sm' | 'base' }) {
  const cls =
    size === 'base'
      ? 'bg-accent text-accent-text hover:bg-accent-hover transition-colors font-semibold px-7 py-3.5 rounded-xl text-base inline-flex items-center gap-2'
      : 'bg-accent text-accent-text hover:bg-accent-hover transition-colors font-medium px-4 py-2 rounded-xl text-sm inline-block'
  return (
    <a href="https://chromewebstore.google.com/detail/destacai/lclijehnimecmgiioigbiakbkknfmbef" target="_blank" rel="noopener noreferrer" className={cls}>
      Install for free
      {size === 'base' && (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8H13M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </a>
  )
}

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <LogoMark />
        <InstallButton size="sm" />
      </div>
    </header>
  )
}

function ExtensionMockup() {
  return (
    <div className="relative">
      <div className="w-[288px] bg-bg rounded-2xl border border-border shadow-xl shadow-navy/8 p-5">
        <div className="flex items-center gap-1.5 mb-5">
          <span className="w-2.5 h-2.5 rounded-full bg-border" />
          <span className="w-2.5 h-2.5 rounded-full bg-border" />
          <span className="w-2.5 h-2.5 rounded-full bg-border" />
        </div>

        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
          <div className="w-9 h-9 rounded-lg bg-[#0077B5] shrink-0 flex items-center justify-center">
            <span className="text-white text-xs font-black tracking-tighter">in</span>
          </div>
          <div className="min-w-0">
            <p className="text-navy text-sm font-semibold truncate">Senior Frontend Engineer</p>
            <p className="text-navy-muted text-xs">Nubank · São Paulo · Remote</p>
          </div>
        </div>

        <div className="bg-surface rounded-xl p-4 mb-4 border border-border">
          <div className="flex items-end justify-between mb-2.5">
            <span className="text-navy-muted text-[10px] font-semibold uppercase tracking-widest">
              ATS Score
            </span>
            <span className="text-danger font-bold text-2xl leading-none">23/100</span>
          </div>
          <div className="h-1.5 bg-border rounded-full mb-3 overflow-hidden">
            <div className="h-full bg-danger rounded-full" style={{ width: '23%' }} />
          </div>
          <div className="space-y-2">
            {['React Native', 'TypeScript', 'GraphQL'].map((kw) => (
              <div key={kw} className="flex items-center gap-2">
                <span className="text-danger text-xs font-bold">✗</span>
                <span className="text-navy-muted text-xs">{kw} missing</span>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full bg-accent text-accent-text hover:bg-accent-hover transition-colors text-sm font-semibold py-2.5 rounded-xl">
          Generate Tailored CV →
        </button>
      </div>

      <div className="absolute -bottom-4 -right-4 flex items-center gap-1.5 bg-green-600 text-white px-3.5 py-2 rounded-xl font-semibold text-sm shadow-md">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2 6l3 3 5-5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        91/100 after DestacAI
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="bg-bg min-h-screen flex items-center pt-14 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 xl:gap-24 items-center">
          <div className="max-w-2xl">
            <div className="fade-up delay-1 inline-flex items-center gap-2.5 bg-danger-surface border border-danger/20 rounded-full px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-danger flex-shrink-0" />
              <span className="text-danger text-sm font-medium">
                75% of CVs are rejected before a recruiter reads them
              </span>
            </div>

            <h1 className="fade-up delay-2 text-4xl sm:text-5xl xl:text-[3.5rem] font-semibold text-navy leading-tight mb-6">
              You're losing jobs because your CV doesn't pass the ATS filter
            </h1>

            <p className="fade-up delay-3 text-navy-muted text-lg leading-relaxed mb-10">
              DestacAI reads the job description on LinkedIn and generates a CV
              tailored to pass the automated filters. In seconds, without leaving
              your browser.
            </p>

            <div className="fade-up delay-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <InstallButton size="base" />
              <p className="text-navy-muted text-sm">Chrome Web Store · No credit card required</p>
            </div>
          </div>

          <div className="hidden lg:block">
            <ExtensionMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

interface ProblemItem {
  num: string
  icon: ReactNode
  title: string
  desc: string
}

const problems: ProblemItem[] = [
  {
    num: '01',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M2 6.5l8 5 8-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 14l4 4M16 14l-4 4"
          stroke="#b03a2e"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'You apply and never hear back',
    desc: "The silence isn't human rejection — it's an algorithm eliminating your CV before anyone reads it.",
  },
  {
    num: '02',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M12 2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M12 2v5h5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M7 11h6M7 14h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Your CV is the same for every job',
    desc: 'One generic CV for hundreds of different roles. ATS systems catch this immediately and discard it.',
  },
  {
    num: '03',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M13.5 13.5l4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6.5 9h5M9 6.5v5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "You don't know which keywords to use",
    desc: 'Every job listing has a specific vocabulary. Without the right words, your CV disappears from search results.',
  },
]

function Problem() {
  return (
    <section className="bg-surface py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-navy-muted text-xs font-semibold uppercase tracking-widest mb-3">
            The problem is real
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy leading-tight">
            Why your effort isn't turning into interviews
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p) => (
            <div
              key={p.num}
              className="card-hover bg-bg border border-border rounded-xl p-6 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between">
                <div className="text-navy-muted">{p.icon}</div>
                <span className="text-border text-4xl font-semibold leading-none select-none">
                  {p.num}
                </span>
              </div>
              <div>
                <h3 className="text-navy font-semibold text-sm mb-1.5 leading-snug">{p.title}</h3>
                <p className="text-navy-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface StepItem {
  n: string
  title: string
  desc: string
}

const steps: StepItem[] = [
  {
    n: '1',
    title: 'Open a job on LinkedIn',
    desc: 'DestacAI automatically detects the job description as you browse.',
  },
  {
    n: '2',
    title: 'DestacAI analyzes and generates your CV',
    desc: 'Our AI reads the requirements and builds a CV with exactly the right keywords.',
  },
  {
    n: '3',
    title: 'Apply with confidence',
    desc: 'Download the tailored PDF and apply knowing your CV will pass the ATS filter.',
  },
]

function Solution() {
  return (
    <section className="bg-bg py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-navy-muted text-xs font-semibold uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy leading-tight">
            Three steps. One perfect CV.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-5 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-border z-0" />

          <div className="relative z-10 grid md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((s) => (
              <div key={s.n} className="flex flex-col  items-start md:items-center md:text-center">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <span className="text-accent-text font-bold text-base">{s.n}</span>
                </div>
                <h3 className="text-navy font-semibold text-sm mb-1.5 leading-snug">{s.title}</h3>
                <p className="text-navy-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface FeatureItem {
  icon: ReactNode
  stat: string
  title: string
  desc: string
}

const features: FeatureItem[] = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="13" width="3" height="5" rx="0.75" fill="currentColor" opacity="0.3" />
        <rect x="8.5" y="9" width="3" height="9" rx="0.75" fill="currentColor" opacity="0.6" />
        <rect x="15" y="4" width="3" height="14" rx="0.75" fill="currentColor" />
      </svg>
    ),
    stat: '0–100',
    title: 'Instant ATS score',
    desc: 'See exactly where your CV is failing, with missing keywords identified in real time.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 7v3.5l2.5 2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    stat: '< 60s',
    title: 'CV generated in seconds',
    desc: 'Async AI processing in the background. No waiting, no complicated forms.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M7 17h6M10 15v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6.5 9.5l2.5 2.5 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    stat: 'LinkedIn',
    title: 'Works directly on LinkedIn',
    desc: 'No copy-paste. Just open the job listing and click generate.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2l2 5.5H18l-4.9 3.6 1.9 5.5L10 13.3l-5 3.8 1.9-5.5L2 7.5h6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    stat: 'Free',
    title: 'Free to start',
    desc: 'Unlimited ATS scoring. 5 CV generations per month at no cost. Upgrade when you need more.',
  },
]

function Features() {
  return (
    <section className="bg-surface py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-navy-muted text-xs font-semibold uppercase tracking-widest mb-3">
            Benefits
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy leading-tight">
            Everything you need to stand out
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-hover bg-bg border border-border rounded-xl p-6 flex flex-col gap-3"
            >
              <div className="text-navy-muted">{f.icon}</div>
              <div className="text-2xl font-semibold text-navy">{f.stat}</div>
              <h3 className="text-navy text-sm font-semibold leading-snug">{f.title}</h3>
              <p className="text-navy-muted text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


function FinalCta() {
  return (
    <section className="bg-accent py-32 px-5">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-accent-text leading-tight mb-6">
          Stand out.
          <br />
          Now.
        </h2>
        <p className="text-accent-text/70 text-lg mb-10 leading-relaxed">
          Stop sending generic CVs.
          <br />
          Start getting interviews.
        </p>
        <a
          href="https://chromewebstore.google.com/detail/destacai/lclijehnimecmgiioigbiakbkknfmbef"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-navy text-white hover:bg-navy/90 transition-colors font-semibold px-10 py-4 rounded-xl text-base inline-flex items-center gap-2.5"
        >
          Install for free
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8H13M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <p className="text-accent-text/50 text-sm mt-4">Chrome Web Store · No credit card required</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-bg border-t border-border py-7 px-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <LogoMark />
        <p className="text-navy-muted text-sm">
          © {new Date().getFullYear()} DestacAI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
