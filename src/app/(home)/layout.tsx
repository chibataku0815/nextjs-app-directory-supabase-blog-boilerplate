// src/app/%28home%29/layout.tsx
import '@/app/theme-config.css';
import Header from '@/components/layout/Header';
import '@radix-ui/themes/styles.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="root">
      <Header />
      {children}
    </div>
  );
}
