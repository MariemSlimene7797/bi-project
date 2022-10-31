import React, { useEffect, useState } from 'react';
import { Checkbox, Form, message, Select, Space } from 'antd';
import { Button, Input } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { CategoryDto, getAllCategories } from '../../Services/CategoryService';
import { AddReport, ReportDto } from '../../Services/ReportingService';
import FormItem from 'antd/lib/form/FormItem';
import { parametersDto, TypeOfParameter } from '../../Services/ParameterService';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
//import { CheckboxChangeEvent } from 'antd/lib/checkbox';

/**realisation of the new procedure form in the settings page */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ReportSettingsProps {}
const ReportSettings: React.FC<ReportSettingsProps> = () => {
  const [categoryList, setCategoryList] = useState<CategoryDto[]>();
  const [reportItem, setReportItem] = useState<ReportDto>({} as ReportDto);
  const [parameterItem, setparameterItem] = useState<parametersDto>({} as parametersDto);

  /********************* */

  const HandleRequired = (e: CheckboxChangeEvent) => {
    setparameterItem({ ...parameterItem, required: e.target.checked });
    console.log('required', parameterItem.required);
  };
  const HandleSelectionName = (e: React.ChangeEvent<HTMLInputElement>) => {
    //value of context should change according to argument 'e'

    setReportItem({ ...reportItem, name: e.target.value.toString() });
  };
  const HandleSelectioncategoryId = (cat: string) => {
    //value of context should change according to argument 'e'

    setReportItem({ ...reportItem, categoryId: cat });
    console.log('category', reportItem.categoryId);
  };
  const HandleSelectiondescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReportItem({ ...reportItem, description: e.target.value.toString() });
  };
  const HandleParamName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setparameterItem({ ...parameterItem, name: e.target.value.toString() });
  };
  const HandleParamType = (param: string) => {
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

  const onFinish = (values: any) => {
    console.log('values', values);
    const inputParameters: parametersDto[] =
      values.parameters &&
      values.parameters.map((param: { name: string; type: string; required: boolean }) => {
        return {
          parameterSide: 0,
          name: param.name,
          parameterType: Object.keys(TypeOfParameter).indexOf(param.type),
          required: param.required //param.required
        };
      });

    const Report: Omit<ReportDto, 'reportId'> = {
      name: values.name,
      categoryId: values.categoryId,
      description: values.description,
      parameters: inputParameters //.filter((el) => el != 'undefined')
    };

    console.log('Report', Report);
    AddReport(Report).then((res) =>
      res ? message.success('report added successfully') : message.error('Cannot add report')
    );
  };
  const { t } = useTranslation();

  return (
    <Form name="New Report" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} onFinish={onFinish} autoComplete="off">
      <Form.Item
        label="Name Report"
        name="name"
        // name={FormItem.name}
        rules={[{ required: true, message: 'Report Name Missing' }]}
        style={{ marginTop: '50px' }}
      >
        <Input
          className="name"
          placeholder="Insert Name Report Here.."
          value={reportItem.name}
          onChange={HandleSelectionName}
        />
      </Form.Item>

      <Form.Item
        label="Category Report"
        name="categoryId"
        rules={[{ required: true, message: 'Category Name Missing' }]}
      >
        <Select
          className="categoryId"
          placeholder="Category"
          style={{ width: '150px' }}
          //defaultValue={categoryList && categoryList[0]}
          onSelect={HandleSelectioncategoryId}
        >
          {categoryList &&
            categoryList.map((el, key) => (
              <Select.Option key={key} value={el.categoryId}>
                {el.name}
              </Select.Option>
            ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="description Report"
        name="description"
        rules={[{ required: true, message: 'Report description Missing' }]}
      >
        <Input
          className="description"
          placeholder="Insert description Report Here.."
          value={reportItem.description}
          onChange={HandleSelectiondescription}
        />
      </Form.Item>
      <Form.List name="parameters">
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
                    onChange={HandleParamName}
                  />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'type']}
                  rules={[{ required: true, message: 'Missing Parameter type' }]}
                >
                  <Select placeholder="Type Parameter" style={{ width: '150px' }} onSelect={HandleParamType}>
                    {Object.keys(TypeOfParameter).map((item, key) => (
                      <Select.Option key={key} value={item}>
                        {item}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <FormItem name={[name, 'required']}>
                  <Checkbox onChange={HandleRequired} value={parameterItem.required}>
                    required
                  </Checkbox>
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
