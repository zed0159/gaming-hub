import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import GameLibrary from './pages/GameLibrary'
import GamePlay from './pages/GamePlay'
import Profile from './pages/Profile'
import Leaderboard from './pages/Leaderboard'
import AdminDashboard from './pages/AdminDashboard'
import { useAuthStore } from './store/authStore'
import './App.css'

/**
 * Main App Component
 * Handles routing and authentication state management
 * Implements PWA with offline support and service worker integration
 */
function App() {
  const { initializeAuth, isAuthenticated } = useAuthStore()

  // Initialize authentication on app load
  useEffect(() => {
    initializeAuth()
  }, [])

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navigation />
        <main className="main-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GameLibrary />} />
            <Route path="/game/:id" element={<GamePlay />} />
            <Route path="/leaderboard" element={<Leaderboard />} />

            {/* Protected Routes */}
            {isAuthenticated && (
              <>
                <Route path="/profile" element={<Profile />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </>
            )}
          </Routes>
        </main>
      </div>
      <SpeedInsights />
    </BrowserRouter>
  )
}

export default App
