import { Form, Select, Space } from 'antd';
import React from 'react';
import { Button, Input } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

/**realisation of the new procedure form in the settings page */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SettingsProps {}

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
  type: string;
  name: string;
}
type OutputType = Required<InputType>;

const Settings: React.FC<SettingsProps> = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  const { t } = useTranslation();
  return (
    <Form name="New Parameter" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} onFinish={onFinish} autoComplete="off">
      <Form.Item
        label="Name"
        name={FormItems.name}
        rules={[{ required: true, message: t('settings_form_name') }]}
        style={{ marginTop: '50px' }}
      >
        <Input className="name" placeholder="insert name procedure here.." />
      </Form.Item>

      <Form.List name={FormItems.inputParameters}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8, marginLeft: '510px' }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'name']}
                  rules={[{ required: true, message: 'Missing Parameter Name' }]}
                  noStyle
                >
                  <Input placeholder="Name" className="name" style={{ marginRight: '100px' }} />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'type']}
                  rules={[{ required: true, message: 'Missing Parameter type' }]}
                >
                  <Select placeholder="type" style={{ width: '100px' }}>
                    <Select.Option value="int">Int</Select.Option>
                    <Select.Option value="string">String</Select.Option>
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
                  rules={[{ required: true, message: 'Missing Parameter Name' }]}
                  noStyle
                >
                  <Input placeholder="Name" className="name" style={{ marginRight: '100px' }} />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'type']}
                  rules={[{ required: true, message: 'Missing Parameter type' }]}
                >
                  <Select placeholder="type" style={{ width: '100px' }}>
                    <Select.Option value="int">Int</Select.Option>
                    <Select.Option value="string">String</Select.Option>
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

export default Settings;
