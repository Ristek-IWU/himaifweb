/**
 * Activity Logger — Utility untuk mencatat semua aktivitas di InShow Portal & Admin
 * Data disimpan di localStorage agar konsisten dengan arsitektur website.
 */

const STORAGE_KEY = 'himaif_activity_log'
const MAX_LOGS = 200 // Batasi jumlah log agar localStorage tidak membengkak

/**
 * Jenis-jenis aktivitas yang bisa dicatat
 */
export const ACTIVITY_TYPES = {
  UPLOAD: 'upload',
  COMMENT: 'comment',
  UPVOTE: 'upvote',
  LOGIN: 'login',
  LOGOUT: 'logout',
  TOGGLE_PRIVACY: 'toggle_privacy',
  DELETE: 'delete',
  ADMIN_LOGIN: 'admin_login',
  ADMIN_LOGOUT: 'admin_logout',
  EDIT: 'edit',
  DRAFT_SAVE: 'draft_save',
  DRAFT_DELETE: 'draft_delete',
}

/**
 * Konfigurasi tampilan per jenis aktivitas
 */
export const ACTIVITY_CONFIG = {
  [ACTIVITY_TYPES.UPLOAD]:         { label: 'Upload Proyek',    icon: 'cloud_upload',     color: 'emerald' },
  [ACTIVITY_TYPES.COMMENT]:        { label: 'Komentar',         icon: 'chat_bubble',      color: 'blue' },
  [ACTIVITY_TYPES.UPVOTE]:         { label: 'Upvote',           icon: 'thumb_up',         color: 'amber' },
  [ACTIVITY_TYPES.LOGIN]:          { label: 'Login Portal',     icon: 'login',            color: 'purple' },
  [ACTIVITY_TYPES.LOGOUT]:         { label: 'Logout Portal',    icon: 'logout',           color: 'slate' },
  [ACTIVITY_TYPES.TOGGLE_PRIVACY]: { label: 'Toggle Privacy',   icon: 'visibility',       color: 'cyan' },
  [ACTIVITY_TYPES.DELETE]:         { label: 'Hapus',            icon: 'delete',           color: 'red' },
  [ACTIVITY_TYPES.ADMIN_LOGIN]:    { label: 'Login Admin',      icon: 'admin_panel_settings', color: 'indigo' },
  [ACTIVITY_TYPES.ADMIN_LOGOUT]:   { label: 'Logout Admin',     icon: 'shield',           color: 'slate' },
  [ACTIVITY_TYPES.EDIT]:           { label: 'Edit Proyek',      icon: 'edit',             color: 'orange' },
  [ACTIVITY_TYPES.DRAFT_SAVE]:     { label: 'Simpan Draft',     icon: 'save',             color: 'teal' },
  [ACTIVITY_TYPES.DRAFT_DELETE]:   { label: 'Hapus Draft',      icon: 'delete_sweep',     color: 'rose' },
}

/**
 * Tambahkan log aktivitas baru
 * @param {string} type - Jenis aktivitas (dari ACTIVITY_TYPES)
 * @param {string} actor - Nama pelaku
 * @param {string} target - Objek target (judul proyek, nama file, dll)
 * @param {string} detail - Keterangan tambahan
 */
export function logActivity(type, actor, target = '', detail = '') {
  const logs = getActivityLogs()

  const newLog = {
    id: Date.now() + Math.random().toString(36).substr(2, 5),
    type,
    actor,
    target,
    detail,
    timestamp: new Date().toISOString(),
  }

  // Tambahkan di awal (terbaru di atas) dan batasi jumlah
  const updated = [newLog, ...logs].slice(0, MAX_LOGS)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))

  return newLog
}

/**
 * Ambil semua log aktivitas
 * @returns {Array} Daftar log aktivitas
 */
export function getActivityLogs() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

/**
 * Bersihkan semua log
 */
export function clearActivityLogs() {
  localStorage.removeItem(STORAGE_KEY)
}

/**
 * Hitung jumlah aktivitas hari ini
 * @returns {number}
 */
export function getTodayActivityCount() {
  const logs = getActivityLogs()
  const today = new Date().toDateString()
  return logs.filter(log => new Date(log.timestamp).toDateString() === today).length
}

/**
 * Format timestamp ke format lokal Indonesia
 * @param {string} isoString - ISO timestamp string
 * @returns {string} Formatted date string
 */
export function formatTimestamp(isoString) {
  return new Date(isoString).toLocaleString('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}
