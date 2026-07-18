import React from 'react'
import Reveal from '../Reveal'
import proyek1 from '../../assets/proyek1.png'
import proyek2 from '../../assets/proyek2.png'
import proyek3 from '../../assets/proyek3.png'

export default function Projects() {
  const projectList = [
    {
      title: "VeriChain - Ijazah Digital",
      category: "Blockchain Technology",
      description: "Sistem otentikasi dokumen akademis berbasis blockchain untuk menjamin keaslian ijazah secara real-time.",
      image: proyek1,
    },
    {
      title: "Portal Jamsos",
      category: "Cryptography & Zero-Knowledge",
      description: "Platform jaminan sosial berbasis bukti tanpa pengungkapan (ZKP) untuk menjaga privasi identitas penerima bansos.",
      image: proyek2,
    },
    {
      title: "Bobotoh Pay",
      category: "Fintech & Web3 Wallet",
      description: "Dompet digital terintegrasi jaringan Web3 untuk mempermudah transaksi saldo dan layanan pembayaran QRIS.",
      image: proyek3,
    }
  ];

  // Duplikasi list proyek di setiap gerbong (menjadi 6 item per gerbong)
  // Hal ini penting agar lebar satu gerbong (2360px+) melebihi lebar layar monitor desktop terbesar,
  // sehingga tidak akan pernah ada celah kosong (blank space) saat animasi melompat kembali ke awal.
  const trackProjects = [...projectList, ...projectList];

  return (
    <section id="projects" className="py-16 bg-[#e1e8f5] dark:bg-gradient-to-b dark:from-[#0a1628] dark:to-[#0f1729] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-10">
        <Reveal>
          <div className="text-center">
            {/* Wrapper relatif untuk teks watermark */}
            <div className="relative inline-block">
              {/* Teks Watermark di Belakang */}
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 text-5xl sm:text-6xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight">
                Karya Mahasiswa
              </span>

              {/* Kotak Utama — Persegi dengan Garis Putus-Putus Biru */}
              <div className="relative inline-flex items-center gap-2 bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-xl px-8 py-3 shadow-[0_4px_24px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-3">
                <h2 className="text-[#031636] dark:text-white text-2xl sm:text-3xl font-serif font-extrabold tracking-tight">
                  Showcase <span className="text-[#005bc1] dark:text-[#60a5fa]">Proyek</span>
                </h2>
              </div>
            </div>

            {/* Deskripsi */}
            <p className="text-[#44474e] dark:text-[#d3e4fe]/70 text-base max-w-2xl mx-auto mt-4">
              Melihat karya inovatif yang lahir dari tangan kreatif para mahasiswa Informatika International Women University.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Kontainer Slider Kereta Api (Marquee) */}
      <Reveal delay={150} className="w-full overflow-hidden relative py-4">
        {/* Parent wrapper yang bergerak sebagai satu kesatuan kereta api */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          
          {/* Track 1 (Gerbong pertama) */}
          <div className="flex gap-6 pr-6 shrink-0">
            {trackProjects.map((project, idx) => (
              <div 
                key={`t1-${idx}`} 
                className="w-[295px] sm:w-[370px] shrink-0 group relative overflow-hidden rounded-2xl bg-[#031636] aspect-[4/3] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Gambar Proyek */}
                <img
                  alt={project.title}
                  className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500 ease-out"
                  src={project.image}
                />
                {/* Overlay Gradient Gradual */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#031636] via-[#031636]/40 to-transparent opacity-80 group-hover:opacity-75 transition-opacity duration-300"></div>
                
                {/* Konten Keterangan di Atas Card */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 z-10">
                  <span className="text-[#adc6ff] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase mb-1">{project.category}</span>
                  <h3 className="text-white text-base sm:text-lg font-bold mb-1.5 leading-snug">{project.title}</h3>
                  <p className="text-[#d3e4fe]/80 text-[11px] sm:text-xs mb-3 line-clamp-2">{project.description}</p>
                  <button className="w-fit text-white border border-white/30 hover:border-[#adc6ff] hover:text-[#adc6ff] px-3.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold active:scale-95 transition-all duration-200 cursor-pointer">
                    Lihat Detail
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
                className="w-[295px] sm:w-[370px] shrink-0 group relative overflow-hidden rounded-2xl bg-[#031636] aspect-[4/3] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Gambar Proyek */}
                <img
                  alt={project.title}
                  className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500 ease-out"
                  src={project.image}
                />
                {/* Overlay Gradient Gradual */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#031636] via-[#031636]/40 to-transparent opacity-80 group-hover:opacity-75 transition-opacity duration-300"></div>
                
                {/* Konten Keterangan di Atas Card */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 z-10">
                  <span className="text-[#adc6ff] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase mb-1">{project.category}</span>
                  <h3 className="text-white text-base sm:text-lg font-bold mb-1.5 leading-snug">{project.title}</h3>
                  <p className="text-[#d3e4fe]/80 text-[11px] sm:text-xs mb-3 line-clamp-2">{project.description}</p>
                  <button className="w-fit text-white border border-white/30 hover:border-[#adc6ff] hover:text-[#adc6ff] px-3.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold active:scale-95 transition-all duration-200 cursor-pointer">
                    Lihat Detail
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
