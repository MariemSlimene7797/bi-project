import React, { CSSProperties } from 'react';
import DashboardContextProvider from '../../contexts/DashboardContext';
import ModalContextProvider from '../../contexts/ModalContext';
import ModalSiderContextProvider from '../../contexts/ModalSiderContext';
import DashboardContainer from './DashboardContainer';
import Content from './DashboardContainer/Content';
import Sider from './Sider';

const Dashboard: React.FC = () => {
  return (
    <DashboardContextProvider>
      <ModalSiderContextProvider>
        <ModalContextProvider>
          <div style={DashboardWrapperStyle}>
            <Sider />
            <Content />
            {/* <DashboardContainer /> */}
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
