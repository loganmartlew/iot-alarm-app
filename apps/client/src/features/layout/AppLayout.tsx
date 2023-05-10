import { AppShell } from '@mantine/core';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import { useDisclosure } from '@mantine/hooks';

const AppLayout: FC = () => {
  const [navBarOpened, navBarHandlers] = useDisclosure(false);

  return (
    <AppShell
      header={
        <Header opened={navBarOpened} openNavigation={navBarHandlers.toggle} />
      }
      navbar={<Navigation opened={navBarOpened} />}
      navbarOffsetBreakpoint="sm"
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Outlet />
    </AppShell>
  );
};

export default AppLayout;
