import React from 'react';
import 'antd/dist/antd.min.css';
import AppLayout from './AppLayout';
import Dashboard from './pages/Dashboard';

interface AppProps {}

const App: React.FC<AppProps> = () => {

      return (
            <>
      <AppLayout/>
      <Dashboard/>
      </>
      )
};

export default App;

