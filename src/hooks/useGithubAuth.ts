// hooks/useGithubAuth.js
'use client';
import { userAtom } from '@/store/user';
import { CustomUser } from '@/types/customUser';
import { Database } from '@/types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useAtom } from 'jotai';
import { usePathname } from 'next/navigation';

const useGithubAuth = () => {
  const pathname = usePathname();
  const [, setUser] = useAtom(userAtom);
  const supabase = createClientComponentClient<Database>();

  const signInWithGithub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${location.origin}/auth/callback?next=${pathname}`,
      },
    });

    const { data, error: userError } = await supabase.auth.getUser();

    if (userError) {
      console.log('Error getting user:', userError.message);
      return false;
    } else {
      // CustomUser型に合わせてデータを変換
      const customUserData: CustomUser = {
        created_at: data.user.created_at,
        display_name: data.user.user_metadata.full_name, // または他の適切なプロパティ
        email: data.user.email ?? '',
        id: data.user.id,
        image_url: data.user.user_metadata.avatar_url, // または他の適切なプロパティ
        role: data.user.role ?? '',
        stripe_customer_id: null, // 必要に応じて設定
        stripe_subscriptoin_id: null, // 必要に応じて設定
        subscription_status: false, // 必要に応じて設定
      };

      setUser(customUserData);
      console.log('Logged in successfully!');
      return true;
    }
  };

  return signInWithGithub;
};

export default useGithubAuth;
