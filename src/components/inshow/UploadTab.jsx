import React, { useMemo } from 'react'
import { categoryGroups } from './constants'

export default function UploadTab({
  handleCloseUploadModal,
  editingDraftId,
  drafts,
  isDraftDropdownOpen,
  setIsDraftDropdownOpen,
  handleLoadDraft,
  handleSaveDraft,
  justSavedDraft,
  formTitle,
  setFormTitle,
  formDesc,
  setFormDesc,
  formDemo,
  setFormDemo,
  formGithub,
  setFormGithub,
  formFiles,
  setFormFiles,
  formTags,
  tagInput,
  setTagInput,
  isTagSuggestionsOpen,
  setIsTagSuggestionsOpen,
  handleAddTag,
  handleRemoveTag,
  handleTagInputKeyDown,
  handleUploadSubmit
}) {

  // Autocomplete tag suggestions list from our global categories data
  const allTagSuggestions = useMemo(() => {
    const list = []
    Object.values(categoryGroups).forEach(group => {
      group.tags.forEach(tag => {
        if (!list.some(item => item.name.toLowerCase() === tag.name.toLowerCase())) {
          list.push({ name: tag.name, icon: tag.icon })
        }
      })
    })
    return list
  }, [])

  return (
    <div className="space-y-6 max-w-3xl mx-auto pb-12 animate-[fade-in_0.2s_ease-out]">
      
      {/* Header Form */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#c5c6cf]/60 dark:border-[#1e3a5f]/30">
        <div className="flex items-center gap-3">
          <button
            onClick={handleCloseUploadModal}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white dark:bg-white/5 border border-[#c5c6cf] dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
            title="Kembali ke Dashboard"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
          </button>
          <div>
            <h3 className="text-base font-serif font-black text-[#031636] dark:text-white flex items-center gap-2">
              {editingDraftId ? 'Lanjutkan Edit Draf' : 'Unggah Proyek Baru'}
            </h3>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">
              {editingDraftId ? 'Perbarui informasi draf proyek Anda' : 'Bagikan karya terbaikmu ke showcase portal'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-center relative">
          {/* Draft Dropdown Button (if there are saved drafts) */}
          {drafts.length > 0 && (
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDraftDropdownOpen(!isDraftDropdownOpen)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xs">folder_open</span>
                <span>Pilih Draf ({drafts.length})</span>
                <span className="material-symbols-outlined text-xs">
                  {isDraftDropdownOpen ? 'expand_less' : 'expand_more'}
                </span>
              </button>

              {isDraftDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-64 bg-white dark:bg-[#071329] border border-[#c5c6cf] dark:border-[#1e3a5f]/40 rounded-xl shadow-xl max-h-48 overflow-y-auto z-20 divide-y divide-[#c5c6cf]/20 dark:divide-[#1e3a5f]/20">
                  {drafts.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => handleLoadDraft(d)}
                      className="w-full px-4 py-2 text-left hover:bg-[#005bc1]/5 dark:hover:bg-white/5 text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <span className="truncate font-semibold max-w-[140px]">{d.title || '(Tanpa Judul)'}</span>
                      <span className="text-[8px] text-slate-400 shrink-0 font-mono">{d.updatedAt.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Save Draft Button */}
          <button
            type="button"
            onClick={handleSaveDraft}
            disabled={!formTitle.trim() && !formDesc.trim()}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
              justSavedDraft
                ? 'bg-emerald-500 text-white'
                : 'bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 hover:bg-amber-500/20'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <span className="material-symbols-outlined text-xs">
              {justSavedDraft ? 'check_circle' : 'edit_note'}
            </span>
            <span>{justSavedDraft ? 'Tersimpan!' : 'Simpan Draf'}</span>
          </button>
        </div>
      </div>

      {/* Form Body */}
      <form onSubmit={handleUploadSubmit} className="space-y-6">
        {/* Section 1: Informasi Dasar */}
        <div className="bg-white dark:bg-[#071329]/60 border border-[#c5c6cf]/65 dark:border-[#1e3a5f]/30 p-6 rounded-2xl space-y-4 shadow-sm">
          <h4 className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest pb-2 border-b border-[#c5c6cf]/20 dark:border-white/5">
            Informasi Dasar
          </h4>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Judul Proyek <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              placeholder="Contoh: Portal Akademik HIMAIF"
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-[#c5c6cf] dark:border-white/10 rounded-xl text-xs text-[#031636] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#005bc1] dark:focus:border-[#60a5fa] outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Deskripsi Singkat Proyek <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={4}
              value={formDesc}
              onChange={(e) => setFormDesc(e.target.value)}
              placeholder="Jelaskan fitur utama, teknologi yang digunakan, serta tujuan dari pembuatan proyek ini..."
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-[#c5c6cf] dark:border-white/10 rounded-xl text-xs text-[#031636] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#005bc1] dark:focus:border-[#60a5fa] outline-none resize-none"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Daftar File Utama Kode
              </label>
              <span className="text-[10px] text-slate-400 font-mono">Pisahkan dengan koma (,)</span>
            </div>
            <input
              type="text"
              value={formFiles}
              onChange={(e) => setFormFiles(e.target.value)}
              placeholder="App.jsx, index.css, README.md"
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-[#c5c6cf] dark:border-white/10 rounded-xl text-xs text-[#031636] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#005bc1] dark:focus:border-[#60a5fa] outline-none"
            />
          </div>
        </div>

        {/* Section 2: Tautan Proyek */}
        <div className="bg-white dark:bg-[#071329]/60 border border-[#c5c6cf]/65 dark:border-[#1e3a5f]/30 p-6 rounded-2xl space-y-4 shadow-sm">
          <h4 className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest pb-2 border-b border-[#c5c6cf]/20 dark:border-white/5">
            Tautan Proyek
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Tautan Demo Live (Opsional)
              </label>
              <input
                type="url"
                value={formDemo}
                onChange={(e) => setFormDemo(e.target.value)}
                placeholder="https://demo.proyekmu.com"
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-[#c5c6cf] dark:border-white/10 rounded-xl text-xs text-[#031636] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#005bc1] dark:focus:border-[#60a5fa] outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Tautan Repositori GitHub (Opsional)
              </label>
              <input
                type="url"
                value={formGithub}
                onChange={(e) => setFormGithub(e.target.value)}
                placeholder="https://github.com/username/repo"
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-[#c5c6cf] dark:border-white/10 rounded-xl text-xs text-[#031636] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#005bc1] dark:focus:border-[#60a5fa] outline-none"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Tag Klasifikasi */}
        <div className="bg-white dark:bg-[#071329]/60 border border-[#c5c6cf]/65 dark:border-[#1e3a5f]/30 p-6 rounded-2xl space-y-4 shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-[#c5c6cf]/20 dark:border-white/5">
            <h4 className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Tag Klasifikasi
            </h4>
            <span className="text-[9px] bg-slate-100 dark:bg-white/10 px-2 py-0.5 rounded text-slate-500 dark:text-slate-400 font-mono">
              {formTags.length} Terpilih
            </span>
          </div>

          {/* Interactive Tags Selector */}
          <div className="space-y-1.5 relative">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Tambah Tag Proyek
              </label>
              <span className="text-[10px] text-slate-400 font-mono">Tekan Enter atau gunakan koma (,)</span>
            </div>

            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-sm">
                sell
              </span>
              <input
                type="text"
                value={tagInput}
                onChange={(e) => {
                  const val = e.target.value
                  if (val.endsWith(',')) {
                    handleAddTag(val.slice(0, -1))
                  } else {
                    setTagInput(val)
                  }
                }}
                onKeyDown={handleTagInputKeyDown}
                placeholder="Ketik tag dan tekan Enter..."
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-[#c5c6cf] dark:border-white/10 rounded-xl text-xs text-[#031636] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#005bc1] dark:focus:border-[#60a5fa] outline-none"
              />
            </div>

            {/* Google-like Suggestion Dropdown when >= 2 letters are typed */}
            {tagInput.trim().length >= 2 && (() => {
              const query = tagInput.trim().toLowerCase()
              const matches = allTagSuggestions.filter(tag => 
                tag.name.toLowerCase().includes(query) &&
                !formTags.some(t => t.name.toLowerCase() === tag.name.toLowerCase())
              )

              if (matches.length === 0) return null

              return (
                <div className="absolute left-0 right-0 top-full mt-1 bg-white dark:bg-[#071329] border border-[#c5c6cf] dark:border-[#1e3a5f]/40 rounded-xl shadow-xl max-h-48 overflow-y-auto z-20 divide-y divide-[#c5c6cf]/10 dark:divide-[#1e3a5f]/15">
                  {matches.slice(0, 5).map(tag => (
                    <button
                      key={tag.name}
                      type="button"
                      onClick={() => handleAddTag(tag.name)}
                      className="w-full px-4 py-2.5 text-left hover:bg-[#005bc1]/5 dark:hover:bg-white/5 text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <span className="material-symbols-outlined text-xs text-slate-400 dark:text-slate-500">
                        {tag.icon || 'sell'}
                      </span>
                      <span className="font-semibold">{tag.name}</span>
                    </button>
                  ))}
                </div>
              )
            })()}
          </div>

          {/* Active selected tags - horizontal chips */}
          {formTags.length > 0 && (
            <div className="pt-2">
              <label className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-2">
                Tag Aktif
              </label>
              <div className="flex flex-wrap gap-2">
                {formTags.map((tag) => (
                  <div
                    key={tag.name}
                    className="inline-flex items-center gap-1.5 bg-[#005bc1]/8 dark:bg-[#60a5fa]/10 border border-[#005bc1]/20 dark:border-[#60a5fa]/20 pl-2.5 pr-1.5 py-1 rounded-full transition-all group"
                  >
                    <span className="material-symbols-outlined text-xs text-[#005bc1] dark:text-[#60a5fa]">
                      {tag.icon || 'sell'}
                    </span>
                    <span className="text-[11px] font-semibold text-[#031636] dark:text-slate-200">
                      {tag.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag.name)}
                      className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-red-500/15 text-slate-400 hover:text-red-500 transition-colors cursor-pointer ml-0.5"
                    >
                      <span className="material-symbols-outlined text-[10px]">close</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Submit Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#c5c6cf]/30 dark:border-[#1e3a5f]/20">
          <button
            type="button"
            onClick={handleCloseUploadModal}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-200 dark:border-white/10 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer"
          >
            Batal
          </button>
          <button
            type="submit"
            className="bg-[#005bc1] hover:bg-[#003d80] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-md shadow-[#005bc1]/20"
          >
            <span className="material-symbols-outlined text-xs font-bold">cloud_upload</span>
            <span>Unggah Proyek</span>
          </button>
        </div>
      </form>
    </div>
  )
}
