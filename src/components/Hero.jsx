import Avatar from './Avatar.jsx'

export default function Hero() {
  return (
    <section id="about" className="bg-gray-50 scroll-mt-24 hero-bg relative overflow-hidden">
      <div className="accent-ring" />
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-[1fr,auto] gap-8 md:gap-10 items-center relative">
        <div className="flex flex-col items-center md:order-2">
          <Avatar />
          <div className="text-xs sm:text-sm text-gray-600 font-medium tracking-wide uppercase mt-4 text-center">Kaipu Mahendra</div>
        </div>
        <div className="md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight">
            AI-Integrated Full Stack Research & Developer
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
            Building intelligent, scalable web applications by integrating modern full-stack technologies with AI and ML. Passionate about problem-solving, research, and driving real-world impact through innovation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors shadow-md shadow-primary-600/20">View Projects</a>
            <a href="#contact" className="px-6 py-3 rounded-lg border border-primary-600 text-primary-700 font-medium hover:bg-primary-50 transition-colors">Contact Me</a>
          </div>
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 items-center text-xs sm:text-sm text-gray-600">
             <a href="https://github.com/kaipu-mahendra" className="hover:text-primary-600 transition-colors flex items-center gap-1" target="_blank" rel="noopener noreferrer">
               <span className="sr-only">GitHub</span>
               <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
               <span className="hidden xs:inline">GitHub</span>
             </a>
             <span className="text-gray-300 hidden sm:inline">|</span>
             <a href="https://www.linkedin.com/in/kaipu-mahendra" className="hover:text-primary-600 transition-colors flex items-center gap-1" target="_blank" rel="noopener noreferrer">
               <span className="sr-only">LinkedIn</span>
               <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
               <span className="hidden xs:inline">LinkedIn</span>
             </a>
             <span className="text-gray-300 hidden sm:inline">|</span>
             <a href="https://leetcode.com/u/kaipu_mahendra/" className="hover:text-primary-600 transition-colors flex items-center gap-1" target="_blank" rel="noopener noreferrer">
               <span className="sr-only">LeetCode</span>
               <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
               <span className="hidden xs:inline">LeetCode</span>
             </a>
             <span className="text-gray-300 hidden sm:inline">|</span>
             <a href="mailto:kaipumahendrar@gmail.com" className="hover:text-primary-600 transition-colors flex items-center gap-1">
               <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
               <span className="hidden sm:inline">kaipumahendrar@gmail.com</span>
               <span className="sm:hidden">Email</span>
             </a>
          </div>
        </div>
      </div>
    </section>
  )
}
