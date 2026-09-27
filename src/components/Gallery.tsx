import { memoryContent } from '../data/memories'
import type { MemorySize } from '../types/memory'
import type { Photo } from '../types/photo'
import MemoryCard from './MemoryCard'

interface GalleryProps {
  photos: Photo[]
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

function Gallery({ photos, onOpen }: GalleryProps) {
  return (
    <section className="gallery-section" id="recuerdos" aria-labelledby="gallery-title">
      <div className="gallery-section__intro">
        <p className="eyebrow">un álbum sin orden perfecto</p>
        <h2 id="gallery-title">Nuestros recuerdos</h2>
      </div>

      {photos.length > 0 ? (
        <div className="gallery-grid">
          {photos.map((photo, index) => {
            const memory = memoryContent[photo.id]
            const size = memory?.size ?? sizePattern[index % sizePattern.length]

            return (
              <MemoryCard
                key={photo.id}
                photo={photo}
                index={index}
                size={size}
                onOpen={onOpen}
              />
            )
          })}
        </div>
      ) : (
        <p className="gallery-empty">Añade fotografías en public/photos para comenzar.</p>
      )}
    </section>
  )
}

export default Gallery
