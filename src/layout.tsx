import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Site Ana',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html>
      <body className={inter.className}>
  
        {children}
      </body>
    </html>
  )
}