// hooks/useLogout.ts
import { supabase } from '../utils/supabaseClient';

const useLogout = () => {
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
