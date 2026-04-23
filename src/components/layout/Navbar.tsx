'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Database, ChevronRight } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-dark-bg/90 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="section-inner section-padding">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-green-neon/20 to-green-neon/5 border border-green-neon/30 flex items-center justify-center transition-all duration-300 group-hover:border-green-neon/60 group-hover:shadow-neon-sm">
                <Database className="w-5 h-5 text-green-neon" />
                <div className="absolute inset-0 rounded-xl bg-green-neon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white">Data</span>
                <span className="font-display font-bold text-lg text-green-neon">Sherpas</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:inline-flex btn-primary py-2.5 px-6 text-xs"
              >
                <span className="relative z-10">Get Started</span>
                <ChevronRight className="w-4 h-4 relative z-10" />
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-green-neon/30 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-dark-bg/95 backdrop-blur-2xl"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-dark-card border-l border-white/5 transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } flex flex-col pt-24 pb-8 px-8`}
        >
          <div className="space-y-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between py-4 border-b border-white/5 text-base font-medium transition-all duration-300 ${
                  pathname === link.href ? 'text-green-neon' : 'text-white/70 hover:text-white'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.label}
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
            ))}
          </div>

          <div className="mt-auto">
            <Link href="/contact" className="btn-primary w-full justify-center">
              <span className="relative z-10">Get Started Free</span>
              <ChevronRight className="w-4 h-4 relative z-10" />
            </Link>
            <p className="text-center text-xs text-white/30 mt-4">
              Join 500+ engineers already enrolled
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
