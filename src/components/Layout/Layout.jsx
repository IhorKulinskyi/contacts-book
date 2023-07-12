import AppHeader from 'components/AppHeader/AppHeader';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}
