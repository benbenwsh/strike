import React from 'react'
import './globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import type { Metadata } from 'next'
import { body } from './fonts'

export const metadata: Metadata = {
  title: 'Strike',
  description: 'Strike Musical Institute',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={body.className}>{children}</body>
    </html>
  )
}
