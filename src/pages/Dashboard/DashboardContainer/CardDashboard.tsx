import { Card, CardProps } from 'antd';
import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import { DashboardElementType } from '../../../contexts/ToolBoxContext';
import BarChartTool from './BarChartTool';
import PieChartTool from './PieChartTool';

interface SiderItemProps extends CardProps {
  element: DashboardElementType;
}

const DashCard: React.FC<SiderItemProps> = ({ element, ...props }) => {
  return (
    <Card {...props} style={CardStyle} title={element.title}>
      {element.type === 'Bar' && <BarChartTool />}
      {element.type === 'Pie' && <PieChartTool />}
    </Card>
  );
};

export default DashCard;

const CardStyle: React.CSSProperties = { width: '500px', borderColor: 'blueviolet', margin: 10 };
/*const LayoutContent: React.FC<LayoutContentProps> = ({ children }) => {
  return <Layout.Content style={{ width: '100%', height: '100%' }}>{children}</Layout.Content>;
};*/
