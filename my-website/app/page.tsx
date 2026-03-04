import Link from 'next/link'
import HeroHeader from '@/components/HeroHeader'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroHeader />
      <div
        className="mx-auto max-w-4xl px-[var(--site-margin)] py-[var(--section-space-main)]"
        style={{ paddingLeft: 'var(--site-margin)', paddingRight: 'var(--site-margin)' }}
      >
        <h2 className="font-medium text-[80px] leading-none tracking-[-2.4px] text-foreground">
          Home
        </h2>
        <p className="mt-6 max-w-xl text-lg font-normal leading-[1.5] text-foreground/80">
          Experiment with components here. Use the styleguide for tokens and patterns.
        </p>

        <nav className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/styleguide"
            className="rounded-full border-[1.5px] border-brand bg-brand px-6 py-3 text-lg font-normal text-dark-900 hover:opacity-90"
          >
            Open Style Guide
          </Link>
        </nav>

        {/* Drop components below to test */}
        <section
          className="mt-16 rounded-sm border border-theme-border p-8"
          aria-label="Component experiments"
        >
          <h2 className="font-medium text-2xl leading-[1.3] text-foreground">
            Component experiments
          </h2>
          <p className="mt-2 text-lg leading-[1.5] text-foreground/70">
            Add and test components here as you build them.
          </p>
          <div className="mt-6 min-h-[120px]" />
        </section>
      </div>
    </main>
  )
}
