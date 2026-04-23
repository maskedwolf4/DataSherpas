import type { Metadata } from 'next'
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DataSherpas | Your Career Guide to Data Engineering',
  description: 'DataSherpas helps you break into data engineering or level up your career. Expert-led mentorship, hands-on programs, and a community of data professionals.',
  keywords: 'data engineering, career guidance, mentorship, data pipeline, Apache Spark, Kafka, AWS, data career switch',
  openGraph: {
    title: 'DataSherpas | Your Career Guide to Data Engineering',
    description: 'Break into data engineering with expert guidance. Freshers to experienced professionals welcome.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
