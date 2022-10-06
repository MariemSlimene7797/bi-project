import { Input, Modal } from 'antd';
import React from 'react';
import { ToolboxElementType } from '../../../contexts/DashboardContext';
import { useModalSiderContext } from '../../../contexts/ModalSiderContext';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BarModalProps {
  isVisible: boolean;
}

const BarModal: React.FC<BarModalProps> = ({ isVisible }) => {
  const { handleOk, handleCancel, handleSelectionBar, selectedItem } = useModalSiderContext();

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
