import { FileTextOutlined, LineChartOutlined, SettingOutlined } from '@ant-design/icons';
import React, { ReactNode } from 'react';

export type pathGroup = '/dashboard' | '/reporting' | '/settings';
type RouteType =
  | {
      path: pathGroup;
      exact?: boolean;
      component: React.FC;
      isMenu: true;
      menu: {
        key: string;
        label?: ReactNode;
        icon?: ReactNode;
      };
    }
  | {
      path: pathGroup;
      exact?: boolean;
      component: React.FC;
      isMenu: false;
    };

const routes: RouteType[] = [
  {
    path: '/dashboard',
    exact: true,
    component: React.lazy(() => import('../pages/Dashboard')),
    isMenu: true,
    menu: {
      key: 'Dashboard',
      icon: <LineChartOutlined />
    }
  },
  {
    path: '/reporting',
    component: React.lazy(() => import('../pages/Reporting')),
    isMenu: true,
    menu: {
      key: 'Reporting',
      icon: <FileTextOutlined />
    }
  },
  {
    path: '/settings',
    component: React.lazy(() => import('../pages/Settings')),
    isMenu: true,
    menu: {
      key: 'Settings',
      icon: <SettingOutlined />
    }
  }
];

export default routes;
