// src/app/page.tsx
import Login from '@/components/forms/Login';
import LogoutButton from '@/components/ui/LogoutButton';

export default async function Page() {
  return (
    <div id="root">
      <Login />
      <LogoutButton />
    </div>
  );
}
