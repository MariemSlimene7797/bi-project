import React from 'react';
import { pathGroup } from '../../../Route/routes';
import { SettingOutlined, LineChartOutlined, FileTextOutlined } from '@ant-design/icons';

type NavItemType = {
  key: string;
  icon: React.ReactNode;
  path: pathGroup;
  label: string;
};

const NavItem: NavItemType[] = [
  {
    key: 'report',
    icon: <FileTextOutlined />,
    path: '/Reporting',
    label: 'Reporting'
  },
  {
    key: 'dashboard',
    icon: <LineChartOutlined />,
    path: '/Dashboard',
    label: 'Dashboard'
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    path: '/Settings',
    label: 'Settings'
  }
];

export default NavItem;
