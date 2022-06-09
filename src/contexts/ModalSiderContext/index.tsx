import { MenuInfo } from 'rc-menu/lib/interface';
import React, { createContext, useContext, useState } from 'react';
import BarModal from '../../pages/Dashboard/Sider/BarModal';
import PieModal from '../../pages/Dashboard/Sider/PieModal';
import { ToolBoxContext, DashboardElementType, ToolboxElementType, Tool } from '../ToolBoxContext';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IModalSiderContext {
  isVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  selectedItem: ToolboxElementType;
  handleSelectionPie: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectionBar: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOpen: (info: ToolboxElementType) => void;
}

export const ModalSiderContext = createContext<IModalSiderContext>({} as IModalSiderContext);
const ModalSiderContextProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ToolboxElementType>({} as ToolboxElementType);
  const { AddDashboardElement, DeleteDashboardElement, dashboardElements } = useContext(ToolBoxContext);
  const handleOk = () => {
    setIsVisible(!isVisible);
    AddDashboardElement({ id: selectedItem.key, title: '', type: selectedItem.type });
    console.log(selectedItem.type);
  };
  const handleCancel = () => {
    setIsVisible(!isVisible);
  };

  const handleOpen = (item: ToolboxElementType) => {
    setSelectedItem(item);
    setIsVisible(true);
  };

  const handleSelectionPie = (e: React.ChangeEvent<HTMLInputElement>) => {
    //value of context should change according to argument 'e'

    setSelectedItem({ ...selectedItem, title: e.target.value.toString(), type: 'Pie' });
  };
  const handleSelectionBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    //value of context should change according to argument 'e'

    setSelectedItem({ ...selectedItem, title: e.target.value.toString(), type: 'Bar' });
  };

  return (
    <ModalSiderContext.Provider
      value={{
        handleOk,
        handleCancel,
        isVisible,
        selectedItem,
        handleSelectionPie,
        handleSelectionBar,
        handleOpen
      }}
    >
      {children}
    </ModalSiderContext.Provider>
  );
};

export default ModalSiderContextProvider;
