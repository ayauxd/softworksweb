# Softworksweb - AI Solutions Showcase

This is a single-page application designed to showcase Softworks Trading Company's AI solutions, focusing on autonomous systems and agentic workflows. It features:

*   A modern, responsive design.
*   Information about AI Strategy Consulting, Autonomous Agents, and Workflow Automation.
*   An interactive AI assistant chat interface.
*   Call-to-action sections for scheduling consultations or requesting callbacks.
*   Light/Dark theme toggle.

## Technologies Used

*   **Frontend:** React, TypeScript, Vite, Tailwind CSS, Shadcn UI (implicitly via theme/components), Lucide React Icons
*   **Backend (Minimal/Placeholder):** Express, TypeScript, tsx (for development)
*   **Styling:** Tailwind CSS
*   **Routing:** Wouter
*   **State Management:** React Hooks (useState, useEffect, useRef)

## Project Structure

```
/client          # Frontend React application (Vite)
  /src
    /components  # Reusable UI components
    /hooks       # Custom React hooks
    /lib         # Utility functions, context, etc.
    /pages       # Page components (e.g., Home)
    App.tsx      # Main application component, routing setup
    main.tsx     # Entry point for React app
    index.css    # Tailwind directives and custom CSS
  index.html     # HTML entry point
  vite.config.ts # Vite configuration
  ...
/public          # Static assets (images, fonts)
/server          # Backend Express server (minimal)
  index.ts       # Server entry point
.gitignore
package.json
README.md
tailwind.config.ts
theme.json       # Theme configuration (for Shadcn theme plugin)
tsxconfig.json
...
```

## Setup and Running

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ayauxd/softworksweb.git
    cd softworksweb
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development servers:**
    *   **Backend (optional, minimal functionality):**
        ```bash
        npm run dev 
        ```
        (This typically runs on port 3001)
    *   **Frontend (Vite):**
        ```bash
        npm exec vite
        ```
        (This typically runs on port 5173)

4.  **Open your browser:** Navigate to the frontend development server URL (usually `http://localhost:5173`).

## Building for Production

```bash
npm run build
```

This command will:
1.  Build the frontend React application using Vite.
2.  Build the backend Express server using esbuild.
3.  Place the optimized output in the `dist/` directory.

To run the production build:

```bash
npm start
```
