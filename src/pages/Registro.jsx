import { useState } from 'react'

// La página de Registro recopila información del usuario para crear una cuenta.
export default function Registro() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Registro', { nombre, email, password })
  }

  return (
    <section>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit} className="form-card">
        <label>
          Nombre
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Contraseña
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </section>
  )
}
