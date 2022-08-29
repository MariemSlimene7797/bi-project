import axios from 'axios';
import { reportType } from '../pages/Reporting/TestComp';

export const getAllReports = async (): Promise<reportType[]> => {
  return axios.get<reportType[]>('https://localhost:7215/api/Report/all').then((res) => res.data);
};

// https://localhost:7215/api/StoredProcedure/id?id=337e1fd7-4797-4ffe-adb8-7702a02e1c3d

export const getReportById = async (id: string): Promise<reportType> => {
  return axios.get<reportType>(`https://localhost:7215/api/Report/id=${id}`).then((res) => res.data);
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
/*
export const AddReportExemple= async (AddReportDto):Promise<boolean>=>{
  return axios.post('')
}*/
