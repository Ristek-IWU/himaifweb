/**
 * Analytics Tracker — Utility untuk mencatat metrik kunjungan & performa website
 * Data disimpan di localStorage agar konsisten dengan arsitektur client-side.
 */

const ANALYTICS_KEY = 'himaif_analytics'
const SESSIONS_KEY = 'himaif_sessions'
const MAX_SESSIONS = 50

/**
 * Mendapatkan data analitik saat ini
 */
export function getAnalytics() {
  try {
    const saved = localStorage.getItem(ANALYTICS_KEY)
    return saved ? JSON.parse(saved) : getDefaultAnalytics()
  } catch {
    return getDefaultAnalytics()
  }
}

function getDefaultAnalytics() {
  return {
    totalPageViews: 0,
    portalVisits: 0,
    pageViews: {
      home: 0,
      vision: 0,
      about: 0,
      projects: 0,
      contact: 0,
      structure: 0,
      tentang: 0,
      inshow: 0,
    },
    languageUsage: {
      ID: 0,
      EN: 0,
      KR: 0,
      TW: 0,
    },
    browserStats: {},
    deviceStats: { desktop: 0, mobile: 0 },
    firstVisit: new Date().toISOString(),
  }
}

function saveAnalytics(data) {
  localStorage.setItem(ANALYTICS_KEY, JSON.stringify(data))
}

/**
 * Catat kunjungan halaman
 */
export function trackPageView(page) {
  const data = getAnalytics()
  data.totalPageViews++
  // Pastikan key 'inshow' ada jika data lama belum memilikinya
  if (data.pageViews.inshow === undefined) data.pageViews.inshow = 0
  if (data.pageViews[page] !== undefined) {
    data.pageViews[page]++
  }
  saveAnalytics(data)
}

/**
 * Catat kunjungan InShow portal
 */
export function trackPortalVisit() {
  const data = getAnalytics()
  data.portalVisits++
  // Juga catat ke distribusi halaman
  if (data.pageViews.inshow === undefined) data.pageViews.inshow = 0
  data.pageViews.inshow++
  data.totalPageViews++
  saveAnalytics(data)
}

/**
 * Catat penggunaan bahasa
 */
export function trackLanguageUsage(lang) {
  const data = getAnalytics()
  const key = lang?.toUpperCase() || 'ID'
  if (data.languageUsage[key] !== undefined) {
    data.languageUsage[key]++
  }
  saveAnalytics(data)
}

/**
 * Catat info browser & device (dipanggil sekali per sesi)
 */
export function trackBrowserInfo() {
  const data = getAnalytics()
  const ua = navigator.userAgent
  let browser = 'Other'
  if (ua.includes('Chrome') && !ua.includes('Edg')) browser = 'Chrome'
  else if (ua.includes('Firefox')) browser = 'Firefox'
  else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari'
  else if (ua.includes('Edg')) browser = 'Edge'
  else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera'

  data.browserStats[browser] = (data.browserStats[browser] || 0) + 1

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
  if (isMobile) {
    data.deviceStats.mobile++
  } else {
    data.deviceStats.desktop++
  }

  saveAnalytics(data)
}

// ── Session Tracking ──

/**
 * Mulai sesi baru (saat portal dibuka)
 */
export function startSession(type = 'page') {
  const sessionId = Date.now().toString()
  sessionStorage.setItem('himaif_current_session', JSON.stringify({
    id: sessionId,
    type,
    startTime: Date.now(),
  }))
  return sessionId
}

/**
 * Akhiri sesi dan simpan durasi
 */
export function endSession() {
  const current = sessionStorage.getItem('himaif_current_session')
  if (!current) return

  try {
    const session = JSON.parse(current)
    const duration = Math.floor((Date.now() - session.startTime) / 1000) // detik

    const sessions = getSessions()
    const ua = navigator.userAgent
    let browser = 'Other'
    if (ua.includes('Chrome') && !ua.includes('Edg')) browser = 'Chrome'
    else if (ua.includes('Firefox')) browser = 'Firefox'
    else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari'
    else if (ua.includes('Edg')) browser = 'Edge'

    sessions.unshift({
      id: session.id,
      type: session.type,
      browser,
      duration,
      timestamp: new Date(session.startTime).toISOString(),
    })

    localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions.slice(0, MAX_SESSIONS)))
    sessionStorage.removeItem('himaif_current_session')
  } catch { /* ignore */ }
}

/**
 * Ambil daftar sesi yang tersimpan
 */
export function getSessions() {
  try {
    const saved = localStorage.getItem(SESSIONS_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

/**
 * Hitung rata-rata durasi sesi (dalam detik)
 */
export function getAverageSessionDuration() {
  const sessions = getSessions()
  if (sessions.length === 0) return 0
  const total = sessions.reduce((acc, s) => acc + (s.duration || 0), 0)
  return Math.round(total / sessions.length)
}

/**
 * Format durasi detik ke mm:ss
 */
export function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}m ${secs < 10 ? '0' : ''}${secs}s`
}

/**
 * Reset semua data analitik
 */
export function resetAnalytics() {
  localStorage.removeItem(ANALYTICS_KEY)
  localStorage.removeItem(SESSIONS_KEY)
  sessionStorage.removeItem('himaif_current_session')
}
