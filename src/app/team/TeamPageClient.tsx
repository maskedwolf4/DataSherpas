'use client'

import Link from 'next/link'
import { Linkedin, Twitter, Github, ArrowRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

const founders = [
  {
    name: 'Prabhu Datar',
    role: 'Founder & Lead Mentor',
    company: 'Ex-Principal DE @ Amazon',
    bio: 'Prabhu has spent 12 years building data platforms at Amazon, Zomato, and Myntra. He founded DataSherpas after seeing too many talented engineers fail due to poor guidance.',
    expertise: ['Data Platform Architecture', 'Apache Spark & Kafka', 'AWS & GCP', 'System Design'],
    avatar: 'PD',
    gradient: 'from-green-neon to-green-600',
    social: { linkedin: '#', twitter: '#', github: '#' },
    placed: '200+',
  },
  {
    name: 'Nisha Mehta',
    role: 'Co-founder & Curriculum Head',
    company: 'Ex-Senior DE @ Flipkart',
    bio: 'Nisha is a data engineering educator at heart. With 9 years at Flipkart and Google, she designs our curriculum to mirror real-world engineering challenges.',
    expertise: ['Data Warehousing', 'dbt & Transformation', 'Data Modeling', 'Career Strategy'],
    avatar: 'NM',
    gradient: 'from-white/20 to-white/5',
    social: { linkedin: '#', twitter: '#', github: '#' },
    placed: '180+',
  },
  {
    name: 'Arjun Sood',
    role: 'Head of Placements',
    company: 'Ex-Tech Lead @ Swiggy',
    bio: 'Arjun runs our placement engine with military precision. He has hiring manager relationships at 100+ companies and a 95% placement success rate to prove it.',
    expertise: ['Hiring Strategy', 'Interview Coaching', 'Salary Negotiation', 'Kafka & Streaming'],
    avatar: 'AS',
    gradient: 'from-green-neon/20 to-transparent',
    social: { linkedin: '#', twitter: '#', github: '#' },
    placed: '120+',
  },
]

const mentors = [
  { name: 'Kavya R.', role: 'Staff DE @ Google', avatar: 'KR', expertise: 'BigQuery, Dataflow' },
  { name: 'Ravi Sharma', role: 'Senior DE @ Microsoft', avatar: 'RS', expertise: 'Azure, Synapse' },
  { name: 'Preeti L.', role: 'DE Lead @ Ola', avatar: 'PL', expertise: 'Kafka, Flink' },
  { name: 'Suresh K.', role: 'Data Architect @ HDFC', avatar: 'SK', expertise: 'Data Mesh, Lakehouse' },
  { name: 'Ananya T.', role: 'Senior DE @ Paytm', avatar: 'AT', expertise: 'Spark, Hive' },
  { name: 'Vikram J.', role: 'Principal DE @ Infosys', avatar: 'VJ', expertise: 'Databricks, Delta Lake' },
  { name: 'Priya B.', role: 'DE @ Razorpay', avatar: 'PB', expertise: 'Python, Airflow' },
  { name: 'Aman S.', role: 'Data Engineer @ CRED', avatar: 'AS', expertise: 'dbt, Snowflake' },
]

export default function TeamPageClient() {
  return (
    <div className="min-h-screen bg-dark-bg pt-24">

      {/* HERO */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="section-padding section-inner relative text-center">
          <Reveal>
            <span className="badge badge-green mb-6">Our Team</span>
            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Meet Your <span className="text-gradient-green">Sherpas</span>
            </h1>
            <p className="text-white/55 text-xl max-w-2xl mx-auto">
              Senior data engineers from top companies who&apos;ve been in your shoes — and know exactly how to get you to the top.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-16">
        <div className="section-padding section-inner">
          <Reveal>
            <h2 className="font-display font-bold text-2xl text-white mb-10">Founding Team</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 120} direction="up">
                <div className="card-glass p-8 flex flex-col h-full group">
                  {/* Avatar */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.gradient} border border-white/10 flex items-center justify-center font-display font-bold text-xl text-white flex-shrink-0`}>
                      {f.avatar}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">{f.name}</h3>
                      <p className="text-green-neon text-sm font-medium">{f.role}</p>
                      <p className="text-white/40 text-xs mt-0.5">{f.company}</p>
                    </div>
                  </div>

                  <p className="text-white/55 text-sm leading-relaxed mb-6 flex-1">{f.bio}</p>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {f.expertise.map((e) => (
                      <span key={e} className="tag text-xs">{e}</span>
                    ))}
                  </div>

                  {/* Stats & Social */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div>
                      <div className="text-green-neon font-bold font-display text-lg">{f.placed}</div>
                      <div className="text-white/35 text-xs">Engineers Placed</div>
                    </div>
                    <div className="flex gap-2">
                      {[
                        { href: f.social.linkedin, Icon: Linkedin },
                        { href: f.social.twitter, Icon: Twitter },
                        { href: f.social.github, Icon: Github },
                      ].map(({ href, Icon }) => (
                        <a
                          key={Icon.displayName}
                          href={href}
                          className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-green-neon hover:border-green-neon/30 transition-all duration-300"
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MENTORS */}
      <section className="py-24 border-t border-white/5">
        <div className="section-padding section-inner">
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="badge badge-green mb-3">Network</span>
                <h2 className="font-display font-bold text-3xl text-white">
                  50+ Expert Mentors
                </h2>
              </div>
              <p className="text-white/40 text-sm max-w-xs hidden md:block">
                All mentors are active senior DEs with 5+ years of experience and a passion for teaching.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mentors.map((m, i) => (
              <Reveal key={m.name} delay={i * 60} direction="up">
                <div className="card-glass p-5 text-center group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-neon/20 to-transparent border border-green-neon/20 flex items-center justify-center font-bold text-green-neon mx-auto mb-3 group-hover:border-green-neon/40 transition-colors duration-300">
                    {m.avatar}
                  </div>
                  <h4 className="font-semibold text-white text-sm">{m.name}</h4>
                  <p className="text-white/45 text-xs mt-1">{m.role}</p>
                  <p className="text-green-neon/60 text-xs mt-1">{m.expertise}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <div className="text-center mt-10">
              <p className="text-white/35 text-sm mb-4">
                + 40 more mentors across all major DE specializations
              </p>
              <Link href="/contact" className="btn-outline">
                Become a Mentor
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* JOIN TEAM */}
      <section className="py-24 border-t border-white/5">
        <div className="section-padding section-inner">
          <div className="card-glass p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-neon to-transparent" />
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-green-neon/5 rounded-full blur-[80px]" />
            <Reveal>
              <span className="badge badge-green mb-4">Join Us</span>
              <h2 className="heading-display text-4xl text-white mb-4">
                Are You a Senior DE? <span className="text-gradient-green">Mentor With Us</span>
              </h2>
              <p className="text-white/50 max-w-md mx-auto mb-8">
                Share your expertise, give back to the community, and earn while doing meaningful work. We&apos;re always looking for passionate mentors.
              </p>
              <Link href="/contact" className="btn-primary">
                <span className="relative z-10">Apply to be a Mentor</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
