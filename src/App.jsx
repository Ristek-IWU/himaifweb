import React, { useState, useEffect } from 'react'
import Navbar from './components/home/Navbar'
import Hero from './components/home/Hero'
import Vision from './components/home/Vision'
import About from './components/home/About'
import Projects from './components/home/Projects'
import Contact from './components/home/Contact'
import Footer from './components/home/Footer'
import StrukturOrganisasi from './components/struktur'
import Tentang from './components/tentang'
import InShow from './components/inshow'
import AdminDashboard from './components/admin/AdminDashboard'
import AdminLogin, { isAdminAuthenticated, refreshAdminSession, logoutAdmin } from './components/admin/AdminLogin'
import { trackPageView, trackBrowserInfo } from './utils/analyticsTracker'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [isPortalActive, setIsPortalActive] = useState(() => {
    return sessionStorage.getItem('himaif_portal_open') === 'true'
  })
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => isAdminAuthenticated())

  // Track browser info on mount
  useEffect(() => {
    trackBrowserInfo()
  }, [])

  // Track page views on tab change
  useEffect(() => {
    if (activeTab && activeTab !== 'admin') {
      trackPageView(activeTab)
    }
  }, [activeTab])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'structure') {
        setActiveTab('structure')
      } else if (hash) {
        setActiveTab(hash)
      } else {
        setActiveTab('home')
      }
    }

    // Set initial active tab from window location hash
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Refresh admin session on every tab activation
  useEffect(() => {
    if (activeTab === 'admin' && isAdminLoggedIn) {
      refreshAdminSession()
    }
  }, [activeTab, isAdminLoggedIn])

  // Check session timeout periodically
  useEffect(() => {
    if (!isAdminLoggedIn) return
    const interval = setInterval(() => {
      if (!isAdminAuthenticated()) {
        setIsAdminLoggedIn(false)
      }
    }, 60000) // Check every minute
    return () => clearInterval(interval)
  }, [isAdminLoggedIn])

  useEffect(() => {
    if (activeTab !== 'structure' && activeTab !== 'tentang' && activeTab !== 'admin') {
      const element = document.getElementById(activeTab === 'home' ? 'root' : activeTab)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [activeTab])

  const handleAdminLogout = () => {
    logoutAdmin()
    setIsAdminLoggedIn(false)
  }

  const mainPage = activeTab === 'structure' ? 'structure' : activeTab === 'tentang' ? 'tentang' : activeTab === 'admin' ? 'admin' : 'home'

  return (
    <div className="min-h-screen overflow-x-hidden bg-background dark:bg-[#050c18] text-on-surface dark:text-[#d3e4fe] selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Admin has its own dedicated layout — no Navbar/Footer */}
      {activeTab === 'admin' ? (
        isAdminLoggedIn ? (
          <div key="admin" className="animate-fade-in-up">
            <AdminDashboard onLogout={handleAdminLogout} />
          </div>
        ) : (
          <AdminLogin onLoginSuccess={() => setIsAdminLoggedIn(true)} />
        )
      ) : (
        <>
          {!isPortalActive && (
            <>
              <Navbar active={activeTab} setActive={setActiveTab} />
              <main className="pt-20 md:pt-[120px]">
                <div key={mainPage} className="animate-fade-in-up">
                  {activeTab === 'structure' ? (
                    <StrukturOrganisasi />
                  ) : activeTab === 'tentang' ? (
                    <Tentang />
                  ) : (
                    <>
                      <div id="home">
                        <Hero />
                      </div>
                      <div id="vision">
                        <Vision />
                      </div>
                      <div id="about">
                        <About />
                      </div>
                      <div id="projects">
                        <Projects />
                      </div>
                      <div id="contact">
                        <Contact />
                      </div>
                    </>
                  )}
                </div>
              </main>
              <Footer />
            </>
          )}
          <InShow onOpenChange={setIsPortalActive} />
        </>
      )}
    </div>
  )
}

export default App

