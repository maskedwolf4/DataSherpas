import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact DataSherpas | Book a Free Discovery Call',
  description: 'Get in touch with DataSherpas. Book a free 30-minute discovery call to start your data engineering journey.',
}

export default function ContactPage() {
  return <ContactPageClient />
}
