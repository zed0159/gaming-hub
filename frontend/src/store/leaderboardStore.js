import { create } from 'zustand'

export const useLeaderboardStore = create((set) => ({
  leaderboard: [],
  loading: false,
  fetchLeaderboard: async (gameId, timeRange) => {
    set({ loading: true })
    // Stub implementation
    set({ leaderboard: [], loading: false })
  },
}))
