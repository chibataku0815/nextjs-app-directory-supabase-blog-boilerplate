// components/LogoutButton.tsx
'use client';
import useLogout from '@/hooks/useLogout';
import { Button } from '@radix-ui/themes';
import React from 'react';

const LogoutButton: React.FC = () => {
  const logout = useLogout();

  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await logout();
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
