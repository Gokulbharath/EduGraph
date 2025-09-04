# EduGraph - Career Guidance Platform

A modern career guidance platform that helps users discover their ideal career path through AI-powered assessments and personalized roadmaps.

## Features

- **AI Career Quiz**: 8-question assessment to identify strengths and preferences
- **Personalized Roadmaps**: Visual skill trees with progress tracking
- **Multiple Authentication**: Email/password, Google, and GitHub login
- **Career Recommendations**: Data-driven career path suggestions
- **Progress Dashboard**: Track learning milestones and achievements

## Firebase Setup

To enable authentication, you need to configure Firebase:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Enable Authentication and configure providers:
   - Email/Password
   - Google
   - GitHub
4. Get your Firebase config from Project Settings
5. Update `src/config/firebase.ts` with your credentials:

```typescript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

## Development

```bash
npm install
npm run dev
```

## Tech Stack

- React 18 with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Firebase Authentication
- Lucide React for icons
- Vite for development and building