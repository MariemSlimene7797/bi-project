import React from 'react';
import { Form, Select, Space } from 'antd';

import { Button, Input } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { AddReport } from '../../Services/ReportingService';

/**realisation of the new procedure form in the settings page */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ReportSettingsProps {}

type ReportType = {
  key: React.Key;
  name: string;
  inputParameters: InputType[];
  category: string;
};
/** strongly typed object */
enum FormItems {
  name = 'Name',
  category = 'Category',
  inputParameters = 'inputParameters'
}

interface InputType {
  key: React.Key;
  value: string;
  name: string;
}

const ReportSettings: React.FC<ReportSettingsProps> = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
    // add new report logic
    const inputParameters = values.inputParameters.map((param: any) => {
      return {
        parameterSide: 0,
        name: param.name,
        parameterType: +param.type,
        required: true
      };
    });

    const Report = {
      name: values.name,
      description: 'react Test data',
      parameters: [...inputParameters],
      category: 'bi'
    };

    console.log('Updated values of form:', Report);
    //  AddReport(Report);
  };

  const { t } = useTranslation();
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
        name={FormItems.name}
        rules={[{ required: true, message: 'Category Name Missing' }]}
      >
        <Select placeholder="Category" style={{ width: '150px' }}>
          <Select.Option value={0}>XX</Select.Option>
          <Select.Option value={1}>YY</Select.Option>
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
