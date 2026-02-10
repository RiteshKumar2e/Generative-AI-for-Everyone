# CampusGenAI Institutional Platform

A commercial-ready, production-grade Multimodal GenAI SaaS platform for students, clubs, and campus teams.

## Tech Stack
- **Frontend**: React, Three.js, Framer Motion, Tailwind CSS, Zustand, TanStack Query.
- **Backend**: Node.js, Express, MongoDB, JWT, Groq SDK, Gemini SDK.
- **AI Engines**: Groq (Primary), Google Gemini (Fallback/Multimodal).

## Features
- **Ultra-Fast Inference**: Near-instant replies via Groq.
- **Multimodal Creation**: Suite for Text, Code, Image, and Script generation.
- **Low-Code Builder**: Visual assembly of AI workflows.
- **Responsible GenAI**: Automatic attribution and safety scoring.
- **Institutional Admin**: Full control over roles and usage.

## Setup Instructions

### 1. Prerequisite
- Node.js (v18+)
- MongoDB (Running locally or MongoDB Atlas)

### 2. Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update `.env` with your API keys:
   ```env
   GROQ_API_KEY=your_groq_key
   GEMINI_API_KEY=your_gemini_key
   MONGODB_URI=your_mongodb_uri
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Production Architecture
- **AI Abstraction Layer**: Transparent failover from Groq to Gemini ensures zero downtime.
- **Role-Based Access**: Specialized views for Students, Club Leaders, and Institutional Admins.
- **Mesh UI Design**: High-performance visuals using Three.js and glassmorphism.

---
Built for next-generation campus creativity.
