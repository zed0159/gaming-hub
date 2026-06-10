# Gaming Hub - Progressive Web App Gaming Platform

A complete, production-ready PWA gaming platform with React frontend, Node.js backend, Firebase database, AI-driven features, and multiplayer capabilities.

## 🎮 Features

✅ **PWA Support** - Offline gameplay, installable, fast loading  
✅ **Game Library** - 2D (Phaser.js) and 3D (WebGL) game support  
✅ **User System** - Authentication, profiles, achievements  
✅ **Multiplayer** - Real-time chat, leaderboards, friend lists  
✅ **AI Features** - Game recommendations, adaptive difficulty, level generation  
✅ **Admin Dashboard** - Performance monitoring, analytics, content management  
✅ **Gamification** - XP, badges, virtual economy (coins, skins)  
✅ **Cross-platform** - Sync progress across devices  

## 📁 Project Structure

```
gaming-hub/
├── frontend/                 # React PWA application
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/            # Page components
│   │   ├── store/            # Zustand state management
│   │   ├── utils/            # Helper functions
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/                  # Node.js Express API
│   ├── src/
│   │   ├── routes/           # API routes
│   │   ├── controllers/      # Business logic
│   │   ├── models/           # Database models
│   │   ├── middleware/       # Custom middleware
│   │   ├── services/         # External services
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
│
├── .gitignore
├── package.json              # Root workspace config
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn
- Firebase account (free tier)

### Installation

```bash
# Install all dependencies
npm install

# Frontend development
npm run dev:frontend

# Backend development (in another terminal)
npm run dev:backend

# Both together
npm run dev
```

### Build for Production

```bash
npm run build
```

## 🌐 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
vercel --prod  # or netlify deploy --prod
```

### Backend (Render/Railway)
- Connect GitHub repository
- Set environment variables
- Deploy!

### Free Hosting Options
- **Frontend**: Vercel, Netlify, GitHub Pages
- **Backend**: Render, Railway, Heroku
- **Database**: Firebase Firestore (free tier)
- **Storage**: Firebase Storage (free tier)

## 📚 Documentation

See individual README files in frontend/ and backend/ directories.

## 🔐 Environment Variables

Create `.env` files in frontend/ and backend/ directories with required credentials.

## 📝 License

MIT
