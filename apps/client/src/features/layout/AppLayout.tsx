import { AppShell } from '@mantine/core';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout: FC = () => {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
};

export default AppLayout;
