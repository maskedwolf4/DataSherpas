'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, MessageSquare, Clock, ArrowRight, CheckCircle2, Linkedin, Twitter, Youtube } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

const goals = [
  'Switch to data engineering',
  'Get a salary hike',
  'Land my first data job (fresher)',
  'Prepare for senior DE role',
  'Learn specific tech (Spark, Kafka, etc.)',
  'General career guidance',
]

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@datasherpas.io', href: 'mailto:hello@datasherpas.io' },
  { icon: Phone, label: 'Phone / WhatsApp', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: MapPin, label: 'Location', value: 'Pune, India · Remote Worldwide', href: '#' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: '#' },
]

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: '#', desc: 'Follow for DE tips' },
  { icon: Twitter, label: 'Twitter / X', href: '#', desc: 'Daily career insights' },
  { icon: Youtube, label: 'YouTube', href: '#', desc: 'Free tutorials & talks' },
  { icon: MessageSquare, label: 'WhatsApp Community', href: '#', desc: 'Join 2000+ engineers' },
]

export default function ContactPageClient() {
  const [selectedGoal, setSelectedGoal] = useState<string>('')
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, send form data to API
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-dark-bg pt-24">

      {/* HERO */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="section-padding section-inner relative text-center">
          <Reveal>
            <span className="badge badge-green mb-6">Get In Touch</span>
            <h1 className="heading-display text-5xl md:text-6xl text-white mb-6">
              Let&apos;s Map Your <span className="text-gradient-green">Roadmap</span>
            </h1>
            <p className="text-white/55 text-xl max-w-xl mx-auto">
              Book a free 30-minute discovery call. No pitch, no pressure — just honest guidance on your next step.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16">
        <div className="section-padding section-inner">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal direction="left">
                {submitted ? (
                  <div className="card-glass p-12 text-center h-full flex flex-col items-center justify-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-green-neon/10 border-2 border-green-neon flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-green-neon" />
                    </div>
                    <h2 className="font-display font-bold text-3xl text-white">We&apos;ve Got Your Message!</h2>
                    <p className="text-white/55 max-w-sm text-center">
                      Thank you for reaching out. Our team will get back to you within 24 hours. Check your email for a confirmation.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-outline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="card-glass p-8 space-y-6">
                    <div>
                      <h2 className="font-display font-bold text-2xl text-white mb-1">Book a Discovery Call</h2>
                      <p className="text-white/45 text-sm">Fill in your details and we&apos;ll set up a call within 24 hours.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-white/50 mb-2 block">Full Name *</label>
                        <input
                          type="text"
                          placeholder="Rahul Verma"
                          className="input-dark"
                          required
                          value={formState.name}
                          onChange={e => setFormState(p => ({ ...p, name: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label className="text-xs text-white/50 mb-2 block">Email Address *</label>
                        <input
                          type="email"
                          placeholder="rahul@example.com"
                          className="input-dark"
                          required
                          value={formState.email}
                          onChange={e => setFormState(p => ({ ...p, email: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-white/50 mb-2 block">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="input-dark"
                        value={formState.phone}
                        onChange={e => setFormState(p => ({ ...p, phone: e.target.value }))}
                      />
                    </div>

                    <div>
                      <label className="text-xs text-white/50 mb-3 block">What&apos;s your primary goal? *</label>
                      <div className="grid grid-cols-2 gap-2">
                        {goals.map((goal) => (
                          <button
                            key={goal}
                            type="button"
                            onClick={() => setSelectedGoal(goal)}
                            className={`text-left text-xs px-3 py-2.5 rounded-xl border transition-all duration-300 ${
                              selectedGoal === goal
                                ? 'border-green-neon/50 bg-green-neon/10 text-green-neon'
                                : 'border-white/8 text-white/50 hover:border-white/15 hover:text-white/70'
                            }`}
                          >
                            {goal}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-white/50 mb-2 block">Tell us about yourself</label>
                      <textarea
                        rows={4}
                        placeholder="Current role, years of experience, tech background, specific questions..."
                        className="input-dark resize-none"
                        value={formState.message}
                        onChange={e => setFormState(p => ({ ...p, message: e.target.value }))}
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center py-4">
                      <span className="relative z-10">Book My Free Discovery Call</span>
                      <ArrowRight className="w-4 h-4 relative z-10" />
                    </button>

                    <p className="text-center text-xs text-white/25">
                      By submitting, you agree to our Privacy Policy. We never spam.
                    </p>
                  </form>
                )}
              </Reveal>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <Reveal direction="right">
                <div className="card-glass p-6">
                  <h3 className="font-semibold text-white mb-4">Contact Info</h3>
                  <div className="space-y-4">
                    {contactInfo.map(({ icon: Icon, label, value, href }) => (
                      <a
                        key={label}
                        href={href}
                        className="flex items-center gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-xl bg-green-neon/10 border border-green-neon/20 flex items-center justify-center flex-shrink-0 group-hover:border-green-neon/40 transition-colors duration-300">
                          <Icon className="w-4 h-4 text-green-neon" />
                        </div>
                        <div>
                          <div className="text-white/35 text-xs">{label}</div>
                          <div className="text-white/75 text-sm group-hover:text-white transition-colors">{value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal direction="right" delay={100}>
                <div className="card-glass p-6">
                  <h3 className="font-semibold text-white mb-4">Find us on</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socials.map(({ icon: Icon, label, href, desc }) => (
                      <a
                        key={label}
                        href={href}
                        className="p-3 rounded-xl border border-white/8 hover:border-green-neon/30 hover:bg-green-neon/5 transition-all duration-300 group"
                      >
                        <Icon className="w-5 h-5 text-white/40 group-hover:text-green-neon mb-2 transition-colors duration-300" />
                        <div className="text-white/70 text-xs font-medium">{label}</div>
                        <div className="text-white/30 text-xs">{desc}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal direction="right" delay={200}>
                <div className="card-glass p-6 border-green-neon/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-neon to-transparent" />
                  <div className="neon-dot mb-3 animate-pulse" />
                  <h3 className="font-semibold text-white mb-2">Next Cohort Starts</h3>
                  <p className="text-3xl font-display font-bold text-green-neon mb-1">May 15, 2025</p>
                  <p className="text-white/40 text-xs mb-4">Only 4 seats remaining in the Career Switch Accelerator</p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '80%' }} />
                  </div>
                  <p className="text-white/35 text-xs mt-2">16/20 seats filled</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/5">
        <div className="section-padding section-inner">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl text-white">Frequently Asked</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { q: 'Is the discovery call really free?', a: 'Yes, completely free. No hidden charges, no commitment.' },
              { q: 'How soon will I hear back?', a: 'We respond within 24 hours, often within a few hours during business days.' },
              { q: 'Can I chat on WhatsApp first?', a: 'Absolutely! Reach out on WhatsApp and our team will help you right away.' },
              { q: 'Do you offer corporate training?', a: 'Yes! Reach out via email for custom corporate data engineering training packages.' },
            ].map(({ q, a }) => (
              <Reveal key={q} direction="up">
                <div className="card-glass p-6">
                  <h4 className="font-medium text-white text-sm mb-2">{q}</h4>
                  <p className="text-white/45 text-sm">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
