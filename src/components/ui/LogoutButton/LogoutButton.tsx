// components/LogoutButton.tsx
'use client';
import useLogout from '@/hooks/useLogout';
import { Box } from '@radix-ui/themes';
import React from 'react';

const LogoutButton: React.FC = () => {
  const logout = useLogout();

  const handleLogout = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    await logout();
  };

  return <Box onClick={handleLogout}>Logout</Box>;
};

export default LogoutButton;
