'use client'

import Link from 'next/link'
import { ArrowRight, Target, Heart, Lightbulb, Shield, Users, Coffee, Mountain } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import CountUp from '@/components/ui/CountUp'
import FloatingTorus from '@/components/3d/FloatingTorus'

const values = [
  {
    icon: Target,
    title: 'Results First',
    desc: 'Every decision we make is anchored on one question: does this help our engineers get hired?',
  },
  {
    icon: Heart,
    title: 'Community Driven',
    desc: 'We believe in peer learning and lift-as-you-climb mentality. Our community is our strength.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Over Theory',
    desc: 'Textbooks won\'t get you hired. Real projects, real datasets, and real mentors will.',
  },
  {
    icon: Shield,
    title: 'Transparent & Honest',
    desc: 'No inflated claims. We show our placement numbers and let our track record speak.',
  },
]

const milestones = [
  { year: '2021', title: 'Founded in Pune', desc: 'Started as a community Slack group by Prabhu Datar for aspiring data engineers.' },
  { year: '2022', title: 'First Cohort', desc: '32 students. 28 placed. We knew we were onto something special.' },
  { year: '2023', title: 'Expanded to 3 Programs', desc: 'Launched specialized tracks for freshers, switchers, and senior elevation.' },
  { year: '2024', title: '500+ Placements', desc: 'Crossed the milestone. 95% success rate. Average hike of 12 LPA.' },
  { year: '2025', title: 'Going Global', desc: 'Expanding beyond India — serving data professionals worldwide.' },
]

const companyStats = [
  { value: 500, suffix: '+', label: 'Placements' },
  { value: 95, suffix: '%', label: 'Success Rate' },
  { value: 50, suffix: '+', label: 'Expert Mentors' },
  { value: 4, suffix: '', label: 'Years Running' },
]

export default function AboutPageClient() {
  return (
    <div className="min-h-screen bg-dark-bg pt-24">

      {/* HERO */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px gradient-line" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] opacity-30 pointer-events-none">
          <FloatingTorus />
        </div>

        <div className="section-padding section-inner relative">
          <div className="max-w-3xl">
            <Reveal>
              <span className="badge badge-green mb-6">Our Story</span>
              <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-white mb-8">
                We Were Once <span className="text-gradient-green">Stuck Too</span>
              </h1>
              <p className="text-white/60 text-xl leading-relaxed mb-6">
                DataSherpas was born from frustration. Our founders — all seasoned data engineers — watched talented people fail not because of lack of skill, but lack of direction.
              </p>
              <p className="text-white/50 text-lg leading-relaxed">
                We decided to be the guides we wished we had. Think of us as Sherpas — the expert mountaineers who guide climbers to the summit. Your summit is a thriving data engineering career.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 border-y border-white/5">
        <div className="section-padding section-inner">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <div className="stat-counter text-5xl font-display font-bold mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-white/45 text-sm">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-32">
        <div className="section-padding section-inner">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <div>
                <span className="badge badge-green mb-6">Mission</span>
                <h2 className="heading-display text-4xl md:text-5xl text-white mb-6">
                  Democratizing <span className="text-gradient-green">Data Careers</span>
                </h2>
                <p className="text-white/55 leading-relaxed text-lg mb-6">
                  The data engineering job market is booming but the information is fragmented, the gatekeeping is real, and the quality of guidance is poor.
                </p>
                <p className="text-white/55 leading-relaxed mb-8">
                  We exist to change that. Our mission is to make world-class data engineering guidance accessible to every ambitious professional in India and beyond — regardless of their background.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Freshers Welcome', 'Career Switchers', 'Experienced DEs', 'Remote & Hybrid'].map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <div key={v.title} className="card-glass p-6 group">
                    <div className="w-10 h-10 rounded-xl bg-green-neon/10 border border-green-neon/20 flex items-center justify-center mb-4 group-hover:border-green-neon/40 transition-colors duration-300">
                      <v.icon className="w-5 h-5 text-green-neon" />
                    </div>
                    <h4 className="font-semibold text-white text-sm mb-2">{v.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-dark-card/20 relative">
        <div className="absolute top-0 left-0 right-0 h-px gradient-line" />
        <div className="section-padding section-inner">
          <Reveal>
            <div className="text-center mb-16">
              <span className="badge badge-green mb-4">Our Journey</span>
              <h2 className="heading-display text-4xl text-white">
                From Idea to <span className="text-gradient-green">Impact</span>
              </h2>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px timeline-line" />

              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <Reveal key={m.year} delay={i * 100} direction="left">
                    <div className="flex gap-8 group">
                      {/* Node */}
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-dark-bg border-2 border-green-neon/30 flex items-center justify-center z-10 relative group-hover:border-green-neon transition-colors duration-300">
                          <Mountain className="w-5 h-5 text-green-neon/60 group-hover:text-green-neon transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="card-glass p-6 flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-green-neon text-sm font-bold">{m.year}</span>
                          <h3 className="font-display font-bold text-white">{m.title}</h3>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="section-padding section-inner text-center">
          <Reveal>
            <Coffee className="w-12 h-12 text-green-neon/50 mx-auto mb-6" />
            <h2 className="heading-display text-4xl md:text-5xl text-white mb-6">
              Ready to Start Your <span className="text-gradient-green">Climb</span>?
            </h2>
            <p className="text-white/50 text-lg max-w-md mx-auto mb-10">
              Book a free 30-minute discovery call. No pitch. Just honest guidance on your next step.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                <span className="relative z-10">Book Discovery Call</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
              </Link>
              <Link href="/team" className="btn-outline">
                Meet Our Team
                <Users className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
