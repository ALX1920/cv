# CV — Alejandro Martínez

Sitio de una sola página con el currículum profesional de Alejandro Martínez.

## Estructura

```
cv/
├── index.html                  # Documento HTML completo (head + body)
├── img/
│   └── perfil.jpeg
├── scripts/
│   └── script.js                # Copiar contacto, compartir CV, año del footer
├── styles/
│   ├── main.css                  # Único archivo a enlazar desde el HTML
│   ├── pallette.css              # Tokens de diseño (colores, radios, transiciones)
│   └── components/
│       ├── layout.css            # Reset, tipografía, layout general
│       ├── buttons.css           # Botones, chips
│       ├── cards.css             # Tarjetas de contenido
│       └── print.css             # Estilos para imprimir / exportar a PDF
└── CNAME
```

`main.css` es el único stylesheet que se enlaza en `index.html`; usa `@import`
para cargar en orden los tokens, el layout base y los componentes. Si en el
futuro el sitio crece, conviene sustituir los `@import` por un bundle
generado con una herramienta como Vite o esbuild para evitar peticiones en
cascada.

## Tecnologías

- HTML5 semántico
- CSS modular con variables (custom properties)
- JavaScript vanilla (Clipboard API, Web Share API)

## Despliegue

El sitio se publica mediante GitHub Pages desde la rama principal
(dominio configurado en `CNAME`).
