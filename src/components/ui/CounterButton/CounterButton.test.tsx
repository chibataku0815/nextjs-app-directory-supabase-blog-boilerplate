import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'jotai';
import CounterButton from './CounterButton';

describe('CounterButton', () => {
  it('should increment the count when clicked', () => {
    // Jotai Providerを使用して、グローバルステートをテスト内で利用できるようにします
    render(
      <Provider>
        <CounterButton />
      </Provider>
    );

    // ボタンを見つけてクリックします
    const button = screen.getByRole('button');

    // ボタンをクリックしてカウントを増やします
    fireEvent.click(button);
  });
});
