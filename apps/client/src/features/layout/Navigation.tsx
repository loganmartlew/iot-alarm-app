import { FC, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, NavLink } from '@mantine/core';
import { MdHome, MdSettings } from 'react-icons/md';
import { RiAlarmFill } from 'react-icons/ri';

const links = [
  { label: 'Home', path: '/', icon: <MdHome /> },
  { label: 'Alarms', path: '/alarms', icon: <RiAlarmFill /> },
  { label: 'Settings', path: '/settings', icon: <MdSettings /> },
];

const Navigation: FC = () => {
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
    <Navbar width={{ sm: 200, lg: 300 }}>
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
