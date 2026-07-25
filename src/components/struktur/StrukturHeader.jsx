import React from 'react'
import Reveal from '../Reveal'
import { useLanguage } from '../../context/LanguageContext'

export default function StrukturHeader() {
  const { t } = useLanguage()

  return (
    <Reveal>
      <header className="max-w-[1280px] mx-auto px-6 text-center mb-8 pt-12 md:pt-16">
        <div className="relative inline-block mb-4">
          {/* Teks Watermark di Belakang */}
          <span className="absolute -top-11 left-1/2 -translate-x-1/2 text-5xl sm:text-6xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight">
            {t('struktur.watermark')}
          </span>
          {/* Box Utama — Struktur + Kabinet */}
          <div className="relative inline-flex items-center gap-4 bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-xl px-8 py-3 shadow-[0_4px_24px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-2">
            <h1 className="text-[#031636] dark:text-white text-xl sm:text-2xl md:text-3xl font-serif font-extrabold tracking-tight">
              {t('struktur.cabinetTitle1')}<span className="text-[#005bc1] dark:text-[#60a5fa]">{t('struktur.cabinetTitleHighlight')}</span>{t('struktur.cabinetTitle2')}
            </h1>
            <div className="w-px h-6 bg-[#005bc1]/25 dark:bg-[#60a5fa]/20"></div>
           
          </div>
        </div>

        {/* Separator line menuju BPH */}
        <div className="flex items-center justify-center gap-2">
          <div className="h-8 w-px bg-[#005bc1]/20 dark:bg-[#60a5fa]/15"></div>
        </div>
      </header>
    </Reveal>
  )
}
