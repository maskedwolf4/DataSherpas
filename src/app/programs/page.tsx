import type { Metadata } from 'next'
import ProgramsPageClient from './ProgramsPageClient'

export const metadata: Metadata = {
  title: 'Programs | DataSherpas — Data Engineering Career Programs',
  description: 'Explore our structured data engineering programs — Zero to DE, Career Switch Accelerator, and Senior Elevation tracks.',
}

export default function ProgramsPage() {
  return <ProgramsPageClient />
}
