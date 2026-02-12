#!/usr/bin/env node
/**
 * Compress PNG and JPEG under public/ in place.
 * - PNG: max compression, strip metadata; optionally resize if very large.
 * - JPEG: quality 85, strip metadata.
 * Run: node scripts/optimize-images.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PUBLIC = path.join(__dirname, '..', 'public')

const IMAGE_EXT = /\.(png|jpe?g)$/i
const MAX_WIDTH = 1200
const MAX_HEIGHT = 1200

function* walkDir(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const rel = path.join(base, e.name)
    if (e.isDirectory()) {
      yield* walkDir(path.join(dir, e.name), rel)
    } else if (e.isFile() && IMAGE_EXT.test(e.name)) {
      yield path.join(dir, e.name)
    }
  }
}

async function optimize(filePath) {
  const rel = path.relative(PUBLIC, filePath)
  const ext = path.extname(filePath).toLowerCase()
  const before = fs.statSync(filePath).size

  let pipeline = sharp(filePath)
  const meta = await pipeline.metadata()
  const w = meta.width || 0
  const h = meta.height || 0

  if (w > MAX_WIDTH || h > MAX_HEIGHT) {
    pipeline = pipeline.resize(MAX_WIDTH, MAX_HEIGHT, { fit: 'inside', withoutEnlargement: true })
  }

  if (ext === '.png') {
    pipeline = pipeline
      .png({ compressionLevel: 9, effort: 10 })
      .strip()
  } else {
    pipeline = pipeline
      .jpeg({ quality: 85, mozjpeg: true })
      .strip()
  }

  const buf = await pipeline.toBuffer()
  const after = buf.length
  fs.writeFileSync(filePath, buf)
  const saved = before - after
  const pct = before ? ((saved / before) * 100).toFixed(1) : 0
  return { rel, before, after, saved, pct }
}

async function main() {
  const files = [...walkDir(PUBLIC)]
  if (files.length === 0) {
    console.log('No PNG/JPEG files found in public/')
    return
  }

  console.log(`Optimizing ${files.length} images in public/ ...\n`)

  let totalBefore = 0
  let totalAfter = 0

  for (const fp of files) {
    try {
      const r = await optimize(fp)
      totalBefore += r.before
      totalAfter += r.after
      const sign = r.saved >= 0 ? '-' : '+'
      console.log(`  ${r.rel}: ${(r.before / 1024).toFixed(0)} KB → ${(r.after / 1024).toFixed(0)} KB (${sign}${r.pct}%)`)
    } catch (err) {
      console.error(`  ${path.relative(PUBLIC, fp)}: ${err.message}`)
    }
  }

  const totalSaved = totalBefore - totalAfter
  const totalPct = totalBefore ? ((totalSaved / totalBefore) * 100).toFixed(1) : 0
  console.log('\n' + '─'.repeat(50))
  console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(1)} MB → ${(totalAfter / 1024 / 1024).toFixed(1)} MB (saved ${(totalSaved / 1024 / 1024).toFixed(1)} MB / ${totalPct}%)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
