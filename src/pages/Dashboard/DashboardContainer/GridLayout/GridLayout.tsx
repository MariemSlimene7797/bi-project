import { Card } from 'antd';
import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import Content from '../Content';

import './index.css';

const GridLayout: React.FC = () => {
  return (
    <ReactGridLayout>
      <div key="1" data-grid={{ x: 0, y: 0, w: 1, h: 2 }}>
        <Content />
      </div>
    </ReactGridLayout>
  );
};

export default GridLayout;
