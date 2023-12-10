// hooks/useGithubAuth.js
import { createBrowserClient } from '@supabase/ssr';
import { usePathname } from 'next/navigation';

const useGithubAuth = () => {
  const pathname = usePathname();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

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
