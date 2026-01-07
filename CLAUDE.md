# AI Nexus - Project Context for Claude

## Quick Reference
- **Live Site:** https://pauloschinzel.github.io/ai_news/
- **GitHub Repo:** https://github.com/pauloschinzel/ai_news (public)
- **Local Path:** `/Users/pauloschinzel/Documents/AI News/ai-news-site`
- **Owner:** pauloschinzel (non-developer, presentation use case)

---

## Project Overview
AI Nexus is a React-based website showcasing the latest AI video generation models and their agency applications. Built for a presentation, it features a dark-themed UI with animated transitions between different AI model pages.

### Tech Stack
- **React 19** with Vite (rolldown-vite)
- **Tailwind CSS v4** (via @tailwindcss/vite plugin)
- **Framer Motion** for animations
- **Lucide React** for icons

---

## Session History

### Session 1 (Jan 7, 2026)
**Accomplished:**
1. Installed GitHub CLI (gh) via Homebrew
2. Authenticated with GitHub as pauloschinzel
3. Initialized git repository
4. Added `base: '/ai_news/'` to vite.config.js for GitHub Pages
5. Created GitHub Actions workflow for automatic deployment (`.github/workflows/deploy.yml`)
6. Pushed to GitHub and made repo public
7. Enabled GitHub Pages - site is LIVE

**Known Issues to Fix:**
- Video on "Kling 2.6 Pro" page is not playing on the live site
  - Video file: `/public/Kling_26_Motion_Control_Example_01.mp4`
  - Referenced in `src/data.js` line 30 as: `video: '/Kling_26_Motion_Control_Example_01.mp4'`
  - Likely cause: Path needs to account for GitHub Pages base path (`/ai_news/`)

---

## Key Files

| File | Purpose |
|------|---------|
| `src/data.js` | All content data (models, descriptions, videos, images) |
| `src/App.jsx` | Main component with sidebar nav and content rendering |
| `vite.config.js` | Vite config with `base: '/ai_news/'` for GitHub Pages |
| `.github/workflows/deploy.yml` | Auto-deploys to GitHub Pages on push |
| `public/` | Static assets (videos, images) |

### Content Structure (in data.js)
Each model object has:
- `id`, `title`, `icon`, `updated`
- `video` (optional) - path to video in public/
- `images` (optional) - array of image paths
- `summary`, `keyPoints[]`, `sources[]`, `applications[]`

---

## Deployment

### Automatic Deployment
Push to `main` branch triggers GitHub Actions workflow that:
1. Builds the project (`npm run build`)
2. Deploys `dist/` folder to GitHub Pages

### Manual Commands
```bash
# Local development
npm run dev

# Build for production
npm run build

# Push changes (triggers auto-deploy)
git add . && git commit -m "message" && git push
```

---

## Models Featured
1. Higgsfield Cinema Studio
2. Kling 2.6 Pro (has video - BROKEN)
3. LTX-2 Trainer
4. Luma Ray 3
5. Meta SAM 2
6. Kandinsky 5.0
7. Veo 3 & Seedance
8. World Models

---

## User Context
- Owner is NOT a developer
- Project is for a presentation (time-sensitive)
- Prefers Claude to handle all technical tasks
- Has Homebrew and gh CLI installed and authenticated
