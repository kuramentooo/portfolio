'use client'

import Image from 'next/image'
import { useState } from 'react'

interface TechLogoProps {
  name: string
  logo: string
  size?: number
}

export default function TechLogo({ name, logo, size = 40 }: TechLogoProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div 
        className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg"
        style={{ width: size, height: size }}
      >
        <span className="text-lg font-bold text-gray-500">
          {name[0].toUpperCase()}
        </span>
      </div>
    )
  }

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <Image
        src={`/logos/${logo}`}
        alt={`${name} logo`}
        width={size}
        height={size}
        className="object-contain"
        onError={() => setError(true)}
        priority
      />
    </div>
  )
}
