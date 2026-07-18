import React from 'react'

export default function ShowcaseTab({
  filteredProjects,
  activeFilters,
  hasActiveFilters,
  onSelectProject,
  onUpvote,
  onToggleFilter,
  onClearAllFilters,
  onTabChange,
  activeTab,
  setIsMobileFilterOpen
}) {
  return (
    <div className="space-y-6">
      
      {/* Mobile Actions & Active Filters Wrapper */}
      <div className="space-y-4">
        {/* Mobile Tab Switcher & Filter Button */}
        <div className="lg:hidden space-y-3">
          {/* Mobile Tab Switcher */}
          <div className="flex bg-slate-200/50 dark:bg-white/5 p-1 rounded-xl border border-slate-200/30 dark:border-white/5">
            <button
              onClick={() => onTabChange('showcase')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'showcase'
                  ? 'bg-[#005bc1] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <span className="material-symbols-outlined text-base">rocket_launch</span>
              <span>Showcase</span>
            </button>
            <button
              onClick={() => onTabChange('drive')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'drive'
                  ? 'bg-[#005bc1] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <span className="material-symbols-outlined text-base">cloud_queue</span>
              <span>Drive</span>
            </button>
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="w-full flex items-center justify-center gap-2 bg-white dark:bg-white/5 border border-[#c5c6cf] dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-[#031636] dark:text-white py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">filter_alt</span>
            <span>Filter Kategori ({Object.values(activeFilters).filter(Boolean).length})</span>
          </button>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 bg-white/60 dark:bg-[#071329]/30 border border-[#c5c6cf]/65 dark:border-[#1e3a5f]/20 p-3 rounded-xl">
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-extrabold uppercase tracking-wider mr-1">Filter Aktif:</span>
            {Object.entries(activeFilters).map(([key, val]) => {
              if (!val) return null
              return (
                <div 
                  key={key} 
                  className="flex items-center gap-1.5 bg-[#005bc1]/10 border border-[#005bc1]/20 dark:bg-[#005bc1]/20 dark:border-[#005bc1]/35 px-2.5 py-1 rounded-lg text-[10px] font-bold text-[#005bc1] dark:text-[#60a5fa]"
                >
                  <span className="capitalize text-slate-500 dark:text-slate-400">{key}:</span>
                  <span>{val}</span>
                  <button 
                    onClick={() => onToggleFilter(key, val)}
                    className="material-symbols-outlined text-xs text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-white font-bold ml-0.5 cursor-pointer"
                  >
                    close
                  </button>
                </div>
              )
            })}
            <button
              onClick={onClearAllFilters}
              className="text-[10px] font-bold text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300 pl-1 cursor-pointer"
            >
              Hapus Semua
            </button>
          </div>
        )}
      </div>

      {/* Grid Listing */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-12">
          {filteredProjects.map(proj => (
            <article 
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              className="group bg-white dark:bg-[#071329]/60 border border-[#c5c6cf]/65 dark:border-[#1e3a5f]/30 hover:border-[#005bc1]/50 dark:hover:border-[#60a5fa]/50 rounded-2xl overflow-hidden shadow-md dark:shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl flex flex-col justify-between cursor-pointer"
            >
              {/* Image Thumbnail */}
              <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-[#c5c6cf]/40 dark:border-[#1e3a5f]/20">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1 max-w-[85%]">
                  <span className="bg-[#031636]/90 dark:bg-[#031636]/95 backdrop-blur-sm border border-[#60a5fa]/30 px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider text-[#60a5fa]">
                    {proj.tags.platform}
                  </span>
                  <span className="bg-[#031636]/90 dark:bg-[#031636]/95 backdrop-blur-sm border border-[#38bdf8]/30 px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider text-[#38bdf8]">
                    {proj.tags.sector}
                  </span>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-bold text-[#031636] dark:text-white text-base group-hover:text-[#005bc1] dark:group-hover:text-[#60a5fa] transition-colors leading-tight truncate">
                      {proj.title}
                    </h4>
                    <button
                      onClick={(e) => onUpvote(proj.id, e)}
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-black transition-all duration-200 cursor-pointer ${
                        proj.hasUpvoted
                          ? 'bg-[#005bc1]/10 border-[#005bc1] text-[#005bc1]'
                          : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700 hover:text-[#031636] dark:bg-white/5 dark:border-white/10 dark:text-slate-300 dark:hover:text-white'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                      <span>{proj.upvotes}</span>
                    </button>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-xs line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Tiny tag list at bottom of card */}
                <div className="flex flex-wrap gap-1 pt-1">
                  <span className="text-[9px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 px-2 py-0.5 rounded text-slate-500 dark:text-slate-400 font-mono">{proj.tags.language}</span>
                  <span className="text-[9px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 px-2 py-0.5 rounded text-slate-500 dark:text-slate-400 font-mono">{proj.tags.framework}</span>
                  <span className="text-[9px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 px-2 py-0.5 rounded text-slate-500 dark:text-slate-400 font-mono">{proj.tags.infrastructure}</span>
                </div>

                {/* Author & File Info */}
                <div className="flex items-center justify-between pt-3 border-t border-[#c5c6cf]/65 dark:border-[#1e3a5f]/20">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">person</span>
                    {proj.author}
                  </span>
                  <span className="text-[10px] text-[#005bc1] dark:text-[#60a5fa] font-mono flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">folder_zip</span>
                    {proj.files.length} Files
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-[#071329]/30 rounded-2xl border border-dashed border-[#c5c6cf] dark:border-[#1e3a5f]/40 space-y-3">
          <span className="material-symbols-outlined text-4xl text-slate-400 dark:text-slate-500">search_off</span>
          <p className="text-slate-600 dark:text-slate-400 text-xs">Tidak ditemukan proyek yang cocok dengan kriteria filter aktif.</p>
          <button
            onClick={onClearAllFilters}
            className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10 px-4 py-2 rounded-xl text-xs cursor-pointer"
          >
            Bersihkan Semua Filter
          </button>
        </div>
      )}

    </div>
  )
}
