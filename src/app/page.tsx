import LoginForm from '@/components/forms/Login/Login';
import { Theme } from '@radix-ui/themes';
import styles from './page.module.css';
import './theme-config.css';

export default async function Page() {
  // const cookieStore = cookies();

  // const supabase = createServerClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  //   {
  //     cookies: {
  //       get(name: string) {
  //         return cookieStore.get(name)?.value;
  //       },
  //     },
  //   }
  // );

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
              <LoginForm />
            </>
          </div>
        </Theme>
      </body>
    </html>
  );
}
