// Supabase Auth Callback Route
// Docs: https://supabase.io/docs/guides/auth
import { Database } from '@/types/supabase';
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

function getSupabaseClient(cookieStore: any): any {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase environment variables are not set');
  }

  return createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        cookieStore.set({ name, value, ...options });
      },
      remove(name: string, options: CookieOptions) {
        cookieStore.set({ name, value: '', ...options });
      },
    },
  });
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const isAuth = cookies().get('supabase-auth-token');

  if (isAuth) {
    return NextResponse.redirect(requestUrl.origin);
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const cookieStore = cookies();
    const supabase = getSupabaseClient(cookieStore);

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      console.log('Logged in successfully!');
      return NextResponse.redirect(requestUrl.origin + next);
    }
  } else {
    console.log('no code?');
  }

  return NextResponse.redirect(requestUrl.origin + '/auth/error');
}
