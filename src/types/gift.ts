export type DestinationId = 'paris' | 'roma' | 'lisboa' | 'kioto' | 'nueva-york'

export type TravelMonth =
  | 'abril'
  | 'mayo'
  | 'junio'
  | 'julio'
  | 'agosto'
  | 'septiembre'
  | 'octubre'
  | 'noviembre'
  | 'diciembre'

export interface DestinationSpot {
  name: string
  description: string
  symbol: string
}

export interface Destination {
  id: DestinationId
  name: string
  country: string
  eyebrow: string
  description: string
  spots: DestinationSpot[]
}
