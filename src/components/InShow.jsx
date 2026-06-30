import React, { useState } from 'react'

/**
 * InShow — floating button + popup modal.
 */
export default function InShow() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#005bc1] dark:bg-[#005bc1] text-white px-5 py-3 rounded-full shadow-lg shadow-[#005bc1]/30 hover:shadow-xl hover:shadow-[#005bc1]/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="InShow"
      >
        <span className="material-symbols-outlined text-lg">visibility</span>
        <span className="font-serif font-bold text-sm tracking-wide">InShow</span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false)
          }}
        >
          {/* Modal */}
          <div className="bg-white dark:bg-[#0d1b33] rounded-2xl shadow-2xl dark:shadow-[0_8px_40px_rgba(0,0,0,0.5)] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 w-[90%] max-w-lg max-h-[80vh] overflow-y-auto animate-[scale-in_0.2s_ease-out]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e7eb] dark:border-[#1e3a5f]/40">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#005bc1]/10 dark:bg-[#005bc1]/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg text-[#005bc1] dark:text-[#60a5fa]">visibility</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-[#031636] dark:text-white">InShow</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-slate-800 transition-colors cursor-pointer text-[#44474e] dark:text-[#d3e4fe]/60"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-6 space-y-4">
              <p className="text-sm text-[#44474e] dark:text-[#d3e4fe]/70 leading-relaxed">
                Selamat datang di <strong className="text-[#005bc1] dark:text-[#60a5fa]">InShow</strong> — platform informasi dan showcase untuk HIMAIF SYNAPSE.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#f0f2f8] dark:bg-[#0a1628] rounded-xl p-4 text-center">
                  <span className="material-symbols-outlined text-2xl text-[#005bc1] dark:text-[#60a5fa]">calendar_month</span>
                  <p className="text-xs font-semibold text-[#031636] dark:text-white mt-1">Agenda</p>
                </div>
                <div className="bg-[#f0f2f8] dark:bg-[#0a1628] rounded-xl p-4 text-center">
                  <span className="material-symbols-outlined text-2xl text-[#005bc1] dark:text-[#60a5fa]">campaign</span>
                  <p className="text-xs font-semibold text-[#031636] dark:text-white mt-1">Pengumuman</p>
                </div>
                <div className="bg-[#f0f2f8] dark:bg-[#0a1628] rounded-xl p-4 text-center">
                  <span className="material-symbols-outlined text-2xl text-[#005bc1] dark:text-[#60a5fa]">photo_library</span>
                  <p className="text-xs font-semibold text-[#031636] dark:text-white mt-1">Galeri</p>
                </div>
                <div className="bg-[#f0f2f8] dark:bg-[#0a1628] rounded-xl p-4 text-center">
                  <span className="material-symbols-outlined text-2xl text-[#005bc1] dark:text-[#60a5fa]">description</span>
                  <p className="text-xs font-semibold text-[#031636] dark:text-white mt-1">Dokumen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Keyframes for scale-in animation */}
      <style>{`
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  )
}
