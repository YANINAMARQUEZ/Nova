// Datos del catálogo de productos usados como respaldo cuando la API no está disponible.
const categories = ['Tecnología', 'Hogar', 'Moda', 'Deporte', 'Salud']
const baseNames = [
  'Auriculares',
  'Smartwatch',
  'Altavoz',
  'Teclado',
  'Mouse',
  'Mochila',
  'Lámpara',
  'Cafetera',
  'Silla',
  'Manta',
  'Zapatillas',
  'Sudadera',
  'Gafas',
  'Paraguas',
  'Termo',
  'Tablet',
  'Cámara',
  'Pulsera',
  'Set de yoga'
]
const adjectives = ['Pro', 'Neo', 'Plus', 'Max', 'Smart', 'Urban', 'Fit', 'Wave', 'Prime', 'Elite']

export const products = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1
  const base = baseNames[index % baseNames.length]
  const adjective = adjectives[index % adjectives.length]
  const category = categories[index % categories.length]
  const price = Number((24.99 + ((index * 3 + 7) % 90)).toFixed(2))
  const discount = [10, 15, 20, 25].includes(id % 10) ? (id % 10) * 2 + 6 : null

  const imageQuery = encodeURIComponent(`${base} ${category} technology`)

  return {
    id,
    name: `${base} ${adjective}`,
    category,
    price,
    discount,
    image: `https://source.unsplash.com/featured/400x300?${imageQuery}`,
    description: `Producto ${id} de categoría ${category} con diseño profesional y acabados premium.`,
  }
})
