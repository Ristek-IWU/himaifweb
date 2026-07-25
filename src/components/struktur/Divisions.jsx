import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

// Compact inline social icons for member rows
const MiniSocials = ({ socials = {}, className = '' }) => (
  <div className={`flex items-center gap-1 shrink-0 ${className}`}>
    <a href={socials.instagram || '#'} aria-label="Instagram" className="text-[#e4405f]/70 hover:text-[#e4405f] transition-colors duration-150">
      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    </a>
    <a href={socials.linkedin || '#'} aria-label="LinkedIn" className="text-[#0a66c2]/70 hover:text-[#0a66c2] transition-colors duration-150">
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    </a>
    <a href={socials.github || '#'} aria-label="GitHub" className="text-[#333]/70 dark:text-[#e2e8f0]/50 hover:text-[#333] dark:hover:text-[#e2e8f0] transition-colors duration-150">
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    </a>
  </div>
)

// Kadiv social icons
const KadivSocials = ({ socials = {} }) => (
  <div className="flex items-center gap-1.5 mt-1">
    <a href={socials.instagram || '#'} aria-label="Instagram" className="text-[#e4405f]/70 hover:text-[#e4405f] transition-colors duration-150">
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    </a>
    <a href={socials.linkedin || '#'} aria-label="LinkedIn" className="text-[#0a66c2]/70 hover:text-[#0a66c2] transition-colors duration-150">
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    </a>
    <a href={socials.github || '#'} aria-label="GitHub" className="text-[#333]/70 dark:text-[#e2e8f0]/50 hover:text-[#333] dark:hover:text-[#e2e8f0] transition-colors duration-150">
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    </a>
  </div>
)

