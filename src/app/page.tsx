'use client'

import Link from 'next/link'
import { ArrowRight, ChevronDown, Zap, Target, Users, TrendingUp, Star, CheckCircle2, Play, Code2, Database, Cpu, GitBranch } from 'lucide-react'
import CountUp from '@/components/ui/CountUp'
import Reveal from '@/components/ui/Reveal'
import FloatingTorus from '@/components/3d/FloatingTorus'
import DataFlowScene from '@/components/3d/DataFlowScene'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import Image from 'next/image'

const stats = [
  { value: 500, suffix: '+', label: 'Engineers Placed' },
  { value: 95, suffix: '%', label: 'Success Rate' },
  { value: 12, suffix: 'LPA', prefix: '↑', label: 'Avg. Salary Hike' },
  { value: 50, suffix: '+', label: 'Expert Mentors' },
]

const techStack = [
  { name: 'Apache Spark', icon: Zap, color: '#FF6B35' },
  { name: 'Apache Kafka', icon: GitBranch, color: '#231F20' },
  { name: 'dbt', icon: Database, color: '#FF694A' },
  { name: 'Airflow', icon: Target, color: '#007A88' },
  { name: 'AWS / GCP / Azure', icon: Cpu, color: '#FF9900' },
  { name: 'Python / SQL', icon: Code2, color: '#3776AB' },
  { name: 'Databricks', icon: Zap, color: '#FF3621' },
  { name: 'Snowflake', icon: Database, color: '#29B5E8' },
]

const programs = [
  {
    tag: 'Freshers',
    title: 'Zero to Data Engineer',
    desc: 'Start your data engineering journey from scratch. Learn fundamentals, build real projects, and land your first DE role.',
    duration: '16 Weeks',
    level: 'Beginner',
    highlights: ['Python & SQL fundamentals', 'Data pipeline basics', 'Cloud foundations', 'Resume & interview prep'],
    gradient: 'from-green-neon/10 to-transparent',
    border: 'border-green-neon/20',
  },
  {
    tag: 'Most Popular',
    title: 'Career Switch Accelerator',
    desc: 'Transition from another field into data engineering. Leverage your existing skills while building new ones.',
    duration: '12 Weeks',
    level: 'Intermediate',
    highlights: ['Intensive project-based learning', 'Real-world datasets', 'Mentor matching', 'Job placement support'],
    gradient: 'from-white/5 to-transparent',
    border: 'border-white/10',
    featured: true,
  },
  {
    tag: 'Experienced',
    title: 'Senior DE Elevation',
    desc: 'Already a data engineer? Break the ceiling. Learn advanced architectures, lead teams, and command senior roles.',
    duration: '8 Weeks',
    level: 'Advanced',
    highlights: ['Advanced system design', 'Data platform architecture', 'Leadership skills', 'Negotiation tactics'],
    gradient: 'from-green-neon/5 to-transparent',
    border: 'border-white/8',
  },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Data Engineer @ Flipkart',
    prev: 'Was: Java Developer',
    content: 'DataSherpas transformed my career completely. I went from writing Java microservices to building real-time data pipelines at Flipkart in just 14 weeks.',
    rating: 5,
    hike: '8→22 LPA',
  },
  {
    name: 'Rahul Verma',
    role: 'Senior DE @ Amazon',
    prev: 'Was: Analytics Intern',
    content: 'The mentorship quality here is unmatched. My mentor guided me through system design interviews that cracked my Amazon offer. Life-changing experience!',
    rating: 5,
    hike: 'First Job: 18 LPA',
  },
  {
    name: 'Anjali Patel',
    role: 'Data Engineer @ Zomato',
    prev: 'Was: ETL Developer',
    content: 'I was stuck at the same level for 3 years. DataSherpas helped me understand modern data stacks and I got promoted within months of completing the program.',
    rating: 5,
    hike: '15→28 LPA',
  },
]

