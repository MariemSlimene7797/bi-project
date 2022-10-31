import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import { useDashboardContext } from '../../../contexts/DashboardContext';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DashboardContainerProps {}
/** mapping of the dashboardElements list and presenting eaxh element into a card*/
const DashboardContainer: React.FC<DashboardContainerProps> = () => {
  const { dashboardElements } = useDashboardContext();

  return <ReactGridLayout style={DashboardContainerStyles}></ReactGridLayout>;
};
export default DashboardContainer;

const DashboardContainerStyles: React.CSSProperties = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  overflow: 'scroll'
};
