// src/components/ui/UserProfile/UserProfile.tsx
'use client';

import { CaretDownIcon } from '@radix-ui/react-icons';
import { Button, DropdownMenu, Link } from '@radix-ui/themes';
import LogoutButton from '../LogoutButton';

const UserProfile = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft">
          Options
          <CaretDownIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>
          <Link href="/dashboard">dashboard</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
          <LogoutButton />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default UserProfile;
