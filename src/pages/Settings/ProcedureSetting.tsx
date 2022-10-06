import { Form, message, Select, Space } from 'antd';
import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { AddProcedure, ProcedureDto } from '../../Services/ProcedureService';
import { parametersDto } from '../../Services/ParameterService';

/**realisation of the new procedure form in the settings page */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ProcedureSettingsProps {}
const ProcedureSettings: React.FC<ProcedureSettingsProps> = () => {
  const [procedureItem, setprocedureItem] = useState<ProcedureDto>({} as ProcedureDto);
  const [parameterItem, setparameterItem] = useState<parametersDto>({} as parametersDto);

  const HandleProcedureName = (e: React.ChangeEvent<HTMLInputElement>) => {
    //value of context should change according to argument 'e'

    setprocedureItem({ ...procedureItem, name: e.target.value.toString() });
  };
  const HandleParameterInName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setparameterItem({ ...parameterItem, name: e.target.value.toString() });
  };

  const onFinish = (values: any) => {
    //console.log('Received values of form:', values);
    // add new report logic

    const inputParameters: any[] =
      values.inputParams &&
      values.inputParams.map((param: any) => {
        return {
          parameterSide: 0,
          name: param.name,
          parameterType: +param.type,
          required: true
        };
      });

    const outputParameters: any[] =
      values.outputParams &&
      values.outputParams.map((param: any) => {
        return {
          parameterSide: 1,
          name: param.name,
          parameterType: +param.type,
          required: true
        };
      });

    const Procedure: ProcedureDto = {
      storedProcedureId: values.procedureId,
      name: values.procedureName,
      description: 'react Test data',
      parameters: [...outputParameters].concat(inputParameters).filter((el) => el != 'undefined'),
      insertDateTime: '2022-08-06T12:55:25.586Z',
      updateDateTime: '2022-08-06T12:55:25.586Z'
    };
    console.log('param', outputParameters);
    console.log('Procedure:', Procedure);
    AddProcedure(Procedure).then((res) =>
      res ? message.success('Procedure added successfully') : message.error('Cannot add procedure')
    );
  };

  const { t } = useTranslation();
  return (
    <Form
      name="NewStoredProcedure"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      onFinish={onFinish}
      autoComplete="on"
    >
      <Form.Item
        name="procedureName"
        label="Name Procedure"
        rules={[{ required: true, message: 'Name Procedure Missing' }]}
        style={{ marginTop: '50px' }}
      >
        <Input
          className="name"
          placeholder="Insert Name Procedure Here.."
          value={procedureItem.name}
          onChange={HandleProcedureName}
        />
      </Form.Item>

      <Form.List name="inputParams">
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
                  <Input
                    placeholder="Insert Parameter Name"
                    className="name"
                    style={{ marginRight: '100px' }}
                    value={parameterItem.name}
                    onChange={HandleParameterInName}
                  />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'type']}
                  rules={[{ required: true, message: 'Parameter Type Missing' }]}
                >
                  <Select placeholder="Parameter Type" style={{ width: '150px' }}>
                    <Select.Option value={0}>Int</Select.Option>
                    <Select.Option value={1}>String</Select.Option>
                    <Select.Option value={2}>Datetime</Select.Option>
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

      <Form.List name="outputParams">
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
                    <Select.Option value={2}>Datetime</Select.Option>
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
