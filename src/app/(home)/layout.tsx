import '@/app/theme-config.css';
import { JotaiProvider } from '@/components/provider/JotaiProvider';
import '@radix-ui/themes/styles.css';
import styles from './layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={styles.body}>
        <JotaiProvider>{children}</JotaiProvider>
      </body>
    </html>
  );
}
