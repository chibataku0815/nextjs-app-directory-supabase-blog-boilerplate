// hooks/useGithubAuth.js
import { usePathname } from 'next/navigation';
import { supabase } from '../utils/supabaseClient';

const useGithubAuth = () => {
  const pathname = usePathname();

  const signInWithGithub = async () => {
    console.log('Signing in with GitHub');
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
