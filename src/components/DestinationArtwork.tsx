import type { DestinationId } from '../types/gift'

interface DestinationArtworkProps {
  destination: DestinationId
  label: string
}

function ParisArtwork() {
  return (
    <>
      <rect width="640" height="360" fill="#d8b69c" />
      <circle cx="500" cy="78" r="48" fill="#f6dfb5" opacity="0.85" />
      <path d="M0 246C82 218 140 237 218 228c100-12 145 9 225-8 88-19 134-3 197 12v128H0Z" fill="#6c5b58" />
      <path d="M0 287c105-17 171-19 268-5 100 15 205 4 372-16v94H0Z" fill="#42565a" opacity="0.86" />
      <path d="m320 104-82 224h25l57-149 58 149h25Z" fill="#3d3737" />
      <path d="M285 196h70M270 242h100M248 290h145" stroke="#d7bda8" strokeWidth="8" />
      <path d="M320 104V70M304 132h32M299 161h42" stroke="#3d3737" strokeWidth="7" />
      <path d="M0 326h640" stroke="#e8d6c6" strokeWidth="4" opacity="0.7" />
    </>
  )
}

function RomeArtwork() {
  return (
    <>
      <rect width="640" height="360" fill="#c88968" />
      <circle cx="124" cy="80" r="54" fill="#f6d08c" opacity="0.88" />
      <path d="M0 238c103-31 183-9 281-25 130-20 216 6 359-20v167H0Z" fill="#72534d" />
      <path d="M132 278h376v82H132Z" fill="#d4ae82" />
      <path d="M150 278V139c76-36 264-36 340 0v139Z" fill="#d9b17f" />
      <path d="M150 153c76-35 264-35 340 0M164 178c65-27 247-27 312 0" fill="none" stroke="#8e614d" strokeWidth="8" />
      <path d="M183 278v-78a28 28 0 0 1 56 0v78m59 0v-78a28 28 0 0 1 56 0v78m59 0v-78a28 28 0 0 1 56 0v78" fill="#795044" stroke="#a97a5e" strokeWidth="8" />
      <path d="M0 337h640" stroke="#f1ceb0" strokeWidth="5" opacity="0.7" />
    </>
  )
}

function LisbonArtwork() {
  return (
    <>
      <rect width="640" height="360" fill="#8fbec2" />
      <circle cx="510" cy="76" r="46" fill="#f8dc99" />
      <path d="M0 238 155 202l88 29 112-56 285 66v119H0Z" fill="#3f7377" />
      <path d="M0 280h640v80H0Z" fill="#e1b473" />
      <path d="M70 222h92v96H70Zm104-31h93v127h-93Zm111 45h94v82h-94Zm111-57h99v139h-99Z" fill="#e8d7b6" />
      <path d="M70 222h92m12-31h93m18 45h94m17-57h99" stroke="#cf6e57" strokeWidth="12" />
      <path d="M74 256h88m12 0h93m18 37h94m17-53h99" stroke="#4e8d92" strokeWidth="10" />
      <path d="M258 294h124" stroke="#c9674e" strokeWidth="22" />
      <path d="M276 277v35m88-35v35" stroke="#f3d79e" strokeWidth="6" />
      <path d="M0 340h640" stroke="#f7e4bd" strokeWidth="5" opacity="0.75" />
    </>
  )
}

function KyotoArtwork() {
  return (
    <>
      <rect width="640" height="360" fill="#a9c2c3" />
      <circle cx="500" cy="70" r="46" fill="#f1d6ad" opacity="0.9" />
      <path d="m0 250 156-116 155 111 129-92 200 124v83H0Z" fill="#566f72" />
      <path d="m114 252 205-142 210 142" fill="#e8e1d1" />
      <path d="m176 223 143-113 143 113" fill="#d58d79" />
      <path d="M0 287c111-12 202-7 315 2 116 9 215 8 325-4v75H0Z" fill="#647e63" />
      <path d="M208 252V176h28v76m176 0V176h28v76" stroke="#b2493e" strokeWidth="18" />
      <path d="M184 177h252M202 163h216" stroke="#a43e37" strokeWidth="14" />
      <path d="M0 337h640" stroke="#e9ddc5" strokeWidth="5" opacity="0.7" />
    </>
  )
}

function NewYorkArtwork() {
  return (
    <>
      <rect width="640" height="360" fill="#26334b" />
      <circle cx="512" cy="83" r="50" fill="#eac2a0" opacity="0.8" />
      <path d="M0 282h640v78H0Z" fill="#181d29" />
      <path d="M42 282V174h65v108m17 0V120h66v162m17 0V198h76v84m16 0V88h74v194m18 0V151h56v131m18 0V112h93v170Z" fill="#141923" />
      <path d="M279 282V88h74l-37-34-37 34Z" fill="#141923" />
      <path d="M55 214h38m48-48h41m62 79h50m49-104h26m49 55h39m30-44h57" stroke="#e9b879" strokeWidth="7" strokeDasharray="3 15" />
      <path d="M0 329h640" stroke="#4b6588" strokeWidth="5" />
      <path d="M288 338h64" stroke="#f0c37d" strokeWidth="8" />
    </>
  )
}

function DestinationArtwork({ destination, label }: DestinationArtworkProps) {
  const artwork = {
    paris: <ParisArtwork />,
    roma: <RomeArtwork />,
    lisboa: <LisbonArtwork />,
    kioto: <KyotoArtwork />,
    'nueva-york': <NewYorkArtwork />,
  }[destination]

  return (
    <svg className="destination-artwork" viewBox="0 0 640 360" role="img" aria-label={label} focusable="false">
      {artwork}
    </svg>
  )
}

export default DestinationArtwork
