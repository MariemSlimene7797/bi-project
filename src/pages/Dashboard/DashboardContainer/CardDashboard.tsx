import { Card, CardProps } from 'antd';
import React from 'react';
import { DashboardElementsType } from '../../../contexts/ToolBoxContext';
import ItemDashboard from './ItemDashboard';
import DashboardItem from './ItemDashboard';

interface SiderItemProps extends CardProps {
  element: DashboardElementsType;
}

const DashCard: React.FC<SiderItemProps> = ({ element, ...props }) => {
  return (
    <Card {...props} style={CardStyle} title={element.title}>
      <ItemDashboard />
    </Card>
  );
};

export default DashCard;

const CardStyle: React.CSSProperties = { width: '300px', borderColor: 'blueviolet', margin: 10 };
