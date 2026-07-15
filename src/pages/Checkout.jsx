import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { formatPrice } from '../utils/formatters'
import CartItem from '../components/CartItem'

// La página de checkout muestra el carrito del usuario, el monto total y el flujo de pago simulado.
export default function Checkout() {
  const { cart, clearCart, removeFromCart } = useAppContext()
  const [paymentStatus, setPaymentStatus] = useState(null)
  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0)

  const handlePay = () => {
    setPaymentStatus('Procesando pago...')
    setTimeout(() => {
      setPaymentStatus('Pago simulado completado. ¡Gracias por tu compra!')
      clearCart()
    }, 1200)
  }

  return (
    <section className="checkout-panel">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <>
          <p>No hay productos en el carrito.</p>
          {paymentStatus && <div className="status-banner success">{paymentStatus}</div>}
        </>
      ) : (
        <>
          <ul className="checkout-list">
            {cart.map((item) => (
              <CartItem key={`${item.id}-${item.name}`} item={item} onRemove={removeFromCart} />
            ))}
          </ul>
          <div className="checkout-summary">
            <div>
              <p className="summary-label">Total a pagar</p>
              <p className="summary-value">{formatPrice(total)}</p>
            </div>
            <div className="checkout-actions">
              <button type="button" className="button-secondary" onClick={clearCart}>
                Vaciar carrito
              </button>
              <button type="button" className="button-primary" onClick={handlePay}>
                Pagar simuladamente
              </button>
            </div>
          </div>
          {paymentStatus && <div className="status-banner success">{paymentStatus}</div>}
        </>
      )}
    </section>
  )
}
