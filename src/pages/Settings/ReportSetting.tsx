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

    setReportItem({ ...reportItem, Name: e.target.value.toString() });
  };
  const HandleSelectioncategoryId = (cat: string) => {
    //value of context should change according to argument 'e'

    setReportItem({ ...reportItem, CategoryId: cat });
    console.log('category', reportItem.CategoryId);
  };
  const HandleSelectiondescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReportItem({ ...reportItem, Description: e.target.value.toString() });
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
    const inputParameters: any[] =
      values.inputParams &&
      values.inputParams.map((param: any) => {
        return {
          parameterSide: 0,
          name: param.name,

          parameterType: +param.type,
          required: true //param.required
        };
      });
    //inputParameters is not read even
    const Report: ReportDto = {
      ReportId: values.ReportId,

      Name: values.Name,
      CategoryId: values.CategoryId,
      Description: values.Description,
      Parameters: [parameterItem] //.filter((el) => el != 'undefined')
    };
    console.log('insertedparam', inputParameters);
    console.log('insertedvalue', reportItem);
    console.log('report:', Report);
    AddReport(Report).then((res) =>
      res ? message.success('report added successfully') : message.error('Cannot add report')
    );
  };
  const { t } = useTranslation();

  return (
    <Form name="New Report" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} onFinish={onFinish} autoComplete="on">
      <Form.Item
        label="Name Report"
        name="Name"
        // name={FormItem.name}
        rules={[{ required: true, message: 'Report Name Missing' }]}
        style={{ marginTop: '50px' }}
      >
        <Input
          className="name"
          placeholder="Insert Name Report Here.."
          value={reportItem.Name}
          onChange={HandleSelectionName}
        />
      </Form.Item>

      <Form.Item
        label="Category Report"
        name="CategoryId"
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
              <Select.Option key={key} value={el.CategoryId}>
                {el.Name}
              </Select.Option>
            ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="description Report"
        name="Description"
        rules={[{ required: true, message: 'Report description Missing' }]}
      >
        <Input
          className="description"
          placeholder="Insert description Report Here.."
          value={reportItem.Description}
          onChange={HandleSelectiondescription}
        />
      </Form.Item>
      <Form.List name="inputparams">
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
