import React from 'react'
import logoHima from '../../assets/logo_hima.png'
import { useLanguage } from '../../context/LanguageContext'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  // Load organization social links from CMS
  const savedOrgSocials = typeof window !== 'undefined' ? localStorage.getItem('admin_org_socials') : null
  const orgSocials = savedOrgSocials ? JSON.parse(savedOrgSocials) : {}

  const quickLinks = [
    { label: t('navbar.home'), href: '#' },
    { label: t('navbar.about'), href: '#about' },
    { label: t('navbar.projects'), href: '#projects' },
    { label: t('navbar.structure'), href: '#vision' },
  ]

  // 2 social platforms visible in the footer (IG & GitHub only)
  const socialLinks = [
    {
      label: 'Instagram',
      href: orgSocials.instagram || 'https://www.instagram.com/himaif.iwu',
      brandColor: 'text-[#E4405F]',
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      label: 'GitHub',
      href: orgSocials.github || 'https://github.com/Ristek-IWU',
      brandColor: 'text-[#f0f6fc]',
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      ),
    },
  ]

  return (
    <footer className="w-full bg-[#031636] dark:bg-black">
      <div className="max-w-[1120px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">

          {/* Kiri (60%): Brand */}
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center gap-2">
              <img src={logoHima} alt="HIMA IF Logo" className="w-7 h-7 object-contain opacity-85" />
              <span className="text-base font-serif font-bold text-[#d8e2ff] tracking-tight">
                HIMAIF <span className="text-[#adc6ff]">SYNAPSE</span>
              </span>
            </div>
            <p className="text-[#d3e4fe]/50 text-xs leading-relaxed max-w-md">
              {t('footer.desc')}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className={`w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center ${social.brandColor} hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-200`}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Kanan (40%): Quick Links 2x2 Grid */}
          <div className="md:col-span-5">
            <h5 className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3">{t('footer.quickLinksTitle')}</h5>
            <div className="grid grid-cols-2 gap-x-5 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  className="text-[#d3e4fe]/50 text-xs hover:text-[#adc6ff] transition-colors duration-200"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright with border-top separator */}
        <div className="mt-6 pt-4 border-t border-[#005bc1]/20 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[#d3e4fe]/30 text-[11px]">
            © {currentYear} {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-3 text-[#d3e4fe]/25 text-[11px]">
            <a href="#" className="hover:text-[#adc6ff] transition-colors duration-200">{t('footer.privacyPolicy')}</a>
            <span className="text-[#d3e4fe]/10">·</span>
            <a href="#" className="hover:text-[#adc6ff] transition-colors duration-200">{t('footer.termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
