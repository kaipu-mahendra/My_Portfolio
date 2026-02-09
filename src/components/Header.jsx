import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold text-base sm:text-lg">
          <span className="gradient-text">Kaipu Mahendra</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-primary-600">About</a>
          <a href="#education" className="hover:text-primary-600">Education</a>
          <a href="#skills" className="hover:text-primary-600">Skills</a>
          <a href="#projects" className="hover:text-primary-600">Projects</a>
          <a href="#experience" className="hover:text-primary-600">Experience</a>
          <a href="#contact" className="hover:text-primary-600">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#about" 
              className="hover:text-primary-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#education" 
              className="hover:text-primary-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </a>
            <a 
              href="#skills" 
              className="hover:text-primary-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="hover:text-primary-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className="hover:text-primary-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className="hover:text-primary-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
