import axios from 'axios';
enum ParameterSide {
  Input,
  Output
}

enum ParameterType {
  CustomerList,
  AccountList,
  AccountOwnCategory,
  DateTimePicker,
  CheckBox
}
export type parametersType = {
  parameterId: string;
  parameterSide: ParameterSide;

  name: string;
  parameterType: ParameterType; //
  required: boolean;
  elementId: string;

  insertDateTime: string;
  updateDateTime: string;
};
export const getAllparameters = async (id: string): Promise<parametersType[]> => {
  return axios
    .get<parametersType[]>(`https://localhost:7215/api/Parameter/AllbyId?ElementId=${id}`)
    .then((res) => res.data);
};
