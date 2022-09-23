import { DatePicker, DatePickerProps, Form, Input, Space } from 'antd';
import Checkbox, { CheckboxChangeEvent } from 'antd/lib/checkbox';
import FormItem from 'antd/lib/form/FormItem';
import React from 'react';
import ReactToPrint from 'react-to-print';
import { useReportingModalContext } from '../../contexts/ReportingModalContext';
import { parametersDto } from '../../Services/ParameterService';
import { ReportDto } from '../../Services/ReportingService';
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

  const parameterTypeFonction = (param: any) => {
    switch (param.parameterType) {
      case 3: {
        return (
          <Space direction="vertical" size={12}>
            <DatePicker format={dateFormat} onChange={onChangeDate} />
          </Space>
        );
      }
      case 1: {
        return <CustomerInput />;
      }
      case 0: {
        return <AccountInput />;
      }
      case 4: {
        return <Checkbox onChange={onChangeCB} />;
      }
    }
  };

  return (
    <>
      {SelectedItem &&
        SelectedItem.parameters.map((param, key) => (
          <Form key={key}>
            <FormItem
              label={param.name}
              name={FormItem.name}
              rules={[{ required: param.required, message: 'Parameter Value Missing' }]}
            >
              {parameterTypeFonction(param)}
            </FormItem>
          </Form>
        ))}
    </>
  );
};

export default InputParams;
