'use client'

import Image from 'next/image'

/**
 * Hero / Header 1 — from Figma node 441-947.
 * Full-bleed hero with dark background, overlay image, headline, body copy, and two CTAs.
 * Responsive: fluid typography and padding; buttons wrap on small screens.
 */

export default function HeroHeader() {
  return (
    <section
      className="relative flex w-full min-h-[70vh] flex-col items-center justify-center bg-dark-900 px-4 py-[var(--section-space-main)] sm:px-6 md:min-h-[800px] md:px-[var(--site-margin)] lg:min-h-[900px]"
      aria-label="Hero"
    >
      {/* Background layer */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-dark-900" />
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex w-full max-w-[834px] flex-col items-center gap-6 md:gap-10">
        <div className="flex w-full flex-col items-center gap-6 text-center text-white md:gap-10">
          <h1 className="font-medium leading-tight tracking-[-1.92px] text-3xl text-white max-w-[834px] sm:text-4xl md:text-5xl lg:text-[64px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          <p className="max-w-[560px] text-base leading-[1.5] text-white/90 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            className="rounded-full border-[1.5px] border-brand bg-brand px-6 py-3 text-lg font-normal text-dark-900 hover:opacity-90"
          >
            Button Text
          </button>
          <button
            type="button"
            className="rounded-full border-[1.5px] border-white/20 bg-transparent px-6 py-3 text-lg font-normal text-white hover:bg-white/10"
          >
            Button Text
          </button>
        </div>
      </div>
    </section>
  )
}
