import React from 'react'
import StrukturHeader from './StrukturHeader'
import Leadership from './Leadership'
import SecretariesTreasurers from './SecretariesTreasurers'
import Divisions from './Divisions'

export default function StrukturOrganisasi() {
  return (
    <section className="min-h-screen bg-[#f0f2f8] dark:bg-gradient-to-br dark:from-[#040d1a] dark:via-[#080f1e] dark:to-[#0a1628] relative overflow-hidden pb-12 md:pb-16">
      {/* Map coordinate grid */}
      <div
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(0,91,193,0.06) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(0,91,193,0.06) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '48px 48px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(96,165,250,0.05) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(96,165,250,0.05) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '48px 48px',
        }}
      />
      <div className="max-w-[1120px] mx-auto px-6 space-y-4 sm:space-y-6 relative z-10">
        <StrukturHeader />
        
        {/* Hierarchy Levels */}
        <div className="space-y-4 sm:space-y-6">
          {/* Tier 1: BPH (Core Leadership + Secretaries/Treasurers) */}
          <Leadership />

          <SecretariesTreasurers />

          {/* Tier 2: Divisions (5 divisions with connectors) */}
          <Divisions />
        </div>
      </div>
    </section>
  )
}
