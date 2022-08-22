import axios from 'axios';
import { spType } from '../pages/Reporting/TestComp';

export const getAllReports = async (): Promise<spType[]> => {
  return axios.get<spType[]>('https://localhost:7215/api/StoredProcedure/all').then((res) => res.data);
};

// https://localhost:7215/api/StoredProcedure/id?id=337e1fd7-4797-4ffe-adb8-7702a02e1c3d

export const getReportById = async (id: string): Promise<spType> => {
  return axios.get<spType>(`https://localhost:7215/api/StoredProcedure/id?id=${id}`).then((res) => res.data);
};

export type AddReportDto = {
  name: string;
  categoryId: string;
  description: string;
  parameters: {
    name: string;
    parameterType: number;
    required: boolean;
  }[];
};
export const AddReport = async (param: AddReportDto): Promise<boolean> => {
  return axios.post('https://localhost:7215/api/Report/add', param).then((res) => (res.status == 200 ? true : false));
};
