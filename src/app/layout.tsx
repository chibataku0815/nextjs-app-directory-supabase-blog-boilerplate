// src/app/layout.tsx
import SessionProvider from '@/components/provider/SessionProvider';
import { Provider } from 'jotai';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <SessionProvider>{children}</SessionProvider>
    </Provider>
  );
}
