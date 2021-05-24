import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import NotFound from './NotFound';

const Containers = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/weather-app'>
          <Redirect to='/weather-app/home' />
        </Route>
        <Route exact path='/weather-app/home' component={() => <Home />} />
        <Route component={() => <NotFound />} />
      </Switch>
    </Layout>
  </Router>
);

export default Containers;
