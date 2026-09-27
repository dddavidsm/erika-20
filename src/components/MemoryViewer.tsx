import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { motion } from 'motion/react'
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

const cardEase = [0.22, 1, 0.36, 1] as const

function MemoryViewer({ photo, content, status, onClose }: MemoryViewerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [isFlipped, setIsFlipped] = useState(false)
  const text = content?.text?.trim() ?? ''
  const title = content?.title?.trim() ?? ''
  const date = content?.date?.trim() ?? ''
  const paragraphs = text
    ? text
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
    : []

  useEscapeKey(onClose, status === 'opening' || status === 'open')

  useEffect(() => {
    if (status !== 'open') return undefined

    const timer = window.setTimeout(() => setIsFlipped(true), 420)
    return () => window.clearTimeout(timer)
  }, [status])

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
    <motion.div
      className={`memory-viewer memory-viewer--${status}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.42, ease: cardEase }}
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
        <motion.div
          className="memory-viewer__card"
          layoutId={`memory-card-${photo.id}`}
          layout="position"
          transition={{ layout: { duration: 0.78, ease: cardEase } }}
        >
          <motion.div
            className="memory-viewer__flip-card"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isFlipped && status !== 'closing' ? 180 : 0 }}
            transition={{ duration: 0.78, ease: cardEase }}
          >
            <div className="memory-viewer__face memory-viewer__front" aria-hidden={isFlipped}>
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
          </motion.div>
        </motion.div>

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
    </motion.div>
  )
}

export default MemoryViewer
