import { Menu } from "antd";
import React from "react";
import { AppstoreOutlined, SettingOutlined ,UserOutlined ,LineChartOutlined,FileTextOutlined,
      MenuOutlined  } from '@ant-design/icons';

interface LeftHeaderProps {}

const LeftHeader: React.FC<LeftHeaderProps> = () => {
  //return (
  //  <div style={{ width: "100%" }}>
  return(

<Menu mode="horizontal" defaultSelectedKeys={[]} theme="dark" style={{width:"100%"}}>
          
          <Menu.Item key="menu" icon={<MenuOutlined />}></Menu.Item>
  
          <Menu.Item key="report" icon={<FileTextOutlined />}>
                  Reporting
          </Menu.Item>
          <Menu.Item key="dashboard" icon={<LineChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="Settings" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          </Menu>
 
)};

export default LeftHeader;
/* </Menu>
      <Menu mode="horizontal">
        <Menu.Item>item 1</Menu.Item>
        <Menu.Item>item 2</Menu.Item>
        <Menu.SubMenu title="sub menu">
          <Menu.Item>item 3</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  );*/