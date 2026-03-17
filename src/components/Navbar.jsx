import { useState, useEffect, useCallback } from 'react'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('section')
    let current = ''
    sections.forEach(section => {
      const sectionTop = section.offsetTop
      if (window.scrollY >= sectionTop - 300) {
        current = section.getAttribute('id')
      }
    })
    if (current) {
      setActiveSection(current)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="https://visionkc.com.np" className="logo">
          <img src="/assets/images/logo.png" alt="Vision KC" className="logo-img" />
        </a>
        <div className="nav-links">
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>Portfolio</a>
          <a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#contact" className="btn btn-primary">Contact</a>
        </div>
        <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className="material-icons">menu</i>
        </div>
      </div>
      <div className={`mobile-nav-links${mobileMenuOpen ? ' active' : ''}`}>
        <a href="#about" onClick={handleMobileNavClick}>About</a>
        <a href="#portfolio" onClick={handleMobileNavClick}>Portfolio</a>
        <a href="#services" onClick={handleMobileNavClick}>Services</a>
        <a href="#skills" onClick={handleMobileNavClick}>Skills</a>
        <a href="#contact" onClick={handleMobileNavClick}>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar

