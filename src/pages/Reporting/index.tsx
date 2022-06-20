import React, { CSSProperties } from 'react';
import SiderReport from './SiderReport';
import { T } from '@tolgee/react';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ReportingProps {}

const Reporting: React.FC<ReportingProps> = () => {
  return (
    <div style={ReportWrapperStyle}>
      <SiderReport />
    </div>
  );
};

export default Reporting;
const ReportWrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row'
};
