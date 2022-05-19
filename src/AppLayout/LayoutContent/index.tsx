import { Layout } from 'antd';
import React from 'react';

interface LayoutContentProps {}

const LayoutContent: React.FC<LayoutContentProps> = () => {

      return <Layout.Content style={{width:"100%", height:"100%"}}>Content</Layout.Content>;
};

export default LayoutContent;

