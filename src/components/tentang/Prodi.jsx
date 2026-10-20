import Reveal from '../Reveal'
import { useLanguage } from '../../context/LanguageContext'
import pythonSvg from '../../assets/python-svgrepo-com.svg'
import jsSvg from '../../assets/js-svgrepo-com.svg'
import javaSvg from '../../assets/java-svgrepo-com.svg'

import { translations } from '../../locales/translations'

/**
 * Section 3 — Tentang Program Studi Informatika IWU.
 * Domain keahlian + statistik.
 */
export default function Prodi() {
  const { t } = useLanguage()

  // Load customized prodi content from localStorage
  const savedProdi = typeof window !== 'undefined' ? localStorage.getItem('admin_prodi_data') : null
  const prodiData = savedProdi ? JSON.parse(savedProdi) : null

  const getProdiDesc = () => {
    if (!prodiData || !prodiData.description) return t('tentang.prodiDesc');
    const defaultValTranslation = translations.ID.tentang.prodiDesc;
    const val = prodiData.description;
    const dashboardDefaults = [
      "Program Studi Informatika di International Women University (IWU) berkomitmen menghasilkan lulusan berdaya saing global dengan keahlian komputasi modern, kecerdasan buatan, dan keamanan siber."
    ];
    if (val === defaultValTranslation || dashboardDefaults.includes(val)) {
      return t('tentang.prodiDesc');
    }
    return val;
  }

  const getProdiDomainTitle = (index) => {
    const key = `tentang.prodiDomain${index + 1}Title`;
    const defaultValTranslation = translations.ID.tentang[`prodiDomain${index + 1}Title`];
    const val = prodiData?.domains?.[index]?.title;
    if (!val) return t(key);
    const dashboardDefaults = [
      "Software Engineering",
      "Kecerdasan Buatan (AI)",
      "Blockchain"
    ];
    if (val === defaultValTranslation || dashboardDefaults.includes(val)) {
      return t(key);
    }
    return val;
  }

  const getProdiDomainDesc = (index) => {
    const key = `tentang.prodiDomain${index + 1}Desc`;
    const defaultValTranslation = translations.ID.tentang[`prodiDomain${index + 1}Desc`];
    const val = prodiData?.domains?.[index]?.description;
    if (!val) return t(key);
    const dashboardDefaults = [
      "Rekayasa perangkat lunak modern untuk ekosistem web, mobile, dan cloud.",
      "Implementasi Machine Learning, Deep Learning, dan analisis data cerdas.",
      "Pengembangan sistem terdesentralisasi, smart contract, dan teknologi Web3 modern."
    ];
    if (val === defaultValTranslation || dashboardDefaults.includes(val)) {
      return t(key);
    }
    return val;
  }

  const getProdiStatValue = (index) => {
    const key = `tentang.prodiStat${index + 1}Value`;
    const defaultValTranslation = translations.ID.tentang[`prodiStat${index + 1}Value`];
    const val = prodiData?.stats?.[index]?.value;
    if (!val) return t(key);
    const dashboardDefaults = ["98%", "20+"];
    if (val === defaultValTranslation || dashboardDefaults.includes(val)) {
      return t(key);
    }
    return val;
  }

  const getProdiStatLabel = (index) => {
    const key = `tentang.prodiStat${index + 1}Label`;
    const defaultValTranslation = translations.ID.tentang[`prodiStat${index + 1}Label`];
    const val = prodiData?.stats?.[index]?.label;
    if (!val) return t(key);
    const dashboardDefaults = ["Tingkat Keterserapan Kerja", "Kerjasama Perusahaan IT"];
    if (val === defaultValTranslation || dashboardDefaults.includes(val)) {
      return t(key);
    }
    return val;
  }

  const prodiDesc = getProdiDesc()

  const domains = [
    { 
      icon: 'code', 
      title: getProdiDomainTitle(0), 
      description: getProdiDomainDesc(0) 
    },
    { 
      icon: 'psychology', 
      title: getProdiDomainTitle(1), 
      description: getProdiDomainDesc(1) 
    },
    { 
      icon: 'token', 
      title: getProdiDomainTitle(2), 
      description: getProdiDomainDesc(2) 
    },
  ]

  const stats = [
    { 
      value: getProdiStatValue(0), 
      label: getProdiStatLabel(0) 
    },
    { 
      value: getProdiStatValue(1), 
      label: getProdiStatLabel(1) 
    },
  ]

  const svgMap = [jsSvg, pythonSvg, javaSvg]

  return (
    <section className="relative bg-[#f0f2f8] dark:bg-gradient-to-br dark:from-[#040d1a] dark:via-[#080f1e] dark:to-[#0a1628] overflow-hidden py-10 sm:py-12">
      {/* Map coordinate grid — light */}
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
      {/* Map coordinate grid — dark */}
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
      {/* Glow */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#005bc1]/10 dark:bg-[#005bc1]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-[#0091ae]/8 dark:bg-[#0091ae]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6">
        {/* Title — watermark + dashed border box */}
        <Reveal>
          <div className="text-center mb-6 sm:mb-8">
            <div className="relative inline-block">
              <span className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight uppercase">
                {t('tentang.prodiWatermark')}
              </span>
              <div className="relative inline-flex items-center bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-lg sm:rounded-xl px-6 py-2 sm:px-7 sm:py-2.5 shadow-[0_4px_20px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-2">
                <h2 className="text-[#031636] dark:text-white text-lg sm:text-xl font-serif font-extrabold tracking-tight">
                  {t('tentang.prodiTitle1') || 'Informatika '}<span className="text-[#005bc1] dark:text-[#60a5fa]">{t('tentang.prodiTitleHighlight') || 'IWU'}</span>
                </h2>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Description */}
        <Reveal delay={80}>
          <p className="text-center text-[#44474e] dark:text-[#d3e4fe]/70 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            {prodiDesc}
          </p>
        </Reveal>

        {/* Domain Cards — gaya card sambutan dengan pita */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {domains.map((domain, i) => (
            <Reveal key={domain.title} delay={i * 90}>
              <div className="group relative bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl sm:rounded-2xl shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-md transition-all duration-300">
                {/* Left 3D Ribbon — icon di dalam pita */}
                <div className="absolute left-2.5 sm:left-3 top-0 bottom-[-10px] w-8 sm:w-9 rounded-t-lg bg-[#0091ae] dark:bg-[#0091ae] flex flex-col items-center pt-2.5 z-10 shadow-sm">
                  <img
                    src={svgMap[i]}
                    alt={domain.title}
                    className="w-4 h-4 object-contain"
                  />
                  {/* 3D Fold */}
                  <div className="absolute bottom-0 left-full w-0 h-0 border-t-[10px] border-t-[#006377] dark:border-t-[#006377] border-r-[10px] border-r-transparent"></div>
                </div>

                {/* Content */}
                <div className="pl-13 sm:pl-14 pr-4 py-4 sm:py-5 min-h-[140px] flex flex-col justify-center">
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#031636] dark:text-white mb-1.5">
                    {domain.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44474e] dark:text-[#d3e4fe]/70 leading-relaxed">
                    {domain.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <Reveal delay={120}>
          <div className="max-w-lg mx-auto">
            <div className="bg-white/70 dark:bg-[#0d1b33]/50 backdrop-blur-sm border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xs dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-center gap-8 md:gap-14">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#005bc1] dark:text-[#60a5fa]">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#44474e] dark:text-[#d3e4fe]/70 mt-1 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
