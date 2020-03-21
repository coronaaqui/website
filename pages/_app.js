import React from 'react';
import { Theme } from '../theme';
import 'antd/lib/select/style/index.css';
import 'antd/lib/style/index.css'; /* 
import 'antd/lib/icon/style/inde.css'; */

const App = ({ Component, pageProps }) => {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
};

export default App;
