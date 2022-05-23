import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './routes';

const Navigation: React.FC = () => {
  return (
    <Switch>
      {routes.map((el, key) => (
        <Route exact={el.exact} key={key} path={el.path} component={el.component} />
      ))}
    </Switch>
  );
};

export default Navigation;
