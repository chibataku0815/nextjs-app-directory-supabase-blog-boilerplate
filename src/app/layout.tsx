// src/app/layout.tsx
import '@/app/theme-config.css';
import { JotaiProvider } from '@/components/provider/JotaiProvider';
import { createClient } from '@/utils/supabaseClient';
import '@radix-ui/themes/styles.css';
import 'server-only';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html suppressHydrationWarning lang="ja">
      <body>
        <JotaiProvider serverSession={session}>{children}</JotaiProvider>
      </body>
    </html>
  );
}
