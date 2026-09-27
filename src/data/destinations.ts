import type { Destination } from '../types/gift'

export const destinations: Destination[] = [
  {
    id: 'paris',
    name: 'París',
    country: 'Francia',
    eyebrow: 'cafés, paseos y luces',
    description: 'Una ciudad para perdernos sin prisa, brindar por nosotros y guardar otra historia.',
    spots: [
      { name: 'Torre Eiffel', description: 'Verla encenderse al caer la tarde.', symbol: '✦' },
      { name: 'Montmartre', description: 'Calles pequeñas, arte y una foto juntos.', symbol: '◌' },
      { name: 'El Sena', description: 'Pasear a orillas del río cuando anochezca.', symbol: '≈' },
    ],
  },
  {
    id: 'roma',
    name: 'Roma',
    country: 'Italia',
    eyebrow: 'piedra, pasta y atardeceres',
    description: 'Un viaje con sabor a película, plazas con historia y muchos sitios donde parar a querernos.',
    spots: [
      { name: 'Coliseo', description: 'Recorrer juntos una historia de dos mil años.', symbol: '◉' },
      { name: 'Fontana di Trevi', description: 'Pedir un deseo y volver a Roma.', symbol: '∿' },
      { name: 'Trastevere', description: 'Cenar sin mapa entre calles de colores.', symbol: '⌂' },
    ],
  },
  {
    id: 'lisboa',
    name: 'Lisboa',
    country: 'Portugal',
    eyebrow: 'azulejos, tranvías y mar',
    description: 'Una escapada luminosa para subir cuestas, descubrir rincones y acabar mirando el océano.',
    spots: [
      { name: 'Tranvía 28', description: 'Subirnos juntos y dejar que el barrio nos guíe.', symbol: '▣' },
      { name: 'Alfama', description: 'Azulejos, miradores y calles que parecen secretas.', symbol: '◇' },
      { name: 'Belém', description: 'Pasteles, río y una tarde mirando lejos.', symbol: '⊙' },
    ],
  },
  {
    id: 'kioto',
    name: 'Kioto',
    country: 'Japón',
    eyebrow: 'templos, calma y colores',
    description: 'Un lugar para bajar el ritmo, mirar todo con atención y vivir algo que no se parezca a nada.',
    spots: [
      { name: 'Fushimi Inari', description: 'Caminar bajo miles de torii naranjas.', symbol: '⛩' },
      { name: 'Arashiyama', description: 'Perdernos entre bambú y silencio.', symbol: '〰' },
      { name: 'Gion', description: 'Una noche tranquila entre faroles y madera.', symbol: '灯' },
    ],
  },
  {
    id: 'nueva-york',
    name: 'Nueva York',
    country: 'Estados Unidos',
    eyebrow: 'ruido, neón y películas',
    description: 'Una aventura grande para mirar arriba, caminar sin parar y sentir que estamos dentro de una escena.',
    spots: [
      { name: 'Central Park', description: 'Un respiro verde en medio de la ciudad.', symbol: '⌁' },
      { name: 'Brooklyn Bridge', description: 'Cruzarla cuando las luces empiecen a aparecer.', symbol: '∩' },
      { name: 'Manhattan', description: 'Rascacielos, taxis amarillos y nosotros.', symbol: '▥' },
    ],
  },
]
