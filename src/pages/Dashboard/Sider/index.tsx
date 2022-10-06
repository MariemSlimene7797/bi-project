import React, { ReactNode, useContext, useState } from 'react';
import { Layout, Menu, message } from 'antd';
import PieModal from './PieModal';
import BarModal from './BarModal';
import { MenuInfo } from 'rc-menu/lib/interface';
import { ModalSiderContext } from '../../../contexts/ModalSiderContext';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import AreaModal from './AreaModal';
import { useLayoutContext } from '../../../contexts/LayoutContext';
import { TboxItemType, ToolboxElementType, useDashboardContext } from '../../../contexts/DashboardContext';
import { useModalContext } from '../../../contexts/ModalContext';

const Sider: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ToolboxElementType>({} as ToolboxElementType);
  const { collapsed } = useLayoutContext();

  const { toolboxElements } = useDashboardContext();

  const { isVisible, handelModalState } = useModalContext();

  const handleClick = (tboxEl: MenuInfo) => {
    const element = toolboxElements.find((el) => el.key === tboxEl.key);
    if (element != undefined) {
      setSelectedItem(element);
      handelModalState('open');
    } else {
      message.error('Element is not in toolbox');
    }
  };

  /**strongly typed items from TboxItemType*/
  const item: { [K in TboxItemType]?: ReactNode } = {
    Pie: <PieModal isVisible={isVisible} />,
    Bar: <BarModal isVisible={isVisible} />,
    Area: <AreaModal isVisible={isVisible} />
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
      {item[selectedItem.tboxItemType]}
    </>
  );
};

export default Sider;
const siderStyle: React.CSSProperties = { height: '100vh' };
const SiderItemStyle: React.CSSProperties = { fontSize: '15px' };
