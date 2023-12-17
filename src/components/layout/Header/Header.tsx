// components/CounterButton.tsx
'use client';
import LoginButton from '@/components/forms/Login';
import UserProfile from '@/components/ui/UserProfile';
import { userAtom } from '@/store/user';
import { Box, Container, Flex } from '@radix-ui/themes';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react';

const Header: React.FC = () => {
  const [user] = useAtom(userAtom);

  useEffect(() => {
    console.log('user Header', user);
  }, [user]);

  return (
    <Box>
      <Container>
        <Flex align="center" justify="between">
          <h1>Header</h1>
          {user ? (
            <Box>ログイン中: {user.display_name || user.email}</Box>
          ) : (
            <Box>ログインしていません</Box>
          )}
          {user ? <UserProfile /> : <LoginButton />}
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
