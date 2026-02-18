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
- [index.html](file:///Users/kanikabajaj/Desktop/testing/index.html)
- [src/App.jsx](file:///Users/kanikabajaj/Desktop/testing/src/App.jsx)
- [src/pages/About.jsx](file:///Users/kanikabajaj/Desktop/testing/src/pages/About.jsx)
- [src/pages/Home.jsx](file:///Users/kanikabajaj/Desktop/testing/src/pages/Home.jsx)
