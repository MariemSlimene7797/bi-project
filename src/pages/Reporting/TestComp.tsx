import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getAllReports, getReportById } from '../../Services/ReportingService';

export type spType = {
  storedProcedureId: string;
  name: string;
  description: string;
  parameters: null;
  insertDateTime: string;
  updateDateTime: string;
};
const TestComp: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [reports, setReports] = useState<spType[]>();

  useEffect(() => {
    // Get API Data
    getAllReports().then((res) => {
      setReports(res);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      {!isLoading && reports ? (
        reports.map((el, key) => (
          <div key={key}>
            <div>{el.name}</div>
            <div>{el.description}</div>
          </div>
        ))
      ) : (
        <div> Data is Loading please wait ...</div>
      )}
    </>
  );
};

export default TestComp;
