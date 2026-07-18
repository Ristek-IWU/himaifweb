import React from 'react'

export default function LoadingSplash() {
  return (
    <div className="fixed inset-0 z-[60] bg-[#f0f2f8] dark:bg-[#040c18] flex flex-col items-center justify-center animate-[fade-in_0.2s_ease-out] overflow-hidden">
      
      {/* Background Coordinate Grid (Light) */}
      <div
        className="absolute inset-0 pointer-events-none z-0 dark:hidden"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(0,91,193,0.05) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(0,91,193,0.05) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '48px 48px',
        }}
      />
      {/* Background Coordinate Grid (Dark) */}
      <div
        className="absolute inset-0 pointer-events-none z-0 hidden dark:block"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(96,165,250,0.04) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(96,165,250,0.04) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '48px 48px',
        }}
      />

      {/* Ambient Glows */}
      <div className="absolute top-1/3 right-20 w-[350px] h-[350px] bg-[#005bc1]/5 dark:bg-[#005bc1]/15 blur-[100px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-1/3 left-20 w-[250px] h-[250px] bg-[#005bc1]/5 dark:bg-[#60a5fa]/10 blur-[80px] rounded-full pointer-events-none z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Simple Modern Spinner */}
        <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-[#005bc1] dark:border-white/10 dark:border-t-[#60a5fa] animate-spin mb-4"></div>
        <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">Memuat Showcase...</p>
      </div>
    </div>
  )
}
