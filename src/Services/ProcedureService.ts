import axios from 'axios';
import { parametersDto } from './ParameterService';

export const getAllProcedure = async (): Promise<ProcedureDto[]> => {
  return axios.get<ProcedureDto[]>('https://localhost:7215/api/StoredProcedure/all').then((res) => res.data);
};

// https://localhost:7215/api/StoredProcedure/id?id=337e1fd7-4797-4ffe-adb8-7702a02e1c3d

export const getProcedureById = async (id: string): Promise<ProcedureDto> => {
  return axios.get<ProcedureDto>(`https://localhost:7215/api/StoredProcedure/id=${id}`).then((res) => res.data);
};

export type ProcedureDto = {
  storedProcedureId: string;
  name: string;
  description?: string;
  parameters?: parametersDto[];
  insertDateTime?: string;
  updateDateTime?: string;
};

export const AddProcedure = async (procedure: ProcedureDto): Promise<boolean> => {
  return axios
    .post('https://localhost:7215/api/StoredProcedure/add', procedure)
    .then((res) => (res.status == 200 ? true : false));
};
