import Link from 'next/link'
import Header from '../Header'
import Footer from '../Footer'
import '../styles.css'

import { canonical, buildMetaDescription } from '@/lib/seo'

export const metadata = {
  title: 'Awareness Videos – Homoeopathy & Health Tips Melattur',
  description: buildMetaDescription(
    "Health awareness and homoeopathy videos from Dr. Naseeha's Homoeopathic Clinic, Melattur. Watch tips on wellness and natural treatment. Kerala."
  ),
  keywords: ['homoeopathy awareness videos Melattur', 'health tips Dr. Naseeha', 'homoeopathy videos Kerala'],
  openGraph: {
    title: 'Awareness Videos | Dr. Naseeha\'s Homoeopathic Clinic',
    url: canonical('/awareness-videos'),
  },
  alternates: { canonical: canonical('/awareness-videos') },
}

const REEL_URLS = [
  { title: 'Awareness Video 1 | Dr. Naseeha\'s Homoeopathic Clinic', videoUrl: 'https://www.instagram.com/reel/DT3CKAYEqhw/' },
  { title: 'Awareness Video 2 | Dr. Naseeha\'s Homoeopathic Clinic', videoUrl: 'https://www.instagram.com/reel/DTxyK0gkjSv/' },
  { title: 'Awareness Video 3 | Dr. Naseeha\'s Homoeopathic Clinic', videoUrl: 'https://www.instagram.com/reel/DTsaw23knav/' },
  { title: 'Awareness Video 4 | Dr. Naseeha\'s Homoeopathic Clinic', videoUrl: 'https://www.instagram.com/reel/DTnPj46khw7/' },
]

async function fetchReelThumbnail(url: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.instagram.com/oembed?url=${encodeURIComponent(url)}`,
      { next: { revalidate: 86400 } }
    )
    if (!res.ok) return null
    const data = await res.json()
    return data.thumbnail_url ?? null
  } catch {
    return null
  }
}

export default async function AwarenessVideosPage() {
  const videos = await Promise.all(
    REEL_URLS.map(async (reel) => ({
      ...reel,
      thumbnailUrl: await fetchReelThumbnail(reel.videoUrl),
    }))
  )

  return (
    <>
      <Header />
      <main className="videos-page">
        <header className="videos-page-header">
          <div className="videos-page-header-pattern" aria-hidden />
          <div className="videos-page-header-inner">
            <h1 className="videos-page-title">AWARENESS VIDEOS</h1>
            <nav className="videos-page-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">HOME</Link>
              <span className="videos-page-breadcrumb-sep" aria-hidden>→</span>
              <span>AWARENESS VIDEOS</span>
            </nav>
          </div>
        </header>

        <div className="videos-page-content">
          <div className="videos-grid">
            {videos.map((video, i) => (
              <a
                key={i}
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="videos-card"
              >
                <div className="videos-card-thumb">
                  {video.thumbnailUrl ? (
                    <img
                      src={video.thumbnailUrl}
                      alt=""
                      className="videos-card-img"
                    />
                  ) : (
                    <div className="videos-card-placeholder" />
                  )}
                  <span className="videos-card-play" aria-hidden>
                    <svg width="68" height="48" viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M66.5 24.4c0-1.2-.5-2.3-1.3-3.1L41.2 5.3c-1.4-.9-3.3-.9-4.7 0-1.4.9-2.2 2.5-2.2 4.2v32c0 1.7.8 3.3 2.2 4.2.7.5 1.5.7 2.3.7.8 0 1.6-.2 2.3-.7l24-16c.8-.8 1.3-1.9 1.3-3.1z" fill="#FF0000"/>
                      <path d="M28 32V16l16 8-16 8z" fill="#fff"/>
                    </svg>
                  </span>
                </div>
                <p className="videos-card-title">{video.title}</p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
