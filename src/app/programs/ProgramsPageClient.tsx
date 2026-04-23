'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Clock, Users, BarChart3, Zap, Star, ChevronDown } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

const programs = [
  {
    id: 'fresher',
    tag: 'For Freshers',
    title: 'Zero to Data Engineer',
    subtitle: 'Build your foundation from scratch',
    duration: '16 Weeks',
    batchSize: '20 per cohort',
    level: 'Beginner',
    price: '₹45,000',
    emi: '₹4,500/mo',
    color: 'green-neon',
    description: 'Perfect for fresh graduates and professionals with no prior data engineering experience. Start from Python basics and work your way up to building production-grade pipelines.',
    curriculum: [
      { week: 'Week 1–3', title: 'Foundations', topics: ['Python for Data Engineering', 'SQL & NoSQL databases', 'Linux & CLI basics', 'Git & version control'] },
      { week: 'Week 4–7', title: 'Core DE Stack', topics: ['ETL/ELT concepts', 'Apache Spark fundamentals', 'Data warehousing', 'Airflow orchestration'] },
      { week: 'Week 8–12', title: 'Cloud & Modern Stack', topics: ['AWS / GCP basics', 'S3, BigQuery, Redshift', 'Data Lake design', 'dbt for transformations'] },
      { week: 'Week 13–16', title: 'Career & Project', topics: ['Capstone project', 'Resume building', 'LinkedIn optimization', 'Mock interviews'] },
    ],
    outcomes: ['Build 3 real-world pipelines', 'AWS Cloud Practitioner prep', 'Portfolio on GitHub', 'Placement assistance'],
    includes: ['16 weeks live sessions', '1:1 mentor sessions (4x)', 'Community access (lifetime)', 'Resume review', 'Mock interviews (3x)', 'Job referrals'],
  },
  {
    id: 'switcher',
    tag: 'Most Popular',
    title: 'Career Switch Accelerator',
    subtitle: 'Transition into DE from any field',
    duration: '12 Weeks',
    batchSize: '15 per cohort',
    level: 'Intermediate',
    price: '₹65,000',
    emi: '₹6,500/mo',
    color: 'white',
    description: 'Already working in tech, analytics, or another field? This intensive program helps you leverage your existing skills while rapidly building DE competencies that companies look for.',
    curriculum: [
      { week: 'Week 1–2', title: 'DE Mindset & Foundations', topics: ['Data engineering vs data science', 'Modern data stack overview', 'Identifying your transferable skills', 'Setting up your dev environment'] },
      { week: 'Week 3–6', title: 'Core Engineering', topics: ['Spark, Kafka, Flink', 'Stream vs batch processing', 'Distributed systems concepts', 'Data modeling & schemas'] },
      { week: 'Week 7–10', title: 'Platform & Architecture', topics: ['Cloud platforms deep dive', 'Data platform design', 'Cost optimization', 'Monitoring & observability'] },
      { week: 'Week 11–12', title: 'Job Hunt Mastery', topics: ['Targeted resume strategy', 'Company research tactics', 'Salary negotiation', 'Offer evaluation'] },
    ],
    outcomes: ['Transition in 3-4 months', 'Land at 15+ LPA', '2 portfolio projects', '30-day placement support'],
    includes: ['12 weeks live sessions', '1:1 mentor sessions (8x)', 'Community access (lifetime)', 'Personalized resume strategy', 'Mock interviews (5x)', 'Hiring manager introductions'],
  },
  {
    id: 'senior',
    tag: 'For Experienced',
    title: 'Senior DE Elevation',
    subtitle: 'Break the ceiling, go senior',
    duration: '8 Weeks',
    batchSize: '10 per cohort',
    level: 'Advanced',
    price: '₹80,000',
    emi: '₹8,000/mo',
    color: 'green-neon',
    description: 'Already a data engineer with 2–5 years of experience but stuck? This program is laser-focused on senior-level skills — architecture, leadership, and command of the room.',
    curriculum: [
      { week: 'Week 1–2', title: 'Senior DE Mindset', topics: ['Architectural thinking', 'Design decisions & trade-offs', 'Leading data teams', 'Cross-functional communication'] },
      { week: 'Week 3–5', title: 'Advanced Engineering', topics: ['Lambda & Kappa architectures', 'Lakehouse design patterns', 'Real-time streaming at scale', 'Data mesh concepts'] },
      { week: 'Week 6–7', title: 'Platform Leadership', topics: ['Building data platforms', 'Cost & performance tuning', 'Incident management', 'DE best practices & standards'] },
      { week: 'Week 8', title: 'Career Acceleration', topics: ['Negotiation for senior roles', 'Portfolio of architecture docs', 'System design interview prep', 'Executive presence'] },
    ],
    outcomes: ['Target 25+ LPA roles', 'Senior/Lead title bump', 'Architecture portfolio', 'System design mastery'],
    includes: ['8 weeks intensive sessions', '1:1 mentor sessions (10x)', 'Community access (lifetime)', 'Architecture review sessions', 'System design mock interviews (4x)', 'Referral network access'],
  },
]

