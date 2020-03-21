import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

const colors = {
  // semantic colors
  primary: {
    default: '#479A90',
    hover: '#1C3936',
    dark: '#1C3936'
  },
  secondary: {
    default: '',
    hover: ''
  },

  // raw colors
  orange: {
    default: '#D05D2B'
  },
  yellow: {
    default: '#EAC733'
  },
  green: {
    default: '#16A870'
  },
  blue: {
    default: '#0477BF'
  },
  grey: {
    default: '#CCCCCC',
    scales: ['#F4F4F4', '#CCCCCC', '#BABABA']
  },
  black: {
    default: '#000000'
  }
};

const shadows = {
  default: `0px 0px 10px #0000001A`
};

const typography = {
  titles: {
    h1: `
    font-size: 30px;
    color: ${colors.primary.default}
  `,
    h2: `
      font-size: 24px;
      font-weight: 600;
      color: ${colors.primary.dark}
    `
  },
  text: {
    sm: `
      font-size: 12px;`,
    md: `
      font-size: 14px;
    `,
    lg: `
      font-size: 16px;
    `
  }
};

const paddings = {
  base: `1rem`,
  md: `30rem`,

  containerPadding: `
    padding-left: 10rem;
    padding-right: 10rem;
  `
};

const theme = {
  colors,
  shadows,
  typography,
  paddings
};

export const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
