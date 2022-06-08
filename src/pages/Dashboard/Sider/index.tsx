import React, { useContext, useState } from 'react';
import { Layout, Modal, Input, Select, Menu, Card } from 'antd';
import { LayoutContext } from '../../../contexts/LayoutContext';
import { DashboardElementsType, ToolBoxContext, ToolboxElementsType } from '../../../contexts/ToolBoxContext';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  PieChartOutlined,
  BarChartOutlined
} from '@ant-design/icons';
import { ModalSiderContext } from '../../../contexts/ModalSiderContext';
import { PieChart } from 'recharts';
import PieModal from './PieModal';
import BarModal from './BarModal';

const toolboxElements = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: 'Pie Chart'
  },
  {
    key: '2',
    icon: <BarChartOutlined />,
    label: 'Bar Chart'
  }
];

const Sider: React.FC = () => {
  const { AddDashboardElement, DeleteDashboardElement, dashboardElements } = useContext(ToolBoxContext);
  const { collapsed } = useContext(LayoutContext);

  const { selectedItem } = useContext(ModalSiderContext);
  const { handleOpen, handleClick } = useContext(ModalSiderContext);

  // const { handleCancel } = useContext(ModalSiderContext);
  /* const handleOk = () => {
    setIsVisible(false);
    AddDashboardElement(selectedItem);
    console.log(selectedItem);
  };
  const handleCancel = () => {
    setIsVisible(false);
  };

  const handleOpen = (elKey: string) => {
    console.log(elKey);
    setSelectedItem({} as DashboardElementsType);
    setIsVisible(true);
  };*/
  return (
    <>
      <Layout.Sider style={siderStyle} theme="light" trigger={null} collapsible collapsed={collapsed}>
        {/* {toolboxElements.map((el, key) => (
          <SiderItem hoverable key={key} onClick={() => handleClick(el)} />
        ))} */}
        <Menu
          theme="light"
          mode="inline"
          selectable={false}
          items={toolboxElements}
          style={SiderItemStyle}
          onClick={handleClick}
        />
      </Layout.Sider>
      {selectedItem.type == 'Bar' ? <BarModal /> : <PieModal />}
    </>
  );
};

export default Sider;
const siderStyle: React.CSSProperties = { height: '100vh' };
const SiderItemStyle: React.CSSProperties = { fontSize: '15px' };
