import React, { useContext, useState } from 'react';
import { Layout, Menu, Breadcrumb, Modal, Input } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import GridLayout from './GridLayout';
import { wrap } from 'module';
import SiderItem from './GridLayout/SiderItem';
import { LayoutContext } from '../../../contexts/LayoutContext';

interface SiderProps {
  onAdd: (el: string) => void;
}
const Sider: React.FC<SiderProps> = ({ onAdd }) => {
  const { collapsed } = useContext(LayoutContext);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [selectedItem, setSelectedItem] = useState<string>('');
  const handleClick = () => {
    setIsVisible(true);
  };
  const handleOk = () => {
    onAdd(selectedItem);
    setIsVisible(false);
  };
  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <Layout style={{ height: 800 }}>
      <Layout.Sider
        className="name-sider"
        style={siderStyle}
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <SiderItem onClick={() => handleClick()} />
        <SiderItem onClick={() => handleClick()} />
        <SiderItem onClick={() => handleClick()} />
      </Layout.Sider>
      <Modal title="Basic Modal" visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input onChange={(event) => setSelectedItem(event.target.value)} />
      </Modal>
    </Layout>
  );
};

export default Sider;
const siderStyle: React.CSSProperties = { maxWidth: '300px', minWidth: '50px' };
// <GridLayout></GridLayout>
