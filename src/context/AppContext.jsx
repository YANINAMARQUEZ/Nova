import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { setAuthToken, loginUser as apiLogin } from '../services/api'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [cart, setCart] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const rawUser = localStorage.getItem('user')
    if (token) {
      setAuthToken(token)
    }
    if (rawUser) {
      try {
        setUser(JSON.parse(rawUser))
      } catch (e) {
        setUser(null)
      }
    }
  }, [])

  const addToCart = (product) => {
    setCart((current) => [...current, product])
  }

  const removeFromCart = (productId) => {
    setCart((current) => current.filter((item) => item.id !== productId))
  }

  const clearCart = () => {
    setCart([])
  }

  // inicia sesión con credenciales, guarda token y usuario en localStorage
  const login = async (credentials) => {
    const data = await apiLogin(credentials)
    if (data?.token) {
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user || null))
      setAuthToken(data.token)
      setUser(data.user || null)
      return data
    }
    return null
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setAuthToken(null)
    setUser(null)
    clearCart()
  }

  const value = useMemo(
    () => ({ cart, user, addToCart, removeFromCart, clearCart, login, logout }),
    [cart, user]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext debe usarse dentro de AppProvider')
  }
  return context
}
