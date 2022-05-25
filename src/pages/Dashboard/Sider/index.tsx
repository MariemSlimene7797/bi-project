import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Modal, Input } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import GridLayout from './GridLayout';
import { wrap } from 'module';
import SiderItem from './GridLayout/SiderItem';

interface SiderProps {
  onAdd: (el: string) => void;
}
const Sider: React.FC<SiderProps> = ({ onAdd }) => {
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
      <Layout.Sider className="name-sider" width={300} theme="light">
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
// <GridLayout></GridLayout>
