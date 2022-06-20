import React, { useContext } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { useDashboardContext } from '../../../contexts/DashboardContext';
import DashCard from './CardDashboard';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DashboardContainerProps {}
/** mapping of the dashboardElements list and presenting eaxh element into a card*/
const DashboardContainer: React.FC<DashboardContainerProps> = () => {
  const { dashboardElements } = useDashboardContext();

  return (
    <ReactGridLayout
      style={DashboardContainerStyles}
      // isResizable={false}
      isBounded
      isDraggable
      width={1300}
      preventCollision
    >
      {dashboardElements.map((el, key) => (
        <div key={key} data-grid={el.gridLayout}>
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
