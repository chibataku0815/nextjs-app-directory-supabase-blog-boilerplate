// src/components/provider/QueryProvider.tsx
import { queryClient } from '@/utils/queryClient'; // 更新されたインポート
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

export function QueryProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
