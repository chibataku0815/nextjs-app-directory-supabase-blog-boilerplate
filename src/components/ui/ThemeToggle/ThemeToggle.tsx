// src/components/ui/ThemeToggle/ThemeToggle.tsx
'use client';
import { Button } from '@radix-ui/themes';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // コンポーネントがマウントされた後に状態を更新
  useEffect(() => {
    setMounted(true);
  }, []);

  // テーマを切り替える関数
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // SSR中は何もレンダリングしない
  if (!mounted) return null;

  return (
    <Button onClick={toggleTheme}>
      {theme === 'light' ? 'ダークモードへ変更' : 'ライトモードへ変更'}
    </Button>
  );
};

export default ThemeToggle;
