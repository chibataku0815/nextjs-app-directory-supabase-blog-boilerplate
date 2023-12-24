// components/CounterButton.tsx
'use client';
import LoginButton from '@/components/forms/Login';
import UserProfile from '@/components/ui/UserProfile';
import { userAtom } from '@/store/user';
import { Box, Container, Flex } from '@radix-ui/themes';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [user] = useAtom(userAtom);
  const [loading, setLoading] = useState(true); // ローディング状態を管理するstate

  useEffect(() => {
    // ユーザー情報の読み込みが完了したらローディング状態を解除
    if (user !== undefined) {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    // ローディング中はローディング表示を行う
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Flex align="center" justify="between">
        <h1>Header</h1>
        {user ? (
          <Box>ログイン中: {user.role}</Box>
        ) : (
          <Box>ログインしていません</Box>
        )}
        {user ? <UserProfile /> : <LoginButton />}
      </Flex>
    </Container>
  );
};

export default Header;
