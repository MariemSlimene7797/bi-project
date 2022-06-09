import React, { CSSProperties } from 'react';
import DashboardContainer from './DashboardContainer';
import Sider from './Sider';

const Dashboard: React.FC = () => {
  return (
    <div style={DashboardWrapperStyle}>
      <Sider />
      <DashboardContainer />
    </div>
  );
};

export default Dashboard;

const DashboardWrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row'
};
