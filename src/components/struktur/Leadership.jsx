import React from 'react'
import { useLanguage } from '../../context/LanguageContext'
import oktaImg from '../../assets/okta.webp'
import wandiImg from '../../assets/wandi.webp'
import sinsinImg from '../../assets/sinsin.webp'

export default function Leadership() {
  const { t } = useLanguage()

  // ====================================
  // DATA BPH (Ketua, Wakil, Sekjen) — Edit langsung di sini
  // ====================================
  const coreLeaders = [
    {
      role: t('struktur.chairman'),
      name: 'Okta Ramdani',
      image: oktaImg,
      icon: 'shield_person',
    },
    {
      role: t('struktur.viceChairman'),
      name: 'Muhamad Wandi H',
      image: wandiImg,
      icon: 'verified_user',
    }
  ]

  const secGen = {
    role: t('struktur.secGen'),
    name: 'Sinsin Makiyah M',
    image: sinsinImg,
    icon: 'assignment_ind',
  }

  const renderProfileCard = (person, size = 'lg') => {
    const imgSize = size === 'lg' ? 'w-28 h-28 sm:w-32 sm:h-32' : 'w-24 h-24'
    const nameSize = size === 'lg' ? 'text-sm sm:text-base' : 'text-sm'
    const cardWidth = size === 'lg' ? 'w-full sm:w-72 md:w-76' : 'w-full sm:w-68'

    return (
      <div className={`group relative bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl sm:rounded-2xl pl-14 pr-4 sm:pl-16 sm:pr-5 py-5 ${cardWidth} shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-md transition-all duration-300 hover:scale-[1.005] cursor-default z-10`}>
        {/* Left 3D Ribbon — Teal for Core Leaders */}
        <div className="absolute left-3 sm:left-4 top-0 bottom-[-10px] w-8 sm:w-9 rounded-t-lg bg-[#0091ae] dark:bg-[#006377] flex flex-col items-center pt-5 z-10 shadow-sm">
          {/* Vertical Role Text */}
          <span className="text-[8px] sm:text-[9px] font-extrabold text-white/80 uppercase tracking-[0.18em] whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            {person.role}
          </span>
          {/* 3D Fold */}
          <div className="absolute bottom-0 left-full w-0 h-0 border-t-[10px] border-t-[#006377] dark:border-t-[#006377] border-r-[10px] border-r-transparent"></div>
        </div>

        {/* Card Body */}
        <div className="flex flex-col items-center text-center">
          <div className={`relative ${imgSize} overflow-hidden mb-2.5 border-2 border-[#e5e7eb] dark:border-[#1e3a5f]/60 bg-white dark:bg-[#1a2b4c]/30 rounded-xl sm:rounded-2xl shadow-inner flex items-center justify-center`}>
            {person.image ? (
              <img
                src={person.image}
                alt={`${person.role} Profile`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <span className="material-symbols-outlined text-[#44474e]/30 dark:text-[#d3e4fe]/20 text-3xl">
                person
              </span>
            )}
          </div>
          <h3 className={`${nameSize} font-bold text-[#031636] dark:text-[#d3e4fe] leading-snug`}>
            {person.name}
          </h3>
        </div>
      </div>
    )
  }

  return (
    <section className="flex flex-col items-center w-full">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="relative inline-block">
          <span className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight uppercase">
            {t('struktur.bphWatermark')}
          </span>
          <div className="relative inline-flex items-center bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-lg sm:rounded-xl px-6 py-2 sm:px-7 sm:py-2.5 shadow-[0_4px_20px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-2">
            <h2 className="text-[#031636] dark:text-white text-lg sm:text-xl font-serif font-extrabold tracking-tight">
              {t('struktur.bphTitle1')}<span className="text-[#005bc1] dark:text-[#60a5fa]">{t('struktur.bphTitleHighlight')}</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center w-full">
        {/* Row 1: Ketua & Wakil */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 lg:gap-16 relative w-full justify-items-center px-4 sm:px-0">
          {coreLeaders.map((leader) => (
            <React.Fragment key={leader.name}>
              {renderProfileCard(leader, 'lg')}
            </React.Fragment>
          ))}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30 -translate-y-1/2 z-0"></div>
          
          {/* Mobile connector between Ketua and Wakil */}
          <div className="block md:hidden absolute top-[calc(50%-20px)] left-1/2 -translate-x-1/2 h-10 w-0.5 border-l-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30 z-0"></div>
        </div>

        <div className="h-10 sm:h-12 w-0.5 border-l-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30 my-1"></div>

        {/* Row 2: Sekjen */}
        <div className="w-full flex justify-center px-4 sm:px-0">
          {renderProfileCard(secGen, 'lg')}
        </div>

        <div className="h-10 sm:h-12 w-0.5 border-l-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30 mt-1"></div>
      </div>
    </section>
  )
}
