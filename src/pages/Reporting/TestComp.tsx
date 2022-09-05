import { Menu } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CategoryDto } from '../../Services/CategoryService';
import { getAllReports, getReportById } from '../../Services/ReportingService';

export type reportType = {
  reportId: string;
  categoryId: string;
  name: string;
  description: string;
  parameters: null;
  insertDateTime: string;
  updateDateTime: string;
};
const TestComp: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [reports, setReports] = useState<reportType[]>();
  const [categoryList, setCategoryList] = useState<CategoryDto[]>();
  /*  useEffect(() => {
    // Get API Data
    getAllReports()
      .then((res) => {
        setReports(res);
        console.log('reports', res);
      })
      .catch((err) => console.log('cant get reports data', err));
  }, []);*/

  return (
    <>
      {isLoading && reports ? (
        reports.map((el, key) => <div key={key}>{el.categoryId}</div>)
      ) : (
        <div> Data is Loading please wait ...</div>
      )}
      ;
    </>
  );
};

export default TestComp;
