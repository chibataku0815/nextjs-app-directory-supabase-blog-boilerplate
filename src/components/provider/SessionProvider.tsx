// components/provider/SessionProvider.tsx:
'use client';
import { userAtom } from '@/store/user';
import { Database } from '@/types/supabase';
import { createBrowserClient } from '@supabase/ssr';
import { useAtom } from 'jotai';
import { FC, ReactNode, useEffect } from 'react';

interface SessionProviderProps {
  children: ReactNode;
}

const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  const [, setUser] = useAtom(userAtom);

  const supabase = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    readSession();
  }, []);

  const readSession = async () => {
    console.log('readSession');
    try {
      const { data: userSession, error: sessionError } =
        await supabase.auth.getSession();

      if (sessionError) {
        throw sessionError;
      }

      console.log('userSession', userSession);

      if (userSession.session) {
        const { data } = await supabase
          .from('users')
          .select('*')
          .eq('id', userSession.session?.user.id)
          .single();
        setUser(data);
      }
    } catch (error) {
      console.error('Error reading session:', error);
      // ここでエラーに基づいた追加の処理を行う
    }
  };

  return <>{children}</>;
};

export default SessionProvider;
