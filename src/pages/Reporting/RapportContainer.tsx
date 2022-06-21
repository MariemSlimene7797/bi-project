import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ReportingProps {}
const siderData: { id: number; name: string; category: string }[] = [
  { id: 0, name: 'Report 1', category: 'Bourse' },
  { id: 1, name: 'Report 2', category: 'CRM' },
  { id: 2, name: 'Report 3', category: 'Direction Generale' },
  { id: 3, name: 'Report 4', category: 'CRM' }
];

const favourites: number[] = [2];

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
