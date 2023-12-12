// src/components/provider/JotaiProvider.tsx:
'use client';
import { ThemePanel } from '@radix-ui/themes';
import { Provider } from 'jotai';
import { DevTools } from 'jotai-devtools';

type JotaiProviderProps = {
  children: React.ReactNode;
};

export function JotaiProvider(props: JotaiProviderProps) {
  return (
    <Provider>
      <DevTools />
      <ThemePanel />
      {props.children}
    </Provider>
  );
}
