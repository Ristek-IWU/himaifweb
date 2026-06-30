import Reveal from './Reveal'
import { programStudiData } from './data/data'
import pythonSvg from '../../assets/python-svgrepo-com.svg'
import jsSvg from '../../assets/js-svgrepo-com.svg'
import javaSvg from '../../assets/java-svgrepo-com.svg'

/**
 * Section 3 — Program Studi Informatika IWU.
 * Menampilkan informasi program studi, domain keahlian, dan statistik.
 */
export default function Prodi() {
  const { title, description, domains, stats } = programStudiData

  const svgMap = [jsSvg, pythonSvg, javaSvg]

  return (
    <section className="relative bg-[#f0f2f8] dark:bg-gradient-to-br dark:from-[#040d1a] dark:via-[#080f1e] dark:to-[#0a1628] overflow-hidden">
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
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#005bc1]/10 dark:bg-[#005bc1]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#0091ae]/8 dark:bg-[#0091ae]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6 py-16 md:py-20">
        {/* Title — watermark + dashed border box */}
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="relative inline-block">
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 text-5xl sm:text-6xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight uppercase">
                PROGRAM STUDI
              </span>
              <div className="relative inline-flex items-center bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-xl px-8 py-3 shadow-[0_4px_24px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-2">
                <h2 className="text-[#031636] dark:text-white text-xl sm:text-2xl font-serif font-extrabold tracking-tight">
                  Informatika <span className="text-[#005bc1] dark:text-[#60a5fa]">IWU</span>
                </h2>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Description */}
        <Reveal delay={80}>
          <p className="text-center text-[#44474e] dark:text-[#d3e4fe]/70 text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            {description}
          </p>
        </Reveal>

        {/* Domain Cards — gaya card sambutan dengan pita */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {domains.map((domain, i) => (
            <Reveal key={domain.title} delay={i * 100}>
              <div className="group relative bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-2xl shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-lg transition-all duration-300">
                {/* Left 3D Ribbon — icon di dalam pita */}
                <div className="absolute left-3 top-0 bottom-[-12px] w-10 rounded-t-lg bg-[#0091ae] dark:bg-[#0091ae] flex flex-col items-center pt-3 z-10 shadow-md">
                  <img
                    src={svgMap[i]}
                    alt={domain.title}
                    className="w-5 h-5 object-contain"
                  />
                  {/* 3D Fold */}
                  <div className="absolute bottom-0 left-full w-0 h-0 border-t-[12px] border-t-[#006377] dark:border-t-[#006377] border-r-[12px] border-r-transparent"></div>
                </div>

                {/* Content */}
                <div className="pl-16 pr-6 py-6 min-h-[180px] flex flex-col justify-center">
                  <h3 className="font-serif text-lg font-bold text-[#031636] dark:text-white mb-3">
                    {domain.title}
                  </h3>
                  <p className="text-sm text-[#44474e] dark:text-[#d3e4fe]/70 leading-relaxed">
                    {domain.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <Reveal delay={120}>
          <div className="max-w-xl mx-auto">
            <div className="bg-white/70 dark:bg-[#0d1b33]/50 backdrop-blur-sm border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-2xl p-6 shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-center gap-10 md:gap-16">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-extrabold text-[#005bc1] dark:text-[#60a5fa]">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-[#44474e] dark:text-[#d3e4fe]/70 mt-1 font-medium">
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
