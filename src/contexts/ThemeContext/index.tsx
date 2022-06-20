import React, { createContext, useContext } from 'react';

interface IThemeContext {
  theme: 'dark' | 'light';
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
const ThemeContextProvider: React.FC = ({ children }) => {
  return <ThemeContext.Provider value={{ theme: 'dark' }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = (): IThemeContext => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};
export default ThemeContextProvider;
