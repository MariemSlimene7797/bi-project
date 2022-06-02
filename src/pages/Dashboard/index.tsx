import React, { CSSProperties, useContext } from 'react';
import { ToolBoxContext } from '../../contexts/ToolBoxContext';
import DashboardContainer from './DashboardContainer';
import Sider from './Sider';

const Dashboard: React.FC = () => {
  return (
    <div style={DashboardContainerStyle}>
      <div>
        <Sider />
      </div>
      <div>
        <DashboardContainer />
      </div>
    </div>
  );
};

export default Dashboard;

const DashboardContainerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row'
};
