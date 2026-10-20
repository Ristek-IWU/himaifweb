import React from 'react'
import Reveal from '../Reveal'
import { useLanguage } from '../../context/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-10 sm:py-14 bg-[#e1e8f5] dark:bg-gradient-to-b dark:from-[#0a1628] dark:to-[#0f1729] relative overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <Reveal>
          <div className="text-center mb-6 sm:mb-8">
            <div className="relative inline-block">
              <span className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight uppercase">
                {t('projects.watermark')}
              </span>
              <div className="relative inline-flex items-center bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-lg sm:rounded-xl px-6 py-2 sm:px-7 sm:py-2.5 shadow-[0_4px_20px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-2">
                <h2 className="text-[#031636] dark:text-white text-lg sm:text-xl font-serif font-extrabold tracking-tight">
                  {t('projects.title1')}<span className="text-[#005bc1] dark:text-[#60a5fa]">{t('projects.titleHighlight')}</span>
                </h2>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Coming Soon — Clean Typography matching Vision */}
        <Reveal delay={150}>
          <div className="relative flex flex-col items-center justify-center py-8 sm:py-12 md:py-14">
            {/* Top accent line */}
            <div className="w-12 sm:w-16 h-[2px] bg-[#005bc1]/30 dark:bg-[#60a5fa]/20 rounded-full mb-5 sm:mb-6" />

            {/* COMING SOON text */}
            <h3 className="relative font-serif font-black tracking-tight uppercase text-[#005bc1] dark:text-[#60a5fa] text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-center select-none">
              COMING
              <br />
              SOON
            </h3>

            {/* Bottom accent line */}
            <div className="w-12 sm:w-16 h-[2px] bg-[#005bc1]/30 dark:bg-[#60a5fa]/20 rounded-full mt-5 sm:mt-6" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
