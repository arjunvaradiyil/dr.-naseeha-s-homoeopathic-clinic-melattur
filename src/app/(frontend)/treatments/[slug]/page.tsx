import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { FaUser } from 'react-icons/fa'
import Header from '../../Header'
import Footer from '../../Footer'
import PageBanner from '../../PageBanner'
import { TREATMENT_SLUGS, TREATMENTS, CLINIC } from '@/lib/seo'
import type { TreatmentSlug } from '@/lib/seo'
import { canonical, buildMetaDescription } from '@/lib/seo'
import '../../styles.css'

const TREATMENT_IMAGES: Record<string, string> = {
  skin: '/skilltreatments.png',
  allergy: '/allergy_icon_no_bg.png',
  asthma: '/allergy_icon_no_bg.png',
  pcod: '/pcod.png',
  gynaecology: '/GYNAECOLOGY.png',
  migraine: '/migraine.png',
  'hair-loss': '/hairloss.png',
  diabetes: '/diabtics.png',
  'uric-acid': '/uricacidf.png',
  'back-pain': '/backpain.png',
  thyroid: '/tyroid.png',
}

export function generateStaticParams() {
  return TREATMENT_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const t = TREATMENTS[slug as TreatmentSlug]
  if (!t) return {}
  return {
    title: t.title,
    description: buildMetaDescription(t.description),
    keywords: t.keywords,
    openGraph: {
      title: t.title,
      description: t.description,
      url: canonical(`/treatments/${slug}`),
    },
    alternates: { canonical: canonical(`/treatments/${slug}`) },
  }
}

function treatmentTitleShort(h1: string) {
  return h1
    .replace(' with Homeopathy in Melattur', '')
    .replace(' in Malappuram & Melattur', '')
    .replace(' & Knee Pain Treatment with Homeopathy in Melattur', '')
    .trim()
}

/** Allergy treatment detail content (custom long-form for /treatments/allergy) */
const ALLERGY_DETAIL = {
  intro: [
    `For those seeking a natural approach, allergy treatment in homeopathy targets the root causes of immune system hypersensitivity to everyday allergens like pollen, dust mites, pet dander, certain foods, and insect stings. When exposed to these allergens, individuals may experience symptoms such as sneezing, itching, nasal congestion, skin rashes, or more severe reactions like difficulty breathing. Homeopathy treatment for Allergy offers a natural and holistic approach to managing these symptoms by addressing the root cause and strengthening the immune system, providing long-lasting relief without side effects.`,
    `Homeopathy treatment for Allergy, Allergy treatment.`,
  ],
  symptoms: {
    title: 'Symptoms of Allergies',
    intro: 'Allergic reactions can vary depending on the individual and the allergen involved. Common symptoms include:',
    items: [
      { title: 'Respiratory Issues', text: 'Sneezing, coughing, nasal congestion, runny nose, and itchy or watery eyes.' },
      { title: 'Skin Reactions', text: 'Hives, eczema, redness, or swelling.' },
      { title: 'Anaphylaxis', text: 'A severe, potentially life-threatening reaction that requires immediate medical attention.' },
      { title: 'Digestive Problems', text: 'Nausea, vomiting, diarrhea, or abdominal pain, especially in food allergies.' },
    ],
  },
  remedies: {
    title: 'Homeopathic Remedies for Allergies',
    intro: `Homeopathy offers a holistic approach to managing allergies by focusing on the individual's unique symptoms and overall constitution. Rather than merely suppressing symptoms, homeopathic remedies aim to strengthen the body's immune system and address the root cause of the hypersensitivity.`,
    clinicIntro: `At ${CLINIC.name}, our experienced practitioners conduct comprehensive evaluations to understand each patient's specific allergic responses and triggers. Based on this assessment, personalized homeopathic remedies are prescribed to:`,
    bullets: [
      'Reduce Sensitivity: Gradually decrease the body\'s overreaction to allergens.',
      'Alleviate Symptoms: Provide relief from acute allergic manifestations.',
      'Enhance Immunity: Strengthen the immune system to prevent future allergic episodes.',
    ],
  },
  benefits: {
    title: 'Benefits of Homeopathic Treatment for Allergies',
    items: [
      'Natural and Safe: Homeopathic remedies are derived from natural substances and are free from harmful side effects.',
      'Individualized Care: Treatment plans are tailored to each person\'s unique symptoms and health history.',
      'Holistic Healing: Addresses the underlying causes of allergies, promoting long-term wellness.',
    ],
  },
}

