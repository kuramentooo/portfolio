'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('hero')} className="text-xl font-bold">
              Clément Delaunoy
            </button>
          </div>
          <div className="flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600">
              À propos
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600">
              Projets
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
