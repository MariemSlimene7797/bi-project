import { Form, Input, Modal } from 'antd';
import React from 'react';
import { ToolboxElementType } from '../../../contexts/DashboardContext';
import { useModalSiderContext } from '../../../contexts/ModalSiderContext';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AreaModalProps {
  isVisible: boolean;
}

const AreaModal: React.FC<AreaModalProps> = ({ isVisible }) => {
  const { handleOk, handleCancel, handleSelectionArea, selectedItem } = useModalSiderContext();

  return (
    <>
      <Modal title="Area Form" visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form>
          <Form.Item label="Chart Name">
            <Input
              placeholder="Enter object title"
              type="text"
              className="title"
              value={selectedItem.title}
              onChange={handleSelectionArea}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AreaModal;
