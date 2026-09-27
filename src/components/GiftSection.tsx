import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { destinations } from '../data/destinations'
import type { DestinationId, TravelMonth } from '../types/gift'
import DestinationArtwork from './DestinationArtwork'

const travelMonths: TravelMonth[] = ['noviembre', 'diciembre', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre']
const dayOptions = [2, 3, 4, 5, 7]

function GiftSection() {
  const [destinationId, setDestinationId] = useState<DestinationId | null>(null)
  const [exploredId, setExploredId] = useState<DestinationId | null>(null)
  const [activeSpotIndex, setActiveSpotIndex] = useState(0)
  const [month, setMonth] = useState<TravelMonth | ''>('')
  const [days, setDays] = useState<number | null>(null)
  const [companion, setCompanion] = useState<'David' | 'otro' | ''>('')
  const [saved, setSaved] = useState(false)

  const selectedDestination = useMemo(
    () => destinations.find((destination) => destination.id === destinationId),
    [destinationId],
  )
  const exploredDestination = useMemo(
    () => destinations.find((destination) => destination.id === exploredId),
    [exploredId],
  )
  const canSave = Boolean(selectedDestination && month && days && companion === 'David')
  const activeSpot = exploredDestination?.spots[activeSpotIndex] ?? exploredDestination?.spots[0]

  const handleCompanion = (value: 'David' | 'otro') => {
    setCompanion(value)
    if (value === 'David') setSaved(false)
  }

  const handleSave = () => {
    if (!canSave) return
    setSaved(true)
  }

  const handleDestinationSelect = (id: DestinationId) => {
    setDestinationId(id)
    setExploredId(id)
    setActiveSpotIndex(0)
    setSaved(false)
  }

  return (
    <section className="gift-section" id="regalo" aria-labelledby="gift-title">
      <div className="gift-section__intro">
        <p className="eyebrow">el siguiente capítulo</p>
        <h2 id="gift-title">Hay más regalos<br /><em>esperando por ti.</em></h2>
        <p className="gift-section__lead">
          Algunos tardarán unos días en aparecer. Pero este puede elegirse y personalizarse:
          una escapada para nosotros dos.
        </p>
      </div>

      <div className="gift-panel">
        <div className="gift-panel__heading">
          <div>
            <p className="gift-panel__kicker">Regalo 01 · el viaje</p>
            <h3>¿A dónde nos vamos?</h3>
          </div>
          <span className="gift-panel__stamp" aria-hidden="true">✦</span>
        </div>

        <div className="destination-grid" aria-label="Destinos disponibles">
          {destinations.map((destination) => {
            const isSelected = destination.id === destinationId
            const isExplored = destination.id === exploredId

            return (
              <article className={`destination-card${isSelected ? ' destination-card--selected' : ''}`} key={destination.id}>
                <button
                  className="destination-card__select"
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleDestinationSelect(destination.id)}
                >
                  <span className="destination-card__art">
                    <DestinationArtwork destination={destination.id} label={`${destination.name}, ${destination.country}`} />
                  </span>
                  <span className="destination-card__copy">
                    <span className="destination-card__country">{destination.country}</span>
                    <strong>{destination.name}</strong>
                    <span>{destination.eyebrow}</span>
                  </span>
                  <span className="destination-card__radio" aria-hidden="true" />
                </button>
                <button
                  className="destination-card__explore"
                  type="button"
                  aria-expanded={isExplored}
                  onClick={() => {
                    if (isExplored) {
                      setExploredId(null)
                      return
                    }

                    handleDestinationSelect(destination.id)
                  }}
                >
                  {isExplored ? 'Cerrar lugares' : 'Ver lugares'} <span aria-hidden="true">↗</span>
                </button>
              </article>
            )
          })}
        </div>

        {exploredDestination && (
          <motion.div
            className="destination-detail"
            key={exploredDestination.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="destination-detail__hero">
              {activeSpot && (
                <motion.img
                  key={activeSpot.image}
                  className="destination-detail__image"
                  src={activeSpot.image}
                  alt={`${activeSpot.name}, ${exploredDestination.name}`}
                  initial={{ opacity: 0.35, scale: 1.025 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  decoding="async"
                />
              )}
              <div className="destination-detail__hero-copy">
                <p className="eyebrow">{exploredDestination.name} · lugar {activeSpotIndex + 1} de {exploredDestination.spots.length}</p>
                <h4>{activeSpot?.name}</h4>
                <p>{activeSpot?.description}</p>
              </div>
            </div>
            <div className="destination-spots" role="tablist" aria-label={`Lugares para visitar en ${exploredDestination.name}`}>
              {exploredDestination.spots.map((spot, index) => (
                <button
                  className={`destination-spot${index === activeSpotIndex ? ' destination-spot--active' : ''}`}
                  key={spot.name}
                  type="button"
                  role="tab"
                  aria-selected={index === activeSpotIndex}
                  onClick={() => setActiveSpotIndex(index)}
                >
                  <img className="destination-spot__art" src={spot.image} alt={`${spot.name}, ${exploredDestination.name}`} loading="lazy" decoding="async" />
                  <span>
                    <strong>{spot.name}</strong>
                    <span>{spot.description}</span>
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        <div className="gift-form" aria-label="Personaliza el viaje">
          <div className="gift-form__field">
            <label htmlFor="travel-month">¿Qué mes te apetece?</label>
            <select
              id="travel-month"
              value={month}
              onChange={(event) => {
                setMonth(event.target.value as TravelMonth)
                setSaved(false)
              }}
            >
              <option value="">Elegir mes</option>
              {travelMonths.map((travelMonth) => <option key={travelMonth} value={travelMonth}>{travelMonth}</option>)}
            </select>
          </div>

          <fieldset className="gift-form__field gift-form__field--days">
            <legend>¿Cuántos días?</legend>
            <div className="choice-row">
              {dayOptions.map((option) => (
                <button
                  className={days === option ? 'choice-button choice-button--active' : 'choice-button'}
                  type="button"
                  aria-pressed={days === option}
                  key={option}
                  onClick={() => {
                    setDays(option)
                    setSaved(false)
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="gift-form__field">
            <legend>¿Con quién quieres ir?</legend>
            <div className="companion-row">
              <button
                className={companion === 'David' ? 'companion-button companion-button--active' : 'companion-button'}
                type="button"
                aria-pressed={companion === 'David'}
                onClick={() => handleCompanion('David')}
              >
                <span aria-hidden="true">♡</span> David
              </button>
              <button
                className={companion === 'otro' ? 'companion-button companion-button--error' : 'companion-button'}
                type="button"
                aria-pressed={companion === 'otro'}
                onClick={() => handleCompanion('otro')}
              >
                <span aria-hidden="true">＋</span> Otro
              </button>
            </div>
            {companion === 'otro' && (
              <p className="gift-form__error" role="alert">Ese acompañante no está disponible para este regalo. Este viaje es para tú y yo. ♡</p>
            )}
          </fieldset>
        </div>

        <div className="gift-summary" aria-live="polite">
          {saved && selectedDestination && month && days ? (
            <div className="gift-summary__saved">
              <span className="gift-summary__check" aria-hidden="true">✓</span>
              <div>
                <strong>Plan guardado por ahora.</strong>
                <p>{selectedDestination.name} · {month} · {days} {days === 1 ? 'día' : 'días'} · David</p>
              </div>
            </div>
          ) : (
            <>
              <p>{selectedDestination ? `Has elegido ${selectedDestination.name}.` : 'Elige una ciudad para empezar a imaginarlo.'}</p>
              <button className="gift-summary__button" type="button" disabled={!canSave} onClick={handleSave}>
                Guardar mi elección <span aria-hidden="true">→</span>
              </button>
            </>
          )}
        </div>
      </div>

      <p className="gift-section__footnote">Este es solo uno de los regalos. Lo demás llegará cuando tenga que llegar.</p>
    </section>
  )
}

export default GiftSection
