# Nova E-commerce

Proyecto de tienda en React + Vite con un catálogo profesional de 100 productos y un estilo tecnológico moderno.

## Qué incluye

- Catálogo con `100 productos` generados localmente en `src/data/products.js`
- Estilos profesionales, modernos y oscuros aplicados en `src/style.css`
- Carga de productos desde backend con fallback local si la API no está disponible
- Componentes principales:
  - `src/pages/Catalogo.jsx` para mostrar el catálogo
  - `src/components/ProductCard.jsx` para cada tarjeta de producto
  - `src/context/AppContext.jsx` para el carrito y autenticación local
  - `src/services/api.js` para llamadas a API y fallback a productos locales

## Estructura importante

- `src/data/products.js`: define 100 productos con nombre, categoría, precio, imagen y descripción.
- `src/services/api.js`: usa `axios` para llamadas al backend. Si falla la petición, retorna el catálogo local.
- `src/style.css`: configuración de tema azul oscuro, tarjetas con sombra, botones azules y diseño responsivo.
- `src/components/ProductCard.jsx`: muestra imagen, nombre, descripción y precio de cada producto.
- `src/App.jsx`: rutas principales de la app.

## Cómo ejecutar

1. Abre una terminal en la carpeta `nova`.
2. Instala dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre la URL que muestre Vite, normalmente `http://localhost:5173`.

> Si quieres usar el comando clásico `npm start`, también se agregó el script `start` en `package.json`.

## Scripts disponibles

- `npm run dev`: inicia la app en modo desarrollo
- `npm run build`: construye la app para producción
- `npm run preview`: sirve la versión construida
- `npm start`: alias a `npm run dev`

## Nota sobre backend

El proyecto está preparado para funcionar con un backend en `VITE_API_BASE`, pero si no existe servidor activo la app carga los `100 productos` definidos en local.
