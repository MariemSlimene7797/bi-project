import { Cascader, Form, InputNumber, Modal, Select, Space } from 'antd';
import React from 'react';
import { Button, Input } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SettingsProps {}
const onFinish = (values: any) => {
  console.log('Success:', values);
};
interface Option {
  value: string;
  label: string;
}

const Settings: React.FC<SettingsProps> = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  return (
    <Form name="New Parameter" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} onFinish={onFinish} autoComplete="off">
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input the name of the procedure!' }]}
      >
        <Input />
      </Form.Item>

      <Form.List name="input">
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
                  <Input placeholder="Name" style={{ marginRight: '100px' }} />
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
                <PlusCircleOutlined onClick={() => add(name)} />
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

      <Form.List name="output">
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
                  <Input placeholder="Name" style={{ marginRight: '100px' }} />
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
                <PlusCircleOutlined onClick={() => add(name)} />
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
