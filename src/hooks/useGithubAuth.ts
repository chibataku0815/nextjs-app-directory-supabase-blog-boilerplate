// hooks/useGithubAuth.js
'use client';
import { userAtom } from '@/store/user';
import { Database } from '@/types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useAtom } from 'jotai';
import { usePathname } from 'next/navigation';

const useGithubAuth = () => {
  const pathname = usePathname();
  const [, setUser] = useAtom(userAtom);
  const supabase = createClientComponentClient<Database>();

  const signInWithGithub = async () => {
    console.log('Logging in with GitHub...');
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${location.origin}/auth/callback?next=${pathname}`,
      },
    });

    if (error) {
      console.log('Error logging in:', error.message);
      return false;
    } else {
      console.log('Logged in successfully!');
      return true;
    }
  };

  return signInWithGithub;
};

export default useGithubAuth;
