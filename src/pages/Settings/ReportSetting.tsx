import React, { useEffect, useState } from 'react';
import { Form, message, Select, Space } from 'antd';

import { Button, Input } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { AddReport, AddReportDto } from '../../Services/ReportingService';
import { useCategoryReportcontexts } from '../../contexts/CategoryReport';
import { getAllCategories } from '../../Services/CategoryService';
import { CategoryDto } from '../Reporting/SiderReport';

/**realisation of the new procedure form in the settings page */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ReportSettingsProps {}
const ReportSettings: React.FC<ReportSettingsProps> = () => {
  const [categoryList, setCategoryList] = useState<CategoryDto[]>();
  /** strongly typed object */
  enum FormItems {
    name = 'name',
    category = 'category',
    inputParameters = 'inputParameters'
  }

  interface InputType {
    key: React.Key;
    value: string;
    name: string;
  }

  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
    // add new report logic
    /************************** */
    const inputParameters = values.inputParameters.map((param: any) => {
      return {
        name: param.name,
        parameterType: +param.type,
        required: true
      };
    });

    const Report: AddReportDto = {
      name: values.name,
      categoryId: values.category,
      description: 'react Test data',
      parameters: [...inputParameters]
    };
    /********************* */
    console.log('Updated values of form:', Report);
    AddReport(Report).then((res) => {
      res === true ? message.success('Report Added successfully') : message.error('Error while adding report');
    });
  };

  const { t } = useTranslation();

  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategoryList(res);
        console.log('categories', res);
      })
      .catch((err) => console.log('cant get category data', err));
  }, []);

  return (
    <Form name="New Report" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} onFinish={onFinish} autoComplete="on">
      <Form.Item
        label="Name Report"
        name={FormItems.name}
        rules={[{ required: true, message: 'Report Name Missing' }]}
        style={{ marginTop: '50px' }}
      >
        <Input className="name" placeholder="Insert Name Report Here.." />
      </Form.Item>
      <Form.Item
        label="Category Report"
        name={FormItems.category}
        rules={[{ required: true, message: 'Category Name Missing' }]}
      >
        <Select placeholder="Category" style={{ width: '150px' }} defaultValue={categoryList && categoryList[0]}>
          {categoryList &&
            categoryList.map((el, key) => (
              <Select.Option key={key} value={el.categoryId}>
                {el.name}
              </Select.Option>
            ))}
        </Select>
      </Form.Item>

      <Form.List name={FormItems.inputParameters}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8, marginLeft: '510px' }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'name']}
                  rules={[{ required: true, message: 'Parameter Name Missing' }]}
                  noStyle
                >
                  <Input placeholder="Insert Parameter Name" className="name" style={{ marginRight: '100px' }} />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'type']}
                  rules={[{ required: true, message: 'Missing Parameter type' }]}
                >
                  <Select placeholder="Type Parameter" style={{ width: '150px' }}>
                    <Select.Option value={0}>Int</Select.Option>
                    <Select.Option value={1}>String</Select.Option>
                  </Select>
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} style={{ marginLeft: '510px' }}>
                Add Input field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReportSettings;
