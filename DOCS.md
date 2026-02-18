# Project Documentation: React Vite with About Page

This document provides a comprehensive overview of the project setup, commands used, and implementation details.

## 1. Project Overview
A simple React application built using **Vite**, featuring routing between a Home page and an About page, along with optimized SEO meta tags.

## 2. Tech Stack
- **Framework**: React (using Vite)
- **Routing**: `react-router-dom`
- **Styling**: Vanilla CSS (Vite defaults)

## 3. Step-by-Step Implementation

### Phase 1: Initialization
We initialized the project using the Vite boilerplate for React.
- **Command**: `npm create vite@latest . -- --template react`

### Phase 2: Dependency Setup
Installed the necessary routing library.
- **Command**: `npm install react-router-dom`

### Phase 3: File Structure and Components
Created a structured layout for pages.
- **Folder**: `src/pages`
- **Home Page**: `src/pages/Home.jsx`
  - Simple welcome screen with a link to the About page.
- **About Page**: `src/pages/About.jsx`
  - Contains the text: **"hello i am kanika"**.
  - Includes a "Back to Home" navigation link.

### Phase 4: Routing Configuration
Connected the pages using a client-side router.
- **`src/main.jsx`**: Wrapped the application in `<BrowserRouter>`.
- **`src/App.jsx`**: Defined the routes:
  - `/` → `Home.jsx`
  - `/about` → `About.jsx`

### Phase 5: SEO & Meta Tags
Updated the main HTML entry point to include SEO-friendly metadata.
- **File**: `index.html`
- **Tags added**:
  - `<meta name="description" ...>`: Project description.
  - `<meta name="keywords" ...>`: Relevant tags for search engines.
  - `<meta name="author" content="Kanika">`: Author attribution.
  - `<title>`: Updated to "Kanika's Project".

## 4. How to Run the Project
To start the project locally, follow these steps:

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Run Development Server**:
   ```bash
   npm run dev
   ```
3. **Access the App**:
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 5. File References
- [src/pages/Home.jsx](file:///Users/kanikabajaj/Desktop/testing/src/pages/Home.jsx)

## 6. Advanced SEO with Helmet
To ensure that crawlers (like LinkedIn) can access the meta tags, we integrated `react-helmet-async`.

### Installation
```bash
npm install react-helmet-async --legacy-peer-deps
```

### Configuration
1. **Provider Setup**: Wrapped the app in `HelmetProvider` in `src/main.jsx`.
2. **Dynamic Tags**: Used the `<Helmet>` component in `Home.jsx` and `About.jsx` to define SEO data.

## 7. Server-Side SEO (Crawler Support)
Since crawlers often don't execute JavaScript, we use an Express server to "inject" tags into the HTML before it leaves the server.

### How it works:
- **`server.js`**: An Express server that reads the built `index.html` and uses a helper function `injectMetaTags` to swap out titles and add `<meta>` tags dynamically based on the URL.
- **Path Handled**: Specifically handles `/about` to provide detailed LinkedIn-friendly metadata.

### Deployment/Running:
1. **Build the app**: `npm run build`
2. **Start the crawler-friendly server**: `npm run serve`
3. **Verify**: Use `curl http://localhost:3000/about` to see the tags in the raw source.
