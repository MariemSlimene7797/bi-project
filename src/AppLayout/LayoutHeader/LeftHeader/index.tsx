import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { CSSProperties, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useLayoutContext } from '../../../contexts/LayoutContext';
import routes from '../../../Route/routes';

const LeftHeader: React.FC = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  const history = useHistory();
  const { t } = useTranslation();
  const { collapsed, toggleSider } = useLayoutContext();
  return (
    <>
      <div style={LogoStyles}>LOGO</div>
      <div
        onMouseLeave={() => setHovered(false)}
        onMouseEnter={() => setHovered(true)}
        style={hovered ? triggerHoverStyles : triggerStyles}
        onClick={toggleSider}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <Menu mode="horizontal" defaultSelectedKeys={[]} theme="dark" style={{ width: '100%' }}>
        {routes.map(
          (el, key) =>
            el.isMenu && (
              <Menu.Item key={key} icon={el.menu.icon} onClick={() => history.push(el.path)}>
                {el.menu.label ?? t(el.menu.key)}
              </Menu.Item>
            )
        )}
      </Menu>
    </>
  );
};

export default LeftHeader;

const LogoStyles: CSSProperties = { width: '80px', color: 'white' };

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
