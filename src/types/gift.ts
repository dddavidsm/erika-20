export type DestinationId = 'sevilla' | 'paris' | 'roma' | 'viena' | 'londres'

export type TravelMonth =
  | 'enero'
  | 'febrero'
  | 'marzo'
  | 'noviembre'
  | 'diciembre'
  | 'abril'
  | 'mayo'
  | 'junio'
  | 'julio'
  | 'agosto'
  | 'septiembre'
  | 'octubre'

export interface DestinationSpot {
  name: string
  description: string
  image: string
  sourceUrl: string
}

export interface Destination {
  id: DestinationId
  name: string
  country: string
  eyebrow: string
  description: string
  image: string
  sourceUrl: string
  spots: DestinationSpot[]
}
