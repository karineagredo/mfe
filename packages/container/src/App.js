import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
const App = () => {
  console.log('6');
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp></MarketingApp>
      </div>
    </BrowserRouter>
  );
};

export default App;
