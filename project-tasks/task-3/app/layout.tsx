import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Helenas Photoart',
  description: 'Studio za fotografiranje u Sinju',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav>
        <ul className='flex justify-center gap-4 text-lg gap-4'>
          <li>
            <Link href="/">O Meni</Link>
          </li>
          <li>
            <Link href="/photoservice">Usluge</Link>
          </li>
          <li>
            <Link href="/portfolio">Galerija slika</Link>
          </li>
          <li>
            <Link href="/price">Cjenik</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
           <li>
            <Link href="/contact">Kontakt</Link>
          </li>
          <li>
            <Link href="/logIn">Prijava</Link>
          </li>
        </ul>
      </nav>
      {children}</body>
    </html>
  )
}
