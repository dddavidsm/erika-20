import type { Destination } from '../types/gift'

export const destinations: Destination[] = [
  {
    id: 'sevilla',
    name: 'Sevilla',
    country: 'España',
    eyebrow: 'luz, patios y atardeceres',
    description: 'Una escapada cercana para perdernos entre patios, plazas y noches templadas.',
    image: '/destinations/sevilla-hero.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Seville,_Plaza_de_Espa%C3%B1a_(38625005691)_(edited).jpg',
    spots: [
      { name: 'Plaza de España', description: 'Pasear entre azulejos y remar sin prisa.', image: '/destinations/sevilla-hero.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Seville,_Plaza_de_Espa%C3%B1a_(38625005691)_(edited).jpg' },
      { name: 'La Giralda', description: 'Mirarla aparecer mientras caminamos por el centro.', image: '/destinations/sevilla-giralda.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:La_Giralda,_Seville,_Spain_-_Sep_2009.jpg' },
      { name: 'Real Alcázar', description: 'Patios, jardines y rincones que parecen de película.', image: '/destinations/sevilla-alcazar.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alc%C3%A1zar_Seville_April_2019-11.jpg' },
    ],
  },
  {
    id: 'paris',
    name: 'París',
    country: 'Francia',
    eyebrow: 'cafés, paseos y luces',
    description: 'Una ciudad para brindar por nosotros, caminar junto al Sena y guardar otra historia.',
    image: '/destinations/paris-hero.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Paris_-_The_Eiffel_Tower_in_spring_-_2307.jpg',
    spots: [
      { name: 'Torre Eiffel', description: 'Verla encenderse al caer la tarde.', image: '/destinations/paris-hero.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Paris_-_The_Eiffel_Tower_in_spring_-_2307.jpg' },
      { name: 'El Louvre', description: 'Perdernos entre arte, patios y reflejos nocturnos.', image: '/destinations/paris-louvre.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cour_Napol%C3%A9on_at_night_-_Louvre.jpg' },
      { name: 'El Sena', description: 'Pasear a orillas del río cuando anochezca.', image: '/destinations/paris-sena.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Seine_Pont_Royal_Louvre_Paris.jpg' },
    ],
  },
  {
    id: 'roma',
    name: 'Roma',
    country: 'Italia',
    eyebrow: 'piedra, pasta y atardeceres',
    description: 'Un viaje con sabor a película, plazas con historia y muchos sitios donde parar a querernos.',
    image: '/destinations/roma-hero.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Colosseum,_Rome,_Italy.jpg',
    spots: [
      { name: 'Coliseo', description: 'Recorrer juntos una historia de dos mil años.', image: '/destinations/roma-hero.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Colosseum,_Rome,_Italy.jpg' },
      { name: 'Fontana di Trevi', description: 'Pedir un deseo y volver a Roma.', image: '/destinations/roma-trevi.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Oceanus_(Trevi_fountain).jpg' },
      { name: 'Trastevere', description: 'Cenar sin mapa entre calles y fachadas de colores.', image: '/destinations/roma-trastevere.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Santa_Maria_in_Trastevere_church_in_Rome_(12).jpg' },
    ],
  },
  {
    id: 'viena',
    name: 'Viena',
    country: 'Austria',
    eyebrow: 'palacios, música y Navidad',
    description: 'Una escapada de invierno para pasear abrigados, escuchar música y perdernos en sus mercados.',
    image: '/destinations/viena-hero.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sch%C3%B6nbrunn_Palace_in_Vienna_at_Christmas,_Vienna,_Austria._(16405939248).jpg',
    spots: [
      { name: 'Schönbrunn', description: 'Un palacio iluminado y una Navidad de cuento.', image: '/destinations/viena-hero.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sch%C3%B6nbrunn_Palace_in_Vienna_at_Christmas,_Vienna,_Austria._(16405939248).jpg' },
      { name: 'Catedral de San Esteban', description: 'Descubrir el corazón histórico de Viena.', image: '/destinations/viena-catedral.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:St._Stephen%27s_Cathedral,_Vienna_-_%D5%8D%D5%B8%D6%82%D6%80%D5%A2_%D5%8D%D5%BF%D5%A5%D6%83%D5%A1%D5%B6%D5%B8%D5%BD%D5%AB_%D5%B4%D5%A1%D5%B5%D6%80_%D5%BF%D5%A1%D5%B3%D5%A1%D6%80%2C_%D5%8E%D5%AB%D5%A5%D5%B6%D5%B6%D5%A1.jpg' },
      { name: 'Mercado de Rathausplatz', description: 'Luces, puestos y algo caliente entre las manos.', image: '/destinations/viena-mercado.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rathaus_Wien_Christkindlmarkt_Front_Panorama.jpg' },
    ],
  },
  {
    id: 'londres',
    name: 'Londres',
    country: 'Reino Unido',
    eyebrow: 'luces, paseos y planes de película',
    description: 'Una ciudad preciosa en Navidad para caminar sin parar y descubrir un rincón nuevo en cada esquina.',
    image: '/destinations/londres-hero.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:London_Christmas_Street_Lighting.jpg',
    spots: [
      { name: 'Tower Bridge', description: 'Cruzar el puente cuando empiecen a encenderse las luces.', image: '/destinations/londres-tower-bridge.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tower_Bridge_in_London.JPG' },
      { name: 'Big Ben', description: 'Ver el reloj y sentirnos dentro de una postal londinense.', image: '/destinations/londres-big-ben.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:London%27s_Big_Ben.JPG' },
      { name: 'Covent Garden', description: 'Mercado, cafés y ambiente navideño para perdernos juntos.', image: '/destinations/londres-covent-garden.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Covent_garden.jpg' },
    ],
  },
]
