import React from 'react';
import { Card } from 'antd';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SiderItemProps {}

const SiderItem: React.FC<SiderItemProps> = () => {
  return (
    <Card hoverable={true} style={CardStyle}>
      <p style={{ textAlign: 'center' }}>Card Content</p>
    </Card>
  );
};

export default SiderItem;

const CardStyle: React.CSSProperties = { width: 250, borderColor: 'blueviolet', margin: 20, height: 70 };
