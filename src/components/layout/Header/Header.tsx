// components/Header.server.tsx
'use client';
import LoginButton from '@/components/forms/Login';
import UserProfile from '@/components/ui/UserProfile';
import { useFetchUser } from '@/hooks/useFetchUser';
import { Box, Container, Flex } from '@radix-ui/themes';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Header: React.FC = () => {
  const { data: user, isLoading } = useFetchUser();

  if (isLoading) {
    return (
      <Container>
        <Flex align="center" justify="between">
          <h1>Header</h1>
          <Box>
            <Skeleton count={3} />
          </Box>
        </Flex>
      </Container>
    );
  }

  return (
    <Container>
      <Flex align="center" justify="between">
        <h1>Header</h1>
        {user ? <UserProfile /> : <LoginButton />}
      </Flex>
    </Container>
  );
};

export default Header;
