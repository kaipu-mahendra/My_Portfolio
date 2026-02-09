export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 text-xs sm:text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">© {new Date().getFullYear()} Kaipu Mahendra</div>
        <div className="flex gap-3 sm:gap-4">
          <a href="https://www.linkedin.com/in/kaipu-mahendra" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">LinkedIn</a>
          <a href="https://github.com/kaipu-mahendra" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">GitHub</a>
          <a href="https://leetcode.com/u/kaipu_mahendra/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">LeetCode</a>
        </div>
      </div>
    </footer>
  )
}
