import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { initialProjects } from '../inshow/constants'
import { getActivityLogs, clearActivityLogs, getTodayActivityCount, formatTimestamp, ACTIVITY_CONFIG, ACTIVITY_TYPES } from '../../utils/activityLogger'
import WebsiteAnalytics from './WebsiteAnalytics'

export default function AdminDashboard({ onLogout }) {
  const { t } = useLanguage()
  const [activeSubTab, setActiveSubTab] = useState('overview')
  const [toastMessage, setToastMessage] = useState('')

  // 1. PROFILES MANAGEMENT (for all sections with photo: Kaprodi + BPH & Kadiv)
  const [profiles, setProfiles] = useState(() => {
    const defaultData = {
      kaprodi: {
        name: "Dr. Ir. H. Ahmad Fauzi, M.T.",
        role: "Kepala Program Studi Informatika",
        quote: "Inovasi teknologi dimulai dari keberanian untuk mencoba hal baru dan berkolaborasi tanpa batas.",
        desc: "Program Studi Informatika IWU membekali mahasiswa dengan keterampilan abad ke-21 melalui kurikulum praktis dan berstandard industri.",
        image: ""
      },
      ketua: {
        name: "Okta Ramdhan",
        role: "Ketua Himpunan",
        image: ""
      },
      wakil: {
        name: "Wandi H",
        role: "Wakil Ketua Himpunan",
        image: ""
      },
      sekjen: {
        name: "Sinsin M",
        role: "Sekretaris Jenderal",
        image: ""
      },
      treasurer1: {
        name: "Sarah N",
        role: "Bendahara 1",
        image: ""
      },
      treasurerGen: {
        name: "Nazril A",
        role: "Bendahara Umum",
        image: ""
      },
      secretary: {
        name: "Audia",
        role: "Sekretaris",
        image: ""
      },
      risetin: {
        name: "Ryan Rahmabakti",
        role: "Kadiv Riset & Inovasi",
        image: ""
      },
      eksternal: {
        name: "Anomali MU",
        role: "Kadiv Eksternal",
        image: ""
      },
      orbis: {
        name: "M Reiki A",
        role: "Kadiv Organisasi & Bisnis",
        image: ""
      },
      edubakat: {
        name: "Tia Setiawan",
        role: "Kadiv Edukasi & Bakat",
        image: ""
      },
      pdd: {
        name: "Dendi F RS",
        role: "Kadiv PDD",
        image: ""
      }
    }

    const saved = localStorage.getItem('admin_hima_profiles')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        let modified = false
        Object.keys(parsed).forEach(k => {
          if (parsed[k]?.image && (parsed[k].image.includes('unsplash.com') || parsed[k].image.includes('images.unsplash'))) {
            parsed[k].image = ''
            modified = true
          }
        })
        if (modified) {
          localStorage.setItem('admin_hima_profiles', JSON.stringify(parsed))
        }
        return { ...defaultData, ...parsed }
      } catch (e) {}
    }
    
    return defaultData
  })

  useEffect(() => {
    localStorage.setItem('admin_hima_profiles', JSON.stringify(profiles))
  }, [profiles])

  const [selectedProfileKey, setSelectedProfileKey] = useState('kaprodi')
  const currentProfile = profiles[selectedProfileKey]

  const updateProfileField = (field, val) => {
    setProfiles(prev => ({
      ...prev,
      [selectedProfileKey]: {
        ...prev[selectedProfileKey],
        [field]: val
      }
    }))
  }

  // Helper function to read file upload as base64 string
  const handleFileUpload = (e, callback) => {
    const file = e.target.files[0]
    if (!file) return

    // Warn if file size is > 1.5MB to save localStorage quota
    if (file.size > 1500000) {
      showToast("Ukuran file terlalu besar! Gunakan gambar di bawah 1.5 MB.")
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      callback(event.target.result)
      showToast("Foto berhasil diunggah!")
    }
    reader.readAsDataURL(file)
  }

  // 2. DIVISION MEMBERS MANAGEMENT
  const [divisionMembers, setDivisionMembers] = useState(() => {
    const saved = localStorage.getItem('admin_division_members')
    if (saved) return JSON.parse(saved)
    return {
      risetin: ['Ervan Rohiman'],
      eksternal: ['King Kamal'],
      orbis: ['Dita Ramdhanti', 'Mya'],
      edubakat: ['Fajli Andika', 'Evan Ezar', 'Vio'],
      pdd: ['Revan S', 'Reyhan H']
    }
  })

  useEffect(() => {
    localStorage.setItem('admin_division_members', JSON.stringify(divisionMembers))
  }, [divisionMembers])

  const [selectedDivKey, setSelectedDivKey] = useState('risetin')
  const [newMemberName, setNewMemberName] = useState('')

  const handleAddMember = () => {
    if (!newMemberName.trim()) return
    setDivisionMembers(prev => ({
      ...prev,
      [selectedDivKey]: [...(prev[selectedDivKey] || []), newMemberName.trim()]
    }))
    showToast(`Berhasil menambahkan ${newMemberName} ke Divisi!`)
    setNewMemberName('')
  }

  const handleRemoveMember = (idx) => {
    const currentList = divisionMembers[selectedDivKey] || []
    const removedName = currentList[idx]
    const updated = currentList.filter((_, i) => i !== idx)
    setDivisionMembers(prev => ({
      ...prev,
      [selectedDivKey]: updated
    }))
    showToast(`Berhasil menghapus ${removedName} dari Divisi.`)
  }

  // 2.1 DIVISION MEMBER SOCIALS
  const [divisionMemberSocials, setDivisionMemberSocials] = useState(() => {
    const saved = localStorage.getItem('admin_division_member_socials')
    if (saved) return JSON.parse(saved)
    return {}
  })

  useEffect(() => {
    localStorage.setItem('admin_division_member_socials', JSON.stringify(divisionMemberSocials))
  }, [divisionMemberSocials])

  // 3. ABOUT GALLERY PHOTOS
  const [aboutImages, setAboutImages] = useState(() => {
    const saved = localStorage.getItem('admin_about_images')
    if (saved) return JSON.parse(saved)
    return {
      img1: "",
      img2: "",
      img3: ""
    }
  })

  useEffect(() => {
    localStorage.setItem('admin_about_images', JSON.stringify(aboutImages))
  }, [aboutImages])

  const [selectedAboutImgSlot, setSelectedAboutImgSlot] = useState('img1')

  // 3.1 CORE VALUES MANAGEMENT (NILAI INTI)
  const [coreValues, setCoreValues] = useState(() => {
    const saved = localStorage.getItem('admin_core_values')
    if (saved) return JSON.parse(saved)
    return ['Inovatif', 'Kreatif', 'Progresif', 'Inklusif']
  })

  useEffect(() => {
    localStorage.setItem('admin_core_values', JSON.stringify(coreValues))
  }, [coreValues])

  const updateCoreValueField = (index, value) => {
    setCoreValues(prev => {
      const updated = [...prev]
      updated[index] = value
      return updated
    })
  }

  // 4. VISI & MISI MANAGEMENT
  const [visionData, setVisionData] = useState(() => {
    const saved = localStorage.getItem('admin_vision_data')
    if (saved) return JSON.parse(saved)
    return {
      vision: "Menjadi organisasi mahasiswa yang progresif, inklusif, dan unggul dalam pengembangan kompetensi teknologi informasi berbasis pemberdayaan perempuan di tingkat internasional.",
      missions: [
        { title: "Akademik", desc: "Menyelenggarakan program pelatihan intensif untuk mengasah skill teknis di bidang AI, Data Science, dan Software Dev." },
        { title: "Kolaborasi", desc: "Membangun jejaring dengan industri dan komunitas teknologi global untuk peluang karir anggota." },
        { title: "Inovasi", desc: "Mendorong penciptaan solusi digital kreatif yang mampu menjawab tantangan industri 4.0." },
        { title: "Inklusivitas", desc: "Memperkuat peran perempuan dalam ekosistem teknologi melalui lingkungan belajar yang mendukung." }
      ]
    }
  })

  useEffect(() => {
    localStorage.setItem('admin_vision_data', JSON.stringify(visionData))
  }, [visionData])

  const updateVisionField = (field, val) => {
    setVisionData(prev => ({
      ...prev,
      [field]: val
    }))
  }

  const updateMissionField = (index, field, val) => {
    setVisionData(prev => {
      const updatedMissions = [...prev.missions]
      updatedMissions[index] = {
        ...updatedMissions[index],
        [field]: val
      }
      return {
        ...prev,
        missions: updatedMissions
      }
    })
  }

  // 5. PROGRAM STUDI MANAGEMENT
  const [prodiData, setProdiData] = useState(() => {
    const saved = localStorage.getItem('admin_prodi_data')
    if (saved) return JSON.parse(saved)
    return {
      desc: "Program Studi Informatika IWU membekali mahasiswa dengan keterampilan teknologi terdepan demi menjawab tantangan industri digital modern.",
      domains: [
        { title: "Software Engineering", description: "Rekayasa perangkat lunak modern untuk ekosistem web, mobile, dan cloud." },
        { title: "Kecerdasan Buatan (AI)", description: "Implementasi Machine Learning, Deep Learning, dan analisis data cerdas." },
        { title: "Keamanan Siber", description: "Proteksi sistem digital, audit keamanan kode, dan manajemen risiko siber." }
      ],
      stats: [
        { value: "98%", label: "Tingkat Keterserapan Kerja" },
        { value: "20+", "label": "Kerjasama Perusahaan IT" }
      ]
    }
  })

  useEffect(() => {
    localStorage.setItem('admin_prodi_data', JSON.stringify(prodiData))
  }, [prodiData])

  const updateProdiField = (field, val) => {
    setProdiData(prev => ({ ...prev, [field]: val }))
  }

  const updateProdiDomainField = (index, field, val) => {
    setProdiData(prev => {
      const updatedDomains = [...prev.domains]
      updatedDomains[index] = {
        ...updatedDomains[index],
        [field]: val
      }
      return { ...prev, domains: updatedDomains }
    })
  }

  const updateProdiStatField = (index, field, val) => {
    setProdiData(prev => {
      const updatedStats = [...prev.stats]
      updatedStats[index] = {
        ...updatedStats[index],
        [field]: val
      }
      return { ...prev, stats: updatedStats }
    })
  }

  // 6. FEATURED/TRENDING PROJECTS (FOR HIMA HOMEPAGE MARQUEE)
  const [inshowProjects, setInshowProjects] = useState(() => {
    const savedFeatured = localStorage.getItem('admin_featured_projects')
    const featuredList = savedFeatured ? JSON.parse(savedFeatured) : []
    const savedProjects = localStorage.getItem('himaif_inshow_projects')
    const storedProjects = savedProjects ? JSON.parse(savedProjects) : null
    
    return initialProjects.map(proj => {
      const stored = storedProjects ? storedProjects.find(sp => sp.id === proj.id) : null
      return {
        ...proj,
        comments: stored?.comments || proj.comments || [],
        isFeatured: featuredList.some(fp => fp.title === proj.title)
      }
    })
  })

  // State untuk expand/collapse komentar per proyek
  const [expandedComments, setExpandedComments] = useState(null)

  const handleToggleFeatured = (projId) => {
    const updated = inshowProjects.map(proj => {
      if (proj.id === projId) {
        const nextState = !proj.isFeatured
        showToast(nextState ? `"${proj.title}" ditandai sebagai Trending!` : `"${proj.title}" dihapus dari Trending.`)
        return { ...proj, isFeatured: nextState }
      }
      return proj
    })
    setInshowProjects(updated)

    const featuredOnly = updated
      .filter(p => p.isFeatured)
      .map(p => ({
        title: p.title,
        category: p.category || (p.tags && p.tags.platform) || "Technology",
        description: p.description,
        image: p.image
      }))
    
    localStorage.setItem('admin_featured_projects', JSON.stringify(featuredOnly))
  }

  const handleDeleteComment = (projId, commentIndex) => {
    if (!window.confirm('Hapus komentar ini?')) return
    const updated = inshowProjects.map(proj => {
      if (proj.id === projId) {
        const newComments = [...(proj.comments || [])]
        const removed = newComments.splice(commentIndex, 1)
        showToast(`Komentar dari "${removed[0]?.name}" berhasil dihapus.`)
        return { ...proj, comments: newComments }
      }
      return proj
    })
    setInshowProjects(updated)
    // Sync ke localStorage agar InShowPortal juga terupdate
    localStorage.setItem('himaif_inshow_projects', JSON.stringify(updated))
  }

  // Update social media for current selected profile
  const updateProfileSocial = (platform, val) => {
    setProfiles(prev => ({
      ...prev,
      [selectedProfileKey]: {
        ...prev[selectedProfileKey],
        socials: {
          ...(prev[selectedProfileKey]?.socials || {}),
          [platform]: val
        }
      }
    }))
  }

  // Update social media for a specific division member
  const updateMemberSocial = (divKey, index, platform, val) => {
    setDivisionMemberSocials(prev => ({
      ...prev,
      [divKey]: {
        ...prev[divKey],
        [index]: {
          ...(prev[divKey]?.[index] || {}),
          [platform]: val
        }
      }
    }))
  }

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(''), 3000)
  }

  // ── Activity Log Tab Component ──
  const ActivityLogTab = () => {
    const [logs, setLogs] = React.useState(() => getActivityLogs())
    const [filterType, setFilterType] = React.useState('all')

    const refreshLogs = () => setLogs(getActivityLogs())

    const handleClearLogs = () => {
      clearActivityLogs()
      setLogs([])
      showToast('Semua riwayat aktivitas berhasil dihapus.')
    }

    const filteredLogs = filterType === 'all'
      ? logs
      : logs.filter(log => log.type === filterType)

    const colorMap = {
      emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400',
      blue: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
      amber: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400',
      purple: 'bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400',
      slate: 'bg-slate-100 text-slate-600 dark:bg-slate-500/15 dark:text-slate-400',
      cyan: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-400',
      red: 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400',
      indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-400',
      orange: 'bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-400',
      teal: 'bg-teal-100 text-teal-700 dark:bg-teal-500/15 dark:text-teal-400',
      rose: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400',
    }

    // Get unique activity types from config for the filter buttons
    const filterOptions = [
      { key: 'all', label: 'Semua', icon: 'list' },
      ...Object.entries(ACTIVITY_CONFIG).map(([key, cfg]) => ({
        key,
        label: cfg.label,
        icon: cfg.icon
      }))
    ]

    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-xl font-serif font-extrabold text-[#031636] dark:text-white">Activity Log</h2>
            <p className="text-xs text-[#44474e] dark:text-[#d3e4fe]/60">Riwayat semua aktivitas di InShow Portal dan CMS Dashboard.</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={refreshLogs}
              className="flex items-center gap-1.5 bg-slate-100 dark:bg-[#071121] hover:bg-slate-200 dark:hover:bg-white/10 text-[#031636] dark:text-white text-xs font-bold px-3 py-2 rounded-xl border border-[#e5e7eb] dark:border-[#1e3a5f]/40 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">refresh</span>
              Refresh
            </button>
            <button
              onClick={handleClearLogs}
              disabled={logs.length === 0}
              className="flex items-center gap-1.5 bg-red-50 dark:bg-red-500/10 hover:bg-red-100 dark:hover:bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold px-3 py-2 rounded-xl border border-red-200 dark:border-red-500/20 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-sm">delete_sweep</span>
              Bersihkan
            </button>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-1.5">
          {filterOptions.map(opt => (
            <button
              key={opt.key}
              onClick={() => setFilterType(opt.key)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                filterType === opt.key
                  ? 'bg-[#005bc1] text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-[#071121] text-[#44474e] dark:text-[#d3e4fe]/60 border border-[#e5e7eb] dark:border-[#1e3a5f]/30 hover:bg-slate-200 dark:hover:bg-white/5'
              }`}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>{opt.icon}</span>
              {opt.label}
            </button>
          ))}
        </div>

        {/* Log Table */}
        {filteredLogs.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 dark:bg-[#071121] rounded-2xl border border-[#e5e7eb] dark:border-[#1e3a5f]/40">
            <span className="material-symbols-outlined text-4xl text-[#44474e]/20 dark:text-[#d3e4fe]/15 mb-3 block">inbox</span>
            <p className="text-sm font-bold text-[#44474e]/40 dark:text-[#d3e4fe]/25">
              {filterType === 'all' ? 'Belum ada aktivitas yang tercatat.' : 'Tidak ada aktivitas untuk filter ini.'}
            </p>
            <p className="text-[10px] text-[#44474e]/30 dark:text-[#d3e4fe]/15 mt-1">Aktivitas akan muncul saat pengguna berinteraksi di InShow Portal.</p>
          </div>
        ) : (
          <div className="bg-slate-50 dark:bg-[#071121] rounded-2xl border border-[#e5e7eb] dark:border-[#1e3a5f]/40 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-[#e5e7eb] dark:border-[#1e3a5f]/30">
                    <th className="text-left px-4 py-3 text-[10px] font-extrabold text-[#44474e]/60 dark:text-[#d3e4fe]/40 uppercase tracking-wider">Waktu</th>
                    <th className="text-left px-4 py-3 text-[10px] font-extrabold text-[#44474e]/60 dark:text-[#d3e4fe]/40 uppercase tracking-wider">Jenis</th>
                    <th className="text-left px-4 py-3 text-[10px] font-extrabold text-[#44474e]/60 dark:text-[#d3e4fe]/40 uppercase tracking-wider">Pelaku</th>
                    <th className="text-left px-4 py-3 text-[10px] font-extrabold text-[#44474e]/60 dark:text-[#d3e4fe]/40 uppercase tracking-wider">Target</th>
                    <th className="text-left px-4 py-3 text-[10px] font-extrabold text-[#44474e]/60 dark:text-[#d3e4fe]/40 uppercase tracking-wider">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLogs.map((log) => {
                    const config = ACTIVITY_CONFIG[log.type] || { label: log.type, icon: 'info', color: 'slate' }
                    const badgeClass = colorMap[config.color] || colorMap.slate
                    return (
                      <tr key={log.id} className="border-b border-[#e5e7eb]/50 dark:border-[#1e3a5f]/20 hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors">
                        <td className="px-4 py-3 text-[#44474e]/70 dark:text-[#d3e4fe]/50 whitespace-nowrap font-mono text-[10px]">
                          {formatTimestamp(log.timestamp)}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-extrabold ${badgeClass}`}>
                            <span className="material-symbols-outlined" style={{ fontSize: '11px' }}>{config.icon}</span>
                            {config.label}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-bold text-[#031636] dark:text-white whitespace-nowrap">{log.actor}</td>
                        <td className="px-4 py-3 text-[#44474e] dark:text-[#d3e4fe]/70 max-w-[200px] truncate">{log.target || '—'}</td>
                        <td className="px-4 py-3 text-[#44474e]/60 dark:text-[#d3e4fe]/40 max-w-[250px] truncate">{log.detail || '—'}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            {/* Log Count */}
            <div className="px-4 py-3 bg-white/50 dark:bg-[#0d1b33]/50 border-t border-[#e5e7eb] dark:border-[#1e3a5f]/20 flex items-center justify-between">
              <span className="text-[10px] text-[#44474e]/50 dark:text-[#d3e4fe]/30 font-medium">
                Menampilkan {filteredLogs.length} dari {logs.length} log
              </span>
              <span className="text-[10px] text-[#44474e]/50 dark:text-[#d3e4fe]/30 font-medium">
                Max: 200 log disimpan
              </span>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#005bc1] text-white px-4 py-3 rounded-xl shadow-lg border border-white/20 animate-fade-in-up flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">stars</span>
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Main Container */}
      <div className="bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[680px]">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="w-full md:w-64 bg-slate-50 dark:bg-[#071121] border-r border-[#e5e7eb] dark:border-[#1e3a5f]/40 p-6 flex flex-col justify-between shrink-0 overflow-y-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#005bc1] dark:text-[#60a5fa] text-2xl">admin_panel_settings</span>
              <div>
                <h3 className="text-sm font-extrabold text-[#031636] dark:text-white uppercase tracking-wider">CMS Synapse</h3>
                <span className="text-[10px] font-bold text-[#005bc1]/70 dark:text-[#60a5fa]/70">Admin Panel</span>
              </div>
            </div>

            <nav className="space-y-5">
              {/* MONITORING */}
              <div>
                <span className="block text-[9px] font-extrabold text-[#44474e]/50 dark:text-[#d3e4fe]/30 uppercase tracking-[0.15em] mb-2 px-1">Monitoring</span>
                <div className="space-y-1">
                  <button
                    onClick={() => setActiveSubTab('overview')}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      activeSubTab === 'overview'
                        ? 'bg-[#005bc1] text-white shadow-md'
                        : 'text-[#44474e] dark:text-[#d3e4fe]/70 hover:bg-slate-200/50 dark:hover:bg-white/5'
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">dashboard</span>
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveSubTab('activity')}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      activeSubTab === 'activity'
                        ? 'bg-[#005bc1] text-white shadow-md'
                        : 'text-[#44474e] dark:text-[#d3e4fe]/70 hover:bg-slate-200/50 dark:hover:bg-white/5'
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">history</span>
                    Activity Log
                    {getTodayActivityCount() > 0 && (
                      <span className="ml-auto bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[9px] font-extrabold px-1.5 py-0.5 rounded-full">{getTodayActivityCount()}</span>
                    )}
                  </button>
                  <button
                    onClick={() => setActiveSubTab('analytics')}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      activeSubTab === 'analytics'
                        ? 'bg-[#005bc1] text-white shadow-md'
                        : 'text-[#44474e] dark:text-[#d3e4fe]/70 hover:bg-slate-200/50 dark:hover:bg-white/5'
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">insights</span>
                    Analitik Website
                  </button>
                </div>
              </div>

              {/* KONTEN */}
              <div>
                <span className="block text-[9px] font-extrabold text-[#44474e]/50 dark:text-[#d3e4fe]/30 uppercase tracking-[0.15em] mb-2 px-1">Konten</span>
                <div className="space-y-1">
                  <button
                    onClick={() => setActiveSubTab('landing')}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      activeSubTab === 'landing'
                        ? 'bg-[#005bc1] text-white shadow-md'
                        : 'text-[#44474e] dark:text-[#d3e4fe]/70 hover:bg-slate-200/50 dark:hover:bg-white/5'
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">person_edit</span>
                    Kelola Profil Foto
                  </button>
                  <button
                    onClick={() => setActiveSubTab('divisions')}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      activeSubTab === 'divisions'
                        ? 'bg-[#005bc1] text-white shadow-md'
                        : 'text-[#44474e] dark:text-[#d3e4fe]/70 hover:bg-slate-200/50 dark:hover:bg-white/5'
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">groups</span>
                    Anggota Divisi
                  </button>
                  <button
                    onClick={() => setActiveSubTab('about')}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      activeSubTab === 'about'
                        ? 'bg-[#005bc1] text-white shadow-md'
                        : 'text-[#44474e] dark:text-[#d3e4fe]/70 hover:bg-slate-200/50 dark:hover:bg-white/5'
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">photo_library</span>
                    Tentang Kami
                  </button>
                  <button
                    onClick={() => setActiveSubTab('vision')}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      activeSubTab === 'vision'
                        ? 'bg-[#005bc1] text-white shadow-md'
                        : 'text-[#44474e] dark:text-[#d3e4fe]/70 hover:bg-slate-200/50 dark:hover:bg-white/5'
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">assignment</span>
                    Visi & Misi
                  </button>
                  <button
                    onClick={() => setActiveSubTab('prodi')}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      activeSubTab === 'prodi'
                        ? 'bg-[#005bc1] text-white shadow-md'
                        : 'text-[#44474e] dark:text-[#d3e4fe]/70 hover:bg-slate-200/50 dark:hover:bg-white/5'
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">school</span>
                    Program Studi
                  </button>
                  <button
                    onClick={() => setActiveSubTab('inshow')}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      activeSubTab === 'inshow'
                        ? 'bg-[#005bc1] text-white shadow-md'
                        : 'text-[#44474e] dark:text-[#d3e4fe]/70 hover:bg-slate-200/50 dark:hover:bg-white/5'
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">rocket_launch</span>
                    InShow
                  </button>
                </div>
              </div>
            </nav>
          </div>

          {/* Footer: Logout + Version */}
          <div className="pt-4 border-t border-[#e5e7eb] dark:border-[#1e3a5f]/40 space-y-3">
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">logout</span>
              Logout
            </button>
            <button
              onClick={() => { window.location.hash = '' }}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold text-[#44474e]/60 dark:text-[#d3e4fe]/40 hover:bg-slate-200/50 dark:hover:bg-white/5 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Ke Halaman Utama
            </button>
            <div className="text-center">
              <span className="text-[10px] text-[#44474e]/50 dark:text-[#d3e4fe]/30 font-medium">HIMAIF v3.0 (CMS)</span>
            </div>
          </div>
        </aside>

        {/* WORKSPACE AREA */}
        <main className="flex-1 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          
          {/* TAB 1: OVERVIEW */}
          {activeSubTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-serif font-extrabold text-[#031636] dark:text-white">Admin Dashboard Overview</h2>
                <p className="text-xs text-[#44474e] dark:text-[#d3e4fe]/60">Kelola dan update seluruh data landing page HIMA secara dinamis dan real-time.</p>
              </div>

              {/* Stats Widgets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 p-5 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#44474e] dark:text-[#d3e4fe]/70">Profil Berfoto</span>
                    <span className="material-symbols-outlined text-blue-500 text-lg">face</span>
                  </div>
                  <p className="text-3xl font-extrabold text-[#031636] dark:text-white">12 <span className="text-xs font-medium text-[#44474e]/50 dark:text-[#d3e4fe]/50">Orang</span></p>
                </div>
                <div className="bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 p-5 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#44474e] dark:text-[#d3e4fe]/70">Total Anggota Divisi</span>
                    <span className="material-symbols-outlined text-purple-500 text-lg">groups</span>
                  </div>
                  <p className="text-3xl font-extrabold text-[#031636] dark:text-white">
                    {Object.values(divisionMembers).reduce((acc, curr) => acc + curr.length, 0)} <span className="text-xs font-medium text-[#44474e]/50 dark:text-[#d3e4fe]/50">Orang</span>
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 p-5 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#44474e] dark:text-[#d3e4fe]/70">Trending Terpilih</span>
                    <span className="material-symbols-outlined text-amber-500 text-lg">grade</span>
                  </div>
                  <p className="text-3xl font-extrabold text-[#031636] dark:text-white">
                    {inshowProjects.filter(p => p.isFeatured).length} <span className="text-xs font-medium text-[#44474e]/50 dark:text-[#d3e4fe]/50">Proyek</span>
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 p-5 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#44474e] dark:text-[#d3e4fe]/70">Nilai Inti (About)</span>
                    <span className="material-symbols-outlined text-rose-500 text-lg">stars</span>
                  </div>
                  <p className="text-3xl font-extrabold text-[#031636] dark:text-white">4 <span className="text-xs font-medium text-[#44474e]/50 dark:text-[#d3e4fe]/50">Poin</span></p>
                </div>
                <button onClick={() => setActiveSubTab('activity')} className="bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 p-5 rounded-2xl text-left hover:border-emerald-300 dark:hover:border-emerald-500/40 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#44474e] dark:text-[#d3e4fe]/70">Aktivitas Hari Ini</span>
                    <span className="material-symbols-outlined text-emerald-500 text-lg">history</span>
                  </div>
                  <p className="text-3xl font-extrabold text-[#031636] dark:text-white">{getTodayActivityCount()} <span className="text-xs font-medium text-[#44474e]/50 dark:text-[#d3e4fe]/50">Log</span></p>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: PROFILES EDITOR (MANAGE PHOTO ITEMS) */}
          {activeSubTab === 'landing' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-serif font-extrabold text-[#031636] dark:text-white">Kelola Profil Foto & Jabatan</h2>
                <p className="text-xs text-[#44474e] dark:text-[#d3e4fe]/60">Pilih bagian/orang di HIMA yang memiliki foto untuk diubah nama, jabatan, atau fotonya.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Panel: Selector & Editor */}
                <div className="lg:col-span-7 space-y-4 bg-slate-50 dark:bg-[#071121] p-5 rounded-2xl border border-[#e5e7eb] dark:border-[#1e3a5f]/40">
                  <div>
                    <label className="block text-[10px] font-extrabold text-[#031636] dark:text-white uppercase tracking-wider mb-1.5">Pilih Orang / Jabatan</label>
                    <select
                      value={selectedProfileKey}
                      onChange={(e) => setSelectedProfileKey(e.target.value)}
                      className="w-full bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#005bc1] font-bold text-[#031636] dark:text-white"
                    >
                      <option value="kaprodi">Kepala Program Studi (Kaprodi Tentang)</option>
                      <option value="ketua">Ketua Himpunan (BPH Struktur)</option>
                      <option value="wakil">Wakil Ketua Himpunan (BPH Struktur)</option>
                      <option value="sekjen">Sekretaris Jenderal (BPH Struktur)</option>
                      <option value="treasurer1">Bendahara 1 (BPH Struktur)</option>
                      <option value="treasurerGen">Bendahara Umum (BPH Struktur)</option>
                      <option value="secretary">Sekretaris (BPH Struktur)</option>
                      <option value="risetin">Kadiv Riset & Inovasi (Kadiv Struktur)</option>
                      <option value="eksternal">Kadiv Eksternal (Kadiv Struktur)</option>
                      <option value="orbis">Kadiv Organisasi & Bisnis (Kadiv Struktur)</option>
                      <option value="edubakat">Kadiv Edukasi & Bakat (Kadiv Struktur)</option>
                      <option value="pdd">Kadiv Publikasi, Dokumentasi & Desain (Kadiv Struktur)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-[#44474e] dark:text-[#d3e4fe]/70 mb-1">Nama Lengkap</label>
                      <input
                        type="text"
                        value={currentProfile.name}
                        onChange={(e) => updateProfileField('name', e.target.value)}
                        className="w-full bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#005bc1]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#44474e] dark:text-[#d3e4fe]/70 mb-1">Jabatan / Peran</label>
                      <input
                        type="text"
                        value={currentProfile.role}
                        onChange={(e) => updateProfileField('role', e.target.value)}
                        className="w-full bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#005bc1]"
                      />
                    </div>
                  </div>

                  {/* Dual Mode: Custom URL + Local File Upload */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-[#44474e] dark:text-[#d3e4fe]/70 mb-1">Link URL Foto</label>
                      <input
                        type="text"
                        value={currentProfile.image}
                        onChange={(e) => updateProfileField('image', e.target.value)}
                        placeholder="Masukkan URL Gambar..."
                        className="w-full bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#005bc1]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#44474e] dark:text-[#d3e4fe]/70 mb-1">Upload File Foto</label>
                      <div className="relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, (base64) => updateProfileField('image', base64))}
                          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                        />
                        <button className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white px-3 py-2 rounded-xl text-xs font-bold w-full flex items-center justify-center gap-1.5 border border-dashed border-slate-300 dark:border-slate-500">
                          <span className="material-symbols-outlined text-sm">upload</span>
                          Pilih File
                        </button>
                      </div>
                    </div>
                  </div>



                  {selectedProfileKey === 'kaprodi' && (
                    <>
                      <div>
                        <label className="block text-[10px] font-bold text-[#44474e] dark:text-[#d3e4fe]/70 mb-1">Kata Sambutan (Quote)</label>
                        <textarea
                          value={currentProfile.quote}
                          onChange={(e) => updateProfileField('quote', e.target.value)}
                          rows={2}
                          className="w-full bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#005bc1]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-[#44474e] dark:text-[#d3e4fe]/70 mb-1">Deskripsi Panjang</label>
                        <textarea
                          value={currentProfile.desc}
                          onChange={(e) => updateProfileField('desc', e.target.value)}
                          rows={3}
                          className="w-full bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#005bc1]"
                        />
                      </div>
                    </>
                  )}

                  {/* Social Media Inputs for Profile */}
                  <div className="pt-3 border-t border-[#e5e7eb] dark:border-[#1e3a5f]/40 space-y-2">
                    <label className="block text-[10px] font-extrabold text-[#031636] dark:text-white uppercase tracking-wider">
                      Link Media Sosial Jabatan
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div>
                        <span className="block text-[9px] font-bold text-[#E4405F] mb-0.5">Instagram</span>
                        <input
                          type="text"
                          value={currentProfile.socials?.instagram || ''}
                          onChange={(e) => updateProfileSocial('instagram', e.target.value)}
                          placeholder="https://instagram.com/..."
                          className="w-full bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl px-2.5 py-1.5 text-[11px] focus:outline-none focus:ring-1 focus:ring-[#005bc1]"
                        />
                      </div>
                      <div>
                        <span className="block text-[9px] font-bold text-[#0A66C2] mb-0.5">LinkedIn</span>
                        <input
                          type="text"
                          value={currentProfile.socials?.linkedin || ''}
                          onChange={(e) => updateProfileSocial('linkedin', e.target.value)}
                          placeholder="https://linkedin.com/in/..."
                          className="w-full bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl px-2.5 py-1.5 text-[11px] focus:outline-none focus:ring-1 focus:ring-[#005bc1]"
                        />
                      </div>
                      <div>
                        <span className="block text-[9px] font-bold text-[#333] dark:text-[#e2e8f0] mb-0.5">GitHub</span>
                        <input
                          type="text"
                          value={currentProfile.socials?.github || ''}
                          onChange={(e) => updateProfileSocial('github', e.target.value)}
                          placeholder="https://github.com/..."
                          className="w-full bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl px-2.5 py-1.5 text-[11px] focus:outline-none focus:ring-1 focus:ring-[#005bc1]"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => showToast(`Profil "${currentProfile.name}" berhasil disimpan!`)}
                    className="w-full bg-[#005bc1] hover:bg-[#003d80] text-white text-xs font-bold py-2.5 rounded-xl shadow-md transition-all cursor-pointer mt-2"
                  >
                    Simpan Perubahan
                  </button>
                </div>

                {/* Right Panel: Preview */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-[#44474e] dark:text-[#d3e4fe]/70 uppercase tracking-wider">Preview Profil</span>
                    <span className="text-[10px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-md">Live Preview</span>
                  </div>

                  <div className="border border-dashed border-[#005bc1]/30 rounded-2xl p-6 bg-[#f8f9fc] dark:bg-[#081223] flex-1 flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-[#0d1b33] shadow-lg mb-4 bg-slate-200">
                      {currentProfile.image ? (
                        <img src={currentProfile.image} alt={currentProfile.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-300 text-slate-500">
                          <span className="material-symbols-outlined text-4xl">person</span>
                        </div>
                      )}
                    </div>

                    <h4 className="text-sm font-extrabold text-[#031636] dark:text-white leading-tight">{currentProfile.name}</h4>
                    <p className="text-[10px] text-[#005bc1] dark:text-[#60a5fa] font-bold uppercase mt-1 tracking-wider">{currentProfile.role}</p>
                    
                    {currentProfile.quote && (
                      <p className="text-[10px] text-[#44474e] dark:text-[#d3e4fe]/60 italic mt-3 border-t border-[#e5e7eb] dark:border-[#1e3a5f]/40 pt-2 px-4">
                        "{currentProfile.quote}"
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DIVISION MEMBERS */}
          {activeSubTab === 'divisions' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-serif font-extrabold text-[#031636] dark:text-white">Kelola Anggota Divisi</h2>
                <p className="text-xs text-[#44474e] dark:text-[#d3e4fe]/60">Tambah atau hapus nama staf/anggota untuk setiap divisi/departemen HIMA.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-6 space-y-4">
                  <div>
                    <label className="block text-[10px] font-extrabold text-[#031636] dark:text-white uppercase tracking-wider mb-1.5">Pilih Divisi</label>
                    <select
                      value={selectedDivKey}
                      onChange={(e) => setSelectedDivKey(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl px-3 py-2.5 text-xs font-bold text-[#031636] dark:text-white"
                    >
                      <option value="risetin">Riset & Inovasi (Risetin)</option>
                      <option value="eksternal">Hubungan Eksternal</option>
                      <option value="orbis">Organisasi & Bisnis (Orbis)</option>
                      <option value="edubakat">Edukasi & Bakat</option>
                      <option value="pdd">Publikasi, Dokumentasi & Desain (PDD)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-[#44474e] dark:text-[#d3e4fe]/70">Tambah Anggota Baru</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newMemberName}
                        onChange={(e) => setNewMemberName(e.target.value)}
                        placeholder="Nama Anggota..."
                        className="flex-1 bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#005bc1]"
                      />
                      <button
                        onClick={handleAddMember}
                        className="bg-[#005bc1] hover:bg-[#003d80] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
                      >
                        Tambah
                      </button>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 p-5 rounded-2xl">
                  <h3 className="text-xs font-extrabold text-[#031636] dark:text-white uppercase tracking-wider mb-3">Daftar Anggota Saat Ini</h3>
                  
                  {(!divisionMembers[selectedDivKey] || divisionMembers[selectedDivKey].length === 0) ? (
                    <p className="text-xs text-[#44474e]/60 dark:text-[#d3e4fe]/40 italic py-4 text-center">Belum ada anggota di divisi ini.</p>
                  ) : (
                    <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                      {divisionMembers[selectedDivKey].map((member, idx) => {
                        const memberSocials = divisionMemberSocials[selectedDivKey]?.[idx] || {}
                        return (
                          <div
                            key={idx}
                            className="bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/30 p-3 rounded-xl space-y-2"
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-xs font-bold text-[#031636] dark:text-white">{member}</span>
                              <button
                                onClick={() => handleRemoveMember(idx)}
                                className="text-red-500 hover:text-red-700 hover:bg-red-500/10 w-6 h-6 rounded-full flex items-center justify-center transition-all cursor-pointer"
                                title="Hapus Anggota"
                              >
                                <span className="material-symbols-outlined text-sm">delete</span>
                              </button>
                            </div>
                            
                            {/* Member Social Media Inputs */}
                            <div className="grid grid-cols-3 gap-1.5 pt-1 border-t border-[#e5e7eb]/60 dark:border-[#1e3a5f]/30">
                              <input
                                type="text"
                                value={memberSocials.instagram || ''}
                                onChange={(e) => updateMemberSocial(selectedDivKey, idx, 'instagram', e.target.value)}
                                placeholder="Instagram URL"
                                className="w-full bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/30 rounded-lg px-2 py-1 text-[10px] text-[#031636] dark:text-white placeholder:text-[#44474e]/30 outline-none"
                              />
                              <input
                                type="text"
                                value={memberSocials.linkedin || ''}
                                onChange={(e) => updateMemberSocial(selectedDivKey, idx, 'linkedin', e.target.value)}
                                placeholder="LinkedIn URL"
                                className="w-full bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/30 rounded-lg px-2 py-1 text-[10px] text-[#031636] dark:text-white placeholder:text-[#44474e]/30 outline-none"
                              />
                              <input
                                type="text"
                                value={memberSocials.github || ''}
                                onChange={(e) => updateMemberSocial(selectedDivKey, idx, 'github', e.target.value)}
                                placeholder="GitHub URL"
                                className="w-full bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/30 rounded-lg px-2 py-1 text-[10px] text-[#031636] dark:text-white placeholder:text-[#44474e]/30 outline-none"
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ABOUT TENTANG KAMI & GALLERY */}
          {activeSubTab === 'about' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-serif font-extrabold text-[#031636] dark:text-white">Kelola Tentang Kami (About)</h2>
                <p className="text-xs text-[#44474e] dark:text-[#d3e4fe]/60">Sesuaikan 3 foto utama dan 4 poin Nilai Inti (Core Values) yang tampil di homepage.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 space-y-5 bg-slate-50 dark:bg-[#071121] p-5 rounded-2xl border border-[#e5e7eb] dark:border-[#1e3a5f]/40">
                  {/* Gallery Section */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-[#031636] dark:text-white uppercase tracking-wider">1. Galeri Foto</h3>
                    
                    <div>
                      <label className="block text-[10px] font-bold text-[#44474e] dark:text-[#d3e4fe]/70 mb-1">Pilih Slot Foto</label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          onClick={() => setSelectedAboutImgSlot('img1')}
                          className={`px-2 py-1.5 rounded-lg text-[10px] font-bold border transition-all ${
                            selectedAboutImgSlot === 'img1'
                              ? 'bg-[#005bc1] border-[#005bc1] text-white shadow-sm'
                              : 'bg-white dark:bg-[#0d1b33] border-[#e5e7eb] dark:border-[#1e3a5f]/40 text-[#44474e] dark:text-[#d3e4fe]/70'
                          }`}
                        >
                          Foto 1 (Utama)
                        </button>
                        <button
                          onClick={() => setSelectedAboutImgSlot('img2')}
                          className={`px-2 py-1.5 rounded-lg text-[10px] font-bold border transition-all ${
                            selectedAboutImgSlot === 'img2'
                              ? 'bg-[#005bc1] border-[#005bc1] text-white shadow-sm'
                              : 'bg-white dark:bg-[#0d1b33] border-[#e5e7eb] dark:border-[#1e3a5f]/40 text-[#44474e] dark:text-[#d3e4fe]/70'
                          }`}
                        >
                          Foto 2 (Kiri)
                        </button>
                        <button
                          onClick={() => setSelectedAboutImgSlot('img3')}
                          className={`px-2 py-1.5 rounded-lg text-[10px] font-bold border transition-all ${
                            selectedAboutImgSlot === 'img3'
                              ? 'bg-[#005bc1] border-[#005bc1] text-white shadow-sm'
                              : 'bg-white dark:bg-[#0d1b33] border-[#e5e7eb] dark:border-[#1e3a5f]/40 text-[#44474e] dark:text-[#d3e4fe]/70'
                          }`}
                        >
                          Foto 3 (Kanan)
                        </button>
                      </div>
                    </div>

                    {/* Dual Mode: Custom URL + Local File Upload */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[9px] font-bold text-[#44474e] dark:text-[#d3e4fe]/70 mb-0.5">Link URL Foto</label>
                        <input
                          type="text"
                          value={aboutImages[selectedAboutImgSlot]}
                          onChange={(e) => setAboutImages(prev => ({ ...prev, [selectedAboutImgSlot]: e.target.value }))}
                          placeholder="Masukkan URL foto..."
                          className="w-full bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl px-3 py-2 text-xs focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold text-[#44474e] dark:text-[#d3e4fe]/70 mb-0.5">Upload File Foto</label>
                        <div className="relative">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileUpload(e, (base64) => setAboutImages(prev => ({ ...prev, [selectedAboutImgSlot]: base64 })))}
                            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                          />
                          <button className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white px-3 py-2 rounded-xl text-xs font-bold w-full flex items-center justify-center gap-1.5 border border-dashed border-slate-300 dark:border-slate-500">
                            <span className="material-symbols-outlined text-sm">upload</span>
                            Pilih File
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Core Values Section */}
                  <div className="space-y-3 border-t border-[#e5e7eb] dark:border-[#1e3a5f]/40 pt-4">
                    <h3 className="text-xs font-bold text-[#031636] dark:text-white uppercase tracking-wider">2. Nilai Inti Himpunan (Core Values)</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {coreValues.map((value, idx) => (
                        <div key={idx} className="bg-white dark:bg-[#0d1b33] p-3 rounded-xl border border-[#e5e7eb] dark:border-[#1e3a5f]/20">
                          <label className="block text-[9px] font-bold text-[#005bc1] uppercase mb-1">Nilai Inti #{idx + 1}</label>
                          <input
                            type="text"
                            value={value}
                            onChange={(e) => updateCoreValueField(idx, e.target.value)}
                            placeholder={`Nilai Inti ${idx + 1}`}
                            className="w-full bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-lg px-2.5 py-1.5 text-xs font-bold focus:outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => showToast(`Data Tentang Kami (Foto & Nilai Inti) sukses disimpan!`)}
                    className="w-full bg-[#005bc1] hover:bg-[#003d80] text-white text-xs font-bold py-2.5 rounded-xl shadow-md transition-all cursor-pointer mt-2"
                  >
                    Simpan Perubahan
                  </button>
                </div>

                {/* Right Panel: Preview Layout simulator */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-[#44474e] dark:text-[#d3e4fe]/70 uppercase tracking-wider">Preview Galeri About & Values</span>
                    <span className="text-[10px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-md">Live Preview</span>
                  </div>

                  <div className="border border-dashed border-[#005bc1]/30 rounded-2xl p-4 bg-[#f8f9fc] dark:bg-[#081223] flex-1 flex flex-col gap-3 justify-center">
                    <div className={`w-full aspect-[16/7] rounded-xl overflow-hidden border-2 bg-slate-200 dark:bg-slate-700 transition-all ${
                      selectedAboutImgSlot === 'img1' ? 'border-[#005bc1]' : 'border-transparent'
                    }`}>
                      {aboutImages.img1 ? (
                        <img src={aboutImages.img1} alt="About 1" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                          <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <div className={`flex-1 aspect-[4/3] rounded-xl overflow-hidden border-2 bg-slate-200 dark:bg-slate-700 transition-all ${
                        selectedAboutImgSlot === 'img2' ? 'border-[#005bc1]' : 'border-transparent'
                      }`}>
                        {aboutImages.img2 ? (
                          <img src={aboutImages.img2} alt="About 2" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-400">
                            <span className="material-symbols-outlined text-2xl">add_photo_alternate</span>
                          </div>
                        )}
                      </div>
                      <div className={`flex-1 aspect-[4/3] rounded-xl overflow-hidden border-2 bg-slate-200 dark:bg-slate-700 transition-all ${
                        selectedAboutImgSlot === 'img3' ? 'border-[#005bc1]' : 'border-transparent'
                      }`}>
                        {aboutImages.img3 ? (
                          <img src={aboutImages.img3} alt="About 3" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-400">
                            <span className="material-symbols-outlined text-2xl">add_photo_alternate</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Values Preview list */}
                    <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-[#e5e7eb] dark:border-[#1e3a5f]/30">
                      {coreValues.map((v, i) => (
                        <div key={i} className="bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 p-2 rounded-lg text-center">
                          <span className="text-[9px] font-extrabold text-[#031636] dark:text-[#d3e4fe]">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: VISION & MISSION */}
          {activeSubTab === 'vision' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-serif font-extrabold text-[#031636] dark:text-white">Kelola Visi & Misi</h2>
                <p className="text-xs text-[#44474e] dark:text-[#d3e4fe]/60">Sesuaikan teks visi utama HIMA dan isi 4 poin misi organisasi secara langsung.</p>
              </div>

              <div className="space-y-4 bg-slate-50 dark:bg-[#071121] p-5 rounded-2xl border border-[#e5e7eb] dark:border-[#1e3a5f]/40">
                <div>
                  <label className="block text-[10px] font-extrabold text-[#031636] dark:text-white uppercase tracking-wider mb-1">Visi Utama</label>
                  <textarea
                    value={visionData.vision}
                    onChange={(e) => updateVisionField('vision', e.target.value)}
                    rows={2}
                    className="w-full bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl px-3 py-2 text-xs focus:outline-none"
                  />
                </div>

                <div className="border-t border-[#e5e7eb] dark:border-[#1e3a5f]/40 pt-4 space-y-4">
                  <h3 className="text-xs font-bold text-[#031636] dark:text-white">Butir-Butir Misi (4 Poin)</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {visionData.missions.map((mission, idx) => (
                      <div key={idx} className="bg-white dark:bg-[#0d1b33] p-4 rounded-xl border border-[#e5e7eb] dark:border-[#1e3a5f]/20 space-y-2">
                        <span className="text-[10px] font-extrabold text-[#005bc1] dark:text-[#60a5fa]">MISI #{idx + 1}</span>
                        <div>
                          <input
                            type="text"
                            value={mission.title}
                            onChange={(e) => updateMissionField(idx, 'title', e.target.value)}
                            placeholder="Judul Misi..."
                            className="w-full bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-lg px-2 py-1 text-xs font-bold focus:outline-none"
                          />
                        </div>
                        <div>
                          <textarea
                            value={mission.desc}
                            onChange={(e) => updateMissionField(idx, 'desc', e.target.value)}
                            placeholder="Keterangan Misi..."
                            rows={2}
                            className="w-full bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-lg px-2 py-1 text-xs focus:outline-none"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => showToast("Visi & Misi sukses disimpan ke website!")}
                  className="w-full bg-[#005bc1] hover:bg-[#003d80] text-white text-xs font-bold py-2.5 rounded-xl shadow-md transition-all cursor-pointer mt-2"
                >
                  Simpan Perubahan
                </button>
              </div>
            </div>
          )}

          {/* TAB 6: PROGRAM STUDI */}
          {activeSubTab === 'prodi' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-serif font-extrabold text-[#031636] dark:text-white">Kelola Program Studi (Prodi)</h2>
                <p className="text-xs text-[#44474e] dark:text-[#d3e4fe]/60">Sesuaikan deskripsi program studi, 3 pilar domain keahlian, dan statistik lulusan/kemitraan.</p>
              </div>

              <div className="space-y-4 bg-slate-50 dark:bg-[#071121] p-5 rounded-2xl border border-[#e5e7eb] dark:border-[#1e3a5f]/40">
                <div>
                  <label className="block text-[10px] font-extrabold text-[#031636] dark:text-white uppercase tracking-wider mb-1">Deskripsi Utama Prodi</label>
                  <textarea
                    value={prodiData.desc}
                    onChange={(e) => updateProdiField('desc', e.target.value)}
                    rows={2}
                    className="w-full bg-white dark:bg-[#0d1b33] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl px-3 py-2 text-xs focus:outline-none"
                  />
                </div>

                <div className="border-t border-[#e5e7eb] dark:border-[#1e3a5f]/40 pt-4 space-y-4">
                  <h3 className="text-xs font-bold text-[#031636] dark:text-white">3 Domain Keahlian</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {prodiData.domains.map((domain, idx) => (
                      <div key={idx} className="bg-white dark:bg-[#0d1b33] p-4 rounded-xl border border-[#e5e7eb] dark:border-[#1e3a5f]/20 space-y-2">
                        <span className="text-[10px] font-extrabold text-[#0091ae]">DOMAIN #{idx + 1}</span>
                        <input
                          type="text"
                          value={domain.title}
                          onChange={(e) => updateProdiDomainField(idx, 'title', e.target.value)}
                          placeholder="Judul Domain..."
                          className="w-full bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-lg px-2 py-1 text-xs font-bold focus:outline-none"
                        />
                        <textarea
                          value={domain.description}
                          onChange={(e) => updateProdiDomainField(idx, 'description', e.target.value)}
                          placeholder="Deskripsi Domain..."
                          rows={3}
                          className="w-full bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-lg px-2 py-1 text-xs focus:outline-none"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#e5e7eb] dark:border-[#1e3a5f]/40 pt-4 space-y-4">
                  <h3 className="text-xs font-bold text-[#031636] dark:text-white">Statistik Utama (2 Poin)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {prodiData.stats.map((stat, idx) => (
                      <div key={idx} className="bg-white dark:bg-[#0d1b33] p-4 rounded-xl border border-[#e5e7eb] dark:border-[#1e3a5f]/20 space-y-2 flex gap-4 items-center">
                        <div className="flex-1">
                          <label className="block text-[9px] font-bold text-[#44474e] dark:text-[#d3e4fe]/50 mb-0.5">Nilai Stat</label>
                          <input
                            type="text"
                            value={stat.value}
                            onChange={(e) => updateProdiStatField(idx, 'value', e.target.value)}
                            placeholder="Contoh: 95% atau 20+..."
                            className="w-full bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-lg px-2 py-1 text-xs font-bold focus:outline-none"
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-[9px] font-bold text-[#44474e] dark:text-[#d3e4fe]/50 mb-0.5">Label Keterangan</label>
                          <input
                            type="text"
                            value={stat.label}
                            onChange={(e) => updateProdiStatField(idx, 'label', e.target.value)}
                            placeholder="Keterangan..."
                            className="w-full bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-lg px-2 py-1 text-xs focus:outline-none"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => showToast("Data Program Studi berhasil di-update!")}
                  className="w-full bg-[#005bc1] hover:bg-[#003d80] text-white text-xs font-bold py-2.5 rounded-xl shadow-md transition-all cursor-pointer mt-2"
                >
                  Simpan Perubahan
                </button>
              </div>
            </div>
          )}

          {/* TAB 7: INSHOW — FEATURED SELECTOR + COMMENT MODERATION */}
          {activeSubTab === 'inshow' && (
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <h2 className="text-xl font-serif font-extrabold text-[#031636] dark:text-white">Kelola Proyek InShow</h2>
                <p className="text-xs text-[#44474e] dark:text-[#d3e4fe]/60">Tandai proyek unggulan untuk showcase halaman utama dan moderasi komentar yang masuk.</p>
              </div>

              <div className="space-y-4">
                {inshowProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-2xl overflow-hidden"
                  >
                    {/* Project Row */}
                    <div className="p-4 flex gap-4 items-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-14 h-14 object-cover rounded-xl border border-[#e5e7eb] dark:border-[#1e3a5f]/40 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-extrabold text-[#031636] dark:text-white truncate">{project.title}</h4>
                        <p className="text-[10px] text-[#44474e]/60 dark:text-[#d3e4fe]/40 font-medium truncate">Oleh: {project.author}</p>
                        <span className="inline-block bg-[#005bc1]/10 text-[#005bc1] dark:text-[#60a5fa] text-[8px] font-bold px-1.5 py-0.5 rounded-full mt-1 uppercase tracking-wider">{(project.tags && project.tags.platform) || 'Technology'}</span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {/* Comment toggle */}
                        <button
                          onClick={() => setExpandedComments(expandedComments === project.id ? null : project.id)}
                          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer relative ${
                            expandedComments === project.id
                              ? 'bg-[#005bc1] text-white shadow-md'
                              : 'bg-white dark:bg-[#0d1b33] text-[#44474e]/50 dark:text-[#d3e4fe]/40 hover:bg-slate-100 dark:hover:bg-white/5'
                          }`}
                          title="Lihat Komentar"
                        >
                          <span className="material-symbols-outlined text-base">chat_bubble</span>
                          {(project.comments?.length || 0) > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{project.comments.length}</span>
                          )}
                        </button>
                        {/* Featured toggle */}
                        <button
                          onClick={() => handleToggleFeatured(project.id)}
                          className={`w-9 h-9 rounded-full flex items-center justify-center shadow transition-all cursor-pointer ${
                            project.isFeatured
                              ? 'bg-amber-500 text-white hover:scale-105'
                              : 'bg-white dark:bg-[#0d1b33] text-[#44474e]/40 dark:text-[#d3e4fe]/30 hover:bg-slate-100 hover:text-amber-500'
                          }`}
                          title={project.isFeatured ? "Hapus dari Trending" : "Tandai Trending"}
                        >
                          <span className="material-symbols-outlined text-lg">star</span>
                        </button>
                      </div>
                    </div>

                    {/* Comments Panel (Expandable) */}
                    {expandedComments === project.id && (
                      <div className="border-t border-[#e5e7eb] dark:border-[#1e3a5f]/30 bg-white/50 dark:bg-[#0d1b33]/50 px-4 py-3 space-y-2">
                        <h5 className="text-[10px] font-extrabold text-[#44474e]/60 dark:text-[#d3e4fe]/40 uppercase tracking-wider">Komentar ({project.comments?.length || 0})</h5>
                        {(!project.comments || project.comments.length === 0) ? (
                          <p className="text-[10px] text-[#44474e]/40 dark:text-[#d3e4fe]/20 italic py-2">Belum ada komentar untuk proyek ini.</p>
                        ) : (
                          project.comments.map((c, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-slate-50 dark:bg-[#071121] rounded-xl px-3 py-2.5 border border-[#e5e7eb]/60 dark:border-[#1e3a5f]/20">
                              <div className="w-7 h-7 rounded-full bg-[#005bc1]/10 dark:bg-[#60a5fa]/10 flex items-center justify-center shrink-0 mt-0.5">
                                <span className="text-[10px] font-extrabold text-[#005bc1] dark:text-[#60a5fa]">{c.name?.charAt(0)?.toUpperCase()}</span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="text-[10px] font-extrabold text-[#031636] dark:text-white">{c.name}</span>
                                <p className="text-[10px] text-[#44474e]/70 dark:text-[#d3e4fe]/50 font-medium mt-0.5 break-words">{c.comment}</p>
                              </div>
                              <button
                                onClick={() => handleDeleteComment(project.id, idx)}
                                className="w-7 h-7 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-600 transition-all cursor-pointer shrink-0"
                                title="Hapus Komentar"
                              >
                                <span className="material-symbols-outlined text-sm">delete</span>
                              </button>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: ACTIVITY LOG */}
          {activeSubTab === 'activity' && (
            <ActivityLogTab />
          )}

          {/* TAB: WEBSITE ANALYTICS */}
          {activeSubTab === 'analytics' && (
            <WebsiteAnalytics />
          )}


        </main>
      </div>
    </div>
  )
}
