import React from 'react'
import Reveal from '../Reveal'
import logoHima from '../../assets/logo_hima.png'
import solidityLogo from '../../assets/light-solidity-svgrepo-com.svg'
import pythonLogo from '../../assets/python-svgrepo-com.svg'
import goLogo from '../../assets/go-svgrepo-com.svg'
import javaLogo from '../../assets/java-svgrepo-com.svg'
import { useLanguage } from '../../context/LanguageContext'

import fotoHimaif1 from '../../assets/foto-himaif-1.webp'
import fotoHimaif2 from '../../assets/foto-himaif-2.webp'
import fotoHimaif3 from '../../assets/foto-himaif-3.webp'
import { translations } from '../../locales/translations'

export default function About() {
  const { t } = useLanguage()

  // Load customized about images from localStorage with default fallbacks
  const savedAboutImages = typeof window !== 'undefined' ? localStorage.getItem('admin_about_images') : null
  const parsedAboutImages = savedAboutImages ? JSON.parse(savedAboutImages) : null

  const filterImg = (img, fallback) => {
    if (!img || img.includes('unsplash.com')) return fallback
    return img
  }

  const aboutImages = {
    img1: filterImg(parsedAboutImages?.img1, fotoHimaif1),
    img2: filterImg(parsedAboutImages?.img2, fotoHimaif2),
    img3: filterImg(parsedAboutImages?.img3, fotoHimaif3)
  }

  // Load customized core values from localStorage
  const savedCoreValues = typeof window !== 'undefined' ? localStorage.getItem('admin_core_values') : null
  const parsedCoreValues = savedCoreValues ? JSON.parse(savedCoreValues) : null

  const getCoreValue = (index, key) => {
    if (!parsedCoreValues) return t(key);
    const value = parsedCoreValues[index];
    const indonesianDefault = translations.ID.about.coreValues[key.split('.').pop()];
    if (value === indonesianDefault) {
      return t(key);
    }
    return value || t(key);
  }

  const categories = [
    {
      title: getCoreValue(0, 'about.coreValues.innovative'),
      icon: solidityLogo,
      tagBg: 'bg-[#031636]',
      textColor: 'text-[#031636]',
      foldBorder: 'border-t-[#010a1b]',
    },
    {
      title: getCoreValue(1, 'about.coreValues.creative'),
      icon: pythonLogo,
      tagBg: 'bg-[#005bc1]',
      textColor: 'text-[#005bc1]',
      foldBorder: 'border-t-[#003d80]',
    },
    {
      title: getCoreValue(2, 'about.coreValues.progressive'),
      icon: goLogo,
      tagBg: 'bg-[#0091ae]',
      textColor: 'text-[#0091ae]',
      foldBorder: 'border-t-[#006377]',
    },
    {
      title: getCoreValue(3, 'about.coreValues.inclusive'),
      icon: javaLogo,
      tagBg: 'bg-[#4e5e82]',
      textColor: 'text-[#4e5e82]',
      foldBorder: 'border-t-[#35415c]',
    },
  ]

  return (
    <section id="about" className="py-10 sm:py-14 bg-[#f0f2f8] dark:bg-gradient-to-br dark:from-[#040d1a] dark:via-[#080f1e] dark:to-[#0a1628] relative overflow-hidden">
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
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-secondary-container/20 dark:bg-[#005bc1]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[250px] h-[250px] bg-surface-variant/30 dark:bg-[#60a5fa]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute inset-0 hero-pattern opacity-40 dark:opacity-10 -z-20 pointer-events-none"></div>

      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section Heading */}
        <Reveal>
          <div className="text-center mb-6 sm:mb-8">
            <div className="relative inline-block">
              <span className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight">
                {t('about.watermark')}
              </span>
              <div className="relative inline-flex items-center bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-lg sm:rounded-xl px-6 py-2 sm:px-7 sm:py-2.5 shadow-[0_4px_20px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-2">
                <h2 className="text-[#031636] dark:text-white text-lg sm:text-xl font-serif font-extrabold tracking-tight">
                  {t('about.title1')}<span className="text-[#005bc1] dark:text-[#60a5fa]">{t('about.titleHighlight')}</span>
                </h2>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Sisi Kiri: Hybrid Collage 3 Foto (Top Wide, Bottom Tilted) */}
          <Reveal className="lg:col-span-5 flex flex-col gap-3.5 w-full relative">
            {/* Decorative Dashed Background Accent */}
            <div className="absolute -inset-2.5 border border-dashed border-secondary/20 dark:border-[#60a5fa]/15 rounded-2xl pointer-events-none -z-10 transform translate-y-1.5"></div>
            
            {/* Foto 1: Utama (Atas - Lebar/Landscape) */}
            <div className="w-full aspect-[16/7] relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#e5e7eb] dark:border-[#1e3a5f]/40 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] group cursor-pointer bg-[#dce5f5] dark:bg-[#0d1b33] flex items-center justify-center">
              {aboutImages.img1 ? (
                <>
                  <img
                    alt="Foto HIMAIF 1"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    src={aboutImages.img1}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031636]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
                </>
              ) : (
                <div className="flex flex-col items-center gap-1 text-[#44474e]/40 dark:text-[#d3e4fe]/30">
                  <span className="material-symbols-outlined text-2xl">add_photo_alternate</span>
                  <span className="text-[9px] font-bold">Foto HIMAIF 1</span>
                </div>
              )}
            </div>

            {/* Baris Bawah: 2 Foto Berdampingan & Miring */}
            <div className="flex flex-col sm:flex-row gap-3 mt-0.5">
              {/* Foto 2: Bawah Kiri (Miring Kiri) */}
              <div className="flex-1 aspect-[4/3] relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#e5e7eb] dark:border-[#1e3a5f]/40 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] group cursor-pointer bg-[#dce5f5] dark:bg-[#0d1b33] sm:-rotate-2 hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-500 ease-out flex items-center justify-center">
                {aboutImages.img2 ? (
                  <>
                    <img
                      alt="Foto HIMAIF 2"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                      src={aboutImages.img2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031636]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-1 text-[#44474e]/40 dark:text-[#d3e4fe]/30">
                    <span className="material-symbols-outlined text-xl">add_photo_alternate</span>
                    <span className="text-[8px] font-bold">Foto HIMAIF 2</span>
                  </div>
                )}
              </div>
              
              {/* Foto 3: Bawah Kanan (Miring Kanan) */}
              <div className="flex-1 aspect-[4/3] relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#e5e7eb] dark:border-[#1e3a5f]/40 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] group cursor-pointer bg-[#dce5f5] dark:bg-[#0d1b33] sm:rotate-2 hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-500 ease-out flex items-center justify-center">
                {aboutImages.img3 ? (
                  <>
                    <img
                      alt="Foto HIMAIF 3"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                      src={aboutImages.img3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031636]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-1 text-[#44474e]/40 dark:text-[#d3e4fe]/30">
                    <span className="material-symbols-outlined text-xl">add_photo_alternate</span>
                    <span className="text-[8px] font-bold">Foto HIMAIF 3</span>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          {/* Sisi Kanan: Vision-Style Cards & Categories Grid */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            
            {/* 1. Kartu Utama Tentang Kami */}
            <Reveal delay={100}>
              <div className="bg-[#f0f2f8] dark:bg-[#0d1b33]/60 border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl sm:rounded-2xl p-4 pl-16 pr-4 sm:p-5 sm:pl-20 sm:pr-6 relative shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-md transition-all duration-300 hover:scale-[1.005] cursor-default min-h-[120px] flex flex-col justify-center">
                {/* 3D Ribbon dengan Logo HIMA */}
                <div className="absolute left-3.5 sm:left-5 top-0 bottom-[-10px] w-8 sm:w-10 rounded-t-lg bg-[#031636] flex flex-col items-center pt-3 z-10 shadow-sm">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white dark:bg-[#0a1628] flex items-center justify-center shadow-xs overflow-hidden p-0.5">
                    <img src={logoHima} alt="Logo HIMA" className="w-full h-full object-contain" />
                  </div>
                  {/* Ribbon folding border */}
                  <div className="absolute bottom-0 left-full w-0 h-0 border-t-[10px] border-t-[#010a1b] border-r-[10px] border-r-transparent"></div>
                </div>
                
                <div>
                  <span className="inline-block text-[9px] font-extrabold text-secondary dark:text-[#60a5fa] uppercase tracking-widest mb-0.5">
                    {t('about.introTag')}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-primary dark:text-[#d3e4fe] mb-1.5">{t('about.aboutHima')}</h3>
                  <p className="text-[#44474e] dark:text-[#d3e4fe]/70 text-xs sm:text-sm leading-relaxed">
                    {t('about.introDesc')}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 2. Grid Kategori 2x2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
              {categories.map((cat, idx) => (
                <Reveal
                  key={idx}
                  delay={150 + idx * 70}
                >
                  <div
                    className="bg-[#f0f2f8] dark:bg-[#0d1b33]/60 border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl p-3 pl-14 pr-3 sm:p-3.5 sm:pl-16 sm:pr-4 relative min-h-[58px] flex items-center shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-md transition-all duration-300 hover:scale-[1.005] cursor-default"
                  >
                    {/* 3D Ribbon Kecil dengan Kontainer Bulat Putih untuk SVG */}
                    <div className={`absolute left-2.5 sm:left-3 top-0 bottom-[-7px] w-7 sm:w-8 rounded-t-lg flex flex-col items-center pt-2 z-10 ${cat.tagBg} shadow-xs`}>
                      <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-white dark:bg-[#0a1628] flex items-center justify-center shadow-xs">
                        <img
                          src={cat.icon}
                          alt={`${cat.title} Logo`}
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain"
                        />
                      </div>
                      <div className={`absolute bottom-0 left-full w-0 h-0 border-t-[7px] ${cat.foldBorder} border-r-[7px] border-r-transparent`}></div>
                    </div>
                    
                    <span className="text-[#031636] dark:text-[#d3e4fe] font-bold text-xs sm:text-sm leading-snug">
                      {cat.title}
                    </span>
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
