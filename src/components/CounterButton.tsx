// components/CounterButton.tsx
import { counterState } from '@/store/counter';
import { useAtom } from 'jotai';
import React from 'react';

const CounterButton: React.FC = () => {
  const [count, setCount] = useAtom(counterState);

  return <button onClick={() => setCount(count + 1)}>Count is {count}</button>;
};

export default CounterButton;
