// src/app/page.tsx
import Login from '@/components/forms/Login';
import LogoutButton from '@/components/ui/LogoutButton';
import { Database } from '@/types/supabase';
import { Theme } from '@radix-ui/themes';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import styles from './page.module.css';
import './theme-config.css';

export default async function Page() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={styles.body}>
        <Theme
          asChild
          appearance="dark"
          accentColor="mint"
          radius="large"
          scaling="110%"
        >
          <div id="root">
            {/* <ThemePanel /> */}
            <>
              <Login />
              <h1>Hello, {session?.user.id}</h1>
              <LogoutButton />
            </>
          </div>
        </Theme>
      </body>
    </html>
  );
}
