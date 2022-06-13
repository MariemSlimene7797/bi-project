import { AreaChartOutlined, BarChartOutlined, FundOutlined, PieChartOutlined, TableOutlined } from '@ant-design/icons';
import React, { createContext, useState } from 'react';
import { ReactGridLayoutProps } from 'react-grid-layout';

export type DashboardElementType = {
  itemID?: React.Key;
  key: React.Key;
  tboxItemType: 'Pie' | 'Bar' | 'Area' | 'Table' | 'Stat';
  label?: string;
  title?: string;
  icon?: React.ReactNode;
  gridLayout?: Pick<ReactGridLayoutProps, 'layout'>;
};
const gridLayout: ReactGridLayoutProps = {
  isDraggable: true,
  // isResizable: true;

  rowHeight: 30,
  preventCollision: true,
  compactType: null,
  cols: 12
};

export type ToolboxElementType = Required<DashboardElementType>;

interface IToolBoxContext {
  // dashboard
  dashboardElements: DashboardElementType[];
  AddDashboardElement: (el: DashboardElementType) => void;
  DeleteDashboardElement: (el: DashboardElementType) => void;
  // toolbox
  toolboxElements: ToolboxElementType[];
  AddToolboxElement: (el: ToolboxElementType) => void;
  DeleteToolboxElement: (el: ToolboxElementType) => void;
}

const ElementType = ['Bar', 'Pie', 'Area', 'Table', 'Stat'] as const;
export type Tool = typeof ElementType[number];

const TBOX_ELEMENTS: ToolboxElementType[] = [
  { itemID: '0', key: '0', icon: <PieChartOutlined />, label: 'Pie Chart', title: '', tboxItemType: 'Pie', gridLayout },
  {
    itemID: '1',
    key: '1',
    icon: <BarChartOutlined />,
    label: 'Bar Chart',
    title: '',
    tboxItemType: 'Bar',
    gridLayout
  },
  {
    itemID: '2',
    key: '2',
    icon: <AreaChartOutlined />,
    label: 'Area Chart',
    title: '',
    tboxItemType: 'Area',
    gridLayout
  },
  {
    itemID: '3',
    key: '3',
    icon: <TableOutlined />,
    label: 'Data Table',
    title: '',
    tboxItemType: 'Table',
    gridLayout
  },
  {
    itemID: '4',
    key: '4',
    icon: <FundOutlined />,
    label: 'Statistic Card',
    title: '',
    tboxItemType: 'Stat',
    gridLayout
  }
];
export const ToolBoxContext = createContext<IToolBoxContext>({} as IToolBoxContext);
const ToolBoxContextProvider: React.FC = ({ children }) => {
  const [dashboardElements, setDashboardElements] = useState<DashboardElementType[]>([]);
  const [toolboxElements, setToolboxElements] = useState<ToolboxElementType[]>(TBOX_ELEMENTS);
  const AddDashboardElement = (el: DashboardElementType) => {
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
    <ToolBoxContext.Provider
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
    </ToolBoxContext.Provider>
  );
};

export default ToolBoxContextProvider;
