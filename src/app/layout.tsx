import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { SITE_URL, CLINIC } from '@/lib/seo'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0d9488',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Homoeopathic Clinic Melattur | ${CLINIC.nameShort}`,
    template: `%s | ${CLINIC.nameShort}`,
  },
  description: CLINIC.description,
  keywords: ['homeopathy clinic Melattur', 'homoeopathic doctor Malappuram', 'homoeopathy Kerala', CLINIC.name],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: CLINIC.name,
    images: [{ url: '/logo.svg', width: 512, height: 512, alt: CLINIC.name }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
