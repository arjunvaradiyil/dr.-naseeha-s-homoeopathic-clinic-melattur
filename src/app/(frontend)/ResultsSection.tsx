import fs from 'fs'
import path from 'path'
import ResultsSlider from './ResultsSlider'

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
        <ResultsSlider images={resultImages} />
      </div>
    </section>
  )
}
