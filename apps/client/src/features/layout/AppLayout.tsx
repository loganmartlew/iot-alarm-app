import { AppShell } from '@mantine/core';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';

const AppLayout: FC = () => {
  return (
    <AppShell header={<Header />} navbar={<Navigation />}>
      <Outlet />
    </AppShell>
  );
};

export default AppLayout;
