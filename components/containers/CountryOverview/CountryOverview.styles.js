import styled, { css } from 'styled-components';
import { Title, Text } from '../../elements/Typography';

export const countryOverviewWithStyle = component =>
  styled(component)(
    ({ theme }) => css`
      display: flex;
      padding-top: 3rem;

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
