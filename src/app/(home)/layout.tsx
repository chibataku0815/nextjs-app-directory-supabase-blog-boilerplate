'use client';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import '../theme-config.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <Theme
          asChild
          appearance="dark"
          accentColor="mint"
          radius="large"
          scaling="110%"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
