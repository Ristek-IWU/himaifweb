import React from 'react'

// Reusable social media SVG icons
const SocialIcons = {
  instagram: (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  linkedin: (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  github: (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  )
}

const socialLinks = [
  { key: 'instagram', icon: SocialIcons.instagram, href: '#', textColor: 'text-[#e4405f]', bgColor: 'bg-[#e4405f]/10 dark:bg-[#e4405f]/15', borderColor: 'border-[#e4405f]/30', hoverBg: 'hover:bg-[#e4405f] hover:text-white' },
  { key: 'linkedin', icon: SocialIcons.linkedin, href: '#', textColor: 'text-[#0a66c2]', bgColor: 'bg-[#0a66c2]/10 dark:bg-[#0a66c2]/15', borderColor: 'border-[#0a66c2]/30', hoverBg: 'hover:bg-[#0a66c2] hover:text-white' },
  { key: 'github', icon: SocialIcons.github, href: '#', textColor: 'text-[#333] dark:text-[#e2e8f0]', bgColor: 'bg-[#333]/10 dark:bg-[#e2e8f0]/10', borderColor: 'border-[#333]/20 dark:border-[#e2e8f0]/20', hoverBg: 'hover:bg-[#333] dark:hover:bg-[#e2e8f0] hover:text-white dark:hover:text-[#333]' }
]

export default function Leadership() {
  const coreLeaders = [
    {
      role: 'Ketua Himpunan',
      name: 'Okta Ramdhan',
      image: '',
      icon: 'shield_person',
    },
    {
      role: 'Wakil Ketua Himpunan',
      name: 'Wandi H',
      image: '',
      icon: 'verified_user',
    }
  ]

  const secGen = {
    role: 'Sekretaris Jenderal',
    name: 'Sinsin M',
    image: '',
    icon: 'assignment_ind',
  }

  const renderProfileCard = (person, size = 'lg') => {
    const imgSize = size === 'lg' ? 'w-32 h-32 sm:w-36 sm:h-36' : 'w-28 h-28'
    const nameSize = size === 'lg' ? 'text-base sm:text-lg' : 'text-base'
    const cardWidth = size === 'lg' ? 'w-full sm:w-80' : 'w-full sm:w-72'

    return (
      <div className={`group relative bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-2xl pl-16 pr-4 sm:pl-20 sm:pr-6 py-6 ${cardWidth} shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-lg transition-all duration-300 hover:scale-[1.01] cursor-default z-10`}>
        {/* Left 3D Ribbon — Teal for Core Leaders */}
        <div className="absolute left-3.5 sm:left-5 top-0 bottom-[-12px] w-10 sm:w-12 rounded-t-lg bg-[#0091ae] dark:bg-[#006377] flex flex-col items-center pt-6 z-10 shadow-md">
          {/* Vertical Role Text */}
          <span className="text-[9px] font-extrabold text-white/70 uppercase tracking-[0.2em] whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            {person.role}
          </span>
          {/* 3D Fold */}
          <div className="absolute bottom-0 left-full w-0 h-0 border-t-[12px] border-t-[#006377] dark:border-t-[#006377] border-r-[12px] border-r-transparent"></div>
        </div>

        {/* Card Body */}
        <div className="flex flex-col items-center text-center">
          <div className={`relative ${imgSize} overflow-hidden mb-4 border-2 border-[#e5e7eb] dark:border-[#1e3a5f]/60 bg-white dark:bg-[#1a2b4c]/30 rounded-2xl shadow-inner flex items-center justify-center`}>
            {person.image ? (
              <img
                src={person.image}
                alt={`${person.role} Profile`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <span className="material-symbols-outlined text-[#44474e]/30 dark:text-[#d3e4fe]/20 text-4xl">
                person
              </span>
            )}
          </div>
          <h3 className={`${nameSize} font-bold text-[#031636] dark:text-[#d3e4fe] mb-3`}>
            {person.name}
          </h3>
          {/* Social Media Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.key}
                href={social.href}
                aria-label={social.key}
                className={`w-9 h-9 rounded-full flex items-center justify-center ${social.bgColor} border ${social.borderColor} ${social.textColor} ${social.hoverBg} hover:scale-110 transition-all duration-200`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="flex flex-col items-center w-full">
      {/* Title */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 text-5xl sm:text-6xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight uppercase">
            BPH
          </span>
          <div className="relative inline-flex items-center bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-xl px-8 py-3 shadow-[0_4px_24px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-3">
            <h2 className="text-[#031636] dark:text-white text-xl sm:text-2xl font-serif font-extrabold tracking-tight">
              Badan Pengurus <span className="text-[#005bc1] dark:text-[#60a5fa]">Harian</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center w-full">
        {/* Row 1: Ketua & Wakil */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 relative w-full justify-items-center px-4 sm:px-0">
          {coreLeaders.map((leader) => (
            <React.Fragment key={leader.name}>
              {renderProfileCard(leader, 'lg')}
            </React.Fragment>
          ))}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30 -translate-y-1/2 z-0"></div>
          
          {/* Mobile connector between Ketua and Wakil */}
          <div className="block md:hidden absolute top-[calc(50%-24px)] left-1/2 -translate-x-1/2 h-12 w-0.5 border-l-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30 z-0"></div>
        </div>

        <div className="h-16 w-0.5 border-l-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30 my-2"></div>

        {/* Row 2: Sekjen */}
        <div className="w-full flex justify-center px-4 sm:px-0">
          {renderProfileCard(secGen, 'lg')}
        </div>

        <div className="h-16 w-0.5 border-l-2 border-dashed border-[#005bc1]/35 dark:border-[#60a5fa]/30 mt-2"></div>
      </div>
    </section>
  )
}
