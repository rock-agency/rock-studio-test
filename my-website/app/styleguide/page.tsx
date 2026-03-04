import Link from 'next/link'

export default function StyleguidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className="bg-brand flex flex-col items-center justify-center gap-16 px-[var(--site-margin)] py-[var(--section-space-large)]"
        style={{ paddingLeft: 'var(--site-margin)', paddingRight: 'var(--site-margin)' }}
      >
        <div className="flex gap-8 items-start justify-center">
          <span className="text-lg font-medium text-dark-900">RockAgency</span>
          <span className="text-lg font-medium text-dark-900">Lumos</span>
        </div>
        <h1 className="font-medium text-[112px] leading-none tracking-[-3.36px] text-dark-900">
          Style Guide
        </h1>
        <div className="flex gap-4 items-center justify-center">
          <p className="text-lg font-normal leading-[1.5] text-dark-900">
            Overview page 2024
          </p>
          <span className="bg-background rounded-sm px-3 py-2 text-lg text-foreground">
            V2.0
          </span>
        </div>
      </header>

      {/* Button Components */}
      <section
        className="bg-dark-900 flex gap-[var(--site-gutter)] px-[var(--site-margin)] py-[var(--section-space-main)] text-white"
        style={{ paddingLeft: 'var(--site-margin)', paddingRight: 'var(--site-margin)' }}
      >
        <div className="flex w-[551px] flex-col gap-10">
          <h2 className="font-medium text-[80px] leading-none tracking-[-2.4px]">
            Button
            <br />
            Components
          </h2>
          <p className="max-w-[395px] text-lg font-normal leading-[1.5] text-white/90">
            Check the Figma Variables Panel for the default & hover values in both light & dark mode.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <button
              type="button"
              className="flex h-[88px] w-[88px] items-center justify-center rounded-full border-[1.5px] border-brand bg-brand"
              aria-label="Play"
            >
              <span className="text-2xl text-dark-900">▶</span>
            </button>
            <button
              type="button"
              className="flex h-[88px] w-[88px] items-center justify-center rounded-full border-[1.5px] border-white/20 bg-transparent"
              aria-label="Play secondary"
            >
              <span className="text-2xl text-white">▶</span>
            </button>
            <button
              type="button"
              className="flex h-[88px] w-[88px] items-center justify-center rounded-full border-[1.5px] border-dark-900 bg-dark-900"
              aria-label="Play dark"
            >
              <span className="text-2xl text-white">▶</span>
            </button>
          </div>
          <div className="flex gap-3 items-center flex-wrap">
            <button
              type="button"
              className="rounded-full border-[1.5px] border-brand bg-brand px-6 py-3 text-lg font-normal text-dark-900"
            >
              Button Text
            </button>
            <button
              type="button"
              className="rounded-full border-[1.5px] border-white/20 bg-transparent px-6 py-3 text-lg font-normal text-white"
            >
              Button Text
            </button>
            <button
              type="button"
              className="rounded-full border-[1.5px] border-dark-900 bg-dark-900 px-6 py-3 text-lg font-normal text-white"
            >
              Button Text
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-normal text-white hover:underline"
            >
              Text link + Icon
              <span className="text-xl">→</span>
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-dark-900"
              aria-label="Add"
            >
              +
            </button>
          </div>
        </div>
      </section>

      {/* Form Component */}
      <section
        className="bg-dark-900 flex gap-[var(--site-gutter)] px-[var(--site-margin)] py-[var(--section-space-main)] text-white"
        style={{ paddingLeft: 'var(--site-margin)', paddingRight: 'var(--site-margin)' }}
      >
        <div className="flex w-[551px] flex-col gap-10">
          <h2 className="font-medium text-[80px] leading-none tracking-[-2.4px]">
            Form
            <br />
            Component
          </h2>
          <p className="max-w-[395px] text-lg font-normal leading-[1.5] text-white/90">
            Check the Figma Variables Panel for the default & hover values in both light & dark mode.
          </p>
        </div>
        <div className="flex gap-2 items-start">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[396px] rounded-sm border-[1.5px] border-theme-border bg-background px-6 py-4 text-lg text-foreground placeholder:text-foreground/60"
          />
          <button
            type="button"
            className="rounded-sm border-[1.5px] border-brand bg-brand px-6 py-4 text-lg font-normal text-dark-900"
          >
            Submit
          </button>
        </div>
      </section>

      {/* Typography */}
      <section
        className="bg-background flex gap-[var(--site-gutter)] px-[var(--site-margin)] py-[var(--section-space-main)] text-foreground"
        style={{ paddingLeft: 'var(--site-margin)', paddingRight: 'var(--site-margin)' }}
      >
        <div className="flex w-[551px] flex-col gap-10">
          <h2 className="font-medium text-[80px] leading-none tracking-[-2.4px] text-foreground">
            Typography
          </h2>
          <p className="max-w-[395px] text-lg font-normal leading-[1.5] text-foreground/80">
            Open the “Tokens Studio for Figma” Plugin to view all typography details, including line
            heights, font families, font weights, and more.
          </p>
        </div>
        <div className="flex w-[777px] flex-col border-t border-theme-border/20">
          <TypeRow label="Display" className="text-[112px] tracking-[-3.36px]" />
          <TypeRow label="H1" className="text-[80px] tracking-[-2.4px]" />
          <TypeRow label="H2" className="text-[64px] tracking-[-1.92px]" />
          <TypeRow label="H3" className="text-[48px] leading-[1.1] tracking-[-1.44px]" />
          <TypeRow label="H4" className="text-[32px] leading-[1.3]" />
          <TypeRow label="H5" className="text-2xl leading-[1.3]" />
          <TypeRow label="H6" className="text-lg leading-[1.3]" />
          <div className="flex gap-4 items-center border-t border-theme-border/20 py-8">
            <Tag>Text Main</Tag>
            <p className="flex-1 text-lg font-normal leading-[1.5] text-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique. Duis cursus, mi quis.
            </p>
          </div>
          <div className="flex gap-4 items-center border-t border-theme-border/20 py-8">
            <Tag>Text Large</Tag>
            <p className="flex-1 text-xl font-normal leading-[1.5] text-foreground">
              Lorem ipsum dolor sit amet, cursus, mi quis viverra ornare
            </p>
          </div>
          <div className="flex gap-4 items-center border-t border-theme-border/20 py-8">
            <Tag>Text Small</Tag>
            <p className="flex-1 text-base font-medium leading-[1.5] text-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique. Duis cursus, mi quis viverra ornare
            </p>
          </div>
        </div>
      </section>

      {/* Utility */}
      <section
        className="bg-background flex gap-[var(--site-gutter)] px-[var(--site-margin)] py-[var(--section-space-main)] text-foreground"
        style={{ paddingLeft: 'var(--site-margin)', paddingRight: 'var(--site-margin)' }}
      >
        <div className="flex w-[551px] flex-col gap-10">
          <h2 className="font-medium text-[80px] leading-none tracking-[-2.4px] text-foreground">
            Utility
          </h2>
          <p className="max-w-[395px] text-lg font-normal leading-[1.5] text-foreground/80">
            Common time consuming elements
          </p>
        </div>
        <div className="flex flex-col border-t border-theme-border/20">
          <div className="flex gap-4 items-center py-8 border-t border-theme-border/20">
            <Tag>Tag Large</Tag>
          </div>
          <div className="flex gap-4 items-center py-8 border-t border-theme-border/20">
            <Tag className="text-base font-medium">Tag small</Tag>
          </div>
          <div className="flex gap-2 items-center py-8 border-t border-theme-border/20 text-base font-medium text-foreground">
            <span>Blog</span>
            <span>→</span>
            <span>Category</span>
          </div>
          <div className="flex gap-2 items-center py-8 border-t border-theme-border/20 text-base">
            <span className="font-medium">11 Jan 2022</span>
            <span>•</span>
            <span className="font-medium">5 min read</span>
          </div>
          <div className="flex flex-col gap-4 py-8 border-t border-theme-border/20">
            <p className="text-base font-medium text-foreground">Share this Article</p>
            <div className="flex gap-2">
              {['Link', 'In', 'X', 'Fb'].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-theme-border/30 text-xs"
                  aria-label={label}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 py-8 border-t border-theme-border/20">
            <p className="text-2xl font-medium leading-[1.3] text-foreground">Client</p>
            <p className="text-lg font-normal leading-[1.5] text-foreground">Full name</p>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section
        className="bg-dark-900 flex gap-[var(--site-gutter)] px-[var(--site-margin)] py-[var(--section-space-main)] text-white"
        style={{ paddingLeft: 'var(--site-margin)', paddingRight: 'var(--site-margin)' }}
      >
        <div className="flex w-[551px] flex-col gap-10">
          <h2 className="font-medium text-[80px] leading-none tracking-[-2.4px]">
            Colors
          </h2>
          <p className="max-w-[395px] text-lg font-normal leading-[1.5] text-white/90">
            Primary dark and primary light usage.
          </p>
        </div>
        <div className="flex gap-6">
          <div className="w-[320px] rounded-sm bg-dark-900/80 p-6 border border-white/10">
            <Tag className="mb-4">Primary Dark</Tag>
            <h3 className="mb-2 text-xl font-medium text-white">Heading</h3>
            <p className="mb-4 text-lg leading-[1.5] text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button
              type="button"
              className="rounded-sm bg-brand px-4 py-3 text-lg font-normal text-dark-900"
            >
              Button Text
            </button>
          </div>
          <div className="w-[320px] rounded-sm bg-background p-6 border border-theme-border">
            <Tag className="mb-4">Primary Light</Tag>
            <h3 className="mb-2 text-xl font-medium text-foreground">Heading</h3>
            <p className="mb-4 text-lg leading-[1.5] text-foreground/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button
              type="button"
              className="rounded-sm bg-brand px-4 py-3 text-lg font-normal text-dark-900"
            >
              Button Text
            </button>
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <section
        className="bg-dark-900 flex gap-[var(--site-gutter)] px-[var(--site-margin)] py-[var(--section-space-main)] text-white"
        style={{ paddingLeft: 'var(--site-margin)', paddingRight: 'var(--site-margin)' }}
      >
        <div className="flex w-[551px] flex-col gap-10">
          <h2 className="font-medium text-[80px] leading-none tracking-[-2.4px]">
            Global Styles
          </h2>
          <p className="max-w-[395px] text-lg font-normal leading-[1.5] text-white/90">
            Spacing, radius, and border width.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-white/80">Global Spacing Small</span>
            <div className="h-2 w-16 rounded bg-white/20" style={{ width: 'var(--space-2)' }} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-white/80">Global Spacing Medium</span>
            <div className="h-2 w-24 rounded bg-white/20" style={{ width: 'var(--space-4)' }} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-white/80">Global Spacing Large</span>
            <div className="h-2 w-32 rounded bg-white/20" style={{ width: 'var(--space-8)' }} />
          </div>
          <div className="flex flex-col gap-2">
            <Tag>Line Height</Tag>
            <div className="h-px w-48 bg-white/30" />
          </div>
          <div className="flex gap-4 items-center flex-wrap">
            <div className="flex flex-col gap-2">
              <Tag>Radius Sm</Tag>
              <div className="h-12 w-24 rounded-sm bg-white/20" />
            </div>
            <div className="flex flex-col gap-2">
              <Tag>Radius Md</Tag>
              <div className="h-12 w-24 rounded-md bg-white/20" />
            </div>
            <div className="flex flex-col gap-2">
              <Tag>Radius Lg</Tag>
              <div className="h-12 w-24 rounded-full bg-white/20" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Tag>Border Width 1px</Tag>
            <div
              className="h-12 w-32 rounded-sm bg-transparent"
              style={{ border: '1.5px solid var(--theme-border)' }}
            />
          </div>
        </div>
      </section>

      <footer className="bg-brand py-8 text-center text-dark-900">
        <Link href="/" className="text-lg font-medium underline">
          ← Back to Home
        </Link>
      </footer>
    </div>
  )
}

function Tag({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-sm bg-brand px-3 py-2 text-lg font-normal text-dark-900 shrink-0 ${className}`}
    >
      {children}
    </span>
  )
}

function TypeRow({
  label,
  className = '',
}: {
  label: string
  className?: string
}) {
  return (
    <div className="flex gap-4 items-center border-t border-theme-border/20 py-8">
      <Tag>{label}</Tag>
      <p className={`flex-1 font-medium leading-none text-foreground ${className}`}>
        Heading
        <br />
        here
      </p>
    </div>
  )
}
