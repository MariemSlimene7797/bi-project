import React from 'react';

export type pathGroup = '/Dashboard' | '/Reporting' | '/Settings';
type RouteType = {
  path: pathGroup;
  exact?: boolean;
  component: React.FC;
};

const routes: RouteType[] = [
  {
    path: '/Dashboard',
    exact: true,
    component: React.lazy(() => import('../pages/Dashboard'))
  },
  {
    path: '/Reporting',
    component: React.lazy(() => import('../pages/Reporting'))
  },
  {
    path: '/Settings',
    component: React.lazy(() => import('../pages/Settings'))
  }
];

export default routes;
