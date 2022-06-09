import { Input, Modal } from 'antd';
import React, { useContext } from 'react';
import { ModalSiderContext } from '../../../contexts/ModalSiderContext';
import { ToolboxElementType } from '../../../contexts/ToolBoxContext';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PieModalProps {
  isVisible: boolean;
  item: ToolboxElementType;
}

const PieModal: React.FC<PieModalProps> = ({ isVisible, item }) => {
  const { handleOk, handleCancel, handleSelectionPie } = useContext(ModalSiderContext);

  return (
    <>
      <Modal title="Pie Form" visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="Enter object title" type="text" className="title" onChange={handleSelectionPie} />
      </Modal>
    </>
  );
};

export default PieModal;
