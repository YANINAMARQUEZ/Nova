import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

// Navbar contiene la navegación principal y el contador del carrito.
export default function Navbar() {
  const { cart, user, logout } = useAppContext()

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/catalogo">Catálogo</Link>
      <Link to="/checkout">Checkout ({cart.length})</Link>
      {user ? (
        <button type="button" onClick={logout} className="nav-button">
          Salir
        </button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/registro">Registro</Link>
        </>
      )}
      <Link to="/admin">Admin</Link>
    </nav>
  )
}
