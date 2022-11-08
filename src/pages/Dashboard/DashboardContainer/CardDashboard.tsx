import { Card, CardProps } from 'antd';
import React from 'react';
import { DashboardElementType } from '../../../contexts/DashboardContext';
import AreaChartTool from './AreaChartTool';
import BarChartTool from './BarChartTool';
import PieChartComponent from './DashboardComponents/PieChartComponent';
import PieChartTool from './PieChartTool';

interface SiderItemProps extends CardProps {
  element: DashboardElementType;
}
/**control of which chart the card would contain  */
const DashCard: React.FC<SiderItemProps> = ({ element, ...props }) => {
  return (
    <Card {...props} style={CardStyle} title={element.title}>
      {element.tboxItemType === 'Bar' && <BarChartTool />}
      {element.tboxItemType === 'Pie' && <PieChartTool />}
      {element.tboxItemType === 'Area' && <AreaChartTool />}
    </Card>
  );
};

export default DashCard;

const CardStyle: React.CSSProperties = { width: '100%', height: '100%', borderColor: 'blueviolet', margin: 10 };
