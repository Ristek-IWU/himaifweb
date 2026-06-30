import React from 'react'
import logoHima from '../../assets/logo_hima.png'
import risetinLogo from '../../assets/risetin.png'
import orbisLogo from '../../assets/orbis.png'
import solidityLogo from '../../assets/light-solidity-svgrepo-com.svg'

export default function Hero() {
  return (
    <section className="relative min-h-[580px] lg:min-h-[680px] flex items-center bg-[#f0f2f8] dark:bg-gradient-to-br dark:from-[#040d1a] dark:via-[#080f1e] dark:to-[#0a1628] overflow-hidden border-b border-[#c5c6cf] dark:border-[#1e3a5f]/30">
      {/* Background glow and subtle dot grid */}
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
      {/* Ambient glows */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[400px] h-[400px] bg-[#005bc1]/10 dark:bg-[#005bc1]/20 blur-[90px] rounded-full pointer-events-none"></div>
      <div className="absolute -left-20 top-10 w-[300px] h-[300px] bg-[#005bc1]/5 dark:bg-[#60a5fa]/10 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 pb-12 lg:pt-12 lg:pb-16 w-full">
        
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Headline with Dashed Box Accent */}
          <h1 className="text-[#031636] dark:text-white text-4xl sm:text-5xl md:text-7xl font-serif font-normal tracking-tight flex flex-col gap-1 sm:gap-2">
            <span>Himpunan</span>
            <span className="relative inline-block my-4 sm:my-5 self-start">
              {/* Teks Watermark di Belakang */}
              <span 
                className="absolute -top-6 sm:-top-8 text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight"
                style={{ left: '15px', transform: 'none' }}
              >
                Informatika IWU
              </span>
              {/* Box Utama */}
              <span className="inline-flex items-center bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-xl px-4 sm:px-5 py-1 sm:py-1.5 shadow-[0_4px_24px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-2">
                <span className="text-[#005bc1] dark:text-[#60a5fa] font-bold">Mahasiswa</span>
              </span>
            </span>
            <span>Informatika</span>
          </h1>

          {/* Description Text */}
          <p className="text-[#44474e] dark:text-[#d3e4fe]/60 text-base md:text-lg max-w-xl leading-relaxed opacity-95">
            Wadah pengembangan potensi mahasiswa Informatika menuju{" "}
            <span className="text-[#005bc1] dark:text-[#60a5fa] font-bold">profesional digital</span> yang kompetitif, inovatif, dan berdampak.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-[#031636] dark:bg-gradient-to-r dark:from-[#005bc1] dark:to-[#38bdf8] text-white px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-[#005bc1] dark:hover:from-[#1d6fd1] dark:hover:to-[#4ea4f5] hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer">
              Gabung Sekarang
            </button>
            <button className="bg-transparent text-[#031636] dark:text-[#60a5fa] border border-[#c5c6cf] dark:border-[#60a5fa]/30 px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-white dark:hover:bg-[#0d1b33] hover:border-[#005bc1] dark:hover:border-[#60a5fa] active:scale-95 transition-all duration-200 flex items-center gap-2 cursor-pointer">
              <span>Jelajahi Proyek</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Right Content (Interactive Floating Portal) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          {/* Main Square Orbit Frame */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 bg-white dark:bg-gradient-to-br dark:from-[#0d1b33] dark:to-[#0a1628] border border-[#c5c6cf]/60 dark:border-[#60a5fa]/20 rounded-[32px] flex items-center justify-center shadow-lg dark:shadow-[0_10px_40px_rgba(96,165,250,0.15)] select-none">
            <img src={logoHima} alt="HIMA Logo" className="w-44 h-44 object-contain" />
            
            {/* Dashed outer orbit guide lines */}
            <div className="absolute inset-0 rounded-[36px] border border-dashed border-[#005bc1]/10 dark:border-[#60a5fa]/10 scale-105 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-[40px] border border-dashed border-[#005bc1]/5 dark:border-[#60a5fa]/5 scale-110 pointer-events-none"></div>

            {/* Hanging Stats Card */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-stretch gap-4 bg-white dark:bg-[#0d1b33] border border-[#c5c6cf]/50 dark:border-[#60a5fa]/15 rounded-2xl py-2 px-4 shadow-[0_10px_25px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_25px_rgba(0,0,0,0.3)] backdrop-blur-md whitespace-nowrap">
              <div className="text-center min-w-[48px]">
                <p className="text-[#005bc1] dark:text-[#60a5fa] text-lg font-black leading-none">150+</p>
                <p className="text-[#44474e] dark:text-[#d3e4fe]/50 text-[8px] font-bold uppercase tracking-wider mt-1.5">Anggota</p>
              </div>
              <div className="w-[1px] bg-[#c5c6cf]/80 dark:bg-[#1e3a5f]/60"></div>
              <div className="text-center min-w-[48px]">
                <p className="text-[#005bc1] dark:text-[#60a5fa] text-lg font-black leading-none">20+</p>
                <p className="text-[#44474e] dark:text-[#d3e4fe]/50 text-[8px] font-bold uppercase tracking-wider mt-1.5">Proyek</p>
              </div>
              <div className="w-[1px] bg-[#c5c6cf]/80 dark:bg-[#1e3a5f]/60"></div>
              <div className="text-center min-w-[48px]">
                <p className="text-[#005bc1] dark:text-[#60a5fa] text-lg font-black leading-none">5+</p>
                <p className="text-[#44474e] dark:text-[#d3e4fe]/50 text-[8px] font-bold uppercase tracking-wider mt-1.5">Divisi</p>
              </div>
            </div>

            </div>

          </div>
      </div>

    </section>
  )
}
