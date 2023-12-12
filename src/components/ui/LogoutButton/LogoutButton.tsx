// components/LogoutButton.tsx
'use client';
import useLogout from '@/hooks/useLogout';
import { userAtom } from '@/store/user';
import { Button } from '@radix-ui/themes';
import { useAtom } from 'jotai';
import React from 'react';

const LogoutButton: React.FC = () => {
  const [user] = useAtom(userAtom);
  const logout = useLogout();

  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await logout();
  };

  return (
    <>
      {user}
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};

export default LogoutButton;
