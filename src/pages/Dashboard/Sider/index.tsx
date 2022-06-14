import React, { useContext, useState } from 'react';
import { Layout, Menu, message } from 'antd';
import { LayoutContext } from '../../../contexts/LayoutContext';
import PieModal from './PieModal';
import BarModal from './BarModal';
import { ToolBoxContext, ToolboxElementType } from '../../../contexts/ToolBoxContext';
import { MenuInfo } from 'rc-menu/lib/interface';
import { ModalSiderContext } from '../../../contexts/ModalSiderContext';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import AreaModal from './AreaModal';

const Sider: React.FC = () => {
  const { collapsed } = useContext(LayoutContext);

  const { toolboxElements } = useContext(ToolBoxContext);

  const { isVisible, selectedItem, handleOpen } = useContext(ModalSiderContext);
  const handleClick = (tboxEl: MenuInfo) => {
    const element = toolboxElements.find((el) => el.key === tboxEl.key);
    if (element != undefined) {
      handleOpen(element);
    } else {
      message.error('Element is not in toolbox');
    }
  };
  /**the sider opens the corresponding modal according to the clicked option in the sider */
  return (
    <>
      <Layout.Sider style={siderStyle} theme="light" trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="light"
          mode="inline"
          selectable={false}
          items={toolboxElements as ItemType[]}
          style={SiderItemStyle}
          onClick={handleClick}
        />
      </Layout.Sider>
      {(() => {
        console.log('hello');
        switch (selectedItem.key) {
          case '0':
            <PieModal item={selectedItem} isVisible={isVisible} />;
            break;

          case '1':
            <BarModal item={selectedItem} isVisible={isVisible} />;
            break;
          case '2':
            <AreaModal item={selectedItem} isVisible={isVisible} />;
            break;
        }
      })()}
      ;
    </>
  );
};

export default Sider;
const siderStyle: React.CSSProperties = { height: '100vh' };
const SiderItemStyle: React.CSSProperties = { fontSize: '15px' };

/*{selectedItem.key === '2' ? (
        <AreaModal item={selectedItem} isVisible={isVisible} />
      ) : (
        <BarModal item={selectedItem} isVisible={isVisible} />
      )}*/
