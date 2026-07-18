import React, { useState, useEffect, useMemo } from 'react'
import { categoryGroups, groupOrder, initialProjects, initialDriveFiles } from './constants'
import './animations.css'

import LoadingSplash from './LoadingSplash'
import PortalNavbar from './PortalNavbar'
import Sidebar from './Sidebar'
import ShowcaseTab from './ShowcaseTab'
import DriveTab from './DriveTab'
import UploadTab from './UploadTab'
import ProjectDetailModal from './ProjectDetailModal'
import { ExitConfirmModal, DraftConfirmModal } from './ConfirmModals'

export default function InShowPortal({ onOpenChange }) {
  const [isOpen, setIsOpen] = useState(() => {
    return sessionStorage.getItem('himaif_portal_open') === 'true'
  })
  const [activeTab, setActiveTab] = useState(() => {
    return sessionStorage.getItem('himaif_portal_tab') || 'showcase'
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  
  // Search and Active Category Filters
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilters, setActiveFilters] = useState({
    platform: null,
    sector: null,
    language: null,
    framework: null,
    infrastructure: null
  })

  // Accordion Expand/Collapse States
  const [expandedGroups, setExpandedGroups] = useState({
    platform: true,
    sector: true,
    language: false,
    framework: false,
    infrastructure: false
  })

  // Mobile Filter Drawer Toggle State
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  // Show All Tags Toggle State (For pagination in category sidebar)
  const [showAllTags, setShowAllTags] = useState({
    platform: false,
    sector: false,
    language: false,
    framework: false,
    infrastructure: false
  })

  const toggleShowAllTags = (groupKey) => {
    setShowAllTags(prev => ({
      ...prev,
      [groupKey]: !prev[groupKey]
    }))
  }

  // Loading & Exit Confirmation States
  const [isLoading, setIsLoading] = useState(false)
  const [showExitConfirm, setShowExitConfirm] = useState(false)
  const [loadingStep, setLoadingStep] = useState(0)

  // Portal Theme States (independent from main site, synchronized on initialization)
  const [portalDarkMode, setPortalDarkMode] = useState(() => {
    const saved = sessionStorage.getItem('himaif_portal_dark')
    if (saved !== null) {
      return saved === 'true'
    }
    return document.documentElement.classList.contains('dark')
  })
  const [previousDarkMode, setPreviousDarkMode] = useState(() => {
    const saved = sessionStorage.getItem('himaif_portal_prev_dark')
    if (saved !== null) {
      return saved === 'true'
    }
    return document.documentElement.classList.contains('dark')
  })

  // Sync open state and active tab to sessionStorage
  useEffect(() => {
    sessionStorage.setItem('himaif_portal_open', isOpen ? 'true' : 'false')
  }, [isOpen])

  useEffect(() => {
    sessionStorage.setItem('himaif_portal_tab', activeTab)
  }, [activeTab])

  useEffect(() => {
    sessionStorage.setItem('himaif_portal_dark', portalDarkMode ? 'true' : 'false')
  }, [portalDarkMode])

  useEffect(() => {
    sessionStorage.setItem('himaif_portal_prev_dark', previousDarkMode ? 'true' : 'false')
  }, [previousDarkMode])

  // Notify parent component of portal active status (open or loading)
  useEffect(() => {
    if (onOpenChange) {
      onOpenChange(isOpen || isLoading)
    }
  }, [isOpen, isLoading, onOpenChange])

  // Loading splash screen timer
  useEffect(() => {
    if (!isLoading) return
    const stepTimers = [
      setTimeout(() => setLoadingStep(1), 400),
      setTimeout(() => setLoadingStep(2), 900),
      setTimeout(() => setLoadingStep(3), 1400),
      setTimeout(() => {
        setIsLoading(false)
        setIsOpen(true)
      }, 2200)
    ]
    return () => stepTimers.forEach(t => clearTimeout(t))
  }, [isLoading])

  // When portal opens: save current theme and match instead of forcing Light Mode
  useEffect(() => {
    if (isOpen) {
      const wasDark = document.documentElement.classList.contains('dark')
      setPreviousDarkMode(wasDark)
      // Only overwrite if it wasn't already stored in sessionStorage
      if (sessionStorage.getItem('himaif_portal_dark') === null) {
        setPortalDarkMode(wasDark)
      }
    }
  }, [isOpen])

  // When loading starts: also match theme
  useEffect(() => {
    if (isLoading) {
      const wasDark = document.documentElement.classList.contains('dark')
      setPreviousDarkMode(wasDark)
      setPortalDarkMode(wasDark)
    }
  }, [isLoading])

  // Sync portal theme toggle with document class
  useEffect(() => {
    if (!isOpen && !isLoading) return
    if (portalDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [portalDarkMode, isOpen, isLoading])

  // Handler: request exit (shows confirmation)
  const handleRequestExit = () => {
    setShowExitConfirm(true)
  }

  // Handler: confirm exit — restore previous theme
  const handleConfirmExit = () => {
    setShowExitConfirm(false)
    setIsOpen(false)
    
    // Clear session storage portal state
    sessionStorage.removeItem('himaif_portal_open')
    sessionStorage.removeItem('himaif_portal_tab')
    sessionStorage.removeItem('himaif_portal_dark')
    sessionStorage.removeItem('himaif_portal_prev_dark')
    
    // Restore the theme that was active before portal opened
    if (previousDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Handler: cancel exit
  const handleCancelExit = () => {
    setShowExitConfirm(false)
  }

  // Showcase Projects Database with detailed tags
  const [projects, setProjects] = useState(initialProjects)

  // Drive Storage Files Database (Simulated)
  const [driveFiles, setDriveFiles] = useState(initialDriveFiles)

  // Modal Detail & Upload States
  const [selectedProject, setSelectedProject] = useState(null)
  const [newComment, setNewComment] = useState('')

  // Upload Form Inputs
  const [formTitle, setFormTitle] = useState('')
  const [formDesc, setFormDesc] = useState('')
  const [formDemo, setFormDemo] = useState('')
  const [formGithub, setFormGithub] = useState('')
  const [formFiles, setFormFiles] = useState('App.jsx, index.css')

  // Interactive Tags States
  const [formTags, setFormTags] = useState([
    { name: 'Full Stack', icon: 'cycle' },
    { name: 'E-Commerce', icon: 'shopping_cart' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'React', icon: 'cycle' },
    { name: 'MySQL', icon: 'database' }
  ])
  const [tagInput, setTagInput] = useState('')
  const [isTagSuggestionsOpen, setIsTagSuggestionsOpen] = useState(false)

  // Navigation track
  const [previousTab, setPreviousTab] = useState('drive')
  const [pendingTab, setPendingTab] = useState(null)

  // Project Drafts States
  const [drafts, setDrafts] = useState(() => {
    const saved = localStorage.getItem('himaif_project_drafts')
    return saved ? JSON.parse(saved) : []
  })
  const [editingDraftId, setEditingDraftId] = useState(null)
  const [showDraftConfirm, setShowDraftConfirm] = useState(false)
  const [isDraftDropdownOpen, setIsDraftDropdownOpen] = useState(false)
  const [justSavedDraft, setJustSavedDraft] = useState(false)

  // Autocomplete tag suggestions list from our global categories data
  const allTagSuggestions = useMemo(() => {
    const list = []
    Object.values(categoryGroups).forEach(group => {
      group.tags.forEach(tag => {
        if (!list.some(item => item.name.toLowerCase() === tag.name.toLowerCase())) {
          list.push({ name: tag.name, icon: tag.icon })
        }
      })
    })
    return list
  }, [])

  // Add Tag Helper
  const handleAddTag = (tagName) => {
    const trimmed = tagName.trim()
    if (!trimmed) return

    // check duplicate
    if (formTags.some(t => t.name.toLowerCase() === trimmed.toLowerCase())) {
      setTagInput('')
      return
    }

    const existing = allTagSuggestions.find(t => t.name.toLowerCase() === trimmed.toLowerCase())
    const newTag = {
      name: existing ? existing.name : trimmed,
      icon: existing ? existing.icon : 'sell'
    }

    setFormTags([...formTags, newTag])
    setTagInput('')
    setIsTagSuggestionsOpen(false)
  }

  // Remove Tag Helper
  const handleRemoveTag = (tagName) => {
    setFormTags(formTags.filter(t => t.name.toLowerCase() !== tagName.toLowerCase()))
  }

  // Tag input Enter keydown handler
  const handleTagInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddTag(tagInput)
    }
  }

  // Reset Form helper
  const resetUploadForm = () => {
    setFormTitle('')
    setFormDesc('')
    setFormDemo('')
    setFormGithub('')
    setFormFiles('App.jsx, index.css')
    setFormTags([
      { name: 'Full Stack', icon: 'cycle' },
      { name: 'E-Commerce', icon: 'shopping_cart' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'cycle' },
      { name: 'MySQL', icon: 'database' }
    ])
    setEditingDraftId(null)
    setIsDraftDropdownOpen(false)
    setTagInput('')
  }

  // Save to Draft logic
  const handleSaveDraft = (e) => {
    if (e) e.preventDefault()
    
    // Require at least a title or description to save a draft
    if (!formTitle.trim() && !formDesc.trim() && !editingDraftId) {
      return
    }

    const draftId = editingDraftId || Date.now()
    const timestamp = new Date().toLocaleString('id-ID', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).replace(/\//g, '-')

    const newDraft = {
      id: draftId,
      title: formTitle,
      description: formDesc,
      demoUrl: formDemo,
      githubUrl: formGithub,
      files: formFiles,
      tagsList: formTags,
      updatedAt: timestamp
    }

    let updatedDrafts
    if (editingDraftId) {
      updatedDrafts = drafts.map(d => d.id === editingDraftId ? newDraft : d)
    } else {
      updatedDrafts = [newDraft, ...drafts]
    }

    setDrafts(updatedDrafts)
    localStorage.setItem('himaif_project_drafts', JSON.stringify(updatedDrafts))
    setEditingDraftId(draftId)

    // Trigger visual saved feedback
    setJustSavedDraft(true)
    setTimeout(() => setJustSavedDraft(false), 1500)
  }

  // Close/Batal handler
  const handleCloseUploadModal = () => {
    const isDirty = formTitle.trim() !== '' || formDesc.trim() !== '' || formDemo.trim() !== '' || formGithub.trim() !== ''

    if (isDirty) {
      if (editingDraftId) {
        const original = drafts.find(d => d.id === editingDraftId)
        if (original) {
          const tagsChanged = JSON.stringify(original.tagsList) !== JSON.stringify(formTags)
          const hasChanged = original.title !== formTitle ||
                             original.description !== formDesc ||
                             original.demoUrl !== formDemo ||
                             original.githubUrl !== formGithub ||
                             original.files !== formFiles ||
                             tagsChanged
          if (hasChanged) {
            setPendingTab(previousTab)
            setShowDraftConfirm(true)
            return
          }
        }
      } else {
        setPendingTab(previousTab)
        setShowDraftConfirm(true)
        return
      }
    }
    
    resetUploadForm()
    setActiveTab(previousTab)
  }

  const handleConfirmSaveDraft = () => {
    handleSaveDraft()
    resetUploadForm()
    setShowDraftConfirm(false)
    if (pendingTab) {
      setActiveTab(pendingTab)
      setPendingTab(null)
    } else {
      setActiveTab(previousTab)
    }
  }

  const handleConfirmDiscardDraft = () => {
    resetUploadForm()
    setShowDraftConfirm(false)
    if (pendingTab) {
      setActiveTab(pendingTab)
      setPendingTab(null)
    } else {
      setActiveTab(previousTab)
    }
  }

  const handleLoadDraft = (draft) => {
    setFormTitle(draft.title || '')
    setFormDesc(draft.description || '')
    setFormDemo(draft.demoUrl || '')
    setFormGithub(draft.githubUrl || '')
    setFormFiles(draft.files || 'App.jsx, index.css')
    
    if (draft.tagsList) {
      setFormTags(draft.tagsList)
    } else if (draft.tags) {
      const list = []
      Object.entries(draft.tags).forEach(([key, val]) => {
        if (val) {
          let icon = 'tag'
          Object.values(categoryGroups).forEach(group => {
            const found = group.tags.find(t => t.name === val)
            if (found) icon = found.icon
          })
          list.push({ name: val, icon })
        }
      })
      setFormTags(list)
    } else {
      setFormTags([])
    }

    setEditingDraftId(draft.id)
    setIsDraftDropdownOpen(false)
    
    setPreviousTab(activeTab)
    setActiveTab('upload')
  }

  const handleDeleteDraft = (draftId, e) => {
    if (e) e.stopPropagation()
    const updatedDrafts = drafts.filter(d => d.id !== draftId)
    setDrafts(updatedDrafts)
    localStorage.setItem('himaif_project_drafts', JSON.stringify(updatedDrafts))
    if (editingDraftId === draftId) {
      setEditingDraftId(null)
    }
  }

  // Create Button Click
  const handleCreateClick = () => {
    if (isLoggedIn) {
      setPreviousTab(activeTab)
      setActiveTab('upload')
    } else {
      setActiveTab('drive')
    }
  }

  // Tab switch navigator with dirty check
  const handleTabChange = (targetTab) => {
    if (activeTab === 'upload') {
      const isDirty = formTitle.trim() !== '' || formDesc.trim() !== '' || formDemo.trim() !== '' || formGithub.trim() !== ''
      if (isDirty) {
        setPendingTab(targetTab)
        setShowDraftConfirm(true)
        return
      }
    }
    setActiveTab(targetTab)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  const handleLoginDemo = () => {
    setIsLoggedIn(true)
  }

  const handleUpvote = (id, e) => {
    e.stopPropagation()
    setProjects(projects.map(proj => {
      if (proj.id === id) {
        return {
          ...proj,
          upvotes: proj.hasUpvoted ? proj.upvotes - 1 : proj.upvotes + 1,
          hasUpvoted: !proj.hasUpvoted
        }
      }
      return proj
    }))
  }

  const handleAddComment = (e) => {
    e.preventDefault()
    if (!newComment.trim()) return

    setProjects(projects.map(proj => {
      if (proj.id === selectedProject.id) {
        const updatedComments = [
          ...proj.comments,
          { name: "Ervan (Anda)", comment: newComment }
        ]
        setSelectedProject({ ...proj, comments: updatedComments })
        return { ...proj, comments: updatedComments }
      }
      return proj
    }))
    setNewComment('')
  }

  // Uploading a project from Drive Dashboard
  const handleUploadSubmit = (e) => {
    e.preventDefault()
    if (!formTitle.trim() || !formDesc.trim()) return

    const newId = Date.now()

    // Map tag list back to standard tags fields
    const mappedTags = {
      platform: "Full Stack",
      sector: "E-Commerce",
      language: "JavaScript",
      framework: "React",
      infrastructure: "MySQL"
    }

    formTags.forEach(tag => {
      Object.entries(categoryGroups).forEach(([groupKey, group]) => {
        if (group.tags.some(t => t.name.toLowerCase() === tag.name.toLowerCase())) {
          mappedTags[groupKey] = tag.name
        }
      })
    })

    const newProj = {
      id: newId,
      title: formTitle,
      category: mappedTags.platform, 
      description: formDesc,
      author: "Ervan (Anda)",
      upvotes: 0,
      hasUpvoted: false,
      demoUrl: formDemo || "#",
      githubUrl: formGithub || "#",
      files: formFiles.split(',').map(f => f.trim()),
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      tags: mappedTags,
      comments: []
    }

    setProjects([newProj, ...projects])

    // Add corresponding zip archive file to Drive Files
    const newFile = {
      id: newId + 1,
      name: `${formTitle.replace(/\s+/g, '_')}_Source.zip`,
      type: "zip",
      size: "8.5 MB",
      date: new Date().toLocaleDateString('id-ID').replace(/\//g, '-'),
      isPublic: true
    }
    setDriveFiles([newFile, ...driveFiles])

    // If we were editing a draft, remove it from drafts database
    if (editingDraftId) {
      const remainingDrafts = drafts.filter(d => d.id !== editingDraftId)
      setDrafts(remainingDrafts)
      localStorage.setItem('himaif_project_drafts', JSON.stringify(remainingDrafts))
    }

    // Reset Form
    resetUploadForm()
    setActiveTab(previousTab)
  }

  // Toggle privacy of drive files (adds/removes from showcase list)
  const toggleFilePrivacy = (fileId, fileName) => {
    setDriveFiles(driveFiles.map(file => {
      if (file.id === fileId) {
        const nextState = !file.isPublic
        
        if (nextState) {
          const exists = projects.some(p => p.title.toLowerCase() === fileName.replace('_Source.zip', '').replace(/_/g, ' ').toLowerCase())
          if (!exists) {
            const addedProj = {
              id: fileId + 500,
              title: fileName.replace('_Source.zip', '').replace(/_/g, ' '),
              category: "Web & Blockchain",
              description: `Berkas arsip proyek ${fileName} yang dibagikan dari penyimpanan pribadi.`,
              author: "Ervan (Anda)",
              upvotes: 0,
              hasUpvoted: false,
              demoUrl: "#",
              githubUrl: "#",
              files: [fileName],
              image: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=600&q=80",
              tags: {
                platform: "Full Stack",
                sector: "E-Commerce",
                language: "JavaScript",
                framework: "React",
                infrastructure: "MySQL"
              },
              comments: []
            }
            setProjects([addedProj, ...projects])
          }
        } else {
          setProjects(projects.filter(p => p.title.toLowerCase() !== fileName.replace('_Source.zip', '').replace(/_/g, ' ').toLowerCase()))
        }

        return { ...file, isPublic: nextState }
      }
      return file
    }))
  }

  // Category selection handler (toggles filters)
  const toggleFilter = (group, tag) => {
    setActiveFilters(prev => ({
      ...prev,
      [group]: prev[group] === tag ? null : tag
    }))
  }

  const clearAllFilters = () => {
    setActiveFilters({
      platform: null,
      sector: null,
      language: null,
      framework: null,
      infrastructure: null
    })
  }

  const toggleGroupAccordion = (group) => {
    setExpandedGroups(prev => ({
      ...prev,
      [group]: !prev[group]
    }))
  }

  // Filter project logic (checks search string and all active selected tags)
  const filteredProjects = useMemo(() => {
    return projects.filter(proj => {
      const matchesSearch = proj.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            proj.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            proj.author.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesPlatform = !activeFilters.platform || proj.tags.platform === activeFilters.platform
      const matchesSector = !activeFilters.sector || proj.tags.sector === activeFilters.sector
      const matchesLanguage = !activeFilters.language || proj.tags.language === activeFilters.language
      const matchesFramework = !activeFilters.framework || proj.tags.framework === activeFilters.framework
      const matchesInfrastructure = !activeFilters.infrastructure || proj.tags.infrastructure === activeFilters.infrastructure

      return matchesSearch && matchesPlatform && matchesSector && matchesLanguage && matchesFramework && matchesInfrastructure
    })
  }, [projects, searchTerm, activeFilters])

  // Check if any filter is currently selected
  const hasActiveFilters = Object.values(activeFilters).some(val => val !== null)

  const handleFilterByTag = (groupKey, value) => {
    clearAllFilters()
    toggleFilter(groupKey, value)
    setSelectedProject(null)
  }

  return (
    <>
      {/* 1. Floating Action Button (FAB) */}
      <div className="fixed bottom-6 right-6 z-45 flex items-center gap-3 group">
        <span className="hidden sm:inline-block bg-[#031636] dark:bg-white text-white dark:text-[#031636] text-xs font-serif font-bold py-2 px-4 rounded-xl shadow-lg border border-white/10 dark:border-slate-200 pointer-events-none opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Buka HIMAIF Showcase
        </span>
        <button
          onClick={() => { setIsLoading(true); setLoadingStep(0); }}
          className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-[#005bc1] to-[#031636] dark:from-[#60a5fa] dark:to-[#005bc1] text-white shadow-[0_8px_30px_rgba(0,91,193,0.35)] dark:shadow-[0_8px_30px_rgba(96,165,250,0.35)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer relative"
          aria-label="Showcase"
        >
          <span className="material-symbols-outlined text-2xl animate-[pulse_2s_infinite]">cloud</span>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0091ae] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0091ae]"></span>
          </span>
        </button>
      </div>

      {/* 2. Main Fullscreen Application Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#f0f2f8] dark:bg-gradient-to-br dark:from-[#040d1a] dark:via-[#080f1e] dark:to-[#0a1628] text-[#031636] dark:text-slate-100 flex flex-col overflow-hidden animate-[fade-in_0.2s_ease-out] font-sans">
          
          {/* Coordinate Grid Overlay */}
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

          {/* Ambient glows */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[400px] h-[400px] bg-[#005bc1]/5 dark:bg-[#005bc1]/20 blur-[90px] rounded-full pointer-events-none z-0"></div>
          <div className="absolute -left-20 top-10 w-[300px] h-[300px] bg-[#005bc1]/5 dark:bg-[#60a5fa]/10 blur-[80px] rounded-full pointer-events-none z-0"></div>

          {/* Animated Curved Orbit Boxes */}
          <div className="absolute top-20 right-20 w-80 h-80 rounded-[40px] border-2 border-dashed border-[#005bc1]/10 dark:border-[#60a5fa]/10 animate-orbit-rotate pointer-events-none z-0"></div>
          <div className="absolute bottom-20 left-20 w-[450px] h-[450px] rounded-[60px] border border-dashed border-[#005bc1]/5 dark:border-[#60a5fa]/5 animate-orbit-rotate-reverse pointer-events-none z-0"></div>
          
          {/* A. navbar */}
          <PortalNavbar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            isLoggedIn={isLoggedIn}
            onCreateClick={handleCreateClick}
            onLoginClick={() => setActiveTab('drive')}
            portalDarkMode={portalDarkMode}
            onToggleTheme={() => setPortalDarkMode(!portalDarkMode)}
            onTabChange={handleTabChange}
            activeTab={activeTab}
            onRequestExit={handleRequestExit}
          />

          {/* B. MAIN interactive body */}
          <div className="flex-1 flex flex-row overflow-hidden w-full h-[calc(100dvh-4rem)]">
            
            {/* C. SIDEBAR */}
            <Sidebar
              activeTab={activeTab}
              onTabChange={handleTabChange}
              isLoggedIn={isLoggedIn}
              activeFilters={activeFilters}
              expandedGroups={expandedGroups}
              showAllTags={showAllTags}
              hasActiveFilters={hasActiveFilters}
              onToggleFilter={toggleFilter}
              onToggleGroup={toggleGroupAccordion}
              onToggleShowAll={toggleShowAllTags}
              onClearAllFilters={clearAllFilters}
              onRequestExit={handleRequestExit}
              isMobileFilterOpen={isMobileFilterOpen}
              onCloseMobileFilter={() => setIsMobileFilterOpen(false)}
            />

            {/* D. VIEWPORT */}
            <main className="flex-1 h-full overflow-y-auto p-6 scrollbar-none z-10">
              {activeTab === 'showcase' && (
                <ShowcaseTab
                  filteredProjects={filteredProjects}
                  activeFilters={activeFilters}
                  hasActiveFilters={hasActiveFilters}
                  onSelectProject={setSelectedProject}
                  onUpvote={handleUpvote}
                  onToggleFilter={toggleFilter}
                  onClearAllFilters={clearAllFilters}
                  onTabChange={handleTabChange}
                  activeTab={activeTab}
                  setIsMobileFilterOpen={setIsMobileFilterOpen}
                />
              )}

              {activeTab === 'drive' && (
                <DriveTab
                  activeTab={activeTab}
                  onTabChange={handleTabChange}
                  isLoggedIn={isLoggedIn}
                  handleCreateClick={handleCreateClick}
                  drafts={drafts}
                  handleDeleteDraft={handleDeleteDraft}
                  handleLoadDraft={handleLoadDraft}
                  driveFiles={driveFiles}
                  toggleFilePrivacy={toggleFilePrivacy}
                  handleLogin={handleLogin}
                  handleLoginDemo={handleLoginDemo}
                  loginEmail={loginEmail}
                  setLoginEmail={setLoginEmail}
                  loginPassword={loginPassword}
                  setLoginPassword={setLoginPassword}
                />
              )}

              {activeTab === 'upload' && (
                <UploadTab
                  handleCloseUploadModal={handleCloseUploadModal}
                  editingDraftId={editingDraftId}
                  drafts={drafts}
                  isDraftDropdownOpen={isDraftDropdownOpen}
                  setIsDraftDropdownOpen={setIsDraftDropdownOpen}
                  handleLoadDraft={handleLoadDraft}
                  handleSaveDraft={handleSaveDraft}
                  justSavedDraft={justSavedDraft}
                  formTitle={formTitle}
                  setFormTitle={setFormTitle}
                  formDesc={formDesc}
                  setFormDesc={setFormDesc}
                  formDemo={formDemo}
                  setFormDemo={setFormDemo}
                  formGithub={formGithub}
                  setFormGithub={setFormGithub}
                  formFiles={formFiles}
                  setFormFiles={setFormFiles}
                  formTags={formTags}
                  tagInput={tagInput}
                  setTagInput={setTagInput}
                  isTagSuggestionsOpen={isTagSuggestionsOpen}
                  setIsTagSuggestionsOpen={setIsTagSuggestionsOpen}
                  handleAddTag={handleAddTag}
                  handleRemoveTag={handleRemoveTag}
                  handleTagInputKeyDown={handleTagInputKeyDown}
                  handleUploadSubmit={handleUploadSubmit}
                />
              )}
            </main>
          </div>
        </div>
      )}

      {/* 3. MODAL DETAIL VIEW */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          newComment={newComment}
          onCommentChange={setNewComment}
          onAddComment={handleAddComment}
          onFilterByTag={handleFilterByTag}
        />
      )}

      {/* 5. LOADING SPLASH SCREEN */}
      {isLoading && (
        <LoadingSplash loadingStep={loadingStep} />
      )}

      {/* 6. EXIT CONFIRMATION POPUP */}
      {showExitConfirm && (
        <ExitConfirmModal
          onConfirm={handleConfirmExit}
          onCancel={handleCancelExit}
        />
      )}

      {/* 7. DRAFT SAVE CONFIRMATION POPUP */}
      {showDraftConfirm && (
        <DraftConfirmModal
          onSave={handleConfirmSaveDraft}
          onDiscard={handleConfirmDiscardDraft}
          onCancel={() => setShowDraftConfirm(false)}
        />
      )}
    </>
  )
}
