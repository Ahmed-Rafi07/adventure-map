import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthStore } from '../store/auth'

export function ProtectedRoute() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}
