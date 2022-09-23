import axios from 'axios';
import React from 'react';
import { parametersDto } from './ParameterService';

/*export const getAllProcedure = async (): Promise<ProcedureDto[]> => {
  return axios.get<ProcedureDto[]>('https://localhost:7215/api/Report/all').then((res) => res.data);
};

// https://localhost:7215/api/StoredProcedure/id?id=337e1fd7-4797-4ffe-adb8-7702a02e1c3d

export const getReportById = async (id: string): Promise<ReportDto> => {
  return axios.get<ReportDto>(`https://localhost:7215/api/Report/id=${id}`).then((res) => res.data);
};*/

export type ProcedureDto = {
  key: React.Key;
  procedureId: string;
  name: string;

  description: string;
  parameters: parametersDto[];
};
export const AddProcedure = async (procedure: ProcedureDto): Promise<boolean> => {
  return axios
    .post('https://localhost:7215/api/StoredProcedure/add', procedure)
    .then((res) => (res.status == 200 ? true : false));
};
