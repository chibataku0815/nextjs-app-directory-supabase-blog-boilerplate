// components/MyButton.tsx
import { Button } from '@radix-ui/themes';
import { FC, ReactNode } from 'react';

export interface MyButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const MyButton: FC<MyButtonProps> = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default MyButton;