const whyUs = [
  {
    icon: Target,
    title: 'Role-Focused Learning',
    desc: 'Every module is designed with the end role in mind — not just theory but real job scenarios.',
  },
  {
    icon: Users,
    title: 'Expert Mentors',
    desc: 'Learn from senior DEs at top companies like Google, Amazon, Flipkart, and startups.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    desc: 'Our placement record speaks for itself — 500+ placed engineers, 95% success rate.',
  },
  {
    icon: Zap,
    title: 'Industry-Ready Skills',
    desc: 'Hands-on projects with real datasets. Build a portfolio that impresses hiring managers.',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-bg">

      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-grid opacity-40" />
          {/* Radial hero glow */}
          <div className="absolute inset-0 bg-hero-gradient" />
          {/* Star field */}
          {Array.from({ length: 60 }).map((_, i) => {
            const size = i % 5 === 0 ? 2 : 1
            return (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: size,
                  height: size,
                  top: `${(i * 13.7) % 100}%`,
                  left: `${(i * 23.1) % 100}%`,
                  opacity: 0.08 + (i % 5) * 0.06,
                  animation: `pulse ${2 + (i % 4)}s ease-in-out infinite`,
                  animationDelay: `${(i * 0.3) % 4}s`,
                }}
              />
            )
          })}
        </div>

        {/* Gradient bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-bg to-transparent z-10" />

        <div className="relative z-10 section-padding section-inner pt-32 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column — Text Content */}
            <div className="text-left">
              {/* Badge */}
              <Reveal delay={0}>
                <div className="inline-flex items-center gap-2 badge badge-green mb-8">
                  <span className="neon-dot animate-pulse" />
                  <span>India&apos;s #1 Data Engineering Career Platform</span>
                </div>
              </Reveal>

              {/* Main Heading */}
              <Reveal delay={100}>
                <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] mb-8">
                  <span className="text-white">Guide Your Way</span>
                  <br />
                  <span className="text-gradient-green">Into Data</span>
                  <br />
                  <span className="text-white">Engineering</span>
                </h1>
              </Reveal>

              {/* Subtitle */}
              <Reveal delay={200}>
                <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                  Whether you&apos;re a fresher starting your journey or an experienced professional seeking a hike — DataSherpas provides expert mentorship, structured programs, and real-world projects to get you there.
                </p>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal delay={300}>
                <div className="flex flex-wrap gap-4 mb-12">
                  <Link href="/programs" className="btn-primary text-sm">
                    <span className="relative z-10">Explore Programs</span>
                    <ArrowRight className="w-4 h-4 relative z-10" />
                  </Link>
                  <Link href="/roadmap" className="btn-outline text-sm">
                    <Play className="w-4 h-4" />
                    Free Roadmap
                  </Link>
                </div>
              </Reveal>

              {/* Trust indicators */}
              <Reveal delay={400}>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  {['No prior DE experience needed', 'Flexible learning — live + async', 'Placement guarantee on select plans'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-white/50">
                      <CheckCircle2 className="w-4 h-4 text-green-neon flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Column — Large Logo */}
            <div className="hidden lg:flex items-center justify-center">
              <Reveal delay={200}>
                <div className="relative w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] flex items-center justify-center">
                  {/* Glow ring behind logo */}
                  <div className="absolute inset-[-15%] rounded-full bg-green-neon/8 blur-[100px] animate-pulse-slow" />
                  <div className="absolute inset-[-5%] rounded-full border border-green-neon/10 opacity-50" />
                  <div className="relative w-full h-full hero-logo-glow">
                    <Image
                      src="/data_sherpa_logo.png"
                      alt="DataSherpas"
                      fill
                      className="object-contain opacity-90 hero-logo-float drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 text-green-neon/50" />
        </div>
      </section>

      {/* Scroll Sequence Section */}
      <ScrollAnimation />

      {/* ====== STATS SECTION ====== */}
      <section className="py-20 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="section-padding section-inner relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100} direction="up">
                <div className="text-center">
                  <div className="stat-counter text-4xl md:text-5xl font-display font-bold mb-2">
                    {stat.prefix && <span>{stat.prefix}</span>}
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-white/45 text-sm">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PROGRAMS SECTION ====== */}
      <section className="py-32 relative overflow-hidden" id="programs">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-neon/20 to-transparent" />

        {/* Background orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-neon/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="section-padding section-inner relative">
          <Reveal>
            <div className="text-center mb-16">
              <span className="badge badge-green mb-4">Programs</span>
              <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                Choose Your <span className="text-gradient-green">Path</span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto">
                Structured programs designed for every stage of your data engineering journey.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, i) => (
              <Reveal key={program.title} delay={i * 120} direction="up">
                <div className={`card-glass p-8 h-full flex flex-col relative group ${program.featured ? 'border-green-neon/30' : ''}`}>
                  {program.featured && (
                    <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-neon to-transparent" />
                  )}

                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <span className={`badge ${program.featured ? 'badge-green' : 'badge-white'}`}>
                        {program.featured && <span className="neon-dot" />}
                        {program.tag}
                      </span>
                      <span className="text-xs text-white/30 font-mono">{program.level}</span>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-white mb-3">{program.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-6">{program.desc}</p>

                    <div className="space-y-2 mb-8">
                      {program.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-sm text-white/60">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-neon flex-shrink-0" />
                          {h}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                      <span className="text-white/40 text-xs flex items-center gap-1">
                        <Target className="w-3.5 h-3.5" />
                        {program.duration}
                      </span>
                      <Link
                        href="/programs"
                        className={`text-sm font-semibold flex items-center gap-1 transition-colors duration-300 ${program.featured ? 'text-green-neon' : 'text-white/60 hover:text-white'}`}
                      >
                        Explore
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="text-center mt-12">
              <Link href="/programs" className="btn-outline">
                View All Programs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== TECH STACK SECTION ====== */}
      <section className="py-24 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-card/30" />
        <div className="section-padding section-inner relative">
          <Reveal>
            <div className="text-center mb-12">
              <span className="badge badge-green mb-4">Tech Stack</span>
              <h2 className="heading-display text-3xl md:text-4xl text-white mb-3">
                Master the Modern <span className="text-gradient-green">Data Stack</span>
              </h2>
              <p className="text-white/45 max-w-lg mx-auto text-sm">
                Industry-relevant tools and technologies used at top data-driven companies
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, i) => (
              <Reveal key={tech.name} delay={i * 60} direction="up">
                <div className="card-glass p-5 flex flex-col items-center gap-3 group cursor-default">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${tech.color}15`, border: `1px solid ${tech.color}30` }}
                  >
                    <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
                  </div>
                  <span className="text-white/70 text-sm font-medium text-center">{tech.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WHY US SECTION ====== */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-20 pointer-events-none">
          <FloatingTorus />
        </div>

        <div className="section-padding section-inner relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <Reveal>
                <span className="badge badge-green mb-4">Why DataSherpas</span>
                <h2 className="heading-display text-4xl md:text-5xl text-white mb-6 leading-tight">
                  We&apos;ve Helped <span className="text-gradient-green">500+</span> Engineers Break Through
                </h2>
                <p className="text-white/50 leading-relaxed mb-10">
                  Our team of seasoned data professionals has been on both sides — hiring and being hired. We know exactly what it takes to crack the data engineering market.
                </p>
              </Reveal>

              <div className="grid grid-cols-2 gap-4">
                {whyUs.map((item, i) => (
                  <Reveal key={item.title} delay={i * 100} direction="left">
                    <div className="card-dark p-5 group">
                      <div className="w-10 h-10 rounded-xl bg-green-neon/10 border border-green-neon/20 flex items-center justify-center mb-4 group-hover:border-green-neon/40 transition-colors duration-300">
                        <item.icon className="w-5 h-5 text-green-neon" />
                      </div>
                      <h4 className="font-semibold text-white text-sm mb-2">{item.title}</h4>
                      <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="relative">
              <Reveal direction="right">
                <div className="relative h-[500px] card-glass p-8 overflow-hidden">
                  {/* 3D data flow */}
                  <div className="absolute inset-0">
                    <DataFlowScene />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 via-dark-card/20 to-transparent" />

                  {/* Overlay cards */}
                  <div className="absolute bottom-8 left-8 right-8 space-y-3">
                    <div className="card-glass p-4 flex items-center gap-3">
                      <div className="neon-dot" />
                      <div>
                        <div className="text-xs text-white/60">Pipeline Status</div>
                        <div className="text-sm font-semibold text-green-neon">All Systems Operational</div>
                      </div>
                      <span className="ml-auto text-xs text-white/30 font-mono">Live</span>
                    </div>
                    <div className="card-glass p-4">
                      <div className="text-xs text-white/40 mb-2">Weekly Placements</div>
                      <div className="flex gap-1">
                        {[70, 85, 60, 90, 75, 95, 80].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm bg-green-neon/20"
                            style={{ height: `${h * 0.4}px`, alignSelf: 'flex-end' }}
                          >
                            <div
                              className="w-full rounded-sm bg-green-neon"
                              style={{ height: `${h}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIALS SECTION ====== */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-card/20" />
        <div className="absolute top-0 left-0 right-0 h-px gradient-line" />
        <div className="absolute bottom-0 left-0 right-0 h-px gradient-line" />

        <div className="section-padding section-inner relative">
          <Reveal>
            <div className="text-center mb-16">
              <span className="badge badge-green mb-4">Success Stories</span>
              <h2 className="heading-display text-4xl md:text-5xl text-white mb-4">
                Real Engineers, <span className="text-gradient-green">Real Results</span>
              </h2>
              <p className="text-white/50 max-w-md mx-auto">
                Don&apos;t just take our word for it — hear from engineers who made the leap.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120} direction="up">
                <div className="card-glass p-8 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-green-neon text-green-neon" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white/65 text-sm leading-relaxed flex-1 mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-neon/30 to-green-neon/5 border border-green-neon/20 flex items-center justify-center font-bold text-green-neon text-sm">
                      {t.name[0]}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white text-sm">{t.name}</div>
                      <div className="text-white/40 text-xs">{t.role}</div>
                      <div className="text-white/30 text-xs">{t.prev}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-neon text-xs font-bold font-mono">{t.hike}</div>
                      <div className="text-white/30 text-xs">salary</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-neon/3 to-transparent" />

        <div className="section-padding section-inner relative text-center">
          <Reveal>
            <span className="badge badge-green mb-6">Start Today</span>
            <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Your Data Career Starts <span className="text-gradient-green">Now</span>
            </h2>
            <p className="text-white/50 text-xl max-w-xl mx-auto mb-12">
              Join 500+ engineers who chose to bet on themselves. Book a free discovery call and let&apos;s map your roadmap.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Link href="/contact" className="btn-primary text-base px-10 py-5">
                <span className="relative z-10">Book Free Discovery Call</span>
                <ArrowRight className="w-5 h-5 relative z-10" />
              </Link>
              <Link href="/programs" className="btn-outline text-base">
                View All Programs
              </Link>
            </div>

            <p className="text-white/30 text-sm">
              No commitment required · Free 30-min consultation · Slots filling fast
            </p>
          </Reveal>
        </div>
      </section>

    </div>
  )
}
