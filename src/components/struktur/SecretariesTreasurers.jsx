import React from 'react'
import { useLanguage } from '../../context/LanguageContext'
import sarahImg from '../../assets/sarah.webp'
import nazrilImg from '../../assets/nazril.webp'
import audiaImg from '../../assets/audia.webp'
import rismaImg from '../../assets/risma.webp'

export default function SecretariesTreasurers() {
  const { t } = useLanguage()

  // ====================================
  // DATA BPH (Sekretaris & Bendahara) — Edit langsung di sini
  // ====================================
  const bphStaff = [
    {
      name: 'Siti Audia',
      role: t('struktur.secretary1') || 'Sekretaris 1',
      icon: 'edit_note',
      image: audiaImg
    },
    {
      name: 'Risma Nuraeni',
      role: t('struktur.secretary2') || 'Sekretaris 2',
      icon: 'edit_note',
      image: rismaImg
    },
    {
      name: 'Nazril Azam Saepudin',
      role: t('struktur.treasurerGeneral'),
      icon: 'savings',
      image: nazrilImg
    },
    {
      name: 'Sarah',
      role: t('struktur.treasurer1'),
      icon: 'account_balance_wallet',
      image: sarahImg
    }
  ]

  return (
    <section className="flex flex-col items-center w-full">
      <div className="relative w-full max-w-[1000px] flex flex-col items-center">
        {/* Horizontal Bridge */}
        <div className="hidden md:block absolute top-0 left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30 -z-10"></div>
        {/* Vertical dropdown connectors */}
        <div className="hidden md:grid grid-cols-4 w-full h-6 -z-10">
          <div className="flex justify-center"><div className="w-0.5 h-full border-l-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30"></div></div>
          <div className="flex justify-center"><div className="w-0.5 h-full border-l-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30"></div></div>
          <div className="flex justify-center"><div className="w-0.5 h-full border-l-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30"></div></div>
          <div className="flex justify-center"><div className="w-0.5 h-full border-l-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30"></div></div>
        </div>

        {/* Mobile vertical line connector */}
        <div className="block md:hidden absolute top-0 bottom-12 w-0.5 border-l-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30 -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full z-10 px-4 sm:px-0">
          {bphStaff.map((person) => (
            <div
              key={person.name}
              className="group relative bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl sm:rounded-2xl pl-14 pr-4 sm:pl-16 sm:pr-5 py-4 sm:py-5 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-md transition-all duration-300 hover:scale-[1.005] cursor-default"
            >
              {/* Left 3D Ribbon — Gray for Sekre & Bendahara */}
              <div className="absolute left-2.5 sm:left-3 top-0 bottom-[-8px] w-7 sm:w-8 rounded-t-lg bg-[#6b7280] flex flex-col items-center pt-4 z-10 shadow-xs">
                <span className="text-[7px] sm:text-[8px] font-extrabold text-white/70 uppercase tracking-[0.15em] whitespace-nowrap"
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                  {person.role}
                </span>
                {/* 3D Fold */}
                <div className="absolute bottom-0 left-full w-0 h-0 border-t-[8px] border-t-[#4b5563] border-r-[8px] border-r-transparent"></div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 sm:w-22 sm:h-22 overflow-hidden mb-2.5 border-2 border-[#e5e7eb] dark:border-[#1e3a5f]/60 bg-white dark:bg-[#1a2b4c]/30 rounded-xl sm:rounded-2xl shadow-inner flex items-center justify-center">
                  {person.image ? (
                    <img
                      src={person.image}
                      alt={person.role}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="material-symbols-outlined text-[#44474e]/30 dark:text-[#d3e4fe]/20 text-2xl">
                      person
                    </span>
                  )}
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#031636] dark:text-[#d3e4fe] leading-snug px-1">
                  {person.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="h-10 sm:h-12 w-0.5 border-l-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30 mt-6"></div>
      </div>
    </section>
  )
}
