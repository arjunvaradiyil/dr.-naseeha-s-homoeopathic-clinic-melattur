import fs from 'fs'
import path from 'path'
import Image from 'next/image'

const RESULTS_DIR = path.join(process.cwd(), 'public', 'RESULTS')
const IMAGE_EXT = /\.(png|jpe?g|webp|gif)$/i

function getResultImages(): string[] {
  try {
    const files = fs.readdirSync(RESULTS_DIR)
    return files
      .filter((f) => IMAGE_EXT.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  } catch {
    return []
  }
}

export default function ResultsSection() {
  const resultImages = getResultImages()

  if (resultImages.length === 0) return null

  return (
    <section className="results-section" id="results">
      <div className="results-inner">
        <h2 className="results-title">Treatment Results</h2>
        <p className="results-sub">Real outcomes from our homoeopathic care</p>
        <div className="results-grid">
          {resultImages.map((filename, i) => (
            <div key={filename} className="results-card">
              <div className="results-card-image">
                <Image
                  src={`/RESULTS/${encodeURIComponent(filename)}`}
                  alt={`Treatment result ${i + 1}`}
                  width={320}
                  height={400}
                  className="results-img"
                  sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
