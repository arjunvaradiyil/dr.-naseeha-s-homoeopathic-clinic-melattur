import React from 'react'
import './styles.css'

export const metadata = {
  title: "Dr. Naseeha's Homoeopathic Clinic",
  description: "Experience a gentler way to wellness. Personalized homoeopathic care, side-effect free natural solutions for the entire family. From infants to old age.",
}

export default async function FrontendLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <div id="app">
      {children}
    </div>
  )
}
