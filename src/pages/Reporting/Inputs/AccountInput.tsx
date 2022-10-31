import { UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Form, Menu, Select, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { getAllCustomer } from '../../../Services/CustomerService';
import { CustomerDto } from '../../../Services/CustomerService';
//import { getAllReports } from '../../../Services/ReportingService';
const AccountInput: React.FC = () => {
  return (
    <Form>
      <Form.Item>
        <MenuOverlay />
      </Form.Item>
    </Form>
  );
};

const MenuOverlay: React.FC = () => {
  const [customerItem, setCustomerItem] = useState<CustomerDto[]>();
  useEffect(() => {
    getAllCustomer()
      .then((res) => {
        setCustomerItem(res);
        console.log('customer', res);
      })
      .catch((err) => console.log('cant get customer data', err));
  }, []);
  const handleSelectCustomerId = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e', e);
  };

  return (
    <Select onSelect={handleSelectCustomerId}>
      {customerItem
        ? customerItem.map((el, key) => (
            <Select.Option key={key} value={el.accountNo}>
              {el.accountNo}
            </Select.Option>
          ))
        : undefined}
    </Select>
  );
};

export default AccountInput;
