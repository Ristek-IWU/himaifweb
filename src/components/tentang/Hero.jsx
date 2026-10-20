import Reveal from '../Reveal'
import { useLanguage } from '../../context/LanguageContext'
import logoHima from '../../assets/logo_hima.png'

/**
 * Section 1 — Hero halaman Tentang Kami.
 * Background gelap (primary), teks + card sejarah dengan ribbon.
 */
export default function Hero() {
  const { t } = useLanguage()
  const paragraphs = t('tentang.sejarahParagraphs')

  return (
    <section className="relative bg-[#f0f2f8] dark:bg-gradient-to-br dark:from-[#040d1a] dark:via-[#080f1e] dark:to-[#0a1628] text-[#031636] dark:text-white overflow-hidden py-8 sm:py-10 lg:py-12">
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
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#005bc1]/10 dark:bg-[#005bc1]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6 text-center">
        <Reveal>
          {/* Judul dengan gaya Struktur Organisasi */}
          <div className="relative inline-block mb-6 sm:mb-8">
            {/* Watermark */}
            <span className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight">
              {t('tentang.sejarahWatermark')}
            </span>
            {/* Box — dengan border dashed */}
            <div className="relative inline-flex items-center bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-lg sm:rounded-xl px-6 py-2 sm:px-7 sm:py-2.5 shadow-[0_4px_20px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-2">
              <h1 className="text-lg sm:text-xl font-serif font-extrabold tracking-tight">
                <span className="text-[#005bc1] dark:text-[#60a5fa]">{t('tentang.sejarahTitle1') || 'HIMAIF '}</span>
                <span className="text-[#031636] dark:text-white">{t('tentang.sejarahTitleHighlight') || 'IWU'}</span>
              </h1>
            </div>
          </div>

          {/* Card Sejarah — gaya ribbon */}
          <div className="group relative max-w-2xl lg:max-w-3xl mx-auto bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl sm:rounded-2xl pl-14 pr-5 sm:pl-18 sm:pr-7 py-6 sm:py-7 md:py-8 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-md transition-all duration-300 text-left min-h-[180px]">
            {/* Left 3D Ribbon — dengan logo di dalam */}
            <div className="absolute left-3 sm:left-4 top-0 bottom-[-10px] w-8 sm:w-10 rounded-t-lg bg-[#005bc1] dark:bg-[#005bc1] flex flex-col items-center pt-3 pb-2 z-10 shadow-sm">
              {/* Logo HIMA di dalam pita */}
              <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-md overflow-hidden bg-white/20 p-0.5 mb-2 flex-shrink-0">
                <img
                  src={logoHima}
                  alt="Logo HIMAIF"
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className="text-[8px] sm:text-[9px] font-extrabold text-white/90 uppercase tracking-wider whitespace-nowrap"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                {t('tentang.sejarahRibbon')}
              </span>
              {/* 3D Fold */}
              <div className="absolute bottom-0 left-full w-0 h-0 border-t-[10px] border-t-[#003d80] dark:border-t-[#003d80] border-r-[10px] border-r-transparent"></div>
            </div>

            {/* Konten Sejarah */}
            <div>
              {/* Subheading header */}
              <div className="border-b border-[#e5e7eb] dark:border-[#1e3a5f]/40 pb-2 mb-3.5">
                <h2 className="text-xs sm:text-sm font-bold text-[#005bc1] dark:text-[#60a5fa] uppercase tracking-wider">
                  {t('tentang.sejarahSubheading')}
                </h2>
              </div>

              {/* Paragraf */}
              <div className="space-y-3.5 sm:space-y-4">
                {Array.isArray(paragraphs) && paragraphs.map((text, i) => (
                  <p
                    key={i}
                    className="text-xs sm:text-sm md:text-base leading-relaxed text-[#44474e] dark:text-[#d3e4fe]/80 text-justify md:text-left"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
