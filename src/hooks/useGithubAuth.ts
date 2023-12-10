// hooks/useGithubAuth.js
import { userAtom } from '@/store/user';
import { supabase } from '@/utils/supabaseClient';
import { useAtom } from 'jotai';
import { usePathname } from 'next/navigation';

const useGithubAuth = () => {
  const pathname = usePathname();
  const [, setUser] = useAtom(userAtom);

  const signInWithGithub = async () => {
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
      const { data, error: userError } = await supabase.auth.getUser();

      if (userError) {
        console.error('Error getting user:', userError.message);
        return false;
      }

      setUser(data.user); // data.user を setUser に渡す
      return true;
    }
  };

  return signInWithGithub;
};

export default useGithubAuth;
