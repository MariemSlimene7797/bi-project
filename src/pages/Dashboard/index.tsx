import React, { CSSProperties } from 'react';
import DashboardContextProvider from '../../contexts/DashboardContext';
import ModalContextProvider from '../../contexts/ModalContext';
import ModalSiderContextProvider from '../../contexts/ModalSiderContext';
import GridLayout from './DashboardContainer/GridLayout/GridLayout';

import Sider from './Sider';

const Dashboard: React.FC = () => {
  return (
    <DashboardContextProvider>
      <ModalSiderContextProvider>
        <ModalContextProvider>
          <div style={DashboardWrapperStyle}>
            <Sider />
            <GridLayout />
          </div>
        </ModalContextProvider>
      </ModalSiderContextProvider>
    </DashboardContextProvider>
  );
};

export default Dashboard;

const DashboardWrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row'
};
