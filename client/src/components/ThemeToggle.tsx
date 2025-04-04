import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../lib/theme-context';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#30D5E8] ${
        theme === 'dark' 
          ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' 
          : 'bg-blue-100 text-[#172b47] hover:bg-blue-200'
      } ${className}`}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
} 