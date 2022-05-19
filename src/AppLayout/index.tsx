import { Layout } from "antd";
import React from "react";
import LayoutContent from "./LayoutContent";
import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";

interface AppLayoutProps {}

const AppLayout: React.FC<AppLayoutProps> = () => {
  return (
    <Layout style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <LayoutHeader />
      <LayoutContent />
      <LayoutFooter />
    </Layout>
  );
};

export default AppLayout;
