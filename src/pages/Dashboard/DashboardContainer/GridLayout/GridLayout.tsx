import { Card } from 'antd';
import React from 'react';

import RGL, { WidthProvider } from 'react-grid-layout';
import { PieChart } from 'recharts';
import BarChartTool from '../BarChartTool';
import DashCard from '../CardDashboard';

import './index.css';

const ReactGridLayout = WidthProvider(RGL);
interface defaultProps {
  isDraggable: true;
  isResizable: true;
  items: 5;
  rowHeight: 30;
  preventCollision: false;
  compactType: null;
  cols: 12;
}

const MinMaxLayout: React.FC = () => {
  return (
    <ReactGridLayout>
      <div key="1" data-grid={{ x: 3, y: 0, w: 3, h: 3, static: false }}>
        <Card />
      </div>
    </ReactGridLayout>
  );
};

export default MinMaxLayout;
