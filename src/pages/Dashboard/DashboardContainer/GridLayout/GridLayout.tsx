import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import Content from '../Content';

import './index.css';

const GridLayout: React.FC = () => {
  return (
    <ReactGridLayout>
      <div key="1" data-grid={{ x: 3, y: 0, w: 3, h: 3, static: false }}>
        <Content />
      </div>
    </ReactGridLayout>
  );
};

export default GridLayout;
