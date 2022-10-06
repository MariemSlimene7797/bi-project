import React, { createContext, useContext, useState } from 'react';
import { ToolboxElementType, useDashboardContext } from '../DashboardContext';
/**interface IModalSiderContext presents all the fonctions that will be needed in order to create the modal and realise the link between the sider and the modal of each tool
 * as well as the link between the dashboard and the modal.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IModalSiderContext {
  isVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  selectedItem: ToolboxElementType;
  updateSelectedItem: (Item: ToolboxElementType) => void;
  handleSelectionPie: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectionBar: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectionArea: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOpen: (info: ToolboxElementType) => void;
}
/**creation of the context */
export const ModalSiderContext = createContext<IModalSiderContext>({} as IModalSiderContext);
const ModalSiderContextProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ToolboxElementType>({} as ToolboxElementType);
  const { AddDashboardElement } = useDashboardContext();
  const handleOk = () => {
    setIsVisible(!isVisible);
    AddDashboardElement(selectedItem);
    console.log(selectedItem.tboxItemType);
    console.log(selectedItem.title);
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

    setSelectedItem({ ...selectedItem, title: e.target.value.toString(), tboxItemType: 'Pie' });
  };
  const handleSelectionArea = (e: React.ChangeEvent<HTMLInputElement>) => {
    //value of context should change according to argument 'e'

    setSelectedItem({ ...selectedItem, title: e.target.value.toString(), tboxItemType: 'Area' });
  };
  const handleSelectionBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    //value of context should change according to argument 'e'

    setSelectedItem({ ...selectedItem, title: e.target.value.toString(), tboxItemType: 'Bar' });
  };

  const updateSelectedItem = (Item: ToolboxElementType) => {
    setSelectedItem(Item);
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
        handleSelectionArea,
        updateSelectedItem,
        handleOpen
      }}
    >
      {children}
    </ModalSiderContext.Provider>
  );
};

export const useModalSiderContext = (): IModalSiderContext => {
  const context = useContext(ModalSiderContext);
  if (context === undefined) {
    console.error('useModalSiderContext must be used within a ModalSiderContextProvider');
  }
  return context;
};

export default ModalSiderContextProvider;
