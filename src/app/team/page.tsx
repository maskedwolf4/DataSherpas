import type { Metadata } from 'next'
import TeamPageClient from './TeamPageClient'

export const metadata: Metadata = {
  title: 'Our Team | DataSherpas — Expert Data Engineering Mentors',
  description: 'Meet the experts behind DataSherpas. Senior data engineers from Google, Amazon, Flipkart, and more.',
}

export default function TeamPage() {
  return <TeamPageClient />
}
