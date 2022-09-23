import { UserOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import React from 'react';

const AccountInput: React.FC = () => {
  const data = [
    { label: '1st menu item', key: '1' },
    {
      label: '2nd menu item',
      key: '2'
    },
    {
      label: '3rd menu item',
      key: '3'
    }
  ];

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Select
      defaultValue={data ? data[0].label : 'cannot get data'}
      style={{ width: 120 }}
      onChange={handleChange}
      suffixIcon={<UserOutlined />}
    >
      {data.map((item, key) => (
        <Select.Option key={key} value={item.key}>
          {item.label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default AccountInput;
