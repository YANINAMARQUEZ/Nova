import { formatPrice } from '../utils/formatters'

// CartItem muestra cada producto en el carrito de compra y ofrece un botón para eliminarlo.
export default function CartItem({ item, onRemove }) {
  return (
    <li className="cart-item">
      <div>
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-category">{item.category}</p>
      </div>
      <div className="cart-item-actions">
        <span className="cart-item-price">{formatPrice(item.price)}</span>
        <button type="button" onClick={() => onRemove(item.id)} className="button-secondary small">
          Eliminar
        </button>
      </div>
    </li>
  )
}
