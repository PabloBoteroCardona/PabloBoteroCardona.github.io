# Historial del proyecto — Portfolio Pablo Botero

## Fecha
Marzo 2026

## URL en producción
https://pabloboterocardona.github.io

## Repositorio GitHub
https://github.com/PabloBoteroCardona/PabloBoteroCardona.github.io

---

## Stack
- HTML + CSS + JavaScript vanilla (sin frameworks)
- Fuentes: Syne (títulos) + DM Sans (cuerpo) — Google Fonts
- JS modular con `type="module"`
- Desplegado en GitHub Pages (rama `main`, raíz del proyecto)

## Estructura de archivos
```
portfolio_pablo/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js          — punto de entrada, importa los demás
│   ├── ui.js            — navbar scroll, hamburger, typing animation
│   ├── animations.js    — IntersectionObserver para animaciones al scroll
│   └── background.js   — canvas de partículas animadas (fondo)
└── historial/
    └── resumen.md
```

---

## Diseño y tema visual
- Tema oscuro con verde neón como color primario
- `--bg: #07130f` (fondo), `--primary: #00ff9c` (verde), `--surface: #0d1f1a`
- Canvas de partículas en el fondo (`background.js`)
- Header sticky con blur al hacer scroll

---

## Secciones de la página (en orden)

1. **Hero** — dos columnas: texto a la izquierda + tarjeta terminal a la derecha
   - Punto verde pulsante "Disponible para trabajar"
   - Nombre con tipografía grande
   - Efecto typing que rota entre roles (`ui.js → initTyping`)
   - Botones: LinkedIn y GitHub
   - Terminal decorativa con comandos `whoami`, `cat stack.txt`, `git status`

2. **Stats bar** — franja con 4 números: `7+ Tecnologías`, `3 Proyectos`, `2 Años formación`, `∞ Ganas de aprender`

3. **Sobre mí** — 2 párrafos + pills de habilidades blandas

4. **Formación** — Timeline vertical con 2 entradas:
   - DAM · Desarrollo de Aplicaciones Multiplataforma (2024–2026)
   - Técnico Sanitario (2018–2024)

5. **Tecnologías** — Grid: Python, Java, SQL, HTML, CSS, JavaScript, Git

6. **Proyectos** — Cards con icono, descripción, tech tags y link a GitHub:
   - Aplicación Escritorio · DAM (Java, JavaFX, MySQL)
   - REST API Python (Python, SQL, REST)

7. **Contacto** — Tarjeta centrada con botón "Enviar email" + links GitHub y LinkedIn

---

## Decisiones técnicas importantes

### Animaciones al scroll
- Las secciones usan `opacity: 0` inicial + clase `.visible` añadida por `IntersectionObserver`
- Para evitar que fallen si JS no carga (ej. `file://`), se usa **progressive enhancement**:
  - Un script inline en `<head>` añade clase `js` al `<html>`
  - El CSS usa `.js section:not(.hero)` para el estado oculto inicial
  - Sin JS → todas las secciones visibles por defecto

### Responsive
- Menú hamburguesa en móvil (<768px) con animación de apertura/cierre
- En <900px: hero pasa a una columna (la terminal se oculta en móvil)
- Stats bar se adapta con `flex-wrap`

### Alineación
- Todo el contenido de las secciones está centrado (`text-align: center` en `.section`)
- Excepciones que mantienen alineación izquierda: skills grid, project cards
- Timeline centrada en la página (`max-width: 620px; margin: auto`) con texto interno centrado

---

## Flujo de actualización
Para cualquier cambio:
```bash
git add .
git commit -m "descripción del cambio"
git push
```
GitHub Pages se actualiza automáticamente en 1-2 minutos.

---

## Pendiente / posibles mejoras futuras
- Añadir tercer proyecto real a la sección de proyectos
- Foto o avatar en la sección hero o "Sobre mí"
- Sección de certificados o cursos si se obtienen
- Formulario de contacto funcional (requiere backend o servicio como Formspree)
- Dominio personalizado (ej. pablobotero.dev)