export default function Divisions() {
  const { t } = useLanguage()

  // Load profiles and members from localStorage
  const savedProfiles = typeof window !== 'undefined' ? localStorage.getItem('admin_hima_profiles') : null
  const profiles = savedProfiles ? JSON.parse(savedProfiles) : null

  const savedMembers = typeof window !== 'undefined' ? localStorage.getItem('admin_division_members') : null
  const divisionMembers = savedMembers ? JSON.parse(savedMembers) : {
    risetin: ['Ervan Rohiman'],
    eksternal: ['King Kamal'],
    orbis: ['Dita Ramdhanti', 'Mya'],
    edubakat: ['Fajli Andika', 'Evan Ezar', 'Vio'],
    pdd: ['Revan S', 'Reyhan H']
  }

  const filterImage = (url) => {
    if (!url || url.includes('unsplash.com')) return ''
    return url
  }

  const savedMemberSocials = typeof window !== 'undefined' ? localStorage.getItem('admin_division_member_socials') : null
  const divisionMemberSocials = savedMemberSocials ? JSON.parse(savedMemberSocials) : {}

  const divisions = [
    {
      name: t('struktur.risetinTag'),
      icon: 'science',
      tag: t('struktur.risetinTag'),
      tagClass: 'bg-white/20 text-white/90',
      head: profiles?.risetin?.name || 'Ryan Rahmabakti',
      role: t('struktur.risetinRole'),
      headImage: filterImage(profiles?.risetin?.image),
      socials: profiles?.risetin?.socials || {},
      members: divisionMembers.risetin || ['Ervan Rohiman'],
      memberSocials: divisionMemberSocials.risetin || {}
    },
    {
      name: t('struktur.eksternalTag'),
      icon: 'public',
      tag: t('struktur.eksternalTag'),
      tagClass: 'bg-white/20 text-white/90',
      head: profiles?.eksternal?.name || 'Anomali MU',
      role: t('struktur.eksternalRole'),
      headImage: filterImage(profiles?.eksternal?.image),
      socials: profiles?.eksternal?.socials || {},
      members: divisionMembers.eksternal || ['King Kamal'],
      memberSocials: divisionMemberSocials.eksternal || {}
    },
    {
      name: t('struktur.orbisTag'),
      icon: 'corporate_fare',
      tag: t('struktur.orbisTag'),
      tagClass: 'bg-white/20 text-white/90',
      head: profiles?.orbis?.name || 'M Reiki A',
      role: t('struktur.orbisRole'),
      headImage: filterImage(profiles?.orbis?.image),
      socials: profiles?.orbis?.socials || {},
      members: divisionMembers.orbis || ['Dita Ramdhanti', 'Mya'],
      memberSocials: divisionMemberSocials.orbis || {}
    },
    {
      name: t('struktur.edubakatTag'),
      icon: 'sports_esports',
      tag: t('struktur.edubakatTag'),
      tagClass: 'bg-white/20 text-white/90',
      head: profiles?.edubakat?.name || 'Tia Setiawan',
      role: t('struktur.edubakatRole'),
      headImage: filterImage(profiles?.edubakat?.image),
      socials: profiles?.edubakat?.socials || {},
      members: divisionMembers.edubakat || ['Fajli Andika', 'Evan Ezar', 'Vio'],
      memberSocials: divisionMemberSocials.edubakat || {}
    },
    {
      name: t('struktur.pddTag'),
      icon: 'campaign',
      tag: t('struktur.pddTag'),
      tagClass: 'bg-white/20 text-white/90',
      head: profiles?.pdd?.name || 'Dendi F RS',
      role: t('struktur.pddRole'),
      headImage: filterImage(profiles?.pdd?.image),
      socials: profiles?.pdd?.socials || {},
      members: divisionMembers.pdd || ['Revan S', 'Reyhan H'],
      memberSocials: divisionMemberSocials.pdd || {}
    }
  ]

  return (
    <section className="flex flex-col items-center w-full">
      {/* Title with Home Design Theme */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 text-5xl sm:text-6xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight uppercase">
            {t('struktur.divisionsWatermark')}
          </span>
          <div className="relative inline-flex items-center bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-xl px-8 py-3 shadow-[0_4px_24px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-3">
            <h2 className="text-[#031636] dark:text-white text-xl sm:text-2xl font-serif font-extrabold tracking-tight">
              {t('struktur.divisionsTitle1')}<span className="text-[#005bc1] dark:text-[#60a5fa]">{t('struktur.divisionsTitleHighlight')}</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Cards container with top bridge */}
      <div className="relative w-full max-w-[1280px] flex flex-col items-center">
        {/* Horizontal Bridge across 3 cards (Desktop/Large) */}
        <div className="hidden lg:block absolute top-0 left-[16.6%] right-[16.6%] h-0.5 border-t-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30 -z-10"></div>
        
        {/* Vertical dropdown connectors to the 3 cards */}
        <div className="hidden lg:grid grid-cols-3 w-full h-8 -z-10">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex justify-center">
              <div className="w-0.5 h-full border-l-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30"></div>
            </div>
          ))}
        </div>

        {/* Mobile vertical line connector */}
        <div className="block lg:hidden absolute top-0 bottom-16 w-0.5 border-l-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30 -z-10"></div>

        {/* Card Grid layout — 3 columns for breathing room */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full z-10 px-4 sm:px-0">
          {divisions.map((div) => (
            <div
              key={div.name}
              className="group bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-2xl overflow-hidden shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-lg transition-all duration-300 hover:scale-[1.01] cursor-default flex flex-col"
            >
              {/* Top Ribbon Bar — Blue for Divisions */}
              <div className="relative h-10 bg-[#005bc1] flex items-center justify-between px-4">
                <div className="flex items-center gap-1.5">
                  <span className={`text-[8px] font-extrabold uppercase tracking-widest ${div.tagClass}`}>
                    {div.tag}
                  </span>
                </div>
                {/* 3D Fold */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[8px] border-t-[#003d80] border-l-[8px] border-l-transparent"></div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1">
                {/* Division Head (At the top of the body card) */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full border border-[#e5e7eb] dark:border-[#1e3a5f] overflow-hidden bg-white dark:bg-[#1a2b4c]/30 shrink-0 flex items-center justify-center">
                    {div.headImage ? (
                      <img
                        alt={div.head}
                        src={div.headImage}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="material-symbols-outlined text-[#44474e]/30 dark:text-[#d3e4fe]/20 text-lg">
                        person
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#031636] dark:text-[#d3e4fe] truncate">
                      {div.head}
                    </p>
                    <p className="text-[10px] text-[#44474e] dark:text-[#d3e4fe]/60 truncate">
                      {div.role}
                    </p>
                    <KadivSocials socials={div.socials} />
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#e5e7eb] dark:border-[#1e3a5f]/45 pt-4 mb-3"></div>

                {/* Division Members (below the divider) */}
                <div className="space-y-3">
                  {div.members.map((member, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="w-1 h-1 bg-[#0091ae] dark:bg-[#60a5fa] rounded-full shrink-0"></span>
                        <span className="text-xs text-[#44474e] dark:text-[#d3e4fe]/75 truncate">{member}</span>
                      </div>
                      <MiniSocials socials={div.memberSocials?.[index]} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Decorative illustration card — fills empty grid slot */}
          {/* Decorative text card — fills empty grid slot */}
          <div className="hidden lg:flex flex-col items-center justify-center min-h-[280px] relative select-none transform -rotate-1">
            {/* Watermark — Dancing Script */}
            <span className="absolute top-6 left-1/2 -translate-x-1/2 text-[26px] leading-snug font-['Dancing_Script',_cursive] font-bold text-[#031636]/[0.1] dark:text-[#60a5fa]/[0.15] whitespace-nowrap pointer-events-none text-center">
              Internasional<br/>Women University
            </span>
            {/* Main text — Dancing Script */}
            <div className="relative flex flex-col items-center">
              <p className="text-[#031636] dark:text-white font-['Dancing_Script',_cursive] font-bold text-xl leading-tight">
                HIMAIF <span className="text-[#005bc1] dark:text-[#60a5fa]">SYNAPSE</span>
              </p>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#005bc1]/40 dark:bg-[#60a5fa]/30"></span>
                <span className="text-[9px] font-bold text-[#005bc1]/40 dark:text-[#60a5fa]/30 uppercase tracking-[0.2em]">{t('struktur.innovation')}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0091ae]/40 dark:bg-[#0091ae]/30"></span>
                <span className="text-[9px] font-bold text-[#0091ae]/40 dark:text-[#0091ae]/30 uppercase tracking-[0.2em]">{t('struktur.collaboration')}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#005bc1]/40 dark:bg-[#60a5fa]/30"></span>
                <span className="text-[9px] font-bold text-[#005bc1]/40 dark:text-[#60a5fa]/30 uppercase tracking-[0.2em]">{t('struktur.technology')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
