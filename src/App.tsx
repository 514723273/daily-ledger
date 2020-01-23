import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './style';
import IconfontGlobalStyle from './assets/iconfont/iconfont';
import store from './store';

const App: React.FC = () => {
  return (
    <>
      <IconfontGlobalStyle />
      <GlobalStyle />
      <Provider store={store}>
        <HashRouter>
          <Routes />
        </HashRouter>
      </Provider>
    </>
  );
};

export default App;
