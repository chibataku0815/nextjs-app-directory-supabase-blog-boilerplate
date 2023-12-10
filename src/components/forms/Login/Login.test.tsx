// src/components/forms/Login/Login.test.tsx

import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  it('should render the component', () => {
    render(<Login />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
