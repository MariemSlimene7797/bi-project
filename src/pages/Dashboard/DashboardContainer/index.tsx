import Card from 'antd/lib/card';
import { title } from 'process';
import React, { useContext, useState } from 'react';
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
    <>
      {dashboardElements.map((el, key) => (
        <DashCard key={key} element={el} />
      ))}
    </>
  );
};
export default DashboardContainer;
/* */
