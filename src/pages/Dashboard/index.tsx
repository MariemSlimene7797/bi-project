import React, { CSSProperties } from 'react';
import DashboardContextProvider from '../../contexts/DashboardContext';
import ModalSiderContextProvider from '../../contexts/ModalSiderContext';
import DashboardContainer from './DashboardContainer';
import Sider from './Sider';

const Dashboard: React.FC = () => {
  return (
    <DashboardContextProvider>
      <ModalSiderContextProvider>
        <div style={DashboardWrapperStyle}>
          <Sider />

          <DashboardContainer />
        </div>
      </ModalSiderContextProvider>
    </DashboardContextProvider>
  );
};

export default Dashboard;

const DashboardWrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row'
};
