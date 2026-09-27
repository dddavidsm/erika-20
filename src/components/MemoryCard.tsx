import { useState } from 'react'
import type { MemorySize } from '../types/memory'
import type { Photo } from '../types/photo'

interface MemoryCardProps {
  photo: Photo
  index: number
  size: MemorySize
  onOpen: (photo: Photo, sourceElement: HTMLElement) => void
  onAspectRatio: (id: string, ratio: number) => void
}

function MemoryCard({ photo, index, size, onOpen, onAspectRatio }: MemoryCardProps) {
  const [hasError, setHasError] = useState(false)

  return (
    <button
      className={`photo-card photo-card--${size}${hasError ? ' photo-card--missing' : ''}`}
      type="button"
      aria-label={`Abrir recuerdo ${index + 1}`}
      onClick={(event) => onOpen(photo, event.currentTarget)}
    >
      {!hasError && (
        <img
          src={photo.src}
          alt={`Recuerdo ${index + 1}`}
          loading="lazy"
          decoding="async"
          onLoad={(event) => {
            const { naturalHeight, naturalWidth } = event.currentTarget
            if (naturalWidth > 0 && naturalHeight > 0) {
              onAspectRatio(photo.id, naturalWidth / naturalHeight)
            }
          }}
          onError={() => setHasError(true)}
        />
      )}
      <span className="photo-card__veil" aria-hidden="true" />
      <span className="photo-card__prompt" aria-hidden="true">
        Ver recuerdo
      </span>
    </button>
  )
}

export default MemoryCard
