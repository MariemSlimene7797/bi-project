import React, { useEffect, useState } from 'react';
import { Checkbox, Form, message, Select, Space } from 'antd';
import { Button, Input } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { CategoryDto, getAllCategories } from '../../Services/CategoryService';
import { AddReport, ReportDto } from '../../Services/ReportingService';
import FormItem from 'antd/lib/form/FormItem';
import { parametersDto, TypeOfParameter } from '../../Services/ParameterService';
//import { CheckboxChangeEvent } from 'antd/lib/checkbox';

/**realisation of the new procedure form in the settings page */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ReportSettingsProps {}
const ReportSettings: React.FC<ReportSettingsProps> = () => {
  /** strongly typed object */
  //type TypeofParam = 'CustomerList' | 'AccountList' | 'AccountOwnCategory' | 'DateTimePicker' | 'CheckBox';

  /* enum FormItems {
    name = 'name',
    category = 'category',
    inputParameters = 'inputParameters'
  }
  interface InputType {
    key: React.Key;
    value: string;
    name: string;
  }*/

  const [categoryList, setCategoryList] = useState<CategoryDto[]>();
  const [reportItem, setReportItem] = useState<ReportDto>({} as ReportDto);
  const [parameterItem, setparameterItem] = useState<parametersDto>({} as parametersDto);
  //  console.log('Received values of form:', values);
  // add new report logic
  /*********************** */
  /*  const inputParameters = values.inputParameters.map((param: any) => {
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
      parameters: [...inputParameters],
      insertDateTime: '2022-08-06T12:55:25.586Z',
      updateDateTime: '2022-08-06T12:55:25.586Z'
    };*/
  /************************ */
  // console.log('Updated values of form:', report);
  // };

  /********************* */
  const { t } = useTranslation();

  const handleRequired = (e: React.ChangeEvent<HTMLInputElement>) => {
    setparameterItem({ ...parameterItem, required: e.target.checked });
  };
  const handleSelectionName = (e: React.ChangeEvent<HTMLInputElement>) => {
    //value of context should change according to argument 'e'

    setReportItem({ ...reportItem, name: e.target.value.toString() });
  };
  const handleSelectioncategoryId = (cat: string) => {
    //value of context should change according to argument 'e'

    setReportItem({ ...reportItem, categoryId: cat });
    console.log('category', reportItem.categoryId);
  };
  const handleSelectiondescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReportItem({ ...reportItem, description: e.target.value.toString() });
  };
  const handleParamName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setparameterItem({ ...parameterItem, name: e.target.value.toString() });
  };
  const handleParamType = (param: string) => {
    setparameterItem({ ...parameterItem, parameterType: param as TypeOfParameter });
    console.log('paramtype', parameterItem.parameterType);
  };

  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategoryList(res);
        console.log('categories', res);
      })
      .catch((err) => console.log('cant get category data', err));
  }, []);
  const onFinish = (insertedItem: ReportDto) => {
    console.log('insertedvalue', reportItem);
    console.log('param', parameterItem);
    AddReport(insertedItem);
    //condition success
    message.success('report added', 30);
  };

  return (
    <Form name="New Report" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} onFinish={onFinish} autoComplete="on">
      <Form.Item
        label="Name Report"
        name={FormItem.name}
        rules={[{ required: true, message: 'Report Name Missing' }]}
        style={{ marginTop: '50px' }}
      >
        <Input
          className="name"
          placeholder="Insert Name Report Here.."
          value={reportItem.name}
          onChange={handleSelectionName}
        />
      </Form.Item>

      <Form.Item label="Category Report" rules={[{ required: true, message: 'Category Name Missing' }]}>
        <Select
          placeholder="Category"
          style={{ width: '150px' }}
          //defaultValue={categoryList && categoryList[0]}
          onSelect={handleSelectioncategoryId}
        >
          {categoryList &&
            categoryList.map((el, key) => (
              <Select.Option key={key} value={el.categoryId}>
                {el.name}
              </Select.Option>
            ))}
        </Select>
      </Form.Item>
      <Form.Item label="description Report" rules={[{ required: true, message: 'Report description Missing' }]}>
        <Input
          className="description"
          placeholder="Insert description Report Here.."
          value={reportItem.description}
          onChange={handleSelectiondescription}
        />
      </Form.Item>
      <Form.List name="inputparams">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8, marginLeft: '510px' }} align="baseline">
                <Form.Item {...restField} rules={[{ required: true, message: 'Parameter Name Missing' }]} noStyle>
                  <Input
                    placeholder="Insert Parameter Name"
                    className="name"
                    style={{ marginRight: '100px' }}
                    value={parameterItem.name}
                    onChange={handleParamName}
                  />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'type']}
                  rules={[{ required: true, message: 'Missing Parameter type' }]}
                >
                  <Select placeholder="Type Parameter" style={{ width: '150px' }} onSelect={handleParamType}>
                    {Object.keys(TypeOfParameter).map((item, key) => (
                      <Select.Option key={key} value={item}>
                        {item}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <FormItem>
                  <Checkbox>required</Checkbox>
                </FormItem>
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
/* <Form.Item
        label="Category Report"
        name={FormItem.categoryId}
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
      <Form.List name={FormItem.inputParameters}>
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
      </Form.List>*/
/* <Form.List name={FormItem.inputParameters}>
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
*/
