import React from 'react'

export default function Vision() {
  const visionCard = {
    title: 'VISI HIMAIF',
    desc: 'Menjadi organisasi mahasiswa yang progresif, inklusif, dan unggul dalam pengembangan kompetensi teknologi informasi berbasis pemberdayaan perempuan di tingkat internasional.',
    icon: 'stars',
    tagBg: 'bg-[#031636]',
    foldBorder: 'border-t-[#010a1b]',
    textColor: 'text-[#031636]',
    num: 'V',
  }

  const missions = [
    {
      num: '01',
      title: 'Akademik',
      desc: 'Menyelenggarakan program pelatihan intensif untuk mengasah skill teknis di bidang AI, Data Science, dan Software Dev.',
      icon: 'school',
      tagBg: 'bg-[#005bc1]',
      foldBorder: 'border-t-[#003d80]',
      textColor: 'text-[#005bc1]',
    },
    {
      num: '02',
      title: 'Kolaborasi',
      desc: 'Membangun jejaring dengan industri dan komunitas teknologi global untuk peluang karir anggota.',
      icon: 'groups',
      tagBg: 'bg-[#031636]',
      foldBorder: 'border-t-[#010a1b]',
      textColor: 'text-[#031636]',
    },
    {
      num: '03',
      title: 'Inovasi',
      desc: 'Mendorong penciptaan solusi digital kreatif yang mampu menjawab tantangan industri 4.0.',
      icon: 'lightbulb',
      tagBg: 'bg-[#4e5e82]',
      foldBorder: 'border-t-[#35415c]',
      textColor: 'text-[#4e5e82]',
    },
    {
      num: '04',
      title: 'Inklusivitas',
      desc: 'Memperkuat peran perempuan dalam ekosistem teknologi melalui lingkungan belajar yang mendukung.',
      icon: 'diversity_3',
      tagBg: 'bg-[#0091ae]',
      foldBorder: 'border-t-[#006377]',
      textColor: 'text-[#0091ae]',
    },
  ]

  return (
    <section id="vision" className="py-20 bg-[#e1e8f5] dark:bg-gradient-to-b dark:from-[#0a1628] dark:to-[#0f1729]">
      <div className="max-w-[1120px] mx-auto px-6 space-y-8">
        
        {/* Section Heading */}
        <div className="text-center">
          <div className="relative inline-block">
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 text-5xl sm:text-6xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight">
              V&M
            </span>
            <div className="relative inline-flex items-center bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-xl px-8 py-3 shadow-[0_4px_24px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-3">
              <h2 className="text-[#031636] dark:text-white text-2xl sm:text-3xl font-serif font-extrabold tracking-tight">
                Visi & <span className="text-[#005bc1] dark:text-[#60a5fa]">Misi</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Content wrapper with larger gap */}
        <div className="space-y-14 pt-4">

        {/* VISI KAMI */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#031636] dark:bg-[#60a5fa]"></span>
            <h3 className="text-[#031636] dark:text-[#60a5fa] text-xs font-bold uppercase tracking-widest">Visi Kami</h3>
          </div>
          
          <div className="bg-[#f0f2f8] dark:bg-[#0d1b33]/60 border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-2xl p-6 pl-24 pr-8 md:min-h-[150px] relative flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-lg transition-all duration-300 hover:scale-[1.01] cursor-default">
            {/* 3D Ribbon */}
            <div className={`absolute left-6 top-0 bottom-[-12px] w-12 rounded-t-lg flex flex-col items-center pt-4 z-10 ${visionCard.tagBg} shadow-md`}>
              <div className={`w-8 h-8 rounded-full bg-white dark:bg-[#0a1628] flex items-center justify-center font-bold text-base shadow-sm ${visionCard.textColor} dark:text-[#d3e4fe]`}>
                {visionCard.num}
              </div>
              <div className={`absolute bottom-0 left-full w-0 h-0 border-t-[12px] ${visionCard.foldBorder} border-r-[12px] border-r-transparent`}></div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-1">
              <h4 className={`text-lg font-bold ${visionCard.textColor} dark:text-[#d3e4fe]`}>{visionCard.title}</h4>
              <p className="text-[#44474e] dark:text-[#d3e4fe]/70 text-base leading-relaxed">{visionCard.desc}</p>
            </div>

            {/* Right Icon Accent */}
            <div className="hidden md:flex flex-col items-center justify-center min-w-[72px] border-l border-[#e5e7eb] dark:border-[#1e3a5f]/60 pl-6 py-2">
              <span className="material-symbols-outlined text-3xl text-neutral-400 dark:text-[#60a5fa]/50 mb-1" style={{ fontVariationSettings: "'FILL' 0" }}>
                {visionCard.icon}
              </span>
              <span className="material-symbols-outlined text-[#005bc1] dark:text-[#60a5fa]/40 text-sm opacity-40 leading-none">
                keyboard_double_arrow_down
              </span>
            </div>
          </div>
        </div>

        {/* MISI KAMI */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#005bc1] dark:bg-[#60a5fa]"></span>
            <h3 className="text-[#005bc1] dark:text-[#60a5fa] text-xs font-bold uppercase tracking-widest">Misi Kami</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {missions.map((card) => (
              <div
                key={card.title}
                className="bg-[#f0f2f8] dark:bg-[#0d1b33]/60 border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-2xl p-6 pl-24 pr-8 md:min-h-[150px] relative flex flex-col justify-between gap-4 shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-lg transition-all duration-300 hover:scale-[1.01] cursor-default"
              >
                {/* 3D Ribbon */}
                <div className={`absolute left-6 top-0 bottom-[-12px] w-12 rounded-t-lg flex flex-col items-center pt-4 z-10 ${card.tagBg} shadow-md`}>
                  <div className={`w-8 h-8 rounded-full bg-white dark:bg-[#0a1628] flex items-center justify-center font-bold text-base shadow-sm ${card.textColor} dark:text-[#d3e4fe]`}>
                    {card.num}
                  </div>
                  <div className={`absolute bottom-0 left-full w-0 h-0 border-t-[12px] ${card.foldBorder} border-r-[12px] border-r-transparent`}></div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-1.5">
                  <h4 className={`text-lg font-bold ${card.textColor} dark:text-[#d3e4fe]`}>{card.title}</h4>
                  <p className="text-[#44474e] dark:text-[#d3e4fe]/70 text-sm leading-relaxed">{card.desc}</p>
                </div>

                {/* Right Icon Accent */}
                <div className="flex items-center justify-between border-t border-[#e5e7eb] dark:border-[#1e3a5f]/60 pt-3 mt-2 md:border-t-0 md:pt-0 md:mt-0 md:border-l md:pl-6 md:py-2">
                  <span className="material-symbols-outlined text-2xl text-neutral-400 dark:text-[#60a5fa]/50 md:mb-1" style={{ fontVariationSettings: "'FILL' 0" }}>
                    {card.icon}
                  </span>
                  <span className="material-symbols-outlined text-[#005bc1] dark:text-[#60a5fa]/40 text-sm opacity-40 leading-none hidden md:block">
                    keyboard_double_arrow_down
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      </div>
    </section>
  )
}
