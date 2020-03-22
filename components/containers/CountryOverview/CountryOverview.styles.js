import styled, { css } from 'styled-components';
import { Text, Title } from '../../elements/Typography';

export const countryOverviewWithStyle = component =>
  styled(component)(
    ({ theme }) => css`
      /* display: flex;
      flex-direction: row;
      justify-content: space-between; */
      padding-top: 4rem;
      ${theme.paddings.containerPadding}
      display:grid;
      grid-template-columns: 220px auto 480px;
      gap:15px;
      margin: 0 auto;
      width: 1180px;
      max-width:100%;
      @media only screen and (max-width: 1200px) {
        grid-template-columns: auto 480px;
      }
      @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
      }
      .indicators {
        @media only screen and (max-width: 1200px) {
          grid-column:span 2;
          display:grid;
          grid-template-columns:220px repeat(4,1fr);
          gap:15px;
        }
        @media only screen and (max-width: 1024px) {
            margin-bottom: 0;
            grid-template-columns:220px repeat(2,1fr);
            grid-auto-rows:54px;
        }
        @media only screen and (max-width: 768px) {
          grid-column:span 1;
        }
        @media only screen and (max-width: 600px) {
          grid-template-columns:1fr;
        }
        .overall-indicator {
          margin-bottom: 45px;
          @media only screen and (max-width: 1200px) {
            margin-bottom: 0;
            grid-row:span 2;
            height:unset;
          }
        }
        .indicator {
          margin-bottom: 20px;
          margin-left:0;
          @media only screen and (max-width: 1200px) {
            margin-bottom: 0;
            align-self:center;
          }
          
        }
        >p{
          @media only screen and (max-width: 1200px) {
            grid-column:span 4;
          }
          @media only screen and (max-width: 1024px) {
            grid-column:span 3;
          }
          @media only screen and (max-width: 600px) {
            grid-column:span 1;

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
