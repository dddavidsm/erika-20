import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, LayoutGroup } from 'motion/react'
import './App.css'
import Ending from './components/Ending'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import MemoryViewer from './components/MemoryViewer'
import { generatedPhotos } from './data/generatedPhotos'
import { memoryContent } from './data/memories'
import useLockBodyScroll from './hooks/useLockBodyScroll'
import type { Photo } from './types/photo'

export type ViewerStatus = 'closed' | 'opening' | 'open' | 'closing'

function App() {
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null)
  const [viewerStatus, setViewerStatus] = useState<ViewerStatus>('closed')
  const lastFocusedElement = useRef<HTMLElement | null>(null)

  useLockBodyScroll(viewerStatus !== 'closed')

  useEffect(() => {
    if (viewerStatus !== 'opening') return undefined

    const timer = window.setTimeout(() => {
      setViewerStatus('open')
    }, 120)

    return () => window.clearTimeout(timer)
  }, [viewerStatus])

  useEffect(() => {
    if (viewerStatus !== 'closing') return undefined

    const timer = window.setTimeout(() => {
      setViewerStatus('closed')
      setActivePhoto(null)
      lastFocusedElement.current?.focus()
      lastFocusedElement.current = null
    }, 820)

    return () => window.clearTimeout(timer)
  }, [viewerStatus])

  const openViewer = useCallback((photo: Photo, sourceElement: HTMLElement) => {
    lastFocusedElement.current = sourceElement
    setActivePhoto(photo)
    setViewerStatus('opening')
  }, [])

  const closeViewer = useCallback(() => {
    setViewerStatus((currentStatus) => {
      if (currentStatus === 'opening' || currentStatus === 'open') return 'closing'
      return currentStatus
    })
  }, [])

  const activeMemory = activePhoto ? memoryContent[activePhoto.id] : undefined

  return (
    <div className="app-shell" id="top">
      <LayoutGroup>
        <main>
          <Hero />
          <Gallery
            photos={generatedPhotos}
            activePhotoId={activePhoto?.id ?? null}
            onOpen={openViewer}
          />
          <Ending />
        </main>

        <AnimatePresence initial={false}>
          {activePhoto && viewerStatus !== 'closed' && (
            <MemoryViewer
              key={activePhoto.id}
              photo={activePhoto}
              content={activeMemory}
              status={viewerStatus}
              onClose={closeViewer}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  )
}

export default App
