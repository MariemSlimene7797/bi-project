import { Layout } from 'antd';
import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LayoutContentProps {}

const LayoutContent: React.FC<LayoutContentProps> = ({ children }) => {
  return (
    <>
      <Layout.Content style={ContentStyle}>{children}</Layout.Content>
    </>
  );
};

export default LayoutContent;

const ContentStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  margin: 10,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto'
};
