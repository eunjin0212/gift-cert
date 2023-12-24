import '@/styles/globals.css'
import Header from '@/components/header'
import { Metadata } from 'next'
import head from '@/lib/head.json'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: head.title,
  description: head.description,
}
export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ko">
      <body className='select-none'>
        <Header />
        {children}
      </body>
    </html>
  )
}
