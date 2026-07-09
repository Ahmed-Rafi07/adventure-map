export interface UserPayload {
  id: string
  name: string
  email: string
  role: 'student' | 'mentor' | 'admin'
}
