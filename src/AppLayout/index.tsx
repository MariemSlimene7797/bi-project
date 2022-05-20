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
    <Router>
      <Layout style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <LayoutHeader />
        <React.Suspense fallback={<Spinner />}>
          <LayoutContent>
            <Navigation />
          </LayoutContent>
        </React.Suspense>
        <LayoutFooter />
      </Layout>
    </Router>
  );
};

export default AppLayout;
