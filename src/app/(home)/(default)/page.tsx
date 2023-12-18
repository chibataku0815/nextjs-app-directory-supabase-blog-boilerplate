// src/app/home/default/page.tsx

import ThemeToggle from '@/components/ui/ThemeToggle';
import { Flex } from '@radix-ui/themes';

export default function Home() {
  return (
    <Flex direction="column" gap="2">
      <ThemeToggle />
    </Flex>
  );
}
