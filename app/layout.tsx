// import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

// tutaj tworzysz instancję fontu
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js tutorial',
  description: 'Build awesome stuff with Next.js',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <nav className='text-2xl text-primary'>navbar</nav>
        {children}
      </body>
    </html>
  )
}
