import axios from 'axios'

export const login = async (credentials) => {
  return axios.post('/api/auth/token', credentials)
}

export const getProtectedData = async (token) => {
  return axios.get('/api/protected', {
    headers: { Authorization: `Bearer ${token}` }
  })
}
