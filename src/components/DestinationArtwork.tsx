import { destinations } from '../data/destinations'
import type { DestinationId } from '../types/gift'

interface DestinationArtworkProps {
  destination: DestinationId
  label: string
}

function DestinationArtwork({ destination, label }: DestinationArtworkProps) {
  const selectedDestination = destinations.find((item) => item.id === destination)

  if (!selectedDestination) return null

  return (
    <img
      className="destination-artwork"
      src={selectedDestination.image}
      alt={label}
      loading="lazy"
      decoding="async"
    />
  )
}

export default DestinationArtwork
