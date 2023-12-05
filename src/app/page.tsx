import { Button, Flex, Text, Theme, ThemePanel } from '@radix-ui/themes';
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
            <ThemePanel />
            <>
              <Flex direction="column" gap="2">
                <Text>Hello from Radix Themes :</Text>
                <Button>Lets go</Button>
              </Flex>
            </>
          </div>
        </Theme>
      </body>
    </html>
  );
}
