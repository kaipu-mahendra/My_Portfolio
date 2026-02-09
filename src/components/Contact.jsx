export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-gray-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold">Contact</h2>
        <div className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 rounded-xl border bg-white">
            <div className="font-semibold text-sm sm:text-base">Email</div>
            <div className="mt-2 text-sm sm:text-base text-gray-700">
              <a href="mailto:kaipumahendrar@gmail.com" className="text-primary-700 break-all">kaipumahendrar@gmail.com</a>
            </div>
          </div>
          <div className="p-4 sm:p-5 rounded-xl border bg-white">
            <div className="font-semibold text-sm sm:text-base">Profiles</div>
            <div className="mt-2 flex flex-wrap gap-2 sm:gap-3">
              <a href="https://www.linkedin.com/in/kaipu-mahendra" className="px-3 py-1 rounded bg-primary-600 text-white text-sm sm:text-base" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/kaipu-mahendra" className="px-3 py-1 rounded border border-primary-600 text-primary-700 text-sm sm:text-base" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://leetcode.com/u/kaipu_mahendra/" className="px-3 py-1 rounded border text-sm sm:text-base" target="_blank" rel="noopener noreferrer">LeetCode</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
