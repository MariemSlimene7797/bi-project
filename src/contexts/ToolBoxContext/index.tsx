import { BarChartOutlined, PieChartOutlined } from '@ant-design/icons';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import React, { createContext, useState } from 'react';

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

const ElementType = ['Bar', 'Pie'] as const;
export type Tool = typeof ElementType[number];

export type DashboardElementType = {
  id: React.Key;
  title: string;
  type: Tool;
};

// how to extend a type in typescript ItemType
export type ToolboxElementType = ItemType & {
  type: Tool;
};

// delete these elements after implementation of add tbox elements
const TBOX_ELEMENTS: ToolboxElementType[] = [
  { key: '0', icon: <PieChartOutlined />, label: 'Pie Chart', type: 'Pie' },
  { key: '1', icon: <BarChartOutlined />, label: 'Bar Chart', type: 'Bar' }
];
export const ToolBoxContext = createContext<IToolBoxContext>({} as IToolBoxContext);
const ToolBoxContextProvider: React.FC = ({ children }) => {
  const [dashboardElements, setDashboardElements] = useState<DashboardElementType[]>([]);
  const [toolboxElements, setToolboxElements] = useState<ToolboxElementType[]>(TBOX_ELEMENTS);
  const AddDashboardElement = (el: DashboardElementType) => {
    setDashboardElements([...dashboardElements, el]);
  };
  const DeleteDashboardElement = (el: DashboardElementType) => {
    setDashboardElements(dashboardElements.filter((_el) => _el.id !== el.id));
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
