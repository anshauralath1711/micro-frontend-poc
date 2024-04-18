import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { StoreProvider } from 'store/store';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth',
});

const App = ({ history, onSignIn }) => {
  return (
    <StoreProvider>
      <div>
        <StylesProvider generateClassName={generateClassName}>
          <Router history={history}>
            <Switch>
              <Route exact path='/auth/signin'>
                <Signin onSignIn={onSignIn} />
              </Route>
              <Route exact path='/auth/signup'>
                <Signup onSignIn={onSignIn} />
              </Route>
            </Switch>
          </Router>
        </StylesProvider>
      </div>
    </StoreProvider>
  );
};

export default App;
