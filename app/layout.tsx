import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../style/style.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Happy Upgrade',
  description: 'Help you upgrade your project dependencies happily.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
