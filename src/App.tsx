import React from 'react';
import 'antd/dist/antd.min.css';
import AppLayout from './AppLayout';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <AppLayout />
      <Dashboard />
    </>
  );
};

export default App;
