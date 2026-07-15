import { useState } from 'react'
import { useAppContext } from '../context/AppContext'

// La página de login permite al usuario enviar email y contraseña para autenticarse.
export default function Login() {
  const { login } = useAppContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await login({ email, password })
      if (!res || !res.token) {
        setError('Credenciales incorrectas')
      }
    } catch (err) {
      setError('No se pudo iniciar sesión')
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form-card">
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Contraseña
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Ingresar</button>
      </form>
    </section>
  )
}
