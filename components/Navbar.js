import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    closeMenu()
    const element = document.querySelector(targetId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="navbar" style={{ boxShadow: isScrolled ? '0 4px 20px rgba(26, 77, 58, 0.15)' : '0 2px 10px rgba(26, 77, 58, 0.1)' }}>
      <div className="container">
        <div className="nav-wrapper">
          <Link href="/" className="logo">
            <img src="/assets/logo.png" alt="Managerless Logo" width={48} height={48} />
            <span>Managerless</span>
          </Link>
          <button 
            className="mobile-menu-toggle" 
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
            <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none' }}></span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link href="/privacy-policy" onClick={closeMenu}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions" onClick={closeMenu}>
                Terms of Service
              </Link>
            </li>
            <li>
              <a href="#contact" className="cta-nav" onClick={(e) => handleSmoothScroll(e, '#contact')}>
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

