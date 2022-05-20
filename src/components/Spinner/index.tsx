import { Spin } from 'antd';
import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.05)',
        borderRadius: '4px'
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default Spinner;
