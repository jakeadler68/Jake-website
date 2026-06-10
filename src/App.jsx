import { useState, useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import MethodSection from './components/MethodSection'
import ProgramsSection from './components/ProgramsSection'
import ProgramModal from './components/ProgramModal'
import ApproachSection from './components/ApproachSection'
import AboutSection from './components/AboutSection'
import ReviewsSection from './components/ReviewsSection'
import VideoModal from './components/VideoModal'
import TrialCTA from './components/TrialCTA'
import ContactForm from './components/ContactForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import CoachesPage from './components/CoachesPage'
import PolicyPage from './components/PolicyPage'
import { LanguageContext } from './LanguageContext'
import { translations } from './translations'

const getRoute = () => {
  const h = window.location.hash
  if (h === '#coaches') return 'coaches'
  if (h === '#privacy') return 'privacy'
  if (h === '#terms') return 'terms'
  if (h === '#refund') return 'refund'
  return 'home'
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [programModal, setProgramModal] = useState(null)
  const [videoModal, setVideoModal] = useState(null)
  const [contactOpen, setContactOpen] = useState(false)
  const [lang, setLang] = useState('en')
  const [route, setRoute] = useState(getRoute)
  const homeScrollRef = useRef(0)
  const prevRouteRef = useRef(route)

  useEffect(() => {
    const onHashChange = () => {
      if (getRoute() !== 'home' && prevRouteRef.current === 'home') {
        homeScrollRef.current = window.scrollY
      }
      setRoute(getRoute())
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useLayoutEffect(() => {
    const prevRoute = prevRouteRef.current
    if (prevRoute === route) return

    const html = document.documentElement
    const prevBehavior = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'

    const handleScroll = () => {
      if (route === 'coaches' || route === 'privacy' || route === 'terms' || route === 'refund') {
        window.scrollTo(0, 0)
      } else if (route === 'home') {
        const hash = window.location.hash
        const hashTarget = hash && hash !== '#' && hash !== '#coaches'
          ? document.querySelector(hash)
          : null
        if (hashTarget) {
          hashTarget.scrollIntoView()
        } else {
          window.scrollTo(0, homeScrollRef.current)
        }
      }
    }

    // Initial jump
    handleScroll()

    // Second jump after content has likely settled and browser native anchors have fired
    const rafId = requestAnimationFrame(() => {
      handleScroll()
      // Restore smooth behavior after the jump is definitely finished
      requestAnimationFrame(() => {
        html.style.scrollBehavior = prevBehavior
      })
    })

    prevRouteRef.current = route
    return () => cancelAnimationFrame(rafId)
  }, [route])

  const toggleMobile = useCallback(() => setMobileOpen(p => !p), [])
  const toggleLang = useCallback(() => setLang(p => p === 'en' ? 'zh' : 'en'), [])
  const openProgram = useCallback((key) => setProgramModal(key), [])
  const closeProgram = useCallback(() => setProgramModal(null), [])
  const openVideo = useCallback((text) => setVideoModal(text), [])
  const closeVideo = useCallback(() => setVideoModal(null), [])
  const openContact = useCallback(() => setContactOpen(true), [])
  const closeContact = useCallback(() => setContactOpen(false), [])

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] }}>
      <Navbar onToggleMobile={toggleMobile} onToggleLang={toggleLang} lang={lang} onOpenContact={openContact} forceDark={route === 'coaches'} />
      <MobileMenu isOpen={mobileOpen} onToggleMobile={toggleMobile} onOpenContact={openContact} onToggleLang={toggleLang} lang={lang} />
      <div style={{ display: route === 'home' ? 'contents' : 'none' }}>
        <Hero onOpenContact={openContact} />
        <TrustBar />
        <MethodSection />
        <ApproachSection />
        <ProgramsSection onOpenProgram={openProgram} />
        <ProgramModal programKey={programModal} onClose={closeProgram} onOpenContact={openContact} />
        <AboutSection />
        <ReviewsSection onOpenVideo={openVideo} />
        <VideoModal text={videoModal} onClose={closeVideo} />
        <TrialCTA onOpenContact={openContact} />
        <FAQ />
      </div>
      {route === 'coaches' && <CoachesPage onOpenContact={openContact} />}
      {route === 'privacy' && <PolicyPage type="privacy" />}
      {route === 'terms' && <PolicyPage type="terms" />}
      {route === 'refund' && <PolicyPage type="refund" />}
      <Footer onOpenContact={openContact} />
      <ContactForm isOpen={contactOpen} onClose={closeContact} />
    </LanguageContext.Provider>
  )
}
