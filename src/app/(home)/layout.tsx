// src/app/%28home%29/layout.tsx
import '@/app/theme-config.css';
import Header from '@/components/layout/Header';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <Theme asChild appearance="dark" accentColor="mint" radius="large">
          <div id="root">
            <Header />
            {children}
          </div>
        </Theme>
      </body>
    </html>
  );
}
