import { useAppContext } from '../context/AppContext'
import { formatPrice } from '../utils/formatters'

// ProductCard muestra los detalles de cada producto y gestiona el botón de añadir al carrito.
export default function ProductCard({ product }) {
  const { addToCart } = useAppContext()

  return (
    <article className="product-card">
      {product.discount && <span className="discount-badge">-{product.discount}%</span>}
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{formatPrice(product.price)}</p>
      <button type="button" className="button-primary" onClick={() => addToCart(product)}>
        Añadir al carrito
      </button>
    </article>
  )
}
