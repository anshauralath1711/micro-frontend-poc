import React, { lazy, Suspense, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import { createBrowserHistory } from 'history';
import Header from './components/Header';
import Progress from './components/Progress';
import { useStore } from 'store/store';

const MarketingLazy = lazy(() => import('./components/Marketing'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'container',
});

const history = createBrowserHistory();

const App = () => {
  const { userStore } = useStore();

  useEffect(() => {
    if (userStore?.userInfo !== null) {
      history.push('/dashboard');
    }
  }, [userStore.userInfo]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path='/auth'>
                <AuthLazy />
              </Route>
              <Route path='/dashboard'>
                {!useStore?.userInfo && <Redirect to='/' />}
                <DashboardLazy />
              </Route>
              <Route exact path='/' component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;
