import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle(
  () => css`
    @import url('https://fonts.googleapis.com/css?family=Mukta:300,400,500,700&display=swap');

    body {
      font-family: 'Mukta', sans-serif !important;
    }
  `
);

export { GlobalStyle };
