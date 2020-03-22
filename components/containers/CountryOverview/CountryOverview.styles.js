import styled, { css } from 'styled-components';
import { Text, Title } from '../../elements/Typography';
export const countryOverviewWithStyle = component =>
  styled(component)(
    ({ theme }) => css`
      /* display: flex;
      flex-direction: row;
      justify-content: space-between; */
      justify-content: space-between;
      ${theme.paddings.containerPaddingTop}
      ${theme.paddings.containerPadding}
      display:grid;
      gap:15px;
      margin: 0 auto;
      width: 1180px;
      max-width:100%;
      grid-template-columns: 1fr;
      @media only screen and ${theme.device.tablet} {
        grid-template-columns: auto 480px;
      }
      @media only screen and ${theme.device.laptopM} {
        grid-template-columns: 220px auto 480px;
      }
      /* @media only screen and ${theme.device.laptopM} {
      } */
      .indicators {
        display:grid;
        gap:15px;
        grid-template-columns:1fr;
        grid-column:span 1;
        @media only screen and ${theme.device.tablet}{
          grid-column:span 2;
          margin-bottom: 0;
          grid-template-columns:220px repeat(2,1fr);
          grid-auto-rows:54px;
        }
        @media only screen and ${theme.device.laptop}{
          grid-template-columns:220px repeat(4,1fr);

        }
        @media only screen and ${theme.device.laptopM}{
          grid-column:span 1;
          display:block;
        
        }
        .overall-indicator {
          margin-bottom: 0;
          grid-row:span 2;
          height:unset;
          @media only screen and ${theme.device.laptopM}{
            grid-row:span 1;
            margin-bottom: 45px;
          }
        }
        .indicator {
          margin-bottom: 0;
          align-self:center;
          @media only screen and ${theme.device.laptopM} {
            margin-bottom: 20px;
            margin-left:0;
          }
          
        }
        >p{
          grid-column:span 1;
          align-self:center;
          @media only screen and ${theme.device.tablet} {
            grid-column:span 3;
          }
          @media only screen and ${theme.device.laptop} {
            grid-column:span 4;
          }
        }
      }

      .popular-searches {
        margin-top: 35px;
        
        .title {
          color: ${theme.colors.primary.dark};
          font-weight: 500;
          margin-bottom: 20px;
        }

        .list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .item {
            width: 130px;
            margin-bottom: 5px;

            a {
              font-size: 16px;
              float: left;
              margin-left: 8px;
              font-weight: 300;
            }
          }
        }
      }

      .map {
        text-align: center;
        svg{
          max-width:100%;
        }
      }
      .state-selector {
        /* width: 480px; */

        article {
          text-align: center;
          ${Title.h2} {
            margin-bottom: 14px;
          }

          ${Text} {
            width: 90%;
            margin: 0 auto;
          }
        }

        .ant-select {
          display: block;
          margin: 20px auto;
        }
      }
    `
  );
