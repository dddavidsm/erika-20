# Felices 20, Èrika

Álbum/collage estático de recuerdos construido con React, TypeScript y Vite.

## Añadir fotos

Copia las fotografías dentro de la carpeta del mes correspondiente:

```text
public/photos/marzo/
public/photos/abril/
public/photos/mayo/
```

El catálogo se escanea de forma recursiva y se regenera automáticamente al ejecutar `npm run dev` o `npm run build`. Se aceptan `.jpg`, `.jpeg`, `.png`, `.webp` y `.avif`, sin importar mayúsculas o minúsculas. No es necesario mover las fotos fuera de sus carpetas.

## Añadir texto

Edita `src/data/memories.ts` usando la ruta completa de la foto:

```ts
export const memoryContent = {
  'abril/IMG_1896.JPEG': {
    title: 'Título',
    date: 'Fecha',
    text: `
      Mi texto.
    `,
    size: 'big',
  },
};
```

El archivo ya contiene una entrada vacía preparada para cada fotografía existente. Solo tienes que sustituir `title`, `date` y `text` en cada entrada. La plantilla no muestra textos de prueba mientras esos campos estén vacíos.

Los tamaños disponibles son `normal`, `wide`, `tall` y `big`. Las fotos sin entrada en este archivo aparecen igualmente y muestran una parte trasera discreta.

Si una entrada apunta a una foto que ya no existe, simplemente se ignora porque las fotografías presentes son la fuente principal del álbum.

## Desarrollo

```bash
npm install
npm run dev
```

Para comprobar una compilación de producción:

```bash
npm run lint
npm run build
```

La configuración PWA mínima está en `public/manifest.webmanifest`. Todavía no se incluyen iconos PNG de 192 y 512 px; el manifest no depende de ellos y esto no bloquea la compilación. Si se añaden más adelante, deben guardarse en `public/icons/icon-192.png` y `public/icons/icon-512.png`.
