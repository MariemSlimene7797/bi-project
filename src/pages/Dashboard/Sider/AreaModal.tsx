import { Input, Modal } from 'antd';
import React, { useContext } from 'react';
import { ModalSiderContext } from '../../../contexts/ModalSiderContext';
import { ToolboxElementType } from '../../../contexts/ToolBoxContext';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AreaModalProps {
  isVisible: boolean;
  item: ToolboxElementType;
}

const AreaModal: React.FC<AreaModalProps> = ({ isVisible, item }) => {
  const { handleOk, handleCancel, handleSelectionArea, selectedItem } = useContext(ModalSiderContext);

  return (
    <>
      <Modal title="Area Form" visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input
          placeholder="Enter object title"
          type="text"
          className="title"
          value={selectedItem.title}
          onChange={handleSelectionArea}
        />
      </Modal>
    </>
  );
};

export default AreaModal;
