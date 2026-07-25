import React, { useState, useEffect } from 'react'
import { getAnalytics, getSessions, getAverageSessionDuration, formatDuration, resetAnalytics } from '../../utils/analyticsTracker'
import { formatTimestamp } from '../../utils/activityLogger'

export default function WebsiteAnalytics() {
  const [stats, setStats] = useState(getAnalytics())
  const [sessions, setSessions] = useState(getSessions())
  const [avgDuration, setAvgDuration] = useState(getAverageSessionDuration())

  const handleReset = () => {
    if (window.confirm("Apakah Anda yakin ingin mereset seluruh data analitik?")) {
      resetAnalytics()
      setStats(getAnalytics())
      setSessions(getSessions())
      setAvgDuration(0)
    }
  }

  // Find most active page
  const pageViewEntries = Object.entries(stats.pageViews || {})
  const totalViews = stats.totalPageViews || 0

  // Find most active language
  const langUsageEntries = Object.entries(stats.languageUsage || {})
  const totalLangUsage = langUsageEntries.reduce((acc, [_, count]) => acc + count, 0)

  // Browser distribution
  const browserEntries = Object.entries(stats.browserStats || {})
  const totalBrowsers = browserEntries.reduce((acc, [_, count]) => acc + count, 0)

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-serif font-extrabold text-[#031636] dark:text-white">Analitik Website</h2>
          <p className="text-xs text-[#44474e] dark:text-[#d3e4fe]/60">Metrik performa, kunjungan halaman, statistik perangkat, dan durasi sesi pengunjung.</p>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 bg-red-50 dark:bg-red-500/10 hover:bg-red-100 dark:hover:bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold px-3 py-2.5 rounded-xl border border-red-200 dark:border-red-500/20 transition-all cursor-pointer self-start sm:self-auto"
        >
          <span className="material-symbols-outlined text-sm">restart_alt</span>
          Reset Analitik
        </button>
      </div>

      {/* Grid: 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 p-5 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#44474e] dark:text-[#d3e4fe]/70">Page Views</span>
            <span className="material-symbols-outlined text-blue-500 text-lg">visibility</span>
          </div>
          <p className="text-3xl font-extrabold text-[#031636] dark:text-white">{stats.totalPageViews || 0}</p>
          <span className="text-[9px] text-[#44474e]/50 dark:text-[#d3e4fe]/30 font-medium">Total kunjungan halaman utama</span>
        </div>

        <div className="bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 p-5 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#44474e] dark:text-[#d3e4fe]/70">Portal Visits</span>
            <span className="material-symbols-outlined text-purple-500 text-lg">rocket_launch</span>
          </div>
          <p className="text-3xl font-extrabold text-[#031636] dark:text-white">{stats.portalVisits || 0}</p>
          <span className="text-[9px] text-[#44474e]/50 dark:text-[#d3e4fe]/30 font-medium">Total kunjungan InShow Portal</span>
        </div>

        <div className="bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 p-5 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#44474e] dark:text-[#d3e4fe]/70">Rata-rata Durasi Sesi</span>
            <span className="material-symbols-outlined text-emerald-500 text-lg">timer</span>
          </div>
          <p className="text-3xl font-extrabold text-[#031636] dark:text-white">{formatDuration(avgDuration)}</p>
          <span className="text-[9px] text-[#44474e]/50 dark:text-[#d3e4fe]/30 font-medium">Waktu rata-rata per sesi InShow</span>
        </div>

        <div className="bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 p-5 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#44474e] dark:text-[#d3e4fe]/70">Device Distribution</span>
            <span className="material-symbols-outlined text-indigo-500 text-lg">devices</span>
          </div>
          <p className="text-xl font-extrabold text-[#031636] dark:text-white flex items-baseline gap-1.5 mt-2">
            <span>💻 {stats.deviceStats?.desktop || 0}</span>
            <span className="text-xs text-[#44474e]/50 dark:text-[#d3e4fe]/50 font-medium">/</span>
            <span>📱 {stats.deviceStats?.mobile || 0}</span>
          </p>
          <span className="text-[9px] text-[#44474e]/50 dark:text-[#d3e4fe]/30 font-medium mt-1 block">Desktop vs Mobile</span>
        </div>
      </div>

      {/* Grid: Charts & Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Halaman Terpopuler (CSS-only Bar Chart) */}
        <div className="bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 p-6 rounded-2xl space-y-4">
          <div>
            <h4 className="text-xs font-extrabold text-[#031636] dark:text-white uppercase tracking-wider">Halaman Terpopuler</h4>
            <p className="text-[10px] text-[#44474e]/60 dark:text-[#d3e4fe]/40 font-medium">Distribusi kunjungan berdasarkan section landing page.</p>
          </div>
          <div className="space-y-3 pt-2">
            {pageViewEntries.map(([page, count]) => {
              const percentage = totalViews > 0 ? Math.round((count / totalViews) * 100) : 0
              return (
                <div key={page} className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold text-[#44474e] dark:text-[#d3e4fe]/70">
                    <span className="capitalize">{page}</span>
                    <span>{count} view ({percentage}%)</span>
                  </div>
                  <div className="w-full h-2 bg-[#005bc1]/5 dark:bg-[#60a5fa]/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#005bc1] to-[#60a5fa] rounded-full transition-all duration-1000"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Card 2: Bahasa & Browser Stats */}
        <div className="grid grid-cols-1 gap-6">
          {/* Bahasa Aktif */}
          <div className="bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 p-6 rounded-2xl space-y-4">
            <div>
              <h4 className="text-xs font-extrabold text-[#031636] dark:text-white uppercase tracking-wider">Bahasa yang Digunakan</h4>
              <p className="text-[10px] text-[#44474e]/60 dark:text-[#d3e4fe]/40 font-medium">Distribusi preferensi bahasa yang dipilih pengunjung.</p>
            </div>
            <div className="flex items-center gap-4 pt-1">
              <div className="flex-1 space-y-3">
                {langUsageEntries.map(([lang, count]) => {
                  const percentage = totalLangUsage > 0 ? Math.round((count / totalLangUsage) * 100) : 0
                  return (
                    <div key={lang} className="flex items-center justify-between text-[10px] font-bold">
                      <span className="text-[#031636] dark:text-white flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#005bc1]" />
                        {lang === 'ID' ? 'Indonesian' : lang === 'EN' ? 'English' : lang === 'KR' ? 'Korean' : 'Taiwanese'}
                      </span>
                      <span className="text-[#44474e]/60 dark:text-[#d3e4fe]/40">{count} ({percentage}%)</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Browser Stats */}
          <div className="bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 p-6 rounded-2xl space-y-4">
            <div>
              <h4 className="text-xs font-extrabold text-[#031636] dark:text-white uppercase tracking-wider">Browser Pengunjung</h4>
              <p className="text-[10px] text-[#44474e]/60 dark:text-[#d3e4fe]/40 font-medium">Jenis aplikasi browser yang digunakan untuk mengakses situs.</p>
            </div>
            <div className="space-y-3">
              {browserEntries.length === 0 ? (
                <p className="text-[10px] text-[#44474e]/40 dark:text-[#d3e4fe]/20 text-center font-bold">Belum ada statistik browser.</p>
              ) : (
                browserEntries.map(([browser, count]) => {
                  const percentage = totalBrowsers > 0 ? Math.round((count / totalBrowsers) * 100) : 0
                  return (
                    <div key={browser} className="space-y-1">
                      <div className="flex justify-between text-[10px] font-bold text-[#44474e] dark:text-[#d3e4fe]/70">
                        <span>{browser}</span>
                        <span>{count} ({percentage}%)</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#005bc1]/5 dark:bg-[#60a5fa]/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-indigo-500 rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Sesi Pengunjung Terkini */}
      <div className="bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 p-6 rounded-2xl space-y-4">
        <div>
          <h4 className="text-xs font-extrabold text-[#031636] dark:text-white uppercase tracking-wider">Sesi Pengunjung Terkini</h4>
          <p className="text-[10px] text-[#44474e]/60 dark:text-[#d3e4fe]/40 font-medium">Log aktivitas durasi sesi pengunjung portal InShow.</p>
        </div>

        {sessions.length === 0 ? (
          <p className="text-xs text-[#44474e]/40 dark:text-[#d3e4fe]/20 text-center py-6 font-bold">Belum ada sesi portal yang tercatat.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#e5e7eb] dark:border-[#1e3a5f]/30">
                  <th className="py-2 text-[10px] font-extrabold text-[#44474e]/60 dark:text-[#d3e4fe]/40 uppercase tracking-wider">ID Sesi</th>
                  <th className="py-2 text-[10px] font-extrabold text-[#44474e]/60 dark:text-[#d3e4fe]/40 uppercase tracking-wider">Browser</th>
                  <th className="py-2 text-[10px] font-extrabold text-[#44474e]/60 dark:text-[#d3e4fe]/40 uppercase tracking-wider">Waktu Masuk</th>
                  <th className="py-2 text-[10px] font-extrabold text-[#44474e]/60 dark:text-[#d3e4fe]/40 uppercase tracking-wider">Durasi Aktif</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map(s => (
                  <tr key={s.id} className="border-b border-[#e5e7eb]/50 dark:border-[#1e3a5f]/20 font-medium text-[#44474e]/80 dark:text-[#d3e4fe]/70">
                    <td className="py-3 font-mono text-[10px]">{s.id}</td>
                    <td className="py-3">{s.browser}</td>
                    <td className="py-3 text-[10px] font-mono">{formatTimestamp(s.timestamp)}</td>
                    <td className="py-3 text-emerald-600 dark:text-emerald-400 font-bold">{formatDuration(s.duration)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
