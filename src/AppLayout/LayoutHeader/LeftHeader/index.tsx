import { Menu } from 'antd';
import React from 'react';
import Menuitem from './NavItems';
import { useHistory } from 'react-router-dom';

const LeftHeader: React.FC = () => {
  const history = useHistory();
  return (
    <Menu mode="horizontal" defaultSelectedKeys={[]} theme="dark" style={{ width: '100%' }}>
      {Menuitem.map((el, key) => (
        <Menu.Item key={key} icon={el.icon} onClick={() => history.push(el.path)}>
          {el.label}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default LeftHeader;
