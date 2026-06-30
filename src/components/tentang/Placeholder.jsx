/**
 * Placeholder — placeholder sementara untuk gambar yang URL-nya
 * sengaja dihapus dan akan diganti nanti.
 *
 * Pemakaian:
 *   <Placeholder label="Foto Ketua" className="aspect-[4/5]" />
 *
 * Cara mengganti: hapus komponen ini dan ganti dengan <img src={...} />
 * memakai asset lokal (import dari src/assets/tentang/...).
 */
export default function Placeholder({ label = 'Foto', className = '', rounded = 'rounded-xl' }) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`relative flex items-center justify-center overflow-hidden border border-dashed border-[#005bc1]/40 dark:border-[#38bdf8]/40 bg-[#005bc1]/5 dark:bg-[#38bdf8]/10 ${rounded} ${className}`}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <span className="material-symbols-outlined text-3xl text-[#005bc1]/60 dark:text-[#38bdf8]/60">
          image
        </span>
        <span className="text-xs font-semibold text-[#005bc1]/70 dark:text-[#38bdf8]/70">
          {label}
        </span>
        <span className="text-[10px] text-[#44474e]/70 dark:text-[#d3e4fe]/50">
          (akan diganti)
        </span>
      </div>
    </div>
  )
}
