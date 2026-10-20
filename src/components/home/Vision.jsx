import React from 'react'
import Reveal from '../Reveal'
import { useLanguage } from '../../context/LanguageContext'

export default function Vision() {
  const { t } = useLanguage()

  const visionCard = {
    title: t('vision.visionTitle'),
    desc: t('vision.visionDesc'),
    icon: 'stars',
    tagBg: 'bg-[#031636]',
    foldBorder: 'border-t-[#010a1b]',
    textColor: 'text-[#031636]',
    num: 'V',
  }

  const missions = [
    {
      num: '01',
      title: t('vision.missions.0.title'),
      desc: t('vision.missions.0.desc'),
      icon: 'school',
      tagBg: 'bg-[#005bc1]',
      foldBorder: 'border-t-[#003d80]',
      textColor: 'text-[#005bc1]',
    },
    {
      num: '02',
      title: t('vision.missions.1.title'),
      desc: t('vision.missions.1.desc'),
      icon: 'science',
      tagBg: 'bg-[#031636]',
      foldBorder: 'border-t-[#010a1b]',
      textColor: 'text-[#031636]',
    },
    {
      num: '03',
      title: t('vision.missions.2.title'),
      desc: t('vision.missions.2.desc'),
      icon: 'volunteer_activism',
      tagBg: 'bg-[#4e5e82]',
      foldBorder: 'border-t-[#35415c]',
      textColor: 'text-[#4e5e82]',
    },
    {
      num: '04',
      title: t('vision.missions.3.title'),
      desc: t('vision.missions.3.desc'),
      icon: 'handshake',
      tagBg: 'bg-[#0091ae]',
      foldBorder: 'border-t-[#006377]',
      textColor: 'text-[#0091ae]',
    },
  ]

  return (
    <section id="vision" className="py-10 sm:py-14 bg-[#e1e8f5] dark:bg-gradient-to-b dark:from-[#0a1628] dark:to-[#0f1729]">
      <div className="max-w-[1120px] mx-auto px-6 space-y-6 sm:space-y-8">
        
        {/* Section Heading */}
        <Reveal>
          <div className="text-center">
            <div className="relative inline-block">
              <span className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight">
                {t('vision.watermark')}
              </span>
              <div className="relative inline-flex items-center bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-lg sm:rounded-xl px-6 py-2 sm:px-7 sm:py-2.5 shadow-[0_4px_20px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-2">
                <h2 className="text-[#031636] dark:text-white text-lg sm:text-xl font-serif font-extrabold tracking-tight">
                  {t('vision.title1')}<span className="text-[#005bc1] dark:text-[#60a5fa]">{t('vision.titleHighlight')}</span>
                </h2>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Content wrapper with proportional gap */}
        <div className="space-y-6 sm:space-y-8 pt-1">

        {/* VISI KAMI */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#031636] dark:bg-[#60a5fa]"></span>
            <h3 className="text-[#031636] dark:text-[#60a5fa] text-[11px] font-bold uppercase tracking-widest">{t('vision.ourVision')}</h3>
          </div>
          
          <Reveal>
            <div className="bg-[#f0f2f8] dark:bg-[#0d1b33]/60 border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl sm:rounded-2xl p-4 pl-16 pr-4 sm:p-5 sm:pl-20 sm:pr-6 md:min-h-[120px] relative flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-md transition-all duration-300 hover:scale-[1.005] cursor-default">
              {/* 3D Ribbon */}
              <div className={`absolute left-3.5 sm:left-5 top-0 bottom-[-10px] w-8 sm:w-10 rounded-t-lg flex flex-col items-center pt-3 z-10 ${visionCard.tagBg} shadow-sm`}>
                <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white dark:bg-[#0a1628] flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs ${visionCard.textColor} dark:text-[#d3e4fe]`}>
                  {visionCard.num}
                </div>
                <div className={`absolute bottom-0 left-full w-0 h-0 border-t-[10px] ${visionCard.foldBorder} border-r-[10px] border-r-transparent`}></div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-1">
                <h4 className={`text-base sm:text-lg font-bold ${visionCard.textColor} dark:text-[#d3e4fe]`}>{visionCard.title}</h4>
                <p className="text-[#44474e] dark:text-[#d3e4fe]/70 text-xs sm:text-sm leading-relaxed">{visionCard.desc}</p>
              </div>

              {/* Right Icon Accent */}
              <div className="hidden md:flex flex-col items-center justify-center min-w-[60px] border-l border-[#e5e7eb] dark:border-[#1e3a5f]/60 pl-4 py-1.5">
                <span className="material-symbols-outlined text-2xl text-neutral-400 dark:text-[#60a5fa]/50 mb-0.5" style={{ fontVariationSettings: "'FILL' 0" }}>
                  {visionCard.icon}
                </span>
                <span className="material-symbols-outlined text-[#005bc1] dark:text-[#60a5fa]/40 text-xs opacity-40 leading-none">
                  keyboard_double_arrow_down
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* MISI KAMI */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#005bc1] dark:bg-[#60a5fa]"></span>
            <h3 className="text-[#005bc1] dark:text-[#60a5fa] text-[11px] font-bold uppercase tracking-widest">{t('vision.ourMission')}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-1">
            {missions.map((card, idx) => (
              <Reveal
                key={idx}
                delay={idx * 70}
              >
                <div
                  className="bg-[#f0f2f8] dark:bg-[#0d1b33]/60 border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl sm:rounded-2xl p-4 pl-16 pr-4 sm:p-5 sm:pl-20 sm:pr-6 md:min-h-[120px] relative flex flex-col justify-between gap-3 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-md transition-all duration-300 hover:scale-[1.005] cursor-default"
                >
                  {/* 3D Ribbon */}
                  <div className={`absolute left-3.5 sm:left-5 top-0 bottom-[-10px] w-8 sm:w-10 rounded-t-lg flex flex-col items-center pt-3 z-10 ${card.tagBg} shadow-sm`}>
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white dark:bg-[#0a1628] flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs ${card.textColor} dark:text-[#d3e4fe]`}>
                      {card.num}
                    </div>
                    <div className={`absolute bottom-0 left-full w-0 h-0 border-t-[10px] ${card.foldBorder} border-r-[10px] border-r-transparent`}></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-1">
                    <h4 className={`text-sm sm:text-base font-bold ${card.textColor} dark:text-[#d3e4fe]`}>{card.title}</h4>
                    <p className="text-[#44474e] dark:text-[#d3e4fe]/70 text-xs sm:text-sm leading-relaxed">{card.desc}</p>
                  </div>

                  {/* Right Icon Accent */}
                  <div className="flex items-center justify-between border-t border-[#e5e7eb] dark:border-[#1e3a5f]/60 pt-2.5 mt-1 md:border-t-0 md:pt-0 md:mt-0 md:border-l md:pl-4 md:py-1.5">
                    <span className="material-symbols-outlined text-xl text-neutral-400 dark:text-[#60a5fa]/50 md:mb-0.5" style={{ fontVariationSettings: "'FILL' 0" }}>
                      {card.icon}
                    </span>
                    <span className="material-symbols-outlined text-[#005bc1] dark:text-[#60a5fa]/40 text-xs opacity-40 leading-none hidden md:block">
                      keyboard_double_arrow_down
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
      </div>
    </section>
  )
}
