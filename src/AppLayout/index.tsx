import { Layout } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import LayoutContent from './LayoutContent';
import LayoutFooter from './LayoutFooter';
import LayoutHeader from './LayoutHeader';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppLayoutProps {}

const AppLayout: React.FC<AppLayoutProps> = () => {
  return (
    <Layout style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <LayoutHeader />
      <LayoutContent />
      <LayoutFooter />
    </Layout>
  );
};

export default AppLayout;
