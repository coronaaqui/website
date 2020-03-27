import styled, { css } from 'styled-components';

const style = ({ theme }) => css`
  align-items: center;
  background-color: #fff;
  margin-top:30px;
  .container {
    ${theme.container}
    ${theme.paddings.containerPadding}
    .group {
      display:grid;
      gap:30px;
      grid-template-columns:repeat(2,1fr);
      @media only screen and ${theme.device.mobileL} {
        grid-template-columns:repeat(3,1fr);  
      }
      @media only screen and ${theme.device.tablet} {
        grid-template-columns:repeat(5,1fr);
        
      }
      .ant-select {
        grid-column: span 2;
        @media only screen and ${theme.device.mobileL} {
        grid-column: span 3;
      }
        @media only screen and ${theme.device.tablet} {
          grid-column: span 2;
        }
      }
    }
  }
`;

export const regionOverviewWithStyle = component => styled(component)(style);
