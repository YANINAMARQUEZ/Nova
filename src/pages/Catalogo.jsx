import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../services/api'
import { useEffect, useMemo, useState } from 'react'

// La página de Catálogo carga la lista de productos y permite filtrar por categoría.
export default function Catalogo() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('')

  useEffect(() => {
    setLoading(true)
    fetchProducts(category)
      .then(setProducts)
      .finally(() => setLoading(false))
  }, [category])

  const categoryOptions = useMemo(() => {
    const values = new Set(products.map((product) => product.category))
    return ['Todas', ...values]
  }, [products])

  const filteredProducts = useMemo(() => {
    if (!category || category === 'Todas') {
      return products
    }
    return products.filter((product) => product.category === category)
  }, [products, category])

  return (
    <section>
      <div className="section-header">
        <div>
          <h1>Catálogo</h1>
          <p>Selecciona una categoría para ver productos específicos.</p>
        </div>
        <div className="filter-bar">
          <label className="filter-label" htmlFor="category-select">
            Filtrar por categoría
          </label>
          <select
            id="category-select"
            className="filter-select"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categoryOptions.map((option) => (
              <option key={option} value={option === 'Todas' ? '' : option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      {loading ? (
        <p>Cargando catálogo...</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
