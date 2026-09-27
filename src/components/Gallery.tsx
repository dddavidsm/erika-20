import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { memoryContent } from '../data/memories'
import type { MemorySize } from '../types/memory'
import type { Photo } from '../types/photo'
import MemoryCard from './MemoryCard'

interface GalleryProps {
  photos: Photo[]
  activePhotoId: string | null
  onOpen: (photo: Photo, sourceElement: HTMLElement) => void
}

const sizePattern: MemorySize[] = [
  'big',
  'normal',
  'normal',
  'wide',
  'normal',
  'tall',
  'normal',
  'wide',
  'normal',
  'normal',
  'big',
  'normal',
]

function getColumnCount(width: number) {
  if (width <= 620) return 2
  if (width <= 900) return 3
  return 4
}

const spanishMonths: Record<string, number> = {
  enero: 0,
  febrero: 1,
  marzo: 2,
  abril: 3,
  mayo: 4,
  junio: 5,
  julio: 6,
  agosto: 7,
  septiembre: 8,
  octubre: 9,
  noviembre: 10,
  diciembre: 11,
}

function parseMemoryDate(value: string | undefined) {
  if (!value) return null

  const normalized = value.trim().toLocaleLowerCase('es-ES')
  const numericDate = normalized.match(/^(\d{1,2})[-/]\s?(\d{1,2})[-/]\s?(\d{4})$/)
  if (numericDate) {
    const [, day, month, year] = numericDate
    return Date.UTC(Number(year), Number(month) - 1, Number(day))
  }

  const writtenDate = normalized.match(/^(\d{1,2})\s+de\s+([a-záéíóú]+)\s+de\s+(\d{4})$/)
  if (writtenDate) {
    const [, day, month, year] = writtenDate
    const monthIndex = spanishMonths[month]
    if (monthIndex !== undefined) return Date.UTC(Number(year), monthIndex, Number(day))
  }

  const parsedDate = Date.parse(value)
  return Number.isNaN(parsedDate) ? null : parsedDate
}

function createRows(photos: Photo[], aspectRatios: Record<string, number>, columnCount: number) {
  const rows: Photo[][] = []
  const targetRatioTotal = columnCount * 1.2
  let currentRow: Photo[] = []
  let currentRatioTotal = 0

  for (const photo of photos) {
    const ratio = aspectRatios[photo.id] ?? 1.2
    currentRow.push(photo)
    currentRatioTotal += ratio

    const enoughPhotos = currentRow.length >= columnCount
    const balancedEnough = currentRow.length > 1 && currentRatioTotal >= targetRatioTotal

    if (enoughPhotos || balancedEnough) {
      rows.push(currentRow)
      currentRow = []
      currentRatioTotal = 0
    }
  }

  if (currentRow.length > 0) rows.push(currentRow)
  return rows
}

function Gallery({ photos, activePhotoId, onOpen }: GalleryProps) {
  const [aspectRatios, setAspectRatios] = useState<Record<string, number>>({})
  const [columnCount, setColumnCount] = useState(() => getColumnCount(window.innerWidth))

  const orderedPhotos = useMemo(
    () =>
      photos
        .map((photo, index) => ({ photo, index, date: parseMemoryDate(memoryContent[photo.id]?.date) }))
        .sort((left, right) => {
          if (left.date !== null && right.date !== null && left.date !== right.date) {
            return left.date - right.date
          }
          if (left.date !== null && right.date === null) return -1
          if (left.date === null && right.date !== null) return 1
          return left.index - right.index
        })
        .map(({ photo }) => photo),
    [photos],
  )

  useEffect(() => {
    const handleResize = () => setColumnCount(getColumnCount(window.innerWidth))

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const rows = useMemo(
    () => createRows(orderedPhotos, aspectRatios, columnCount),
    [aspectRatios, columnCount, orderedPhotos],
  )

  const handleAspectRatio = useCallback((id: string, ratio: number) => {
    setAspectRatios((current) => {
      if (current[id] === ratio) return current
      return { ...current, [id]: ratio }
    })
  }, [])

  return (
    <section className="gallery-section" id="recuerdos" aria-labelledby="gallery-title">
      <div className="gallery-section__intro">
        <p className="eyebrow">un álbum sin orden perfecto</p>
        <h2 id="gallery-title">Nuestros recuerdos</h2>
      </div>

      {orderedPhotos.length > 0 ? (
        <div className="gallery-grid">
          {rows.map((row, rowIndex) => (
            <div
              className="gallery-row"
              key={`row-${rowIndex}`}
              style={{
                gridTemplateColumns: row
                  .map((photo) => `${aspectRatios[photo.id] ?? 1.2}fr`)
                  .join(' '),
              }}
            >
              {row.map((photo) => {
                const photoIndex = orderedPhotos.findIndex((item) => item.id === photo.id)
                const memory = memoryContent[photo.id]
                const size = memory?.size ?? sizePattern[photoIndex % sizePattern.length]

                return (
                  <MemoryCard
                  key={photo.id}
                  photo={photo}
                  index={photoIndex}
                  size={size}
                  isActive={activePhotoId === photo.id}
                  onOpen={onOpen}
                    onAspectRatio={handleAspectRatio}
                  />
                )
              })}
            </div>
          ))}
        </div>
      ) : (
        <p className="gallery-empty">Añade fotografías en public/photos para comenzar.</p>
      )}
    </section>
  )
}

export default memo(Gallery)
