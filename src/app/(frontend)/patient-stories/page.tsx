import Link from 'next/link'
import Header from '../Header'
import Footer from '../Footer'
import '../styles.css'

export const metadata = {
  title: "Patient Stories | Dr. Naseeha's Homoeopathic Clinic",
  description: "Read what our patients say about their experience at Dr. Naseeha's Homoeopathic Clinic, Melattur.",
}

const STORIES = [
  {
    quote: "I had a very positive experience at Naseeha's Homoeopathic Clinic, Melattur. The doctor's professional approach, careful listening, and personalized treatment made a noticeable difference in my health. Highly recommended.",
    name: 'Arjun V',
    stars: 5,
  },
  {
    quote: "I had a very good experience at this clinic. The doctor was professional, kind, and attentive. I felt listened to and well cared for. Overall, I'm very satisfied with the treatment.",
    name: 'Jishn U K',
    stars: 5,
  },
  {
    quote: "Very much satisfied with their care, motivational support and psychological support which helped me feel better and improve my health. All staff are good.",
    name: 'Archana P S',
    stars: 5,
  },
]

const REVIEW_VIDEOS = [
  { title: 'Patient Review Video 1', embedId: 'vIyEdGQJOkY' },
  { title: 'Patient Review Video 2', embedId: 'NmBK2rEjbaA' },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="stories-card-stars" aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`stories-card-star ${i <= count ? 'filled' : ''}`}>★</span>
      ))}
    </div>
  )
}

export default function PatientStoriesPage() {
  return (
    <>
      <Header />
      <main className="stories-page">
        <header className="stories-page-header">
          <div className="stories-page-header-pattern" aria-hidden />
          <div className="stories-page-header-inner">
            <h1 className="stories-page-title">PATIENT STORIES</h1>
            <nav className="stories-page-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">HOME</Link>
              <span className="stories-page-breadcrumb-sep" aria-hidden>→</span>
              <span>PATIENT STORIES</span>
            </nav>
          </div>
        </header>

        <div className="stories-page-content">
          <div className="stories-grid">
            {STORIES.map((story, i) => (
              <article key={i} className="stories-card">
                <StarRating count={story.stars} />
                <p className="stories-card-quote">{story.quote}</p>
                <span className="stories-card-quote-icon" aria-hidden>&ldquo;</span>
                <p className="stories-card-name">{story.name}</p>
              </article>
            ))}
          </div>

          <section className="stories-page-review-videos" aria-labelledby="review-videos-heading">
            <h2 id="review-videos-heading" className="stories-page-review-videos-title">Review Videos</h2>
            <div className="review-videos-embed-grid">
              {REVIEW_VIDEOS.map((video, i) => (
                <div key={i} className="review-video-embed-card">
                  <div className="review-video-embed-wrap">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="review-video-embed-iframe"
                    />
                  </div>
                  <p className="videos-card-title">{video.title}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
