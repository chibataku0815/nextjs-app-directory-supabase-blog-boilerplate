// src/middleware.ts
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          response.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          response.cookies.set({ name, value: '', ...options });
        },
      },
    }
  );

  // セッションデータを取得
  const { data: sessionData } = await supabase.auth.getSession();

  // セッションが存在しない、またはユーザーIDが取得できない場合はリダイレクト
  if (!sessionData.session || !sessionData.session.user.id) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // usersテーブルからユーザー情報を取得
  const { data: userData, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', sessionData.session.user.id)
    .single();

  console.log(userData);

  // エラーがある場合はログ出力
  if (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.redirect(new URL('/', request.url));
  }

  // ユーザーのロールをチェック
  if (userData.role !== 'admin') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
