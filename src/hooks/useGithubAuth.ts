// hooks/useGithubAuth.js
'use client';
import { CustomUser } from '@/types/customUser';
import { Database } from '@/types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { usePathname } from 'next/navigation';

const useGithubAuth = () => {
  const pathname = usePathname();
  const supabase = createClientComponentClient<Database>();

  const redirectUrl =
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_REDIRECT_URL
      : process.env.NEXT_PUBLIC_REDIRECT_URL_PRODUCTION;

  const signInWithGithub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${redirectUrl}/auth/callback?next=${pathname}`,
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
        display_name: data.user.user_metadata.full_name,
        email: data.user.email ?? '',
        id: data.user.id,
        image_url: data.user.user_metadata.avatar_url,
        role: data.user.role ?? 'user',
        stripe_customer_id: null, // 必要に応じて設定
        stripe_subscription_id: null, // 必要に応じて設定
        subscription_status: false, // 必要に応じて設定
      };
      console.log('Logged in successfully!');
      return true;
    }
  };

  return signInWithGithub;
};

export default useGithubAuth;
