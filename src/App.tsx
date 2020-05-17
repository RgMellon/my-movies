import React from 'react';

import GlobalStyles from './styles/global';

import Home from './pages/Home';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Home />
      </AppProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
