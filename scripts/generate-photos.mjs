import fs from 'node:fs'
import path from 'node:path'

const projectRoot = process.cwd()
const photosRoot = path.join(projectRoot, 'public', 'photos')
const outputPath = path.join(projectRoot, 'src', 'data', 'generatedPhotos.ts')
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])
const ignoredFileNames = new Set(['thumbs.db', 'desktop.ini'])
const monthOrder = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
]
const collator = new Intl.Collator('es', { numeric: true, sensitivity: 'base' })

function toPosix(relativePath) {
  return relativePath.split(path.sep).join('/')
}

function isHidden(name) {
  return name.startsWith('.')
}

function collectPhotos(directory, relativeDirectory = '') {
  if (!fs.existsSync(directory)) return []

  const photos = []
  const entries = fs.readdirSync(directory, { withFileTypes: true })

  for (const entry of entries) {
    if (isHidden(entry.name)) continue

    const absolutePath = path.join(directory, entry.name)
    const relativePath = toPosix(path.join(relativeDirectory, entry.name))

    if (entry.isDirectory()) {
      photos.push(...collectPhotos(absolutePath, relativePath))
      continue
    }

    const extension = path.extname(entry.name).toLowerCase()
    if (!entry.isFile() || ignoredFileNames.has(entry.name.toLowerCase()) || !supportedExtensions.has(extension)) {
      continue
    }

    const pathParts = relativePath.split('/')
    photos.push({
      id: relativePath,
      fileName: entry.name,
      relativePath,
      src: `/photos/${relativePath}`,
      month: pathParts[0] ?? '',
    })
  }

  return photos
}

function monthPosition(month) {
  const position = monthOrder.indexOf(month.toLocaleLowerCase('es-ES'))
  return position === -1 ? monthOrder.length : position
}

const photos = collectPhotos(photosRoot).sort((left, right) => {
  const monthDifference = monthPosition(left.month) - monthPosition(right.month)
  if (monthDifference !== 0) return monthDifference

  const leftMonth = left.month.toLocaleLowerCase('es-ES')
  const rightMonth = right.month.toLocaleLowerCase('es-ES')
  const folderDifference = collator.compare(leftMonth, rightMonth)
  if (folderDifference !== 0) return folderDifference

  return collator.compare(left.relativePath, right.relativePath)
})

const fileContents = `import type { Photo } from '../types/photo'\n\nexport const generatedPhotos: Photo[] = ${JSON.stringify(photos, null, 2)}\n`

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, fileContents, 'utf8')

console.log(`Generated ${photos.length} photo${photos.length === 1 ? '' : 's'} in ${toPosix(path.relative(projectRoot, outputPath))}`)
