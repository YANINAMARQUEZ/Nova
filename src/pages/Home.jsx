import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../services/api'
import ProductCard from '../components/ProductCard'

// La página de inicio muestra el hero, anuncios y la cuadrícula de productos.
export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Obtiene productos desde la API o usa el catálogo local si el backend no está disponible.
    fetchProducts()
      .then(setProducts)
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="hero-kicker">Bienvenido a NOVA </span>
          <h1>La  mejor tienda tecnológica </h1>
          <p>
            Descubre los productos   productos más  inteligentes y funcionales, con diseño profesional y un
            layout limpio pensado para una experiencia rápida.
          </p>
          <div className="hero-actions">
            <Link to="/catalogo" className="button-primary">
              Ir al catálogo
            </Link>
            <Link to="/checkout" className="button-secondary">
              Ver y pagar compra 
            </Link>
          </div>
        </div>
        <div className="hero-banner">
          <div className="hero-banner-card">
            <strong>Oferta del día:</strong> envío gratis en todos los gadgets de tecnología.
          </div>
          <div className="hero-banner-card">
            <strong>Nueva colección:</strong> accesorios premium para oficina doméstica.
          </div>
          <div className="hero-banner-card">
            <strong>Pago seguro:</strong> compra asegurada .
          </div>
        </div>
      </section>

      <section className="home-products">
        <div className="section-header">
          <h2>Productos destacados</h2>
          <p>Un vistazo rápido a los mejores artículos del catálogo.</p>
        </div>

        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
