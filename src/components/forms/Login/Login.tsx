// components/LoginForm.tsx
'use client';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@radix-ui/themes';
import useGithubAuth from '../../../hooks/useGithubAuth';

const Login: React.FC = () => {
  const signInWithGithub = useGithubAuth();

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await signInWithGithub();
  };

  return (
    <Button onClick={handleLogin}>
      <FontAwesomeIcon icon={faGithub} />
    </Button>
  );
};

export default Login;