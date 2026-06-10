import { useEffect, useState } from 'react'
import { useLeaderboardStore } from '../store/leaderboardStore'
import './Leaderboard.css'

function Leaderboard() {
  const { leaderboard, loading, fetchLeaderboard } = useLeaderboardStore()
  const [timeRange, setTimeRange] = useState('all')

  useEffect(() => {
    fetchLeaderboard(null, timeRange)
  }, [timeRange])

  return (
    <div className="leaderboard-page">
      <div className="container">
        <div className="leaderboard-header">
          <h1>Global Leaderboard</h1>
          <p>Top players worldwide</p>
        </div>

        <div className="time-filter">
          <button
            className={`filter-btn ${timeRange === 'day' ? 'active' : ''}`}
            onClick={() => setTimeRange('day')}
          >
            Today
          </button>
          <button
            className={`filter-btn ${timeRange === 'week' ? 'active' : ''}`}
            onClick={() => setTimeRange('week')}
          >
            This Week
          </button>
          <button
            className={`filter-btn ${timeRange === 'month' ? 'active' : ''}`}
            onClick={() => setTimeRange('month')}
          >
            This Month
          </button>
          <button
            className={`filter-btn ${timeRange === 'all' ? 'active' : ''}`}
            onClick={() => setTimeRange('all')}
          >
            All Time
          </button>
        </div>

        {loading ? (
          <div className="loading">Loading leaderboard...</div>
        ) : (
          <div className="leaderboard-table">
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Player</th>
                  <th>Score</th>
                  <th>Games Played</th>
                  <th>Win Rate</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry, index) => (
                  <tr key={entry.id}>
                    <td className="rank">{index + 1}</td>
                    <td className="player-name">
                      {index < 3 && ['🥇', '🥈', '🥉'][index]}
                      {entry.username}
                    </td>
                    <td className="score">{entry.score}</td>
                    <td>{entry.gamesPlayed}</td>
                    <td>{entry.winRate}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default Leaderboard
