import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import GridLayout from './GridLayout';
import { wrap } from 'module';

const Sider: React.FC = () => {
  return (
    <Layout style={{ height: 800 }}>
      <Layout.Sider className="name-sider" width={300} theme="light">
        <GridLayout></GridLayout>
      </Layout.Sider>
    </Layout>
  );
};

export default Sider;
