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
import InShow from './components/InShow'

function App() {
  const [activeTab, setActiveTab] = useState('home')

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

  useEffect(() => {
    if (activeTab !== 'structure' && activeTab !== 'tentang') {
      const element = document.getElementById(activeTab === 'home' ? 'root' : activeTab)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [activeTab])

  return (
    <div className="min-h-screen overflow-x-hidden bg-background dark:bg-[#050c18] text-on-surface dark:text-[#d3e4fe] selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar active={activeTab} setActive={setActiveTab} />
      <main className="pt-[120px]">
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
      </main>
      <Footer />
      <InShow />
    </div>
  )
}

export default App

