import axios from 'axios';
import { idText } from 'typescript';
import { parametersDto } from './ParameterService';
import { ProcedureDto } from './ProcedureService';
export type CompoParamDto = {
  CompoId: string;
  ParamId: string;
};

export type ComponentDto = {
  componentId: string;
  name: string;
  type: number;
  //StoredProcedure?: { id?: string; name?: string; paramIdList?: string[] };
  storedPId?: string;
  storedPName?: string;
  compoParams?: string[];
};

export const getAllComponents = async (): Promise<ComponentDto[]> => {
  return axios.get<ComponentDto[]>('https://localhost:7215/api/Component/all').then((res) => res.data);
};

export const AddComponent = async (param: Omit<ComponentDto, 'componentId'>): Promise<boolean> => {
  return axios
    .post('https://localhost:7215/api/Component/add', param)
    .then((res) => (res.status == 200 ? true : false));
};
export const getComponentsbyID = async (id: string): Promise<ComponentDto[]> => {
  return axios.get<ComponentDto[]>(`https://localhost:7215/api/Component/id=${id}`).then((res) => res.data);
};
