# LevelUp AI

LevelUp AI turns studying into an RPG adventure. Subjects become worlds, chapters become kingdoms, lessons become quests, and quizzes become boss battles.

## Stack

- Frontend: React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, React Router, React Query, Zustand, Axios, React Hook Form, Zod
- Backend: Node.js, Express, TypeScript, MongoDB, Mongoose, JWT, Firebase Auth integration, Google Gemini integration

## Getting Started

1. Copy the environment files:
   - `client/.env.example` to `client/.env`
   - `server/.env.example` to `server/.env`
2. Install dependencies in each workspace:
   - `cd client && npm install`
   - `cd ../server && npm install`
3. Start the backend:
   - `cd server && npm run dev`
4. Start the frontend:
   - `cd client && npm run dev`

## Available Scripts

- `npm run build:client`
- `npm run build:server`
- `npm run build`
- `npm run lint:client`
- `npm run lint:server`

## Project Structure

- `client/` React application
- `server/` Express API
- `docs/` architecture and database notes

## API Notes

The client uses `VITE_API_URL` and falls back to mocked data when the API is unavailable. The backend exposes routes for:

- `/api/health`
- `/api/auth`
- `/api/dashboard`
- `/api/ai`
- `/api/worlds`
- `/api/quests`
- `/api/leaderboard`
- `/api/notes`
- `/api/flashcards`
- `/api/admin`
