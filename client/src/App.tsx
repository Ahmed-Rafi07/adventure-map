import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ProtectedRoute } from './components/ProtectedRoute'
import { ToastViewport } from './components/ToastViewport'
import { SplashLoader } from './components/SplashLoader'
import { AdminPage } from './pages/AdminPage'
import { AdventureMapPage } from './pages/AdventureMapPage'
import { AiMentorPage } from './pages/AiMentorPage'
import { AuthPage } from './pages/AuthPage'
import { DashboardPage } from './pages/DashboardPage'
import { InventoryPage } from './pages/InventoryPage'
import { LeaderboardPage } from './pages/LeaderboardPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProfilePage } from './pages/ProfilePage'
import { QuizBattlePage } from './pages/QuizBattlePage'
import { SettingsPage } from './pages/SettingsPage'
import { SubjectsPage } from './pages/SubjectsPage'

function App() {
  const [isBooting, setIsBooting] = useState(true)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsBooting(false)
    }, 3000)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    if (isBooting) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isBooting])

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-950 text-slate-50">
        <AnimatePresence mode="wait">
          {isBooting ? <SplashLoader key="splash-loader" /> : null}
        </AnimatePresence>

        <motion.div
          animate={{ opacity: isBooting ? 0 : 1, y: isBooting ? 12 : 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<AppShell />}>
                <Route index element={<DashboardPage />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="map" element={<AdventureMapPage />} />
                <Route path="subjects" element={<SubjectsPage />} />
                <Route path="mentor" element={<AiMentorPage />} />
                <Route path="quiz/:questId" element={<QuizBattlePage />} />
                <Route path="leaderboard" element={<LeaderboardPage />} />
                <Route path="inventory" element={<InventoryPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="admin" element={<AdminPage />} />
              </Route>
            </Route>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ToastViewport />
        </motion.div>
      </div>
    </ErrorBoundary>
  )
}

export default App
