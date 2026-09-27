import { memo, useCallback, useState } from 'react'
import { motion } from 'motion/react'
import type { MemorySize } from '../types/memory'
import type { Photo } from '../types/photo'

interface MemoryCardProps {
  photo: Photo
  index: number
  size: MemorySize
  isActive: boolean
  onOpen: (photo: Photo, sourceElement: HTMLElement) => void
  onAspectRatio: (id: string, ratio: number) => void
}

function MemoryCard({ photo, index, size, isActive, onOpen, onAspectRatio }: MemoryCardProps) {
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
    <motion.button
      className={`photo-card photo-card--${size}${hasError ? ' photo-card--missing' : ''}`}
      type="button"
      layoutId={`memory-card-${photo.id}`}
      layout="position"
      transition={{ layout: { duration: 0.78, ease: [0.22, 1, 0.36, 1] } }}
      style={{ opacity: isActive ? 0 : 1 }}
      tabIndex={isActive ? -1 : 0}
      aria-hidden={isActive}
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
    </motion.button>
  )
}

export default memo(MemoryCard)
