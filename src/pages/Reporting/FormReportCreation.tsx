import { Modal } from 'antd';
import React from 'react';
import { useReportingModalContext } from '../../contexts/ReportingModalContext';
import ModalParams from './ModalParams';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FormReportCreationProps {
  // isVisible: boolean;
}

const FormReportCreation: React.FC<FormReportCreationProps> = () => {
  //const [isvisible, setisVisible] = useState(true);
  const { handleOk, handleCancel, isVisible, SelectedItem } = useReportingModalContext();

  //const [isModalVisible, setIsModalVisible] = useState(true);

  //console.log('modal', isVisible);

  return (
    <>
      <Modal title={SelectedItem.name} visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <ModalParams />
      </Modal>
    </>
  );
};

export default FormReportCreation;
