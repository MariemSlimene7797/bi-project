import React from 'react';
import { Card, Button } from 'antd';
import './index.css';
import { PlusCircleOutlined } from '@ant-design/icons';
import { CardProps } from 'antd/lib/card';

type SiderItemProps = CardProps;

const SiderItem: React.FC<SiderItemProps> = (props) => {
  return (
    <Card {...props} hoverable={true} style={CardStyle}>
      <div>
        <p className="cardStyle" style={{ textAlign: 'center' }}>
          Card Content
        </p>
        <Button className="button" size="large" icon={<PlusCircleOutlined />} />
      </div>
    </Card>
  );
};

export default SiderItem;

const CardStyle: React.CSSProperties = { width: 250, borderColor: 'blueviolet', margin: 20, height: 70 };
