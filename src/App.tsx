import React from 'react';
import AppLayout from './AppLayout';
import AuthContextProvider from './contexts/AuthContext';
import LanguageContextProvider from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <LanguageContextProvider>
        <AppLayout />
      </LanguageContextProvider>
    </AuthContextProvider>
  );
};

export default App;
