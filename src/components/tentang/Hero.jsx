import Reveal from '../Reveal'
import { heroData } from './data/data'

/**
 * Section 1 — Hero halaman Tentang Kami.
 * Background gelap (primary), teks + card sejarah dengan ribbon.
 */
export default function Hero() {
  const { title, description } = heroData

  return (
    <section className="relative bg-[#f0f2f8] dark:bg-gradient-to-br dark:from-[#040d1a] dark:via-[#080f1e] dark:to-[#0a1628] text-[#031636] dark:text-white overflow-hidden">
      {/* Map coordinate grid */}
      <div
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(0,91,193,0.06) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(0,91,193,0.06) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '48px 48px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(96,165,250,0.05) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(96,165,250,0.05) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '48px 48px',
        }}
      />
      {/* Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#005bc1]/10 dark:bg-[#005bc1]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6 py-16 md:py-24 text-center">
        <Reveal>
          {/* Judul dengan gaya Struktur Organisasi */}
          <div className="relative inline-block mb-8">
            {/* Watermark */}
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 text-2xl sm:text-5xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight">
              Sejarah
            </span>
            {/* Box — dengan border dashed */}
            <div className="relative inline-flex items-center bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-xl px-8 py-3 shadow-[0_4px_24px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-2">
              <h1 className="text-[#031636] dark:text-white text-2xl sm:text-3xl font-serif font-extrabold tracking-tight">
                HIMAIf <span className="text-[#005bc1] dark:text-[#60a5fa]"> IWU</span>
              </h1>
            </div>
          </div>

          {/* Card Sejarah — gaya ribbon */}
          <div className="group relative max-w-3xl mx-auto bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-2xl pl-16 pr-5 sm:pl-20 sm:pr-8 py-8 sm:py-10 md:py-12 shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-lg transition-all duration-300 text-left">
            {/* Left 3D Ribbon — dengan logo di dalam */}
            <div className="absolute left-3.5 sm:left-5 top-0 bottom-[-16px] w-10 sm:w-12 rounded-t-lg bg-[#005bc1] dark:bg-[#005bc1] flex flex-col items-center pt-4 z-10 shadow-md">
              {/* Logo HIMA di dalam pita */}
              <div className="w-7 h-7 rounded-lg overflow-hidden bg-white/20 p-0.5 mb-1.5 flex-shrink-0">
                <img
                  src="/src/assets/logo_hima.png"
                  alt="Logo HIMAIF"
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className="text-[11px] font-extrabold text-white/80 uppercase tracking-[0.15em] whitespace-nowrap"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                Sejarah Himpunan Mahasiswa Informatika
              </span>
              {/* 3D Fold */}
              <div className="absolute bottom-0 left-full w-0 h-0 border-t-[12px] border-t-[#003d80] dark:border-t-[#003d80] border-r-[12px] border-r-transparent"></div>
            </div>

            {/* Konten Sejarah — tanpa logo (pindah ke pita) */}
            <div className="space-y-5 md:space-y-6">
              {description.map((text, i) => (
                <p
                  key={i}
                  className="text-sm md:text-base leading-[1.8] text-[#44474e] dark:text-[#d3e4fe]/80 text-justify md:text-left"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
