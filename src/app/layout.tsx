import type { ReactNode } from 'react'
import { SITE_URL, CLINIC } from '@/lib/seo'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${CLINIC.name} | Homoeopathic Clinic Melattur, Kerala`,
    template: `%s | ${CLINIC.name}`,
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
