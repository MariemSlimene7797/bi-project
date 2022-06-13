import { Card } from 'antd';
import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import { PieChart } from 'recharts';
import BarChartTool from '../BarChartTool';
import DashCard from '../CardDashboard';

import './index.css';

interface defaultProps {
  isDraggable: true;
  // isResizable: true;
  items: 5;
  rowHeight: 30;
  preventCollision: true;
  compactType: null;
  cols: 12;
}

const GridLayout: React.FC = () => {
  return (
    <ReactGridLayout>
      <div key="1" data-grid={{ x: 3, y: 0, w: 3, h: 3, static: false }}>
        Hello
      </div>
    </ReactGridLayout>
  );
};

export default GridLayout;
