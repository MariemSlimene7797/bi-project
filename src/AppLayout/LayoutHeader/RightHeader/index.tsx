import { SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RightHeaderProps {}

const RightHeader: React.FC<RightHeaderProps> = () => {
  return (
    //<div style={{ width: "fit-content" }}>
    <Menu mode="horizontal" theme="dark" style={{ width: 'fit-content' }}>
      <Menu.Item key="Profil" title="Profil" icon={<UserOutlined />}>
        Profil
      </Menu.Item>
    </Menu>
  );
};

export default RightHeader;
