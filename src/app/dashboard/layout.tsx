// src/app/%28home%29/layout.tsx
import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="root">
      <Header />
      {children}
    </div>
  );
}
