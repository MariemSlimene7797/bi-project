import React, { createContext, useState } from 'react';
/**allows the control of the collapse caracteristic of the sider as well as the change of the toggle button */
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
