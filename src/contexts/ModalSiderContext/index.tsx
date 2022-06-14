import React, { createContext, useContext, useState } from 'react';
import { ToolBoxContext, ToolboxElementType } from '../ToolBoxContext';
/**interface IModalSiderContext presents all the fonctions that will be needed in order to create the modal and realise the link between the sider and the modal of each tool
 * as well as the link between the dashboard and the modal.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IModalSiderContext {
  isVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  selectedItem: ToolboxElementType;
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
  const { AddDashboardElement } = useContext(ToolBoxContext);
  const handleOk = () => {
    setIsVisible(!isVisible);
    AddDashboardElement({
      itemID: selectedItem.key,
      title: selectedItem.title, //its the inserted title
      tboxItemType: selectedItem.tboxItemType,
      key: ''
    });
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
        handleOpen
      }}
    >
      {children}
    </ModalSiderContext.Provider>
  );
};

export default ModalSiderContextProvider;
