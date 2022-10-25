import { Button, Form, Input, message, Modal } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import React, { useState } from 'react';
import { CategoryElementType, useCategoryReportcontexts } from '../../contexts/CategoryReport';
import { AddCategory, CategoryDto } from '../../Services/CategoryService';

/**contains the form of "add category" button */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FormCategoryProps {}

const FormCategory: React.FC<FormCategoryProps> = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [categoryItem, setcategoryItem] = useState<CategoryDto>({} as CategoryDto);

  // const { AddcategorytoList } = useCategoryReportcontexts();
  const info = () => {
    //condition
    message.success('new category added', 30);
    window.location.reload();
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);

    console.log(categoryItem);
    AddCategory(categoryItem);
    info();

    console.log('abc');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleSelectionCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    //value of context should change according to argument 'e'

    setcategoryItem({ ...categoryItem, Name: e.target.value.toString() });
  };
  const handleSelectionCategoryDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    //value of context should change according to argument 'e'

    setcategoryItem({ ...categoryItem, Description: e.target.value.toString() });
  };
  return (
    <>
      <Button type="primary" onClick={showModal} style={ButtonStyle}>
        Add Category
      </Button>
      <Modal title="Add Category" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form>
          <FormItem label="Category Name">
            <Input
              placeholder="Enter Category Name"
              type="text"
              className="category"
              value={categoryItem.Name}
              onChange={handleSelectionCategoryName}
            />
          </FormItem>
          <FormItem label="Category Description">
            <Input
              placeholder="Enter Category Description"
              type="text"
              className="Category"
              value={categoryItem.Description}
              onChange={handleSelectionCategoryDesc}
            />
          </FormItem>
        </Form>
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
