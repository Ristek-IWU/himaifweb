import React from 'react'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const contactInfo = [
    {
      label: 'Email',
      value: 'himaif@iwu.ac.id',
      icon: 'mail',
      borderColor: 'border-l-[#031636]',
    },
    {
      label: 'Telepon',
      value: '+62 812 3456 7890',
      icon: 'call',
      borderColor: 'border-l-[#005bc1]',
    },
    {
      label: 'Alamat',
      value: 'Jl. Prof. Dr. Satrio No. 1, Jakarta Selatan',
      icon: 'location_on',
      borderColor: 'border-l-[#0091ae]',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-[#f0f2f8] dark:bg-gradient-to-br dark:from-[#040d1a] dark:via-[#080f1e] dark:to-[#0a1628] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#005bc1]/10 dark:bg-[#005bc1]/15 blur-[90px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#005bc1]/5 dark:bg-[#60a5fa]/8 blur-[80px] rounded-full pointer-events-none"></div>
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
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 text-5xl sm:text-6xl font-serif font-black text-[#031636]/[0.12] dark:text-[#60a5fa]/[0.06] whitespace-nowrap pointer-events-none select-none tracking-tight">
              Kontak
            </span>
            <div className="relative inline-flex items-center bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-md rounded-xl px-8 py-3 shadow-[0_4px_24px_rgba(0,91,193,0.12)] border-2 border-dashed border-[#005bc1]/40 dark:border-[#60a5fa]/30 transform -rotate-2">
              <h2 className="text-[#031636] dark:text-white text-2xl sm:text-3xl font-serif font-extrabold tracking-tight">
                Mari <span className="text-[#005bc1] dark:text-[#60a5fa]">Berdiskusi</span>
              </h2>
            </div>
          </div>
          <p className="text-[#44474e] dark:text-[#d3e4fe]/70 text-base max-w-xl mx-auto mt-4">
            Punya pertanyaan atau ingin bekerja sama dalam proyek teknologi? Kirimkan pesan Anda melalui formulir ini.
          </p>
        </div>

        {/* Full-Width Gradient Card */}
        <div
          className="relative rounded-3xl border border-[#e5e7eb]/60 dark:border-[#1e3a5f]/40 shadow-[0_8px_40px_rgba(0,91,193,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.3)] overflow-hidden bg-white dark:bg-[#0d1b33]/60"
        >
          {/* Decorative corner pattern */}
          <div
            className="absolute top-0 right-0 w-[300px] h-[300px] opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#031636 1px, transparent 1px)`,
              backgroundSize: '16px 16px'
            }}
          ></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">

            {/* Left: Form Area */}
            <div className="lg:col-span-7 p-8 md:p-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[#031636] dark:text-[#d3e4fe]/80 text-xs font-bold uppercase tracking-wider">Nama Lengkap</label>
                    <input
                      className="w-full px-4 py-3 bg-white/80 dark:bg-[#0d1b33]/60 border-l-[3px] border-l-[#031636] dark:border-l-[#60a5fa] border-y border-y-[#e5e7eb] dark:border-y-[#1e3a5f]/40 border-r border-r-[#e5e7eb] dark:border-r-[#1e3a5f]/40 rounded-r-xl focus:border-l-[#005bc1] focus:border-y-[#005bc1] focus:border-r-[#005bc1] focus:ring-2 focus:ring-[#005bc1]/10 outline-none transition-all duration-200 text-sm text-[#031636] dark:text-[#d3e4fe] placeholder:text-[#44474e]/30 dark:placeholder:text-[#d3e4fe]/20"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[#031636] dark:text-[#d3e4fe]/80 text-xs font-bold uppercase tracking-wider">Email</label>
                    <input
                      className="w-full px-4 py-3 bg-white/80 dark:bg-[#0d1b33]/60 border-l-[3px] border-l-[#005bc1] dark:border-l-[#60a5fa] border-y border-y-[#e5e7eb] dark:border-y-[#1e3a5f]/40 border-r border-r-[#e5e7eb] dark:border-r-[#1e3a5f]/40 rounded-r-xl focus:border-l-[#005bc1] focus:border-y-[#005bc1] focus:border-r-[#005bc1] focus:ring-2 focus:ring-[#005bc1]/10 outline-none transition-all duration-200 text-sm text-[#031636] dark:text-[#d3e4fe] placeholder:text-[#44474e]/30 dark:placeholder:text-[#d3e4fe]/20"
                      placeholder="john@email.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[#031636] dark:text-[#d3e4fe]/80 text-xs font-bold uppercase tracking-wider">Pesan Anda</label>
                  <textarea
                    className="w-full px-4 py-3 bg-white/80 dark:bg-[#0d1b33]/60 border-l-[3px] border-l-[#0091ae] dark:border-l-[#0091ae] border-y border-y-[#e5e7eb] dark:border-y-[#1e3a5f]/40 border-r border-r-[#e5e7eb] dark:border-r-[#1e3a5f]/40 rounded-r-xl focus:border-l-[#005bc1] focus:border-y-[#005bc1] focus:border-r-[#005bc1] focus:ring-2 focus:ring-[#005bc1]/10 outline-none transition-all duration-200 resize-none text-sm text-[#031636] dark:text-[#d3e4fe] placeholder:text-[#44474e]/30 dark:placeholder:text-[#d3e4fe]/20"
                    placeholder="Apa yang ingin Anda bicarakan?"
                    rows="5"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="text-white px-10 py-3.5 rounded-xl text-sm font-bold shadow-[0_4px_20px_rgba(3,22,54,0.25)] hover:shadow-[0_8px_32px_rgba(0,91,193,0.35)] hover:-translate-y-0.5 active:scale-95 active:shadow-[0_2px_8px_rgba(0,91,193,0.2)] transition-all duration-300 cursor-pointer flex items-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #031636 0%, #005bc1 100%)' }}
                >
                  <span>Kirim Pesan</span>
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </form>
            </div>

            {/* Right: Contact Info Floating Badges + Map */}
            <div className="lg:col-span-5 p-8 md:p-10 lg:pl-4 flex flex-col justify-between gap-6">
              {/* Contact Info Floating Badges */}
              <div className="space-y-3">
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className={`bg-white/70 dark:bg-[#0d1b33]/60 backdrop-blur-sm border-l-[3px] ${info.borderColor} dark:border-l-[#60a5fa] border-y border-y-[#e5e7eb]/50 dark:border-y-[#1e3a5f]/40 border-r border-r-[#e5e7eb]/50 dark:border-r-[#1e3a5f]/40 rounded-r-xl p-3.5 pr-4 flex items-center gap-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_20px_rgba(0,91,193,0.1)] hover:translate-x-1 transition-all duration-300 cursor-default`}
                  >
                    <span className="material-symbols-outlined text-[#005bc1] dark:text-[#60a5fa] text-xl shrink-0" style={{fontVariationSettings: "'FILL' 1"}}>{info.icon}</span>
                    <div>
                      <span className="text-[9px] font-extrabold text-[#005bc1]/70 dark:text-[#60a5fa]/70 uppercase tracking-widest">{info.label}</span>
                      <p className="text-[#031636] dark:text-[#d3e4fe] font-semibold text-xs mt-0.5">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Card */}
              <div className="flex-1 min-h-[140px] rounded-2xl overflow-hidden border border-[#e5e7eb]/50 dark:border-[#1e3a5f]/40 shadow-[0_2px_12px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.2)] relative bg-[#d3e4fe] dark:bg-[#0d1b33]">
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <img
                    alt="Map Background"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeemtVn0Ew8YzLxfI1IXMDHdNEaa0x-yaec-kYxZoDxTAnU-ZVc_LM8cDDvV5qAbORjv_GXu6qNKOwzfawLBOm3tjWw3fWOx27hV9Tcw95FFUBEWa4gx7Ac_cfskkB9eR8F1-mmh3wUn8CueLWqvzs39xZULPNHFe41CERSJ2wxw5i0giV2OYTErY5WcKowu72Kieorc5KU55eD9Q5FNGSrxrb8eEXRKUB-kP-0Eh_E4zfEPkNIvSoD-E-jBzGBMJ1cCaqbTs8Pnw"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-1.5">
                  <span className="material-symbols-outlined text-3xl text-[#031636] dark:text-[#60a5fa]" style={{fontVariationSettings: "'FILL' 1, 'wght' 600"}}>location_on</span>
                  <p className="text-[#031636] dark:text-[#d3e4fe] text-sm font-bold">Kampus IWU</p>
                  <a
                    className="inline-block bg-white/90 dark:bg-[#0d1b33]/80 backdrop-blur-sm text-[#031636] dark:text-[#60a5fa] border border-[#e5e7eb]/60 dark:border-[#1e3a5f]/40 px-4 py-1.5 rounded-lg text-[10px] font-bold hover:border-[#005bc1] dark:hover:border-[#60a5fa] hover:text-[#005bc1] dark:hover:text-[#60a5fa] active:scale-95 transition-all duration-200"
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Buka Google Maps
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
