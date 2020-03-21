import React from 'react';
import { Theme } from '../theme';

const App = ({ Component, pageProps }) => {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
};

export default App;
