import { useCallback, useRef, useState } from 'react'
import { LayoutGroup } from 'motion/react'
import './App.css'
import Ending from './components/Ending'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import MemoryViewer from './components/MemoryViewer'
import { generatedPhotos } from './data/generatedPhotos'
import { memoryContent } from './data/memories'
import useLockBodyScroll from './hooks/useLockBodyScroll'
import type { Photo } from './types/photo'

export type ViewerStatus = 'closed' | 'open'

function App() {
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null)
  const [viewerStatus, setViewerStatus] = useState<ViewerStatus>('closed')
  const lastFocusedElement = useRef<HTMLElement | null>(null)

  useLockBodyScroll(viewerStatus !== 'closed')

  const openViewer = useCallback((photo: Photo, sourceElement: HTMLElement) => {
    lastFocusedElement.current = sourceElement
    setActivePhoto(photo)
    setViewerStatus('open')
  }, [])

  const closeViewer = useCallback(() => {
    setViewerStatus('closed')
    setActivePhoto(null)
    lastFocusedElement.current?.focus()
    lastFocusedElement.current = null
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

        {activePhoto && viewerStatus === 'open' && (
          <MemoryViewer
            key={activePhoto.id}
            photo={activePhoto}
            content={activeMemory}
            status={viewerStatus}
            onClose={closeViewer}
          />
        )}
      </LayoutGroup>
    </div>
  )
}

export default App
