import { PieChartOutlined, BarChartOutlined, AreaChartOutlined, TableOutlined, FundOutlined } from '@ant-design/icons';
import React, { createContext, useContext, useState } from 'react';
import { ReactGridLayoutProps } from 'react-grid-layout';
import { useTranslation } from 'react-i18next';

export type TboxItemType = 'Pie' | 'Bar' | 'Area' | 'Table' | 'Stat';
/**type of elements in both Dashboard List and Toolbox List */
export type DashboardElementType = {
  itemID?: React.Key;
  key: React.Key;
  tboxItemType: TboxItemType;
  label?: string;
  title?: string;
  icon?: React.ReactNode;
  gridLayout: { x: number; y: number; w: number; h: number };
};

/**ReactGridLayoutProps of grid Layout */
const gridLayout: ReactGridLayoutProps = {
  isDraggable: true,
  // isResizable: true;
  rowHeight: 30,
  preventCollision: true,
  compactType: null,
  cols: 12
};

/**the use of Required allows the use of all the props of type DashboardElementProps for both ToolElementType and DashboardElementType*/
export type ToolboxElementType = Required<DashboardElementType>;

interface IDashboardContext {
  // dashboard
  dashboardElements: DashboardElementType[];
  AddDashboardElement: (el: DashboardElementType) => void;
  DeleteDashboardElement: (el: DashboardElementType) => void;
  // toolbox
  toolboxElements: ToolboxElementType[];
  AddToolboxElement: (el: ToolboxElementType) => void;
  DeleteToolboxElement: (el: ToolboxElementType) => void;
}

/**context creation */
const DashboardContext = createContext<IDashboardContext>({} as IDashboardContext);
const DashboardContextProvider: React.FC = ({ children }) => {
  const { t } = useTranslation();
  /**values of elements of toolbox list */
  const TBOX_ELEMENTS: ToolboxElementType[] = [
    {
      itemID: '0',
      key: '0',
      icon: <PieChartOutlined />,
      label: t('Pie_Chart'),
      title: '',
      tboxItemType: 'Pie',
      gridLayout: { x: 0, y: 0, w: 5, h: 2 }
    },
    {
      itemID: '1',
      key: '1',
      icon: <BarChartOutlined />,
      label: t('Bar_Chart'),
      title: '',
      tboxItemType: 'Bar',
      gridLayout: { x: 0, y: 0, w: 5, h: 3.5 }
    },
    {
      itemID: '2',
      key: '2',
      icon: <AreaChartOutlined />,
      label: t('Area_Chart'),
      title: '',
      tboxItemType: 'Area',
      gridLayout: { x: 0, y: 0, w: 5, h: 3.5 }
    },
    {
      itemID: '3',
      key: '3',
      icon: <TableOutlined />,
      label: t('Data_Table'),
      title: '',
      tboxItemType: 'Table',
      gridLayout: { x: 0, y: 0, w: 5, h: 2 }
    },
    {
      itemID: '4',
      key: '4',
      icon: <FundOutlined />,
      label: t('Statistic_Card'),
      title: '',
      tboxItemType: 'Stat',
      gridLayout: { x: 0, y: 0, w: 5, h: 2 }
    }
  ];

  const [dashboardElements, setDashboardElements] = useState<DashboardElementType[]>([]);
  const [toolboxElements, setToolboxElements] = useState<ToolboxElementType[]>(TBOX_ELEMENTS);

  const AddDashboardElement = (el: DashboardElementType) => {
    console.log(dashboardElements);
    setDashboardElements([...dashboardElements, el]);
  };
  const DeleteDashboardElement = (el: DashboardElementType) => {
    setDashboardElements(dashboardElements.filter((_el) => _el.itemID !== el.itemID));
  };
  const AddToolboxElement = (el: ToolboxElementType) => {
    setToolboxElements([...toolboxElements, el]);
  };
  const DeleteToolboxElement = (el: ToolboxElementType) => {
    setToolboxElements(toolboxElements.filter((_el) => _el.key !== el.key));
  };

  return (
    <DashboardContext.Provider
      value={{
        dashboardElements,
        AddDashboardElement,
        DeleteDashboardElement,
        toolboxElements,
        AddToolboxElement,
        DeleteToolboxElement
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = (): IDashboardContext => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboardContext must be used within a DashboardContextProvider');
  }
  return context;
};
export default DashboardContextProvider;
