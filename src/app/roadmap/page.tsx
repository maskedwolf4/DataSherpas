import type { Metadata } from 'next'
import RoadmapPageClient from './RoadmapPageClient'

export const metadata: Metadata = {
  title: 'Data Engineering Roadmap 2025 | DataSherpas',
  description: 'The complete, free data engineering roadmap for 2025. From beginner to senior — tools, skills, and learning paths.',
}

export default function RoadmapPage() {
  return <RoadmapPageClient />
}
