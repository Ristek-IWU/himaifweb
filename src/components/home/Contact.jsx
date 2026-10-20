import React from 'react'
import Reveal from '../Reveal'
import { useLanguage } from '../../context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const contactInfo = [
    {
      label: t('contact.labelEmail'),
      value: 'himaif@iwu.ac.id',
      icon: 'mail',
      borderColor: 'border-l-[#031636]',
    },
    {
      label: t('contact.labelPhone'),
      value: '+62 838-2172-8652',
      icon: 'call',
      borderColor: 'border-l-[#005bc1]',
    },
    {
      label: t('contact.labelAddress'),
      value: t('contact.valueAddress'),
      icon: 'location_on',
      borderColor: 'border-l-[#0091ae]',
    },
  ]

  return (
    <section id="contact" className="py-10 sm:py-14 bg-[#f0f2f8] dark:bg-gradient-to-br dark:from-[#040d1a] dark:via-[#080f1e] dark:to-[#0a1628] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#005bc1]/10 dark:bg-[#005bc1]/15 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-[#005bc1]/5 dark:bg-[#60a5fa]/8 blur-[70px] rounded-full pointer-events-none"></div>
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

      <div className="max-w-[1120px] mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <Reveal>
          <div className="text-center mb-6 sm:mb-8">
            <div className="relative inline-block">
              <span className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight">
                {t('contact.watermark')}
              </span>
              <div className="relative inline-flex items-center bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-lg sm:rounded-xl px-6 py-2 sm:px-7 sm:py-2.5 shadow-[0_4px_20px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-2">
                <h2 className="text-[#031636] dark:text-white text-lg sm:text-xl font-serif font-extrabold tracking-tight">
                  {t('contact.title1')}<span className="text-[#005bc1] dark:text-[#60a5fa]">{t('contact.titleHighlight')}</span>
                </h2>
              </div>
            </div>
            <p className="text-[#44474e] dark:text-[#d3e4fe]/70 text-xs sm:text-sm max-w-lg mx-auto mt-3">
              {t('contact.subtitle')}
            </p>
          </div>
        </Reveal>

        {/* Full-Width Gradient Card */}
        <Reveal delay={150}>
          <div
            className="relative rounded-2xl sm:rounded-3xl border border-[#e5e7eb]/60 dark:border-[#1e3a5f]/40 shadow-[0_8px_30px_rgba(0,91,193,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden bg-white dark:bg-[#0d1b33]/60"
          >
            {/* Decorative corner pattern */}
            <div
              className="absolute top-0 right-0 w-[250px] h-[250px] opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#031636 1px, transparent 1px)`,
                backgroundSize: '16px 16px'
              }}
            ></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">

              {/* Left: Form Area */}
              <div className="lg:col-span-7 p-4 sm:p-6 md:p-8">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[#031636] dark:text-[#d3e4fe]/80 text-[10px] sm:text-xs font-bold uppercase tracking-wider">{t('contact.formName')}</label>
                      <input
                        className="w-full px-3.5 py-2.5 bg-white/80 dark:bg-[#0d1b33]/60 border-l-[3px] border-l-[#031636] dark:border-l-[#60a5fa] border-y border-y-[#e5e7eb] dark:border-y-[#1e3a5f]/40 border-r border-r-[#e5e7eb] dark:border-r-[#1e3a5f]/40 rounded-r-lg focus:border-l-[#005bc1] focus:border-y-[#005bc1] focus:border-r-[#005bc1] focus:ring-2 focus:ring-[#005bc1]/10 outline-none transition-all duration-200 text-xs sm:text-sm text-[#031636] dark:text-[#d3e4fe] placeholder:text-[#44474e]/30 dark:placeholder:text-[#d3e4fe]/20"
                        placeholder={t('contact.formPlaceholderName')}
                        type="text"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[#031636] dark:text-[#d3e4fe]/80 text-[10px] sm:text-xs font-bold uppercase tracking-wider">{t('contact.formEmail')}</label>
                      <input
                        className="w-full px-3.5 py-2.5 bg-white/80 dark:bg-[#0d1b33]/60 border-l-[3px] border-l-[#005bc1] dark:border-l-[#60a5fa] border-y border-y-[#e5e7eb] dark:border-y-[#1e3a5f]/40 border-r border-r-[#e5e7eb] dark:border-r-[#1e3a5f]/40 rounded-r-lg focus:border-l-[#005bc1] focus:border-y-[#005bc1] focus:border-r-[#005bc1] focus:ring-2 focus:ring-[#005bc1]/10 outline-none transition-all duration-200 text-xs sm:text-sm text-[#031636] dark:text-[#d3e4fe] placeholder:text-[#44474e]/30 dark:placeholder:text-[#d3e4fe]/20"
                        placeholder="john@email.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[#031636] dark:text-[#d3e4fe]/80 text-[10px] sm:text-xs font-bold uppercase tracking-wider">{t('contact.formMessage')}</label>
                    <textarea
                      className="w-full px-3.5 py-2.5 bg-white/80 dark:bg-[#0d1b33]/60 border-l-[3px] border-l-[#0091ae] dark:border-l-[#0091ae] border-y border-y-[#e5e7eb] dark:border-y-[#1e3a5f]/40 border-r border-r-[#e5e7eb] dark:border-r-[#1e3a5f]/40 rounded-r-lg focus:border-l-[#005bc1] focus:border-y-[#005bc1] focus:border-r-[#005bc1] focus:ring-2 focus:ring-[#005bc1]/10 outline-none transition-all duration-200 resize-none text-xs sm:text-sm text-[#031636] dark:text-[#d3e4fe] placeholder:text-[#44474e]/30 dark:placeholder:text-[#d3e4fe]/20"
                      placeholder={t('contact.formPlaceholderMessage')}
                      rows="4"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#031636] dark:bg-gradient-to-r dark:from-[#005bc1] dark:to-[#38bdf8] text-white px-7 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-md hover:bg-[#005bc1] dark:hover:from-[#1d6fd1] dark:hover:to-[#4ea4f5] hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-1.5"
                  >
                    <span>{t('contact.formSubmit')}</span>
                    <span className="material-symbols-outlined text-xs sm:text-sm">send</span>
                  </button>
                </form>
              </div>

              {/* Right: Contact Info Floating Badges + Map */}
              <div className="lg:col-span-5 p-5 sm:p-6 md:p-8 lg:pl-2 flex flex-col justify-between gap-4">
                {/* Contact Info Floating Badges */}
                <div className="space-y-2.5">
                  {contactInfo.map((info, idx) => (
                    <div
                      key={idx}
                      className={`bg-white/70 dark:bg-[#0d1b33]/60 backdrop-blur-sm border-l-[3px] ${info.borderColor} dark:border-l-[#60a5fa] border-y border-y-[#e5e7eb]/50 dark:border-y-[#1e3a5f]/40 border-r border-r-[#e5e7eb]/50 dark:border-r-[#1e3a5f]/40 rounded-r-lg p-2.5 pr-3.5 flex items-center gap-2.5 shadow-xs hover:shadow-sm hover:translate-x-0.5 transition-all duration-300 cursor-default`}
                    >
                      <span className="material-symbols-outlined text-[#005bc1] dark:text-[#60a5fa] text-lg shrink-0" style={{fontVariationSettings: "'FILL' 1"}}>{info.icon}</span>
                      <div>
                        <span className="text-[8px] font-extrabold text-[#005bc1]/70 dark:text-[#60a5fa]/70 uppercase tracking-widest">{info.label}</span>
                        <p className="text-[#031636] dark:text-[#d3e4fe] font-semibold text-xs mt-0.5">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Card */}
                <div className="flex-1 min-h-[120px] rounded-xl overflow-hidden border border-[#e5e7eb]/50 dark:border-[#1e3a5f]/40 shadow-xs relative bg-[#d3e4fe] dark:bg-[#0d1b33]">
                  <div className="absolute inset-0 opacity-15 pointer-events-none">
                    <img
                      alt="Map Background"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeemtVn0Ew8YzLxfI1IXMDHdNEaa0x-yaec-kYxZoDxTAnU-ZVc_LM8cDDvV5qAbORjv_GXu6qNKOwzfawLBOm3tjWw3fWOx27hV9Tcw95FFUBEWa4gx7Ac_cfskkB9eR8F1-mmh3wUn8CueLWqvzs39xZULPNHFe41CERSJ2wxw5i0giV2OYTErY5WcKowu72Kieorc5KU55eD9Q5FNGSrxrb8eEXRKUB-kP-0Eh_E4zfEPkNIvSoD-E-jBzGBMJ1cCaqbTs8Pnw"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-1">
                    <span className="material-symbols-outlined text-2xl text-[#031636] dark:text-[#60a5fa]" style={{fontVariationSettings: "'FILL' 1, 'wght' 600"}}>location_on</span>
                    <p className="text-[#031636] dark:text-[#d3e4fe] text-xs font-bold">{t('contact.mapTitle')}</p>
                    <a
                      className="inline-flex items-center gap-1 bg-[#031636] dark:bg-gradient-to-r dark:from-[#005bc1] dark:to-[#38bdf8] text-white px-3.5 py-1.5 rounded-lg text-[10px] font-bold hover:bg-[#005bc1] dark:hover:from-[#1d6fd1] dark:hover:to-[#4ea4f5] shadow-xs hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
                      href="https://maps.app.goo.gl/b4FK9djfRQTXMXER8"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{t('contact.mapButton')}</span>
                      <span className="material-symbols-outlined text-xs">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
