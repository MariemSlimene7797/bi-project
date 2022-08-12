import { Button, Input, Modal } from 'antd';
import React, { useState } from 'react';
import { CategoryElementType, useCategoryReportcontexts } from '../../contexts/CategoryReport';
import RapportContainer from './RapportContainer';
/**contains the form of "add category" button */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FormReportProps {}

const FormReport: React.FC<FormReportProps> = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [categoryItem, setcategoryItem] = useState<CategoryElementType>({} as CategoryElementType);

  const { AddcategorytoList } = useCategoryReportcontexts();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);

    console.log(categoryItem);
    AddcategorytoList(categoryItem);

    console.log('abc');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleSelectionCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    //value of context should change according to argument 'e'

    setcategoryItem({ ...categoryItem, categoryname: e.target.value.toString() });
  };

  return (
    <>
      <Button type="primary" onClick={showModal} style={ButtonStyle}>
        Add Category
      </Button>
      <Modal title="Add Category" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input
          placeholder="Enter Category Name"
          type="text"
          className="category"
          value={categoryItem.categoryname}
          onChange={handleSelectionCategory}
        />
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
