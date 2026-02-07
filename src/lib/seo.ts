/**
 * SEO config for Dr. Naseeha's Homoeopathic Clinic, Melattur, Kerala
 * Used for metadata, sitemap, robots, and JSON-LD schema.
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://drnaseeha.com'

export const CLINIC = {
  name: "Dr. Naseeha's Homoeopathic Clinic",
  nameShort: "Dr. Naseeha's",
  description: "Personalized homoeopathic care in Melattur, Kerala. Side-effect free natural treatment for skin, allergy, PCOD, gynaecology, migraine, hair loss, diabetes, thyroid, back pain and more.",
  address: {
    street: "Melattur",
    addressLocality: "Melattur",
    addressRegion: "Malappuram",
    addressState: "Kerala",
    postalCode: "",
    addressCountry: "IN",
  },
  phone: "+917356736929",
  email: "contact@drnaseeha.com",
  geo: {
    latitude: 11.06065,
    longitude: 76.27348,
  },
  openingHours: "Mo-Sa",
  sameAs: [
    "https://www.facebook.com/share/1PFkRmicjb/",
    "https://www.instagram.com/naseehaameer",
  ],
} as const

/** Local SEO keywords for Melattur / Malappuram / Kerala */
export const LOCAL_KEYWORDS = [
  "homeopathy clinic Melattur",
  "homoeopathic doctor Melattur",
  "homeopathy Malappuram",
  "homoeopathic clinic Kerala",
  "PCOD homeopathy Malappuram",
  "allergy treatment homeopathy Melattur",
  "skin treatment homeopathy Melattur",
  "thyroid homeopathy Kerala",
  "Dr. Naseeha Homoeopathic Clinic",
]

/** All treatment slugs for sitemap and static generation */
export const TREATMENT_SLUGS = [
  "skin",
  "allergy",
  "pcod",
  "gynaecology",
  "migraine",
  "hair-loss",
  "diabetes",
  "uric-acid",
  "back-pain",
  "thyroid",
] as const

export type TreatmentSlug = (typeof TREATMENT_SLUGS)[number]

export interface TreatmentMeta {
  slug: TreatmentSlug
  title: string
  description: string
  h1: string
  keywords: string[]
}

