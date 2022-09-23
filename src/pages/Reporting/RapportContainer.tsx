import React from 'react';
import { useReportingModalContext } from '../../contexts/ReportingModalContext';

import ModalParams from './ModalParams';
import ReportViewerModule from './ReportViewerModule';

//import { useGetPosts } from './Services/HttpCommunFile';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ReportingProps {}
const Reporting: React.FC = () => {
  const { isVisible, handleCancel, handleOk } = useReportingModalContext();
  //console.log(isVisible);
  return (
    <>
      <ModalParams />
      <ReportViewerModule />
    </>
  );
};

export default Reporting;
