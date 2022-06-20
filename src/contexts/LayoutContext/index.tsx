import React, { createContext, useContext, useState } from 'react';

interface ILayoutContext {
  /** get the state of the sider (collapsed or not) */
  collapsed: boolean;
  /** toggle the sider (open or close) */
  toggleSider: () => void;
}

const LayoutContext = createContext<ILayoutContext>({} as ILayoutContext);
const LayoutContextProvider: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggleSider = () => {
    setCollapsed(!collapsed);
  };
  return <LayoutContext.Provider value={{ collapsed, toggleSider }}>{children}</LayoutContext.Provider>;
};

export const useLayoutContext = (): ILayoutContext => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayoutContext must be used within a LayoutContextProvider');
  }
  return context;
};
export default LayoutContextProvider;
