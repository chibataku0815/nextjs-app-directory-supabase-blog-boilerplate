// src/app/layout.tsx
import { JotaiProvider } from '@/components/provider/JotaiProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <JotaiProvider>{children}</JotaiProvider>
      </body>
    </html>
  );
}
