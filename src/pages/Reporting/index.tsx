import React, { CSSProperties } from 'react';
import FormReport from './FormReport';
import RapportContainer from './RapportContainer';
import RequeteRaport from './RequeteRaport';
import SiderReport from './SiderReport';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ReportingProps {}

const Reporting: React.FC<ReportingProps> = () => {
  return (
    <div style={ReportWrapperStyle}>
      <SiderReport />
      <RapportContainer />
    </div>
  );
};

export default Reporting;
const ReportWrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row'
};
