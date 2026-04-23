import Link from 'next/link'
import { Database, Twitter, Linkedin, Github, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const footerLinks = {
  Programs: [
    { label: 'Career Switcher Path', href: '/programs#switcher' },
    { label: 'Level Up Path', href: '/programs#levelup' },
    { label: 'Fresher Bootcamp', href: '/programs#fresher' },
    { label: 'Mentorship 1:1', href: '/programs#mentorship' },
    { label: 'Mock Interviews', href: '/programs#interviews' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'Data Engineering Roadmap', href: '/roadmap' },
    { label: 'Tech Stack Guide', href: '/resources/tech-stack' },
    { label: 'Interview Prep', href: '/resources/interview' },
    { label: 'Community Forum', href: '/community' },
    { label: 'Success Stories', href: '/stories' },
  ],
}

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative bg-dark-bg border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-neon/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Newsletter Section */}
      <div className="relative border-b border-white/5">
        <div className="section-padding section-inner py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Stay on the cutting edge
              </h3>
              <p className="text-white/50 text-sm">
                Get weekly data engineering insights, job opportunities, and tips.
              </p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-dark flex-1 lg:w-72"
              />
              <button className="btn-primary whitespace-nowrap py-3 px-6 text-sm">
                <span className="relative z-10">Subscribe</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-padding section-inner py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-neon/20 to-green-neon/5 border border-green-neon/30 flex items-center justify-center">
                <Database className="w-5 h-5 text-green-neon" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white">Data</span>
                <span className="font-display font-bold text-xl text-green-neon">Sherpas</span>
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
              Your trusted guides to the data engineering summit. We help freshers and experienced professionals break through career barriers and land their dream data roles.
            </p>

            <div className="space-y-3 mb-8">
              <a href="mailto:hello@datasherpas.io" className="flex items-center gap-3 text-white/50 hover:text-green-neon transition-colors duration-300 text-sm">
                <Mail className="w-4 h-4" />
                hello@datasherpas.io
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-white/50 hover:text-green-neon transition-colors duration-300 text-sm">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4" />
                Pune, India · Remote Worldwide
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-green-neon hover:border-green-neon/30 hover:bg-green-neon/5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/45 hover:text-green-neon text-sm transition-colors duration-300 flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-green-neon transition-all duration-300 overflow-hidden" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="section-padding section-inner py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} DataSherpas. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
