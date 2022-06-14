import React, { useContext } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { ToolBoxContext } from '../../../contexts/ToolBoxContext';
import DashCard from './CardDashboard';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DashboardContainerProps {}
/** mapping of the dashboardElements list and presenting eaxh element into a card*/
const DashboardContainer: React.FC<DashboardContainerProps> = () => {
  const { dashboardElements } = useContext(ToolBoxContext);

  return (
    <ReactGridLayout style={DashboardContainerStyles}>
      {dashboardElements.map((el, key) => (
        <div key={key}>
          <DashCard key={key} element={el} />
        </div>
      ))}
    </ReactGridLayout>
  );
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
