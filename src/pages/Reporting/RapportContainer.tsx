import React from 'react';
import { useReportingModalContext } from '../../contexts/ReportingModalContext';
import FormReportCreation from './FormReportCreation';

//import { useGetPosts } from './Services/HttpCommunFile';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ReportingProps {}
const Reporting: React.FC = () => {
  const { isVisible, handleCancel, handleOk } = useReportingModalContext();
  //console.log(isVisible);
  return (
    <>
      <FormReportCreation />
    </>
  );
};

export default Reporting;
