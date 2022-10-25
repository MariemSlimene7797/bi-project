import axios from 'axios';

export type CategoryDto = {
  categoryId: string;
  name: string;
  description: string;
};

export const getAllCategories = async (): Promise<CategoryDto[]> => {
  return axios.get<CategoryDto[]>('https://localhost:7215/api/Category/all').then((res) => res.data);
};
export const AddCategory = async (param: CategoryDto): Promise<boolean> => {
  return axios.post('https://localhost:7215/api/Category/add', param).then((res) => (res.status == 200 ? true : false));
};
