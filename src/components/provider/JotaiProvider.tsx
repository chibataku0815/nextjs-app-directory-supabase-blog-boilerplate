// src/components/provider/JotaiProvider.tsx:
'use client';
import { Theme } from '@radix-ui/themes';
import { Provider } from 'jotai';
import { DevTools } from 'jotai-devtools';
import SessionProvider from './SessionProvider';

type JotaiProviderProps = {
  children: React.ReactNode;
};

export function JotaiProvider(props: JotaiProviderProps) {
  return (
    <Provider>
      <DevTools />
      <SessionProvider>
        <Theme asChild appearance="dark" accentColor="mint" radius="large">
          {props.children}
        </Theme>
      </SessionProvider>
    </Provider>
  );
}
