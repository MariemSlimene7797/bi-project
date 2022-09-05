import { Button, Input, Modal } from 'antd';
import React, { useState } from 'react';
import { CategoryElementType, useCategoryReportcontexts } from '../../contexts/CategoryReport';
import { AddCategory, CategoryDto } from '../../Services/CategoryService';
import RapportContainer from './RapportContainer';

/**contains the form of "add category" button */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FormCategoryProps {}

const FormCategory: React.FC<FormCategoryProps> = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [categoryItem, setcategoryItem] = useState<CategoryDto>({} as CategoryDto);

  const { AddcategorytoList } = useCategoryReportcontexts();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);

    console.log(categoryItem);
    AddCategory(categoryItem);

    console.log('abc');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleSelectionCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    //value of context should change according to argument 'e'

    setcategoryItem({ ...categoryItem, name: e.target.value.toString() });
  };
  const handleSelectionCategoryDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    //value of context should change according to argument 'e'

    setcategoryItem({ ...categoryItem, description: e.target.value.toString() });
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
          value={categoryItem.name}
          onChange={handleSelectionCategoryName}
        />
        <Input
          placeholder="Enter Category Description"
          type="text"
          className="Category"
          value={categoryItem.description}
          onChange={handleSelectionCategoryDesc}
        />
      </Modal>
    </>
  );
};

export default FormCategory;
const ButtonStyle: React.CSSProperties = {
  backgroundColor: 'white',
  color: '#1890ff',
  height: '50px',
  width: '200px',
  fontSize: '15px',
  borderColor: 'whitesmoke',
  alignContent: 'left'
};
