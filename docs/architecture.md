# Architecture

```mermaid
flowchart LR
  subgraph Client[React Client]
    A[Auth Page]
    B[Dashboard]
    C[Adventure Map]
    D[AI Mentor]
    E[Leaderboard]
  end

  subgraph API[Express API]
    F[Auth Routes]
    G[Dashboard Routes]
    H[Worlds / Quests]
    I[AI Routes]
    J[Notes / Flashcards]
    K[Admin Routes]
  end

  subgraph Data[Data Layer]
    L[(MongoDB)]
    M[Firebase Auth]
    N[Firebase Storage]
    O[Gemini API]
  end

  A --> F
  B --> G
  C --> H
  D --> I
  E --> G
  J --> L
  K --> L
  F --> M
  I --> O
  K --> N
  G --> L
  H --> L
```

## Runtime Shape

- The client is a Vite SPA with protected routes and a shared shell.
- The backend is a layered Express app with routes, controllers, services, repositories, and models.
- MongoDB is the system of record, with a memory server fallback for local development when `MONGO_URI` is not set.
- Gemini is used for the mentor flow when an API key exists, with a deterministic fallback when it does not.
