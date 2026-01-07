# AI Nexus - AI News Site Project

## Project Overview
This project, "AI Nexus," is a modern React-based website designed to showcase the latest research and agency applications for various cutting-edge AI models. It serves as a curated hub for information on video generation, world models, and segmentation tools.

**Key Features:**
*   **Model Showcase:** Detailed profiles for 7 distinct AI models (Kling 2.6, LTX-2, Luma Ray 3, Meta SAM 2, Kandinsky 5.0, Veo 3 & Seedance, World Models).
*   **Video Integration:** Support for embedded video demos (currently implemented for Kling 2.6).
*   **Modern UI/UX:** A dark-themed, responsive interface built with Tailwind CSS v4 and Framer Motion for smooth animations.
*   **Tabbed Navigation:** Seamless switching between models using a sidebar (desktop) or adaptive layout.
*   **Dual Content Focus:** Each model page features a "Latest Research" section and a practical "Agency Applications" section.

## Technical Stack
*   **Framework:** React 19
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS v4 (using the `@tailwindcss/vite` plugin)
*   **Animations:** Framer Motion
*   **Icons:** Lucide React
*   **Language:** JavaScript (ES Modules)

## Project Structure
```
ai-news-site/
├── public/              # Static assets (favicons, videos, etc.)
│   ├── Kling_26...mp4   # Example video asset
│   └── vite.svg
├── src/
│   ├── assets/          # Project-specific assets (e.g., react.svg)
│   ├── App.css          # Global styles (minimal, mostly Tailwind)
│   ├── App.jsx          # Main application component (Layout & Logic)
│   ├── data.js          # Static data source for all AI models
│   ├── index.css        # Tailwind CSS entry point (@import "tailwindcss";)
│   └── main.jsx         # Application entry point
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration (React + Tailwind plugins)
└── .gitignore           # Git ignore rules
```

## Key Files & Logic

*   **`src/data.js`**: This is the core data file. It exports an array of `models` objects. Each object contains:
    *   `id`: Unique identifier (used for state).
    *   `title`, `icon`: Display properties.
    *   `video`: (Optional) String path to a video file in the `public/` folder (e.g., `"/video.mp4"`).
    *   `updated`: Last update timestamp.
    *   `summary`: High-level overview.
    *   `keyPoints`: Array of bullet points for research highlights.
    *   `sources`: Array of URLs for further reading.
    *   `applications`: Array of objects (`{title, desc}`) for the agency applications section.
    *   *Handover Note:* To update content, simply modify this file. The UI will render changes automatically.

*   **`src/App.jsx`**: The main layout component.
    *   **State:** Uses `useState` to track the `activeId` (currently selected model).
    *   **Sidebar:** Maps through the `models` array to create navigation buttons. Uses Framer Motion's `layoutId` for the active tab indicator.
    *   **Main Content:** Uses `AnimatePresence` and `motion.div` to animate content transitions.
        *   **Video Rendering:** Checks if `activeModel.video` exists. If so, renders a responsive HTML5 `<video>` player below the header.
        *   **Details:** Renders research key points and agency applications.

*   **`vite.config.js`**:
    *   Configured with `@vitejs/plugin-react` and `@tailwindcss/vite`.
    *   *Note:* Tailwind v4 is used, so no `postcss.config.js` or `tailwind.config.js` content array is needed in the traditional sense; the Vite plugin handles JIT generation.

*   **`src/index.css`**:
    *   Contains only `@import "tailwindcss";`, which is standard for Tailwind v4.

## Setup & Development

1.  **Installation:**
    ```bash
    cd ai-news-site
    npm install
    ```

2.  **Development Server:**
    ```bash
    npm run dev
    ```
    This starts the local development server (typically at `http://localhost:5173`).

3.  **Production Build:**
    ```bash
    npm run build
    ```
    This compiles the application into the `dist/` directory.

## Current Status & Handover
*   **Status:** The project is fully initialized and functional. The UI is implemented according to the design requirements (dark mode, sidebar, animations).
*   **Recent Updates:**
    *   Added video playback capability.
    *   Integrated demo video for "Kling 2.6 Pro".
*   **Content:** All 7 markdown notes from the parent directory have been successfully parsed and structured into `src/data.js`.
*   **Styling:** Tailwind v4 is correctly configured. The build process (`npm run build`) runs without errors.
*   **Next Steps:**
    *   Deploy the `dist/` folder to a static host (e.g., Vercel, NetkB, GitHub Pages).
    *   Update `src/data.js` as new AI research becomes available.
    *   Add videos for other models if available by placing them in `public/` and updating `src/data.js`.