const addOns = [
  { title: 'Mock Interview Pack', desc: '5 additional mock interviews with senior engineers', price: '₹8,000' },
  { title: '1:1 Mentorship Extension', desc: '4 additional 1:1 sessions post-program', price: '₹12,000' },
  { title: 'Resume Revamp Pro', desc: 'ATS-optimized resume + LinkedIn profile makeover', price: '₹5,000' },
  { title: 'Placement Guarantee', desc: 'Get placed within 6 months or full refund', price: '+₹20,000' },
]

export default function ProgramsPageClient() {
  const [openCurriculum, setOpenCurriculum] = useState<string | null>(null)
  const [expandedWeek, setExpandedWeek] = useState<Record<string, number | null>>({})

  return (
    <div className="min-h-screen bg-dark-bg pt-24">

      {/* HERO */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="section-padding section-inner relative text-center">
          <Reveal>
            <span className="badge badge-green mb-6">Programs</span>
            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Your Path to <span className="text-gradient-green">Data Engineering</span>
            </h1>
            <p className="text-white/55 text-xl max-w-2xl mx-auto mb-10">
              Three career-defining programs. One goal: land you in the data engineering role you deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-neon" /> Live sessions weekly</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-neon" /> Expert 1:1 mentorship</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-neon" /> Placement support</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-16">
        <div className="section-padding section-inner">
          <div className="space-y-12">
            {programs.map((prog, i) => (
              <Reveal key={prog.id} delay={i * 100} direction="up">
                <div id={prog.id} className="card-glass overflow-hidden">
                  {/* Header */}
                  <div className="grid lg:grid-cols-3 gap-8 p-8 border-b border-white/5">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`badge ${prog.tag === 'Most Popular' ? 'badge-green' : 'badge-white'}`}>
                          {prog.tag === 'Most Popular' && <span className="neon-dot" />}
                          {prog.tag}
                        </span>
                        <span className="text-xs text-white/30 font-mono">{prog.level}</span>
                      </div>

                      <h2 className="font-display font-bold text-3xl text-white mb-2">{prog.title}</h2>
                      <p className="text-green-neon/70 text-sm font-medium mb-4">{prog.subtitle}</p>
                      <p className="text-white/50 leading-relaxed">{prog.description}</p>

                      <div className="flex flex-wrap gap-6 mt-6 text-sm text-white/50">
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-green-neon/60" />{prog.duration}</span>
                        <span className="flex items-center gap-2"><Users className="w-4 h-4 text-green-neon/60" />{prog.batchSize}</span>
                        <span className="flex items-center gap-2"><BarChart3 className="w-4 h-4 text-green-neon/60" />{prog.level}</span>
                      </div>
                    </div>

                    <div className="bg-dark-card/60 rounded-xl p-6 flex flex-col gap-4">
                      <div>
                        <div className="text-white/40 text-xs mb-1">Program Fee</div>
                        <div className="font-display font-bold text-3xl text-white">{prog.price}</div>
                        <div className="text-green-neon/60 text-xs mt-1">or {prog.emi} EMI</div>
                      </div>

                      <div className="space-y-2">
                        {prog.outcomes.map((o) => (
                          <div key={o} className="flex items-center gap-2 text-xs text-white/60">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-neon flex-shrink-0" />
                            {o}
                          </div>
                        ))}
                      </div>

                      <Link href="/contact" className="btn-primary text-sm py-3 mt-2 justify-center">
                        <span className="relative z-10">Enroll Now</span>
                        <ArrowRight className="w-4 h-4 relative z-10" />
                      </Link>
                      <Link href="/contact" className="text-center text-xs text-white/30 hover:text-white/60 transition-colors">
                        Book free discovery call first →
                      </Link>
                    </div>
                  </div>

                  {/* Curriculum & Includes */}
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Curriculum Toggle */}
                    <div className="p-8 border-r border-white/5">
                      <button
                        onClick={() => setOpenCurriculum(openCurriculum === prog.id ? null : prog.id)}
                        className="flex items-center justify-between w-full text-left mb-4"
                      >
                        <h3 className="font-semibold text-white">Curriculum</h3>
                        <ChevronDown
                          className={`w-5 h-5 text-white/40 transition-transform duration-300 ${openCurriculum === prog.id ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <div className={`space-y-3 overflow-hidden transition-all duration-500 ${openCurriculum === prog.id ? 'max-h-[500px]' : 'max-h-32'}`}>
                        {prog.curriculum.map((c, ci) => (
                          <div
                            key={c.week}
                            className="border border-white/5 rounded-xl overflow-hidden cursor-pointer"
                            onClick={() => setExpandedWeek(prev => ({
                              ...prev,
                              [prog.id]: prev[prog.id] === ci ? null : ci
                            }))}
                          >
                            <div className="flex items-center justify-between p-4">
                              <div>
                                <span className="text-xs text-green-neon/70 font-mono block mb-0.5">{c.week}</span>
                                <span className="text-sm font-medium text-white">{c.title}</span>
                              </div>
                              <ChevronDown className={`w-4 h-4 text-white/30 transition-transform ${expandedWeek[prog.id] === ci ? 'rotate-180' : ''}`} />
                            </div>
                            {expandedWeek[prog.id] === ci && (
                              <div className="px-4 pb-4 border-t border-white/5">
                                <ul className="space-y-1 mt-3">
                                  {c.topics.map((t) => (
                                    <li key={t} className="text-xs text-white/50 flex items-center gap-2">
                                      <span className="w-1 h-1 rounded-full bg-green-neon/60 flex-shrink-0" />
                                      {t}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {openCurriculum !== prog.id && (
                        <button
                          onClick={() => setOpenCurriculum(prog.id)}
                          className="text-green-neon text-sm hover:underline mt-2"
                        >
                          View full curriculum ↓
                        </button>
                      )}
                    </div>

                    {/* What's Included */}
                    <div className="p-8">
                      <h3 className="font-semibold text-white mb-4">What&apos;s Included</h3>
                      <div className="space-y-3">
                        {prog.includes.map((inc) => (
                          <div key={inc} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-neon/10 border border-green-neon/20 flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="w-3 h-3 text-green-neon" />
                            </div>
                            <span className="text-white/60 text-sm">{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-24 border-t border-white/5">
        <div className="section-padding section-inner">
          <Reveal>
            <div className="text-center mb-12">
              <span className="badge badge-green mb-4">Add-Ons</span>
              <h2 className="heading-display text-4xl text-white mb-3">
                Supercharge Your <span className="text-gradient-green">Experience</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {addOns.map((addon, i) => (
              <Reveal key={addon.title} delay={i * 80} direction="up">
                <div className="card-glass p-6 group">
                  <Zap className="w-8 h-8 text-green-neon/60 mb-4 group-hover:text-green-neon transition-colors duration-300" />
                  <h4 className="font-semibold text-white mb-2">{addon.title}</h4>
                  <p className="text-white/45 text-xs leading-relaxed mb-4">{addon.desc}</p>
                  <div className="font-display font-bold text-green-neon">{addon.price}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / GUARANTEE */}
      <section className="py-24 border-t border-white/5">
        <div className="section-padding section-inner">
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal direction="left">
              <div className="card-glass p-10 flex flex-col gap-4 border-green-neon/20">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-neon to-transparent" />
                <Star className="w-10 h-10 text-green-neon" />
                <h3 className="font-display font-bold text-2xl text-white">Placement Guarantee</h3>
                <p className="text-white/55 leading-relaxed">
                  We&apos;re so confident in our programs that we offer a placement guarantee on select plans. Get placed within 6 months or receive a full refund. No questions asked.
                </p>
                <div className="mt-4 p-4 bg-green-neon/5 rounded-xl border border-green-neon/10">
                  <p className="text-green-neon text-sm font-medium">Available on Career Switch Accelerator & Senior Elevation programs</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="card-glass p-10">
                <h3 className="font-display font-bold text-2xl text-white mb-6">Frequently Asked</h3>
                <div className="space-y-6">
                  {[
                    { q: 'Can I join with no tech background?', a: 'The Zero to DE program is designed exactly for that. We start from fundamentals.' },
                    { q: 'Are sessions live or recorded?', a: 'Both! Live sessions every weekend + recordings available 24/7 for 12 months.' },
                    { q: 'What\'s the refund policy?', a: 'Full refund within 7 days of program start, no questions asked.' },
                    { q: 'How does placement support work?', a: 'We provide resume review, mock interviews, referrals, and alumni network access.' },
                  ].map(({ q, a }) => (
                    <div key={q} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                      <p className="font-medium text-white text-sm mb-2">{q}</p>
                      <p className="text-white/45 text-sm">{a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  )
}
