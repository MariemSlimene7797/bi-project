import React from 'react';

type RouteType = {
  path: string;
  exact?: boolean;
  component: React.FC;
};

const routes: RouteType[] = [
  {
    path: '/',
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
