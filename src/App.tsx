import React from 'react';
import AuthContextProvider from './contexts/AuthContext';
import CategoryReportcontextsProvider from './contexts/CategoryReport';
import LanguageContextProvider from './contexts/LanguageContext';
import LayoutContextProvider from './contexts/LayoutContext';
import ReportingModalContextProvider from './contexts/ReportingModalContext';
import ThemeContextProvider from './contexts/ThemeContext';
import Navigation from './Route';

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <LayoutContextProvider>
            <Navigation />
          </LayoutContextProvider>
        </ThemeContextProvider>
      </LanguageContextProvider>
    </AuthContextProvider>
  );
};

export default App;
