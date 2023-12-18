// components/CounterButton.tsx
'use client';
import LoginButton from '@/components/forms/Login';
import UserProfile from '@/components/ui/UserProfile';
import { userAtom } from '@/store/user';
import { Container, Flex } from '@radix-ui/themes';
import { useAtom } from 'jotai';
import React from 'react';

const Header: React.FC = () => {
  const [user] = useAtom(userAtom);

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
