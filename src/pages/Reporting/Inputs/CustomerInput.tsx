import { UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Space } from 'antd';
import React from 'react';

const CustomerInput: React.FC = () => {
  return (
    <Dropdown overlay={MenuOverlay}>
      <Button>
        <Space>
          Customer
          <UserOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

const MenuOverlay = () => {
  return (
    <Menu
      onClick={(e) => console.log(e)}
      items={[
        { label: '1st menu item', key: '1' },
        {
          label: '2nd menu item',
          key: '2'
        },
        {
          label: '3rd menu item',
          key: '3'
        }
      ]}
    />
  );
};

export default CustomerInput;
