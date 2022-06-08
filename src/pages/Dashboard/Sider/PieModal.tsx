import { Input, Modal, Select } from 'antd';
import React, { useContext, useState } from 'react';
import { PieChart } from 'recharts';
import { ModalSiderContext } from '../../../contexts/ModalSiderContext';
import { ToolBoxContext, DashboardElementsType } from '../../../contexts/ToolBoxContext';
import PieChartTool from '../DashboardContainer/PieChartTool';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PieModalProps {}

const PieModal: React.FC<PieModalProps> = () => {
  const { AddDashboardElement, DeleteDashboardElement, dashboardElements } = useContext(ToolBoxContext);
  const { isVisible } = useContext(ModalSiderContext);

  const { selectedItem } = useContext(ModalSiderContext);
  const { handleOk, handleCancel, handleOpen, handleSelectionPie, handleClick } = useContext(ModalSiderContext);

  return (
    <>
      <Modal title="Title of Pie Chart" visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input
          placeholder="Enter object title"
          type="text"
          className="title"
          value={selectedItem.title || ''}
          onChange={handleSelectionPie}
        />
      </Modal>
    </>
  );
};

export default PieModal;
