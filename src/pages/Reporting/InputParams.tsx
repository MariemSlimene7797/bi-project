import { DatePicker, DatePickerProps, Form, Space } from 'antd';
import Checkbox, { CheckboxChangeEvent } from 'antd/lib/checkbox';
import FormItem from 'antd/lib/form/FormItem';
import React from 'react';
import { useReportingModalContext } from '../../contexts/ReportingModalContext';
import { parametersDto, TypeOfParameter } from '../../Services/ParameterService';
import AccountInput from './Inputs/AccountInput';
import CustomerInput from './Inputs/CustomerInput';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InputParamsProps {}

const InputParams: React.FC<InputParamsProps> = () => {
  const { SelectedItem } = useReportingModalContext();
  const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  const onChangeCB = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const dateFormat = 'DD/MM/YYYY';

  const parameterTypeFonction = (param: parametersDto) => {
    switch (param.parameterType.toString()) {
      case '2': {
        return (
          <Space direction="vertical" size={12}>
            <DatePicker format={dateFormat} onChange={onChangeDate} />
          </Space>
        );
      }
      case '0': {
        return <CustomerInput />;
      }
      case '1': {
        return <AccountInput />;
      }
      case '3': {
        return <Checkbox onChange={onChangeCB} />;
      }
    }
  };

  return (
    <Form>
      {SelectedItem &&
        SelectedItem.parameters &&
        SelectedItem.parameters.map((param, key) => (
          <FormItem
            key={key}
            label={param.name}
            name={param.name}
            rules={[{ required: param.required, message: 'Parameter Value Missing' }]}
          >
            {parameterTypeFonction(param)}
          </FormItem>
        ))}
    </Form>
  );
};

export default InputParams;
