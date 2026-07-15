// Ayudante para formatear números como moneda en la configuración regional española.
export function formatPrice(amount) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount)
}
