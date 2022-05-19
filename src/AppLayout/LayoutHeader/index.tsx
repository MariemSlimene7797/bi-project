import { Layout } from 'antd';
import React from 'react';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LayoutHeaderProps {}

const LayoutHeader: React.FC<LayoutHeaderProps> = () => {
  return (
    <Layout.Header
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <LeftHeader />
      <RightHeader />
    </Layout.Header>
  );
};

export default LayoutHeader;
