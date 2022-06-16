import { Menu } from 'antd';
import React, { useContext, useState } from 'react';
import Menuitem from './NavItems';
import { useHistory } from 'react-router-dom';
import {
  AppstoreOutlined,
  FormOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { LayoutContext } from '../../../contexts/LayoutContext';

const LeftHeader: React.FC = () => {
  const history = useHistory();
  // const [collapsed, setCollapsed] = useState<boolean>(false);
  // const toggleSider = () => {
  //   setCollapsed(!collapsed);
  // };
  const { collapsed, toggleSider } = useContext(LayoutContext);
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <>
      <div
        onMouseLeave={() => setHovered(false)}
        onMouseEnter={() => setHovered(true)}
        style={hovered ? triggerHoverStyles : triggerStyles}
        onClick={() => toggleSider()}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <Menu mode="horizontal" defaultSelectedKeys={[]} theme="dark" style={{ width: '100%' }}>
        {Menuitem.map((el, key) => (
          <Menu.Item
            key={key}
            icon={el.icon}
            onClick={() => history.push(el.path)}
            style={{ fontSize: '15px', color: 'white' }}
          >
            {el.label}
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};

export default LeftHeader;
const triggerStyles: React.CSSProperties = {
  color: 'white',
  fontSize: '18px',
  padding: '0 27px',
  cursor: 'pointer',
  transition: 'color 0.3s'
};
const triggerHoverStyles: React.CSSProperties = {
  fontSize: '18px',
  padding: '0 27px',
  cursor: 'pointer',
  color: '#1890ff',
  transition: 'color 0.3s'
};
/* <Menu.SubMenu
          key="SubMenu"
          title="Settings"
          icon={<SettingOutlined />}
          style={{ minWidth: '100px', fontSize: '15px', color: 'white' }}
        >
          <Menu.Item key="one" icon={<FormOutlined />}>
            Add New Parameter
          </Menu.Item>
        </Menu.SubMenu>*/
