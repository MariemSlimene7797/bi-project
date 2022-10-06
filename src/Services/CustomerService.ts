import axios from 'axios';

export type CustomerDto = {
  customerId: string;
  accountNo: string;
  name: string;
  accountOwnCategory: string;
};

export const getAllCustomer = async (): Promise<CustomerDto[]> => {
  return axios.get<CustomerDto[]>('https://localhost:7215/api/CustomerAccount/all').then((res) => res.data);
};
