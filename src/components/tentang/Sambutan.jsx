import Reveal from '../Reveal'
import Placeholder from './Placeholder'
import { useLanguage } from '../../context/LanguageContext'
import kaprodiImg from '../../assets/kaprodi.png'

/**
 * Section 2 — Sambutan Kepala Program Studi.
 * Grid 12 kolom: foto (5) + sambutan (7).
 */
export default function Sambutan() {
  const { t } = useLanguage()

  // Load profile image from localStorage if available
  const savedProfiles = typeof window !== 'undefined' ? localStorage.getItem('admin_hima_profiles') : null
  const profiles = savedProfiles ? JSON.parse(savedProfiles) : null

  const eyebrow = t('tentang.sambutanEyebrow')
  const quote = t('tentang.sambutanQuote')
  const paragraphs = t('tentang.sambutanParagraphs')
  const name = t('tentang.sambutanKaprodiName')
  const role = t('tentang.sambutanKaprodiRole')
  const ribbonText = t('tentang.sambutanRibbonText')
  const rawImg = profiles?.kaprodi?.image
  const image = (rawImg && !rawImg.includes('unsplash.com')) ? rawImg : kaprodiImg

  return (
    <section className="bg-[#e1e8f5] dark:bg-gradient-to-b dark:from-[#0a1628] dark:to-[#0f1729] py-10 sm:py-12">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section Heading */}
        <Reveal>
          <div className="text-center mb-6 sm:mb-8">
            <div className="relative inline-block">
              <span className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight uppercase">
                {t('tentang.sambutanWatermark') || 'SAMBUTAN'}
              </span>
              <div className="relative inline-flex items-center bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-lg sm:rounded-xl px-6 py-2 sm:px-7 sm:py-2.5 shadow-[0_4px_20px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-2">
                <h2 className="text-lg sm:text-xl font-serif font-extrabold tracking-tight">
                  <span className="text-[#005bc1] dark:text-[#60a5fa]">{t('tentang.sambutanHeader1') || 'Kepala '}</span>
                  <span className="text-[#031636] dark:text-white">{t('tentang.sambutanHeader2') || 'Program '}</span>
                  <span className="text-[#005bc1] dark:text-[#60a5fa]">{t('tentang.sambutanHeader3') || 'Studi'}</span>
                </h2>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-center">
          {/* Foto — dengan pita */}
          <Reveal className="md:col-span-5 flex justify-center md:justify-start">
            <div className="group relative bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl sm:rounded-2xl shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] max-w-xs w-full">
              {/* Left 3D Ribbon */}
              <div className="absolute left-2.5 sm:left-3 top-0 bottom-[-10px] w-8 sm:w-9 rounded-t-lg bg-[#005bc1] dark:bg-[#005bc1] flex flex-col items-center pt-4 z-10 shadow-sm">
                <span
                  className="text-[8px] sm:text-[9px] font-extrabold text-white/80 uppercase tracking-[0.2em] whitespace-nowrap"
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                   {ribbonText}
                </span>
                {/* 3D Fold */}
                <div className="absolute bottom-0 left-full w-0 h-0 border-t-[10px] border-t-[#003d80] dark:border-t-[#003d80] border-r-[10px] border-r-transparent"></div>
              </div>
              {/* Foto */}
              <div className="pl-11 sm:pl-12 pr-2.5 py-2.5">
                {image ? (
                  <img
                    src={image}
                    alt={name}
                    className="rounded-lg sm:rounded-xl w-full aspect-[4/5] object-cover border border-[#e5e7eb] dark:border-[#1e3a5f]/60"
                  />
                ) : (
                  <Placeholder
                    label={`Foto ${name}`}
                    className="aspect-[4/5] w-full rounded-lg sm:rounded-xl border border-[#e5e7eb] dark:border-[#1e3a5f]/60"
                  />
                )}
              </div>
            </div>
          </Reveal>

          {/* Sambutan */}
          <Reveal delay={120} className="md:col-span-7 space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-2.5 text-[#005bc1] dark:text-[#38bdf8] text-[10px] sm:text-xs font-bold tracking-widest">
              <span className="w-10 h-px bg-[#005bc1] dark:bg-[#38bdf8]" />
              {eyebrow}
            </div>

            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#031636] dark:text-white leading-snug">
              {t('tentang.sambutanTitle1') || 'Kepemimpinan yang Menginspirasi & '}<span className="text-[#005bc1] dark:text-[#60a5fa]">{t('tentang.sambutanTitleHighlight') || 'Memberdayakan'}</span>
            </h3>

            <div className="space-y-2.5 text-[#44474e] dark:text-[#d3e4fe]/80 leading-relaxed text-xs sm:text-sm">
              {Array.isArray(paragraphs) ? (
                paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))
              ) : (
                <p className="whitespace-pre-line">{t('tentang.sambutanDesc')}</p>
              )}
            </div>

            <blockquote className="italic text-[#031636] dark:text-[#d3e4fe] font-medium text-xs sm:text-sm leading-relaxed border-l-4 border-[#005bc1] dark:border-[#38bdf8] pl-4 bg-white/50 dark:bg-[#005bc1]/10 py-2.5 rounded-r-lg shadow-xs">
              "{quote}"
            </blockquote>

            <div className="pt-1">
              <p className="font-bold text-[#031636] dark:text-white text-xs sm:text-sm md:text-base leading-snug">{name}</p>
              <p className="text-[11px] sm:text-xs font-semibold text-[#005bc1] dark:text-[#38bdf8] mt-0.5">{role}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
