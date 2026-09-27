import { memo, useCallback, useState } from 'react'
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
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => onOpen(photo, event.currentTarget),
    [onOpen, photo],
  )
  const handleLoad = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      const { naturalHeight, naturalWidth } = event.currentTarget
      if (naturalWidth > 0 && naturalHeight > 0) {
        onAspectRatio(photo.id, naturalWidth / naturalHeight)
      }
    },
    [onAspectRatio, photo.id],
  )

  return (
    <button
      className={`photo-card photo-card--${size}${hasError ? ' photo-card--missing' : ''}`}
      type="button"
      aria-label={`Abrir recuerdo ${index + 1}`}
      onClick={handleClick}
    >
      {!hasError && (
        <img
          src={photo.src}
          alt={`Recuerdo ${index + 1}`}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
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

export default memo(MemoryCard)
