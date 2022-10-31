import axios from 'axios';

/** will get inside the procedure , execute it and extrct the info from it */

export const getData = async <T>(param: {
  name: string;
  paramList: {
    name: string;
    value: string;
  }[];
}): Promise<T> => {
  return axios.post<T>('https://localhost:7215/api/Data/GetData', param).then((res) => res.data);
};
