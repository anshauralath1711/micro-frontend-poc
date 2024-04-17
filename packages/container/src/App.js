import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Marketing from './components/Marketing';
import Header from './components/Header';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';

const generateClassName = createGenerateClassName({
  productionPrefix: 'container',
});

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <Marketing />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
