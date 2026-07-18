import React from 'react'

export function ExitConfirmModal({ onConfirm, onCancel }) {
  return (
    <div 
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 backdrop-blur-md animate-[fade-in_0.15s_ease-out]"
      onClick={onCancel}
    >
      <div 
        className="bg-white dark:bg-[#071329] border border-[#c5c6cf] dark:border-[#1e3a5f]/40 w-full max-w-sm rounded-2xl shadow-2xl p-8 text-center space-y-6 animate-[scale-in_0.2s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Warning Icon */}
        <div className="w-16 h-16 mx-auto rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-3xl text-red-500 dark:text-red-400">logout</span>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h4 className="text-[#031636] dark:text-white text-lg font-bold">Konfirmasi Keluar</h4>
          <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">Apakah Anda yakin ingin meninggalkan <span className="text-[#005bc1] dark:text-[#60a5fa] font-semibold">HIMAIF Showcase</span>? Anda akan kembali ke halaman utama website.</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-white py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-red-500/80 hover:bg-red-500 border border-red-500/50 text-white py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">logout</span>
            <span>Ya, Keluar</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export function DraftConfirmModal({ onSave, onDiscard, onCancel }) {
  return (
    <div 
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 backdrop-blur-md animate-[fade-in_0.15s_ease-out]"
      onClick={onCancel}
    >
      <div 
        className="bg-white dark:bg-[#071329] border border-[#c5c6cf] dark:border-[#1e3a5f]/40 w-full max-w-sm rounded-2xl shadow-2xl p-8 text-center space-y-6 animate-[scale-in_0.2s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Warning Icon */}
        <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-3xl text-amber-500">draft</span>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h4 className="text-[#031636] dark:text-white text-lg font-bold">Simpan Draf?</h4>
          <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">Anda belum mengunggah proyek ini. Ingin menyimpan perubahan ke dalam draf terlebih dahulu?</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={onSave}
            className="w-full bg-[#005bc1] hover:bg-[#003d80] text-white py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">edit_note</span>
            <span>Simpan sebagai Draf</span>
          </button>
          
          <div className="flex gap-2">
            <button
              onClick={onDiscard}
              className="flex-1 bg-red-500/10 hover:bg-red-500/20 text-red-600 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer"
            >
              Hapus Perubahan
            </button>
            <button
              onClick={onCancel}
              className="flex-1 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
