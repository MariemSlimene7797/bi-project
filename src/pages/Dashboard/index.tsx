import React from 'react';
import Sider from './Sider';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <>
      <Sider />
    </>
  );
};

export default Dashboard;
