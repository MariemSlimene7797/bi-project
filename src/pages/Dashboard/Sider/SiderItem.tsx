import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Card, CardProps } from 'antd';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SiderItemProps extends CardProps {}

const SiderItem: React.FC<SiderItemProps> = (props) => {
  return <Card {...props} style={CardStyle} />;
};

export default SiderItem;

const CardStyle: React.CSSProperties = { width: '200px', borderColor: 'blueviolet', margin: 10, height: '100px' };
