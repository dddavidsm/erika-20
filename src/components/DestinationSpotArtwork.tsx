import type { DestinationId } from '../types/gift'

interface DestinationSpotArtworkProps {
  destination: DestinationId
  index: number
  label: string
}

function DestinationSpotArtwork({ destination, index, label }: DestinationSpotArtworkProps) {
  const palettes = {
    paris: ['#e0b59e', '#635a60', '#ead1b7'],
    roma: ['#d99a79', '#765148', '#f0c38e'],
    lisboa: ['#9fcacc', '#d96e56', '#eed6a7'],
    kioto: ['#aec7c5', '#b64d42', '#e7d9be'],
    'nueva-york': ['#35445f', '#e4b477', '#a9bdd2'],
  }[destination]
  const accent = palettes[index % palettes.length]

  return (
    <svg className="destination-spot__art" viewBox="0 0 180 120" role="img" aria-label={label} focusable="false">
      <rect width="180" height="120" fill={accent[0]} />
      <circle cx="145" cy="25" r="18" fill={accent[2]} opacity="0.86" />
      <path d="M0 88c38-15 62-3 91-14 35-14 54-4 89-12v58H0Z" fill={accent[1]} opacity="0.9" />
      {destination === 'paris' && (
        <>
          <path d="m88 27-27 79h10l17-53 19 53h10Z" fill="#393538" />
          <path d="M76 64h25M70 83h38M64 101h49" stroke="#eed8c6" strokeWidth="3" />
          <path d="M88 27V17M82 38h12" stroke="#393538" strokeWidth="3" />
        </>
      )}
      {destination === 'roma' && (
        <>
          <path d="M35 99V52c38-17 72-17 110 0v47Z" fill="#e5bb86" />
          <path d="M35 58c38-17 72-17 110 0M43 73c31-11 63-11 94 0" fill="none" stroke="#9d6651" strokeWidth="3" />
          <path d="M48 99V76a11 11 0 0 1 22 0v23m20 0V76a11 11 0 0 1 22 0v23m20 0V76a11 11 0 0 1 22 0v23" fill="#815449" />
        </>
      )}
      {destination === 'lisboa' && (
        <>
          <path d="M21 57h30v45H21Zm35-16h31v61H56Zm36 23h31v38H92Zm36-29h31v67h-31Z" fill="#f1dfbd" />
          <path d="M21 57h30M56 41h31M92 64h31M128 35h31" stroke="#cf6b55" strokeWidth="5" />
          <path d="M22 80h29m5 0h31m5 17h31m5-24h31" stroke="#58949a" strokeWidth="4" />
        </>
      )}
      {destination === 'kioto' && (
        <>
          <path d="M46 96 90 48l45 48" fill="#eee6d8" />
          <path d="m58 73 32-25 33 25" fill="#d27c6f" />
          <path d="M65 96V73m50 23V73" stroke="#b0443b" strokeWidth="9" />
          <path d="M52 70h76M58 62h64" stroke="#a13d38" strokeWidth="6" />
        </>
      )}
      {destination === 'nueva-york' && (
        <>
          <path d="M23 101V56h19v45m9 0V35h22v66m11 0V64h25v37m12 0V23h24v78m12 0V45h20v56" fill="#171d29" />
          <path d="M92 101V23h24l-12-11-12 11Z" fill="#171d29" />
          <path d="M28 71h9m20-21h13m14 30h17m14-36h9m13 20h12" stroke="#f1c47f" strokeWidth="3" />
        </>
      )}
    </svg>
  )
}

export default DestinationSpotArtwork
