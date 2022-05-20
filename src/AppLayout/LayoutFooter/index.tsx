import { Layout } from 'antd';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LayoutFooterProps {}

const LayoutFooter: React.FC<LayoutFooterProps> = () => {
  return <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Layout.Footer>;
};

export default LayoutFooter;
