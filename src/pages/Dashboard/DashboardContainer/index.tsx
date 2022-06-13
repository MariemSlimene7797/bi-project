import Card from 'antd/lib/card';
import { title } from 'process';
import React, { CSSProperties, useContext, useState } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { ToolBoxContext } from '../../../contexts/ToolBoxContext';
import BarChartTool from './BarChartTool';
import CardDashboard from './CardDashboard';
import DashCard from './CardDashboard';

//import GridL from '../Sider/GridLayout';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DashboardContainerProps {}

const DashboardContainer: React.FC<DashboardContainerProps> = () => {
  const { dashboardElements } = useContext(ToolBoxContext);

  return (
    <ReactGridLayout style={DashboardContainerStyles}>
      {dashboardElements.map((el, key) => (
        <div key={key}>
          <DashCard key={key} element={el} />
        </div>
      ))}
    </ReactGridLayout>
  );
};
export default DashboardContainer;

const DashboardContainerStyles: React.CSSProperties = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  overflow: 'scroll'
};
