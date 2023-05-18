import { FC, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, NavLink } from '@mantine/core';
import { MdDashboard, MdHistory, MdSettings } from 'react-icons/md';
import { RiAlarmFill } from 'react-icons/ri';

const links = [
  { label: 'Dashboard', path: '/', icon: <MdDashboard /> },
  { label: 'Alarms', path: '/alarms', icon: <RiAlarmFill /> },
  { label: 'Rest Periods', path: '/restperiods', icon: <MdHistory /> },
  { label: 'Settings', path: '/settings', icon: <MdSettings /> },
];

interface Props {
  opened: boolean;
}

const Navigation: FC<Props> = ({ opened }) => {
  const { pathname } = useLocation();

  const getNavLinkProps = useCallback(
    (path: string) => ({
      component: Link,
      to: path,
      active: pathname === path,
    }),
    [pathname]
  );

  return (
    <Navbar width={{ sm: 200, lg: 300 }} hiddenBreakpoint="sm" hidden={!opened}>
      {links.map((link, i) => (
        <NavLink
          key={i}
          label={link.label}
          icon={link.icon}
          {...getNavLinkProps(link.path)}
        />
      ))}
    </Navbar>
  );
};

export default Navigation;
