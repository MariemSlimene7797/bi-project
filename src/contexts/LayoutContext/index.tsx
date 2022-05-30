import React, { createContext, useContext, useState } from 'react';

interface ILayoutContext {
  collapsed: boolean;
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
