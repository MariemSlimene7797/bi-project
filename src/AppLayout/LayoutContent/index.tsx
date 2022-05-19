import { Layout } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LayoutContentProps {}

const LayoutContent: React.FC<LayoutContentProps> = () => {
  return (
    <>
      <Layout.Content style={{ width: '100%', height: '100%' }} />
    </>
  );
};

export default LayoutContent;
