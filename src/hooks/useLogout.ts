// hooks/useLogout.ts
import { userAtom } from '@/store/user';
import { Database } from '@/types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useAtom } from 'jotai';

const useLogout = () => {
  const [, setUser] = useAtom(userAtom);
  const supabase = createClientComponentClient<Database>();

  const logout = async (): Promise<void> => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error);
    } else {
      console.log('Logged out successfully!');
      setUser(null);
      // ログアウト成功後にページをリロード
      window.location.reload();
    }
  };

  return logout;
};

export default useLogout;
