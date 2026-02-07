export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex items-center justify-between">
        <div>© {new Date().getFullYear()} Kaipu Mahendra</div>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/kaipu-mahendra" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/kaipu-mahendra" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://leetcode.com/u/kaipu_mahendra/" target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>
      </div>
    </footer>
  )
}
