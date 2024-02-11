// src/components/provider/JotaiProvider.tsx:
'use client';
import '@/styles/theme-config.css';
import { queryClient } from '@/utils/queryClient';
import { config } from '@fortawesome/fontawesome-svg-core'; // 👈
import '@fortawesome/fontawesome-svg-core/styles.css'; // 👈
import { Theme } from '@radix-ui/themes';
import { Session } from '@supabase/supabase-js';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'jotai';
import { DevTools } from 'jotai-devtools';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/navigation';
config.autoAddCss = false; //

type JotaiProviderProps = {
  children: React.ReactNode;
  serverSession: Session | null;
};

export function JotaiProvider(props: JotaiProviderProps) {
  const router = useRouter();
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <ThemeProvider attribute="class">
          {/* 開発環境のみDevToolsを表示する */}
          {process.env.NODE_ENV === 'development' && <DevTools />}
          <Theme>{children}</Theme>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}
