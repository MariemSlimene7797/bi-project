import axios from 'axios';
import React from 'react';
import { parametersDto } from './ParameterService';

export const getAllReports = async (): Promise<ReportDto[]> => {
  return axios.get<ReportDto[]>('https://localhost:7215/api/Report/all').then((res) => res.data);
};

// https://localhost:7215/api/StoredProcedure/id?id=337e1fd7-4797-4ffe-adb8-7702a02e1c3d

export const getReportById = async (id: string): Promise<ReportDto> => {
  return axios.get<ReportDto>(`https://localhost:7215/api/Report/id=${id}`).then((res) => res.data);
};

export type ReportDto = {
  // key: React.Key;
  ReportId: string;
  Name: string;
  CategoryId: string;
  Description: string;
  Parameters: parametersDto[];
};
export const AddReport = async (report: ReportDto): Promise<boolean> => {
  return axios.post('https://localhost:7215/api/Report/add', report).then((res) => (res.status == 200 ? true : false));
};
