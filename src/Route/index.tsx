import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
