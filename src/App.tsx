import React from 'react';
import AppLayout from './AppLayout';

import AuthContextProvider from './contexts/AuthContext';
import LanguageContextProvider from './contexts/LanguageContext';
import LayoutContextProvider from './contexts/LayoutContext';
import ModalSiderContext from './contexts/ModalSiderContext';
import ToolBoxContextProvider from './contexts/ToolBoxContext';

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <LanguageContextProvider>
        <LayoutContextProvider>
          <ToolBoxContextProvider>
            <ModalSiderContext>
              <AppLayout />
            </ModalSiderContext>
          </ToolBoxContextProvider>
        </LayoutContextProvider>
      </LanguageContextProvider>
    </AuthContextProvider>
  );
};

export default App;
