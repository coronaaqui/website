import React from 'react';
import { Theme } from '../theme';
import 'antd/lib/select/style/index.css';
import 'antd/lib/style/index.css';
import 'antd/lib/timeline/style/index.css';
import { Provider } from 'react-redux';
import { configureStore } from '../redux/configureStore';

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={configureStore()}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </Provider>
  );
};

export default App;
