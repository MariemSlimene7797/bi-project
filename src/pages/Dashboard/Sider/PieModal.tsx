import { Input, Modal } from 'antd';
import React, { useContext } from 'react';
import { ToolboxElementType } from '../../../contexts/DashboardContext';
import { useModalSiderContext } from '../../../contexts/ModalSiderContext';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PieModalProps {
  isVisible: boolean;
  item: ToolboxElementType;
}
/**the modal related to pie chart will show once you click on its card
 * this component contains all the params related to the pie chart.
 * the ok button will show you the chart realised based on the params you provided
 * the provided params are inserted in handleSelectionPie
 */
const PieModal: React.FC<PieModalProps> = ({ isVisible, item }) => {
  console.log('test22');
  const { handleOk, handleCancel, handleSelectionPie, selectedItem } = useModalSiderContext();

  return (
    <>
      <Modal title="Pie Form" visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input
          placeholder="Enter object title"
          type="text"
          className="title"
          value={selectedItem.title}
          onChange={handleSelectionPie}
        />
      </Modal>
    </>
  );
};

export default PieModal;
