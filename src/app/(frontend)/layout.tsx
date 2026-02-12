import React from 'react'
import { CLINIC } from '@/lib/seo'
import { ClinicSchema } from './JsonLd'
import WhatsAppFab from './WhatsAppFab'
import './styles.css'

export const metadata = {
  title: `${CLINIC.name} | Homoeopathic Clinic Melattur, Kerala`,
  description: CLINIC.description,
  openGraph: {
    title: CLINIC.name,
    description: CLINIC.description,
  },
}

export default async function FrontendLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <div id="app">
      <ClinicSchema />
      {children}
      <WhatsAppFab />
    </div>
  )
}
