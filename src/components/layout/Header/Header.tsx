// components/Header.server.tsx
'use client';
import LoginButton from '@/components/forms/Login';
import UserProfile from '@/components/ui/UserProfile';
import { useFetchUser } from '@/hooks/useFetchUser';
import { Box, Container, Flex } from '@radix-ui/themes';
import React from 'react';

const Header: React.FC = () => {
  const { data: user, isLoading } = useFetchUser();

  if (isLoading) {
    return (
      <Container>
        <Flex align="center" justify="between">
          <h1>Header</h1>
          <Box>...Loading</Box>
        </Flex>
      </Container>
    );
  }

  return (
    <Container>
      <Flex align="center" justify="between">
        <h1>Header</h1>
        {user ? <Box>ログイン中</Box> : <Box>ログインしていません</Box>}
        {user ? <UserProfile /> : <LoginButton />}
      </Flex>
    </Container>
  );
};

export default Header;
