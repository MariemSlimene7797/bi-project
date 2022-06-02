import React, { createContext, useState } from 'react';

interface IToolBoxContext {
  // dashboard
  dashboardElements: DashboardElementsType[];
  AddDashboardElement: (el: DashboardElementsType) => void;
  DeleteDashboardElement: (el: DashboardElementsType) => void;
  // toolbox
  toolboxElements: ToolboxElementsType[];
  AddToolboxElement: (el: ToolboxElementsType) => void;
  DeleteToolboxElement: (el: ToolboxElementsType) => void;
}

export type DashboardElementsType = {
  id: number;
  title: string;
  type: 'A' | 'B';
};

// how to extend a type in typescript ItemType
export type ToolboxElementsType = {
  id: number;
  title: string;
};
// export type ItemType = ToolboxElementsType & {};

// delete these elements after implementation of add tbox elements
export const TBOX_ELEMENTS: ToolboxElementsType[] = [
  { id: 0, title: 'Component1' },
  { id: 1, title: 'Component2' },
  { id: 2, title: 'Component3' },
  { id: 3, title: 'Component4' },
  { id: 4, title: 'Component5' },
  { id: 5, title: 'Component6' }
];
export const ToolBoxContext = createContext<IToolBoxContext>({} as IToolBoxContext);
const ToolBoxContextProvider: React.FC = ({ children }) => {
  const [dashboardElements, setDashboardElements] = useState<DashboardElementsType[]>([]);
  const [toolboxElements, setToolboxElements] = useState<ToolboxElementsType[]>(TBOX_ELEMENTS);
  const AddDashboardElement = (el: DashboardElementsType) => {
    setDashboardElements([...dashboardElements, el]);
  };
  const DeleteDashboardElement = (el: DashboardElementsType) => {
    setDashboardElements(dashboardElements.filter((_el) => _el.id !== el.id));
  };
  const AddToolboxElement = (el: ToolboxElementsType) => {
    setToolboxElements([...toolboxElements, el]);
  };
  const DeleteToolboxElement = (el: ToolboxElementsType) => {
    setToolboxElements(toolboxElements.filter((_el) => _el.id !== el.id));
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
