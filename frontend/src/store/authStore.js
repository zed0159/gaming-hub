import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import api from '../utils/api'

/**
 * Authentication Store
 * Manages user authentication state, login, signup, and profile
 */
export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      initializeAuth: async () => {
        try {
          const token = localStorage.getItem('authToken')
          if (token) {
            const response = await api.get('/auth/me')
            set({ user: response.data, isAuthenticated: true })
          }
        } catch (error) {
          localStorage.removeItem('authToken')
          set({ user: null, isAuthenticated: false })
        }
      },

      login: async (email, password) => {
        set({ loading: true, error: null })
        try {
          const response = await api.post('/auth/login', { email, password })
          const { token, user } = response.data
          localStorage.setItem('authToken', token)
          set({ user, isAuthenticated: true, loading: false })
          return user
        } catch (error) {
          const errorMsg = error.response?.data?.message || 'Login failed'
          set({ error: errorMsg, loading: false })
          throw error
        }
      },

      signup: async (userData) => {
        set({ loading: true, error: null })
        try {
          const response = await api.post('/auth/signup', userData)
          const { token, user } = response.data
          localStorage.setItem('authToken', token)
          set({ user, isAuthenticated: true, loading: false })
          return user
        } catch (error) {
          const errorMsg = error.response?.data?.message || 'Signup failed'
          set({ error: errorMsg, loading: false })
          throw error
        }
      },

      logout: () => {
        localStorage.removeItem('authToken')
        set({ user: null, isAuthenticated: false })
      },

      updateProfile: async (updates) => {
        set({ loading: true })
        try {
          const response = await api.put('/auth/profile', updates)
          set({ user: response.data, loading: false })
          return response.data
        } catch (error) {
          set({ error: error.response?.data?.message, loading: false })
          throw error
        }
      },
    }),
    {
      name: 'auth-store',
    }
  )
)
