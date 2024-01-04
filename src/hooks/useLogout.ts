// hooks/useLogout.ts
import { Database } from '@/types/supabase';
import { queryClient } from '@/utils/queryClient';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const useLogout = () => {
  const supabase = createClientComponentClient<Database>();

  const logout = async (): Promise<void> => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error);
    } else {
      console.log('Logged out successfully!');
      queryClient.clear(); // クエリキャッシュをクリア
      window.location.reload(); // ページをリロードして状態を完全にリセット
    }
  };

  return logout;
};

export default useLogout;
