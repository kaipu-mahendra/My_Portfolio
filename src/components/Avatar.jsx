import { useState } from 'react'

export default function Avatar({ className = '' }) {
  const [error, setError] = useState(false)
  // Use import.meta.env.BASE_URL to handle paths correctly on GitHub Pages
  const basePath = import.meta.env.BASE_URL
  const [src, setSrc] = useState(`${basePath}profile.jpeg`)

  const handleFallback = () => {
    // Try extensions in order of likelihood based on what we found
    if (src === `${basePath}profile.jpeg`) setSrc(`${basePath}profile.jpg`)
    else if (src === `${basePath}profile.jpg`) setSrc(`${basePath}profile.png`)
    else if (src === `${basePath}profile.png`) setSrc(`${basePath}profile.svg`)
    else setError(true)
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl bg-gradient-to-br from-primary-600 to-indigo-700 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-lg ring-4 ring-white">
          KM
        </div>
      </div>
    )
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <div className="absolute -inset-2 bg-primary-600/10 rounded-2xl rotate-3 blur-sm"></div>
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
        <img
          src={src}
          alt="Kaipu Mahendra"
          className="w-full h-full rounded-2xl object-cover shadow-xl ring-4 ring-white bg-white"
          onError={handleFallback}
          loading="eager"
        />
      </div>
    </div>
  )
}
