// components/provider/SessionProvider.tsx:
'use client';
import { userAtom } from '@/store/user';
import { Database } from '@/types/supabase';
import { createBrowserClient } from '@supabase/ssr';
import { useAtom } from 'jotai';
import { FC, ReactNode, useCallback, useEffect } from 'react';

type SessionProviderProps = {
  children: ReactNode;
};

const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  const [user, setUser] = useAtom(userAtom);

  const supabase = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const readSession = useCallback(async () => {
    try {
      const { data: userSession, error: sessionError } =
        await supabase.auth.getSession();

      if (sessionError) {
        throw sessionError;
      }

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
  }, [supabase, setUser]); // supabaseとsetUserを依存関係に含める

  useEffect(() => {
    readSession();
  }, [readSession]); // 依存配列にreadSessionを含める

  return <>{children}</>;
};

export default SessionProvider;
