import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Placements', href: '#placements' },
  { label: 'Campus', href: '#campus' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ background: scrolled ? 'rgba(10,15,46,0.95)' : 'transparent' }}
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500 backdrop-blur-md border-b border-transparent"
      data-scrolled={scrolled}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 rounded-lg bg-[#f5c518] rotate-6 group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-lg bg-[#0a0f2e] border-2 border-[#f5c518] flex items-center justify-center">
              <span className="text-[#f5c518] font-black text-xs tracking-tight">SE</span>
            </div>
          </div>
          <span className="font-black text-white text-base tracking-tight leading-none">
            Sri Eshwar<br />
            <span className="text-[#f5c518] text-xs font-semibold tracking-widest uppercase">College of Engg.</span>
          </span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex gap-10">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="relative text-sm font-medium text-white/70 hover:text-white transition-colors group">
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#f5c518] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#apply"
          className="hidden md:inline-flex items-center gap-2 bg-[#f5c518] hover:bg-yellow-300 text-[#0a0f2e] text-sm font-black px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-yellow-500/20"
        >
          Apply 2025
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Hamburger */}
        <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0a0f2e] border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-5 gap-5">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} onClick={() => setOpen(false)} className="text-white/80 font-medium text-sm hover:text-[#f5c518] transition-colors">
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#apply" className="inline-block bg-[#f5c518] text-[#0a0f2e] text-sm font-black px-5 py-2.5 rounded-full">
                  Apply 2025
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
