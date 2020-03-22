import styled, { css } from 'styled-components';
import { Title, Text } from '../../elements/Typography';

export const countryOverviewWithStyle = component =>
  styled(component)(
    ({ theme }) => css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 4rem;
      ${theme.paddings.containerPadding}

      .indicators {
        width: 20%;

        .overall-indicator {
          margin-bottom: 45px;
        }

        .indicator {
          margin-bottom: 20px;
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
        width: 35%;
      }
      .state-selector {
        width: 480px;

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
