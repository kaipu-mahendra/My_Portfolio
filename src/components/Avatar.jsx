import { useState } from 'react'

export default function Avatar({ className = '' }) {
  const [error, setError] = useState(false)
  const [src, setSrc] = useState('/profile.jpeg')

  const handleFallback = () => {
    // Try extensions in order of likelihood based on what we found
    if (src === '/profile.jpeg') setSrc('/profile.jpg')
    else if (src === '/profile.jpg') setSrc('/profile.png')
    else if (src === '/profile.png') setSrc('/profile.svg')
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
