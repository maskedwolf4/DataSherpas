import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About DataSherpas | Our Mission & Story',
  description: 'Learn about DataSherpas — who we are, our mission to democratize data engineering careers, and the team behind it.',
}

import AboutPageClient from './AboutPageClient'
export default function AboutPage() {
  return <AboutPageClient />
}
