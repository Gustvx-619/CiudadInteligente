# Ciudad Inteligente

Página de entrada de la maqueta de ciudad inteligente (100 x 60 cm) de Big Data 701N, Universidad de Cundinamarca.
Al centro está el nombre de la maqueta y alrededor hay cinco botones, uno por grupo. Cada botón abre el dashboard de Power BI de ese grupo.

- Módulos con dashboard: Smart Parking, SmartGreenZone y Smart Waste & Recycling.
- Grupos 4 y 5: pendientes.
- Escenario y datos simulados.

## Cómo agregar un grupo

1. En `app.js`, agregar su enlace de "Publicar en la web" de Power BI dentro de `MODULOS`.
2. En `index.html`, cambiar su tarjeta de `div class="tarjeta pendiente"` a `a href="#clave" class="tarjeta"` y poner su nombre.

Es una página estática (HTML, CSS y JavaScript), no necesita compilarse.
