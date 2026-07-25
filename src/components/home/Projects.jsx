import React from 'react'
import Reveal from '../Reveal'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../locales/translations'

export default function Projects() {
  const { t } = useLanguage()

  // Load featured/trending projects from localStorage, otherwise fall back to default ones
  const [projectList, setProjectList] = React.useState([])

  React.useEffect(() => {
    const savedFeatured = localStorage.getItem('admin_featured_projects')
    const projectListFromI18n = t('projects.list') || []

    const getTranslatedProject = (proj) => {
      const idDefaults = translations.ID.projects.list;
      const defaultIndex = idDefaults.findIndex(
        dp => dp.title === proj.title || dp.title.split(' - ')[0] === proj.title.split(' - ')[0]
      );
      if (defaultIndex !== -1 && projectListFromI18n[defaultIndex]) {
        return {
          ...proj,
          title: projectListFromI18n[defaultIndex].title,
          category: projectListFromI18n[defaultIndex].category,
          description: projectListFromI18n[defaultIndex].description,
        };
      }
      return proj;
    }

    if (savedFeatured) {
      const parsed = JSON.parse(savedFeatured)
      if (parsed && parsed.length > 0) {
        setProjectList(parsed.map(getTranslatedProject))
        return
      }
    }

    // Default fallback
    setProjectList([
      {
        title: projectListFromI18n[0]?.title || "VeriChain - Ijazah Digital",
        category: projectListFromI18n[0]?.category || "Blockchain Technology",
        description: projectListFromI18n[0]?.description || "Sistem otentikasi dokumen akademis berbasis blockchain.",
        image: "",
      },
      {
        title: projectListFromI18n[1]?.title || "Portal Jamsos ZKP",
        category: projectListFromI18n[1]?.category || "Cryptography & Zero-Knowledge",
        description: projectListFromI18n[1]?.description || "Platform jaminan sosial berbasis bukti tanpa pengungkapan (ZKP).",
        image: "",
      },
      {
        title: projectListFromI18n[2]?.title || "Bobotoh Pay",
        category: projectListFromI18n[2]?.category || "Fintech & Web3 Wallet",
        description: projectListFromI18n[2]?.description || "Dompet digital terintegrasi QRIS.",
        image: "",
      }
    ])
  }, [t])

  // Duplicate project list to ensure the track width is wide enough to cover any screen width without gaps
  const getTrackProjects = (list) => {
    if (!list || list.length === 0) return [];
    let repeated = [...list];
    while (repeated.length < 10) {
      repeated = [...repeated, ...list];
    }
    return repeated;
  };

  const trackProjects = getTrackProjects(projectList);

  return (
    <section className="py-20 bg-[#e1e8f5] dark:bg-gradient-to-b dark:from-[#0a1628] dark:to-[#040d1a] relative overflow-hidden">
      {/* Background Decorative Line Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 dark:hidden"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(0,91,193,0.06) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(0,91,193,0.06) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '48px 48px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-40 hidden dark:block"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(96,165,250,0.04) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(96,165,250,0.04) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-[1120px] mx-auto px-6 mb-12 relative z-10">
        {/* Section Heading */}
        <Reveal>
          <div className="text-center">
            <div className="relative inline-block">
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 text-5xl sm:text-6xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight">
                {t('projects.watermark')}
              </span>
              <div className="relative inline-flex items-center bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-xl px-8 py-3 shadow-[0_4px_24px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-3">
                <h2 className="text-[#031636] dark:text-white text-2xl sm:text-3xl font-serif font-extrabold tracking-tight">
                  {t('projects.title1')}<span className="text-[#005bc1] dark:text-[#60a5fa]">{t('projects.titleHighlight')}</span>
                </h2>
              </div>
            </div>
            <p className="text-[#44474e] dark:text-[#d3e4fe]/70 text-base max-w-xl mx-auto mt-6">
              {t('projects.subtitle')}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Carousell / Marquee Showcase */}
      <Reveal delay={150} className="w-full overflow-hidden relative py-4">
        {/* Parent wrapper yang bergerak sebagai satu kesatuan kereta api */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          
          {/* Track 1 (Gerbong pertama) */}
          <div className="flex gap-6 pr-6 shrink-0">
            {trackProjects.map((project, idx) => (
              <div 
                key={`t1-${idx}`} 
                className="w-[295px] sm:w-[370px] shrink-0 group relative overflow-hidden rounded-2xl bg-[#031636] aspect-[4/3] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center justify-center"
              >
                {/* Gambar Proyek */}
                {project.image ? (
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500 ease-out"
                    src={project.image}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#071938] via-[#031636] to-[#0a1d40] relative overflow-hidden">
                    {/* Decorative grid pattern */}
                    <div 
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(rgba(96, 165, 250, 0.15) 1px, transparent 1px)`,
                        backgroundSize: '16px 16px'
                      }}
                    ></div>
                  </div>
                )}
                {/* Overlay Gradient Gradual */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#031636] via-[#031636]/40 to-transparent opacity-80 group-hover:opacity-75 transition-opacity duration-300"></div>
                
                {/* Konten Keterangan di Atas Card */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 z-10">
                  <span className="text-[#adc6ff] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase mb-1">{project.category}</span>
                  <h3 className="text-white text-base sm:text-lg font-bold mb-1.5 leading-snug">{project.title}</h3>
                  <p className="text-[#d3e4fe]/80 text-[11px] sm:text-xs mb-3 line-clamp-2">{project.description}</p>
                  <button className="w-fit text-white border border-white/30 hover:border-[#adc6ff] hover:text-[#adc6ff] px-3.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold active:scale-95 transition-all duration-200 cursor-pointer">
                    {t('projects.viewDetail')}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Track 2 (Gerbong kedua - Identik untuk Seamless Loop) */}
          <div className="flex gap-6 pr-6 shrink-0">
            {trackProjects.map((project, idx) => (
              <div 
                key={`t2-${idx}`} 
                className="w-[295px] sm:w-[370px] shrink-0 group relative overflow-hidden rounded-2xl bg-[#031636] aspect-[4/3] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center justify-center"
              >
                {/* Gambar Proyek */}
                {project.image ? (
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500 ease-out"
                    src={project.image}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#071938] via-[#031636] to-[#0a1d40] relative overflow-hidden">
                    {/* Decorative grid pattern */}
                    <div 
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(rgba(96, 165, 250, 0.15) 1px, transparent 1px)`,
                        backgroundSize: '16px 16px'
                      }}
                    ></div>
                  </div>
                )}
                {/* Overlay Gradient Gradual */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#031636] via-[#031636]/40 to-transparent opacity-80 group-hover:opacity-75 transition-opacity duration-300"></div>
                
                {/* Konten Keterangan di Atas Card */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 z-10">
                  <span className="text-[#adc6ff] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase mb-1">{project.category}</span>
                  <h3 className="text-white text-base sm:text-lg font-bold mb-1.5 leading-snug">{project.title}</h3>
                  <p className="text-[#d3e4fe]/80 text-[11px] sm:text-xs mb-3 line-clamp-2">{project.description}</p>
                  <button className="w-fit text-white border border-white/30 hover:border-[#adc6ff] hover:text-[#adc6ff] px-3.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold active:scale-95 transition-all duration-200 cursor-pointer">
                    {t('projects.viewDetail')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
