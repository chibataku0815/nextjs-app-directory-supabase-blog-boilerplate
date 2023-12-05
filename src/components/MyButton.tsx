// components/MyButton.tsx
import { Button } from '@radix-ui/themes';
import React, { FC } from 'react';

interface MyButtonProps {
  children: React.ReactNode;
}

const MyButton: FC<MyButtonProps> = ({ children }) => {
  return <Button>{children}</Button>;
};

export default MyButton;
