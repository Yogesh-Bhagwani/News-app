'use client';

import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  // Delay rendering until after hydration
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <a onClick={toggleTheme}>
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </a>
  );
}
