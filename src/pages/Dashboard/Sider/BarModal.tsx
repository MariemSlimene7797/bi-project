import { Input, Modal } from 'antd';
import React, { useContext } from 'react';
import { ModalSiderContext } from '../../../contexts/ModalSiderContext';
import { ToolboxElementType } from '../../../contexts/ToolBoxContext';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BarModalProps {
  isVisible: boolean;
  item: ToolboxElementType;
}

const BarModal: React.FC<BarModalProps> = ({ isVisible }) => {
  const { handleOk, handleCancel, handleSelectionBar, selectedItem } = useContext(ModalSiderContext);

  return (
    <>
      <Modal title="Bar Form" visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input
          placeholder="Enter object title"
          type="text"
          className="title"
          value={selectedItem.title}
          onChange={handleSelectionBar}
        />
      </Modal>
    </>
  );
};

export default BarModal;
