import { DatePicker, DatePickerProps, Input, Modal, Space } from 'antd';
import React from 'react';
import { useReportingModalContext } from '../../contexts/ReportingModalContext';
import { parametersDto } from '../../Services/ParameterService';
import InputParams from './InputParams';

const ModalParams: React.FC = () => {
  const { handleOk, handleCancel, isVisible, SelectedItem } = useReportingModalContext();

  return (
    <>
      <Modal title={SelectedItem.name} visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <InputParams />
      </Modal>
    </>
  );
};
export default ModalParams;
