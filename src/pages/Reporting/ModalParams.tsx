import React from 'react';
import { useReportingModalContext } from '../../contexts/ReportingModalContext';

const Afficheparams: React.FC = () => {
  const { SelectedItem } = useReportingModalContext();

  return <>{SelectedItem && SelectedItem.parameters.map((param, key) => <div key={key}> {param.name}</div>)}</>;
};

export default Afficheparams;
