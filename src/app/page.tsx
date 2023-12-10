import LoginForm from '@/components/forms/Login/Login';
import LogoutButton from '@/components/ui/LogoutButton';
import { Theme } from '@radix-ui/themes';
import styles from './page.module.css';
import './theme-config.css';

export default async function Page() {
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
              <LogoutButton />
            </>
          </div>
        </Theme>
      </body>
    </html>
  );
}
