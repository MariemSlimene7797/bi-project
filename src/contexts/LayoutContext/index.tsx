import React, { createContext, useState } from 'react';

interface ILayoutContext {
  /** get the state of the sider (collapsed or not) */
  collapsed: boolean;
  /** toggle the sider (open or close) */
  toggleSider: () => void;
}

export const LayoutContext = createContext<ILayoutContext>({} as ILayoutContext);
const LayoutContextProvider: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggleSider = () => {
    setCollapsed(!collapsed);
  };
  return (
    <LayoutContext.Provider
      value={{
        collapsed,
        toggleSider
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;
