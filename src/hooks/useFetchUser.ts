// hooks/useFetchUser.ts
import { createClient } from '@/utils/supabaseClient';
import { useQuery } from '@tanstack/react-query';

export const useFetchUser = () => {
  const supabase = createClient();

  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data: userSession } = await supabase.auth.getSession();
      const { session } = userSession;
      if (session) {
        const { data: user } = await supabase
          .from('users')
          .select('*')
          .eq('id', session?.user.id)
          .single();
        return user;
      }
      return null;
    },
  });
};
