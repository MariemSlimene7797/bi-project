import axios from 'axios';
enum ParameterSide {
  Input,
  Output
}

export enum TypeOfParameter {
  CustomerList = 'customer List',
  AccountList = 'account list',
  AccountOwnCategory = 'account own category',
  DateTimePicker = 'date time picker',
  CheckBox = 'check box'
}
export type parametersDto = {
  parameterId: string;
  parameterSide: ParameterSide;

  name: string;
  parameterType: TypeOfParameter; //
  required: boolean;
  elementId: string;

  insertDateTime: string;
  updateDateTime: string;
};
export const getAllparameters = async (id: string): Promise<parametersDto[]> => {
  return axios
    .get<parametersDto[]>(`https://localhost:7215/api/Parameter/AllbyId?ElementId=${id}`)
    .then((res) => res.data);
};
