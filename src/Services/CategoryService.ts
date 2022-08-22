import axios from 'axios';

export type CategoryDto = {
  categoryId: string;
  name: string;
  description: string;
};

export const getAllCategories = async (): Promise<CategoryDto[]> => {
  return axios.get<CategoryDto[]>('https://localhost:7215/api/Category/all').then((res) => res.data);
};
