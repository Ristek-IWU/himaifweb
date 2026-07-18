import React from 'react'
import { categoryGroups, groupOrder } from './constants'

function AccordionContent({ activeFilters, expandedGroups, showAllTags, onToggleFilter, onToggleGroup, onToggleShowAll }) {
  return (
    <div className="space-y-3">
      {groupOrder.map(groupKey => {
        const group = categoryGroups[groupKey]
        const isExpanded = expandedGroups[groupKey]
        const activeVal = activeFilters[groupKey]
        return (
          <div key={groupKey} className="space-y-1">
            <button onClick={() => onToggleGroup(groupKey)} className="w-full flex items-center justify-between py-2 text-left hover:text-[#005bc1] dark:hover:text-white transition-colors cursor-pointer text-slate-700 dark:text-slate-300">
              <span className="text-xs font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#005bc1] dark:text-[#60a5fa]">{group.icon}</span>
                {group.label}
                {activeVal && <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>}
              </span>
              <span className="material-symbols-outlined text-sm text-slate-400 dark:text-slate-500">{isExpanded ? 'expand_less' : 'expand_more'}</span>
            </button>
            {isExpanded && (
              <div className="pl-6 space-y-1 py-1 border-l border-[#c5c6cf] dark:border-[#1e3a5f]/20 flex flex-col items-start w-full">
                {(showAllTags[groupKey] ? group.tags : group.tags.slice(0, 6)).map(tag => {
                  const isSelected = activeVal === tag.name
                  return (
                    <button key={tag.name} onClick={() => onToggleFilter(groupKey, tag.name)} className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left text-[11px] font-medium transition-all duration-150 cursor-pointer ${isSelected ? 'bg-[#005bc1] text-white font-bold' : 'text-slate-600 dark:text-slate-400 hover:text-[#031636] dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-white/5'}`}>
                      <span className="material-symbols-outlined text-xs shrink-0">{tag.icon || 'label'}</span>
                      <span className="truncate">{tag.name}</span>
                    </button>
                  )
                })}
                {group.tags.length > 6 && (
                  <button onClick={() => onToggleShowAll(groupKey)} className="flex items-center gap-1 text-[10px] font-bold text-[#005bc1] dark:text-[#60a5fa] hover:text-[#031636] dark:hover:text-white px-2.5 py-1 mt-1 cursor-pointer transition-colors w-full text-left">
                    <span className="material-symbols-outlined text-xs shrink-0">{showAllTags[groupKey] ? 'expand_less' : 'expand_more'}</span>
                    <span>{showAllTags[groupKey] ? 'Kurangi' : 'Lihat lebih'}</span>
                  </button>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function Sidebar({ activeTab, onTabChange, isLoggedIn, activeFilters, expandedGroups, showAllTags, hasActiveFilters, onToggleFilter, onToggleGroup, onToggleShowAll, onClearAllFilters, onRequestExit, isMobileFilterOpen, onCloseMobileFilter }) {
  const filterProps = { activeFilters, expandedGroups, showAllTags, onToggleFilter, onToggleGroup, onToggleShowAll }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-white/80 dark:bg-[#071329]/50 border-r border-[#c5c6cf]/60 dark:border-[#1e3a5f]/40 flex-col justify-between shrink-0 p-5 overflow-y-auto scrollbar-none z-10">
        <div className="space-y-5">
          <div className="space-y-1">
            <button onClick={() => onTabChange('showcase')} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${activeTab === 'showcase' ? 'bg-[#005bc1]/10 text-[#005bc1] dark:bg-[#60a5fa]/10 dark:text-[#60a5fa] border-l-4 border-[#005bc1] dark:border-[#60a5fa]' : 'text-slate-600 dark:text-slate-400 hover:text-[#031636] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'}`}>
              <span className="material-symbols-outlined text-base">rocket_launch</span>
              <span>Showcase</span>
            </button>
            <button onClick={() => onTabChange('drive')} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${activeTab === 'drive' ? 'bg-[#005bc1]/10 text-[#005bc1] dark:bg-[#60a5fa]/10 dark:text-[#60a5fa] border-l-4 border-[#005bc1] dark:border-[#60a5fa]' : 'text-slate-600 dark:text-slate-400 hover:text-[#031636] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'}`}>
              <span className="material-symbols-outlined text-base">cloud_queue</span>
              <span>Drive Saya</span>
            </button>
          </div>
          <div className="border-b border-[#c5c6cf]/60 dark:border-[#1e3a5f]/30 my-2"></div>
          {(activeTab === 'showcase' || activeTab === 'upload' || (activeTab === 'drive' && isLoggedIn)) && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#c5c6cf]/60 dark:border-[#1e3a5f]/30">
                <span className="text-xs font-serif font-black text-[#031636] dark:text-white flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">filter_alt</span>
                  Katalog
                </span>
                {hasActiveFilters && (
                  <button onClick={onClearAllFilters} className="text-[10px] font-bold text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300 hover:underline cursor-pointer">Reset</button>
                )}
              </div>
              <AccordionContent {...filterProps} />
            </div>
          )}
        </div>
        <div className="pt-4 border-t border-[#c5c6cf]/60 dark:border-[#1e3a5f]/40 mt-6">
          <button onClick={onRequestExit} className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-red-500/10 border border-slate-200 hover:border-red-500/30 text-slate-700 hover:text-red-600 dark:bg-white/5 dark:hover:bg-red-500/10 dark:border-white/10 dark:hover:border-red-500/30 dark:text-slate-300 dark:hover:text-red-400 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer group">
            <span className="material-symbols-outlined text-sm group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">logout</span>
            <span>Keluar Portal</span>
          </button>
        </div>
      </aside>

      {/* Mobile Drawer */}
      {activeTab === 'showcase' && isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end bg-black/60 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]" onClick={onCloseMobileFilter}>
          <div className="w-80 h-full bg-white dark:bg-[#071329] border-l border-[#c5c6cf]/65 dark:border-[#1e3a5f]/40 p-5 flex flex-col justify-between overflow-y-auto animate-[slide-in-right_0.2s_ease-out]" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#c5c6cf]/65 dark:border-[#1e3a5f]/30">
                <span className="text-sm font-serif font-black text-[#031636] dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">filter_alt</span>
                  Filter Kategori
                </span>
                <button onClick={onCloseMobileFilter} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-[#031636] dark:hover:text-white cursor-pointer">
                  <span className="material-symbols-outlined text-base">close</span>
                </button>
              </div>
              <div className="space-y-1"><AccordionContent {...filterProps} /></div>
            </div>
            <div className="pt-4 border-t border-[#c5c6cf]/65 dark:border-[#1e3a5f]/30 space-y-2 mt-6">
              {hasActiveFilters && (
                <button onClick={onClearAllFilters} className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/20 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer">Hapus Semua Filter</button>
              )}
              <button onClick={onCloseMobileFilter} className="w-full bg-[#005bc1] hover:bg-[#003d80] text-white py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer">Terapkan Filter</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
