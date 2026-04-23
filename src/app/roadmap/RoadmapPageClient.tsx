'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2, Lock } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import DataFlowScene from '@/components/3d/DataFlowScene'

const roadmapPhases = [
  {
    phase: '01',
    title: 'Programming Foundation',
    duration: '4–6 Weeks',
    color: 'green-neon',
    free: true,
    skills: [
      { name: 'Python Fundamentals', status: 'core' },
      { name: 'SQL (Intermediate-Advanced)', status: 'core' },
      { name: 'Linux & Bash Scripting', status: 'core' },
      { name: 'Git & Version Control', status: 'core' },
      { name: 'Data Structures & Algorithms', status: 'bonus' },
    ],
    tools: ['Python 3.x', 'PostgreSQL', 'MySQL', 'Git', 'Ubuntu/WSL'],
    why: 'Every data engineer is a software engineer first. Strong fundamentals prevent 90% of production issues.',
  },
  {
    phase: '02',
    title: 'Data Engineering Core',
    duration: '6–8 Weeks',
    color: 'green-neon',
    free: true,
    skills: [
      { name: 'ETL vs ELT concepts', status: 'core' },
      { name: 'Apache Spark (PySpark)', status: 'core' },
      { name: 'Apache Airflow orchestration', status: 'core' },
      { name: 'Data Warehouse concepts', status: 'core' },
      { name: 'Data Lake architecture', status: 'bonus' },
      { name: 'dbt for transformations', status: 'bonus' },
    ],
    tools: ['Apache Spark 3.x', 'Apache Airflow', 'dbt', 'Pandas', 'Great Expectations'],
    why: 'These are the daily tools of every data engineer. Mastery here = immediate value at any company.',
  },
  {
    phase: '03',
    title: 'Streaming & Real-Time',
    duration: '4–6 Weeks',
    color: 'white',
    free: false,
    skills: [
      { name: 'Apache Kafka (producer/consumer)', status: 'core' },
      { name: 'Stream processing concepts', status: 'core' },
      { name: 'Apache Flink basics', status: 'bonus' },
      { name: 'Change Data Capture (CDC)', status: 'core' },
      { name: 'Kafka Connect & Schema Registry', status: 'bonus' },
    ],
    tools: ['Apache Kafka', 'Kafka Streams', 'Apache Flink', 'Debezium'],
    why: 'Real-time data is the new normal. Kafka skills are rare and highly compensated.',
  },
  {
    phase: '04',
    title: 'Cloud Platforms',
    duration: '6–8 Weeks',
    color: 'white',
    free: false,
    skills: [
      { name: 'AWS (S3, Glue, EMR, Redshift)', status: 'core' },
      { name: 'GCP (BigQuery, Dataflow, GCS)', status: 'bonus' },
      { name: 'Infrastructure as Code (Terraform)', status: 'bonus' },
      { name: 'Data platform design on cloud', status: 'core' },
      { name: 'Cost optimization strategies', status: 'bonus' },
    ],
    tools: ['AWS', 'GCP', 'Terraform', 'Docker', 'Kubernetes basics'],
    why: '90% of companies run on cloud. Knowing at least one cloud platform is non-negotiable.',
  },
  {
    phase: '05',
    title: 'Modern Data Stack',
    duration: '3–4 Weeks',
    color: 'green-neon',
    free: false,
    skills: [
      { name: 'Databricks & Delta Lake', status: 'core' },
      { name: 'Snowflake data platform', status: 'bonus' },
      { name: 'Data Mesh principles', status: 'bonus' },
      { name: 'Data Quality & Observability', status: 'core' },
      { name: 'Data Catalog & Governance', status: 'bonus' },
    ],
    tools: ['Databricks', 'Snowflake', 'Monte Carlo', 'Apache Atlas', 'DataHub'],
    why: 'These are the tools that differentiate mid-level from senior engineers.',
  },
  {
    phase: '06',
    title: 'Career & Job Hunt',
    duration: '2–4 Weeks',
    color: 'green-neon',
    free: true,
    skills: [
      { name: 'Data engineering resume writing', status: 'core' },
      { name: 'LinkedIn profile optimization', status: 'core' },
      { name: 'System design for DE interviews', status: 'core' },
      { name: 'Salary negotiation tactics', status: 'bonus' },
      { name: 'Offer evaluation framework', status: 'bonus' },
    ],
    tools: ['GitHub portfolio', 'LinkedIn', 'Notion (study tracker)', 'Resume templates'],
    why: 'Skills without visibility won\'t get you hired. We teach you to sell your skills properly.',
  },
]

