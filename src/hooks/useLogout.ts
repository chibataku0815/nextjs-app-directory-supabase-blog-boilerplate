// hooks/useLogout.ts
import { Database } from '@/types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const useLogout = () => {
  const supabase = createClientComponentClient<Database>();
  const logout = async (): Promise<void> => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error);
    } else {
    }
  };

  return logout;
};

export default useLogout;
