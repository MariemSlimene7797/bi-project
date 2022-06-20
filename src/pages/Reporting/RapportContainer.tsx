import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ReportingProps {}
type reportType = {
  key: React.Key;
  title: string;
  fav: boolean;
};
const ListReports: reportType[] = [
  { key: '0', title: 'raport 1', fav: false },
  {
    key: '1',
    title: 'raport 2',
    fav: false
  }
];
const Reporting: React.FC<ReportingProps> = () => {
  return <></>;
};

export default Reporting;