export default function RoadmapPageClient() {
  return (
    <div className="min-h-screen bg-dark-bg pt-24">

      {/* HERO */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-60">
          <DataFlowScene />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent" />

        <div className="section-padding section-inner relative">
          <div className="max-w-3xl">
            <Reveal>
              <span className="badge badge-green mb-6">Free Resource</span>
              <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                Data Engineering <span className="text-gradient-green">Roadmap 2025</span>
              </h1>
              <p className="text-white/60 text-xl leading-relaxed mb-8">
                The definitive, opinionated roadmap to becoming a data engineer in 2025. Curated by senior DEs from FAANG & top Indian unicorns.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="badge badge-green">6 Phases</span>
                <span className="badge badge-white">25–32 Weeks Total</span>
                <span className="badge badge-green">Free Core Roadmap</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ROADMAP PHASES */}
      <section className="py-16">
        <div className="section-padding section-inner">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-neon via-green-neon/20 to-transparent hidden md:block" />

            <div className="space-y-12">
              {roadmapPhases.map((phase, i) => (
                <Reveal key={phase.phase} delay={i * 80} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`relative grid md:grid-cols-2 gap-8 ${i % 2 !== 0 ? 'md:[&>:first-child]:order-2' : ''}`}>
                    {/* Phase card */}
                    <div className="card-glass p-8">
                      {!phase.free && (
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 badge badge-white">
                          <Lock className="w-3 h-3" />
                          Program Only
                        </div>
                      )}

                      <div className="flex items-center gap-4 mb-6">
                        <div className={`font-mono font-bold text-5xl ${phase.color === 'green-neon' ? 'text-green-neon/20' : 'text-white/10'}`}>
                          {phase.phase}
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-xl text-white">{phase.title}</h3>
                          <span className="text-white/40 text-xs">{phase.duration}</span>
                        </div>
                      </div>

                      <p className="text-white/50 text-sm leading-relaxed mb-6 italic border-l-2 border-green-neon/30 pl-4">
                        &ldquo;{phase.why}&rdquo;
                      </p>

                      <div className="space-y-2 mb-6">
                        {phase.skills.map((s) => (
                          <div key={s.name} className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${s.status === 'core' ? 'text-green-neon' : 'text-white/30'}`} />
                              <span className={s.status === 'core' ? 'text-white/70' : 'text-white/35'}>{s.name}</span>
                            </div>
                            <span className={`text-xs font-medium ${s.status === 'core' ? 'text-green-neon/70' : 'text-white/25'}`}>
                              {s.status === 'core' ? 'Core' : 'Bonus'}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/5">
                        <p className="text-xs text-white/30 mb-2">Key Tools</p>
                        <div className="flex flex-wrap gap-2">
                          {phase.tools.map((t) => (
                            <span key={t} className="tag text-xs">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Connector node (desktop) */}
                    <div className="hidden md:flex items-center justify-center">
                      <div className={`absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 ${phase.color === 'green-neon' ? 'border-green-neon bg-dark-bg' : 'border-white/20 bg-dark-bg'} flex items-center justify-center z-10`}>
                        <span className={`text-xs font-bold font-mono ${phase.color === 'green-neon' ? 'text-green-neon' : 'text-white/40'}`}>{phase.phase}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="section-padding section-inner">
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal direction="left">
              <div className="card-glass p-10 border-green-neon/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-neon to-transparent" />
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-green-neon/5 rounded-full blur-2xl" />
                <span className="badge badge-green mb-4">Go Faster</span>
                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  Do This With Expert Guidance
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Stop learning alone. Join a cohort, get mentor support, and compress this roadmap to 12–16 weeks with our structured programs.
                </p>
                <Link href="/programs" className="btn-primary text-sm">
                  <span className="relative z-10">Explore Programs</span>
                  <ArrowRight className="w-4 h-4 relative z-10" />
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="card-glass p-10">
                <span className="badge badge-white mb-4">Free Consultation</span>
                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  Not Sure Where to Start?
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Book a free 30-minute call with a mentor. We&apos;ll assess your current skills and map the shortest path to your goal.
                </p>
                <Link href="/contact" className="btn-outline text-sm">
                  Book Free Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  )
}
