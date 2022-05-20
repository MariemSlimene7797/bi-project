import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../Route';
import LayoutContent from './LayoutContent';
import LayoutFooter from './LayoutFooter';
import LayoutHeader from './LayoutHeader';
import Spinner from '../components/Spinner';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppLayoutProps {}

const AppLayout: React.FC<AppLayoutProps> = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Router>
        <Layout style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
          <LayoutHeader />
          <LayoutContent>
            <Navigation />
          </LayoutContent>
          <LayoutFooter />
        </Layout>
      </Router>
    </React.Suspense>
  );
};

export default AppLayout;
