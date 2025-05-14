
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add dark mode class if needed based on localStorage or system preference
const setInitialTheme = () => {
  const isDarkMode = 
    localStorage.theme === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  if (isDarkMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
};

setInitialTheme();

createRoot(document.getElementById("root")!).render(<App />);
