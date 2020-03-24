import React from 'react';
import { Theme } from '../theme';
import { Provider } from 'react-redux';
import { configureStore } from '../redux/configureStore';

import 'antd/lib/select/style/index.css';
import 'antd/lib/style/index.css';
import 'antd/lib/timeline/style/index.css';
import 'antd/lib/list/style/index.css';
import 'antd/lib/checkbox/style/index.css';
import 'antd/lib/badge/style/index.css';
import 'antd/lib/input/style/index.css';

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
