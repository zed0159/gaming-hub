import { create } from 'zustand'
import api from '../utils/api'

/**
 * Game Store
 * Manages game library state, favorites, and game-related operations
 */
export const useGameStore = create((set) => ({
  games: [],
  favoriteGames: [],
  currentGame: null,
  loading: false,
  error: null,

  fetchGames: async (filters = {}) => {
    set({ loading: true })
    try {
      const response = await api.get('/games', { params: filters })
      set({ games: response.data, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },

  fetchGame: async (gameId) => {
    set({ loading: true })
    try {
      const response = await api.get(`/games/${gameId}`)
      set({ currentGame: response.data, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },

  fetchRecommendations: async () => {
    try {
      const response = await api.get('/games/recommendations')
      return response.data
    } catch (error) {
      set({ error: error.message })
      throw error
    }
  },

  addFavorite: async (gameId) => {
    try {
      await api.post(`/games/${gameId}/favorite`)
      set(state => ({
        favoriteGames: [...state.favoriteGames, gameId]
      }))
    } catch (error) {
      set({ error: error.message })
    }
  },

  removeFavorite: async (gameId) => {
    try {
      await api.delete(`/games/${gameId}/favorite`)
      set(state => ({
        favoriteGames: state.favoriteGames.filter(id => id !== gameId)
      }))
    } catch (error) {
      set({ error: error.message })
    }
  },
}))
