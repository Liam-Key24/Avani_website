import type { Metadata } from 'next'
import { React } from 'react';
import { Playfair_Display } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'] })

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
      <body className={playfair.className}>{children}</body>
    </html>
  )
}

