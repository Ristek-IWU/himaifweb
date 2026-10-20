import React from 'react'
import { useLanguage } from '../../context/LanguageContext'
import ryanImg from '../../assets/ryan.webp'
import arbiImg from '../../assets/arbi.webp'
import reikiImg from '../../assets/reiki.webp'
import tiaImg from '../../assets/tia.webp'
import dendiImg from '../../assets/dendi.webp'

export default function Divisions() {
  const { t } = useLanguage()

  // ====================================
  // DATA DIVISI — Edit nama langsung di sini
  // ====================================
  const divisions = [
    {
      name: t('struktur.risetinTag'),
      tag: t('struktur.risetinTag'),
      tagClass: 'bg-white/20 text-white/90',
      head: 'Ryan Rahmabakti',
      role: t('struktur.divisionHead'),
      headImage: ryanImg,
      members: ['Ervan Rohiman', 'Ririn Rengganis']
    },
    {
      name: t('struktur.eksternalTag'),
      tag: t('struktur.eksternalTag'),
      tagClass: 'bg-white/20 text-white/90',
      head: 'Arbi Maulidan Yusuf',
      role: t('struktur.divisionHead'),
      headImage: arbiImg,
      members: ['Gulamin Halim', 'Arifah Roisatul Haq', 'Kamal Fikri M']
    },
    {
      name: t('struktur.orbisTag'),
      tag: t('struktur.orbisTag'),
      tagClass: 'bg-white/20 text-white/90',
      head: 'M Reiki A Z',
      role: t('struktur.divisionHead'),
      headImage: reikiImg,
      members: [
        'Dita Ramadhanti',
        'Denden Sopian Arip',
        'Rafly Prabu Ananta',
        'Sri Wahyuni',
        'Muhamad Firdaus',
        'Ikbal Abidin',
        'Zamzam Al Mubaroq'
      ]
    },
    {
      name: t('struktur.edubakatTag'),
      tag: t('struktur.edubakatTag'),
      tagClass: 'bg-white/20 text-white/90',
      head: 'Tia Setiawan',
      role: t('struktur.divisionHead'),
      headImage: tiaImg,
      members: ['Muhammad Nursyam Bukhori Adin', 'Nizar Gislami', 'Fajli Andika']
    },
    {
      name: t('struktur.pddTag'),
      tag: t('struktur.pddTag'),
      tagClass: 'bg-white/20 text-white/90',
      head: 'Dendi Fathur R S',
      role: t('struktur.divisionHead'),
      headImage: dendiImg,
      members: [
        'Ravina Maryam',
        'Melsa Bunga Juliana',
        'Zahrah Aulia Naadhirah',
        'Reyhan Handika',
        'Revan Muhammad S'
      ]
    }
  ]

  return (
    <section className="flex flex-col items-center w-full">
      {/* Title with Home Design Theme */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="relative inline-block">
          <span className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight uppercase">
            {t('struktur.divisionsWatermark')}
          </span>
          <div className="relative inline-flex items-center bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-lg sm:rounded-xl px-6 py-2 sm:px-7 sm:py-2.5 shadow-[0_4px_20px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-2">
            <h2 className="text-[#005bc1] dark:text-[#60a5fa] text-lg sm:text-xl font-serif font-extrabold tracking-tight">
              {t('struktur.divisionsTitleHighlight')}
            </h2>
          </div>
        </div>
      </div>

      {/* Cards container with top bridge */}
      <div className="relative w-full max-w-[1120px] flex flex-col items-center">
        {/* Horizontal Bridge across 3 cards (Desktop/Large) */}
        <div className="hidden lg:block absolute top-0 left-[16.6%] right-[16.6%] h-0.5 border-t-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30 -z-10"></div>
        
        {/* Vertical dropdown connectors to the 3 cards */}
        <div className="hidden lg:grid grid-cols-3 w-full h-6 -z-10">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex justify-center">
              <div className="w-0.5 h-full border-l-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30"></div>
            </div>
          ))}
        </div>

        {/* Mobile vertical line connector */}
        <div className="block lg:hidden absolute top-0 bottom-12 w-0.5 border-l-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30 -z-10"></div>

        {/* Card Grid layout — 3 columns for breathing room */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full z-10 px-4 sm:px-0">
          {divisions.map((div) => (
            <div
              key={div.name}
              className="group bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-md transition-all duration-300 hover:scale-[1.005] cursor-default flex flex-col justify-between"
            >
              {/* Top Ribbon Bar — Blue for Divisions */}
              <div className="relative h-8 sm:h-9 bg-[#005bc1] flex items-center justify-between px-3.5">
                <div className="flex items-center gap-1.5">
                  <span className={`text-[8px] font-extrabold uppercase tracking-widest ${div.tagClass}`}>
                    {div.tag}
                  </span>
                </div>
                {/* 3D Fold */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[8px] border-t-[#003d80] border-l-[8px] border-l-transparent"></div>
              </div>

              {/* Card Body — Clean Layout */}
              <div className="p-4 sm:p-4.5 flex flex-col flex-1 justify-between">
                <div>
                  {/* Division Head — Clean, no box */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-lg sm:rounded-xl border border-[#e5e7eb] dark:border-[#1e3a5f] overflow-hidden bg-white dark:bg-[#1a2b4c]/30 shrink-0 flex items-center justify-center shadow-xs">
                      {div.headImage ? (
                        <img
                          alt={div.head}
                          src={div.headImage}
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
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-bold text-[#031636] dark:text-[#d3e4fe] leading-snug">
                        {div.head}
                      </p>
                      <p className="text-[11px] sm:text-xs font-semibold text-black dark:text-white/80 mt-0.5">
                        {div.role}
                      </p>
                    </div>
                  </div>

                  {/* Divider Line between Kadiv and Anggota */}
                  <div className="border-t border-[#e5e7eb] dark:border-[#1e3a5f]/45 my-3"></div>
                </div>

                {/* Member Section — Clean layout without awkward cuts */}
                <div className="flex-1 flex flex-col justify-start">
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#44474e]/70 dark:text-[#d3e4fe]/60 uppercase tracking-wider mb-2">
                    Anggota Divisi
                  </span>

                  {/* Member Grid — 2 Columns for Orbis (6 members), 1 Column for others so long names fit comfortably */}
                  <div className={`grid ${div.members.length > 3 ? 'grid-cols-2 gap-x-2 gap-y-1.5' : 'grid-cols-1 gap-y-1.5'}`}>
                    {div.members.map((member, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-1.5 min-w-0"
                        title={member}
                      >
                        <span className="w-1.5 h-1.5 bg-[#0091ae] dark:bg-[#60a5fa] rounded-full shrink-0 mt-1"></span>
                        <span className="text-[11px] sm:text-xs text-[#334155] dark:text-[#d3e4fe]/85 font-medium leading-snug break-words">
                          {member}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Decorative text card — fills empty grid slot (Senada dengan card divisi) */}
          <div className="hidden lg:flex flex-col items-center justify-center p-5 bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-md transition-all duration-300 hover:scale-[1.005] cursor-default relative select-none min-h-[240px]">
            {/* Diagonal Corner Ribbon (Sudut Siku Kiri Atas — Hanya Tahun) */}
            <div className="absolute top-0 left-0 w-24 h-24 overflow-hidden pointer-events-none z-10">
              <div className="absolute -left-9 top-3.5 w-32 -rotate-45 bg-[#005bc1] text-white text-center py-0.5 shadow-xs border-y border-white/20">
                <span className="text-[8px] font-extrabold uppercase tracking-widest block">
                  {t('struktur.watermark') || '2026/2027'}
                </span>
              </div>
            </div>

            {/* Watermark — Dancing Script */}
            <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xl font-['Dancing_Script',_cursive] font-bold text-[#031636]/[0.1] dark:text-[#60a5fa]/[0.15] whitespace-nowrap pointer-events-none text-center">
              Internasional<br/>Women University
            </span>
            {/* Main text — Dancing Script */}
            <div className="relative flex flex-col items-center">
              <p className="text-[#031636] dark:text-white font-['Dancing_Script',_cursive] font-bold text-lg leading-tight">
                HIMAIF <span className="text-[#005bc1] dark:text-[#60a5fa]">SYNAPSE</span>
              </p>
              <div className="flex items-center gap-1.5 mt-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#005bc1]/40 dark:bg-[#60a5fa]/30"></span>
                <span className="text-[8px] font-bold text-[#005bc1]/60 dark:text-[#60a5fa]/50 uppercase tracking-[0.2em]">{t('struktur.innovation')}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0091ae]/40 dark:bg-[#0091ae]/30"></span>
                <span className="text-[8px] font-bold text-[#0091ae]/60 dark:text-[#0091ae]/50 uppercase tracking-[0.2em]">{t('struktur.collaboration')}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#005bc1]/40 dark:bg-[#60a5fa]/30"></span>
                <span className="text-[8px] font-bold text-[#005bc1]/60 dark:text-[#60a5fa]/50 uppercase tracking-[0.2em]">{t('struktur.technology')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
