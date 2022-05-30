import React from 'react';
import AppLayout from './AppLayout';

import AuthContextProvider from './contexts/AuthContext';
import LanguageContextProvider from './contexts/LanguageContext';
import LayoutContextProvider from './contexts/LayoutContext';

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <LanguageContextProvider>
        <LayoutContextProvider>
          <AppLayout />
        </LayoutContextProvider>
      </LanguageContextProvider>
    </AuthContextProvider>
  );
};

export default App;
