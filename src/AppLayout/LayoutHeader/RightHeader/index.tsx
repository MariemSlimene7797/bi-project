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
      <Menu.SubMenu key="SubMenu" title="Profile" icon={<UserOutlined />} style={{ minWidth: '100px' }}>
        <Menu.Item key="two" icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <Menu.Item key="three" icon={<AppstoreOutlined />}>
          Navigation Three
        </Menu.Item>
        <Menu.ItemGroup title="Item Group">
          <Menu.Item key="four" icon={<AppstoreOutlined />}>
            Navigation Four
          </Menu.Item>
          <Menu.Item key="five" icon={<AppstoreOutlined />}>
            Navigation Five
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
    </Menu>
  );
};

export default RightHeader;
