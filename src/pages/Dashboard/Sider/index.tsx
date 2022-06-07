import React, { useContext, useState } from 'react';
import { Layout, Modal, Input, Select, Menu, Card } from 'antd';
import { LayoutContext } from '../../../contexts/LayoutContext';
import { DashboardElementsType, ToolBoxContext } from '../../../contexts/ToolBoxContext';

import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

const toolboxElements = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: 'nav 1'
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    label: 'nav 2'
  },
  {
    key: '3',
    icon: <UploadOutlined />,
    label: 'nav 3'
  }
];
const Sider: React.FC = () => {
  const { AddDashboardElement, DeleteDashboardElement, dashboardElements } = useContext(ToolBoxContext);
  const { collapsed } = useContext(LayoutContext);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [selectedItem, setSelectedItem] = useState<DashboardElementsType>({} as DashboardElementsType);

  const handleOk = () => {
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
  };
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
          onClick={(info) => handleOpen(info.key)}
        />
      </Layout.Sider>
      <Modal title="Choose an object" visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input
          placeholder="Enter object title"
          type="text"
          className="title"
          value={selectedItem.title || ''}
          onChange={(e) => setSelectedItem({ ...selectedItem, title: e.target.value.toString() })}
        />
        <Select
          value={selectedItem.type || ''}
          style={{ width: 80, margin: '0 8px' }}
          onChange={(e) => setSelectedItem({ ...selectedItem, type: e })}
        >
          <Select.Option value="A">A</Select.Option>
          <Select.Option value="B">B</Select.Option>
        </Select>
      </Modal>
    </>
  );
};

export default Sider;
const siderStyle: React.CSSProperties = { height: '100vh' };
const SiderItemStyle: React.CSSProperties = { fontSize: '15px' };
