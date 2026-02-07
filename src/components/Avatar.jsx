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
      <div
        className={`w-40 h-40 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-primary-600 to-indigo-700 flex items-center justify-center text-white text-4xl font-bold shadow-lg ring-4 ring-white ${className}`}
      >
        KM
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-primary-600 rounded-2xl rotate-3 opacity-20 transform translate-y-2 translate-x-2"></div>
      <img
        src={src}
        alt="Kaipu Mahendra"
        className="relative w-40 h-40 md:w-64 md:h-64 rounded-2xl object-cover shadow-xl ring-4 ring-white bg-white"
        onError={handleFallback}
        loading="eager"
      />
    </div>
  )
}
