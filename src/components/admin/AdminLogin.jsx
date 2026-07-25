import React, { useState } from 'react'
import { logActivity, ACTIVITY_TYPES } from '../../utils/activityLogger'

// Simulated admin credentials (hashed in a real app)
const ADMIN_CREDENTIALS = {
  email: 'admin@himaifsynapse.org',
  password: 'himaif2026'
}

const AUTH_SESSION_KEY = 'himaif_admin_auth'
const AUTH_TIMEOUT_KEY = 'himaif_admin_auth_ts'
const SESSION_DURATION = 30 * 60 * 1000 // 30 menit

/**
 * Cek apakah admin sudah login dan sesi masih berlaku
 */
export function isAdminAuthenticated() {
  const auth = sessionStorage.getItem(AUTH_SESSION_KEY)
  const ts = sessionStorage.getItem(AUTH_TIMEOUT_KEY)
  
  if (auth === 'true' && ts) {
    const elapsed = Date.now() - parseInt(ts, 10)
    if (elapsed < SESSION_DURATION) {
      return true
    }
    // Sesi sudah expired
    sessionStorage.removeItem(AUTH_SESSION_KEY)
    sessionStorage.removeItem(AUTH_TIMEOUT_KEY)
  }
  return false
}

/**
 * Refresh timestamp sesi (dipanggil setiap interaksi admin)
 */
export function refreshAdminSession() {
  sessionStorage.setItem(AUTH_TIMEOUT_KEY, Date.now().toString())
}

/**
 * Logout admin
 */
export function logoutAdmin() {
  logActivity(ACTIVITY_TYPES.ADMIN_LOGOUT, 'Admin', '', 'Admin logout dari CMS Dashboard')
  sessionStorage.removeItem(AUTH_SESSION_KEY)
  sessionStorage.removeItem(AUTH_TIMEOUT_KEY)
}


export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulasi delay autentikasi
    setTimeout(() => {
      if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        sessionStorage.setItem(AUTH_SESSION_KEY, 'true')
        sessionStorage.setItem(AUTH_TIMEOUT_KEY, Date.now().toString())
        logActivity(ACTIVITY_TYPES.ADMIN_LOGIN, 'Admin', '', `Login berhasil dari ${navigator.userAgent.includes('Chrome') ? 'Chrome' : navigator.userAgent.includes('Firefox') ? 'Firefox' : 'Browser'}`)
        onLoginSuccess()
      } else {
        setError('Email atau password salah. Silakan coba lagi.')
      }
      setIsLoading(false)
    }, 800)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e8edf8] via-[#f0f4ff] to-[#dce6f8] dark:from-[#040d1a] dark:via-[#081222] dark:to-[#0a1628] relative overflow-hidden">
      {/* Background decorations */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60 dark:opacity-40"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(0,91,193,0.04) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(0,91,193,0.04) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#005bc1]/8 dark:bg-[#005bc1]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-[#60a5fa]/8 dark:bg-[#60a5fa]/10 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Animated orbit ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-[#005bc1]/10 dark:border-[#60a5fa]/8 animate-orbit-rotate pointer-events-none" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-[420px] mx-4">
        <div className="bg-white/80 dark:bg-[#0d1b33]/80 backdrop-blur-2xl border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-3xl shadow-[0_20px_80px_rgba(0,91,193,0.12)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.4)] p-8 sm:p-10">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#005bc1] to-[#003d80] dark:from-[#60a5fa] dark:to-[#005bc1] flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-white text-3xl">shield_lock</span>
            </div>
            <h1 className="text-xl font-serif font-extrabold text-[#031636] dark:text-white tracking-tight">CMS Synapse</h1>
            <p className="text-xs text-[#44474e] dark:text-[#d3e4fe]/60 mt-1">Masuk ke panel administrator HIMAIF</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-extrabold text-[#031636] dark:text-white uppercase tracking-wider mb-1.5">Email Admin</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#44474e]/40 dark:text-[#d3e4fe]/30 text-base">mail</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@himaifsynapse.org"
                  required
                  className="w-full bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-[#031636] dark:text-white placeholder:text-[#44474e]/40 focus:outline-none focus:ring-2 focus:ring-[#005bc1]/30 focus:border-[#005bc1] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-extrabold text-[#031636] dark:text-white uppercase tracking-wider mb-1.5">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#44474e]/40 dark:text-[#d3e4fe]/30 text-base">lock</span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  required
                  className="w-full bg-slate-50 dark:bg-[#071121] border border-[#e5e7eb] dark:border-[#1e3a5f]/40 rounded-xl pl-10 pr-12 py-3 text-xs font-medium text-[#031636] dark:text-white placeholder:text-[#44474e]/40 focus:outline-none focus:ring-2 focus:ring-[#005bc1]/30 focus:border-[#005bc1] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#44474e]/40 dark:text-[#d3e4fe]/30 hover:text-[#005bc1] transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 px-3 py-2.5 rounded-xl animate-fade-in-up">
                <span className="material-symbols-outlined text-sm">error</span>
                <span className="text-[11px] font-bold">{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#005bc1] to-[#003d80] hover:from-[#004da6] hover:to-[#003370] dark:from-[#60a5fa] dark:to-[#005bc1] dark:hover:from-[#7bb5fb] dark:hover:to-[#0070e0] text-white text-xs font-extrabold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
                  Memverifikasi...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-sm">login</span>
                  Masuk ke Dashboard
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-5 border-t border-[#e5e7eb] dark:border-[#1e3a5f]/30">
            <div className="flex items-center justify-center gap-2 text-[#44474e]/50 dark:text-[#d3e4fe]/30">
              <span className="material-symbols-outlined text-xs">lock</span>
              <span className="text-[9px] font-medium">Sesi akan berakhir otomatis setelah 30 menit tidak aktif</span>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <button
          onClick={() => { window.location.hash = '' }}
          className="mt-4 w-full flex items-center justify-center gap-1.5 text-[#44474e] dark:text-[#d3e4fe]/60 hover:text-[#005bc1] dark:hover:text-[#60a5fa] text-xs font-bold transition-colors cursor-pointer py-2"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Kembali ke Halaman Utama
        </button>
      </div>
    </div>
  )
}
