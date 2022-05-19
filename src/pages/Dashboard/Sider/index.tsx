import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import CardSider from './Card';
import { wrap } from 'module';
const { Header, Content, Footer, Sider } = Layout;

const Slider= () => {
  return(
  
    <Layout style={{height:800 }}>   
  
      <Sider className="name-sider" width={300}  theme="light" >
     
      <CardSider></CardSider>
      <CardSider></CardSider>
      <CardSider></CardSider>
      <CardSider></CardSider>
      <CardSider></CardSider>
        
        
      </Sider>
      </Layout>  
)};

export default Slider;