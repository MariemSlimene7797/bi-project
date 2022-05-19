import { Layout } from "antd";
import React from "react";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";

interface LayoutHeaderProps {}

const LayoutHeader: React.FC<LayoutHeaderProps> = () => {
  return (
    <Layout.Header
      style={{
        display: "flex",
        flexWrap: "nowrap",
        alignContent: "center",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
          
      <LeftHeader />
      <RightHeader />
    </Layout.Header>
  );
};

export default LayoutHeader;
