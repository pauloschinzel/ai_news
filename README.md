# AI Nexus - AI News Site

A modern, curated hub for the latest research and agency applications in AI video generation, world models, and segmentation tools. Built with React 19, Vite, and Tailwind CSS v4.

## Features

*   **Model Showcase:** Detailed profiles for cutting-edge AI models including Kling 2.6, LTX-2, Luma Ray 3, and more.
*   **Video Integration:** Embedded video demos for model capabilities (currently featuring Kling 2.6).
*   **Modern UI:** Dark-themed, responsive design with smooth Framer Motion animations.
*   **Dual Focus:** "Latest Research" for technical depth and "Agency Applications" for practical use cases.

## Tech Stack

*   [React 19](https://react.dev/)
*   [Vite](https://vitejs.dev/)
*   [Tailwind CSS v4](https://tailwindcss.com/)
*   [Framer Motion](https://www.framer.com/motion/)
*   [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

*   Node.js (LTS version recommended)
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd ai-news-site
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Build for production:
    ```bash
    npm run build
    ```

## Project Structure

*   `src/data.js`: The central data source. Modify this file to add new models, update research notes, or add video links.
*   `src/App.jsx`: The main application layout and logic.
*   `public/`: Stores static assets like videos and images.

## adding Content

To add a video for a model:
1.  Place the `.mp4` file in the `public/` directory.
2.  Open `src/data.js`.
3.  Add a `video` property to the corresponding model object:
    ```javascript
    {
      id: 'model-id',
      // ...
      video: '/your-video-file.mp4',
    }
    ```