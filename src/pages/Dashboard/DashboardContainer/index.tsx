import Card from 'antd/lib/card';
import React, { useContext } from 'react';
import { ToolBoxContext } from '../../../contexts/ToolBoxContext';
import SiderItem from '../Sider/SiderItem';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DashboardContainerProps {}

const DashboardContainer: React.FC<DashboardContainerProps> = () => {
  const { dashboardElements } = useContext(ToolBoxContext);
  /*const ModalTitle={dashboardElements.map((el, key) => 
    <div key={key}>{el.title}</div>)};*/

  return <></>;
};

export default DashboardContainer;
