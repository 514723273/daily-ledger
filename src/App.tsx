import React from 'react';
import GlobalStyle from './style';
import Header from './components/header';
import Calendar from './components/calendar';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Calendar />
    </>
  );
};

export default App;
