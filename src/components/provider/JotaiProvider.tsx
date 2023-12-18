// src/components/provider/JotaiProvider.tsx:
'use client';
import '@/app/theme-config.css';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { Provider } from 'jotai';
import { DevTools } from 'jotai-devtools';
import { ThemeProvider } from 'next-themes';
import SessionProvider from './SessionProvider';

type JotaiProviderProps = {
  children: React.ReactNode;
};

export function JotaiProvider(props: JotaiProviderProps) {
  return (
    <Provider>
      <ThemeProvider attribute="class">
        <DevTools />
        <SessionProvider>
          <Theme
            accentColor="mint"
            grayColor="sand"
            radius="large"
            scaling="100%"
            panelBackground="solid"
          >
            {props.children}
          </Theme>
        </SessionProvider>
      </ThemeProvider>
    </Provider>
  );
}
