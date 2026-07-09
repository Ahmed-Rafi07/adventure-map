import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ProtectedRoute } from './components/ProtectedRoute'
import { ToastViewport } from './components/ToastViewport'
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
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  )
}

export default App
