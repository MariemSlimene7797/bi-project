import { Form, Select, Space } from 'antd';
import React from 'react';
import { Button, Input } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { AddReport } from '../../Services/ReportingService';

/**realisation of the new procedure form in the settings page */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ProcedureSettingsProps {}

type ProcedureType = {
  key: React.Key;
  name: string;
  inputParameters?: InputType[];
  outputParameters: OutputType[];
};
/** strongly typed object */
enum FormItems {
  name = 'name',
  inputParameters = 'inputParameters',
  outputParameters = 'outputParameters'
}

interface InputType {
  key: React.Key;
  value: string;
  name: string;
}
type OutputType = Required<InputType>;

const ProcedureSettings: React.FC<ProcedureSettingsProps> = () => {
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
    const outputParameters = values.outputParameters.map((param: any) => {
      return {
        parameterSide: 1,
        name: param.name,
        parameterType: +param.type,
        required: true
      };
    });
    const report = {
      name: values.name,
      description: 'react Test data',
      parameters: [...inputParameters, ...outputParameters],
      insertDateTime: '2022-08-06T12:55:25.586Z',
      updateDateTime: '2022-08-06T12:55:25.586Z'
    };

    console.log('Updated values of form:', report);
  };

  const { t } = useTranslation();
  return (
    <Form name="New Parameter" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} onFinish={onFinish} autoComplete="on">
      <Form.Item
        label="Name Procedure"
        name={FormItems.name}
        rules={[{ required: true, message: 'Name Procedure Missing' }]}
        style={{ marginTop: '50px' }}
      >
        <Input className="name" placeholder="Insert Name Procedure Here.." />
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
                  rules={[{ required: true, message: 'Parameter Type Missing' }]}
                >
                  <Select placeholder="Parameter Type" style={{ width: '150px' }}>
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

      <Form.List name={FormItems.outputParameters}>
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
                  <Input placeholder=" Insert Parameter Name" className="name" style={{ marginRight: '100px' }} />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'type']}
                  rules={[{ required: true, message: 'Parameter Type Missing' }]}
                >
                  <Select placeholder="Parameter Type" style={{ width: '150px' }}>
                    <Select.Option value={0}>Int</Select.Option>
                    <Select.Option value={1}>String</Select.Option>
                  </Select>
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} style={{ marginLeft: '510px' }}>
                Add Output field
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

export default ProcedureSettings;
