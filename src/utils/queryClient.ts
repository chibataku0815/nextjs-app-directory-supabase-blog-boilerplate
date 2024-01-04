// src/utils/queryClient.ts
import { QueryClient } from '@tanstack/react-query';

// 新しいQueryClientインスタンスを作成
export const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } },
});
