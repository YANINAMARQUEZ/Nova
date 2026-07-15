import axios from 'axios'
import { products as mockProducts } from '../data/products'

const BASE_URL = import.meta.env.VITE_API_BASE || 'http://localhost:4000'

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export function setAuthToken(token) {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete apiClient.defaults.headers.common['Authorization']
  }
}

// Autenticación
export async function registerUser({ name, email, password }) {
  const { data } = await apiClient.post('/api/auth/register', { name, email, password })
  return data
}

export async function loginUser(credentials) {
  const { data } = await apiClient.post('/api/auth/login', credentials)
  return data // espera { token, user }
}

// Productoos
// Obtiene la lista de productos desde la API del backend y usa datos locales de respaldo cuando es necesario.
export async function fetchProducts(category) {
  const url = category ? `/api/products?category=${encodeURIComponent(category)}` : '/api/products'

  try {
    const { data } = await apiClient.get(url)
    return data
  } catch (error) {
    const fallback = category
      ? mockProducts.filter((product) => product.category === category)
      : mockProducts
    return fallback
  }
}

export async function createProduct(product) {
  const { data } = await apiClient.post('/api/products', product)
  return data
}

export async function updateProduct(id, product) {
  const { data } = await apiClient.put(`/api/products/${id}`, product)
  return data
}

export async function deleteProduct(id) {
  const { data } = await apiClient.delete(`/api/products/${id}`)
  return data
}

// Pedidos
export async function createOrder(order) {
  const { data } = await apiClient.post('/api/orders', order)
  return data
}

export async function getOrders() {
  const { data } = await apiClient.get('/api/orders')
  return data
}

export default apiClient
