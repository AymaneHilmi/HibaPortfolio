# HibaPortfolio

A modern portfolio website built with React, Vite, and TailwindCSS.

![App Preview](https://github.com/user-attachments/assets/e0bdfec6-bc61-4ced-a413-56b38f63c1f7)

## Features

- ⚡️ **Vite** - Lightning fast build tool and dev server
- ⚛️ **React 19** - Latest version of React
- 🎨 **TailwindCSS v4** - Utility-first CSS framework
- 🔥 **Hot Module Replacement (HMR)** - Instant feedback during development
- 📦 **Optimized Build** - Production-ready build output

## Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/AymaneHilmi/HibaPortfolio.git
   cd HibaPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at [http://localhost:5173](http://localhost:5173)

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Tech Stack

- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool
- **TailwindCSS 4.1.16** - CSS framework
- **ESLint** - Code linting

## Project Structure

```
HibaPortfolio/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, icons, etc.
│   ├── App.jsx      # Main App component
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles with Tailwind imports
├── index.html       # HTML template
├── vite.config.js   # Vite configuration
├── postcss.config.js # PostCSS configuration
└── package.json     # Dependencies and scripts
```

## Customization

This template uses TailwindCSS v4 with CSS-first configuration. To customize your styles:

1. Edit `src/index.css` to add global styles or custom Tailwind directives
2. Use Tailwind utility classes in your components
3. Modify the gradient backgrounds and colors in `src/App.jsx`

## License

This project is open source and available under the MIT License.
