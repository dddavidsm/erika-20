import { destinations } from '../data/destinations'
import type { DestinationId } from '../types/gift'
import { assetUrl } from '../utils/assetUrl'

interface DestinationArtworkProps {
  destination: DestinationId
  label: string
}

function DestinationArtwork({ destination, label }: DestinationArtworkProps) {
  const selectedDestination = destinations.find((item) => item.id === destination)

  if (!selectedDestination) return null

  if (selectedDestination.id === 'otro') {
    return (
      <span className="destination-artwork destination-artwork--other" role="img" aria-label={label}>
        <span>Otro</span>
        <small>Escríbelo tú</small>
      </span>
    )
  }

  return (
    <img
      className="destination-artwork"
      src={assetUrl(selectedDestination.image)}
      alt={label}
      loading="lazy"
      decoding="async"
    />
  )
}

export default DestinationArtwork
