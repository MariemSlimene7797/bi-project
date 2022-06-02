import React from 'react';
import AppLayout from './AppLayout';

import AuthContextProvider from './contexts/AuthContext';
import LanguageContextProvider from './contexts/LanguageContext';
import LayoutContextProvider from './contexts/LayoutContext';
import ToolBoxContextProvider from './contexts/ToolBoxContext';

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <LanguageContextProvider>
        <LayoutContextProvider>
          <ToolBoxContextProvider>
            <AppLayout />
          </ToolBoxContextProvider>
        </LayoutContextProvider>
      </LanguageContextProvider>
    </AuthContextProvider>
  );
};

export default App;
