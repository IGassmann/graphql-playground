import URQLProvider from '@/app/URQLProvider';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'URQL SSR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <URQLProvider>{children}</URQLProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
