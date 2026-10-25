# Samuel Juárez — Portfolio & Vibe Coding Showcase

Sitio web personal y portafolio público de **Samuel Juárez (@iamsamy99-bit)**, desarrollado bajo los principios de **Apple Design (WWDC Fluid Interfaces & Translucent Materials)** y **UI/UX Pro Max (OLED Dark Mode, WCAG AAA, Anti-Slop)**.

---

## Características de Diseño & Rendimiento

- **Arquitectura Double-Bezel:** Tarjetas de componentes concéntricos con relieve sutil y bordes de alta definición.
- **Translucent Chrome (Apple HIG):** Barra de navegación flotante estilo isla con `backdrop-filter: blur(24px) saturate(190%)`.
- **Respuesta Háptica Inmediata:** Transiciones con curvas de resorte críticamente amortiguadas (`cubic-bezier(0.16, 1, 0.3, 1)`) y feedback instantáneo en `:active`.
- **Filtro de Proyectos en Tiempo Real:** Segmentación por FinTech, Agentes IA, Sistemas/Linux y PWAs.
- **Accesibilidad Completa:**
  - Contraste WCAG AAA.
  - Áreas táctiles mínimas de 44×44px.
  - Soporte completo para `prefers-reduced-motion` y `prefers-reduced-transparency`.
  - Iconografía 100% SVG (cero emojis en controles de UI).
- **Contacto Exclusivo & Minimalista:** Enlaces directos a [GitHub (@iamsamy99-bit)](https://github.com/iamsamy99-bit) y [LinkedIn](https://www.linkedin.com/in/samueljuarezg99/).

---

## Ejecución Local

Para probarlo localmente:

```bash
cd iamsamy99-bit.github.io
python3 -m http.server 8080
```

Abre en tu navegador:  
👉 `http://localhost:8080`

---

## Publicación en GitHub Pages

Para publicar como sitio raíz oficial en GitHub:

```bash
git init
git add .
git commit -m "feat: initial release of personal portfolio & vibe coding showcase"
gh repo create iamsamy99-bit.github.io --public --source=. --remote=origin --push
```

Tu portafolio estará inmediatamente disponible en:  
👉 **`https://iamsamy99-bit.github.io/`**
