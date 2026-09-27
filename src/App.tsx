import { useEffect, useRef, useState } from 'react'
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

  const openViewer = (photo: Photo, sourceElement: HTMLElement) => {
    lastFocusedElement.current = sourceElement
    setActivePhoto(photo)
    setViewerStatus('opening')
  }

  const closeViewer = () => {
    if (viewerStatus === 'opening' || viewerStatus === 'open') {
      setViewerStatus('closing')
    }
  }

  const activeMemory = activePhoto ? memoryContent[activePhoto.id] : undefined

  return (
    <div className="app-shell" id="top">
      <main>
        <Hero />
        <Gallery photos={generatedPhotos} onOpen={openViewer} />
        <Ending />
      </main>

      {activePhoto && viewerStatus !== 'closed' && (
        <MemoryViewer
          photo={activePhoto}
          content={activeMemory}
          status={viewerStatus}
          onClose={closeViewer}
        />
      )}
    </div>
  )
}

export default App
