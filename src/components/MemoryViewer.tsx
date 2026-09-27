import { useEffect, useRef } from 'react'
import type { KeyboardEvent } from 'react'
import type { ViewerStatus } from '../App'
import useEscapeKey from '../hooks/useEscapeKey'
import type { MemoryContent } from '../types/memory'
import type { Photo } from '../types/photo'

interface MemoryViewerProps {
  photo: Photo
  content: MemoryContent | undefined
  status: ViewerStatus
  onClose: () => void
}

function MemoryViewer({ photo, content, status, onClose }: MemoryViewerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const text = content?.text?.trim() ?? ''
  const title = content?.title?.trim() ?? ''
  const date = content?.date?.trim() ?? ''
  const paragraphs = text ? text.split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean) : []

  useEscapeKey(onClose, status === 'opening' || status === 'open')

  useEffect(() => {
    closeButtonRef.current?.focus()
  }, [status])

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      closeButtonRef.current?.focus()
    }
  }

  return (
    <div
      className={`memory-viewer memory-viewer--${status}`}
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="memory-viewer__dialog"
        role="dialog"
        aria-modal="true"
        aria-label={title || 'Recuerdo'}
        onKeyDown={handleKeyDown}
      >
        <div className="memory-viewer__card">
          <div className="memory-viewer__face memory-viewer__front" aria-hidden={status === 'open'}>
            <img src={photo.src} alt="" decoding="async" loading="eager" fetchPriority="high" />
          </div>
          <div className="memory-viewer__face memory-viewer__back">
            <div className="memory-viewer__copy">
              {date && <p className="memory-viewer__date">{date}</p>}
              {title && <h2>{title}</h2>}
              {paragraphs.map((paragraph, index) => (
                <p className="memory-viewer__text" key={`${photo.id}-paragraph-${index}`}>
                  {paragraph}
                </p>
              ))}
              {!date && !title && paragraphs.length === 0 && (
                <span className="memory-viewer__empty-mark" aria-label="Sin texto todavía">
                  ♡
                </span>
              )}
            </div>
            <span className="memory-viewer__signature" aria-hidden="true">
              ♡
            </span>
          </div>
        </div>

        <button
          ref={closeButtonRef}
          className="memory-viewer__close"
          type="button"
          aria-label="Cerrar recuerdo"
          onClick={onClose}
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </div>
  )
}

export default MemoryViewer
