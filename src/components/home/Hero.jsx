import React from 'react'
import logoHima from '../../assets/logo_hima.png'
import { useLanguage } from '../../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative flex items-center bg-[#f0f2f8] dark:bg-gradient-to-br dark:from-[#040d1a] dark:via-[#080f1e] dark:to-[#0a1628] overflow-hidden border-b border-[#c5c6cf] dark:border-[#1e3a5f]/30 py-8 sm:py-12 lg:py-14">
      {/* Background glow and subtle dot grid */}
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
      {/* Ambient glows */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[350px] h-[350px] bg-[#005bc1]/10 dark:bg-[#005bc1]/20 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute -left-20 top-10 w-[250px] h-[250px] bg-[#005bc1]/5 dark:bg-[#60a5fa]/10 blur-[70px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
        
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
          {/* Headline with Dashed Box Accent */}
          <h1 className="text-[#031636] dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-normal tracking-tight flex flex-col gap-1 sm:gap-1.5">
            <span>{t('hero.title1')}</span>
            <span className="relative inline-block my-2 sm:my-2.5 self-start">
              {/* Teks Watermark di Belakang */}
              <span 
                className="absolute -top-3 sm:-top-5 text-lg sm:text-2xl md:text-3xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight"
                style={{ left: '10px', transform: 'none' }}
              >
                {t('hero.subtitle')}
              </span>
              {/* Box Utama */}
              <span className="inline-flex items-center bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-lg sm:rounded-xl px-3.5 sm:px-4 py-1 sm:py-1.5 shadow-[0_4px_20px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-2">
                <span className="text-[#005bc1] dark:text-[#60a5fa] font-bold">{t('hero.badge')}</span>
              </span>
            </span>
            <span>{t('hero.title2')}</span>
          </h1>

          {/* Description Text */}
          <p className="text-[#44474e] dark:text-[#d3e4fe]/70 text-xs sm:text-sm md:text-base max-w-lg leading-relaxed opacity-95">
            {t('hero.desc1')}
            <span className="text-[#005bc1] dark:text-[#60a5fa] font-bold">{t('hero.descHighlight')}</span>
            {t('hero.desc2')}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-1">
            <button className="bg-[#031636] dark:bg-gradient-to-r dark:from-[#005bc1] dark:to-[#38bdf8] text-white px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold hover:bg-[#005bc1] dark:hover:from-[#1d6fd1] dark:hover:to-[#4ea4f5] hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer">
              {t('hero.ctaJoin')}
            </button>
            <a href="#projects" className="bg-transparent text-[#031636] dark:text-[#60a5fa] border border-[#c5c6cf] dark:border-[#60a5fa]/30 px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold hover:bg-white dark:hover:bg-[#0d1b33] hover:border-[#005bc1] dark:hover:border-[#60a5fa] active:scale-95 transition-all duration-200 flex items-center gap-1.5 cursor-pointer">
              <span>{t('hero.ctaExplore')}</span>
              <span className="material-symbols-outlined text-xs sm:text-sm">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Right Content (Interactive Floating Portal) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          {/* Main Square Orbit Frame */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-64 lg:h-64 bg-white dark:bg-gradient-to-br dark:from-[#0d1b33] dark:to-[#0a1628] border border-[#c5c6cf]/60 dark:border-[#60a5fa]/20 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg dark:shadow-[0_10px_40px_rgba(96,165,250,0.15)] select-none">
            <img src={logoHima} alt="HIMA Logo" className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain" />
            
            {/* Dashed outer orbit guide lines */}
            <div className="absolute inset-0 rounded-[28px] border border-dashed border-[#005bc1]/10 dark:border-[#60a5fa]/10 scale-105 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-[32px] border border-dashed border-[#005bc1]/5 dark:border-[#60a5fa]/5 scale-110 pointer-events-none"></div>

            {/* Hanging Stats Card */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-stretch gap-3 bg-white dark:bg-[#0d1b33] border border-[#c5c6cf]/50 dark:border-[#60a5fa]/15 rounded-xl py-1.5 px-3.5 shadow-md dark:shadow-[0_8px_20px_rgba(0,0,0,0.3)] backdrop-blur-md whitespace-nowrap">
              <div className="text-center min-w-[40px]">
                <p className="text-[#005bc1] dark:text-[#60a5fa] text-base font-black leading-none">150+</p>
                <p className="text-[#44474e] dark:text-[#d3e4fe]/50 text-[7px] sm:text-[8px] font-bold uppercase tracking-wider mt-1">{t('hero.statsMembers')}</p>
              </div>
              <div className="w-[1px] bg-[#c5c6cf]/80 dark:bg-[#1e3a5f]/60"></div>
              <div className="text-center min-w-[40px]">
                <p className="text-[#005bc1] dark:text-[#60a5fa] text-base font-black leading-none">20+</p>
                <p className="text-[#44474e] dark:text-[#d3e4fe]/50 text-[7px] sm:text-[8px] font-bold uppercase tracking-wider mt-1">{t('hero.statsProjects')}</p>
              </div>
              <div className="w-[1px] bg-[#c5c6cf]/80 dark:bg-[#1e3a5f]/60"></div>
              <div className="text-center min-w-[40px]">
                <p className="text-[#005bc1] dark:text-[#60a5fa] text-base font-black leading-none">5+</p>
                <p className="text-[#44474e] dark:text-[#d3e4fe]/50 text-[7px] sm:text-[8px] font-bold uppercase tracking-wider mt-1">{t('hero.statsDivisions')}</p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  )
}
