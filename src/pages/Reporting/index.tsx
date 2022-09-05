import React, { CSSProperties } from 'react';
import ReportingModalContextProvider from '../../contexts/ReportingModalContext';
import FormCategory from './FormCategory';
import RapportContainer from './RapportContainer';

import SiderReport from './SiderReport';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ReportingProps {}

const Reporting: React.FC<ReportingProps> = () => {
  return (
    <div style={ReportWrapperStyle}>
      <ReportingModalContextProvider>
        <SiderReport />
        <RapportContainer />
      </ReportingModalContextProvider>
    </div>
  );
};

export default Reporting;
const ReportWrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row'
};