export const TREATMENTS: Record<TreatmentSlug, TreatmentMeta> = {
  skin: {
    slug: "skin",
    title: "Skin Treatment Homeopathy Melattur",
    description: "Natural homoeopathic skin treatment in Melattur—acne, eczema, pigmentation. Gentle, side-effect free care. Book at Dr. Naseeha's Homoeopathic Clinic.",
    h1: "Skin Treatment with Homeopathy in Melattur",
    keywords: ["skin treatment homeopathy Melattur", "acne homeopathy Malappuram", "eczema homeopathy Kerala", "skin clinic Melattur"],
  },
  allergy: {
    slug: "allergy",
    title: "Allergy Treatment Homeopathy Melattur",
    description: "Constitutional allergy treatment in Melattur—seasonal, food, environmental. Long-term relief with homoeopathy. Dr. Naseeha's Homoeopathic Clinic, Malappuram.",
    h1: "Allergy Treatment with Homeopathy in Melattur",
    keywords: ["allergy treatment homeopathy Melattur", "allergy homeopathy Malappuram", "allergic rhinitis homeopathy Kerala"],
  },
  pcod: {
    slug: "pcod",
    title: "PCOD Homeopathy Treatment Malappuram",
    description: "PCOD and hormonal balance with homoeopathy in Melattur. Personalized care for irregular cycles and wellness. Dr. Naseeha's Homoeopathic Clinic.",
    h1: "PCOD Homeopathy Treatment in Malappuram & Melattur",
    keywords: ["PCOD homeopathy Malappuram", "PCOD treatment Melattur", "hormonal imbalance homeopathy Kerala"],
  },
  gynaecology: {
    slug: "gynaecology",
    title: "Gynaecology Homeopathy Melattur – Women's Health",
    description: "Homoeopathic gynaecology care in Melattur—menstrual disorders, fertility, women's health. Safe, natural treatment. Dr. Naseeha's Homoeopathic Clinic.",
    h1: "Gynaecology & Women's Health with Homeopathy in Melattur",
    keywords: ["gynaecology homeopathy Melattur", "women health homeopathy Malappuram", "menstrual disorder homeopathy Kerala"],
  },
  migraine: {
    slug: "migraine",
    title: "Migraine Treatment Homeopathy Melattur",
    description: "Migraine and chronic headache relief with homoeopathy in Melattur. Constitutional treatment to reduce frequency. Dr. Naseeha's Homoeopathic Clinic.",
    h1: "Migraine Treatment with Homeopathy in Melattur",
    keywords: ["migraine treatment homeopathy Melattur", "headache homeopathy Malappuram", "chronic migraine homeopathy Kerala"],
  },
  "hair-loss": {
    slug: "hair-loss",
    title: "Hair Loss Treatment Homeopathy Melattur",
    description: "Natural hair fall and thinning treatment in Melattur. Homoeopathic care for healthy hair growth. Dr. Naseeha's Homoeopathic Clinic, Malappuram.",
    h1: "Hair Loss Treatment with Homeopathy in Melattur",
    keywords: ["hair loss treatment homeopathy Melattur", "hair fall homeopathy Malappuram", "hair growth homeopathy Kerala"],
  },
  diabetes: {
    slug: "diabetes",
    title: "Diabetes Homeopathy Treatment Melattur",
    description: "Blood sugar support and diabetic care with homoeopathy in Melattur. Used alongside lifestyle for better control. Dr. Naseeha's Homoeopathic Clinic.",
    h1: "Diabetes Support with Homeopathy in Melattur",
    keywords: ["diabetes homeopathy Melattur", "blood sugar homeopathy Malappuram", "diabetic care homeopathy Kerala"],
  },
  "uric-acid": {
    slug: "uric-acid",
    title: "Uric Acid & Gout Homeopathy Melattur",
    description: "Uric acid and gout management with homoeopathy in Melattur. Reduce flare-ups and support joint health. Dr. Naseeha's Homoeopathic Clinic.",
    h1: "Uric Acid & Gout Treatment with Homeopathy in Melattur",
    keywords: ["uric acid homeopathy Melattur", "gout treatment homeopathy Malappuram", "joint pain homeopathy Kerala"],
  },
  "back-pain": {
    slug: "back-pain",
    title: "Back Pain Homeopathy Treatment Melattur",
    description: "Back pain and knee pain relief with homoeopathy in Melattur. Acute and chronic care. Dr. Naseeha's Homoeopathic Clinic, Malappuram.",
    h1: "Back Pain & Knee Pain Treatment with Homeopathy in Melattur",
    keywords: ["back pain homeopathy Melattur", "knee pain homeopathy Malappuram", "back pain treatment Kerala"],
  },
  thyroid: {
    slug: "thyroid",
    title: "Thyroid Homeopathy Treatment Melattur",
    description: "Thyroid support with homoeopathy in Melattur—hypo and hyperthyroid. Balance energy, weight and mood. Dr. Naseeha's Homoeopathic Clinic.",
    h1: "Thyroid Treatment with Homeopathy in Melattur",
    keywords: ["thyroid homeopathy Melattur", "hypothyroidism homeopathy Malappuram", "thyroid treatment Kerala"],
  },
}

export function canonical(path: string): string {
  const base = SITE_URL.replace(/\/$/, '')
  const p = path.startsWith('/') ? path : `/${path}`
  return `${base}${p}`
}

export function buildMetaTitle(pageTitle: string): string {
  return `${pageTitle} | ${CLINIC.name}`
}

export function buildMetaDescription(description: string, maxLength = 160): string {
  const d = description.trim()
  return d.length > maxLength ? d.slice(0, maxLength - 3) + '...' : d
}
