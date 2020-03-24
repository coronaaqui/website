import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopM: '1200px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
const container = `
  margin: 0 auto;
  width: 1380px;
  max-width:100%;
`;
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
    scales: ['#FCFCFC', '#F4F4F4', '#CCCCCC', '#BABABA']
  },
  black: {
    default: '#000000'
  }
};

const semanticColors = {
  success: {
    default: colors.green.default
  },
  warning: {
    default: colors.yellow.default
  },
  danger: {
    default: colors.orange.default
  },
  info: {
    default: colors.blue.default
  }
};
const shadows = {
  lg: `box-shadow: 0px 0px 10px #0000001A;`,
  default: `box-shadow: 0px 0px 10px #0000000D;`
};
const typography = {
  titles: {
    h1: `
    font-size: 30px;
    color: ${colors.primary.default};
    font-weight: 500;
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
      font-size: 15px;
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
    padding-left: 2rem;
    padding-right: 2rem;
    
    @media only screen and ${device.tablet}{
      padding-left: initial;
      padding-right: initial;
    }
    `,

  // padding-left: 5vw;
  // padding-right: 5vw;

  // @media only screen and ${device.laptop} {
  //   padding-left: 8vw;
  //   padding-right: 8vw;
  // }

  // @media only screen and ${device.laptopL} {
  //   padding-left: 12vw;
  //   padding-right: 12vw;
  // }

  containerPaddingTop: `
    padding-top: 2rem;
    padding-bottom: 2rem;

    @media only screen and ${device.tablet}{
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  `
};

const theme = {
  colors: {
    ...colors,
    semantic: semanticColors
  },
  shadows,
  typography,
  paddings,
  device,
  container
};

export const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
