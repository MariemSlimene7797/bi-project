import axios from 'axios';
import { CategoryDto } from '../pages/Reporting/SiderReport';

export const getAllCategories = async (): Promise<CategoryDto[]> => {
  return axios.get<CategoryDto[]>('https://localhost:7215/api/Category/all').then((res) => res.data);
};
