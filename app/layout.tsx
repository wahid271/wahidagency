import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wahid Agency - Website Modern untuk Pesantren & Sekolah Islam',
  description: 'Membantu pesantren, sekolah, dan bisnis tampil lebih profesional di era digital.',
  keywords: 'website pesantren, website sekolah islam, web developer, agency digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
