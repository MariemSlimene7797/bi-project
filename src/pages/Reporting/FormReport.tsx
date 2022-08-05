import { Button, Input, Modal } from 'antd';
import React, { useState } from 'react';
import RapportContainer from './RapportContainer';
/**contains the form of "add category" button */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FormReportProps {}

const FormReport: React.FC<FormReportProps> = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} style={ButtonStyle}>
        Add Category
      </Button>
      <Modal title="Create Report" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="Enter title" type="text" className="title" />
        <Input placeholder="Enter category" type="text" className="category" />
      </Modal>
    </>
  );
};

export default FormReport;
const ButtonStyle: React.CSSProperties = {
  backgroundColor: 'white',
  color: '#1890ff',
  height: '50px',
  width: '200px',
  fontSize: '15px',
  borderColor: 'whitesmoke',
  alignContent: 'left'
};
