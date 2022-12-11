'use client'

import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState } from 'react'
import useOnClickOutside from '../hooks/useOnClickOutside'
import Cross from './Cross'
import Hamburger from './Hamburger'
import MobileMenu from './MobileMenu'

const title = 'Johan Hanses'
const subtitle = 'TypeScripter | Tailwinder | Devopser'
const externalCVURL = 'https://cv.johanhanses.com'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)

  useOnClickOutside(mobileMenuRef, () => setMobileMenuOpen(false))

  return (
    <header className="py-6 md:py-24 flex justify-between relative">
      <Link href="/" className="hover:md:scale-105 transition-transform duration-300">
        <h1 className="text-3xl md:text-5xl mb-2 font-notoSerifDisplay">{title}</h1>
        <p className="text-sm md:text-base">{subtitle}</p>
      </Link>
      <button className="pt-3 flex md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <Cross /> : <Hamburger />}
      </button>
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu onClose={() => setMobileMenuOpen(false)} mobileMenuRef={mobileMenuRef} cvLink={externalCVURL} />
        )}
      </AnimatePresence>
      <nav className="font-notoSerifDisplay pt-4 space-x-2 md:space-x-6 hidden md:block">
        <a
          href={externalCVURL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-1 rounded-md hover:bg-yellow/10 transition-colors duration-300"
        >
          CV
        </a>
        <Link href="/about" className="px-5 py-1 rounded-md hover:bg-yellow/10 transition-colors duration-300">
          About
        </Link>
      </nav>
    </header>
  )
}
