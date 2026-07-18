import React from 'react'
import logoHima from '../../assets/logo_hima.png'

export default function PortalNavbar({
  searchTerm,
  onSearchChange,
  isLoggedIn,
  onCreateClick,
  onLoginClick,
  portalDarkMode,
  onToggleTheme,
  onTabChange,
  activeTab,
  onRequestExit
}) {
  return (
    <header className="w-full bg-white/90 dark:bg-[#071329] border-b border-[#c5c6cf]/60 dark:border-[#1e3a5f]/40 flex items-center justify-between px-4 md:px-8 py-3 z-30 shrink-0 select-none backdrop-blur-md">
      {/* Branding Logo & Title */}
      <div className="flex items-center gap-3 shrink-0">
        <img src={logoHima} alt="HIMAIF Logo" className="w-9 h-9 rounded-xl object-cover shadow-lg shadow-[#005bc1]/20" />
        <div className="hidden sm:block">
          <h2 className="font-serif font-black text-sm tracking-tight text-[#031636] dark:text-white leading-none">HIMAIF</h2>
          <span className="text-[9px] text-[#005bc1] dark:text-[#60a5fa] font-mono tracking-widest uppercase font-bold leading-none">Showcase</span>
        </div>
      </div>

      {/* Right cluster: Search input, Upload Button, Theme Toggle, Profile */}
      <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4 flex-1 justify-end max-w-4xl">
        
        {/* Search Bar capsule */}
        <div className="relative w-full max-w-[110px] xs:max-w-[150px] sm:max-w-xs md:max-w-sm">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-sm">search</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Ingin mencari sesuatu?"
            className="w-full pl-9 pr-4 py-1.5 bg-slate-100 dark:bg-white/5 border border-[#c5c6cf]/60 dark:border-white/10 rounded-full text-xs text-[#031636] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#005bc1] dark:focus:border-[#60a5fa] outline-none transition-all"
          />
        </div>

        {/* Upload Button */}
        {isLoggedIn ? (
          <button
            onClick={onCreateClick}
            className="bg-[#005bc1] hover:bg-[#003d80] text-white px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-sm font-bold">add</span>
            <span>Buat</span>
          </button>
        ) : (
          <button
            onClick={() => onTabChange('drive')}
            className="bg-slate-100 hover:bg-slate-200 border border-slate-200 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 text-slate-700 dark:text-slate-300 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-sm font-bold">add</span>
            <span>Buat</span>
          </button>
        )}

        {/* Theme Toggle Button */}
        <button
          onClick={onToggleTheme}
          className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-white/5 border border-slate-200/30 dark:border-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer shrink-0"
          aria-label="Toggle Theme"
        >
          <span className={`material-symbols-outlined text-sm transition-all duration-500 ${
            portalDarkMode ? 'text-[#60a5fa] rotate-[360deg]' : 'text-amber-500 rotate-0'
          }`}>
            {portalDarkMode ? 'dark_mode' : 'light_mode'}
          </span>
        </button>

        {/* Exit Portal Button (visible on mobile/tablet) */}
        <button
          onClick={onRequestExit}
          className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 hover:bg-red-100 dark:hover:bg-red-500/20 text-red-600 dark:text-red-400 transition-all duration-300 cursor-pointer shrink-0"
          aria-label="Keluar Portal"
          title="Keluar Portal"
        >
          <span className="material-symbols-outlined text-sm font-bold">logout</span>
        </button>

        {/* Profile info */}
        <div className="flex items-center shrink-0">
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#005bc1] to-[#0091ae] flex items-center justify-center font-bold text-xs text-white shadow-sm border border-[#005bc1]/20">
                E
              </div>
              <div className="hidden md:block text-left leading-tight">
                <p className="text-[11px] font-bold text-[#031636] dark:text-white leading-none">Ervan</p>
                <span className="text-[8px] text-slate-500 dark:text-slate-400 font-mono leading-none">2201010023</span>
              </div>
            </div>
          ) : (
            <button
              onClick={onLoginClick}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[#005bc1]/10 border border-[#005bc1]/20 hover:bg-[#005bc1]/20 text-[#005bc1] dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:text-[#60a5fa] transition-colors cursor-pointer"
              title="Masuk Akun"
            >
              <span className="material-symbols-outlined text-sm">login</span>
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
