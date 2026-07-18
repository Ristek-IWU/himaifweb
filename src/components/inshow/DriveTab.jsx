import React from 'react'

export default function DriveTab({
  activeTab,
  onTabChange,
  isLoggedIn,
  handleCreateClick,
  drafts,
  handleDeleteDraft,
  handleLoadDraft,
  driveFiles,
  toggleFilePrivacy,
  handleLogin,
  handleLoginDemo,
  loginEmail,
  setLoginEmail,
  loginPassword,
  setLoginPassword
}) {
  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      
      {/* Mobile Tab Switcher */}
      <div className="lg:hidden flex bg-slate-200/50 dark:bg-white/5 p-1 rounded-xl border border-slate-200/30 dark:border-white/5">
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
      
      {isLoggedIn ? (
        // LOGGED IN DASHBOARD VIEW
        <div className="space-y-6">
          
          {/* Drive Header / Quick Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/70 dark:bg-[#071329]/50 border border-[#c5c6cf]/60 dark:border-[#1e3a5f]/30 p-5 rounded-2xl">
            <div className="space-y-1">
              <h4 className="text-[#031636] dark:text-white text-base font-bold">Halo, Ervan!</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">Selamat datang kembali di Showcase HIMAIF Anda. Unggah proyek barumu ke Showcase.</p>
            </div>
            
            <button
              onClick={handleCreateClick}
              className="bg-[#005bc1] hover:bg-[#003d80] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm font-bold">upload</span>
              <span>Unggah Proyek Baru</span>
            </button>
          </div>

          {/* Riwayat Draf Proyek */}
          {drafts.length > 0 && (
            <div className="space-y-3 animate-[fade-in_0.2s_ease-out]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-amber-500">edit_note</span>
                <h4 className="font-serif font-black text-[#031636] dark:text-white text-sm">Riwayat Draf Proyek ({drafts.length})</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {drafts.map(draft => (
                  <div
                    key={draft.id}
                    className="bg-white/60 dark:bg-[#071329]/40 border border-[#c5c6cf]/65 dark:border-[#1e3a5f]/20 hover:border-[#005bc1]/35 dark:hover:border-[#60a5fa]/35 p-4 rounded-xl flex flex-col justify-between gap-3 shadow-sm transition-all duration-300"
                  >
                    <div className="space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h5 className="font-bold text-xs text-[#031636] dark:text-white truncate">
                          {draft.title || '(Tanpa Judul)'}
                        </h5>
                        <span className="text-[8px] bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">Draf</span>
                      </div>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {draft.description || 'Tidak ada deskripsi draf.'}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#c5c6cf]/30 dark:border-[#1e3a5f]/10">
                      <span className="text-[9px] text-slate-400 font-mono">Diedit: {draft.updatedAt}</span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={(e) => handleDeleteDraft(draft.id, e)}
                          className="text-[10px] text-red-500 hover:text-red-600 font-bold px-2 py-1 rounded hover:bg-red-500/10 cursor-pointer transition-colors"
                        >
                          Hapus
                        </button>
                        <button
                          onClick={() => handleLoadDraft(draft)}
                          className="text-[10px] bg-[#005bc1] hover:bg-[#003d80] text-white font-bold px-3 py-1 rounded-lg cursor-pointer transition-colors"
                        >
                          Lanjutkan
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* File Grid Table */}
          <div className="bg-white/40 dark:bg-[#071329]/30 border border-[#c5c6cf]/65 dark:border-[#1e3a5f]/30 rounded-2xl shadow-sm dark:shadow-none overflow-x-auto">
            <div className="min-w-[680px]">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-[#c5c6cf]/65 dark:border-[#1e3a5f]/40 bg-slate-100 dark:bg-[#071329]/50 text-slate-500 dark:text-slate-400 text-[10px] font-extrabold uppercase tracking-wider">
                <div className="col-span-5 flex items-center">Nama File / Folder</div>
                <div className="col-span-2">Ukuran</div>
                <div className="col-span-2">Tanggal</div>
                <div className="col-span-3 text-right">Status Showcase</div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-[#c5c6cf]/30 dark:divide-[#1e3a5f]/30">
                {driveFiles.map(file => (
                  <div 
                    key={file.id} 
                    className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-[#005bc1]/5 dark:hover:bg-white/5 transition-all duration-200 text-xs"
                  >
                    {/* File name with specific icons */}
                    <div className="col-span-5 flex items-center gap-3">
                      <span className={`material-symbols-outlined text-xl ${
                        file.type === 'folder' ? 'text-amber-400' : 
                        file.type === 'zip' ? 'text-sky-400' : 
                        file.type === 'image' ? 'text-emerald-400' : 'text-slate-400'
                      }`}>
                        {file.type === 'folder' ? 'folder' : 
                         file.type === 'zip' ? 'folder_zip' : 
                         file.type === 'image' ? 'image' : 'description'}
                      </span>
                      <span className="font-semibold text-[#031636] dark:text-white truncate">{file.name}</span>
                    </div>

                    <div className="col-span-2 text-slate-600 dark:text-slate-400 font-mono">{file.size}</div>
                    <div className="col-span-2 text-slate-600 dark:text-slate-400 font-mono">{file.date}</div>
                    
                    {/* Showcase publish toggle */}
                    <div className="col-span-3 flex justify-end">
                      {file.type === 'folder' ? (
                        <span className="text-[10px] text-slate-500 font-mono italic">Not Shareable</span>
                      ) : (
                        <button
                          onClick={() => toggleFilePrivacy(file.id, file.name)}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider uppercase border transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                            file.isPublic
                              ? 'bg-emerald-500/10 border-emerald-500/35 text-emerald-600 dark:text-emerald-400'
                              : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-600 hover:text-slate-700 dark:bg-white/5 dark:border-white/10 dark:text-slate-400 dark:hover:border-white/20 dark:hover:text-white'
                          }`}
                        >
                          <span className="material-symbols-outlined text-xs">
                            {file.isPublic ? 'visibility' : 'visibility_off'}
                          </span>
                          <span>{file.isPublic ? 'Public' : 'Private'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      ) : (
        // LOG IN PORTAL VIEW (GLASSMORPHIC BOX)
        <div className="max-w-md mx-auto my-8 bg-white dark:bg-[#071329]/60 border border-[#c5c6cf]/60 dark:border-[#1e3a5f]/40 p-8 rounded-2xl shadow-xl space-y-6">
          
          <div className="text-center space-y-2">
            <span className="material-symbols-outlined text-4xl text-[#005bc1] dark:text-[#60a5fa]">key</span>
            <h4 className="text-[#031636] dark:text-white text-lg font-bold">Login Mahasiswa IWU</h4>
            <p className="text-slate-600 dark:text-slate-400 text-xs">Gunakan Akun Akademik Anda untuk Mengakses HIMAIF Showcase.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Email Kampus</label>
              <input
                type="email"
                required
                placeholder="nim@student.iwu.ac.id"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-[#c5c6cf] dark:border-white/10 rounded-xl text-xs text-[#031636] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#005bc1] dark:focus:border-[#60a5fa] outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Password</label>
              <input
                type="password"
                required
                placeholder="Password Portal"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-[#c5c6cf] dark:border-white/10 rounded-xl text-xs text-[#031636] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#005bc1] dark:focus:border-[#60a5fa] outline-none"
              />
            </div>

            <div className="pt-2 space-y-3">
              <button
                type="submit"
                className="w-full bg-[#005bc1] hover:bg-[#003d80] text-white py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer"
              >
                Masuk Akun
              </button>
              
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-[#c5c6cf]/30 dark:border-white/5"></div>
                <span className="flex-shrink mx-4 text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">Atau</span>
                <div className="flex-grow border-t border-[#c5c6cf]/30 dark:border-white/5"></div>
              </div>

              <button
                type="button"
                onClick={handleLoginDemo}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-[#c5c6cf] dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-200 dark:border-white/10 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">visibility</span>
                <span>Coba Mode Demo (Instant Access)</span>
              </button>
            </div>
          </form>

        </div>
      )}

    </div>
  )
}