/** PCOD treatment detail content (custom long-form for /treatments/pcod) */
const PCOD_DETAIL = {
  intro: [
    `Polycystic Ovarian Disease (PCOD) is a common hormonal disorder where the ovaries produce multiple immature eggs, leading to cyst formation. This imbalance can cause irregular menstrual cycles, weight gain, acne, and fertility issues. ${CLINIC.name} offers specialized PCOD Treatment in Homeopathy to naturally restore hormonal balance and improve fertility.`,
    `PCOD Treatment, Best Homeopathy Hospital in Kerala India.`,
  ],
  causes: {
    title: 'Common Causes of PCOD',
    intro: 'PCOD can be influenced by various factors, including:',
    items: ['Hormonal imbalances', 'Insulin resistance', 'Genetic predisposition', 'Inflammation'],
  },
  symptoms: {
    title: 'Symptoms of PCOD',
    items: [
      'Irregular or missed periods',
      'Excessive hair growth (hirsutism)',
      'Acne and oily skin',
      'Weight gain or difficulty losing weight',
      'Thinning hair on the scalp',
      'Fertility issues',
    ],
  },
  approach: {
    title: 'Homeopathic Approach to PCOD',
    text: `Homeopathy offers a holistic approach to managing PCOD by addressing the root cause of hormonal imbalance. PCOD homeopathy treatment focuses on individualized care, aiming to restore hormonal harmony, regulate menstrual cycles, and improve overall well-being without side effects.`,
  },
  benefits: {
    title: 'Benefits of Homeopathy for PCOD',
    items: [
      'Regulates menstrual cycles naturally',
      'Improves hormonal balance',
      'Enhances fertility without invasive procedures',
      'Addresses associated symptoms like acne and weight gain',
      'Safe, non-hormonal, and free from side effects',
    ],
  },
}

/** Hair loss treatment detail content (custom long-form for /treatments/hair-loss) */
const HAIR_LOSS_DETAIL = {
  intro: [
    `Hair loss can be distressing, affecting both your appearance and self-esteem. At ${CLINIC.name}, we offer Homeopathy treatment for Hair loss, providing safe, natural, and effective solutions that target the root causes of hair loss. Our holistic approach promotes healthy hair growth without side effects, helping you regain confidence naturally.`,
    `Homeopathy treatment for Hair loss, Hair loss treatment in india, best hair loss treatment in india.`,
  ],
  whyChoose: {
    title: 'Why Choose Homeopathy for Hair Loss?',
    intro: 'Unlike conventional treatments that provide temporary results, homeopathy works on a holistic level, addressing underlying factors like:',
    items: [
      'Hormonal imbalances',
      'Stress and emotional well-being',
      'Nutritional deficiencies',
      'Scalp conditions like dandruff & psoriasis',
    ],
  },
  approach: {
    title: 'Our Homeopathy Hair Loss Treatment Approach',
    items: [
      'Individualized Treatment Plans – Tailored to your specific hair concerns.',
      'Strengthens Hair Roots – Prevents further hair fall by improving follicle health.',
      'Stimulates Natural Growth – Encourages hair regrowth by improving blood circulation to the scalp.',
      'Balances Hormones – Addresses hormonal imbalances that contribute to hair loss.',
      'Safe & Chemical-Free – No harsh medications or invasive procedures.',
    ],
  },
}

/** Migraine treatment detail content (custom long-form for /treatments/migraine) */
const MIGRAINE_DETAIL = {
  intro: [
    `Migraines can disrupt daily life, causing debilitating pain and discomfort. At ${CLINIC.name}, we offer Migraine Treatment in Homeopathy that provides natural and holistic relief, addressing the root cause of your migraines to help you live a pain-free life.`,
    `Migraine treatment, Best Homeopathy Hospital in Kerala India.`,
  ],
  triggers: {
    title: 'Common Migraine Triggers We Address:',
    items: [
      'Stress and anxiety',
      'Hormonal changes',
      'Sleep disturbances',
      'Dietary factors',
    ],
  },
  features: {
    title: 'Key Features of Our Homeopathy Treatment',
    items: [
      { title: 'Customized Treatment Plans', text: 'Our homeopathic doctors create individualized treatment plans based on your symptoms, lifestyle, and health history, offering Migraine Homeopathic treatment tailored to your unique needs.' },
      { title: 'Holistic Care', text: 'We focus on your overall well-being, addressing not just the pain but the emotional and physical triggers of migraines.' },
      { title: 'Natural Remedies', text: 'Safe, gentle, and free from harmful side effects, our homeopathic remedies provide relief without the risk of dependency.' },
      { title: 'Effective for All Stages of Migraine', text: "Whether you're experiencing occasional migraines or chronic, severe episodes, our treatments are effective for various types of migraines." },
      { title: 'No More Painkillers', text: 'Say goodbye to the constant reliance on over-the-counter pain medications. Our remedies aim to reduce the frequency, intensity, and duration of migraines.' },
    ],
  },
}

