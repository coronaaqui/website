import React from 'react';
import withRedux from 'next-redux-wrapper';
import { Theme } from '../theme';
import { Provider } from 'react-redux';
import { configureStore } from '../src/redux/configureStore';
import 'antd/lib/select/style/index.css';
import 'antd/lib/style/index.css';
import 'antd/lib/timeline/style/index.css';
import 'antd/lib/list/style/index.css';
import 'antd/lib/checkbox/style/index.css';
import 'antd/lib/badge/style/index.css';
import 'antd/lib/input/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/empty/style/index.css';
import 'antd/lib/popover/style/index.css';

const App = ({ Component, pageProps, store }) => {
  return (
    <Provider store={store}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </Provider>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //Anything returned here can be accessed by the client
  return { pageProps };
};

export default withRedux(configureStore)(App);
