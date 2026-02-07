export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold text-lg">
          <span className="gradient-text">Kaipu Mahendra</span>
        </a>
        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-primary-600">About</a>
          <a href="#skills" className="hover:text-primary-600">Skills</a>
          <a href="#projects" className="hover:text-primary-600">Projects</a>
          <a href="#experience" className="hover:text-primary-600">Experience</a>
          <a href="#contact" className="hover:text-primary-600">Contact</a>
        </nav>
      </div>
    </header>
  )
}