/** Gynaecology treatment detail content (custom long-form for /treatments/gynaecology) */
const GYNAECOLOGY_DETAIL = {
  section: {
    title: 'Department of Gynecology',
    intro: `At ${CLINIC.name}, we provide compassionate and professional gynecological services, focusing on women's health and well-being. Our experienced team of gynecologists is committed to offering personalized care, from routine check-ups to specialized treatments. We specialize in homeopathic treatment for gynecology, providing natural and effective solutions for various women's health concerns while ensuring safe and holistic care.`,
  },
}

/** Asthma treatment detail content (custom long-form for /treatments/asthma) */
const ASTHMA_DETAIL = {
  intro: [
    `If you're looking for a natural way to manage asthma, homeopathy for asthma offers effective support for this chronic condition characterized by airway inflammation and restricted breathing. Asthma symptoms often include wheezing, coughing, chest tightness, and shortness of breath, particularly at night or early in the morning. Homeopathic care focuses on the root cause, helping reduce attacks and improve quality of life.`,
    `Homeo Treatment For Asthma, Inhailer.`,
  ],
  causes: {
    title: 'Common Causes of Asthma',
    intro: 'Asthma can be triggered by several factors, including.',
    items: [
      { title: 'Allergens (pollen, dust mites, pet dander)', text: 'Trigger asthma by causing airway inflammation and allergic reactions.' },
      { title: 'Respiratory infections', text: 'Viral infections like colds can inflame airways, worsening asthma symptoms.' },
      { title: 'Physical exertion', text: 'Intense activity can lead to exercise-induced asthma, causing breathlessness.' },
      { title: 'Cold air exposure', text: 'Inhaling cold, dry air can constrict airways, making breathing difficult.' },
    ],
    closing: 'Homeopathic treatment for Asthma works by addressing these imbalances gently and naturally, restoring harmony in the body and improving lung function.',
  },
  symptoms: {
    title: 'Symptoms of Asthma',
    items: [
      'Shortness of breath',
      'Wheezing or whistling sound while breathing',
      'Persistent coughing, especially at night',
      'Chest tightness or pressure',
      'Difficulty sleeping due to breathing issues',
    ],
  },
  closing: 'Homeopathy for Asthma offers a holistic, natural approach by addressing the root cause, strengthening the immune system, and reducing the frequency and severity of attacks. Treatments are tailored to each individual\'s specific symptoms and health history.',
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const validSlug = TREATMENT_SLUGS.includes(slug as TreatmentSlug) ? (slug as TreatmentSlug) : null
  if (!validSlug) notFound()

  const t = TREATMENTS[validSlug]
  const img = TREATMENT_IMAGES[validSlug]
  const otherSlugs = TREATMENT_SLUGS.filter((s) => s !== validSlug).slice(0, 6)

  const breadcrumbTitle = treatmentTitleShort(t.h1).toUpperCase()

  const shortTitle = treatmentTitleShort(t.h1)

  return (
    <>
      <Header />
      <main className="treatment-detail-page blog-post-page">
        <PageBanner
          title={breadcrumbTitle}
          items={[
            { label: 'HOME', href: '/' },
            { label: 'TREATMENTS', href: '/treatments' },
            { label: breadcrumbTitle },
          ]}
        />
        <article className="blog-post-article-wrap">
          <div className="blog-post-inner">
            <header className="blog-post-header">
              <span className="blog-post-category">Treatment</span>
              <h1 className="blog-post-title">{shortTitle.toUpperCase()}</h1>
              <div className="blog-post-meta">
                <span className="blog-post-author-avatar" aria-hidden>
                  <FaUser className="blog-post-author-icon" />
                </span>
                <span className="blog-post-author-text">{CLINIC.name}</span>
              </div>
            </header>

            {img && (
              <div className="blog-post-featured-image">
                <Image src={img} alt={shortTitle} fill sizes="(max-width: 900px) 100vw, 800px" priority />
              </div>
            )}

            <div className="blog-post-article">
              <div className="blog-post-body">
              {validSlug === 'allergy' ? (
                <>
                  <div className="blog-post-intro-block">
                    {ALLERGY_DETAIL.intro.map((para, i) => (
                      <p key={i} className="blog-post-p">
                        {para}
                      </p>
                    ))}
                  </div>
                  <section className="treatment-section">
                    <h2 className="blog-post-heading">{ALLERGY_DETAIL.symptoms.title}</h2>
                    <p className="blog-post-p">{ALLERGY_DETAIL.symptoms.intro}</p>
                    <ul className="blog-post-list">
                      {ALLERGY_DETAIL.symptoms.items.map((item, i) => (
                        <li key={i}>
                          <strong>{item.title}</strong>
                          <br />
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section className="treatment-section">
                    <h2 className="blog-post-heading">{ALLERGY_DETAIL.remedies.title}</h2>
                    <p className="blog-post-p">{ALLERGY_DETAIL.remedies.intro}</p>
                    <p className="blog-post-p">{ALLERGY_DETAIL.remedies.clinicIntro}</p>
                    <ul className="blog-post-list">
                      {ALLERGY_DETAIL.remedies.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </section>
                  <section className="treatment-section">
                    <h2 className="blog-post-heading">{ALLERGY_DETAIL.benefits.title}</h2>
                    <ul className="blog-post-list">
                      {ALLERGY_DETAIL.benefits.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>
                </>
              ) : validSlug === 'pcod' ? (
                <>
                  <div className="blog-post-intro-block">
                    {PCOD_DETAIL.intro.map((para, i) => (
                      <p key={i} className="blog-post-p">
                        {para}
                      </p>
                    ))}
                  </div>
                  <section className="treatment-section">
                    <h2 className="blog-post-heading">{PCOD_DETAIL.causes.title}</h2>
                    <p className="blog-post-p">{PCOD_DETAIL.causes.intro}</p>
                    <ul className="blog-post-list">
                      {PCOD_DETAIL.causes.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>
                  <section className="treatment-section">
                    <h2 className="blog-post-heading">{PCOD_DETAIL.symptoms.title}</h2>
                    <ul className="blog-post-list">
                      {PCOD_DETAIL.symptoms.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>
                  <section className="treatment-section">
                    <h2 className="blog-post-heading">{PCOD_DETAIL.approach.title}</h2>
                    <p className="blog-post-p">{PCOD_DETAIL.approach.text}</p>
                  </section>
                  <section className="treatment-section">
                    <h2 className="blog-post-heading">{PCOD_DETAIL.benefits.title}</h2>
                    <ul className="blog-post-list">
                      {PCOD_DETAIL.benefits.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>
                </>
              ) : validSlug === 'hair-loss' ? (
                <>
                  <div className="blog-post-intro-block">
                    {HAIR_LOSS_DETAIL.intro.map((para, i) => (
                      <p key={i} className="blog-post-p">
                        {para}
                      </p>
                    ))}
                  </div>
                  <section className="treatment-section">
                    <h2 className="blog-post-heading">{HAIR_LOSS_DETAIL.whyChoose.title}</h2>
                    <p className="blog-post-p">{HAIR_LOSS_DETAIL.whyChoose.intro}</p>
                    <ul className="blog-post-list">
                      {HAIR_LOSS_DETAIL.whyChoose.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>
                  <section className="treatment-section">
                    <h2 className="blog-post-heading">{HAIR_LOSS_DETAIL.approach.title}</h2>
                    <ul className="blog-post-list">
                      {HAIR_LOSS_DETAIL.approach.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>
                </>
              ) : validSlug === 'migraine' ? (
                <>
                  <div className="blog-post-intro-block">
                    {MIGRAINE_DETAIL.intro.map((para, i) => (
                      <p key={i} className="blog-post-p">
                        {para}
                      </p>
                    ))}
                  </div>
                  <section className="treatment-section">
                    <h2 className="blog-post-heading">{MIGRAINE_DETAIL.triggers.title}</h2>
                    <ul className="blog-post-list">
                      {MIGRAINE_DETAIL.triggers.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>
                  <section className="treatment-section">
                    <h2 className="blog-post-heading">{MIGRAINE_DETAIL.features.title}</h2>
                    <ul className="blog-post-list">
                      {MIGRAINE_DETAIL.features.items.map((item, i) => (
                        <li key={i}>
                          <strong>{item.title}:</strong> {item.text}
                        </li>
                      ))}
                    </ul>
                  </section>
                </>
              ) : validSlug === 'gynaecology' ? (
                <>
                  <section className="treatment-section">
                    <h2 className="blog-post-heading">{GYNAECOLOGY_DETAIL.section.title}</h2>
                    <p className="blog-post-p">{GYNAECOLOGY_DETAIL.section.intro}</p>
                  </section>
                </>
              ) : validSlug === 'asthma' ? (
                <>
                  <div className="blog-post-intro-block">
                    {ASTHMA_DETAIL.intro.map((para, i) => (
                      <p key={i} className="blog-post-p">
                        {para}
                      </p>
                    ))}
                  </div>
                  <section className="treatment-section">
                    <h2 className="blog-post-heading">{ASTHMA_DETAIL.causes.title}</h2>
                    <p className="blog-post-p">{ASTHMA_DETAIL.causes.intro}</p>
                    <ul className="blog-post-list">
                      {ASTHMA_DETAIL.causes.items.map((item, i) => (
                        <li key={i}>
                          <strong>{item.title}</strong>
                          <br />
                          {item.text}
                        </li>
                      ))}
                    </ul>
                    <p className="blog-post-p">{ASTHMA_DETAIL.causes.closing}</p>
                  </section>
                  <section className="treatment-section">
                    <h2 className="blog-post-heading">{ASTHMA_DETAIL.symptoms.title}</h2>
                    <ul className="blog-post-list">
                      {ASTHMA_DETAIL.symptoms.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <p className="blog-post-p">{ASTHMA_DETAIL.closing}</p>
                  </section>
                </>
              ) : (
                <>
                  <p className="blog-post-p">{t.description}</p>
                  <section className="treatment-section">
                    <h2 className="blog-post-heading">Why homoeopathy for this condition?</h2>
                    <p className="blog-post-p">
                      At {CLINIC.name}, we use constitutional homoeopathy to address the root cause, not just symptoms. Treatment is personalized, gentle and suitable for all ages. We are based in Melattur, Malappuram district, Kerala. In-clinic and online consultation is also available.
                    </p>
                  </section>
                  <section className="treatment-section">
                    <h2 className="blog-post-heading">Our approach</h2>
                    <p className="blog-post-p">
                      We focus on understanding your complete health picture. Homoeopathic treatment is gentle, with minimal or no side effects, and can be used for all age groups. Book an in-clinic visit or an online consultation at your convenience.
                    </p>
                  </section>
                </>
              )}

              </div>

              <footer className="blog-post-footer">
                <Link href="/treatments" className="blog-post-back">← Back to treatments</Link>
                <a href="https://wa.me/917356736929" target="_blank" rel="noopener noreferrer" className="btn btn-teal">
                  Book Appointment via WhatsApp
                </a>
              </footer>

              <nav className="treatment-related treatment-related-grid-wrap" aria-label="Related treatments">
                <h2 className="blog-post-heading">Other treatments we offer</h2>
                <div className="treatment-related-grid">
                  {otherSlugs.map((s) => {
                    const imgSrc = TREATMENT_IMAGES[s]
                    const label = treatmentTitleShort(TREATMENTS[s].h1)
                    return (
                      <Link key={s} href={`/treatments/${s}`} className="treatment-related-circle">
                        <span className="treatment-related-circle-icon">
                          {imgSrc ? (
                            <Image src={imgSrc} alt="" width={48} height={48} />
                          ) : (
                            <span className="treatment-related-circle-placeholder">{label.charAt(0)}</span>
                          )}
                        </span>
                        <span className="treatment-related-circle-label">{label}</span>
                      </Link>
                    )
                  })}
                  <Link href="/treatments" className="treatment-related-circle treatment-related-circle-all">
                    <span className="treatment-related-circle-icon">
                      <span className="treatment-related-circle-placeholder">All</span>
                    </span>
                    <span className="treatment-related-circle-label">All treatments</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
