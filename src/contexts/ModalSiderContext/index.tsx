import { MenuInfo } from 'rc-menu/lib/interface';
import React, { createContext, useContext, useState } from 'react';
import BarModal from '../../pages/Dashboard/Sider/BarModal';
import PieModal from '../../pages/Dashboard/Sider/PieModal';
import { ToolBoxContext, DashboardElementsType, ToolboxElementsType } from '../ToolBoxContext';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IModalSiderContext {
  isVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  selectedItem: DashboardElementsType;
  handleSelectionPie: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectionBar: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOpen: (elKey: string) => void;
  handleClick: (info: MenuInfo) => void;
}

export const ModalSiderContext = createContext<IModalSiderContext>({} as IModalSiderContext);
const ModalSiderContextProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DashboardElementsType>({} as ToolboxElementsType);
  const { AddDashboardElement, DeleteDashboardElement, dashboardElements } = useContext(ToolBoxContext);
  const handleOk = () => {
    setIsVisible(!isVisible);
    AddDashboardElement(selectedItem);
    console.log(selectedItem.type);
  };
  const handleCancel = () => {
    setIsVisible(!isVisible);
  };
  const handleOpen = (elKey: string) => {
    console.log(elKey);
    setSelectedItem({} as DashboardElementsType);

    setIsVisible(!isVisible);
  };
  const handleClick = (info: MenuInfo) => {
    handleOpen(info.key);
    {
      info.key == '1' ? (selectedItem.type = 'Pie') : (selectedItem.type = 'Bar');
      console.log(selectedItem.type);
    }
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
        handleOpen,
        handleSelectionPie,
        handleSelectionBar,
        handleClick
      }}
    >
      {children}
    </ModalSiderContext.Provider>
  );
};

export default ModalSiderContextProvider;
