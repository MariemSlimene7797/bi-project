import { Layout } from 'antd';
import React, { CSSProperties } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LayoutFooterProps {}

const LayoutFooter: React.FC<LayoutFooterProps> = () => {
  return <Layout.Footer style={LayoutFooterStyles}>Intelligencia ©2022 Created by Mariem Slimene</Layout.Footer>;
};

export default LayoutFooter;

const LayoutFooterStyles: CSSProperties = {
  textAlign: 'center'
};
