import Reveal from './Reveal'
import Placeholder from './Placeholder'
import { ketuaData } from './data/data'

/**
 * Section 2 — Sambutan Kepala Program Studi.
 * Grid 12 kolom: foto (5) + sambutan (7).
 */
export default function Sambutan() {
  const { eyebrow, title, quote, description, name, role, image } = ketuaData

  return (
    <section className="bg-[#e1e8f5] dark:bg-gradient-to-b dark:from-[#0a1628] dark:to-[#0f1729]">
      <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Foto — dengan pita */}
          <Reveal className="md:col-span-5">
            <div className="group relative bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-2xl shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              {/* Left 3D Ribbon */}
              <div className="absolute left-3 top-0 bottom-[-12px] w-10 rounded-t-lg bg-[#005bc1] dark:bg-[#005bc1] flex flex-col items-center pt-5 z-10 shadow-md">
                <span
                  className="text-[9px] font-extrabold text-white/80 uppercase tracking-[0.2em] whitespace-nowrap"
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                   Kepala Program Studi Informatika IWU
                </span>
                {/* 3D Fold */}
                <div className="absolute bottom-0 left-full w-0 h-0 border-t-[12px] border-t-[#003d80] dark:border-t-[#003d80] border-r-[12px] border-r-transparent"></div>
              </div>
              {/* Foto */}
              <div className="pl-14 pr-3 py-3">
                {image ? (
                  <img
                    src={image}
                    alt={name}
                    className="rounded-xl w-full aspect-[4/5] object-cover border-2 border-[#e5e7eb] dark:border-[#1e3a5f]/60"
                  />
                ) : (
                  <Placeholder
                    label={`Foto ${name}`}
                    className="aspect-[4/5] w-full border-2 border-[#e5e7eb] dark:border-[#1e3a5f]/60"
                  />
                )}
              </div>
            </div>
          </Reveal>

          {/* Sambutan */}
          <Reveal delay={120} className="md:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-[#005bc1] dark:text-[#38bdf8] text-xs font-bold tracking-widest">
              <span className="w-12 h-px bg-[#005bc1] dark:bg-[#38bdf8]" />
              {eyebrow}
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#031636] dark:text-white leading-tight">
              {title}
            </h2>

            <blockquote className="italic text-[#44474e] dark:text-[#d3e4fe]/80 text-lg leading-relaxed border-l-4 border-[#d8e2ff] dark:border-[#005bc1] pl-5">
              {quote}
            </blockquote>

            <p className="text-[#44474e] dark:text-[#d3e4fe]/70 leading-relaxed">
              {description}
            </p>

            <div className="pt-2">
              <p className="font-bold text-[#031636] dark:text-white">{name}</p>
              <p className="text-sm font-semibold text-[#005bc1] dark:text-[#38bdf8]">{role}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
