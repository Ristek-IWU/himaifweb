import React, { useState, useEffect, useRef } from 'react'
import logoHima from '../../assets/logo_hima.png'
import iwuLogo from '../../assets/iwu.png'
import { useLanguage } from '../../context/LanguageContext'

export default function Navbar({ active, setActive }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { lang, setLang, t } = useLanguage()
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const [isMobileLangDropdownOpen, setIsMobileLangDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const langRef = useRef(null)
  const langRefMobile = useRef(null)
  const headerRef = useRef(null)

  // Toggle dark class on root document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false)
      }
      if (langRefMobile.current && !langRefMobile.current.contains(event.target)) {
        setIsMobileLangDropdownOpen(false)
      }
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const links = [
    { id: 'home', label: t('navbar.home'), href: '#' },
    { id: 'tentang', label: t('navbar.about'), href: '#tentang' },
    { id: 'structure', label: t('navbar.structure'), href: '#structure' },
    { id: 'projects', label: t('navbar.projects'), href: '#projects' },
    { id: 'contact', label: t('navbar.contact'), href: '#contact' },
  ]

  const languages = [
    { code: 'ID', name: 'Indonesia', flag: 'ID' },
    { code: 'EN', name: 'English', flag: 'EN' },
    { code: 'KR', name: 'Korea', flag: 'KR' },
    { code: 'TW', name: 'Taiwan', flag: 'TW' }
  ]

  const activeLangObj = languages.find(l => l.code === lang) || languages[0]

  return (
    <header ref={headerRef} className="fixed top-0 w-full z-50 flex flex-col">
      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-[#040d1a]/95 backdrop-blur-md border-b border-[#c5c6cf]/65 dark:border-[#1e3a5f]/40 shadow-md h-16'
            : 'bg-white dark:bg-[#040d1a] shadow-none h-20'
        }`}
      >
        <div className="flex justify-between items-center h-full px-6 max-w-[1280px] mx-auto w-full">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <img src={logoHima} alt="HIMA IF Logo" className="w-9 h-9 object-contain" />
            <span className="text-[#031636] dark:text-white font-serif font-bold text-lg md:text-xl tracking-tight select-none">
              HIMAIF <span className="text-[#005bc1] dark:text-[#60a5fa] font-bold">SYNAPSE</span>
            </span>
            <img src={iwuLogo} alt="IWU Logo" className="w-8 h-8 object-contain ml-2" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActive(link.id)}
                className={`text-sm font-serif font-semibold transition-all duration-200 pb-1 ${
                  active === link.id
                    ? 'text-[#031636] dark:text-white border-b-[3px] border-[#005bc1] dark:border-[#60a5fa] font-bold'
                    : 'text-[#44474e] dark:text-[#d3e4fe]/40 hover:text-[#005bc1] dark:hover:text-[#60a5fa] border-b-[3px] border-transparent hover:border-[#005bc1]/40 dark:hover:border-[#60a5fa]/40'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-4">
            {/* CTA Button (hidden on mobile) */}
            <button className="hidden md:block bg-[#d8e2ff] dark:bg-gradient-to-r dark:from-[#005bc1] dark:to-[#38bdf8] text-[#001d35] dark:text-white px-6 py-2 rounded-lg text-sm font-serif font-bold hover:bg-[#adc6ff] dark:hover:from-[#1d6fd1] dark:hover:to-[#4ea4f5] hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer">
              {t('navbar.join')}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center p-2 rounded-lg text-[#031636] dark:text-white hover:bg-neutral-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#040d1a]/95 backdrop-blur-md border-b border-[#c5c6cf]/65 dark:border-[#1e3a5f]/40 shadow-lg px-6 py-4 flex flex-col gap-4 animate-[fade-in_0.2s_ease-out]">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => {
                setActive(link.id)
                setIsMobileMenuOpen(false)
              }}
              className={`text-sm font-serif font-semibold py-1.5 transition-all duration-200 ${
                active === link.id
                  ? 'text-[#005bc1] dark:text-[#60a5fa] font-bold pl-2 border-l-2 border-[#005bc1] dark:border-[#60a5fa]'
                  : 'text-[#44474e] dark:text-[#d3e4fe]/60 pl-2 border-l-2 border-transparent hover:text-[#005bc1] dark:hover:text-[#60a5fa]'
              }`}
            >
              {link.label}
            </a>
          ))}
          
          <button className="w-full bg-[#d8e2ff] dark:bg-gradient-to-r dark:from-[#005bc1] dark:to-[#38bdf8] text-[#001d35] dark:text-white py-2.5 rounded-lg text-sm font-serif font-bold hover:bg-[#adc6ff] dark:hover:from-[#1d6fd1] dark:hover:to-[#4ea4f5] hover:shadow-md transition-all duration-200">
            {t('navbar.join')}
          </button>

          {/* Utilities row for mobile */}
          <div className="flex items-center justify-between border-t border-[#c5c6cf]/40 dark:border-[#1e3a5f]/20 pt-4 mt-2">
            {/* Mobile Language Selector */}
            <div className="relative" ref={langRefMobile}>
              <button
                onClick={() => setIsMobileLangDropdownOpen(!isMobileLangDropdownOpen)}
                className="flex items-center gap-1.5 text-[11px] font-serif font-bold text-[#005bc1] dark:text-[#38bdf8] hover:text-[#00428c] dark:hover:text-[#58c7f9] transition-colors cursor-pointer select-none"
              >
                <span className="material-symbols-outlined text-base">public</span>
                <span>{activeLangObj.name}</span>
                <span className={`material-symbols-outlined text-xs transition-transform duration-200 ${isMobileLangDropdownOpen ? 'rotate-180' : ''}`}>
                  keyboard_arrow_down
                </span>
              </button>

              {isMobileLangDropdownOpen && (
                <div className="absolute left-0 bottom-8 bg-white dark:bg-[#070f20] border border-neutral-200 dark:border-slate-800 rounded-xl shadow-lg p-1 z-50 w-32 flex flex-col gap-0.5">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setIsMobileLangDropdownOpen(false); }}
                      className={`w-full px-2.5 py-1.5 text-left text-xs font-serif font-semibold hover:bg-[#005bc1]/5 dark:hover:bg-[#38bdf8]/10 hover:text-[#005bc1] dark:hover:text-[#38bdf8] rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                        lang === l.code ? 'text-[#005bc1] bg-[#005bc1]/5 dark:text-[#38bdf8] dark:bg-[#38bdf8]/10' : 'text-[#44474e] dark:text-slate-300'
                      }`}
                    >
                      <span>{l.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-100 dark:bg-slate-800/60 hover:bg-neutral-200 dark:hover:bg-slate-800 transition-all cursor-pointer text-[#005bc1] dark:text-[#38bdf8]"
            >
              <span className={`material-symbols-outlined text-base transition-all duration-300 ${
                isDarkMode ? 'text-[#ffd043] rotate-[360deg]' : 'text-[#005bc1] hover:text-[#00428c]'
              }`}>
                {isDarkMode ? 'dark_mode' : 'light_mode'}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Sub-Navbar: Minimalist Floating Panel (always visible on desktop, hidden on mobile) */}
      <div className="hidden md:block w-full transition-all duration-300 max-h-12 opacity-100">
        <div className="bg-white dark:bg-[#040d1a] border-b border-[#c5c6cf]/65 dark:border-[#1e3a5f]/40">
          <div className="max-w-[1280px] mx-auto px-6 h-10 flex justify-between items-center w-full">

            {/* Left: Blue-themed micro-spaced text */}
            <div className="flex items-center gap-4 text-[10px] font-serif font-bold tracking-widest text-[#005bc1] dark:text-[#38bdf8] uppercase select-none transition-colors">
              <span>{t('navbar.bandungID')}</span>
              <span className="text-[#005bc1]/40 dark:text-[#38bdf8]/40 font-normal">•</span>
              <span className="hover:text-[#00428c] dark:hover:text-[#58c7f9] transition-colors cursor-pointer">{t('navbar.infoEmail')}</span>
            </div>

            {/* Right: Borderless utility icons */}
            <div className="flex items-center gap-5">
              {/* Socials - Branded Colors */}
              <div className="flex items-center gap-3.5">
                <a href="#" aria-label="GitHub" className="text-[#181717] dark:text-slate-300 hover:scale-110 transition-transform duration-200">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-[#e4405f] dark:text-[#f472b6] hover:scale-110 transition-transform duration-200">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-[#0a66c2] dark:text-[#60a5fa] hover:scale-110 transition-transform duration-200">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>

              <div className="w-[1px] h-3 bg-neutral-300 dark:bg-slate-700"></div>

              {/* Language Selector */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-1.5 text-[10px] font-serif font-bold text-[#005bc1] dark:text-[#38bdf8] hover:text-[#00428c] dark:hover:text-[#58c7f9] transition-colors cursor-pointer select-none"
                >
                  <span className="material-symbols-outlined text-base">public</span>
                  <span className="mr-0.5">{activeLangObj.name}</span>
                  <span className={`material-symbols-outlined text-xs transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`}>
                    keyboard_arrow_down
                  </span>
                </button>

                {isLangDropdownOpen && (
                  <div className="absolute right-0 top-7 bg-white dark:bg-[#070f20] border border-neutral-200 dark:border-slate-800 rounded-xl shadow-lg p-1 z-50 w-32 flex flex-col gap-0.5 animate-[fade-in_0.15s_ease-out]">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code); setIsLangDropdownOpen(false); }}
                        className={`w-full px-2.5 py-1.5 text-left text-xs font-serif font-semibold hover:bg-[#005bc1]/5 dark:hover:bg-[#38bdf8]/10 hover:text-[#005bc1] dark:hover:text-[#38bdf8] rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                          lang === l.code ? 'text-[#005bc1] bg-[#005bc1]/5 dark:text-[#38bdf8] dark:bg-[#38bdf8]/10' : 'text-[#44474e] dark:text-slate-300'
                        }`}
                      >
                        <span>{l.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="w-[1px] h-3 bg-neutral-300 dark:bg-slate-700"></div>

              {/* Theme Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="flex items-center justify-center w-5 h-5 rounded hover:bg-neutral-100 dark:hover:bg-slate-800 transition-all cursor-pointer text-[#005bc1] dark:text-[#38bdf8]"
              >
                <span className={`material-symbols-outlined text-sm transition-all duration-300 ${
                  isDarkMode ? 'text-[#ffd043] rotate-[360deg]' : 'text-[#005bc1] hover:text-[#00428c]'
                }`}>
                  {isDarkMode ? 'dark_mode' : 'light_mode'}
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}
