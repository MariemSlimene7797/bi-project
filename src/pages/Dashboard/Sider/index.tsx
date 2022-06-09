import React, { useContext, useState } from 'react';
import { Layout, Menu, message } from 'antd';
import { LayoutContext } from '../../../contexts/LayoutContext';
import PieModal from './PieModal';
import BarModal from './BarModal';
import { ToolBoxContext, ToolboxElementType } from '../../../contexts/ToolBoxContext';
import { MenuInfo } from 'rc-menu/lib/interface';
import { ModalSiderContext } from '../../../contexts/ModalSiderContext';

const Sider: React.FC = () => {
  const { collapsed } = useContext(LayoutContext);

  const { toolboxElements } = useContext(ToolBoxContext);
  const { isVisible, selectedItem, handleOpen } = useContext(ModalSiderContext);
  // const { handleCancel } = useContext(ModalSiderContext);
  /* const handleOk = () => {
    setIsVisible(false);
    AddDashboardElement(selectedItem);
    console.log(selectedItem);
  };
  const handleCancel = () => {
    setIsVisible(false);
  };

  const handleOpen = (elKey: string) => {
    console.log(elKey);
    setSelectedItem({} as DashboardElementsType);
    setIsVisible(true);
  };*/
  const handleClick = (tboxEl: MenuInfo) => {
    const element = toolboxElements.find((el) => el.key === tboxEl.key);
    if (element != undefined) {
      handleOpen(element);
    } else {
      message.error('Element is not in toolbox');
    }
  };
  return (
    <>
      <Layout.Sider style={siderStyle} theme="light" trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="light"
          mode="inline"
          selectable={false}
          items={toolboxElements}
          style={SiderItemStyle}
          onClick={handleClick}
        />
      </Layout.Sider>
      {selectedItem.key === '0' ? (
        <PieModal item={selectedItem} isVisible={isVisible} />
      ) : (
        <BarModal item={selectedItem} isVisible={isVisible} />
      )}
    </>
  );
};

export default Sider;
const siderStyle: React.CSSProperties = { height: '100vh' };
const SiderItemStyle: React.CSSProperties = { fontSize: '15px' };
