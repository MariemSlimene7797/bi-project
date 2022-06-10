import React, { CSSProperties } from 'react';
import ReactGridLayout from 'react-grid-layout';
import DashboardContainer from './DashboardContainer';
import MinMaxLayout from './DashboardContainer/GridLayout/GridLayout';
import Sider from './Sider';

const Dashboard: React.FC = () => {
  return (
    <div style={DashboardWrapperStyle}>
      <Sider />

      <MinMaxLayout />
    </div>
  );
};

export default Dashboard;

const DashboardWrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row'
};
