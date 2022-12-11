import Link from 'next/link'
import { MutableRefObject } from 'react'
import { motion } from 'framer-motion'

type MobileMenuProps = {
  mobileMenuRef: MutableRefObject<HTMLDivElement | null>
  cvLink: string
}

export default function MobileMenu({ mobileMenuRef, cvLink }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.3 }}
      ref={mobileMenuRef}
      className="absolute bg-zinc-800 font-notoSerifDisplay top-24 left-0 right-0 shadow-md rounded-md px-6 tracking-wider"
    >
      <nav className="flex flex-col space-y-4 pt-6 pb-6 text-right">
        <a href={cvLink} target="_blank" rel="noopener noreferrer" className="py-2">
          CV
        </a>
        <Link href="/about" className="py-2">
          About
        </Link>
      </nav>
    </motion.div>
  )
}
