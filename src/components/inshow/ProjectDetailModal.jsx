import React from 'react'

export default function ProjectDetailModal({ 
  project, 
  onClose, 
  newComment, 
  onCommentChange, 
  onAddComment, 
  onFilterByTag 
}) {
  if (!project) return null

  return (
    <div 
      className="fixed inset-0 z-55 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-[fade-in_0.15s_ease-out]"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-[#071329] border border-[#c5c6cf] dark:border-[#1e3a5f]/40 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col animate-[scale-in_0.2s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Image Header */}
        <div className="relative h-48 bg-slate-100 dark:bg-slate-900 border-b border-[#c5c6cf]/40 dark:border-[#1e3a5f]/30 flex-shrink-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-90 dark:opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-[#071329] dark:via-transparent dark:to-transparent"></div>
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 dark:bg-[#071329]/80 backdrop-blur-sm border border-[#c5c6cf] dark:border-white/10 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>

          {/* Title Overlay info */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[10px] bg-[#005bc1] border border-[#005bc1]/20 px-2.5 py-0.5 rounded-md text-white font-bold uppercase tracking-wider">
              {project.tags.platform}
            </span>
            <h3 className="text-[#031636] dark:text-white text-lg md:text-xl font-bold mt-1.5 leading-snug">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Metadata Info */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-50 dark:bg-white/5 border border-[#c5c6cf]/40 dark:border-white/5 p-4 rounded-xl">
            <div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-extrabold uppercase tracking-wider block">Pengembang</span>
              <p className="text-xs font-bold text-[#031636] dark:text-white mt-0.5">{project.author}</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial bg-[#005bc1] hover:bg-[#003d80] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">open_in_new</span>
                <span>Live Demo</span>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-200 dark:border-white/10 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm font-bold">code</span>
                <span>Repository</span>
              </a>
            </div>
          </div>

          {/* Interactive Category Tags Chips */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold text-slate-600 dark:text-slate-300 uppercase tracking-widest">Tag Klasifikasi (Klik untuk Filter)</h4>
            <div className="flex flex-wrap gap-2">
              {Object.entries(project.tags).map(([groupKey, value]) => (
                <button
                   key={groupKey}
                   onClick={() => onFilterByTag(groupKey, value)}
                   className="bg-slate-100 hover:bg-[#005bc1]/20 hover:text-[#005bc1] dark:bg-white/5 dark:hover:bg-[#005bc1]/20 dark:hover:text-[#60a5fa] border border-[#c5c6cf] dark:border-white/10 px-3 py-1.5 rounded-xl text-xs text-slate-600 dark:text-slate-300 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="text-[9px] uppercase text-slate-500 font-mono">{groupKey}:</span>
                  <span>{value}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold text-slate-600 dark:text-slate-300 uppercase tracking-widest">Deskripsi Proyek</h4>
            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Linked Code Source Files */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-slate-600 dark:text-slate-300 uppercase tracking-widest">Berkas Proyek yang Dibagikan</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.files.map((file, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-[#c5c6cf]/40 dark:bg-white/5 dark:border-white/5 text-[10px]">
                  <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-base">description</span>
                  <span className="font-mono text-slate-700 dark:text-slate-300 truncate">{file}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Discussion Section (Comments) */}
          <div className="space-y-4 pt-4 border-t border-[#c5c6cf]/65 dark:border-[#1e3a5f]/30">
            <h4 className="text-xs font-extrabold text-slate-600 dark:text-slate-300 uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">forum</span>
              <span>Diskusi & Review ({project.comments.length})</span>
            </h4>

            {/* Comment Input */}
            <form onSubmit={onAddComment} className="flex gap-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => onCommentChange(e.target.value)}
                placeholder="Tulis opini atau pertanyaan Anda..."
                className="flex-1 px-4 py-2 bg-white dark:bg-white/5 border border-[#c5c6cf] dark:border-white/10 rounded-xl text-xs text-[#031636] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#005bc1] dark:focus:border-[#60a5fa] outline-none"
              />
              <button 
                type="submit"
                className="bg-[#005bc1] hover:bg-[#003d80] text-white px-4 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center cursor-pointer"
              >
                Kirim
              </button>
            </form>

            {/* Comments List */}
            {project.comments.length > 0 ? (
              <div className="space-y-3">
                {project.comments.map((comm, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-white/5 p-3.5 rounded-xl border border-[#c5c6cf]/40 dark:border-white/5 space-y-1 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[#031636] dark:text-white">{comm.name}</span>
                      <span className="text-[9px] text-[#005bc1] dark:text-[#60a5fa] font-mono font-bold">Mahasiswa</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{comm.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 text-[10px] italic text-center py-2">Belum ada diskusi. Jadilah yang pertama berkomentar!</p>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
