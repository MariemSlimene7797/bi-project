import React, { CSSProperties } from 'react';
import { Layout } from 'antd';
import { Redirect, Route } from 'react-router-dom';
import LayoutContent from './LayoutContent';
import LayoutFooter from './LayoutFooter';
import LayoutHeader from './LayoutHeader';
import Spinner from '../components/Spinner';
import routes from '../Route/routes';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppLayoutProps {}

const AppLayout: React.FC<AppLayoutProps> = () => {
  return (
    <Layout style={LayoutStyles}>
      <LayoutHeader />
      <React.Suspense fallback={<Spinner />}>
        <LayoutContent>
          {routes.map((el, key) => (
            <Route exact={el.exact} key={key} path={el.path} component={el.component} />
          ))}
          <Route exact path="/login">
            <Redirect to="/" />
          </Route>
        </LayoutContent>
      </React.Suspense>
      <LayoutFooter />
    </Layout>
  );
};

export default AppLayout;

const LayoutStyles: CSSProperties = {
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column'
};
