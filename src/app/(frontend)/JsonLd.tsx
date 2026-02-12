import { SITE_URL, CLINIC } from '@/lib/seo'

/** LocalBusiness + MedicalClinic + Physician for local SEO */
export function ClinicSchema() {
  const { address, phone, geo, openingHours, sameAs, name, description } = CLINIC
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: name,
        description: description,
        inLanguage: 'en-IN',
        publisher: { '@id': `${SITE_URL}/#clinic` },
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: `${name} – Homoeopathic Clinic Melattur, Kerala`,
        description: description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#clinic` },
      },
      {
        '@type': 'MedicalClinic',
        '@id': `${SITE_URL}/#clinic`,
        name: name,
        description: description,
        url: SITE_URL,
        telephone: phone,
        email: CLINIC.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: address.addressLocality,
          addressRegion: address.addressRegion,
          addressState: address.addressState,
          addressCountry: address.addressCountry,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
        sameAs: sameAs,
        priceRange: '$$',
      },
      {
        '@type': 'Physician',
        '@id': `${SITE_URL}/#doctor`,
        name: 'Dr. Naseeha',
        jobTitle: 'Homoeopathic Doctor',
        worksFor: { '@id': `${SITE_URL}/#clinic` },
        url: `${SITE_URL}/about`,
        medicalSpecialty: 'Homoeopathy',
        address: {
          '@type': 'PostalAddress',
          addressLocality: address.addressLocality,
          addressRegion: address.addressRegion,
          addressState: address.addressState,
          addressCountry: address.addressCountry,
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        name: name,
        image: `${SITE_URL}/logo.svg`,
        telephone: phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: address.addressLocality,
          addressRegion: address.addressRegion,
          addressState: address.addressState,
          addressCountry: address.addressCountry,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
        url: SITE_URL,
        openingHours: openingHours,
      },
    ],
  }
  const scriptContent = JSON.stringify(schema)
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: scriptContent }}
    />
  )
}
