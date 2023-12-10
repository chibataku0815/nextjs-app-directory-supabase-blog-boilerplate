// components/SessionProvider.tsx
'use client';
import { userAtom } from '@/store/user';
import { useAtom } from 'jotai';
import { FC, ReactNode, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

interface SessionProviderProps {
  children: ReactNode;
}

const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  const [, setUser] = useAtom(userAtom);

  useEffect(() => {
    readSession();
  }, []);

  const readSession = async () => {
    try {
      const { data: userSession, error: sessionError } =
        await supabase.auth.getSession();

      if (sessionError) {
        throw sessionError;
      }
    } catch (error) {
      console.error('Error reading session:', error);
      // ここでエラーに基づいた追加の処理を行う
    }
  };

  return <>{children}</>;
};

export default SessionProvider;
