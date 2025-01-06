import type { Metadata } from 'next'
import { Playfair_Display, Baskervville } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'] }) 
const baskervville = Baskervville({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'AVANTI | Tapas & Pizzeria',
  description: 'Experience authentic tapas and pizza at AVANTI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={baskervville.className}>{children}</body>
    </html>
  )
}

